"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-32 lg:py-40 border-t border-divider"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2">
              <div className="h-px w-8 bg-accent-bright" aria-hidden="true" />
              <span className="font-mono text-xs text-accent-bright uppercase tracking-widest">
                Get Started
              </span>
            </div>

            <h2
              id="cta-heading"
              className="font-fraunces text-4xl lg:text-6xl text-text-primary leading-[1.05] tracking-tight"
            >
              Ready to audit
              <br />
              <span className="italic">with precision?</span>
            </h2>

            <p className="font-manrope text-lg text-text-secondary leading-relaxed">
              See how Auditflow and the Audito agent fit your team&apos;s existing workflow. We&apos;ll walk you through a
              live example using a realistic audit scenario — no prepared demo script.
            </p>

            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 max-w-md"
                aria-label="Request a demo form"
              >
                <input type="hidden" name="access_key" value="34bdc554-16a4-4673-a7ad-f44a01c08969" />
                
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-bg-elevated border border-border-subtle rounded font-manrope text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-bright transition-colors duration-200"
                />
                <input
                  name="organization"
                  type="text"
                  required
                  placeholder="Organization Name"
                  className="w-full px-4 py-3 bg-bg-elevated border border-border-subtle rounded font-manrope text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-bright transition-colors duration-200"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="your@firm.com"
                  className="w-full px-4 py-3 bg-bg-elevated border border-border-subtle rounded font-manrope text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-bright transition-colors duration-200"
                />
                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="Mobile Number"
                  className="w-full px-4 py-3 bg-bg-elevated border border-border-subtle rounded font-manrope text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-bright transition-colors duration-200"
                />

                <button
                  type="submit"
                  id="cta-submit"
                  disabled={isSubmitting}
                  className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 text-sm font-medium font-manrope bg-accent-bright text-bg-primary rounded hover:bg-amber-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-bright focus:ring-offset-2 focus:ring-offset-bg-primary whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Request a Demo"}
                </button>
              </form>
            ) : (
              <motion.div
                className="flex items-center gap-3 border border-accent-secondary/30 bg-accent-secondary/10 rounded px-5 py-4"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-accent-secondary font-mono text-sm">✓</span>
                <p className="font-manrope text-sm text-text-secondary">
                  Thanks — we&apos;ll be in touch within one business day.
                </p>
              </motion.div>
            )}

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {[
                "No credit card required",
                "No prepared demo script",
                "Typically 30 minutes",
              ].map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <div className="w-1 h-1 rounded-full bg-text-muted" aria-hidden="true" />
                  <span className="font-manrope text-xs text-text-muted">{item}</span>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
