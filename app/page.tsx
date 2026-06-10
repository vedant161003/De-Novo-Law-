"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RevealSection from "@/components/ui/RevealSection";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

gsap.registerPlugin(ScrollTrigger);

/* ── SVG Icons ── */
const IconScale = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="3" x2="12" y2="21"/><path d="M3 7l9-4 9 4"/><path d="M5 7l7 13 7-13"/>
  </svg>
);
const IconBuilding = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="1"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>
  </svg>
);
const IconLightbulb = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21h6M12 3a6 6 0 0 1 6 6c0 2.4-1.3 4.5-3.3 5.7L14 17H10l-.7-2.3C7.3 13.5 6 11.4 6 9a6 6 0 0 1 6-6z"/>
  </svg>
);
const IconGlobe = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9"/><path d="M12 3a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><line x1="3" y1="12" x2="21" y2="12"/>
  </svg>
);
const IconRocket = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
  </svg>
);
const IconHome = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);
const ArrowRight = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

const practiceAreas = [
  { id: "corporate",   Icon: IconBuilding,  title: "Corporate M&A",       description: "Precision-engineered advisory for high-stakes domestic and international acquisitions.",             href: "/practice-areas/corporate" },
  { id: "litigation",  Icon: IconScale,     title: "Complex Litigation",   description: "Rigorous advocacy in multi-jurisdictional commercial disputes and enforcement actions.",             href: "/practice-areas/litigation" },
  { id: "ip",          Icon: IconLightbulb, title: "Tech & Innovation",    description: "Comprehensive IP strategy and technology law for India's most ambitious innovators.",              href: "/practice-areas/intellectual-property" },
  { id: "transactions",Icon: IconGlobe,     title: "Global Compliance",    description: "End-to-end counsel for complex cross-border transactions and regulatory landscapes.",               href: "/practice-areas/transactions" },
  { id: "startup",     Icon: IconRocket,    title: "Start-up Practice",    description: "Purpose-built legal counsel for founders navigating the regulatory frontier.",                     href: "/practice-areas/startup" },
  { id: "realestate",  Icon: IconHome,      title: "Real Estate",          description: "Strategic legal frameworks for premium property acquisitions and developments.",                    href: "/practice-areas/real-estate" },
];

const stats = [
  { value: 36,  suffix: "+", label: "Years of Excellence" },
  { value: 500, suffix: "+", label: "Cases Won" },
  { value: 12,  suffix: "",  label: "Countries Served" },
  { value: 98,  suffix: "%", label: "Client Retention" },
];

const testimonials = [
  { quote: "De Novo's strategic acumen during our Series C fundraise was unparalleled. They structured a deal that protected our founders' interests while satisfying institutional investors.", author: "Arjun Malhotra",    title: "CEO, FinTech Ventures India",            initial: "A" },
  { quote: "The IP framework De Novo architected for our pharmaceutical portfolio has become our most valuable competitive moat. Their precision is extraordinary.",                            author: "Dr. Priya Sharma", title: "Founder, BioInnovate Labs",              initial: "P" },
  { quote: "When our cross-border merger faced regulatory complications, De Novo transformed potential disaster into a seamless transaction. Exceptional strategic counsel.",                   author: "Vikram Nair",      title: "Managing Director, Global Infrastructure", initial: "V" },
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0.62, 0.82]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-tag",  { opacity: 0, y: 14, duration: 0.7, delay: 0.4,  ease: "power3.out" });
      gsap.from(".hero-h1",   { opacity: 0, y: 50, duration: 1.0, delay: 0.65, ease: "power3.out" });
      gsap.from(".hero-body", { opacity: 0, y: 24, duration: 0.8, delay: 1.0,  ease: "power3.out" });
      gsap.from(".hero-ctas", { opacity: 0, y: 18, duration: 0.7, delay: 1.25, ease: "power3.out" });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ══════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════ */}
      <section
        ref={heroRef}
        style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}
        aria-label="De Novo Law Firm"
      >
        {/* Parallax BG */}
        <motion.div style={{ position: "absolute", inset: 0, y: bgY, scale: 1.08 }}>
          <Image src="/images/hero-interior.png" alt="De Novo Law Firm luxury interior" fill sizes="100vw" className="object-cover" priority />
          <motion.div style={{ position: "absolute", inset: 0, background: "linear-gradient(100deg, #0e0d0c 0%, rgba(14,13,12,0.72) 50%, rgba(14,13,12,0.15) 100%)", opacity: overlayOpacity }} />
        </motion.div>

        {/* Hero text */}
        <div className="site-container" style={{ position: "relative", zIndex: 2, paddingTop: "10rem", paddingBottom: "7rem", width: "100%" }}>
          <div style={{ maxWidth: "560px" }}>

            {/* Tag */}
            <div className="hero-tag" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
              <span style={{ display: "block", width: "2.5rem", height: "1px", background: "var(--color-primary)", flexShrink: 0 }} aria-hidden="true" />
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.42em", textTransform: "uppercase", color: "rgba(255,179,172,0.85)" }}>
                Established Practice
              </span>
            </div>

            {/* Heading */}
            <h1 className="hero-h1" style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(3.2rem, 7vw, 5.8rem)", color: "#fff", lineHeight: 1.04, marginBottom: "1.8rem", fontWeight: 400 }}>
              Architecting<br />
              <em style={{ fontStyle: "italic", color: "rgba(255,179,172,0.9)", fontWeight: 400 }}>Legal Certainty</em>
            </h1>

            {/* Body */}
            <p className="hero-body" style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.8, marginBottom: "2.8rem", maxWidth: "420px" }}>
              De Novo Law Firm is a reimagined elite corporate powerhouse, delivering precision-engineered counsel for the world&apos;s most complex legal landscapes.
            </p>

            {/* CTAs */}
            <div className="hero-ctas" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/practice-areas" className="btn btn-primary">
                View Our Expertise <ArrowRight />
              </Link>
              <Link href="/attorneys" className="btn btn-outline">
                Our Attorneys
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <motion.div
          style={{ position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", zIndex: 2 }}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.55rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.45em", textTransform: "uppercase" }}>Scroll</span>
          <div style={{ width: "1px", height: "2.5rem", background: "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)" }} />
        </motion.div>
      </section>

      {/* ══════════════════════════════
          SECTION 2 — PRACTICE AREAS
      ══════════════════════════════ */}
      <section style={{ backgroundColor: "#fff", padding: "6rem 0" }}>
        <div className="site-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "5rem", alignItems: "start" }}>

            {/* Left col */}
            <div>
              <RevealSection direction="left">
                <p className="label-tag" style={{ marginBottom: "1.5rem" }}>Simple Depth</p>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem,3.5vw,2.8rem)", color: "var(--color-text-primary)", lineHeight: 1.15, marginBottom: "1.25rem", fontWeight: 400 }}>
                  Foundations of{" "}
                  <em style={{ fontStyle: "italic", color: "var(--color-primary)" }}>Intellectual Clarity</em>
                </h2>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "var(--color-text-secondary)", lineHeight: 1.8, marginBottom: "2.5rem" }}>
                  Our practice is built on the principle of structural integrity. We dismantle complexity to rebuild legal frameworks that not only endure but empower global growth.
                </p>
              </RevealSection>
              <RevealSection delay={0.2}>
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <Image src="/images/team-boardroom.png" alt="De Novo legal strategy session" width={520} height={300} style={{ width: "100%", height: "220px", objectFit: "cover", display: "block" }} />
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", background: "linear-gradient(to top, rgba(0,0,0,0.35), transparent)" }} aria-hidden="true" />
                </div>
              </RevealSection>
            </div>

            {/* Right col — card grid */}
            <div>
              <div className="card-grid">
                {practiceAreas.map((area, i) => {
                  const Icon = area.Icon;
                  return (
                    <RevealSection key={area.id} delay={0.06 * i}>
                      <Link href={area.href} id={`practice-${area.id}`} className="practice-card">
                        <div className="practice-card__icon"><Icon /></div>
                        <h3 className="practice-card__title">{area.title}</h3>
                        <p className="practice-card__desc">{area.description}</p>
                        <span className="practice-card__cta">
                          Explore <ArrowRight size={10} />
                        </span>
                      </Link>
                    </RevealSection>
                  );
                })}
              </div>

              {/* All practices link */}
              <RevealSection delay={0.35}>
                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1.5rem" }}>
                  <Link
                    href="/practice-areas"
                    style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontFamily: "var(--font-sans)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-primary)", textDecoration: "none", borderBottom: "1.5px solid var(--color-primary)", paddingBottom: "2px", transition: "gap 0.2s" }}
                  >
                    All Practice Areas <ArrowRight size={12} />
                  </Link>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          SECTION 3 — PHILOSOPHY
      ══════════════════════════════ */}
      <section style={{ backgroundColor: "#f5f2ed", padding: "6rem 0", overflow: "hidden" }}>
        <div className="site-container">
          <div className="philosophy-wrapper">

            {/* Image column */}
            <RevealSection direction="left" className="philosophy-img-col">
              <div style={{ position: "relative" }}>
                <Image
                  src="/images/philosophy-books.png"
                  alt="Legal precision — books and pen"
                  width={620}
                  height={740}
                  style={{ width: "100%", height: "520px", objectFit: "cover", display: "block" }}
                />
                {/* Quote overlay bottom-right */}
                <div style={{
                  position: "absolute", bottom: "-1.5rem", right: "-1.5rem",
                  background: "var(--color-primary)",
                  padding: "2rem 1.75rem",
                  maxWidth: "210px",
                  zIndex: 5,
                  boxShadow: "0 20px 50px rgba(0,0,0,0.2)"
                }}>
                  <span style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "2.5rem", color: "rgba(255,255,255,0.2)", lineHeight: 1, marginBottom: "0.6rem" }} aria-hidden="true">&ldquo;</span>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "0.82rem", color: "#fff", fontStyle: "italic", lineHeight: 1.6 }}>
                    &ldquo;Clarity is the ultimate form of sophistication.&rdquo;
                  </p>
                </div>
              </div>
            </RevealSection>

            {/* Text card column — floats over image */}
            <RevealSection delay={0.2} direction="right" className="philosophy-card-col">
              <p className="label-tag" style={{ marginBottom: "1.5rem" }}>Our Philosophy</p>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem,3vw,2.5rem)", color: "var(--color-text-primary)", lineHeight: 1.15, marginBottom: "1.2rem", fontWeight: 400 }}>
                The Blueprint of <em style={{ fontStyle: "italic", color: "var(--color-primary)" }}>Advocacy</em>
              </h2>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "var(--color-text-secondary)", lineHeight: 1.8, marginBottom: "0.85rem" }}>
                We approach the law as an architect approaches a skyline: with an eye for both aesthetic purity and structural permanence.
              </p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "var(--color-text-secondary)", lineHeight: 1.8, marginBottom: "2rem" }}>
                De Novo Law Firm was reimagined to serve the elite modern enterprise — shifting from traditional representation to strategic architecture.
              </p>

              <div style={{ borderTop: "1px solid var(--color-border)" }}>
                {["Uncompromising Practices", "Absolute Transparency", "Personal Solvency"].map((value, i) => (
                  <div key={value} className="philosophy-value-row">
                    <span className="philosophy-value-num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="philosophy-value-label">{value}</span>
                    <span className="philosophy-value-arrow"><ArrowRight size={14} /></span>
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          SECTION 4 — STATS
      ══════════════════════════════ */}
      <section style={{ backgroundColor: "#1a1008", padding: "5rem 0", position: "relative", overflow: "hidden" }} aria-label="Firm statistics">
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }} aria-hidden="true">
          <div style={{ position: "absolute", width: "500px", height: "500px", borderRadius: "50%", background: "rgba(105,0,8,0.18)", filter: "blur(100px)", top: "-10rem", left: "-8rem" }} />
          <div style={{ position: "absolute", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(105,0,8,0.10)", filter: "blur(80px)", bottom: "-8rem", right: "-6rem" }} />
        </div>
        <div className="site-container" style={{ position: "relative", zIndex: 1 }}>
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <RevealSection key={stat.label} delay={0.1 * i}>
                <div className="stat-cell">
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.8rem,5vw,4rem)", fontWeight: 700, color: "#fff", lineHeight: 1, marginBottom: "0.6rem" }}>
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.62rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.25em", textTransform: "uppercase" }}>
                    {stat.label}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          SECTION 5 — TESTIMONIALS
      ══════════════════════════════ */}
      <section style={{ backgroundColor: "#fff", padding: "6rem 0" }}>
        <div className="site-container">

          {/* Header row */}
          <RevealSection>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "1.5rem", flexWrap: "wrap", marginBottom: "3.5rem" }}>
              <div>
                <p className="label-tag" style={{ marginBottom: "1rem" }}>Client Voices</p>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem,3.5vw,2.8rem)", color: "var(--color-text-primary)", lineHeight: 1.15, fontWeight: 400 }}>
                  Trusted by India&apos;s <em style={{ fontStyle: "italic", color: "var(--color-primary)" }}>Elite</em>
                </h2>
              </div>
              <Link href="/about" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontFamily: "var(--font-sans)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-text-secondary)", textDecoration: "none", borderBottom: "1px solid var(--color-border)", paddingBottom: "2px" }}>
                Our Story
              </Link>
            </div>
          </RevealSection>

          <div className="testimonial-grid">
            {testimonials.map((t, i) => (
              <RevealSection key={t.author} delay={0.1 * i}>
                <div className="testimonial-card">
                  {/* Author */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.9rem", marginBottom: "1.5rem" }}>
                    <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "50%", background: "var(--color-primary-pale)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", fontWeight: 700, color: "var(--color-primary)" }}>{t.initial}</span>
                    </div>
                    <div>
                      <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.84rem", fontWeight: 600, color: "var(--color-text-primary)" }}>{t.author}</p>
                      <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", color: "var(--color-text-muted)" }}>{t.title}</p>
                    </div>
                  </div>
                  {/* Quote */}
                  <span style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "2.8rem", color: "rgba(105,0,8,0.1)", lineHeight: 1, marginBottom: "0.6rem" }} aria-hidden="true">&ldquo;</span>
                  <blockquote style={{ fontFamily: "var(--font-serif)", fontSize: "0.9rem", fontStyle: "italic", color: "var(--color-text-secondary)", lineHeight: 1.8 }}>
                    {t.quote}
                  </blockquote>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          SECTION 6 — CTA / INQUIRY
      ══════════════════════════════ */}
      <section style={{ backgroundColor: "var(--color-primary)", padding: "7rem 0", position: "relative", overflow: "hidden" }} aria-label="Begin consultation">
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }} aria-hidden="true">
          <div style={{ position: "absolute", width: "600px", height: "600px", borderRadius: "50%", background: "rgba(0,0,0,0.18)", filter: "blur(110px)", top: "-10rem", right: "-8rem" }} />
          <div style={{ position: "absolute", width: "500px", height: "500px", borderRadius: "50%", background: "rgba(255,255,255,0.04)", filter: "blur(80px)", bottom: "-8rem", left: "-6rem" }} />
        </div>

        <div className="site-container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
            <RevealSection>
              <p style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", fontFamily: "var(--font-sans)", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.45em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: "1.5rem" }}>
                <span style={{ display: "block", width: "2rem", height: "1px", background: "rgba(255,255,255,0.3)" }} aria-hidden="true" />
                Inquiry
                <span style={{ display: "block", width: "2rem", height: "1px", background: "rgba(255,255,255,0.3)" }} aria-hidden="true" />
              </p>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.2rem,5vw,3.8rem)", color: "#fff", lineHeight: 1.1, fontWeight: 400, marginBottom: "1.2rem" }}>
                Begin the Architect&apos;s Review.
              </h2>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "2.8rem" }}>
                Your legal foundation deserves the scrutiny of the world&apos;s most rigorous minds. Secure your confidential consultation with De Novo Law Firm.
              </p>
            </RevealSection>

            <RevealSection delay={0.2}>
              <form className="cta-form" onSubmit={(e) => e.preventDefault()} aria-label="Consultation inquiry form">
                <label htmlFor="cta-email" style={{ position: "absolute", width: "1px", height: "1px", clip: "rect(0,0,0,0)", overflow: "hidden" }}>Corporate Email Address</label>
                <input id="cta-email" type="email" required placeholder="Corporate Email Address" />
                <button type="submit">Request Brief</button>
              </form>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", color: "rgba(255,255,255,0.28)", marginTop: "1.2rem", letterSpacing: "0.05em" }}>
                Strictly confidential · No obligation · Response within 24 hours
              </p>
            </RevealSection>
          </div>
        </div>
      </section>
    </>
  );
}
