import { getService } from "@/lib/data/services";
import { createMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { ServiceDetail } from "@/components/pages/ServiceDetail";

const service = getService("fintech");

export const metadata = createMetadata({
  title: `Fintech Software Development | ${site.name}`,
  description:
    "Modern financial products: digital banking, payments, lending, credit scoring, open banking, and risk systems.",
  path: "/services/fintech",
  keywords: ["fintech", "payments", "lending", "open banking"],
});

export default function FintechPage() {
  if (!service) return null;
  return <ServiceDetail service={service} />;
}
