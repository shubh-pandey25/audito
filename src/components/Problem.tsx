"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const spreadsheetRows = [
  ["Rev Recognition", "Manual", "Sample 25 of 847", "Email Jane", "Pending"],
  ["Payroll Run", "Manual", "Sample 40 of 1,204", "Follow up", "Overdue"],
  ["Vendor Invoices", "Manual", "Sample 15 of 392", "Awaiting docs", "Pending"],
  ["Bank Reconciliation", "Manual", "Sample 30 of 671", "Email again", "Overdue"],
  ["Expense Claims", "Manual", "Sample 20 of 512", "Waiting…", "Pending"],
];

export default function Problem() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="problem"
      ref={ref}
      className="py-32 lg:py-40 border-t border-divider"
      aria-labelledby="problem-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left — editorial text */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2">
              <div className="h-px w-8 bg-border-subtle" aria-hidden="true" />
              <span className="font-mono text-xs text-text-muted uppercase tracking-widest">
                The Problem
              </span>
            </div>

            <h2
              id="problem-heading"
              className="font-fraunces text-4xl lg:text-5xl text-text-primary leading-[1.1] tracking-tight"
            >
              Audit teams are
              <br />
              buried in the
              <br />
              <span className="italic text-text-secondary">wrong work.</span>
            </h2>

            <div className="space-y-5 font-manrope text-base text-text-secondary leading-relaxed max-w-md">
              <p>
                Traditional audits mean weeks of manual document collection, spreadsheet-based
                sampling, and status-chasing over email. Entire engagements are spent on
                logistics and data entry — not on the professional judgment that actually matters.
              </p>
              <p>
                By the time findings are compiled and reports drafted, the business has already
                moved on. And the next audit cycle starts exactly the same way.
              </p>
            </div>

            <blockquote className="border-l-2 border-border-subtle pl-6 py-1">
              <p className="font-manrope text-lg text-text-secondary italic leading-relaxed">
                "We spent more time chasing evidence than reviewing it."
              </p>
              <footer className="mt-2 font-mono text-xs text-text-muted">
                — Chief Audit Executive, Fortune 500 company
              </footer>
            </blockquote>
          </motion.div>

          {/* Right — greyed-out spreadsheet motif */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            aria-hidden="true"
          >
            <div className="bg-bg-elevated border border-border-subtle rounded-lg overflow-x-auto opacity-60">
              <div className="min-w-[600px]">
              {/* Fake spreadsheet toolbar */}
              <div className="flex items-center gap-2 px-3 py-2 bg-bg-secondary border-b border-border-subtle">
                <span className="font-mono text-xs text-text-muted">Audit_Workpaper_Q3_FINAL_v4.xlsx</span>
                <div className="ml-auto flex gap-2">
                  {["File", "Edit", "View", "Insert"].map((item) => (
                    <span key={item} className="font-manrope text-xs text-text-muted">{item}</span>
                  ))}
                </div>
              </div>
              {/* Column headers */}
              <div className="grid grid-cols-5 border-b border-border-subtle bg-bg-secondary/50">
                {["Control Area", "Method", "Sample", "Action", "Status"].map((h) => (
                  <div key={h} className="px-2 py-1.5 border-r border-border-subtle last:border-r-0">
                    <span className="font-mono text-xs text-text-muted">{h}</span>
                  </div>
                ))}
              </div>
              {/* Rows */}
              {spreadsheetRows.map((row, ri) => (
                <div key={ri} className="grid grid-cols-5 border-b border-border-subtle/50">
                  {row.map((cell, ci) => (
                    <div
                      key={ci}
                      className="px-2 py-2 border-r border-border-subtle/50 last:border-r-0"
                    >
                      <span
                        className={`font-mono text-xs ${
                          ci === 4
                            ? cell === "Overdue"
                              ? "text-accent-alert/60"
                              : "text-text-muted/60"
                            : "text-text-muted"
                        }`}
                      >
                        {cell}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
              {/* Faded comment overlays */}
              <div className="px-4 py-3 bg-bg-secondary/30 border-t border-border-subtle">
                <span className="font-mono text-xs text-text-muted/40 italic">
                  # TODO: add to tracker · confirm samples with manager · resend email to client
                </span>
              </div>
              </div>
            </div>

            {/* Overlay label */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-bg-primary/70 backdrop-blur-sm border border-border-subtle rounded px-4 py-2">
                <span className="font-mono text-sm text-text-muted">The old way</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
