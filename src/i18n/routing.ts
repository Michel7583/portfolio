import { defineRouting } from "next-intl/routing";

export const locales = ["en", "zh", "ja", "es", "fr", "de", "pt"] as const;

export type AppLocale = (typeof locales)[number];

export const localeNames: Record<AppLocale, string> = {
  en: "English",
  zh: "中文",
  ja: "日本語",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  pt: "Português",
};

export const localeOgTags: Record<AppLocale, string> = {
  en: "en_US",
  zh: "zh_CN",
  ja: "ja_JP",
  es: "es_ES",
  fr: "fr_FR",
  de: "de_DE",
  pt: "pt_BR",
};

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "always",
});
