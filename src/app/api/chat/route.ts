import { NextResponse } from "next/server";
import OpenAI from "openai";
import {
  CHAT_MAX_CHARS,
  CHAT_MAX_MESSAGES,
  chatSystemPrompt,
  type ChatMessage,
} from "@/lib/chat";

function isChatMessage(value: unknown): value is ChatMessage {
  if (!value || typeof value !== "object") return false;
  const item = value as Record<string, unknown>;
  return (
    (item.role === "user" || item.role === "assistant") &&
    typeof item.content === "string"
  );
}

function sanitizeMessages(value: unknown): ChatMessage[] | null {
  if (!Array.isArray(value)) return null;

  const messages = value.filter(isChatMessage).map((item) => ({
    role: item.role,
    content: item.content.trim().slice(0, CHAT_MAX_CHARS),
  }));

  if (messages.length === 0 || messages.length > CHAT_MAX_MESSAGES) {
    return null;
  }

  if (messages.at(-1)?.role !== "user" || !messages.at(-1)?.content) {
    return null;
  }

  return messages;
}

function chatClient() {
  const groqKey = process.env.GROQ_API_KEY;
  const openaiKey = process.env.OPENAI_API_KEY;
  const apiKey = groqKey || openaiKey;
  const usesGroq =
    Boolean(groqKey) ||
    (process.env.OPENAI_BASE_URL ?? "").includes("groq.com");

  return {
    apiKey,
    client: apiKey
      ? new OpenAI({
          apiKey,
          baseURL:
            process.env.OPENAI_BASE_URL ??
            (usesGroq ? "https://api.groq.com/openai/v1" : undefined),
        })
      : null,
    model:
      process.env.OPENAI_MODEL ??
      (usesGroq ? "openai/gpt-oss-20b" : "gpt-4o-mini"),
    fallbacks: usesGroq
      ? ["openai/gpt-oss-20b", "openai/gpt-oss-120b", "qwen/qwen3.6-27b"]
      : ["gpt-4o-mini"],
  };
}

export async function POST(request: Request) {
  const { apiKey, client, model, fallbacks } = chatClient();
  if (!apiKey || !client) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "The assistant is not configured yet. Add a free Groq key as GROQ_API_KEY, or an OpenAI key as OPENAI_API_KEY.",
      },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const incoming =
    body && typeof body === "object"
      ? (body as { messages?: unknown }).messages
      : null;
  const messages = sanitizeMessages(incoming);

  if (!messages) {
    return NextResponse.json(
      { ok: false, error: "Send a short message to continue." },
      { status: 400 },
    );
  }

  const models = [model, ...fallbacks.filter((item) => item !== model)];
  const payload = {
    temperature: 0.4,
    max_tokens: 500,
    messages: [
      { role: "system" as const, content: chatSystemPrompt },
      ...messages,
    ],
  };

  try {
    let lastError: unknown;

    for (const candidate of models) {
      try {
        const completion = await client.chat.completions.create({
          ...payload,
          model: candidate,
        });
        const reply = completion.choices[0]?.message?.content?.trim();
        if (!reply) {
          return NextResponse.json(
            { ok: false, error: "The assistant returned an empty reply." },
            { status: 502 },
          );
        }
        return NextResponse.json({ ok: true, reply });
      } catch (error) {
        lastError = error;
        const code =
          error && typeof error === "object" && "code" in error
            ? String(error.code)
            : "";
        if (code !== "model_not_found") break;
      }
    }

    console.error("[chat] OpenAI request failed", lastError);
    return NextResponse.json(
      { ok: false, error: "The assistant is unavailable right now. Try again shortly." },
      { status: 502 },
    );
  } catch (error) {
    console.error("[chat] OpenAI request failed", error);
    return NextResponse.json(
      { ok: false, error: "The assistant is unavailable right now. Try again shortly." },
      { status: 502 },
    );
  }
}
