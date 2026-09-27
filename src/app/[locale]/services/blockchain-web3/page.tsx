import { getTranslations, setRequestLocale } from "next-intl/server";
import { getService } from "@/lib/data/services";
import { createLocalizedMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { routing } from "@/i18n/routing";
import { ServiceDetail } from "@/components/pages/ServiceDetail";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Service" });
  return createLocalizedMetadata({
    locale,
    title: `${t("blockchain-web3.title")} | ${site.name}`,
    description: t("blockchain-web3.description"),
    path: "/services/blockchain-web3",
  });
}

export default async function BlockchainPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const service = getService("blockchain-web3");
  if (!service) return null;
  return <ServiceDetail service={service} />;
}
