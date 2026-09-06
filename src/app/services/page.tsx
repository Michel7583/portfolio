import { services } from "@/lib/data/services";
import { createMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { Cta } from "@/components/home/Cta";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/pages/PageHero";
import { CoverImage } from "@/components/visual/CoverImage";

export const metadata = createMetadata({
  title: `Services | ${site.name}`,
  description: `${site.name} designs and builds production software across AI/ML, blockchain, Web3, and fintech.`,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Engineering for products that have to work"
        description="We are an engineering partner for companies building at the intersection of intelligence, financial infrastructure, and trust. Each practice is staffed to ship production systems—not slideware."
        image="/images/hero-atmosphere.png"
        imageAlt=""
      />

      <Section>
        <div className="space-y-6">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.05}>
              <Card className="overflow-hidden">
                <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                  <div className="p-6 sm:p-8">
                    <p className="text-[12px] uppercase tracking-[0.18em] text-accent">
                      {service.eyebrow}
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em]">
                      {service.title}
                    </h2>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base">
                      {service.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.capabilities.map((item) => (
                        <Badge key={item}>{item}</Badge>
                      ))}
                    </div>
                    <div className="mt-6">
                      <Button href={service.href}>Explore {service.title}</Button>
                    </div>
                  </div>
                  <CoverImage
                    src={service.image}
                    alt={service.imageAlt}
                    className="min-h-56 lg:min-h-full"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Cta />
    </>
  );
}
