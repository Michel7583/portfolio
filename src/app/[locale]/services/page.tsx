import { getTranslations, setRequestLocale } from "next-intl/server";
import { services } from "@/lib/data/services";
import { createLocalizedMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { routing } from "@/i18n/routing";
import { Cta } from "@/components/home/Cta";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/pages/PageHero";
import { CoverImage } from "@/components/visual/CoverImage";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return createLocalizedMetadata({
    locale,
    title: t("servicesTitle", { name: site.name }),
    description: t("servicesDescription", { name: site.name }),
    path: "/services",
  });
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ServicesPage");
  const ts = await getTranslations("Service");
  const tc = await getTranslations("Common");

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        image="/images/hero-atmosphere.png"
        imageAlt=""
      />

      <Section>
        <div className="space-y-6">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.05}>
              <Card className="overflow-hidden">
                <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                  <div className="p-6 sm:p-8">
                    <p className="text-[12px] uppercase tracking-[0.18em] text-accent">
                      {ts(`${service.slug}.eyebrow`)}
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em]">
                      {ts(`${service.slug}.title`)}
                    </h2>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base">
                      {ts(`${service.slug}.description`)}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.capabilities.map((item) => (
                        <Badge key={item}>{item}</Badge>
                      ))}
                    </div>
                    <div className="mt-6">
                      <Button href={service.href}>
                        {tc("explore")} {ts(`${service.slug}.title`)}
                      </Button>
                    </div>
                  </div>
                  <CoverImage
                    src={service.image}
                    alt={ts(`${service.slug}.imageAlt`)}
                    className="min-h-56 lg:min-h-full"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Cta />
    </>
  );
}
