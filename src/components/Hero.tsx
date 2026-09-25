"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const riskData = [
  { process: "Revenue Recognition", risk: "High", status: "Flagged", riskLevel: "alert" },
  { process: "Procurement Controls", risk: "Medium", status: "Testing", riskLevel: "bright" },
  { process: "Payroll Authorization", risk: "High", status: "Verified", riskLevel: "secondary" },
  { process: "IT Access Management", risk: "Medium", status: "Verified", riskLevel: "secondary" },
  { process: "Financial Reporting", risk: "High", status: "In Review", riskLevel: "bright" },
  { process: "Vendor Onboarding", risk: "Low", status: "Verified", riskLevel: "secondary" },
];

const statusColors: Record<string, string> = {
  alert: "text-accent-alert bg-accent-alert/10 border-accent-alert/30",
  bright: "text-accent-bright bg-accent-bright/10 border-accent-bright/30",
  secondary: "text-accent-secondary bg-accent-secondary/10 border-accent-secondary/30",
};

const riskBadgeColors: Record<string, string> = {
  High: "text-accent-alert",
  Medium: "text-accent-bright",
  Low: "text-accent-secondary",
};

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [activeRow, setActiveRow] = useState(-1);

  useEffect(() => {
    if (shouldReduceMotion) return;
    let i = 0;
    const interval = setInterval(() => {
      setActiveRow(i % riskData.length);
      i++;
    }, 1200);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <section
      className="relative min-h-screen flex items-center pt-16 pb-24 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - editorial headline */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            {/* Label */}
            <div className="flex items-center gap-2">
              <div className="h-px w-8 bg-accent-bright" aria-hidden="true" />
              <span className="font-mono text-xs text-accent-bright uppercase tracking-widest">
                Internal Audit Intelligence Platform
              </span>
            </div>

            {/* Headline */}
            <h1
              id="hero-heading"
              className="font-fraunces text-5xl lg:text-7xl text-text-primary leading-[1.05] tracking-tight"
            >
              Internal Audit less
              <br />
              paperwork.
              <br />
              <span className="italic">Uncover</span> more risk.
            </h1>

            {/* Subhead */}
            <p className="font-manrope text-lg text-text-secondary leading-relaxed max-w-md">
              An intelligence platform that automates document review, control testing, and
              reporting - so your internal audit team spends its time on judgment, not busywork.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                id="hero-cta-primary"
                className="inline-flex items-center px-6 py-3 text-sm font-medium font-manrope bg-accent-bright text-bg-primary rounded hover:bg-amber-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-bright focus:ring-offset-2 focus:ring-offset-bg-primary"
              >
                Request a Demo
              </a>
              <a
                href="#how-it-works"
                id="hero-cta-secondary"
                className="inline-flex items-center gap-2 text-sm font-medium font-manrope text-text-secondary hover:text-text-primary transition-colors duration-200 group"
              >
                See how it works
                <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
              </a>
            </div>
          </motion.div>

          {/* Right - Risk Control Matrix mock UI */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          >
            <div className="bg-bg-elevated border border-border-subtle rounded-lg overflow-hidden">
              {/* Panel header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-border-subtle bg-bg-secondary">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent-secondary" aria-hidden="true" />
                  <span className="font-mono text-xs text-text-muted">Risk Control Matrix</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-text-muted">FY2025 · Q3 Internal Audit</span>
                  <div className="flex gap-1" aria-hidden="true">
                    {[0, 1, 2].map((i) => (
                      <div key={i} className="w-1.5 h-1.5 rounded-full bg-border-subtle" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Column headers */}
              <div className="grid grid-cols-12 px-4 py-2 border-b border-border-subtle">
                <span className="col-span-5 font-mono text-xs text-text-muted uppercase tracking-wider">Process Area</span>
                <span className="col-span-3 font-mono text-xs text-text-muted uppercase tracking-wider">Risk</span>
                <span className="col-span-4 font-mono text-xs text-text-muted uppercase tracking-wider">Status</span>
              </div>

              {/* Rows */}
              {riskData.map((row, i) => (
                <motion.div
                  key={row.process}
                  className={`grid grid-cols-12 px-4 py-3 border-b border-border-subtle/50 transition-colors duration-300 ${
                    activeRow === i ? "bg-accent-bright/5" : "hover:bg-bg-secondary/50"
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                >
                  <span className="col-span-5 font-manrope text-xs text-text-secondary truncate pr-2">
                    {row.process}
                  </span>
                  <span className={`col-span-3 font-mono text-xs font-medium ${riskBadgeColors[row.risk]}`}>
                    {row.risk}
                  </span>
                  <div className="col-span-4">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded border text-xs font-mono font-medium ${
                        statusColors[row.riskLevel]
                      }`}
                    >
                      {row.status}
                    </span>
                  </div>
                </motion.div>
              ))}

              {/* Footer bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-bg-secondary">
                <span className="font-mono text-xs text-text-muted">6 processes · 2 exceptions</span>
                <div className="flex items-center gap-1.5">
                  <div className="h-1.5 w-24 bg-border-subtle rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-accent-secondary rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: "67%" }}
                      transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
                    />
                  </div>
                  <span className="font-mono text-xs text-accent-secondary">67% complete</span>
                </div>
              </div>
            </div>

            {/* Floating annotation */}
            <motion.div
              className="absolute -bottom-4 -left-4 bg-bg-elevated border border-border-subtle rounded-lg px-3 py-2 hidden lg:flex items-center gap-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.4 }}
              aria-hidden="true"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-accent-secondary animate-pulse" />
              <span className="font-mono text-xs text-text-muted">AI processing documents…</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
