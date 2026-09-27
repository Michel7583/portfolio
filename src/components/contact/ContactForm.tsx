"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import {
  budgetRanges,
  projectTypes,
  timelines,
  type ContactPayload,
} from "@/lib/data/contact";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const initial: ContactPayload = {
  name: "",
  company: "",
  email: "",
  projectType: "",
  budget: "",
  timeline: "",
  description: "",
};

type FieldErrors = Partial<Record<keyof ContactPayload, string>>;

const fieldClass =
  "w-full rounded-xl border bg-card px-3.5 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/70 focus:border-accent/50";

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function ContactForm() {
  const t = useTranslations("Form");
  const ts = useTranslations("Site");
  const tc = useTranslations("Common");
  const [form, setForm] = useState<ContactPayload>(initial);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof ContactPayload, boolean>>>(
    {},
  );
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  const projectTypeLabels = [
    t("typeAi"),
    t("typeBlockchain"),
    t("typeFintech"),
    t("typeSaas"),
    t("typeOther"),
  ];
  const budgetLabels = [
    t("budget1"),
    t("budget2"),
    t("budget3"),
    t("budget4"),
    t("budget5"),
  ];
  const timelineLabels = [
    t("timeline1"),
    t("timeline2"),
    t("timeline3"),
    t("timeline4"),
    t("timeline5"),
  ];

  function validate(current: ContactPayload): FieldErrors {
    const next: FieldErrors = {};
    if (current.name.trim().length < 2) next.name = t("errorName");
    if (current.email.trim() && !isEmail(current.email)) {
      next.email = t("errorEmailInvalid");
    } else if (!current.email.trim()) {
      next.email = t("errorEmailRequired");
    }
    if (!current.projectType) next.projectType = t("errorProjectType");
    if (current.description.trim().length < 20) {
      next.description = t("errorDescription");
    }
    return next;
  }

  function update<K extends keyof ContactPayload>(key: K, value: ContactPayload[K]) {
    setForm((current) => {
      const next = { ...current, [key]: value };
      if (touched[key]) {
        setErrors(validate(next));
      }
      return next;
    });
  }

  function markTouched(key: keyof ContactPayload) {
    setTouched((current) => ({ ...current, [key]: true }));
    setErrors(validate(form));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(form);
    setTouched({
      name: true,
      email: true,
      projectType: true,
      description: true,
    });
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      setMessage(t("errorCorrect"));
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !data.ok) {
        throw new Error(data.error ?? t("errorSend"));
      }

      setStatus("success");
      setMessage(t("successBody"));
      setForm(initial);
      setTouched({});
      setErrors({});
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : t("errorNetwork"),
      );
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-accent/30 bg-accent-soft px-6 py-8"
      >
        <h2 className="text-xl font-semibold tracking-[-0.03em]">
          {t("successTitle")}
        </h2>
        <p className="mt-3 text-sm leading-7 text-foreground/85">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label={t("name")}
          htmlFor="name"
          required
          requiredLabel={tc("required")}
          error={touched.name ? errors.name : undefined}
        >
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder={t("namePlaceholder")}
            aria-invalid={Boolean(touched.name && errors.name)}
            aria-describedby={touched.name && errors.name ? "name-error" : undefined}
            className={cn(fieldClass, touched.name && errors.name ? "border-red-400/40" : "border-border")}
            value={form.name}
            onBlur={() => markTouched("name")}
            onChange={(event) => update("name", event.target.value)}
          />
        </Field>
        <Field label={t("company")} htmlFor="company" requiredLabel={tc("required")}>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            placeholder={t("companyPlaceholder")}
            className={cn(fieldClass, "border-border")}
            value={form.company}
            onChange={(event) => update("company", event.target.value)}
          />
        </Field>
      </div>

      <Field
        label={t("email")}
        htmlFor="email"
        required
        requiredLabel={tc("required")}
        error={touched.email ? errors.email : undefined}
      >
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder={t("emailPlaceholder")}
          aria-invalid={Boolean(touched.email && errors.email)}
          aria-describedby={touched.email && errors.email ? "email-error" : undefined}
          className={cn(fieldClass, touched.email && errors.email ? "border-red-400/40" : "border-border")}
          value={form.email}
          onBlur={() => markTouched("email")}
          onChange={(event) => update("email", event.target.value)}
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-3">
        <Field
          label={t("projectType")}
          htmlFor="projectType"
          required
          requiredLabel={tc("required")}
          error={touched.projectType ? errors.projectType : undefined}
        >
          <select
            id="projectType"
            name="projectType"
            required
            aria-invalid={Boolean(touched.projectType && errors.projectType)}
            aria-describedby={
              touched.projectType && errors.projectType ? "projectType-error" : undefined
            }
            className={cn(
              fieldClass,
              "appearance-none",
              touched.projectType && errors.projectType ? "border-red-400/40" : "border-border",
            )}
            value={form.projectType}
            onBlur={() => markTouched("projectType")}
            onChange={(event) =>
              update("projectType", event.target.value as ContactPayload["projectType"])
            }
          >
            <option value="" disabled>
              {t("selectType")}
            </option>
            {projectTypes.map((type, index) => (
              <option key={type} value={type} className="bg-surface text-foreground">
                {projectTypeLabels[index]}
              </option>
            ))}
          </select>
        </Field>
        <Field label={t("budget")} htmlFor="budget" requiredLabel={tc("required")}>
          <select
            id="budget"
            name="budget"
            className={cn(fieldClass, "appearance-none border-border")}
            value={form.budget}
            onChange={(event) =>
              update("budget", event.target.value as ContactPayload["budget"])
            }
          >
            <option value="">{t("selectBudget")}</option>
            {budgetRanges.map((range, index) => (
              <option key={range} value={range} className="bg-surface text-foreground">
                {budgetLabels[index]}
              </option>
            ))}
          </select>
        </Field>
        <Field label={t("timeline")} htmlFor="timeline" requiredLabel={tc("required")}>
          <select
            id="timeline"
            name="timeline"
            className={cn(fieldClass, "appearance-none border-border")}
            value={form.timeline}
            onChange={(event) =>
              update("timeline", event.target.value as ContactPayload["timeline"])
            }
          >
            <option value="">{t("selectTimeline")}</option>
            {timelines.map((item, index) => (
              <option key={item} value={item} className="bg-surface text-foreground">
                {timelineLabels[index]}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field
        label={t("description")}
        htmlFor="description"
        required
        requiredLabel={tc("required")}
        error={touched.description ? errors.description : undefined}
      >
        <textarea
          id="description"
          name="description"
          required
          rows={6}
          placeholder={t("descriptionPlaceholder")}
          aria-invalid={Boolean(touched.description && errors.description)}
          aria-describedby={
            touched.description && errors.description ? "description-error" : undefined
          }
          className={cn(
            fieldClass,
            "resize-y",
            touched.description && errors.description ? "border-red-400/40" : "border-border",
          )}
          value={form.description}
          onBlur={() => markTouched("description")}
          onChange={(event) => update("description", event.target.value)}
        />
      </Field>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">{ts("responseTime")}</p>
        <Button type="submit" disabled={status === "submitting"} size="lg">
          {status === "submitting" ? t("sending") : t("submit")}
        </Button>
      </div>

      {status === "error" && message ? (
        <p
          role="alert"
          className="rounded-xl border border-red-400/25 bg-red-400/10 px-4 py-3 text-sm text-red-100"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
  required,
  requiredLabel,
  error,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
  requiredLabel: string;
  error?: string;
}) {
  const errorId = `${htmlFor}-error`;
  return (
    <div>
      <label htmlFor={htmlFor} className="block">
        <span className="mb-2 block text-sm font-medium text-foreground/85">
          {label}
          {required ? (
            <span className="text-accent" aria-hidden>
              {" "}
              *
            </span>
          ) : null}
          {required ? <span className="sr-only"> {requiredLabel}</span> : null}
        </span>
        {children}
      </label>
      {error ? (
        <p id={errorId} className="mt-2 text-sm text-red-200">
          {error}
        </p>
      ) : null}
    </div>
  );
}
