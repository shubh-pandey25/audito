"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Automatically analyze the company's industry, financial performance, and risk landscape. No manual research briefings needed.",
    visual: (
      <div className="bg-bg-primary border border-border-subtle rounded-lg p-4 space-y-2.5 font-mono text-xs">
        <p className="text-text-muted border-b border-border-subtle/50 pb-2">Financial Risk Scan</p>
        {[
          { label: "Current Ratio", val: "0.82", flag: true },
          { label: "Debt / Equity", val: "3.4�-", flag: true },
          { label: "EBITDA Margin", val: "18.2%", flag: false },
          { label: "Revenue Growth", val: "−4.1%", flag: true },
        ].map((row) => (
          <div key={row.label} className="flex items-center justify-between gap-2">
            <span className="text-text-secondary truncate flex-1">{row.label}</span>
            <span className="text-text-primary shrink-0">{row.val}</span>
            <span className={`shrink-0 w-5 text-right ${row.flag ? "text-accent-alert" : "text-accent-secondary"}`}>
              {row.flag ? "⚠" : "✓"}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Get a risk-ranked audit plan built from the analysis, ready for the team to review, adjust, and formally approve.",
    visual: (
      <div className="bg-bg-primary border border-border-subtle rounded-lg p-4 space-y-2.5 font-mono text-xs">
        <p className="text-text-muted border-b border-border-subtle/50 pb-2">Risk-Ranked Audit Plan</p>
        {[
          { area: "Revenue Recognition", score: 94, pct: "92%" },
          { area: "IT Access Controls",  score: 87, pct: "78%" },
          { area: "Financial Reporting", score: 81, pct: "67%" },
          { area: "Procurement",         score: 72, pct: "55%" },
          { area: "Payroll",             score: 61, pct: "44%" },
        ].map((item) => (
          <div key={item.area} className="flex items-center gap-2">
            <span className="text-text-secondary text-xs shrink-0 w-36 truncate">{item.area}</span>
            <div className="flex-1 h-1.5 bg-border-subtle rounded-full overflow-hidden min-w-0">
              <div className="h-full bg-accent-bright/60 rounded-full" style={{ width: item.pct }} />
            </div>
            <span className="text-accent-bright shrink-0 w-6 text-right">{item.score}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    number: "03",
    title: "Test",
    description:
      "Documents are automatically processed and controls tested against expected criteria. Only real exceptions surface to a human.",
    visual: (
      <div className="bg-bg-primary border border-border-subtle rounded-lg p-4 space-y-2 font-mono text-xs">
        <p className="text-text-muted border-b border-border-subtle/50 pb-2">Control Testing — Auto</p>
        {[
          { doc: "Invoice_2847.pdf", result: "Pass" },
          { doc: "Invoice_2848.pdf", result: "Pass" },
          { doc: "Invoice_2849.pdf", result: "Exception" },
          { doc: "Invoice_2850.pdf", result: "Pass" },
          { doc: "Invoice_2851.pdf", result: "Pass" },
        ].map((row) => (
          <div key={row.doc} className="flex items-center justify-between gap-2">
            <span className="text-text-muted truncate flex-1">{row.doc}</span>
            <span
              className={`shrink-0 px-1.5 py-0.5 rounded border text-xs font-mono ${
                row.result === "Exception"
                  ? "text-accent-alert border-accent-alert/30 bg-accent-alert/10"
                  : "text-accent-secondary border-accent-secondary/30 bg-accent-secondary/10"
              }`}
            >
              {row.result}
            </span>
          </div>
        ))}
        <div className="pt-1.5 border-t border-border-subtle/50 text-text-muted">
          848 tested · <span className="text-accent-alert">1 exception</span> · 0 manual hrs
        </div>
      </div>
    ),
  },
  {
    number: "04",
    title: "Report & Track",
    description:
      "Findings are auto-drafted into a ready-to-edit report. Fixes are automatically tracked and re-verified over time.",
    visual: (
      <div className="bg-bg-primary border border-border-subtle rounded-lg p-4 space-y-2.5 font-mono text-xs">
        <p className="text-text-muted border-b border-border-subtle/50 pb-2">Finding Tracker</p>
        {[
          { id: "F-001", finding: "Missing authorization", status: "Resolved",    color: "secondary" },
          { id: "F-002", finding: "Duplicate payment",     status: "In Progress", color: "bright"    },
          { id: "F-003", finding: "Access not revoked",    status: "Overdue",     color: "alert"     },
        ].map((f) => (
          <div key={f.id} className="flex items-start justify-between gap-2">
            <div className="min-w-0 flex-1">
              <span className="text-text-muted">{f.id} · </span>
              <span className="text-text-secondary">{f.finding}</span>
            </div>
            <span
              className={`shrink-0 px-1.5 py-0.5 rounded border text-xs font-mono mt-0.5 ${
                f.color === "secondary"
                  ? "text-accent-secondary border-accent-secondary/30 bg-accent-secondary/10"
                  : f.color === "alert"
                  ? "text-accent-alert border-accent-alert/30 bg-accent-alert/10"
                  : "text-accent-bright border-accent-bright/30 bg-accent-bright/10"
              }`}
            >
              {f.status}
            </span>
          </div>
        ))}
        <div className="pt-1.5 border-t border-border-subtle/50 text-text-muted/70">
          Auto-reminder sent to IT · 3 days overdue
        </div>
      </div>
    ),
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="py-24 lg:py-40 border-t border-divider"
      aria-labelledby="how-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="flex flex-col gap-4 mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2">
            <div className="h-px w-8 bg-accent-bright" aria-hidden="true" />
            <span className="font-mono text-xs text-accent-bright uppercase tracking-widest">
              How It Works
            </span>
          </div>
          <h2
            id="how-heading"
            className="font-fraunces text-4xl lg:text-5xl text-text-primary leading-[1.1] tracking-tight"
          >
            From raw data to{" "}
            <span className="italic">verified findings</span>
            {" "}— automatically.
          </h2>
        </motion.div>

        {/* Steps — single col mobile, 2-col md, 4-col xl */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-px lg:bg-border-subtle lg:rounded-lg lg:overflow-hidden lg:border lg:border-border-subtle">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="bg-bg-secondary rounded-lg lg:rounded-none p-6 flex flex-col gap-5 border border-border-subtle lg:border-0"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 + i * 0.1 }}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-3xl font-bold text-border-subtle select-none">
                  {step.number}
                </span>
                <div className="h-px flex-1 ml-4 bg-border-subtle" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-fraunces text-xl text-text-primary mb-2">{step.title}</h3>
                <p className="font-manrope text-sm text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
              {/* Mini mock UI */}
              <div className="mt-auto">{step.visual}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
