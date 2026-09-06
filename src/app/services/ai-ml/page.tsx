import { getService } from "@/lib/data/services";
import { createMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { ServiceDetail } from "@/components/pages/ServiceDetail";

const service = getService("ai-ml");

export const metadata = createMetadata({
  title: `AI / ML Integration | ${site.name}`,
  description:
    "Production AI systems: agents, LLM integration, RAG, predictive analytics, fraud detection, and machine learning for real products.",
  path: "/services/ai-ml",
  keywords: ["AI agents", "RAG", "LLM integration", "machine learning"],
});

export default function AiMlPage() {
  if (!service) return null;
  return <ServiceDetail service={service} />;
}
