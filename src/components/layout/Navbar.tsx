"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { primaryNav } from "@/lib/data/navigation";
import { useHydratedReducedMotion } from "@/lib/use-hydrated-reduced-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export function Navbar() {
  const pathname = usePathname();
  return <NavbarInner key={pathname} />;
}

function NavbarInner() {
  const pathname = usePathname();
  const reduceMotion = useHydratedReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    const frame = window.requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300",
        scrolled || open
          ? "border-b border-border bg-overlay shadow-[var(--shadow)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Logo />

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {primaryNav.map((item) =>
            item.children ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.href)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm text-foreground/72 transition-colors hover:text-foreground",
                    (pathname === item.href || pathname.startsWith(`${item.href}/`)) &&
                      "text-foreground",
                  )}
                  aria-expanded={openMenu === item.href}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform",
                      openMenu === item.href && "rotate-180",
                    )}
                    aria-hidden
                  />
                </Link>
                <AnimatePresence>
                  {openMenu === item.href ? (
                    <motion.div
                      initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduceMotion ? undefined : { opacity: 0, y: 6 }}
                      transition={{ duration: 0.18 }}
                      className={cn(
                        "absolute left-0 top-full pt-3",
                        item.children.length > 3 ? "w-[380px]" : "w-[320px]",
                      )}
                    >
                      <div className="glass rounded-2xl p-2 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block rounded-xl px-3.5 py-3 transition-colors hover:bg-card-hover"
                          >
                            <span className="block text-sm font-medium text-foreground">
                              {child.label}
                            </span>
                            <span className="mt-0.5 block text-xs leading-5 text-muted">
                              {child.description}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm text-foreground/72 transition-colors hover:text-foreground",
                  pathname === item.href && "text-foreground",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Button href="/contact" size="sm">
            Start a Project
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id={menuId}
            aria-label="Mobile"
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduceMotion ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-overlay backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-5">
              {primaryNav.map((item) => (
                <div key={item.href} className="border-b border-border py-2">
                  <Link
                    href={item.href}
                    className="block min-h-11 py-2 text-lg font-medium tracking-[-0.02em]"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children ? (
                    <div className="mb-2 ml-1 flex flex-col">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="py-2 text-sm text-muted"
                          onClick={() => setOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
              <div className="pt-4">
                <Button href="/contact" className="w-full" size="lg">
                  Start a Project
                </Button>
              </div>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
