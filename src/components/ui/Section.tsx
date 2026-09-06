import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

type SectionProps = {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  align?: "left" | "center";
  size?: "lg" | "md";
};

export function Section({
  children,
  className,
  containerClassName,
  id,
  eyebrow,
  title,
  description,
  align = "left",
  size = "lg",
}: SectionProps) {
  return (
    <section id={id} className={cn("relative py-24 sm:py-28 lg:py-32", className)}>
      <Container className={containerClassName}>
        {(eyebrow || title || description) && (
          <header
            className={cn(
              "mb-12 max-w-3xl sm:mb-14",
              align === "center" && "mx-auto text-center",
            )}
          >
            {eyebrow ? (
              <p className="mb-3 text-[13px] font-medium uppercase tracking-[0.22em] text-accent">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2
                className={cn(
                  "text-balance font-semibold tracking-[-0.04em] text-foreground",
                  size === "lg"
                    ? "text-[2rem] sm:text-4xl lg:text-5xl lg:leading-[1.12]"
                    : "text-2xl sm:text-3xl lg:text-[2.15rem] lg:leading-[1.2]",
                )}
              >
                {title}
              </h2>
            ) : null}
            {description ? (
              <p
                className={cn(
                  "mt-4 max-w-2xl text-muted",
                  size === "lg"
                    ? "text-base leading-7 sm:text-lg sm:leading-8"
                    : "text-sm leading-7 sm:text-base sm:leading-7",
                  align === "center" && "mx-auto",
                )}
              >
                {description}
              </p>
            ) : null}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
