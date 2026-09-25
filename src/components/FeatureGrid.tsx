"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    title: "Automated Risk & Business Analysis",
    description:
      "Understand a company's risk exposure without manual research. Financial ratios, industry benchmarks, and control environment assessed automatically.",
    dataElement: (
      <div className="mt-4 bg-bg-primary rounded border border-border-subtle p-3">
        <div className="font-mono text-xs text-text-muted mb-2">Risk Assessment Output</div>
        <div className="space-y-1.5">
          {[
            { label: "Inherent Risk Score", val: "87/100", color: "text-accent-alert" },
            { label: "Control Coverage", val: "61%", color: "text-accent-bright" },
            { label: "Residual Risk", val: "High", color: "text-accent-alert" },
          ].map((item) => (
            <div key={item.label} className="flex justify-between font-mono text-xs">
              <span className="text-text-muted">{item.label}</span>
              <span className={item.color}>{item.val}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Risk-Based Internal Audit Planning",
    description:
      "Automatically prioritize which areas to internal audit based on actual risk signals — not guesswork, seniority, or last year's plan.",
    dataElement: (
      <div className="mt-4 bg-bg-primary rounded border border-border-subtle p-3">
        <div className="font-mono text-xs text-text-muted mb-2">Q3 Internal Audit Calendar</div>
        {[
          { month: "Oct", area: "Revenue Recognition", priority: "P1" },
          { month: "Nov", area: "IT Access Controls", priority: "P1" },
          { month: "Dec", area: "Procurement", priority: "P2" },
        ].map((item) => (
          <div key={item.area} className="flex items-center gap-2 font-mono text-xs py-1 border-b border-border-subtle/30 last:border-0">
            <span className="text-text-muted w-8 shrink-0">{item.month}</span>
            <span className="text-text-secondary flex-1 truncate">{item.area}</span>
            <span className={`px-1.5 py-0.5 rounded border text-xs ${item.priority === "P1" ? "text-accent-alert border-accent-alert/30 bg-accent-alert/10" : "text-accent-bright border-accent-bright/30 bg-accent-bright/10"}`}>
              {item.priority}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Document Intelligence",
    description:
      "Uploaded evidence is automatically read, classified, and organized. Invoices, contracts, approvals — all indexed and ready for testing.",
    dataElement: (
      <div className="mt-4 bg-bg-primary rounded border border-border-subtle p-3 space-y-1.5">
        <div className="font-mono text-xs text-text-muted mb-1">Processing queue</div>
        {[
          { name: "Invoice_2847.pdf", type: "AP Invoice", status: "Indexed" },
          { name: "PO_112-A.pdf", type: "Purchase Order", status: "Indexed" },
          { name: "GR_2847.pdf", type: "Goods Receipt", status: "Processing…" },
        ].map((f) => (
          <div key={f.name} className="flex items-center gap-2 font-mono text-xs">
            <span className="text-text-muted truncate flex-1">{f.name}</span>
            <span className={`shrink-0 px-1.5 py-0.5 rounded border text-xs ${f.status === "Indexed" ? "text-accent-secondary border-accent-secondary/30 bg-accent-secondary/10" : "text-accent-bright border-accent-bright/30 bg-accent-bright/10"}`}>
              {f.status}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Automated Control Testing",
    description:
      "Design and effectiveness testing run automatically across full populations. Your team reviews only the exceptions — not every transaction.",
    dataElement: (
      <div className="mt-4 bg-bg-primary rounded border border-border-subtle p-3">
        <div className="flex justify-between font-mono text-xs text-text-muted mb-2">
          <span>Population tested</span>
          <span className="text-text-primary">1,204 items</span>
        </div>
        <div className="h-1.5 bg-border-subtle rounded-full overflow-hidden mb-2">
          <div className="h-full w-full bg-accent-secondary/60 rounded-full" />
        </div>
        <div className="flex justify-between font-mono text-xs">
          <span className="text-accent-secondary">1,201 Pass</span>
          <span className="text-accent-alert">3 Exceptions</span>
        </div>
        <div className="mt-2 font-mono text-xs text-text-muted">
          0 manual hours · 100% coverage
        </div>
      </div>
    ),
  },
  {
    title: "Auto-Generated Reporting",
    description:
      "Findings are drafted into a structured report, ready to edit — not written from a blank page. Cut reporting time dramatically.",
    dataElement: (
      <div className="mt-4 bg-bg-primary rounded border border-border-subtle p-3 font-mono text-xs space-y-1.5">
        <div className="text-text-muted">Draft Report — Section 4.2</div>
        <div className="text-text-secondary/70 leading-relaxed text-xs">
          <span className="text-accent-bright">[Auto-drafted]</span> Testing of invoice
          authorization controls identified 3 exceptions from a population of 1,204 transactions.
          The exceptions related to…
        </div>
        <div className="flex gap-2 mt-2">
          <span className="px-1.5 py-0.5 rounded border border-accent-secondary/30 bg-accent-secondary/10 text-accent-secondary text-xs">Draft ready</span>
          <span className="px-1.5 py-0.5 rounded border border-border-subtle text-text-muted text-xs">Edit in place</span>
        </div>
      </div>
    ),
  },
  {
    title: "Continuous Follow-Up Tracking",
    description:
      "Automatic reminders and re-verification continue until every issue is actually resolved — not just marked done by the client.",
    dataElement: (
      <div className="mt-4 bg-bg-primary rounded border border-border-subtle p-3 font-mono text-xs space-y-2">
        <div className="text-text-muted">Finding F-003 · IT Access Controls</div>
        <div className="space-y-1">
          {[
            { date: "Sep 01", event: "Finding raised", done: true },
            { date: "Sep 15", event: "Reminder sent", done: true },
            { date: "Oct 01", event: "Re-verification", done: false },
            { date: "Oct 15", event: "Escalation", done: false },
          ].map((e) => (
            <div key={e.event} className="flex items-center gap-2">
              <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${e.done ? "bg-accent-secondary" : "bg-border-subtle"}`} />
              <span className="text-text-muted w-14 shrink-0">{e.date}</span>
              <span className={e.done ? "text-text-secondary" : "text-text-muted/60"}>{e.event}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export default function FeatureGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="features"
      ref={ref}
      className="py-32 lg:py-40 border-t border-divider bg-bg-secondary"
      aria-labelledby="features-heading"
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
              Core Capabilities
            </span>
          </div>
          <h2
            id="features-heading"
            className="font-fraunces text-4xl lg:text-5xl text-text-primary leading-[1.1] tracking-tight"
          >
            Everything the internal audit
            <br />
            needs. <span className="italic">Automated.</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border-subtle rounded-lg overflow-hidden border border-border-subtle">
          {features.map((feature, i) => (
            <motion.article
              key={feature.title}
              className="bg-bg-elevated p-6 flex flex-col hover:bg-bg-elevated/80 transition-colors duration-200"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 * i }}
              aria-labelledby={`feature-${i}`}
            >
              <h3
                id={`feature-${i}`}
                className="font-manrope text-base font-semibold text-text-primary leading-snug"
              >
                {feature.title}
              </h3>
              <p className="mt-2 font-manrope text-sm text-text-secondary leading-relaxed">
                {feature.description}
              </p>
              {feature.dataElement}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
