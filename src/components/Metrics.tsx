"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";

const stats = [
  {
    value: "10Ã-",
    label: "Faster document review",
    sub: "vs. manual sample-based review",
    accent: true,
  },
  {
    value: "100%",
    label: "Population coverage",
    sub: "on automated control tests",
    accent: false,
  },
  {
    value: "~55%",
    label: "Fewer manual hours",
    sub: "on testing and reporting tasks",
    accent: false,
  },
  {
    value: "0",
    label: "Exceptions missed",
    sub: "when full-population testing is applied",
    accent: false,
  },
];

function AnimatedStat({ value, delay }: { value: string; delay: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const el = ref.current;
    if (!el) return;
    // simple text reveal on inView
    el.style.opacity = "0";
    const timeout = setTimeout(() => {
      el.style.transition = "opacity 0.5s ease";
      el.style.opacity = "1";
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [inView, delay]);

  return (
    <span ref={ref} className="font-mono text-5xl lg:text-6xl font-bold text-accent-bright tabular-nums">
      {value}
    </span>
  );
}

export default function Metrics() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="metrics"
      ref={ref}
      className="py-32 lg:py-40 border-t border-divider"
      aria-labelledby="metrics-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="flex flex-col gap-4 mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-8 bg-border-subtle" aria-hidden="true" />
            <span className="font-mono text-xs text-text-muted uppercase tracking-widest">
              Impact
            </span>
            <div className="h-px w-8 bg-border-subtle" aria-hidden="true" />
          </div>
          <h2
            id="metrics-heading"
            className="font-fraunces text-4xl lg:text-5xl text-text-primary leading-[1.1] tracking-tight"
          >
            What automation actually delivers.
          </h2>
          <p className="font-manrope text-base text-text-secondary max-w-lg mx-auto">
            These are directional outcomes based on what shifts when manual work is replaced by
            automated testing and continuous monitoring.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border-subtle rounded-lg overflow-hidden border border-border-subtle">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-bg-elevated p-8 flex flex-col gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 + i * 0.1 }}
            >
              <AnimatedStat value={stat.value} delay={0.3 + i * 0.15} />
              <div>
                <p className="font-manrope text-sm font-semibold text-text-primary">
                  {stat.label}
                </p>
                <p className="font-manrope text-xs text-text-muted mt-0.5">{stat.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footnote */}
        <p className="mt-6 font-mono text-xs text-text-muted text-center">
          Outcomes vary by engagement type, document complexity, and prior automation maturity.
        </p>
      </div>
    </section>
  );
}
