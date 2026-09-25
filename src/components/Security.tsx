"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lock, Shield, Users, FileCheck } from "lucide-react";

const pillars = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description:
      "All client data is encrypted in transit and at rest. Internal Audit evidence never leaves your designated environment unencrypted.",
  },
  {
    icon: Shield,
    title: "SOC 2 Type II Aligned",
    description:
      "Built to the controls expected by the firms and enterprises that use it. Security posture available on request.",
  },
  {
    icon: Users,
    title: "Role-Based Access Control",
    description:
      "Granular permissions per engagement, per team member. Auditors see only what they need; clients see only their own data.",
  },
  {
    icon: FileCheck,
    title: "Internal Audit Trail Integrity",
    description:
      "Every action - document upload, test run, status change - is logged with timestamp and actor. Tamper-evident records.",
  },
];

export default function Security() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="security"
      ref={ref}
      className="py-32 lg:py-40 border-t border-divider bg-bg-secondary"
      aria-labelledby="security-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left - text */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2">
              <div className="h-px w-8 bg-border-subtle" aria-hidden="true" />
              <span className="font-mono text-xs text-text-muted uppercase tracking-widest">
                Security & Trust
              </span>
            </div>
            <h2
              id="security-heading"
              className="font-fraunces text-4xl lg:text-5xl text-text-primary leading-[1.1] tracking-tight"
            >
              Internal Audit-grade
              <br />
              <span className="italic">data security.</span>
            </h2>
            <p className="font-manrope text-base text-text-secondary leading-relaxed">
              Internal Audit engagements involve highly sensitive client data - financial records,
              HR files, and strategic documents. AuditFlow and its AI agent, Audito, are built for this reality: security
              is not a feature layer, it is the foundation.
            </p>
            <p className="font-manrope text-sm text-text-muted leading-relaxed">
              For enterprise security reviews, data processing agreements, and technical
              architecture documentation, contact us directly.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-medium font-manrope text-text-secondary hover:text-text-primary transition-colors duration-200 group"
            >
              Request security documentation
              <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
            </a>
          </motion.div>

          {/* Right - pillars grid */}
          <motion.div
            className="lg:col-span-3 grid sm:grid-cols-2 gap-px bg-border-subtle rounded-lg overflow-hidden border border-border-subtle"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-bg-elevated p-6 flex flex-col gap-4"
                >
                  <div
                    className="w-8 h-8 flex items-center justify-center border border-border-subtle rounded text-text-muted"
                    aria-hidden="true"
                  >
                    <Icon size={16} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-manrope text-sm font-semibold text-text-primary mb-1.5">
                      {pillar.title}
                    </h3>
                    <p className="font-manrope text-xs text-text-secondary leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
