import { getTranslations } from "next-intl/server";
import { team } from "@/lib/data/team";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { CoverImage } from "@/components/visual/CoverImage";

const memberKeys = ["kannan", "marcus", "amira", "julian"] as const;

export async function TeamGrid() {
  const t = await getTranslations("Team");
  const [lead, ...rest] = team;

  return (
    <div className="space-y-6">
      {lead ? (
        <Reveal>
          <Card
            as="article"
            hover={false}
            className="grid overflow-hidden lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]"
          >
            <CoverImage
              src={lead.image}
              alt={t("kannan.imageAlt")}
              wash={false}
              priority
              className="aspect-[4/5] sm:aspect-[5/4] lg:aspect-auto lg:min-h-[26rem]"
              sizes="(min-width: 1024px) 40vw, 100vw"
              imageClassName="object-top"
            />
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-accent">
                {t("kannan.role")}
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                {lead.name}
              </h3>
              <p className="mt-1 text-sm text-muted">{t("kannan.focus")}</p>
              <p className="mt-4 text-[15px] leading-7 text-muted sm:text-base sm:leading-8">
                {t("kannan.bio")}
              </p>
            </div>
          </Card>
        </Reveal>
      ) : null}

      {rest.length > 0 ? (
        <ul className="grid gap-5 md:grid-cols-3">
          {rest.map((member, index) => {
            const key = memberKeys[index + 1] ?? "marcus";
            return (
              <li key={member.name}>
                <Reveal delay={index * 0.05}>
                  <Card as="article" className="flex h-full flex-col overflow-hidden">
                    <CoverImage
                      src={member.image}
                      alt={t(`${key}.imageAlt`)}
                      wash={false}
                      className="aspect-[4/5]"
                      sizes="(min-width: 768px) 30vw, 100vw"
                      imageClassName="object-top"
                    />
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-accent">
                        {t(`${key}.role`)}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em]">
                        {member.name}
                      </h3>
                      <p className="mt-1 text-sm text-muted">{t(`${key}.focus`)}</p>
                      <p className="mt-3 text-[15px] leading-7 text-muted">
                        {t(`${key}.bio`)}
                      </p>
                    </div>
                  </Card>
                </Reveal>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
