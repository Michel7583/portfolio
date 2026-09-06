import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { CoverImage } from "@/components/visual/CoverImage";
import { cn } from "@/lib/utils";

type CaseStudyStoryItem = {
  title: string;
  body: string;
  image: string;
  imageAlt: string;
};

export function CaseStudyStory({ items }: { items: readonly CaseStudyStoryItem[] }) {
  return (
    <ol className="grid gap-6">
      {items.map((item, index) => (
        <li key={item.title}>
          <Reveal delay={index * 0.04}>
            <Card
              hover={false}
              className="grid overflow-hidden lg:grid-cols-2"
            >
              <CoverImage
                src={item.image}
                alt={item.imageAlt}
                className={cn(
                  "aspect-[16/10] lg:aspect-auto lg:min-h-[22rem]",
                  index % 2 === 1 && "lg:order-2",
                )}
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <p className="font-mono text-[11px] tracking-[0.08em] text-accent">
                  0{index + 1}
                </p>
                <h2 className="mt-2 text-xl font-semibold tracking-[-0.03em] sm:text-2xl">
                  {item.title}
                </h2>
                <p className="mt-3 text-[15px] leading-7 text-muted sm:text-base sm:leading-8">
                  {item.body}
                </p>
              </div>
            </Card>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
