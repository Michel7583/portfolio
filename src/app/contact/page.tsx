import { createMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { ContactForm } from "@/components/contact/ContactForm";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/pages/PageHero";

export const metadata = createMetadata({
  title: `Contact | ${site.name}`,
  description: `Start a project with ${site.name}. Tell us what you are building and we typically respond within 1 business day.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Build Something Significant"
        description="Tell us about your product, technical challenge, or idea."
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
                    Response
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {site.responseTime} Serious briefs get a considered reply,
                    not an automated sequence.
                  </p>
                </Card>
                <Card hover={false} className="p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-accent">
                    Email
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
                    Useful to include
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
                    <li>The product and the user</li>
                    <li>What already exists</li>
                    <li>Constraints around regulation, timeline, or stack</li>
                    <li>What a successful first release looks like</li>
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
