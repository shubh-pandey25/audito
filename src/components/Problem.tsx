"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const chaosItems = [
  { area: "Rev Recognition", status: "Pending", note: "Sample 25 of 847 · Email Jane" },
  { area: "Payroll Run",     status: "Overdue", note: "Sample 40 of 1,204 · Follow up" },
  { area: "Vendor Invoices", status: "Pending", note: "Sample 15 of 392 · Awaiting docs" },
  { area: "Bank Reconcil.",  status: "Overdue", note: "Sample 30 of 671 · Email again" },
  { area: "Expense Claims",  status: "Pending", note: "Sample 20 of 512 · Waiting…" },
];

export default function Problem() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="problem"
      ref={ref}
      className="py-24 lg:py-40 border-t border-divider"
      aria-labelledby="problem-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

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

            <div className="space-y-5 font-manrope text-base text-text-secondary leading-relaxed">
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
                &ldquo;We spent more time chasing evidence than reviewing it.&rdquo;
              </p>
              <footer className="mt-2 font-mono text-xs text-text-muted">
                — Chief Audit Executive, Fortune 500 company
              </footer>
            </blockquote>
          </motion.div>

          {/* Right — mobile-friendly "old way" panel */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            aria-hidden="true"
          >
            <div className="bg-bg-elevated border border-border-subtle rounded-lg overflow-hidden">
              {/* Toolbar */}
              <div className="flex items-center gap-2 px-4 py-2.5 bg-bg-secondary border-b border-border-subtle">
                <span className="font-mono text-xs text-text-muted truncate">
                  Audit_Workpaper_Q3_FINAL_v4.xlsx
                </span>
                <div className="ml-auto flex gap-3 shrink-0">
                  {["File", "Edit", "View"].map((item) => (
                    <span key={item} className="font-manrope text-xs text-text-muted/60">{item}</span>
                  ))}
                </div>
              </div>

              {/* Stacked rows — no fixed widths, wraps naturally */}
              <div className="divide-y divide-border-subtle/40 opacity-70">
                {chaosItems.map((item, i) => (
                  <div key={i} className="flex items-start justify-between gap-3 px-4 py-3">
                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-xs text-text-secondary truncate">{item.area}</p>
                      <p className="font-mono text-xs text-text-muted/60 mt-0.5 truncate">{item.note}</p>
                    </div>
                    <span
                      className={`shrink-0 font-mono text-xs px-2 py-0.5 rounded border mt-0.5 ${
                        item.status === "Overdue"
                          ? "text-accent-alert border-accent-alert/30 bg-accent-alert/10"
                          : "text-text-muted border-border-subtle"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom note */}
              <div className="px-4 py-3 bg-bg-secondary/40 border-t border-border-subtle">
                <span className="font-mono text-xs text-text-muted/40 italic">
                  # TODO: confirm samples · resend email · update tracker
                </span>
              </div>
            </div>

            {/* Overlay label */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-bg-primary/75 backdrop-blur-sm border border-border-subtle rounded-lg px-5 py-2.5">
                <span className="font-mono text-sm text-text-secondary">The old way</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
