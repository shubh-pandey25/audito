"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const rows = [
  {
    aspect: "Audit scope",
    traditional: "Based on last year's plan or intuition",
    audito: "Risk-ranked from live financial and industry data",
  },
  {
    aspect: "Document collection",
    traditional: "Manual requests, email chains, spreadsheet trackers",
    audito: "Automated intake with classification and indexing",
  },
  {
    aspect: "Control testing",
    traditional: "25–40 sample items reviewed one by one",
    audito: "Full population tested automatically; only exceptions reach a human",
  },
  {
    aspect: "Time to findings",
    traditional: "Weeks of field work and workpaper review",
    audito: "Exceptions surfaced in real time as documents are processed",
  },
  {
    aspect: "Reporting",
    traditional: "Written from scratch in Word or PowerPoint",
    audito: "Auto-drafted from findings; team edits and approves",
  },
  {
    aspect: "Follow-up tracking",
    traditional: "Manual status emails; often no re-verification",
    audito: "Automated reminders and evidence-based re-verification",
  },
  {
    aspect: "Audit coverage",
    traditional: "Limited by team capacity; selective sampling",
    audito: "100% population coverage on automated controls",
  },
  {
    aspect: "Team's time spent on",
    traditional: "Logistics, formatting, email follow-up",
    audito: "Judgment, analysis, and stakeholder conversations",
  },
];

export default function Comparison() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="comparison"
      ref={ref}
      className="py-32 lg:py-40 border-t border-divider"
      aria-labelledby="comparison-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="flex flex-col gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2">
            <div className="h-px w-8 bg-border-subtle" aria-hidden="true" />
            <span className="font-mono text-xs text-text-muted uppercase tracking-widest">
              Why It&apos;s Different
            </span>
          </div>
          <h2
            id="comparison-heading"
            className="font-fraunces text-4xl lg:text-5xl text-text-primary leading-[1.1] tracking-tight"
          >
            The audit process,
            <br />
            <span className="italic">fundamentally rethought.</span>
          </h2>
        </motion.div>

        {/* Table */}
        <motion.div
          className="border border-border-subtle rounded-lg overflow-x-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <div className="min-w-[768px]">
            {/* Table header */}
          <div className="grid grid-cols-12 bg-bg-secondary border-b border-border-subtle">
            <div className="col-span-3 px-5 py-3 border-r border-border-subtle">
              <span className="font-mono text-xs text-text-muted uppercase tracking-wider">
                Aspect
              </span>
            </div>
            <div className="col-span-4 px-5 py-3 border-r border-border-subtle flex items-center gap-2 bg-red-950/30">
              <span className="font-mono text-xs text-text-secondary uppercase tracking-wider">
                Traditional Audit
              </span>
            </div>
            <div className="col-span-5 px-5 py-3 flex items-center gap-2">
              <span className="font-mono text-xs text-accent-bright uppercase tracking-wider">
                Audito Agent
              </span>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.aspect}
              className={`grid grid-cols-12 border-b border-border-subtle last:border-0 ${
                i % 2 === 0 ? "bg-bg-elevated" : "bg-bg-secondary/30"
              }`}
            >
              <div className="col-span-3 px-5 py-4 border-r border-border-subtle">
                <span className="font-manrope text-xs font-semibold text-text-secondary">
                  {row.aspect}
                </span>
              </div>
              <div className="col-span-4 px-5 py-4 border-r border-border-subtle flex items-start gap-2.5 bg-red-950/30">
                <span className="font-mono text-xs text-red-400 mt-0.5 shrink-0">✕</span>
                <span className="font-manrope text-xs text-text-secondary/80 leading-relaxed">
                  {row.traditional}
                </span>
              </div>
              <div className="col-span-5 px-5 py-4 flex items-start gap-2.5">
                <span className="font-mono text-xs text-accent-secondary mt-0.5 shrink-0">✓</span>
                <span className="font-manrope text-xs text-text-secondary leading-relaxed">
                  {row.audito}
                </span>
              </div>
            </div>
          ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
