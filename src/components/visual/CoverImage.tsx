import Image from "next/image";
import { cn } from "@/lib/utils";

type CoverImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  wash?: boolean;
};

export function CoverImage({
  src,
  alt,
  className,
  imageClassName,
  priority = false,
  sizes = "(min-width: 1024px) 40vw, 100vw",
  wash = true,
}: CoverImageProps) {
  const fillsParent = Boolean(className && /\b(absolute|fixed|sticky)\b/.test(className));

  return (
    <div
      className={cn(
        "overflow-hidden bg-surface",
        !fillsParent && "relative",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn("object-cover", imageClassName)}
      />
      {wash ? (
        <div
          className="absolute inset-0 bg-[color-mix(in_srgb,var(--background)_14%,transparent)]"
          aria-hidden
        />
      ) : null}
    </div>
  );
}
