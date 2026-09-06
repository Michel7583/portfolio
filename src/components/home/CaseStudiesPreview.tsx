import { caseStudies } from "@/lib/data/case-studies";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import { CaseStudyCard } from "@/components/pages/CaseStudyCard";

export function CaseStudiesPreview() {
  const featured = caseStudies.slice(0, 3);

  return (
    <Section
      title="Selected work"
      description="Structured examples of how we approach complex products. Replace these with client work when it can be shared."
    >
      {featured.length === 0 ? (
        <p className="text-sm text-muted">Case studies will appear here.</p>
      ) : (
        <div className="grid gap-5 lg:grid-cols-3">
          {featured.map((study, index) => (
            <Reveal key={study.slug} delay={index * 0.07}>
              <CaseStudyCard study={study} heading="h3" />
            </Reveal>
          ))}
        </div>
      )}
      <div className="mt-8">
        <TextLink href="/case-studies">View all case studies</TextLink>
      </div>
    </Section>
  );
}
