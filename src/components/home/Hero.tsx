import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/visual/CoverImage";
import { HeroNetwork } from "@/components/visual/HeroNetwork";

export async function Hero() {
  const t = await getTranslations("Site");
  const tc = await getTranslations("Common");

  return (
    <section className="relative overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-24 lg:pb-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <CoverImage
          src="/images/hero-atmosphere.png"
          alt=""
          priority
          sizes="100vw"
          className="absolute inset-0"
          imageClassName="scale-105"
        />
        <div className="absolute inset-0 bg-[color-mix(in_srgb,var(--background)_62%,transparent)]" />
        <div className="absolute inset-0 bg-grid opacity-40" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10">
          <div>
            <p className="mb-5 text-[13px] font-medium uppercase tracking-[0.22em] text-accent">
              {t("tagline")}
            </p>
            <h1 className="max-w-xl text-balance text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl lg:text-[4.5rem] lg:leading-[1.02]">
              {t("headline")}
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-muted sm:text-lg sm:leading-8">
              {t("heroSupport")}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/contact" size="lg">
                {tc("startProject")}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                {tc("exploreServices")}
              </Button>
            </div>
          </div>

          <div className="relative">
            <HeroNetwork />
          </div>
        </div>
      </Container>
    </section>
  );
}
