import { aboutPrinciples } from "@/lib/data/why-us";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { CoverImage } from "@/components/visual/CoverImage";
import { MissionVision } from "@/components/pages/MissionVision";

export function AboutPreview() {
  return (
    <Section
      title="Building software for the next generation of businesses"
      description="We are a technology company focused on building sophisticated software products across AI, blockchain, and financial technology."
    >
      <div className="mb-10">
        <MissionVision compact />
      </div>
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <Reveal>
          <CoverImage
            src="/images/about-workspace.png"
            alt="Quiet studio workspace with daylight and a closed laptop"
            className="mb-8 aspect-[4/3] rounded-3xl border border-border"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
          <p className="text-base leading-8 text-muted">
            Our approach combines product strategy, UX/UI, software engineering,
            AI, blockchain, cloud infrastructure, and data engineering. We work
            with ambitious companies from early-stage startups to established
            businesses.
          </p>
          <p className="mt-5 text-base leading-8 text-muted">
            {site.name} is built to be trusted with complex, high-stakes
            products—not to supply interchangeable developer hours.
          </p>
          <div className="mt-8">
            <Button href="/about" variant="secondary">
              About {site.name}
            </Button>
          </div>
        </Reveal>
        <div className="grid items-stretch gap-3 sm:grid-cols-2">
          {aboutPrinciples.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04} className="h-full min-w-0">
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-4">
                <h3 className="text-sm font-semibold tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
