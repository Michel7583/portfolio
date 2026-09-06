import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CoverImage } from "@/components/visual/CoverImage";

export function CaseStudiesHero() {
  return (
    <div className="relative overflow-hidden pt-16 pb-8 sm:pt-20">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" aria-hidden />
      <Container className="relative">
        <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-10">
          <Reveal>
            <p className="mb-3 text-[13px] font-medium uppercase tracking-[0.22em] text-accent">
              Case studies
            </p>
            <h1 className="max-w-xl text-balance text-[2rem] font-semibold tracking-[-0.045em] leading-[1.15] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
              How complex products get built
            </h1>
            <p className="mt-5 max-w-lg text-[15px] leading-7 text-muted sm:text-base sm:leading-8">
              Each study shows the project, the challenge, the approach, and the
              result. These are structured examples, ready to be replaced with
              client work when it can be shared.
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <CoverImage
              src="/images/case-lending.png"
              alt="Quiet operations room with muted financial monitors"
              className="aspect-[16/10] rounded-3xl border border-border sm:aspect-[16/9] lg:aspect-[5/4]"
              sizes="(min-width: 1024px) 48vw, 100vw"
              priority
            />
          </Reveal>
        </div>
      </Container>
    </div>
  );
}
