import type { NavItem } from "@/lib/data/navigation";

type Translate = (key: string) => string;

export function getPrimaryNav(t: Translate): NavItem[] {
  return [
    {
      label: t("services"),
      href: "/services",
      children: [
        {
          label: t("servicesAi"),
          href: "/services/ai-ml",
          description: t("servicesAiDesc"),
        },
        {
          label: t("servicesBlockchain"),
          href: "/services/blockchain-web3",
          description: t("servicesBlockchainDesc"),
        },
        {
          label: t("servicesFintech"),
          href: "/services/fintech",
          description: t("servicesFintechDesc"),
        },
      ],
    },
    {
      label: t("solutions"),
      href: "/solutions",
      children: [
        {
          label: t("solAiFinancial"),
          href: "/solutions#ai-financial-platforms",
          description: t("solAiFinancialDesc"),
        },
        {
          label: t("solLending"),
          href: "/solutions#intelligent-lending",
          description: t("solLendingDesc"),
        },
        {
          label: t("solBanking"),
          href: "/solutions#digital-banking",
          description: t("solBankingDesc"),
        },
        {
          label: t("solPayments"),
          href: "/solutions#payment-infrastructure",
          description: t("solPaymentsDesc"),
        },
        {
          label: t("solWeb3"),
          href: "/solutions#web3-financial-applications",
          description: t("solWeb3Desc"),
        },
        {
          label: t("solAiSaas"),
          href: "/solutions#ai-saas",
          description: t("solAiSaasDesc"),
        },
      ],
    },
    { label: t("caseStudies"), href: "/case-studies" },
    { label: t("about"), href: "/about" },
  ];
}

export function getFooterServices(t: Translate) {
  return [
    { label: t("servicesAi"), href: "/services/ai-ml" },
    { label: t("servicesBlockchain"), href: "/services/blockchain-web3" },
    { label: t("servicesFintech"), href: "/services/fintech" },
  ];
}

export function getFooterCompany(t: Translate) {
  return [
    { label: t("about"), href: "/about" },
    { label: t("missionVision"), href: "/about#mission" },
    { label: t("team"), href: "/about#team" },
    { label: t("partners"), href: "/#partners" },
    { label: t("solutions"), href: "/solutions" },
    { label: t("caseStudies"), href: "/case-studies" },
    { label: t("contactLink"), href: "/contact" },
  ];
}
