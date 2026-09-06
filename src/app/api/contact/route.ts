import { NextResponse } from "next/server";
import {
  budgetRanges,
  projectTypes,
  timelines,
  type ContactPayload,
} from "@/lib/data/contact";

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isContactPayload(value: unknown): value is ContactPayload {
  if (!value || typeof value !== "object") return false;
  const body = value as Record<string, unknown>;
  const budget = body.budget;
  const timeline = body.timeline;

  return (
    typeof body.name === "string" &&
    typeof body.company === "string" &&
    typeof body.email === "string" &&
    typeof body.description === "string" &&
    projectTypes.includes(body.projectType as (typeof projectTypes)[number]) &&
    (budget === "" ||
      budgetRanges.includes(budget as (typeof budgetRanges)[number])) &&
    (timeline === "" ||
      timelines.includes(timeline as (typeof timelines)[number]))
  );
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  if (!isContactPayload(body)) {
    return NextResponse.json(
      { ok: false, error: "Please complete the required fields." },
      { status: 400 },
    );
  }

  const payload: ContactPayload = {
    name: body.name.trim(),
    company: body.company.trim(),
    email: body.email.trim(),
    projectType: body.projectType,
    budget: body.budget,
    timeline: body.timeline,
    description: body.description.trim(),
  };

  if (payload.name.length < 2 || payload.description.length < 20 || !isEmail(payload.email)) {
    return NextResponse.json(
      {
        ok: false,
        error: "Please provide a valid name, email, and a short project description.",
      },
      { status: 400 },
    );
  }

  // Placeholder: connect an email or CRM provider here.
  console.info("[contact] inquiry received", {
    company: payload.company,
    projectType: payload.projectType,
    budget: payload.budget,
  });

  return NextResponse.json({ ok: true });
}
