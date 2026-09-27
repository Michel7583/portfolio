import type { Metadata } from "next";
import { site } from "@/lib/site";
import { absoluteUrl } from "@/lib/utils";
import { localeOgTags, locales, type AppLocale } from "@/i18n/routing";

type CreateMetadataInput = {
  title: string;
  description: string;
  path?: string;
  locale?: string;
  keywords?: string[];
};

function localizedPath(locale: string, path = "/") {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (clean === "/") return `/${locale}`;
  return `/${locale}${clean}`;
}

export function createLocalizedMetadata({
  title,
  description,
  path = "/",
  locale = "en",
  keywords = [],
}: CreateMetadataInput): Metadata {
  const localePath = localizedPath(locale, path);
  const url = absoluteUrl(localePath);
  const fullTitle = title.includes(site.name)
    ? title
    : `${title} | ${site.name}`;

  const languages = Object.fromEntries(
    locales.map((code) => [code, absoluteUrl(localizedPath(code, path))]),
  );

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
      languages: {
        ...languages,
        "x-default": absoluteUrl(localizedPath("en", path)),
      },
    },
    openGraph: {
      type: "website",
      url,
      title: fullTitle,
      description,
      siteName: site.name,
      locale: localeOgTags[(locale as AppLocale) in localeOgTags ? (locale as AppLocale) : "en"],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

/** @deprecated Prefer createLocalizedMetadata */
export function createMetadata(input: CreateMetadataInput): Metadata {
  return createLocalizedMetadata(input);
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
    inLanguage: [...locales],
    publisher: {
      "@type": "Organization",
      name: site.name,
    },
  };
}
