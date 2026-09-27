import { Brain, Landmark, Link2 } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { services } from "@/lib/data/services";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import { CoverImage } from "@/components/visual/CoverImage";

const icons = {
  "ai-ml": Brain,
  "blockchain-web3": Link2,
  fintech: Landmark,
} as const;

export async function Services() {
  const t = await getTranslations("Service");
  const th = await getTranslations("Home");
  const tc = await getTranslations("Common");

  return (
    <Section
      id="services"
      title={th("servicesTitle")}
      description={th("servicesDesc")}
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = icons[service.slug];
          return (
            <Reveal key={service.slug} delay={index * 0.08}>
              <Card as="article" className="group flex h-full flex-col overflow-hidden">
                <CoverImage
                  src={service.image}
                  alt={t(`${service.slug}.imageAlt`)}
                  className="aspect-[16/10]"
                  sizes="(min-width: 1024px) 30vw, 100vw"
                />
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-accent">
                    <Icon className="h-4 w-4" aria-hidden />
                  </div>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                    {t(`${service.slug}.title`)}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {t(`${service.slug}.cardDescription`)}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {service.cardCapabilities.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-foreground/75"
                      >
                        <span className="h-1 w-1 rounded-full bg-accent/70" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <TextLink href={service.href} className="mt-8">
                    {tc("explore")}
                  </TextLink>
                </div>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
