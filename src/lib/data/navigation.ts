export type NavItem = {
  label: string;
  href: string;
  children?: Array<{
    label: string;
    href: string;
    description: string;
  }>;
};

export const primaryNav: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "AI / ML",
        href: "/services/ai-ml",
        description: "Turn data into products people can use.",
      },
      {
        label: "Blockchain / Web3",
        href: "/services/blockchain-web3",
        description: "Secure, transparent digital infrastructure.",
      },
      {
        label: "Fintech",
        href: "/services/fintech",
        description: "Payments, lending, banking, and financial APIs.",
      },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      {
        label: "AI Financial Platforms",
        href: "/solutions#ai-financial-platforms",
        description: "Open banking, AI, and personalized insight.",
      },
      {
        label: "Intelligent Lending",
        href: "/solutions#intelligent-lending",
        description: "Credit decisioning with explainable risk.",
      },
      {
        label: "Digital Banking",
        href: "/solutions#digital-banking",
        description: "Accounts, payments, and financial dashboards.",
      },
      {
        label: "Payment Infrastructure",
        href: "/solutions#payment-infrastructure",
        description: "Orchestration, reconciliation, and payouts.",
      },
      {
        label: "Web3 Financial Applications",
        href: "/solutions#web3-financial-applications",
        description: "Wallets, contracts, and tokenized assets.",
      },
      {
        label: "AI SaaS",
        href: "/solutions#ai-saas",
        description: "Agents, retrieval, automation, and analytics.",
      },
    ],
  },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
];

export const footerServices = [
  { label: "AI / ML", href: "/services/ai-ml" },
  { label: "Blockchain / Web3", href: "/services/blockchain-web3" },
  { label: "Fintech", href: "/services/fintech" },
];

export const footerCompany = [
  { label: "About", href: "/about" },
  { label: "Mission & Vision", href: "/about#mission" },
  { label: "Team", href: "/about#team" },
  { label: "Partners", href: "/#partners" },
  { label: "Solutions", href: "/solutions" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];
