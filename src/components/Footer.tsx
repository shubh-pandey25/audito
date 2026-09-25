export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-divider bg-bg-secondary py-12"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Left - brand */}
          <div className="flex flex-col gap-3 max-w-xs">
            <a href="#" className="flex items-center gap-2" aria-label="AuditFlow home">
              <img src="/banner.png" alt="AuditFlow" className="h-8 w-auto object-contain" />
            </a>
            <p className="font-manrope text-xs text-text-muted leading-relaxed">
              Internal Audit intelligence software for internal internal audit teams, internal audit firms, and risk leaders.
            </p>
          </div>

          {/* Center - nav */}
          <nav
            className="flex flex-wrap gap-x-10 gap-y-4 items-start"
            aria-label="Footer navigation"
          >
            {[
              { label: "Product", href: "#features" },
              { label: "How it Works", href: "#how-it-works" },
              { label: "Security", href: "#security" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-manrope text-xs text-text-muted hover:text-text-secondary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right - contact/legal */}
          <div className="flex flex-col gap-2 items-start md:items-end">
            <div className="flex flex-col gap-1 items-start md:items-end">
              <span className="font-mono text-[11px] uppercase tracking-wider text-accent-bright">Direct Contact</span>
              <a
                href="mailto:contact@auditflow.co.in"
                className="font-manrope text-xs text-text-secondary hover:text-accent-bright transition-colors duration-200"
              >
                contact@auditflow.co.in
              </a>
              <a
                href="mailto:hello@auditflow.co.in"
                className="font-manrope text-xs text-text-secondary hover:text-accent-bright transition-colors duration-200"
              >
                hello@auditflow.co.in
              </a>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-manrope text-xs text-text-muted mt-1">
                <a href="tel:+919319515024" className="hover:text-text-secondary transition-colors">
                  +91 9319515024
                </a>
              </div>
            </div>
            <p className="font-mono text-[11px] text-text-muted mt-2">
              © {currentYear} AuditFlow. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
