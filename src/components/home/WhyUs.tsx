import { Boxes, Landmark, Lightbulb, Sparkles } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const items = [
  { icon: Lightbulb, titleKey: "productThinking", descKey: "productThinkingDesc" },
  { icon: Boxes, titleKey: "engineering", descKey: "engineeringDesc" },
  { icon: Landmark, titleKey: "financial", descKey: "financialDesc" },
  { icon: Sparkles, titleKey: "emerging", descKey: "emergingDesc" },
] as const;

export async function WhyUs() {
  const t = await getTranslations("WhyUs");
  const th = await getTranslations("Home");

  return (
    <Section
      className="bg-panel"
      title={th("whyTitle")}
      description={th("whyDesc")}
    >
      <div className="grid gap-5 md:grid-cols-2">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.titleKey} delay={index * 0.06} className="h-full min-w-0">
              <Card className="h-full p-6 sm:p-8">
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-accent-soft text-accent">
                  <Icon className="h-4 w-4" aria-hidden />
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                  {t(item.titleKey)}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted sm:text-[15px]">
                  {t(item.descKey)}
                </p>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
