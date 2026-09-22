export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-divider bg-bg-secondary py-12"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Left — brand */}
          <div className="flex flex-col gap-3 max-w-xs">
            <a href="#" className="flex items-baseline gap-0.5" aria-label="Auditflow home">
              <span className="font-fraunces text-lg italic text-text-primary">auditflow</span>
            </a>
            <p className="font-manrope text-xs text-text-muted leading-relaxed">
              Audit intelligence software for internal audit teams, audit firms, and risk leaders.
            </p>
          </div>

          {/* Center — nav */}
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

          {/* Right — contact/legal */}
          <div className="flex flex-col gap-2 items-start md:items-end">
            <a
              href="mailto:hello@auditflow.co.in"
              className="font-manrope text-xs text-text-muted hover:text-text-secondary transition-colors duration-200"
            >
              hello@auditflow.co.in
            </a>
            <p className="font-mono text-xs text-text-muted">
              © {currentYear} Auditflow. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
