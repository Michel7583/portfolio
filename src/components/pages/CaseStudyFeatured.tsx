import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { TextLink } from "@/components/ui/TextLink";
import { CoverImage } from "@/components/visual/CoverImage";
import type { CaseStudy } from "@/lib/data/case-studies";

export function CaseStudyFeatured({ study }: { study: CaseStudy }) {
  return (
    <Card as="article" className="overflow-hidden">
      <div className="grid lg:grid-cols-2">
        <CoverImage
          src={study.image}
          alt={study.imageAlt}
          className="aspect-[16/10] lg:aspect-auto lg:min-h-[28rem]"
          sizes="(min-width: 1024px) 50vw, 100vw"
          priority
        />
        <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
          <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-accent">
            Featured
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <Badge>{study.sector}</Badge>
            <span className="text-xs text-muted">{study.project}</span>
          </div>
          <h2 className="mt-4 text-2xl font-semibold tracking-[-0.035em] sm:text-3xl lg:text-[2.15rem] lg:leading-[1.2]">
            {study.title}
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-muted sm:text-base sm:leading-8">
            {study.summary}
          </p>
          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-foreground/50">
                Challenge
              </dt>
              <dd className="mt-2 text-sm leading-6 text-muted">
                {study.challenge}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-foreground/50">
                Result
              </dt>
              <dd className="mt-2 text-sm leading-6 text-muted">
                {study.results[0]?.text}
              </dd>
            </div>
          </dl>
          <TextLink href={`/case-studies/${study.slug}`} className="mt-8">
            Read case study
          </TextLink>
        </div>
      </div>
    </Card>
  );
}
