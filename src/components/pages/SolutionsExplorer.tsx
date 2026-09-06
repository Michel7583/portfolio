"use client";

import { useState, useSyncExternalStore } from "react";
import { solutions } from "@/lib/data/solutions";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

function subscribeHash(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}

function getHash() {
  return window.location.hash.replace("#", "");
}

export function SolutionsExplorer() {
  const hash = useSyncExternalStore(subscribeHash, getHash, () => "");
  const [manualSlug, setManualSlug] = useState<string | null>(null);
  const hashSlug = solutions.some((solution) => solution.slug === hash)
    ? hash
    : "";
  const fallbackSlug = hashSlug || solutions[0]?.slug || "";
  const openSlug = manualSlug ?? fallbackSlug;

  return (
    <div className="space-y-4">
      {solutions.map((solution, index) => {
        const open = openSlug === solution.slug;
        return (
          <Card
            key={solution.slug}
            id={solution.slug}
            as="article"
            hover={false}
            className="scroll-mt-28 p-6 sm:p-8"
          >
            <p className="font-mono text-xs text-accent">0{index + 1}</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
              {solution.title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
              {solution.summary}
            </p>
            <button
              type="button"
              className="mt-5 text-sm font-medium text-foreground hover:text-accent"
              aria-expanded={open}
              onClick={() => setManualSlug(open ? "" : solution.slug)}
            >
              {open ? "Hide details" : "Learn More"}
            </button>
            <div
              className={cn(
                "grid overflow-hidden transition-[grid-template-rows,opacity] duration-300",
                open ? "mt-6 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="min-h-0 space-y-5">
                <div>
                  <h3 className="text-sm font-semibold">Problem</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    {solution.problem}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Solution</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    {solution.solution}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Key features</h3>
                  <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                    {solution.features.map((item) => (
                      <li key={item} className="text-sm leading-6 text-foreground/75">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {solution.technology.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
                <Button href="/contact" size="sm">
                  Start a Project
                </Button>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
