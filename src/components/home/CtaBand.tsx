import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type CtaBandProps = {
  title: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CtaBand({
  title,
  description,
  primaryLabel = "Start a Project",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: CtaBandProps) {
  return (
    <section className="py-6 sm:py-8">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-card px-6 py-7 sm:flex-row sm:items-center sm:px-8">
          <div className="max-w-xl">
            <p className="text-lg font-semibold tracking-[-0.03em]">{title}</p>
            {description ? (
              <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
            ) : null}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={primaryHref}>
              {primaryLabel}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            {secondaryLabel && secondaryHref ? (
              <Button href={secondaryHref} variant="secondary">
                {secondaryLabel}
              </Button>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
