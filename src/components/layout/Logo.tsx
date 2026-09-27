import { Link } from "@/i18n/navigation";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { BrandMark } from "@/components/layout/BrandMark";

type LogoProps = {
  className?: string;
  onNavigate?: () => void;
};

export function Logo({ className, onNavigate }: LogoProps) {
  return (
    <Link
      href="/"
      onClick={onNavigate}
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-full pr-2",
        className,
      )}
      aria-label={`${site.name} home`}
    >
      <span className="relative flex h-8 w-8 items-center justify-center rounded-[10px] border border-border bg-card text-foreground transition-transform duration-300 group-hover:scale-[1.04]">
        <BrandMark className="h-[22px] w-[22px]" />
      </span>
      <span className="text-[15px] font-semibold tracking-[-0.04em] text-foreground">
        {site.name}
      </span>
    </Link>
  );
}
