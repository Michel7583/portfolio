import { team } from "@/lib/data/team";
import { site } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import { CoverImage } from "@/components/visual/CoverImage";

export function TeamPreview() {
  return (
    <Section
      size="md"
      title="The people who build it"
      description={`${site.name} is led by practice heads across product, AI, blockchain, and fintech—not a rotating bench of interchangeable contractors.`}
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member, index) => (
          <li key={member.name}>
            <Reveal delay={index * 0.05}>
              <article>
                <CoverImage
                  src={member.image}
                  alt={member.imageAlt}
                  wash={false}
                  className="aspect-[4/5] rounded-2xl border border-border"
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                  imageClassName="object-top"
                />
                <p className="mt-4 text-[12px] font-medium uppercase tracking-[0.16em] text-accent">
                  {member.role}
                </p>
                <h3 className="mt-2 text-lg font-semibold tracking-[-0.03em]">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-muted">{member.focus}</p>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <TextLink href="/about#team">Meet the team</TextLink>
      </div>
    </Section>
  );
}
