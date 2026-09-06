export type Solution = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  features: string[];
  technology: string[];
};

export const solutions: Solution[] = [
  {
    slug: "ai-financial-platforms",
    title: "AI Financial Platforms",
    summary: "Open banking + AI + personalized financial insights.",
    problem:
      "Customers have accounts, transactions, and questions. Most products still answer with generic content or a chatbot that cannot see the data.",
    solution:
      "An AI layer connected to real financial data. The product can explain cash flow, recommend next actions, and cite the accounts or documents behind each answer.",
    features: [
      "Account-aware guidance instead of generic chat",
      "Retrieval over statements, policies, and product catalogs",
      "Controls for privacy, advice language, and review",
      "Measurement of recommendation quality",
    ],
    technology: ["Open Banking", "LLM", "RAG", "Next.js", "PostgreSQL"],
  },
  {
    slug: "intelligent-lending",
    title: "Intelligent Lending",
    summary: "Alternative data + AI credit scoring + risk analysis.",
    problem:
      "Traditional credit files miss too many applicants. Faster decisions often mean less visibility for risk teams.",
    solution:
      "An origination and decisioning platform that combines conventional and alternative data, explains why a decision was made, and keeps policy in the hands of underwriting.",
    features: [
      "Configurable scorecards and policy rules",
      "Clear reasons for approve, review, or decline",
      "Analyst case management",
      "Monitoring for drift and approval quality",
    ],
    technology: [
      "Credit Scoring",
      "Alternative Data",
      "Risk Engine",
      "Python",
      "PostgreSQL",
    ],
  },
  {
    slug: "digital-banking",
    title: "Digital Banking",
    summary: "Accounts + payments + financial dashboards.",
    problem:
      "Banking products stall when ledgers, payments, and operations live in separate tools the customer never sees as one product.",
    solution:
      "A shared foundation for accounts, payments, notifications, and partner APIs—with the operational consoles required to run the product.",
    features: [
      "Customer and operations views on one data model",
      "Provider-agnostic payment and KYC integrations",
      "Role-based access and audit logs",
      "A path to cards, lending, or wealth later",
    ],
    technology: ["Accounts", "Payments", "Ledgers", "APIs", "AWS"],
  },
  {
    slug: "payment-infrastructure",
    title: "Payment Infrastructure",
    summary: "Initiation, reconciliation, payouts, and exception handling.",
    problem:
      "Each payment provider speaks a different status language. Finance cannot reconcile, support cannot explain a transfer, and a new rail means a rewrite.",
    solution:
      "A payment domain layer with one lifecycle model, ledger-friendly events, and an operations console. The product stays simple. The infrastructure absorbs provider complexity.",
    features: [
      "Canonical payment states across rails",
      "Webhook ingestion and reconciliation",
      "Payouts and exception queues",
      "A single operational view of a transfer",
    ],
    technology: ["NestJS", "PostgreSQL", "Redis", "AWS", "CI/CD"],
  },
  {
    slug: "web3-financial-applications",
    title: "Web3 Financial Applications",
    summary: "Wallets + smart contracts + tokenized assets.",
    problem:
      "Protocol prototypes do not become products until wallets, controls, and operations are designed for the people who will use and supervise them.",
    solution:
      "Application-layer Web3: usable wallet flows, policy-aware on-chain logic, and analytics so product and risk teams can see what is happening.",
    features: [
      "Embedded or self-custody wallet experiences",
      "Transfer and issuance controls",
      "Indexing and operational visibility",
      "A clear boundary between protocol and business systems",
    ],
    technology: ["Wallets", "Smart Contracts", "EVM", "Indexing", "Next.js"],
  },
  {
    slug: "ai-saas",
    title: "AI SaaS",
    summary: "AI agents + RAG + automation + analytics.",
    problem:
      "A promising assistant fails enterprise review when it cannot isolate tenants, cite sources, or connect to the systems buyers already run.",
    solution:
      "A multi-tenant AI product foundation: retrieval, constrained agents, admin controls, and usage analytics ready for B2B rollout.",
    features: [
      "Workspace isolation and permissions",
      "Cited answers with evaluation hooks",
      "Automation that can be reviewed and paused",
      "SSO, usage, and admin surfaces",
    ],
    technology: ["LLM", "RAG", "Python", "PostgreSQL", "AWS"],
  },
];

export function getSolution(slug: string): Solution | undefined {
  return solutions.find((solution) => solution.slug === slug);
}
