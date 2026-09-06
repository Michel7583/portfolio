import { techCategories } from "@/lib/data/technology";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function Technology() {
  return (
    <Section
      className="bg-panel"
      title="The technology ecosystem"
      description="The stack we use to ship durable products across AI, blockchain, and financial systems. Tools are chosen for the problem, then held to the same engineering standard."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {techCategories.map((category, index) => (
          <Reveal key={category.title} delay={index * 0.05} className="h-full min-w-0">
            <Card className="group h-full p-6">
              <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-accent">
                {category.title}
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
