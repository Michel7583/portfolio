/** Company name and brand copy. Change `name` / `legalName` to replace the company name site-wide. */
export const site = {
  name: "Veylora",
  legalName: "Veylora",
  tagline: "AI × Blockchain × Fintech",
  headline: "Engineering the Future of Finance and Intelligent Software",
  heroSupport:
    "We build production-ready software at the intersection of AI, blockchain, and fintech.",
  description:
    "Veylora builds intelligent financial products and scalable software using AI, blockchain, Web3, and modern fintech technologies.",
  positioning:
    "We build intelligent financial products and next-generation software powered by AI, blockchain, and modern financial infrastructure.",
  mission:
    "To design and build production-ready software at the intersection of AI, blockchain, and financial infrastructure—so ambitious companies can turn complex ideas into systems that ship, operate, and scale.",
  vision:
    "A financial software landscape where intelligence is infrastructure: reliable, transparent, and accountable. The next generation of money products should be engineered with the same rigor as the institutions that depend on them.",
  copyrightYear: 2026,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://veylora.network",
  email: "career@veylora.network",
  responseTime: "We typically respond within 1 business day.",
  location: {
    title: "International",
    lines: ["Remote-first studio", "Europe · Asia · Americas"],
  },
  logo: "/icon.svg",
  social: {
    linkedin: "https://www.linkedin.com/neylora-network",
    github: "https://github.com/veylora-org",
    x: "https://x.com/",
    telegram: "https://t.me/veyloraorg",
  },
} as const;

export type SiteConfig = typeof site;
