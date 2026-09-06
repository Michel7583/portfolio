import { Children } from "react";
import { cn } from "@/lib/utils";

type CarouselProps = {
  children: React.ReactNode;
  ariaLabel: string;
  className?: string;
  speed?: "normal" | "slow" | "slower";
};

export function Carousel({
  children,
  ariaLabel,
  className,
  speed = "normal",
}: CarouselProps) {
  const items = Children.toArray(children);

  if (items.length === 0) return null;

  return (
    <div
      className={cn("relative w-full overflow-hidden", className)}
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      <div
        className={cn(
          "logo-carousel-track flex w-max",
          speed === "slow" && "logo-carousel-track-slow",
          speed === "slower" && "logo-carousel-track-slower",
        )}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
            {items.map((child, index) => (
              <div
                key={`${copy}-${index}`}
                className="w-44 shrink-0 px-1.5 sm:w-52 lg:w-56"
              >
                {child}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
