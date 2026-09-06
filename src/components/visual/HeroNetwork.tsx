"use client";

import { motion } from "framer-motion";
import { useHydratedReducedMotion } from "@/lib/use-hydrated-reduced-motion";

const nodes = [
  { id: "ai", label: "AI", x: 50, y: 14 },
  { id: "chain", label: "Blockchain", x: 12, y: 50 },
  { id: "pay", label: "Payments", x: 88, y: 50 },
  { id: "fintech", label: "Fintech", x: 50, y: 86 },
] as const;

export function HeroNetwork() {
  const reduceMotion = useHydratedReducedMotion();

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[480px]"
      aria-hidden
    >
      <div className="absolute inset-[16%] rounded-full border border-border" />

      <svg viewBox="0 0 100 100" className="h-full w-full">
        {nodes.map((node) => (
          <g key={node.id}>
            <line
              x1="50"
              y1="50"
              x2={node.x}
              y2={node.y}
              stroke="color-mix(in srgb, var(--accent) 40%, transparent)"
              strokeWidth="0.35"
            />
            <motion.circle
              r="0.5"
              fill="#9bb6ff"
              animate={
                reduceMotion
                  ? { cx: node.x, cy: node.y, opacity: 0 }
                  : { cx: [50, node.x], cy: [50, node.y], opacity: [0, 0.9, 0] }
              }
              transition={{
                duration: reduceMotion ? 0 : 4,
                repeat: reduceMotion ? 0 : Infinity,
                delay: reduceMotion ? 0 : nodes.indexOf(node) * 0.55,
                ease: "easeInOut",
              }}
            />
          </g>
        ))}
      </svg>

      {nodes.map((node) => (
        <div
          key={node.id}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
        >
          <div className="rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-medium tracking-[0.04em] text-foreground/80">
            {node.label}
          </div>
        </div>
      ))}

      <div className="absolute left-1/2 top-1/2 w-[46%] -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="rounded-2xl border border-border bg-surface px-4 py-4 sm:px-5">
          <p className="text-[10px] uppercase tracking-[0.2em] text-accent">
            Core
          </p>
          <p className="mt-1 text-sm font-semibold tracking-[-0.03em] text-foreground">
            Financial Intelligence
          </p>
        </div>
      </div>
    </div>
  );
}
