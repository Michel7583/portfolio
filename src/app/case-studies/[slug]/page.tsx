import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import {
  caseStudies,
  getCaseStudy,
  getCaseStudyStory,
} from "@/lib/data/case-studies";
import { createMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { Cta } from "@/components/home/Cta";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { CaseStudyCard } from "@/components/pages/CaseStudyCard";
import { CaseStudyStory } from "@/components/pages/CaseStudyStory";
import { CaseStudyVisual } from "@/components/visual/CaseStudyVisual";
import { CoverImage } from "@/components/visual/CoverImage";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  return createMetadata({
    title: `${study.title} | ${site.name}`,
    description: study.summary,
    path: `/case-studies/${study.slug}`,
  });
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const related = caseStudies.filter((item) => item.slug !== study.slug).slice(0, 2);

  return (
    <>
      <div className="relative overflow-hidden pt-10 pb-6 sm:pt-14">
        <Container>
          <Reveal>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-[13px] text-muted transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              All case studies
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <Badge>{study.sector}</Badge>
              <span className="text-xs text-muted sm:text-sm">{study.project}</span>
            </div>
            <h1 className="mt-5 max-w-3xl text-balance text-[2rem] font-semibold tracking-[-0.04em] leading-[1.15] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
              {study.title}
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-muted sm:text-base sm:leading-8">
              {study.summary}
            </p>
          </Reveal>
          <div className="mt-10">
            <CaseStudyVisual
              title={study.title}
              image={study.image}
              imageAlt={study.imageAlt}
            />
          </div>
        </Container>
      </div>

      <Section>
        <CaseStudyStory items={getCaseStudyStory(study)} />
      </Section>

      <Section
        className="bg-panel"
        size="md"
        title="Technology"
        description="The stack used for this engagement."
      >
        <Card hover={false} className="grid overflow-hidden lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <CoverImage
            src={study.technologyImage}
            alt={study.technologyImageAlt}
            className="aspect-[16/10] lg:aspect-auto lg:min-h-[18rem]"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
          <div className="flex flex-col justify-center p-6 sm:p-8">
            <div className="flex flex-wrap gap-2">
              {study.technology.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>
        </Card>
      </Section>

      <Section size="md" title="Result">
        <ul className="grid gap-4 sm:grid-cols-2">
          {study.results.map((item) => (
            <li key={item.text}>
              <Card hover={false} className="flex h-full overflow-hidden">
                <CoverImage
                  src={item.image}
                  alt={item.imageAlt}
                  className="aspect-square w-[7.5rem] shrink-0 sm:w-40"
                  sizes="160px"
                />
                <p className="flex items-center px-5 py-5 text-[15px] leading-6 text-foreground/85 sm:text-base sm:leading-7">
                  {item.text}
                </p>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      {related.length > 0 ? (
        <Section
          size="md"
          title="Related work"
          description="Other product systems built to the same standard."
        >
          <div className="grid gap-5 md:grid-cols-2">
            {related.map((item) => (
              <CaseStudyCard key={item.slug} study={item} />
            ))}
          </div>
        </Section>
      ) : null}

      <Cta />
    </>
  );
}
