"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import RevealSection from "@/components/ui/RevealSection";

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

const areas = [
  {
    id: "corporate",
    title: "Corporate M&A",
    Icon: IconBuilding,
    tagline: "Precision-driven structural engineering for high-stakes acquisitions.",
    description: "Our Corporate M&A practice advises on all stages of mergers, acquisitions, joint ventures and restructurings. From target identification through due diligence, negotiation, regulatory filings and post-merger integration — we architect transactions that stand the test of time.",
    capabilities: [
      "Domestic and cross-border M&A advisory",
      "Joint ventures and strategic alliances",
      "Corporate restructuring and demergers",
      "Due diligence and transaction management",
      "Post-merger integration counsel",
    ],
    image: "/images/practice-corporate.png",
    href: "/practice-areas/corporate",
  },
  {
    id: "transactions",
    title: "Transactions",
    Icon: IconGlobe,
    tagline: "Architectural integrity in structuring complex financial instruments.",
    description: "Our Transactions practice covers the full spectrum of commercial and financial transactions. We structure, negotiate and close complex deals across private equity, venture capital, debt financing, project finance, and structured products.",
    capabilities: [
      "Private equity and venture capital transactions",
      "Debt financing and structured finance",
      "Project finance and infrastructure",
      "Commercial contracts and agreements",
      "Regulatory compliance in transactions",
    ],
    image: "/images/hero-interior.png",
    href: "/practice-areas/transactions",
  },
  {
    id: "startup",
    title: "Start-up Practice",
    Icon: IconRocket,
    tagline: "Building the legal foundation for India's most ambitious ventures.",
    description: "De Novo's Start-up Practice is purpose-built for founders. We understand the unique cadence of early-stage companies and provide counsel that is both strategically sophisticated and operationally practical.",
    capabilities: [
      "Incorporation and equity structuring",
      "Founder agreements and vesting",
      "Term sheet and investment round support",
      "Employee stock option plans (ESOPs)",
      "Regulatory compliance for startups",
    ],
    image: "/images/team-boardroom.png",
    href: "/practice-areas/startup",
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    Icon: IconLightbulb,
    tagline: "Your innovations, protected with rigorous precision.",
    description: "Our Intellectual Property practice encompasses the full IP lifecycle — from prosecution and registration through enforcement and licensing. We protect what matters most: the innovations that define your competitive advantage.",
    capabilities: [
      "Patent prosecution and litigation",
      "Trademark registration and enforcement",
      "Copyright counsel and licensing",
      "Trade secrets and confidentiality",
      "IP due diligence in transactions",
    ],
    image: "/images/practice-ip.png",
    href: "/practice-areas/intellectual-property",
  },
  {
    id: "real-estate",
    title: "Real Estate",
    Icon: IconHome,
    tagline: "Strategic legal frameworks for India's premium property market.",
    description: "Our Real Estate practice advises developers, investors, REITs, and corporates on the full spectrum of property transactions — from acquisitions and development to financing and dispute resolution.",
    capabilities: [
      "Commercial and residential transactions",
      "Development and construction agreements",
      "REIT structuring and compliance",
      "Title due diligence and clearance",
      "Real estate dispute resolution",
    ],
    image: "/images/philosophy-books.png",
    href: "/practice-areas/real-estate",
  },
  {
    id: "litigation",
    title: "Litigation",
    Icon: IconScale,
    tagline: "Rigorous advocacy in the most complex commercial disputes.",
    description: "De Novo's Litigation practice combines meticulous preparation with strategic clarity. We handle complex commercial disputes across all major Indian courts and tribunals, from contract disputes to enforcement of intellectual property rights.",
    capabilities: [
      "Commercial dispute resolution",
      "IP litigation and enforcement",
      "Employment and labor disputes",
      "Arbitration and mediation",
      "Regulatory investigation defense",
    ],
    image: "/images/hero-interior.png",
    href: "/practice-areas/litigation",
  },
];

export default function PracticeAreasClient() {
  const [active, setActive] = useState(areas[0].id);
  const activeArea = areas.find((a) => a.id === active)!;
  const ActiveIcon = activeArea.Icon;

  return (
    <div style={{ backgroundColor: "var(--color-bg)", minHeight: "100vh" }}>
      
      {/* ── HERO SECTION ── */}
      <section style={{ position: "relative", paddingTop: "11rem", paddingBottom: "5rem", overflow: "hidden" }}>
        <div className="site-container" style={{ position: "relative", zIndex: 2 }}>
          <RevealSection>
            <p className="label-tag" style={{ marginBottom: "1.8rem" }}>Our Expertise</p>
            <h1 className="font-serif" style={{ fontSize: "clamp(2.8rem, 6vw, 4.8rem)", color: "var(--color-text-primary)", lineHeight: 1.1, marginBottom: "2rem", fontWeight: 400 }}>
              Areas of <em className="font-serif" style={{ fontStyle: "italic", color: "var(--color-primary)", fontWeight: 400 }}>Practice</em>
            </h1>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", color: "var(--color-text-secondary)", maxWidth: "640px", lineHeight: 1.8 }}>
              Six specialized disciplines engineered for ultimate structural performance. We resolve legal complexity to build certainty for growth.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ── INTERACTIVE TAB EXPLORATION ── */}
      <section style={{ padding: "4rem 0 6rem 0", backgroundColor: "#fff" }}>
        <div className="site-container">
          
          {/* Tab Navigation Grid */}
          <div style={{ 
            display: "flex", 
            flexWrap: "wrap", 
            borderBottom: "1px solid var(--color-border)", 
            marginBottom: "4.5rem" 
          }} role="tablist" aria-label="Practice areas">
            {areas.map((area) => {
              const Icon = area.Icon;
              const isActive = active === area.id;
              return (
                <button
                  key={area.id}
                  id={`tab-${area.id}`}
                  onClick={() => setActive(area.id)}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${area.id}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.8rem",
                    padding: "1.2rem 2rem",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    backgroundColor: isActive ? "var(--color-bg)" : "transparent",
                    color: isActive ? "var(--color-primary)" : "var(--color-text-secondary)",
                    border: "none",
                    borderBottom: isActive ? "2px solid var(--color-primary)" : "2px solid transparent",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                    outline: "none"
                  }}
                  className="hover:text-[var(--color-primary)]"
                >
                  <Icon />
                  <span>{area.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Area Panel View */}
          <div
            id={`panel-${activeArea.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeArea.id}`}
          >
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
              gap: "5rem", 
              alignItems: "center" 
            }}>
              
              {/* Left Panel: Description and Capabilities */}
              <div>
                <p className="label-tag" style={{ marginBottom: "1.5rem" }}>
                  <span style={{ marginRight: "0.5rem" }}><ActiveIcon /></span>
                  {activeArea.title}
                </p>
                <h2 className="font-serif" style={{ fontSize: "1.8rem", color: "var(--color-text-primary)", lineHeight: 1.25, marginBottom: "1.5rem", fontWeight: 400 }}>
                  {activeArea.tagline}
                </h2>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "var(--color-text-secondary)", lineHeight: 1.8, marginBottom: "2rem" }}>
                  {activeArea.description}
                </p>

                <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--color-text-primary)", marginBottom: "1rem" }}>
                  Core Capabilities
                </h3>
                
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "2.5rem" }} aria-label={`${activeArea.title} capabilities`}>
                  {activeArea.capabilities.map((cap) => (
                    <li key={cap} style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
                      <span style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "var(--color-primary)", flexShrink: 0 }} aria-hidden="true" />
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "var(--color-text-secondary)" }}>
                        {cap}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link href={activeArea.href} className="btn btn-primary">
                  Explore {activeArea.title} <ArrowRight />
                </Link>
              </div>

              {/* Right Panel: Image Display with offsets */}
              <div style={{ position: "relative" }}>
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <Image
                    src={activeArea.image}
                    alt={activeArea.title}
                    width={600}
                    height={480}
                    style={{ width: "100%", height: "360px", objectFit: "cover", display: "block" }}
                  />
                </div>
                <div style={{ 
                  position: "absolute", 
                  bottom: "-15px", 
                  right: "-15px", 
                  width: "100%", 
                  height: "100%", 
                  border: "1px solid var(--color-primary)", 
                  zIndex: -1 
                }} aria-hidden="true" />
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ── ALL PRACTICE AREAS GRID (GAP-PX GRID) ── */}
      <section style={{ padding: "6rem 0 8rem 0", backgroundColor: "var(--color-bg)" }}>
        <div className="site-container">
          <RevealSection style={{ marginBottom: "3.5rem" }}>
            <h2 className="font-serif" style={{ fontSize: "2rem", color: "var(--color-text-primary)", fontWeight: 400 }}>
              All Practice <em className="font-serif" style={{ fontStyle: "italic", color: "var(--color-primary)", fontWeight: 400 }}>Areas</em>
            </h2>
          </RevealSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1px", backgroundColor: "var(--color-border)" }}>
            {areas.map((area, i) => {
              const Icon = area.Icon;
              return (
                <RevealSection key={area.id} delay={0.07 * i}>
                  <Link
                    href={area.href}
                    id={`area-card-${area.id}`}
                    className="practice-card"
                    style={{ height: "100%", minHeight: "220px" }}
                  >
                    <div className="practice-card__icon" style={{ color: "var(--color-primary)", marginBottom: "1.2rem" }}><Icon /></div>
                    <h3 className="practice-card__title" style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "0.6rem" }}>{area.title}</h3>
                    <p className="practice-card__desc" style={{ fontSize: "0.8rem", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{area.tagline}</p>
                    <span className="practice-card__cta" style={{ fontSize: "0.6rem", fontWeight: 700, color: "var(--color-primary)" }}>
                      Explore <ArrowRight size={10} />
                    </span>
                  </Link>
                </RevealSection>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
