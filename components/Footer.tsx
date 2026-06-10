import Link from "next/link";
import Image from "next/image";

const firmLinks = [
  { label: "About Us", href: "/about" },
  { label: "Attorneys", href: "/attorneys" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Disclosures", href: "/disclosures" },
  { label: "Accessibility", href: "/accessibility" },
];

const practiceLinks = [
  { label: "Corporate M&A", href: "/practice-areas/corporate" },
  { label: "Transactions", href: "/practice-areas/transactions" },
  { label: "Start-up Practice", href: "/practice-areas/startup" },
  { label: "Intellectual Property", href: "/practice-areas/intellectual-property" },
  { label: "Real Estate", href: "/practice-areas/real-estate" },
  { label: "Litigation", href: "/practice-areas/litigation" },
];

const offices = ["Bangalore HQ", "Mumbai", "Delhi"];

export default function Footer() {
  return (
    <footer className="pb-20 md:pb-0 mt-[30px] !pt-12">
      <div className="container-max py-32 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center mb-8 group" aria-label="De Novo Law Firm">
              <Image
                src="/images/logo.png"
                alt="De Novo Law Firm — Advocates & Solicitors"
                width={220}
                height={66}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="font-sans text-[var(--color-secondary)] text-sm leading-relaxed mb-8 max-w-xs">
              Architecting certainty in a world of complexity. A new era of corporate law, refined for the modern age with surgical precision and strategic vision.
            </p>
            <div className="flex gap-5">
              <a href="https://www.linkedin.com/company/de-novo-law-firm-india/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="mailto:contact@denovolawfirm.in" aria-label="Email De Novo Law Firm" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
              <a href="https://www.instagram.com/denovolawedu/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Practice Areas */}
          <div className="md:col-span-3">
            <h3 className="font-sans text-[11px] text-[var(--color-primary)] uppercase tracking-[0.2em] font-semibold mb-7">Practice Areas</h3>
            <ul className="space-y-4">
              {practiceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-sans text-sm text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Firm + Legal */}
          <div className="md:col-span-2">
            <h3 className="font-sans text-[11px] text-[var(--color-primary)] uppercase tracking-[0.2em] font-semibold mb-7">Firm</h3>
            <ul className="space-y-4 mb-10">
              {firmLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-sans text-sm text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-sans text-[11px] text-[var(--color-primary)] uppercase tracking-[0.2em] font-semibold mb-7">Legal</h3>
            <ul className="space-y-4">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-sans text-sm text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div className="md:col-span-3">
            <h3 className="font-sans text-[11px] text-[var(--color-primary)] uppercase tracking-[0.2em] font-semibold mb-7">Offices</h3>
            <ul className="space-y-4">
              {offices.map((office) => (
                <li key={office} className="flex items-center gap-3">
                  <span className="w-1 h-1 bg-[var(--color-primary)] rounded-full flex-shrink-0" />
                  <span className="font-sans text-[11px] text-[var(--color-secondary)]/70 uppercase tracking-widest">
                    {office}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-10 p-6 bg-[var(--color-surface-container-low)] rounded-sm">
              <p className="font-sans text-xs text-[var(--color-secondary)] mb-3 leading-relaxed">
                Ready to architect your legal future?
              </p>
              <Link
                href="/contact"
                className="font-sans text-[11px] text-[var(--color-primary)] uppercase tracking-[0.15em] font-semibold flex items-center gap-2 hover:gap-3 transition-all"
              >
                Schedule a call
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-16 border-t border-[var(--color-outline-variant)]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-[var(--color-secondary)]/50">
            © {new Date().getFullYear()} De Novo Law Firm. Architectural Precision in Global Jurisprudence.
          </p>
          <div className="flex gap-8">
            <span className="font-sans text-[10px] text-[var(--color-secondary)]/40 tracking-widest uppercase">
              Established 1988
            </span>
            <span className="font-sans text-[10px] text-[var(--color-secondary)]/40 tracking-widest uppercase">
              All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
