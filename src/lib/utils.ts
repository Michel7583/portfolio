export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

export function absoluteUrl(path = ""): string {
  const base = siteUrl();
  if (!path) return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function siteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "https://veylora.com";
}
