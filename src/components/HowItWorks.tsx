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
      <div className="bg-bg-primary border border-border-subtle rounded p-3 space-y-2 font-mono text-xs overflow-x-auto">
        <div className="min-w-[320px]">
          <div className="flex justify-between text-text-muted border-b border-border-subtle/50 pb-1.5">
            <span>Financial Ratio</span>
            <span>Value</span>
            <span>Benchmark</span>
            <span>Flag</span>
          </div>
          {[
            { label: "Current Ratio", val: "0.82", bench: ">1.5", flag: true },
            { label: "Debt/Equity", val: "3.4×", bench: "<2.0×", flag: true },
            { label: "EBITDA Margin", val: "18.2%", bench: ">15%", flag: false },
            { label: "Revenue Growth", val: "-4.1%", bench: ">0%", flag: true },
          ].map((row) => (
            <div key={row.label} className="flex justify-between items-center gap-2">
              <span className="text-text-secondary flex-1 truncate">{row.label}</span>
              <span className="text-text-primary w-14 text-right">{row.val}</span>
              <span className="text-text-muted w-14 text-right">{row.bench}</span>
              <span className={`w-10 text-right ${row.flag ? "text-accent-alert" : "text-accent-secondary"}`}>
                {row.flag ? "⚠" : "✓"}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Get a risk-ranked audit plan built from the analysis, ready for the team to review, adjust, and formally approve.",
    visual: (
      <div className="bg-bg-primary border border-border-subtle rounded p-3 space-y-1.5 font-mono text-xs overflow-x-auto">
        <div className="min-w-[320px]">
        <div className="text-text-muted pb-1 border-b border-border-subtle/50">Risk-Ranked Audit Plan</div>
        {[
          { area: "Revenue Recognition", score: 94, bar: "w-11/12" },
          { area: "IT Access Controls", score: 87, bar: "w-10/12" },
          { area: "Financial Reporting", score: 81, bar: "w-9/12" },
          { area: "Procurement", score: 72, bar: "w-8/12" },
          { area: "Payroll", score: 61, bar: "w-7/12" },
        ].map((item) => (
          <div key={item.area} className="flex items-center gap-2">
            <span className="text-text-secondary text-xs w-36 truncate shrink-0">{item.area}</span>
            <div className="flex-1 h-1.5 bg-border-subtle rounded-full overflow-hidden">
              <div className={`h-full ${item.bar} bg-accent-bright/60 rounded-full`} />
            </div>
            <span className="text-accent-bright w-8 text-right">{item.score}</span>
          </div>
        ))}
        </div>
      </div>
    ),
  },
  {
    number: "03",
    title: "Test",
    description:
      "Documents are automatically processed and controls tested against expected criteria. Only real exceptions surface to a human.",
    visual: (
      <div className="bg-bg-primary border border-border-subtle rounded p-3 space-y-2 font-mono text-xs overflow-x-auto">
        <div className="min-w-[320px]">
        <div className="text-text-muted pb-1 border-b border-border-subtle/50">Control Testing — Automated</div>
        {[
          { doc: "Invoice_2847.pdf", test: "3-way match", result: "Pass" },
          { doc: "Invoice_2848.pdf", test: "3-way match", result: "Pass" },
          { doc: "Invoice_2849.pdf", test: "Amount threshold", result: "Exception" },
          { doc: "Invoice_2850.pdf", test: "3-way match", result: "Pass" },
          { doc: "Invoice_2851.pdf", test: "Authorization", result: "Pass" },
        ].map((row) => (
          <div key={row.doc} className="flex items-center gap-2 justify-between">
            <span className="text-text-muted truncate flex-1">{row.doc}</span>
            <span className="text-text-muted/60 truncate">{row.test}</span>
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
        <div className="pt-1 border-t border-border-subtle/50 text-text-muted">
          848 tested · <span className="text-accent-alert">1 exception</span> · 0 manual hours
        </div>
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
      <div className="bg-bg-primary border border-border-subtle rounded p-3 space-y-2 font-mono text-xs overflow-x-auto">
        <div className="min-w-[340px]">
        <div className="text-text-muted pb-1 border-b border-border-subtle/50">Finding Tracker</div>
        {[
          { id: "F-001", finding: "Missing authorization", owner: "CFO", status: "Resolved", color: "secondary" },
          { id: "F-002", finding: "Duplicate payment", owner: "AP Team", status: "In Progress", color: "bright" },
          { id: "F-003", finding: "Access not revoked", owner: "IT", status: "Overdue", color: "alert" },
        ].map((f) => (
          <div key={f.id} className="flex items-center gap-2">
            <span className="text-text-muted w-12 shrink-0">{f.id}</span>
            <span className="text-text-secondary truncate flex-1">{f.finding}</span>
            <span className="text-text-muted shrink-0">{f.owner}</span>
            <span
              className={`shrink-0 px-1.5 py-0.5 rounded border text-xs font-mono ${
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
        <div className="pt-1 border-t border-border-subtle/50 flex items-center gap-2 text-text-muted">
          <span>Auto-reminder sent to IT · 3 days overdue</span>
        </div>
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
      className="py-32 lg:py-40 border-t border-divider"
      aria-labelledby="how-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="flex flex-col gap-4 mb-16"
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
            className="font-fraunces text-4xl lg:text-5xl text-text-primary leading-[1.1] tracking-tight max-w-xl"
          >
            From raw data to
            <br />
            <span className="italic">verified findings</span> —
            <br />
            automatically.
          </h2>
        </motion.div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-px bg-border-subtle rounded-lg overflow-hidden border border-border-subtle">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="bg-bg-secondary p-6 flex flex-col gap-5"
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
