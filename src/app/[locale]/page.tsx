import { getTranslations, setRequestLocale } from "next-intl/server";
import { AboutPreview } from "@/components/home/AboutPreview";
import { CaseStudiesPreview } from "@/components/home/CaseStudiesPreview";
import { Cta } from "@/components/home/Cta";
import { CtaBand } from "@/components/home/CtaBand";
import { Hero } from "@/components/home/Hero";
import { Partners } from "@/components/home/Partners";
import { Process } from "@/components/home/Process";
import { Services } from "@/components/home/Services";
import { SolutionsPreview } from "@/components/home/SolutionsPreview";
import { TeamPreview } from "@/components/home/TeamPreview";
import { Technology } from "@/components/home/Technology";
import { WhyUs } from "@/components/home/WhyUs";
import { createLocalizedMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { routing } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return createLocalizedMetadata({
    locale,
    title: t("homeTitle", { name: site.name }),
    description: t("homeDescription", { description: site.description }),
    path: "/",
  });
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Home");
  const tc = await getTranslations("Common");

  return (
    <>
      <Hero />
      <Partners />
      <Services />
      <CtaBand
        title={t("ctaBand1Title")}
        description={t("ctaBand1Desc")}
        primaryLabel={tc("startProject")}
        secondaryLabel={tc("viewCaseStudies")}
        secondaryHref="/case-studies"
      />
      <WhyUs />
      <SolutionsPreview />
      <CaseStudiesPreview />
      <CtaBand
        title={t("ctaBand2Title")}
        primaryLabel={tc("startProject")}
        secondaryLabel={t("ctaBand2Secondary")}
        secondaryHref="/services"
      />
      <Technology />
      <Process />
      <AboutPreview />
      <TeamPreview />
      <Cta />
    </>
  );
}
