import { getTranslations } from "next-intl/server";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { CoverImage } from "@/components/visual/CoverImage";
import { MissionVision } from "@/components/pages/MissionVision";

const principleKeys = [
  { title: "productStrategy", desc: "productStrategyDesc" },
  { title: "uxUi", desc: "uxUiDesc" },
  { title: "software", desc: "softwareDesc" },
  { title: "ai", desc: "aiDesc" },
  { title: "blockchain", desc: "blockchainDesc" },
  { title: "cloud", desc: "cloudDesc" },
  { title: "data", desc: "dataDesc" },
] as const;

export async function AboutPreview() {
  const t = await getTranslations("Home");
  const tp = await getTranslations("Principles");

  return (
    <Section title={t("aboutTitle")} description={t("aboutDesc")}>
      <div className="mb-10">
        <MissionVision compact />
      </div>
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <Reveal>
          <CoverImage
            src="/images/about-workspace.png"
            alt=""
            className="mb-8 aspect-[4/3] rounded-3xl border border-border"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
          <p className="text-base leading-8 text-muted">{t("aboutBody1")}</p>
          <p className="mt-5 text-base leading-8 text-muted">
            {t("aboutBody2", { name: site.name })}
          </p>
          <div className="mt-8">
            <Button href="/about" variant="secondary">
              {t("aboutCta", { name: site.name })}
            </Button>
          </div>
        </Reveal>
        <div className="grid items-stretch gap-3 sm:grid-cols-2">
          {principleKeys.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04} className="h-full min-w-0">
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-4">
                <h3 className="text-sm font-semibold tracking-[-0.02em]">
                  {tp(item.title)}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {tp(item.desc)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
