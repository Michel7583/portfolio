import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
};

/** Unique Veylora mark: a veil arc crossed by an axis, pinned with a gold node. */
export function BrandMark({ className }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("h-8 w-8", className)}
      aria-hidden
    >
      <path
        d="M21.8 7.2c-5.4-3.2-12.4-1-14.8 4.6-2.5 5.8.2 12.2 6 14.6 4.1 1.7 8.7.4 11.4-2.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.35"
        strokeLinecap="round"
      />
      <path
        d="M10 5.6 22.2 26.6"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="2.15"
        strokeLinecap="round"
      />
      <circle cx="16.1" cy="16.1" r="2.2" fill="var(--gold)" />
    </svg>
  );
}
