import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-accent-strong text-inverse hover:bg-accent shadow-[0_0_0_1px_var(--border),0_10px_30px_color-mix(in_srgb,var(--accent)_22%,transparent)]",
  secondary:
    "bg-card text-foreground border border-border hover:bg-card-hover hover:border-border-strong",
  ghost: "text-foreground/80 hover:text-foreground hover:bg-card",
} as const;

const sizes = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[15px]",
} as const;

type ButtonVariant = keyof typeof variants;
type ButtonSize = keyof typeof sizes;

type BaseProps = {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: never;
  };

type ButtonAsLink = BaseProps & {
  href: string;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-[-0.01em] transition-[color,background-color,border-color,box-shadow,transform] duration-200 motion-safe:hover:-translate-y-px motion-safe:active:scale-[0.985] disabled:pointer-events-none disabled:opacity-50 [&_svg]:transition-transform [&_svg]:duration-200 motion-safe:hover:[&_svg]:translate-x-0.5",
    variants[variant],
    sizes[size],
    className,
  );

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;

  return (
    <button {...buttonProps} type={buttonProps.type ?? "button"} className={classes}>
      {children}
    </button>
  );
}
