"use client";

import { useLocale, useTranslations } from "next-intl";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { site } from "@/lib/site";
import type { ChatMessage } from "@/lib/chat";
import { BrandMark } from "@/components/layout/BrandMark";
import { cn } from "@/lib/utils";

export function ChatWidget() {
  const t = useTranslations("Chat");
  const locale = useLocale();
  const panelId = useId();
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const opening = useMemo<ChatMessage>(
    () => ({
      role: "assistant",
      content: t("opening", { name: site.name }),
    }),
    [t],
  );

  const suggestions = useMemo(
    () => [t("suggestion1"), t("suggestion2"), t("suggestion3")],
    [t],
  );

  const [messages, setMessages] = useState<ChatMessage[]>([opening]);

  useEffect(() => {
    setMessages([opening]);
  }, [opening]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const frame = window.requestAnimationFrame(() => inputRef.current?.focus());
    return () => window.cancelAnimationFrame(frame);
  }, [open]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages, pending, open]);

  async function send(text: string) {
    const content = text.trim();
    if (!content || pending) return;

    const nextMessages: ChatMessage[] = [...messages, { role: "user", content }];
    setMessages(nextMessages);
    setDraft("");
    setPending(true);
    setError(null);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale,
          messages: nextMessages.filter((item) => item.content !== opening.content || item.role !== "assistant"),
        }),
      });
      const data = (await response.json()) as { ok?: boolean; reply?: string; error?: string };

      if (!response.ok || !data.ok || !data.reply) {
        throw new Error(data.error ?? t("error"));
      }

      setMessages((current) => [...current, { role: "assistant", content: data.reply! }]);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : t("error"));
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="pointer-events-none fixed right-4 bottom-4 z-[60] sm:right-6 sm:bottom-6">
      {open ? (
        <section
          id={panelId}
          aria-label={t("title", { name: site.name })}
          className="pointer-events-auto mb-3 flex h-[min(32rem,calc(100dvh-7.5rem))] w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl border border-border bg-overlay shadow-[var(--shadow)] backdrop-blur-xl"
        >
          <header className="flex items-center gap-3 border-b border-border px-4 py-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card">
              <BrandMark className="h-5 w-5" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold tracking-[-0.02em]">
                {t("title", { name: site.name })}
              </p>
              <p className="text-xs text-muted">{t("subtitle")}</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card text-foreground hover:bg-card-hover"
              aria-label={t("close")}
            >
              <X className="h-4 w-4" aria-hidden />
            </button>
          </header>

          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message, index) => (
              <p
                key={`${message.role}-${index}`}
                className={cn(
                  "max-w-[90%] rounded-2xl px-3.5 py-2.5 text-sm leading-6",
                  message.role === "assistant"
                    ? "bg-card text-foreground"
                    : "ml-auto bg-accent-soft text-foreground",
                )}
              >
                {message.content}
              </p>
            ))}
            {pending ? (
              <p className="max-w-[90%] rounded-2xl bg-card px-3.5 py-2.5 text-sm text-muted">
                {t("thinking")}
              </p>
            ) : null}
            {error ? <p className="text-xs leading-5 text-red-400">{error}</p> : null}
            {messages.length === 1 && !pending ? (
              <div className="flex flex-wrap gap-2 pt-1">
                {suggestions.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => send(item)}
                    className="rounded-full border border-border bg-card px-3 py-1.5 text-left text-xs text-foreground/80 hover:border-border-strong hover:bg-card-hover"
                  >
                    {item}
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          <form
            className="border-t border-border p-3"
            onSubmit={(event) => {
              event.preventDefault();
              void send(draft);
            }}
          >
            <label className="sr-only" htmlFor="chat-input">
              {t("placeholder")}
            </label>
            <div className="flex items-end gap-2 rounded-2xl border border-border bg-card px-3 py-2">
              <textarea
                id="chat-input"
                ref={inputRef}
                rows={1}
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    void send(draft);
                  }
                }}
                placeholder={t("placeholder")}
                className="max-h-28 min-h-8 flex-1 resize-none bg-transparent text-sm leading-6 text-foreground outline-none placeholder:text-muted"
              />
              <button
                type="submit"
                disabled={pending || !draft.trim()}
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-strong text-inverse disabled:opacity-40"
                aria-label={t("send")}
              >
                <Send className="h-3.5 w-3.5" aria-hidden />
              </button>
            </div>
          </form>
        </section>
      ) : null}

      <button
        type="button"
        className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-border bg-accent-strong px-4 py-3 text-sm font-medium text-inverse shadow-[var(--shadow)]"
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X className="h-4 w-4" aria-hidden /> : <MessageCircle className="h-4 w-4" aria-hidden />}
        {open ? t("close") : t("open")}
      </button>
    </div>
  );
}
