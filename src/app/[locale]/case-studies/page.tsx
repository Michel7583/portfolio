import { getTranslations, setRequestLocale } from "next-intl/server";
import { caseStudies } from "@/lib/data/case-studies";
import { createLocalizedMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { routing } from "@/i18n/routing";
import { Cta } from "@/components/home/Cta";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/pages/PageHero";
import { CaseStudyCard } from "@/components/pages/CaseStudyCard";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return createLocalizedMetadata({
    locale,
    title: t("caseStudiesTitle", { name: site.name }),
    description: t("caseStudiesDescription", { name: site.name }),
    path: "/case-studies",
  });
}

export default async function CaseStudiesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("CaseStudiesPage");

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
        <div className="grid gap-5 lg:grid-cols-2">
          {caseStudies.map((study, index) => (
            <Reveal key={study.slug} delay={index * 0.05}>
              <CaseStudyCard study={study} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Cta />
    </>
  );
}
