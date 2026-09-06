import { createMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { Cta } from "@/components/home/Cta";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/pages/PageHero";
import { SolutionsExplorer } from "@/components/pages/SolutionsExplorer";

export const metadata = createMetadata({
  title: `Solutions | ${site.name}`,
  description: `${site.name} designs AI financial assistants, lending platforms, digital banking systems, blockchain infrastructure, and AI SaaS products.`,
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="What we can actually build"
        description="These are representative product systems—not templates. Each one has a problem, a solution, the features that matter, and the technology underneath."
        image="/images/service-ai.png"
        imageAlt="Abstract laboratory wall with connected intelligence nodes"
      />
      <Section>
        <SolutionsExplorer />
      </Section>
      <Cta />
    </>
  );
}
