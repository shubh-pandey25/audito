import type { Metadata } from "next";
import { Fraunces, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--nf-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--nf-manrope",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--nf-mono",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AuditFlow — Internal Audit Intelligence Platform",
  description:
    "AuditFlow's AI agent, Audito, automates document review, control testing, and audit reporting — so your audit team focuses on judgment, not busywork. Risk-based audit planning, full-population testing, and continuous follow-up tracking.",
  keywords: [
    "internal audit software",
    "audit automation",
    "audit intelligence",
    "risk-based audit",
    "control testing automation",
    "audit reporting",
  ],
  openGraph: {
    title: "AuditFlow — Internal Audit Intelligence Platform",
    description:
      "Automate document review, control testing, and audit reporting. Spend time on judgment, not busywork.",
    type: "website",
    siteName: "AuditFlow",
  },
  twitter: {
    card: "summary_large_image",
    title: "AuditFlow — Internal Audit Intelligence Platform",
    description:
      "Automate document review, control testing, and audit reporting.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${fraunces.variable} ${manrope.variable} ${ibmPlexMono.variable} bg-bg-primary text-text-primary antialiased`}
        style={{ fontFamily: "var(--font-manrope, system-ui, sans-serif)" }}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent-bright focus:text-bg-primary focus:rounded focus:text-sm focus:font-manrope"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
