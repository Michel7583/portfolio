import { getTranslations } from "next-intl/server";
import { caseStudies } from "@/lib/data/case-studies";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import { CaseStudyCard } from "@/components/pages/CaseStudyCard";

export async function CaseStudiesPreview() {
  const t = await getTranslations("Home");
  const tc = await getTranslations("Common");
  const featured = caseStudies.slice(0, 3);

  return (
    <Section title={t("caseStudiesTitle")} description={t("caseStudiesDesc")}>
      {featured.length === 0 ? null : (
        <div className="grid gap-5 lg:grid-cols-3">
          {featured.map((study, index) => (
            <Reveal key={study.slug} delay={index * 0.07}>
              <CaseStudyCard study={study} heading="h3" />
            </Reveal>
          ))}
        </div>
      )}
      <div className="mt-8">
        <TextLink href="/case-studies">{tc("viewCaseStudies")}</TextLink>
      </div>
    </Section>
  );
}
