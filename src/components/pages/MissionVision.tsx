import { Eye, Target } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

type MissionVisionProps = {
  compact?: boolean;
};

export async function MissionVision({ compact = false }: MissionVisionProps) {
  const t = await getTranslations("MissionVision");
  const ts = await getTranslations("Site");

  const items = [
    {
      eyebrow: t("missionEyebrow"),
      title: t("missionTitle"),
      body: ts("mission"),
      icon: Target,
    },
    {
      eyebrow: t("visionEyebrow"),
      title: t("visionTitle"),
      body: ts("vision"),
      icon: Eye,
    },
  ] as const;

  return (
    <div className="grid items-stretch gap-4 md:grid-cols-2">
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <Reveal key={item.eyebrow} delay={index * 0.06} className="h-full min-w-0">
            <Card hover={false} className={compact ? "h-full p-5" : "h-full p-6 sm:p-8"}>
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-accent-soft text-accent">
                <Icon className="h-4 w-4" aria-hidden />
              </div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                {item.eyebrow}
              </p>
              <h3
                className={
                  compact
                    ? "mt-2 text-lg font-semibold tracking-[-0.03em]"
                    : "mt-2 text-2xl font-semibold tracking-[-0.03em]"
                }
              >
                {item.title}
              </h3>
              <p
                className={
                  compact
                    ? "mt-3 text-sm leading-6 text-muted"
                    : "mt-4 text-sm leading-7 text-muted sm:text-[15px]"
                }
              >
                {item.body}
              </p>
            </Card>
          </Reveal>
        );
      })}
    </div>
  );
}
