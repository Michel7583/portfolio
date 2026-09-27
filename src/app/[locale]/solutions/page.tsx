import { getTranslations, setRequestLocale } from "next-intl/server";
import { createLocalizedMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { routing } from "@/i18n/routing";
import { Cta } from "@/components/home/Cta";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/pages/PageHero";
import { SolutionsExplorer } from "@/components/pages/SolutionsExplorer";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return createLocalizedMetadata({
    locale,
    title: t("solutionsTitle", { name: site.name }),
    description: t("solutionsDescription"),
    path: "/solutions",
  });
}

export default async function SolutionsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("SolutionsPage");

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        image="/images/service-ai.png"
        imageAlt=""
      />
      <Section>
        <SolutionsExplorer />
      </Section>
      <Cta />
    </>
  );
}
