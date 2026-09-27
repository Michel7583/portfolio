import { getTranslations, setRequestLocale } from "next-intl/server";
import { createLocalizedMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { routing } from "@/i18n/routing";
import { ContactForm } from "@/components/contact/ContactForm";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/pages/PageHero";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return createLocalizedMetadata({
    locale,
    title: t("contactTitle", { name: site.name }),
    description: t("contactDescription", { name: site.name }),
    path: "/contact",
  });
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ContactPage");
  const ts = await getTranslations("Site");

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        image="/images/hero-atmosphere.png"
        imageAlt=""
      />
      <section className="pb-20 sm:pb-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <Reveal>
              <div className="space-y-5">
                <Card hover={false} className="p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-accent">
                    {t("responseTitle")}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {t("responseBody", { responseTime: ts("responseTime") })}
                  </p>
                </Card>
                <Card hover={false} className="p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-accent">
                    {t("emailTitle")}
                  </p>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-3 block text-sm text-foreground hover:text-accent"
                  >
                    {site.email}
                  </a>
                </Card>
                <Card hover={false} className="p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-accent">
                    {t("locationTitle")}
                  </p>
                  <p className="mt-3 text-sm text-foreground">{ts("locationTitle")}</p>
                  <ul className="mt-2 space-y-1 text-sm leading-6 text-muted">
                    <li>{ts("locationLine1")}</li>
                    <li>{ts("locationLine2")}</li>
                  </ul>
                </Card>
                <Card hover={false} className="p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-accent">
                    {t("usefulTitle")}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
                    <li>{t("useful1")}</li>
                    <li>{t("useful2")}</li>
                    <li>{t("useful3")}</li>
                    <li>{t("useful4")}</li>
                  </ul>
                </Card>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <Card hover={false} className="p-6 sm:p-8">
                <ContactForm />
              </Card>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
