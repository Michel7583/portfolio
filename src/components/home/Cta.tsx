import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CoverImage } from "@/components/visual/CoverImage";

export function Cta() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-border px-6 py-14 text-center sm:px-12 sm:py-16">
            <CoverImage
              src="/images/hero-atmosphere.png"
              alt=""
              className="absolute inset-0"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[color-mix(in_srgb,var(--background)_74%,transparent)]" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Have a complex idea? Let&apos;s build it.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg">
                Tell us what you&apos;re building, what problem you&apos;re
                solving, and where you want to go. We&apos;ll help turn the idea
                into a production-ready product.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href="/contact" size="lg">
                  Start a Project
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Button>
                <Button href="/services" variant="secondary" size="lg">
                  View Services
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
