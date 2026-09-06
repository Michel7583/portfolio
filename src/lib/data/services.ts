export type ServiceCapability = {
  title: string;
  description: string;
};

export type Service = {
  slug: "ai-ml" | "blockchain-web3" | "fintech";
  href: string;
  eyebrow: string;
  title: string;
  heroTitle: string;
  shortTitle: string;
  cardDescription: string;
  description: string;
  problem: string;
  cta: string;
  cardCapabilities: string[];
  capabilities: string[];
  detailedCapabilities: ServiceCapability[];
  technologies: string[];
  useCases: ServiceCapability[];
  caseStudySlug: string;
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "ai-ml",
    href: "/services/ai-ml",
    eyebrow: "AI / ML",
    title: "AI / ML",
    heroTitle: "Turn Data Into Intelligence",
    shortTitle: "AI / ML",
    cardDescription:
      "Turn data into products that can decide, explain, and automate—without losing control.",
    description:
      "We build AI that sits inside real products. Models, retrieval, and agents are designed for the people who will use them and the teams who will operate them.",
    problem:
      "Most AI work stops at a demo. The hard part is connecting models to private data, keeping answers reliable, and putting intelligence into a product operators can trust.",
    cta: "Explore",
    cardCapabilities: [
      "AI Agents",
      "LLM Integration",
      "Predictive Analytics",
      "Fraud Detection",
    ],
    capabilities: [
      "AI Agents",
      "LLM Integration",
      "RAG Systems",
      "Predictive Analytics",
      "Machine Learning",
      "Fraud Detection",
      "Recommendation Systems",
      "AI Automation",
    ],
    detailedCapabilities: [
      {
        title: "AI Agents",
        description:
          "Automate complex workflows using intelligent agents that can retrieve context, take approved actions, and stay inside business rules.",
      },
      {
        title: "LLM Applications",
        description:
          "Build production-ready AI products using modern language models—with evaluation, access control, and a path to change vendors.",
      },
      {
        title: "RAG",
        description:
          "Connect AI systems to private company knowledge so answers come from your documents, data, and policies—not the open internet.",
      },
      {
        title: "Predictive Analytics",
        description:
          "Use data to predict behavior, risk, and business outcomes, then put those predictions where decisions actually happen.",
      },
      {
        title: "Fraud Detection",
        description:
          "Identify suspicious financial activity using intelligent models combined with the rules your risk team already trusts.",
      },
      {
        title: "AI Automation",
        description:
          "Automate repetitive business processes—documents, operations, and review queues—without removing human control.",
      },
    ],
    technologies: ["Python", "LLMs", "RAG", "AI Agents", "PostgreSQL", "AWS"],
    useCases: [
      {
        title: "Financial copilots",
        description:
          "Assistants that can see accounts and policies, then explain a recommendation in language a customer or analyst can check.",
      },
      {
        title: "Credit and risk scoring",
        description:
          "Models that rank applicants or transactions and show the evidence behind the score.",
      },
      {
        title: "Operations automation",
        description:
          "Agents that prepare cases, draft responses, and route exceptions to the right person.",
      },
    ],
    caseStudySlug: "ai-powered-fintech-platform",
    image: "/images/service-ai.png",
    imageAlt: "Abstract laboratory wall with connected intelligence nodes",
  },
  {
    slug: "blockchain-web3",
    href: "/services/blockchain-web3",
    eyebrow: "Blockchain / Web3",
    title: "Blockchain / Web3",
    heroTitle: "Build Secure, Transparent Digital Infrastructure",
    shortTitle: "Blockchain",
    cardDescription:
      "Build systems that move value with clear rules, visible history, and a product people can finish.",
    description:
      "We use blockchain when transparency, settlement, or programmable assets are the point—and we wrap it in an application layer users and operators can actually run.",
    problem:
      "On-chain prototypes rarely become products. Wallets are hard to recover, operations cannot see failed transfers, and the business rules live in code nobody can supervise.",
    cta: "Explore",
    cardCapabilities: [
      "Smart Contracts",
      "Wallet Infrastructure",
      "Tokenization",
      "On-chain Analytics",
    ],
    capabilities: [
      "Smart Contracts",
      "DeFi",
      "Wallet Infrastructure",
      "Tokenization",
      "Web3 Applications",
      "Blockchain Identity",
      "On-chain Analytics",
      "EVM Development",
    ],
    detailedCapabilities: [
      {
        title: "Smart Contracts",
        description:
          "We build secure blockchain logic that automatically executes financial and business rules—tested, reviewable, and ready for real volume.",
      },
      {
        title: "DeFi",
        description:
          "Lending, settlement, and liquidity products designed so risk, oracles, and user flows are as explicit as the on-chain math.",
      },
      {
        title: "Wallet Infrastructure",
        description:
          "Ways for people and businesses to hold and move assets without needing to understand seed phrases, gas, or protocol errors.",
      },
      {
        title: "Tokenization",
        description:
          "Issue and control digital representations of assets, with the transfer rules finance and compliance teams expect.",
      },
      {
        title: "Web3 Applications",
        description:
          "Product interfaces that hide protocol complexity so a transfer, mint, or claim feels like finishing a normal financial task.",
      },
      {
        title: "Blockchain Identity",
        description:
          "Prove who can act, what they can move, and what has already been attested—without turning identity into a public liability.",
      },
      {
        title: "On-chain Analytics",
        description:
          "Make on-chain activity visible to product, finance, and risk—balances, events, exceptions, and health.",
      },
      {
        title: "EVM Development",
        description:
          "Consistent contract interfaces and deployment pipelines across EVM networks, with monitoring after they go live.",
      },
    ],
    technologies: ["Solidity", "EVM", "Smart Contracts", "Web3", "Next.js", "AWS"],
    useCases: [
      {
        title: "Settlement and issuance",
        description:
          "Move or issue value with rules that execute the same way every time, and an operations view when they do not.",
      },
      {
        title: "Embedded wallets",
        description:
          "Let customers hold assets inside your product, with recovery and policy controls your team can support.",
      },
      {
        title: "Tokenized assets",
        description:
          "Represent instruments on-chain while keeping transfer restrictions and reporting in the business layer.",
      },
    ],
    caseStudySlug: "web3-settlement-platform",
    image: "/images/service-blockchain.png",
    imageAlt: "Precision metal lattice suggesting secure digital infrastructure",
  },
  {
    slug: "fintech",
    href: "/services/fintech",
    eyebrow: "Fintech",
    title: "Fintech",
    heroTitle: "Build the Financial Products of Tomorrow",
    shortTitle: "Fintech",
    cardDescription:
      "Build products that move money, assess risk, and stay understandable to the people who run them.",
    description:
      "We design and build financial software for payments, lending, banking, and the operational systems around them. Money movement, data, and audit are treated as first-class concerns.",
    problem:
      "Financial products fail when payments, ledgers, and risk live in separate tools. Adding a provider or a market should not require rewriting the product.",
    cta: "Explore",
    cardCapabilities: [
      "Payments",
      "Digital Banking",
      "Lending",
      "Risk Management",
    ],
    capabilities: [
      "Payments",
      "Digital Banking",
      "Lending",
      "Credit Scoring",
      "Open Banking",
      "Personal Finance",
      "Financial APIs",
      "Risk Management",
    ],
    detailedCapabilities: [
      {
        title: "Payments",
        description:
          "Initiate, track, and reconcile money movement across providers—so support and finance see the same transfer.",
      },
      {
        title: "Digital Banking",
        description:
          "Accounts, statements, and dashboards built on a ledger the operations team can trust.",
      },
      {
        title: "Lending",
        description:
          "Origination, decisioning, and servicing with transparent reasons a borrower and an analyst can both understand.",
      },
      {
        title: "Credit Scoring",
        description:
          "Traditional and alternative-data scoring that explains itself to the people accountable for the book.",
      },
      {
        title: "Open Banking",
        description:
          "Connect accounts, enrich transactions, and turn consented financial data into a product feature.",
      },
      {
        title: "Personal Finance",
        description:
          "Turn raw transactions into insight customers can act on—without pretending a chart is advice.",
      },
      {
        title: "Financial APIs",
        description:
          "Stable interfaces for partners and internal platforms, documented for the teams who will depend on them.",
      },
      {
        title: "Risk Management",
        description:
          "Policy, monitoring, and case management designed around how risk teams actually work.",
      },
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Financial APIs",
    ],
    useCases: [
      {
        title: "Payment products",
        description:
          "Checkout, payouts, and reconciliation with one operational picture of each transfer.",
      },
      {
        title: "Lending platforms",
        description:
          "From application to decision to servicing, with policy still owned by risk.",
      },
      {
        title: "Banking experiences",
        description:
          "Account home, activity, and money movement that operations can support.",
      },
    ],
    caseStudySlug: "real-time-payment-infrastructure",
    image: "/images/service-fintech.png",
    imageAlt: "Quiet financial workspace with a tablet and writing instruments",
  },
];

export function getService(slug: Service["slug"]): Service | undefined {
  return services.find((service) => service.slug === slug);
}
