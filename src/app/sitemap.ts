import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/data/case-studies";
import { locales } from "@/i18n/routing";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/services/ai-ml",
    "/services/blockchain-web3",
    "/services/fintech",
    "/solutions",
    "/case-studies",
    "/about",
    "/contact",
    ...caseStudies.map((study) => `/case-studies/${study.slug}`),
  ];

  return locales.flatMap((locale) =>
    routes.map((path) => ({
      url: `${site.url}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1 : 0.7,
    })),
  );
}
