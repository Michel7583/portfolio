import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  id?: string;
  as?: "div" | "article" | "li";
};

export function Card({
  children,
  className,
  hover = true,
  id,
  as: Tag = "div",
}: CardProps) {
  return (
    <Tag
      id={id}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow)]",
        hover &&
          "transition-[transform,background-color,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:bg-card-hover",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
