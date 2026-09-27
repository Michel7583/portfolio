import { getTranslations } from "next-intl/server";
import { team } from "@/lib/data/team";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import { CoverImage } from "@/components/visual/CoverImage";

const memberKeys = ["kannan", "marcus", "amira", "julian"] as const;

export async function TeamPreview() {
  const t = await getTranslations("Home");
  const tt = await getTranslations("Team");

  return (
    <Section size="md" title={t("teamTitle")} description={t("teamDesc")}>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member, index) => {
          const key = memberKeys[index] ?? "kannan";
          return (
            <li key={member.name}>
              <Reveal delay={index * 0.05}>
                <article>
                  <CoverImage
                    src={member.image}
                    alt={tt(`${key}.imageAlt`)}
                    wash={false}
                    className="aspect-[4/5] rounded-2xl border border-border"
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                    imageClassName="object-top"
                  />
                  <p className="mt-4 text-[12px] font-medium uppercase tracking-[0.16em] text-accent">
                    {tt(`${key}.role`)}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold tracking-[-0.03em]">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{tt(`${key}.focus`)}</p>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ul>
      <div className="mt-8">
        <TextLink href="/about#team">{t("teamCta")}</TextLink>
      </div>
    </Section>
  );
}
