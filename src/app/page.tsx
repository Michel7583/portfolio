import { AboutPreview } from "@/components/home/AboutPreview";
import { CaseStudiesPreview } from "@/components/home/CaseStudiesPreview";
import { Cta } from "@/components/home/Cta";
import { CtaBand } from "@/components/home/CtaBand";
import { Hero } from "@/components/home/Hero";
import { Partners } from "@/components/home/Partners";
import { Process } from "@/components/home/Process";
import { Services } from "@/components/home/Services";
import { SolutionsPreview } from "@/components/home/SolutionsPreview";
import { TeamPreview } from "@/components/home/TeamPreview";
import { Technology } from "@/components/home/Technology";
import { WhyUs } from "@/components/home/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <Services />
      <CtaBand
        title="Ready to scope a product?"
        description="Tell us what you are building. We will tell you how we would approach it."
        secondaryLabel="View case studies"
        secondaryHref="/case-studies"
      />
      <WhyUs />
      <SolutionsPreview />
      <CaseStudiesPreview />
      <CtaBand
        title="See how this applies to your product."
        primaryLabel="Start a Project"
        secondaryLabel="Explore services"
        secondaryHref="/services"
      />
      <Technology />
      <Process />
      <AboutPreview />
      <TeamPreview />
      <Cta />
    </>
  );
}
