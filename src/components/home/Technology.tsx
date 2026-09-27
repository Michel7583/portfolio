import { getTranslations } from "next-intl/server";
import { techCategories } from "@/lib/data/technology";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const titleKeys = [
  "frontend",
  "backend",
  "data",
  "cloud",
  "ai",
  "blockchain",
  "fintech",
  "security",
  "product",
] as const;

export async function Technology() {
  const t = await getTranslations("Technology");
  const th = await getTranslations("Home");

  return (
    <Section
      className="bg-panel"
      title={th("technologyTitle")}
      description={th("technologyDesc")}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {techCategories.map((category, index) => (
          <Reveal key={category.title} delay={index * 0.05} className="h-full min-w-0">
            <Card className="group h-full p-6">
              <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-accent">
                {t(titleKeys[index] ?? "product")}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 rounded-lg px-1 py-1 text-sm text-foreground/80 transition-colors hover:text-foreground"
                  >
                    <span className="h-1 w-1 rounded-full bg-foreground/35 transition-colors group-hover:bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
