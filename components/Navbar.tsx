"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Attorneys",      href: "/attorneys" },
  { label: "About",          href: "/about" },
  { label: "Insights",       href: "/insights" },
  { label: "Careers",        href: "/careers" },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      const t = setTimeout(() => setMobileOpen(false), 0);
      return () => clearTimeout(t);
    }
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    transition: "all 0.4s ease",
    borderBottom: scrolled ? "1px solid rgba(232,228,222,0.4)" : "1px solid transparent",
    backgroundColor: scrolled ? "rgba(252,249,246,0.96)" : "rgba(252,249,246,0.55)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.06)" : "none",
    padding: scrolled ? "0.9rem 0" : "1.4rem 0",
  };

  return (
    <>
      <nav style={navStyle} role="navigation" aria-label="Main navigation">
        <div className="site-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Logo */}
          <Link href="/" aria-label="De Novo Law Firm — Home" style={{ display: "block", flexShrink: 0 }}>
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <Image
                src="/images/logo.png"
                alt="De Novo Law Firm"
                width={180}
                height={54}
                style={{ height: "46px", width: "auto", objectFit: "contain", display: "block" }}
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop nav */}
          <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }} className="desktop-nav">
            <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
              {navLinks.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="nav-link"
                    style={{ color: isActive ? "var(--color-primary)" : undefined }}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                    {isActive && (
                      <span style={{ position: "absolute", bottom: "-2px", left: 0, width: "100%", height: "1.5px", background: "var(--color-primary)" }} />
                    )}
                  </Link>
                );
              })}
            </div>

            <Link
              href="/contact"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "0.75rem 1.6rem",
                background: "var(--color-primary)",
                color: "#fff",
                transition: "background 0.25s ease",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-primary-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--color-primary)")}
            >
              Consultation
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
              zIndex: 60,
            }}
            className="mobile-hamburger"
          >
            <motion.span animate={mobileOpen ? { rotate: 45, y: 7 }  : { rotate: 0, y: 0 }}  style={{ display: "block", width: "22px", height: "1.5px", background: "var(--color-text-primary)", transformOrigin: "center" }} transition={{ duration: 0.25 }} />
            <motion.span animate={mobileOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }} style={{ display: "block", width: "22px", height: "1.5px", background: "var(--color-text-primary)" }} transition={{ duration: 0.2 }} />
            <motion.span animate={mobileOpen ? { rotate: -45, y: -7 }: { rotate: 0, y: 0 }} style={{ display: "block", width: "22px", height: "1.5px", background: "var(--color-text-primary)", transformOrigin: "center" }} transition={{ duration: 0.25 }} />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.42, ease: [0.76, 0, 0.24, 1] }}
            style={{ position: "fixed", inset: 0, zIndex: 40, background: "var(--color-bg)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
          >
            <nav style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2.5rem" }}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                >
                  <Link href={link.href} style={{ fontFamily: "var(--font-serif)", fontSize: "2.6rem", fontWeight: 400, color: "var(--color-text-primary)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-primary)")}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.4 }}>
                <Link href="/contact" className="btn btn-primary">
                  Book Consultation
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile bottom nav bar */}
      <nav
        aria-label="Mobile navigation"
        style={{
          position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 50,
          background: "rgba(252,249,246,0.96)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderTop: "1px solid rgba(232,228,222,0.5)",
          display: "flex", justifyContent: "space-around", alignItems: "center",
          padding: "0.6rem 1rem 0.8rem",
        }}
        className="mobile-bottom-nav"
      >
        <MobileNavItem href="/"              icon="home"   label="Home"     pathname={pathname} />
        <MobileNavItem href="/practice-areas" icon="gavel"  label="Practice" pathname={pathname} />
        <MobileNavItem href="/attorneys"      icon="person" label="Team"     pathname={pathname} />
        <MobileNavItem href="/contact"        icon="mail"   label="Contact"  pathname={pathname} />
      </nav>

      {/* CSS: hide desktop nav / hamburger on mobile vs desktop */}
      <style>{`
        .desktop-nav { display: flex; }
        .mobile-hamburger { display: none; }
        .mobile-bottom-nav { display: none; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-hamburger { display: flex !important; }
          .mobile-bottom-nav { display: flex !important; }
        }
      `}</style>
    </>
  );
}

function MobileNavItem({ href, icon, label, pathname }: { href: string; icon: string; label: string; pathname: string }) {
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
  return (
    <Link href={href} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px", textDecoration: "none", color: isActive ? "var(--color-primary)" : "var(--color-text-muted)", transition: "color 0.2s" }}>
      <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>{icon}</span>
      <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>{label}</span>
    </Link>
  );
}
