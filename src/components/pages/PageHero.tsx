import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CoverImage } from "@/components/visual/CoverImage";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  className?: string;
  image?: string;
  imageAlt?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  className,
  image,
  imageAlt = "",
}: PageHeroProps) {
  return (
    <div className={cn("relative overflow-hidden pt-16 pb-10 sm:pt-20 sm:pb-12", className)}>
      {image ? (
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <CoverImage
            src={image}
            alt={imageAlt}
            className="absolute inset-0"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[color-mix(in_srgb,var(--background)_70%,transparent)]" />
        </div>
      ) : null}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" aria-hidden />
      <Container className="relative">
        <Reveal>
          {eyebrow ? (
            <p className="mb-3 text-[13px] font-medium uppercase tracking-[0.22em] text-accent">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-[-0.045em] text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.08]">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            {description}
          </p>
        </Reveal>
      </Container>
    </div>
  );
}
