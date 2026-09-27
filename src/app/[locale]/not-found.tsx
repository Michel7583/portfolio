import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default async function NotFound() {
  const t = await getTranslations("NotFound");

  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <h1 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
        {t("title")}
      </h1>
      <p className="mt-4 max-w-md text-muted">{t("description")}</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/">{t("home")}</Button>
        <Button href="/contact" variant="secondary">
          {t("contact")}
        </Button>
      </div>
    </Container>
  );
}
