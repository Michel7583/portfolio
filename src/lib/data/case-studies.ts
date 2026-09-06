export type CaseStudyResult = {
  text: string;
  image: string;
  imageAlt: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  project: string;
  sector: string;
  summary: string;
  challenge: string;
  approach: string;
  solution: string;
  technology: string[];
  results: CaseStudyResult[];
  image: string;
  imageAlt: string;
  challengeImage: string;
  challengeImageAlt: string;
  approachImage: string;
  approachImageAlt: string;
  solutionImage: string;
  solutionImageAlt: string;
  technologyImage: string;
  technologyImageAlt: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ai-powered-fintech-platform",
    title: "AI-Powered Fintech Platform",
    project: "Lending product",
    sector: "Lending & Open Banking",
    summary:
      "An intelligence layer over open banking data that turned conventional credit review into a faster, more transparent decisioning product.",
    challenge:
      "Traditional credit assessment lacked sufficient alternative financial data. Decisions were slow, hard to explain, and weak for thinner files.",
    approach:
      "Map the underwriting policy first. Then connect open banking data, model the decision, and give analysts evidence they can review.",
    solution:
      "We designed an AI-powered financial analysis platform combined with open banking and blockchain identity. The system enriches transactions, scores applicants against configurable policy, and presents analysts with evidence rather than a single unexplained score.",
    technology: [
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "AWS",
      "AI/LLM",
      "Blockchain",
    ],
    results: [
      {
        text: "Automated financial analysis",
        image: "/images/section-result-analysis.png",
        imageAlt: "Financial files and a tablet on a dark slate desk",
      },
      {
        text: "Personalized recommendations",
        image: "/images/section-result-insight.png",
        imageAlt: "Quiet desk with a closed notebook and city glass",
      },
      {
        text: "Alternative credit assessment",
        image: "/images/section-result-assessment.png",
        imageAlt: "Archive wall with dark metal drawers and a single light",
      },
      {
        text: "Transparent lending infrastructure",
        image: "/images/section-result-infra.png",
        imageAlt: "Glass atrium at blue hour suggesting stable infrastructure",
      },
    ],
    image: "/images/case-lending.png",
    imageAlt: "Quiet operations room with muted financial monitors",
    challengeImage: "/images/section-challenge.png",
    challengeImageAlt: "Empty executive meeting room after hours",
    approachImage: "/images/section-approach.png",
    approachImageAlt: "Planning table with architectural paper and a brass lamp",
    solutionImage: "/images/section-solution.png",
    solutionImageAlt: "Dark product studio with a single glowing display",
    technologyImage: "/images/section-technology.png",
    technologyImageAlt: "Close view of dark server hardware and fiber light",
  },
  {
    slug: "web3-settlement-platform",
    title: "Web3 Settlement Platform",
    project: "Digital asset settlement",
    sector: "Digital Assets",
    summary:
      "A settlement and wallet platform that made on-chain value movement operable for a regulated financial product team.",
    challenge:
      "Protocol prototypes could not be operated. Wallet recovery was unclear, failed transfers were invisible, and transfer controls were not reviewable.",
    approach:
      "Separate protocol logic from the product layer. Design wallet, policy, and operations surfaces before more contract work.",
    solution:
      "We built a product-grade Web3 layer—embedded wallets, policy-aware smart contracts, indexing, and an operations console. On-chain settlement stayed explicit, while the application experience hid protocol friction from end users.",
    technology: [
      "Next.js",
      "TypeScript",
      "Solidity",
      "EVM",
      "PostgreSQL",
      "AWS",
      "Web3",
      "Indexing",
    ],
    results: [
      {
        text: "Production wallet and recovery flows",
        image: "/images/case-web3.png",
        imageAlt: "Secure server corridor with cool aisle lighting",
      },
      {
        text: "Policy-controlled token transfers",
        image: "/images/service-blockchain.png",
        imageAlt: "Dark glass panels with a single cyan edge light",
      },
      {
        text: "Operational visibility into on-chain events",
        image: "/images/section-result-analysis.png",
        imageAlt: "Desk still suggesting careful operational review",
      },
      {
        text: "A launch path that risk and engineering could share",
        image: "/images/section-result-infra.png",
        imageAlt: "Quiet glass atrium at blue hour",
      },
    ],
    image: "/images/case-web3.png",
    imageAlt: "Secure server corridor with cool aisle lighting",
    challengeImage: "/images/case-web3.png",
    challengeImageAlt: "Secure server corridor suggesting unfinished operations",
    approachImage: "/images/section-approach.png",
    approachImageAlt: "Planning table used to separate protocol from product",
    solutionImage: "/images/service-blockchain.png",
    solutionImageAlt: "Architectural glass suggesting a product-grade Web3 layer",
    technologyImage: "/images/section-technology.png",
    technologyImageAlt: "Server hardware used for settlement infrastructure",
  },
  {
    slug: "enterprise-ai-saas-platform",
    title: "Enterprise AI SaaS Platform",
    project: "Multi-tenant AI workspace",
    sector: "B2B Software",
    summary:
      "A multi-tenant AI workspace that moved a promising assistant from pilot to a platform enterprises could adopt.",
    challenge:
      "The assistant worked in a demo and failed security review. It could not isolate tenants, cite sources, or connect to buyer systems.",
    approach:
      "Rebuild around retrieval quality, workspace isolation, and admin controls before adding more model features.",
    solution:
      "We rebuilt the product around retrieval quality, workspace isolation, SSO, and admin controls. Agents were constrained to approved tools, every answer carried source context, and usage became measurable for both customers and the operator.",
    technology: [
      "React",
      "Next.js",
      "Python",
      "PostgreSQL",
      "Redis",
      "AWS",
      "RAG",
      "LLM",
    ],
    results: [
      {
        text: "Tenant-safe document retrieval",
        image: "/images/case-ai-saas.png",
        imageAlt: "Enterprise workspace with abstract intelligence diagrams",
      },
      {
        text: "Cited answers with evaluation hooks",
        image: "/images/service-ai.png",
        imageAlt: "Abstract laboratory wall with connected intelligence nodes",
      },
      {
        text: "Enterprise SSO and admin surfaces",
        image: "/images/about-workspace.png",
        imageAlt: "Quiet engineering workspace at dusk",
      },
      {
        text: "A platform model instead of a single chatbot",
        image: "/images/section-result-insight.png",
        imageAlt: "Refined desk suggesting a finished product workspace",
      },
    ],
    image: "/images/case-ai-saas.png",
    imageAlt: "Enterprise workspace with abstract intelligence diagrams on glass",
    challengeImage: "/images/section-challenge.png",
    challengeImageAlt: "Empty meeting room after a failed review",
    approachImage: "/images/about-workspace.png",
    approachImageAlt: "Engineering workspace used to rebuild the product model",
    solutionImage: "/images/service-ai.png",
    solutionImageAlt: "Abstract intelligence wall suggesting a platform layer",
    technologyImage: "/images/section-technology.png",
    technologyImageAlt: "Infrastructure close-up for the AI platform stack",
  },
  {
    slug: "real-time-payment-infrastructure",
    title: "Real-Time Payment Infrastructure",
    project: "Payment orchestration",
    sector: "Payments",
    summary:
      "A payment orchestration layer that unified providers, reconciliation, and operational exceptions for a growing fintech.",
    challenge:
      "Each provider used a different status model. Finance could not reconcile, support could not explain a transfer, and a new rail meant a rewrite.",
    approach:
      "Introduce one payment lifecycle, then adapt providers to it—not the other way around.",
    solution:
      "We introduced a payment domain layer with a canonical status model, webhook ingestion, ledger-friendly events, and an operations console. The product UI stayed simple while the infrastructure absorbed provider complexity.",
    technology: [
      "Next.js",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Docker",
      "CI/CD",
    ],
    results: [
      {
        text: "One operational view of payment lifecycle",
        image: "/images/case-payments.png",
        imageAlt: "Payment operations desk with a blurred status monitor",
      },
      {
        text: "Faster reconciliation against the ledger",
        image: "/images/service-fintech.png",
        imageAlt: "Quiet trading floor with muted monitor glow",
      },
      {
        text: "Provider changes without product rewrites",
        image: "/images/section-result-infra.png",
        imageAlt: "Glass atrium suggesting durable infrastructure",
      },
      {
        text: "Clearer exception handling for support teams",
        image: "/images/section-result-assessment.png",
        imageAlt: "Archive drawers suggesting careful exception review",
      },
    ],
    image: "/images/case-payments.png",
    imageAlt: "Payment operations desk with a blurred status monitor",
    challengeImage: "/images/case-payments.png",
    challengeImageAlt: "Payment operations desk after hours",
    approachImage: "/images/section-approach.png",
    approachImageAlt: "Planning table used to design one payment lifecycle",
    solutionImage: "/images/service-fintech.png",
    solutionImageAlt: "Financial operations floor suggesting a unified rail",
    technologyImage: "/images/section-technology.png",
    technologyImageAlt: "Server hardware for payment orchestration",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getCaseStudyStory(study: CaseStudy) {
  return [
    {
      title: "Challenge",
      body: study.challenge,
      image: study.challengeImage,
      imageAlt: study.challengeImageAlt,
    },
    {
      title: "Approach",
      body: study.approach,
      image: study.approachImage,
      imageAlt: study.approachImageAlt,
    },
    {
      title: "Solution",
      body: study.solution,
      image: study.solutionImage,
      imageAlt: study.solutionImageAlt,
    },
  ] as const;
}
