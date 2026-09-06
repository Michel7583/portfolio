import { aboutPrinciples } from "@/lib/data/why-us";
import { createMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { Cta } from "@/components/home/Cta";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/pages/PageHero";
import { TeamGrid } from "@/components/pages/TeamGrid";
import { MissionVision } from "@/components/pages/MissionVision";
import { Partners } from "@/components/home/Partners";
import { CoverImage } from "@/components/visual/CoverImage";

export const metadata = createMetadata({
  title: `About | ${site.name}`,
  description: `${site.name} is a technology company that builds sophisticated software across AI, blockchain, and financial technology.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Building software for the next generation of businesses"
        description="We are a technology company focused on building sophisticated software products across AI, blockchain, and financial technology."
        image="/images/about-workspace.png"
        imageAlt="Quiet studio workspace with daylight and a closed laptop"
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="max-w-2xl space-y-5 text-base leading-8 text-muted">
              <p>{site.positioning}</p>
              <p>
                Our approach combines product strategy, UX/UI, software
                engineering, AI, blockchain, cloud infrastructure, and data
                engineering. We work with ambitious companies from early-stage
                startups to established businesses.
              </p>
              <p>
                {site.name} is not a staffing marketplace and not a generic
                outsourcing agency. We operate as an engineering partner capable
                of owning complex product systems—from the first architecture
                decision through launch and scale.
              </p>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.08}>
            <CoverImage
              src="/images/about-workspace.png"
              alt="Quiet studio workspace with daylight and a closed laptop"
              className="mb-5 aspect-[4/3] rounded-3xl border border-border"
              sizes="(min-width: 1024px) 36vw, 100vw"
            />
            <Card hover={false} className="p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-accent">
                Who we work with
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
                <li>Startups turning a sharp idea into a first production system</li>
                <li>Financial companies modernizing products and platforms</li>
                <li>Web3 teams that need an application and operations layer</li>
                <li>Established businesses adding intelligence or new rails</li>
              </ul>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section
        id="mission"
        className="scroll-mt-24"
        size="md"
        title="Mission and vision"
        description={`${site.name} is an engineering partner. These two statements decide which work we take and how we judge whether it was worth building.`}
      >
        <MissionVision />
      </Section>

      <Section
        id="team"
        className="scroll-mt-24 bg-panel"
        size="md"
        title="The people behind the work"
        description={`${site.name} is led by a small senior team. Each practice has a named owner—so product, AI, blockchain, and fintech decisions stay accountable.`}
      >
        <TeamGrid />
      </Section>

      <Partners />

      <Section
        title="How we work"
        description="Every engagement is a combination of these disciplines. We do not add a technology because it is fashionable."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {aboutPrinciples.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04} className="h-full min-w-0">
              <Card className="h-full p-5">
                <h3 className="font-semibold tracking-[-0.02em]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {item.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Cta />
    </>
  );
}
