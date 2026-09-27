import { getTranslations, setRequestLocale } from "next-intl/server";
import { site } from "@/lib/site";
import { createLocalizedMetadata } from "@/lib/seo";
import { routing } from "@/i18n/routing";
import { Cta } from "@/components/home/Cta";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/pages/PageHero";
import { TeamGrid } from "@/components/pages/TeamGrid";
import { MissionVision } from "@/components/pages/MissionVision";
import { Partners } from "@/components/home/Partners";
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
    title: t("aboutTitle", { name: site.name }),
    description: t("aboutDescription", { name: site.name }),
    path: "/about",
  });
}

const principleKeys = [
  { title: "productStrategy", desc: "productStrategyDesc" },
  { title: "uxUi", desc: "uxUiDesc" },
  { title: "software", desc: "softwareDesc" },
  { title: "ai", desc: "aiDesc" },
  { title: "blockchain", desc: "blockchainDesc" },
  { title: "cloud", desc: "cloudDesc" },
  { title: "data", desc: "dataDesc" },
] as const;

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("About");
  const ts = await getTranslations("Site");
  const tm = await getTranslations("MissionVision");
  const tp = await getTranslations("Principles");

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        image="/images/about-workspace.png"
        imageAlt=""
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="max-w-2xl space-y-5 text-base leading-8 text-muted">
              <p>{ts("positioning")}</p>
              <p>{t("body1")}</p>
              <p>{t("body2", { name: site.name })}</p>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.08}>
            <CoverImage
              src="/images/about-workspace.png"
              alt=""
              className="mb-5 aspect-[4/3] rounded-3xl border border-border"
              sizes="(min-width: 1024px) 36vw, 100vw"
            />
            <Card hover={false} className="p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-accent">
                {t("whoTitle")}
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
                <li>{t("who1")}</li>
                <li>{t("who2")}</li>
                <li>{t("who3")}</li>
                <li>{t("who4")}</li>
              </ul>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section
        id="mission"
        className="scroll-mt-24"
        size="md"
        title={tm("title")}
        description={tm("description", { name: site.name })}
      >
        <MissionVision />
      </Section>

      <Section
        id="team"
        className="scroll-mt-24 bg-panel"
        size="md"
        title={t("teamTitle")}
        description={t("teamDesc", { name: site.name })}
      >
        <TeamGrid />
      </Section>

      <Partners />

      <Section title={t("howTitle")} description={t("howDesc")}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {principleKeys.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04} className="h-full min-w-0">
              <Card className="h-full p-5">
                <h3 className="font-semibold tracking-[-0.02em]">{tp(item.title)}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{tp(item.desc)}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Cta />
    </>
  );
}
