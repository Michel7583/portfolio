import type { ReactNode } from "react";
import type { Partner } from "@/lib/data/partners";

function Mark({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-8 w-8 shrink-0 text-foreground"
      aria-hidden
    >
      {children}
    </svg>
  );
}

const marks: Record<string, ReactNode> = {
  Northline: (
    <Mark>
      <rect x="4" y="14" width="24" height="4" rx="1" fill="currentColor" />
      <path d="M8 8v16h4l8-10v10h4V8h-4L12 18V8H8z" fill="currentColor" />
    </Mark>
  ),
  "Helios Ledger": (
    <Mark>
      <circle cx="16" cy="16" r="6" fill="none" stroke="currentColor" strokeWidth="1.75" />
      {[0, 45, 90, 135].map((deg) => (
        <rect
          key={deg}
          x="15.15"
          y="3"
          width="1.7"
          height="5"
          rx="0.8"
          fill="currentColor"
          transform={`rotate(${deg} 16 16)`}
        />
      ))}
    </Mark>
  ),
  "Meridian ID": (
    <Mark>
      <path
        d="M16 4 28 16 16 28 4 16 16 4z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <circle cx="16" cy="16" r="3" fill="currentColor" />
    </Mark>
  ),
  "Vellum Data": (
    <Mark>
      <rect x="6" y="8" width="20" height="4" rx="1" fill="currentColor" opacity="0.4" />
      <rect x="6" y="14" width="20" height="4" rx="1" fill="currentColor" opacity="0.7" />
      <rect x="6" y="20" width="20" height="4" rx="1" fill="currentColor" />
    </Mark>
  ),
  "Orbit Rail": (
    <Mark>
      <circle cx="16" cy="16" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <ellipse
        cx="16"
        cy="16"
        rx="10"
        ry="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="25" cy="16" r="1.6" fill="currentColor" />
    </Mark>
  ),
  "Kite Credit": (
    <Mark>
      <path d="M16 5 26 21H6L16 5z" fill="currentColor" />
      <path d="M16 13v14" stroke="var(--background)" strokeWidth="1.75" />
    </Mark>
  ),
  "Harbor Cloud": (
    <Mark>
      <path
        d="M6 20c0-5 4-9 10-9s10 4 10 9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path d="M8 22h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M10 25h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.55" />
    </Mark>
  ),
  "Lumen Markets": (
    <Mark>
      <path d="M16 5v22M5 16h22" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="16" cy="16" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.75" />
    </Mark>
  ),
  "Axiom Clearing": (
    <Mark>
      <path d="M16 5 27 24H5L16 5z" fill="none" stroke="currentColor" strokeWidth="1.75" />
      <path d="M16 13v7M13 20h6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </Mark>
  ),
  Solace: (
    <Mark>
      <path
        d="M16 5c6 4 9 8 9 13a9 9 0 1 1-18 0c0-5 3-9 9-13z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <circle cx="16" cy="18" r="2.2" fill="currentColor" />
    </Mark>
  ),
};

export function PartnerLogo({ partner }: { partner: Partner }) {
  return (
    <span className="inline-flex items-center gap-3">
      {marks[partner.name]}
      <span className="text-sm font-semibold tracking-[-0.03em] text-foreground/80">
        {partner.name}
      </span>
    </span>
  );
}
