import { caseStudies } from "@/lib/data/case-studies";
import { createMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { Cta } from "@/components/home/Cta";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { CaseStudiesHero } from "@/components/pages/CaseStudiesHero";
import { CaseStudyCard } from "@/components/pages/CaseStudyCard";
import { CaseStudyFeatured } from "@/components/pages/CaseStudyFeatured";

export const metadata = createMetadata({
  title: `Case Studies | ${site.name}`,
  description: `Selected product engagements from ${site.name} across fintech, Web3, AI SaaS, and payments.`,
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  const [featured, ...rest] = caseStudies;

  return (
    <>
      <CaseStudiesHero />

      {caseStudies.length === 0 ? (
        <Section>
          <div className="rounded-3xl border border-border bg-card px-6 py-16 text-center">
            <h2 className="text-2xl font-semibold tracking-[-0.03em]">
              Case studies will appear here
            </h2>
            <p className="mx-auto mt-3 max-w-md text-muted">
              When we can share client work, this page will hold the full
              challenge, approach, and result.
            </p>
          </div>
        </Section>
      ) : (
        <>
          {featured ? (
            <Section>
              <Reveal>
                <CaseStudyFeatured study={featured} />
              </Reveal>
            </Section>
          ) : null}

          {rest.length > 0 ? (
            <Section
              className="bg-panel"
              size="md"
              title="More work"
              description="The same standard across lending, payments, Web3, and AI products."
            >
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {rest.map((study, index) => (
                  <Reveal key={study.slug} delay={index * 0.05}>
                    <CaseStudyCard study={study} />
                  </Reveal>
                ))}
              </div>
            </Section>
          ) : null}
        </>
      )}

      <Cta />
    </>
  );
}
