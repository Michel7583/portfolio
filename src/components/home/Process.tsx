import { getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/Section";

const steps = [
  {
    number: "01",
    titleKey: "discover",
    descKey: "discoverDesc",
    details: ["discover1", "discover2", "discover3"],
  },
  {
    number: "02",
    titleKey: "design",
    descKey: "designDesc",
    details: ["design1", "design2", "design3"],
  },
  {
    number: "03",
    titleKey: "build",
    descKey: "buildDesc",
    details: ["build1", "build2", "build3"],
  },
  {
    number: "04",
    titleKey: "validate",
    descKey: "validateDesc",
    details: ["validate1", "validate2", "validate3"],
  },
  {
    number: "05",
    titleKey: "launch",
    descKey: "launchDesc",
    details: ["launch1", "launch2", "launch3"],
  },
  {
    number: "06",
    titleKey: "scale",
    descKey: "scaleDesc",
    details: ["scale1", "scale2", "scale3"],
  },
] as const;

export async function Process() {
  const t = await getTranslations("Process");
  const th = await getTranslations("Home");

  return (
    <Section title={th("processTitle")} description={th("processDesc")}>
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step) => (
          <li key={step.number} className="h-full">
            <article className="flex h-full min-h-[22rem] flex-col rounded-2xl border border-border bg-card p-5 sm:p-6">
              <p className="font-mono text-xs tracking-[0.16em] text-accent">
                {step.number}
              </p>
              <h3 className="mt-3 text-lg font-semibold tracking-[-0.03em] uppercase">
                {t(step.titleKey)}
              </h3>
              <p className="mt-2 text-[15px] leading-6 text-muted">
                {t(step.descKey)}
              </p>
              <ul className="mt-5 flex-1 space-y-2.5 border-t border-border pt-5">
                {step.details.map((detailKey) => (
                  <li
                    key={detailKey}
                    className="flex gap-2 text-sm leading-6 text-foreground/75"
                  >
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70"
                      aria-hidden
                    />
                    {t(detailKey)}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
