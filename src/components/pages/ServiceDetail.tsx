import { getCaseStudy } from "@/lib/data/case-studies";
import { processSteps } from "@/lib/data/process";
import type { Service } from "@/lib/data/services";
import { Cta } from "@/components/home/Cta";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import { PageHero } from "@/components/pages/PageHero";
import { CoverImage } from "@/components/visual/CoverImage";
import { FintechMocks } from "@/components/visual/fintech-mocks";

export function ServiceDetail({ service }: { service: Service }) {
  const study = getCaseStudy(service.caseStudySlug);

  return (
    <>
      <PageHero
        eyebrow={service.eyebrow}
        title={service.heroTitle}
        description={service.description}
        image={service.image}
        imageAlt={service.imageAlt}
      />

      <Section title="The problem" description={service.problem} />

      <Section
        title="Capabilities"
        description="What we design, build, and take into production—explained in business terms."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {service.detailedCapabilities.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <Card className="h-full p-6">
                <h3 className="text-xl font-semibold tracking-[-0.03em]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted">
                  {item.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section title="Technology" className="bg-panel">
        <div className="flex flex-wrap gap-2">
          {service.technologies.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
      </Section>

      <Section title="Use cases">
        <div className="grid gap-4 md:grid-cols-3">
          {service.useCases.map((item) => (
            <Card key={item.title} className="p-6">
              <h3 className="text-lg font-semibold tracking-[-0.03em]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-muted">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {service.slug === "fintech" ? (
        <Section
          size="md"
          title="What this looks like"
          description="Representative product surfaces—not client work. They show the kind of financial interfaces we design and engineer."
        >
          <FintechMocks />
        </Section>
      ) : null}

      <Section title="How we work" className="bg-panel">
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <li
              key={step.number}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-5"
            >
              <p className="font-mono text-xs text-accent">{step.number}</p>
              <h3 className="mt-2 font-semibold tracking-[-0.03em] uppercase">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {study ? (
        <Section size="md" title="Related case study">
          <Card className="overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <CoverImage
                src={study.image}
                alt={study.imageAlt}
                className="aspect-[16/10] lg:aspect-auto lg:min-h-[18rem]"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="flex flex-col justify-center p-6 sm:p-8">
                <Badge>{study.sector}</Badge>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em] sm:text-2xl">
                  {study.title}
                </h3>
                <p className="mt-3 max-w-2xl text-[15px] leading-7 text-muted">
                  {study.summary}
                </p>
                <TextLink href={`/case-studies/${study.slug}`} className="mt-6">
                  Read case study
                </TextLink>
              </div>
            </div>
          </Card>
        </Section>
      ) : null}

      <div className="pb-8 text-center">
        <Button href="/contact" size="lg">
          Start a Project
        </Button>
      </div>

      <Cta />
    </>
  );
}
