"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useHydratedReducedMotion } from "@/lib/use-hydrated-reduced-motion";

type CounterProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
};

export function Counter({
  value,
  suffix = "",
  prefix = "",
  duration = 1400,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useHydratedReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      if (reduceMotion) {
        setDisplay(value);
        return;
      }
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduceMotion, value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
