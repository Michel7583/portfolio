import { processSteps } from "@/lib/data/process";
import { Section } from "@/components/ui/Section";

export function Process() {
  return (
    <Section
      title="From idea to production"
      description="A clear path from ambiguity to a system you can operate—six stages, same depth, same standard."
    >
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {processSteps.map((step) => (
          <li key={step.number} className="h-full">
            <article className="flex h-full min-h-[22rem] flex-col rounded-2xl border border-border bg-card p-5 sm:p-6">
              <p className="font-mono text-xs tracking-[0.16em] text-accent">
                {step.number}
              </p>
              <h3 className="mt-3 text-lg font-semibold tracking-[-0.03em] uppercase">
                {step.title}
              </h3>
              <p className="mt-2 text-[15px] leading-6 text-muted">
                {step.description}
              </p>
              <ul className="mt-5 flex-1 space-y-2.5 border-t border-border pt-5">
                {step.details.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm leading-6 text-foreground/75"
                  >
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70"
                      aria-hidden
                    />
                    {item}
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
