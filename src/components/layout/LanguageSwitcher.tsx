"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { localeNames, locales, type AppLocale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const t = useTranslations("Common");
  const locale = useLocale() as AppLocale;
  const pathname = usePathname();
  const router = useRouter();

  return (
    <label className={cn("inline-flex items-center gap-2", className)}>
      <span className="sr-only">{t("language")}</span>
      <select
        aria-label={t("language")}
        className="h-9 rounded-full border border-border bg-card px-3 text-xs font-medium text-foreground outline-none transition-colors hover:bg-card-hover focus:border-accent/50"
        value={locale}
        onChange={(event) => {
          const next = event.target.value as AppLocale;
          router.replace(pathname, { locale: next });
        }}
      >
        {locales.map((code) => (
          <option key={code} value={code} className="bg-surface text-foreground">
            {localeNames[code]}
          </option>
        ))}
      </select>
    </label>
  );
}
