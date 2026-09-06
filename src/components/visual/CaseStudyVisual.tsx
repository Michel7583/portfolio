import Image from "next/image";
import { cn } from "@/lib/utils";

type CaseStudyVisualProps = {
  title: string;
  image: string;
  imageAlt: string;
  flush?: boolean;
  className?: string;
};

export function CaseStudyVisual({
  title,
  image,
  imageAlt,
  flush = false,
  className,
}: CaseStudyVisualProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-cover bg-center",
        flush ? "aspect-[16/10]" : "aspect-[16/8] rounded-3xl border border-border",
        className,
      )}
      style={{ backgroundImage: `url(${image})` }}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority={!flush}
        sizes="(min-width: 1024px) 80vw, 100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-[color-mix(in_srgb,var(--background)_12%,transparent)]"
        aria-hidden
      />
      <div className="absolute right-4 bottom-4 left-4 sm:right-6 sm:bottom-6 sm:left-auto sm:w-64">
        <div className="rounded-xl border border-border bg-[color-mix(in_srgb,var(--surface)_82%,transparent)] p-3 backdrop-blur-md">
          <p className="line-clamp-2 text-xs font-medium leading-4 text-foreground/85 sm:text-[13px] sm:leading-5">
            {title}
          </p>
          <div className="mt-3 flex h-10 items-end gap-1" aria-hidden>
            {[40, 64, 48, 80, 56, 72, 44].map((height) => (
              <span
                key={height}
                className="flex-1 rounded-sm bg-accent/45"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
