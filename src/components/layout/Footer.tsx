import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { footerCompany, footerServices } from "@/lib/data/navigation";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";

function SocialIcon({
  className,
  path,
}: {
  className?: string;
  path: string;
}) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="currentColor" d={path} />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-7 text-muted">
              {`${site.positioning} We partner with ambitious companies to turn complex ideas into production-ready software.`}
            </p>
          </div>

          <div className="flex flex-col gap-10 lg:col-span-8">
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 min-[1100px]:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(15rem,1.35fr)_auto]">
            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-foreground/55">
                Services
              </p>
              <ul className="mt-4 space-y-3">
                {footerServices.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-foreground/55">
                Company
              </p>
              <ul className="mt-4 space-y-3">
                {footerCompany.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-foreground/55">
                Contact
              </p>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="flex max-w-full items-start gap-2 text-sm text-muted transition-colors hover:text-foreground"
                  >
                    <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                    <span className="min-w-0 break-all">{site.email}</span>
                  </a>
                </li>
                <li>
                  <p className="text-sm leading-6 text-muted">{site.responseTime}</p>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-foreground transition-colors hover:text-accent"
                  >
                    Start a project
                  </Link>
                </li>
              </ul>
            </div>
            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-foreground/55">
                Social
              </p>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href={site.social.linkedin}
                    className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <SocialIcon
                      className="h-4 w-4"
                      path="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z"
                    />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={site.social.telegram}
                    className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <SocialIcon
                      className="h-4 w-4"
                      path="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
                    />
                    Telegram
                  </a>
                </li>
                {/* <li>
                  <a
                    href={site.social.x}
                    className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <SocialIcon
                      className="h-4 w-4"
                      path="M14.72 10.39 21.2 3h-1.54l-5.62 6.42L9.55 3H3.2l6.8 9.73L3.2 21h1.54l5.94-6.79L14.4 21h6.35l-6.03-10.61Zm-2.1 2.4-.69-.97-5.48-7.7h2.36l4.42 6.21.69.97 5.75 8.08h-2.36l-4.69-6.59Z"
                    />
                    X
                  </a>
                </li> */}
                <li>
                  <a
                    href={site.social.github}
                    className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <SocialIcon
                      className="h-4 w-4"
                      path="M12 .3a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0 0 12 .3Z"
                    />
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>

            <div className="border-t border-border pt-8">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-foreground/55">
                Location
              </p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-2">
                <p className="flex items-center gap-2 text-sm text-foreground">
                  <MapPin className="h-4 w-4 shrink-0 text-muted" aria-hidden />
                  {site.location.title}
                </p>
                {site.location.lines.map((line) => (
                  <p key={line} className="text-sm leading-6 text-muted">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {site.copyrightYear} {site.name}. All rights reserved.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="transition-colors hover:text-foreground"
          >
            {site.email}
          </a>
          <p className="tracking-[0.16em] uppercase">{site.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
