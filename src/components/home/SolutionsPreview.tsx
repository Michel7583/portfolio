import { getTranslations } from "next-intl/server";
import { solutions } from "@/lib/data/solutions";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";

export async function SolutionsPreview() {
  const t = await getTranslations("Home");
  const tc = await getTranslations("Common");

  return (
    <Section
      className="bg-panel"
      title={t("solutionsTitle")}
      description={t("solutionsDesc")}
    >
      <div className="grid gap-4 md:grid-cols-2">
        {solutions.map((solution, index) => (
          <Reveal key={solution.slug} delay={index * 0.05}>
            <Card className="h-full p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold tracking-[-0.03em] sm:text-2xl">
                  {solution.title}
                </h3>
                <span className="font-mono text-xs text-muted">
                  0{index + 1}
                </span>
              </div>
              <p className="mt-3 text-sm leading-7 text-muted">
                {solution.summary}
              </p>
              <TextLink href={`/solutions#${solution.slug}`} className="mt-5">
                {tc("learnMore")}
              </TextLink>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
