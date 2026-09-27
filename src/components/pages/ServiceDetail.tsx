import { getTranslations } from "next-intl/server";
import { getCaseStudy } from "@/lib/data/case-studies";
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

const processKeys = [
  { number: "01", title: "discover", desc: "discoverDesc" },
  { number: "02", title: "design", desc: "designDesc" },
  { number: "03", title: "build", desc: "buildDesc" },
  { number: "04", title: "validate", desc: "validateDesc" },
  { number: "05", title: "launch", desc: "launchDesc" },
  { number: "06", title: "scale", desc: "scaleDesc" },
] as const;

export async function ServiceDetail({ service }: { service: Service }) {
  const t = await getTranslations("Service");
  const tp = await getTranslations("Process");
  const th = await getTranslations("Home");
  const tc = await getTranslations("Common");
  const tcs = await getTranslations("CaseStudy");
  const study = getCaseStudy(service.caseStudySlug);
  const slug = service.slug;

  return (
    <>
      <PageHero
        eyebrow={t(`${slug}.eyebrow`)}
        title={t(`${slug}.heroTitle`)}
        description={t(`${slug}.description`)}
        image={service.image}
        imageAlt={t(`${slug}.imageAlt`)}
      />

      <Section description={t(`${slug}.problem`)} />

      <Section title={th("servicesTitle")}>
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

      <Section title={th("technologyTitle")} className="bg-panel">
        <div className="flex flex-wrap gap-2">
          {service.technologies.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
      </Section>

      <Section title={th("solutionsTitle")}>
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
        <Section size="md" title={th("technologyTitle")}>
          <FintechMocks />
        </Section>
      ) : null}

      <Section title={th("processTitle")} className="bg-panel">
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {processKeys.map((step) => (
            <li
              key={step.number}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-5"
            >
              <p className="font-mono text-xs text-accent">{step.number}</p>
              <h3 className="mt-2 font-semibold tracking-[-0.03em] uppercase">
                {tp(step.title)}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                {tp(step.desc)}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {study ? (
        <Section size="md" title={th("caseStudiesTitle")}>
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
                  {tcs(`${study.slug}.title`)}
                </h3>
                <p className="mt-3 max-w-2xl text-[15px] leading-7 text-muted">
                  {tcs(`${study.slug}.summary`)}
                </p>
                <TextLink href={`/case-studies/${study.slug}`} className="mt-6">
                  {tc("learnMore")}
                </TextLink>
              </div>
            </div>
          </Card>
        </Section>
      ) : null}

      <div className="pb-8 text-center">
        <Button href="/contact" size="lg">
          {tc("startProject")}
        </Button>
      </div>

      <Cta />
    </>
  );
}
