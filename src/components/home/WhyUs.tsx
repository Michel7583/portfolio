import { Boxes, Landmark, Lightbulb, Sparkles } from "lucide-react";
import { whyUs } from "@/lib/data/why-us";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const icons = [Lightbulb, Boxes, Landmark, Sparkles];

export function WhyUs() {
  return (
    <Section
      className="bg-panel"
      title="Complex technology. Simplified execution."
      description="We combine product thinking with deep engineering. The result is software that can survive real users, real money, and real operational pressure."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {whyUs.map((item, index) => {
          const Icon = icons[index];
          return (
            <Reveal key={item.title} delay={index * 0.06} className="h-full min-w-0">
              <Card className="h-full p-6 sm:p-8">
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-accent-soft text-accent">
                  <Icon className="h-4 w-4" aria-hidden />
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted sm:text-[15px]">
                  {item.description}
                </p>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
