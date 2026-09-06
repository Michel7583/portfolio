import type { Metadata } from "next";
import { site } from "@/lib/site";
import { absoluteUrl } from "@/lib/utils";

type CreateMetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function createMetadata({
  title,
  description,
  path = "/",
  keywords = [],
}: CreateMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = title.includes(site.name)
    ? title
    : `${title} | ${site.name}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      "AI software development",
      "blockchain development",
      "fintech engineering",
      "Web3",
      "machine learning",
      site.name,
      ...keywords,
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      title: fullTitle,
      description,
      siteName: site.name,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    email: site.email,
    logo: absoluteUrl(site.logo),
    description: site.description,
    slogan: site.positioning,
    areaServed: "Worldwide",
    serviceType: [
      "AI and Machine Learning Integration",
      "Blockchain and Web3 Development",
      "Fintech Software Development",
    ],
    sameAs: [
      site.social.linkedin,
      site.social.github,
      site.social.x,
      site.social.telegram,
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
    publisher: {
      "@type": "Organization",
      name: site.name,
    },
  };
}
