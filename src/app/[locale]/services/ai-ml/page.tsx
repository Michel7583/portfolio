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
    title: `${t("ai-ml.title")} | ${site.name}`,
    description: t("ai-ml.description"),
    path: "/services/ai-ml",
  });
}

export default async function AiMlPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const service = getService("ai-ml");
  if (!service) return null;
  return <ServiceDetail service={service} />;
}
