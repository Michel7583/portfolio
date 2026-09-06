import { team, type TeamMember } from "@/lib/data/team";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { CoverImage } from "@/components/visual/CoverImage";

function MemberCopy({
  member,
  size = "md",
}: {
  member: TeamMember;
  size?: "md" | "lg";
}) {
  return (
    <>
      <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-accent">
        {member.role}
      </p>
      <h3
        className={
          size === "lg"
            ? "mt-2 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl"
            : "mt-2 text-xl font-semibold tracking-[-0.03em]"
        }
      >
        {member.name}
      </h3>
      <p className="mt-1 text-sm text-muted">{member.focus}</p>
      <p
        className={
          size === "lg"
            ? "mt-4 text-[15px] leading-7 text-muted sm:text-base sm:leading-8"
            : "mt-3 text-[15px] leading-7 text-muted"
        }
      >
        {member.bio}
      </p>
    </>
  );
}

export function TeamGrid() {
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
              alt={lead.imageAlt}
              wash={false}
              priority
              className="aspect-[4/5] sm:aspect-[5/4] lg:aspect-auto lg:min-h-[26rem]"
              sizes="(min-width: 1024px) 40vw, 100vw"
              imageClassName="object-top"
            />
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <MemberCopy member={lead} size="lg" />
            </div>
          </Card>
        </Reveal>
      ) : null}

      {rest.length > 0 ? (
        <ul className="grid gap-5 md:grid-cols-3">
          {rest.map((member, index) => (
            <li key={member.name}>
              <Reveal delay={index * 0.05}>
                <Card as="article" className="flex h-full flex-col overflow-hidden">
                  <CoverImage
                    src={member.image}
                    alt={member.imageAlt}
                    wash={false}
                    className="aspect-[4/5]"
                    sizes="(min-width: 768px) 30vw, 100vw"
                    imageClassName="object-top"
                  />
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <MemberCopy member={member} />
                  </div>
                </Card>
              </Reveal>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
