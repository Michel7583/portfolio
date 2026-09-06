import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function TextLink({ href, children, className }: TextLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent",
        className,
      )}
    >
      {children}
      <ArrowRight
        className="h-4 w-4 transition-transform duration-200 motion-safe:group-hover:translate-x-0.5"
        aria-hidden
      />
    </Link>
  );
}
