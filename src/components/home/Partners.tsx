"use client";

import { useTranslations } from "next-intl";
import { partners } from "@/lib/data/partners";
import { Carousel } from "@/components/ui/Carousel";
import { PartnerLogo } from "@/components/visual/partner-logos";

export function Partners() {
  const t = useTranslations("Home");

  return (
    <section
      id="partners"
      aria-labelledby="partners-heading"
      className="relative scroll-mt-24 py-16 sm:py-20"
    >
      <div className="mx-auto mb-8 w-full max-w-6xl px-5 sm:mb-10 sm:px-6 lg:px-8">
        <p className="text-[13px] font-medium uppercase tracking-[0.22em] text-accent">
          {t("partnersTitle")}
        </p>
        <h2
          id="partners-heading"
          className="mt-3 max-w-2xl text-balance text-2xl font-semibold tracking-[-0.04em] sm:text-3xl lg:text-[2.15rem] lg:leading-[1.2]"
        >
          {t("partnersTitle")}
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
          {t("partnersDesc")}
        </p>
      </div>

      <Carousel ariaLabel={t("partnersTitle")} speed="slower">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="flex h-20 items-center justify-center rounded-2xl border border-border bg-card px-4"
          >
            <PartnerLogo partner={partner} />
          </div>
        ))}
      </Carousel>
    </section>
  );
}
