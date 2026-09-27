"use client";

import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { TextLink } from "@/components/ui/TextLink";
import { CaseStudyVisual } from "@/components/visual/CaseStudyVisual";
import type { CaseStudy } from "@/lib/data/case-studies";

export function CaseStudyCard({
  study,
  heading: Heading = "h2",
}: {
  study: CaseStudy;
  heading?: "h2" | "h3";
}) {
  const t = useTranslations("CaseStudy");
  const tc = useTranslations("Common");
  const title = t(`${study.slug}.title`);
  const challenge = t(`${study.slug}.challenge`);

  return (
    <Card as="article" className="flex h-full flex-col overflow-hidden">
      <CaseStudyVisual
        title={title}
        image={study.image}
        imageAlt={study.imageAlt}
        flush
      />
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>{study.sector}</Badge>
          <span className="text-xs text-muted">{study.project}</span>
        </div>
        <Heading className="mt-4 text-xl font-semibold tracking-[-0.03em] sm:text-[1.35rem]">
          {title}
        </Heading>
        <p className="mt-3 flex-1 text-[15px] leading-7 text-muted">
          {challenge}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {study.technology.slice(0, 4).map((item) => (
            <li
              key={item}
              className="rounded-full border border-border px-2.5 py-1 text-xs text-foreground/70"
            >
              {item}
            </li>
          ))}
        </ul>
        <TextLink href={`/case-studies/${study.slug}`} className="mt-6">
          {tc("learnMore")}
        </TextLink>
      </div>
    </Card>
  );
}
