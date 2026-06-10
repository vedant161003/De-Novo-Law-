"use client";

import { useState } from "react";
import Link from "next/link";
import RevealSection from "@/components/ui/RevealSection";

const openRoles = [
  {
    id: "associate-corporate",
    title: "Associate — Corporate M&A",
    type: "Full-time",
    location: "Bangalore",
    description: "Join our Corporate M&A team as a senior associate. You will advise on complex transactions across M&A, restructurings and joint ventures.",
    requirements: ["3–6 years PQE", "Strong M&A background", "NLU or equivalent qualification"],
  },
  {
    id: "associate-ip",
    title: "Associate — Intellectual Property",
    type: "Full-time",
    location: "Bangalore / Remote",
    description: "Our growing IP practice seeks a driven associate with expertise in patent prosecution and IP litigation. Excellent research and drafting skills essential.",
    requirements: ["2–5 years PQE", "IP background preferred", "Strong litigation aptitude"],
  },
  {
    id: "paralegal",
    title: "Senior Paralegal",
    type: "Full-time",
    location: "Bangalore",
    description: "We seek a detail-oriented senior paralegal to support our transactions and corporate teams with document management, research and client coordination.",
    requirements: ["3+ years experience", "Strong organizational skills", "Corporate law background"],
  },
  {
    id: "intern-summer",
    title: "Summer Intern",
    type: "Internship",
    location: "Bangalore",
    description: "An immersive 8-week summer internship program for penultimate-year law students. Work directly with principal attorneys on live matters.",
    requirements: ["Penultimate year law student", "Excellent academic record", "Strong interest in corporate law"],
  },
];

const IconGrowth = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
  </svg>
);
const IconBalance = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="3" x2="12" y2="21"/><path d="M3 7l9-4 9 4"/><path d="M5 7l7 13 7-13"/>
  </svg>
);
const IconCollaboration = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IconPrecision = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
);

const values = [
  { Icon: IconGrowth, title: "Growth", description: "Continuous learning, direct mentorship from lead partners, and clear structural pathways to partnership." },
  { Icon: IconBalance, title: "Balance", description: "We believe the highest quality counsel is delivered by attorneys who lead full, balanced professional lives." },
  { Icon: IconCollaboration, title: "Collaboration", description: "Every legal brief benefits from diverse viewpoints. We structure collaboration, not internal competition." },
  { Icon: IconPrecision, title: "Precision", description: "We hold ourselves to surgical standards of clarity — and we equip our teams with the resources to achieve them." },
];

export default function CareersClient() {
  const [openRole, setOpenRole] = useState<string | null>(null);

  return (
    <div style={{ backgroundColor: "var(--color-bg)", minHeight: "100vh" }}>
      
      {/* ── HERO SECTION ── */}
      <section style={{ position: "relative", paddingTop: "11rem", paddingBottom: "6rem", overflow: "hidden" }}>
        <div className="site-container" style={{ position: "relative", zIndex: 2 }}>
          <RevealSection>
            <p className="label-tag" style={{ marginBottom: "1.8rem" }}>Join De Novo</p>
            <h1 className="font-serif" style={{ fontSize: "clamp(2.8rem, 6vw, 4.8rem)", color: "var(--color-text-primary)", lineHeight: 1.1, marginBottom: "2rem", fontWeight: 400 }}>
              Build Your <em className="font-serif" style={{ fontStyle: "italic", color: "var(--color-primary)", fontWeight: 400 }}>Legal Legacy</em>
            </h1>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", color: "var(--color-text-secondary)", maxWidth: "640px", lineHeight: 1.8 }}>
              De Novo is a firm designed for exceptional legal minds. We seek practitioners who combine analytical rigor with the drive to build structural clarity for our clients.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ── WHY DE NOVO VALUES SECTION (GAP-PX GRID) ── */}
      <section style={{ padding: "5rem 0", backgroundColor: "#fff" }}>
        <div className="site-container">
          <RevealSection style={{ marginBottom: "4rem" }}>
            <p className="label-tag" style={{ marginBottom: "1.5rem" }}>Our Principles</p>
            <h2 className="font-serif" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "var(--color-text-primary)", fontWeight: 400 }}>
              Why <em className="font-serif" style={{ fontStyle: "italic", color: "var(--color-primary)", fontWeight: 400 }}>De Novo</em>
            </h2>
          </RevealSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1px", backgroundColor: "var(--color-border)" }}>
            {values.map((v, i) => {
              const Icon = v.Icon;
              return (
                <RevealSection key={v.title} delay={0.08 * i}>
                  <div className="practice-card" style={{ height: "100%", minHeight: "240px" }}>
                    <div className="practice-card__icon" style={{ color: "var(--color-primary)", marginBottom: "1.5rem" }}>
                      <Icon />
                    </div>
                    <h3 className="practice-card__title" style={{ fontSize: "0.95rem", fontWeight: 700, marginBottom: "0.8rem", color: "var(--color-text-primary)" }}>
                      {v.title}
                    </h3>
                    <p className="practice-card__desc" style={{ fontSize: "0.8rem", lineHeight: 1.7, color: "var(--color-text-secondary)" }}>
                      {v.description}
                    </p>
                  </div>
                </RevealSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── OPEN POSITIONS ACCORDIONS ── */}
      <section style={{ padding: "6rem 0 8rem 0", backgroundColor: "var(--color-bg)" }}>
        <div className="site-container">
          <RevealSection style={{ marginBottom: "4rem" }}>
            <p className="label-tag" style={{ marginBottom: "1.5rem" }}>Opportunities</p>
            <h2 className="font-serif" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "var(--color-text-primary)", marginBottom: "1.5rem", fontWeight: 400 }}>
              Open <em className="font-serif" style={{ fontStyle: "italic", color: "var(--color-primary)", fontWeight: 400 }}>Positions</em>
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "var(--color-text-secondary)" }}>
              If you don&apos;t see a matching position, submit your credentials to{" "}
              <a href="mailto:careers@denovolawfirm.in" style={{ color: "var(--color-primary)", textDecoration: "none", fontWeight: 600 }}>
                careers@denovolawfirm.in
              </a>
            </p>
          </RevealSection>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            {openRoles.map((role, i) => (
              <RevealSection key={role.id} delay={0.07 * i}>
                <div style={{ 
                  backgroundColor: "#fff", 
                  border: "1px solid var(--color-border)", 
                  transition: "all 0.3s ease" 
                }}>
                  {/* Accordion Toggle Header */}
                  <button
                    id={`role-toggle-${role.id}`}
                    onClick={() => setOpenRole(openRole === role.id ? null : role.id)}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "2rem",
                      backgroundColor: "transparent",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      outline: "none"
                    }}
                    aria-expanded={openRole === role.id}
                    aria-controls={`role-panel-${role.id}`}
                  >
                    <div>
                      <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "0.8rem" }}>
                        <span style={{ 
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.58rem",
                          fontWeight: 700,
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          color: "var(--color-primary)",
                          border: "1px solid rgba(105,0,8,0.3)",
                          padding: "0.25rem 0.6rem",
                          lineHeight: 1
                        }}>
                          {role.type}
                        </span>
                        <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", color: "var(--color-text-secondary)" }}>
                          {role.location}
                        </span>
                      </div>
                      <h3 className="font-serif" style={{ fontSize: "1.3rem", color: "var(--color-text-primary)", fontWeight: 400 }}>
                        {role.title}
                      </h3>
                    </div>
                    
                    {/* SVG Plus/Minus Sign */}
                    <span
                      style={{
                        color: "var(--color-primary)",
                        transform: openRole === role.id ? "rotate(45deg)" : "rotate(0deg)",
                        transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        backgroundColor: "var(--color-bg-offwhite)",
                        flexShrink: 0
                      }}
                      aria-hidden="true"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </button>

                  {/* Accordion Panel Body */}
                  {openRole === role.id && (
                    <div
                      id={`role-panel-${role.id}`}
                      style={{
                        padding: "0 2rem 2.5rem 2rem",
                        borderTop: "1px solid var(--color-border)",
                        animation: "fade-in 0.4s ease"
                      }}
                    >
                      <p style={{ 
                        fontFamily: "var(--font-sans)", 
                        fontSize: "0.85rem", 
                        color: "var(--color-text-secondary)", 
                        lineHeight: 1.75, 
                        marginTop: "1.8rem", 
                        marginBottom: "1.8rem" 
                      }}>
                        {role.description}
                      </p>

                      <h4 style={{ 
                        fontFamily: "var(--font-sans)", 
                        fontSize: "0.68rem", 
                        fontWeight: 700, 
                        textTransform: "uppercase", 
                        letterSpacing: "0.15em", 
                        color: "var(--color-text-primary)", 
                        marginBottom: "1rem" 
                      }}>
                        Requirements
                      </h4>
                      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "2.5rem" }}>
                        {role.requirements.map((req) => (
                          <li key={req} style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
                            <span style={{ 
                              width: "4px", 
                              height: "4px", 
                              borderRadius: "50%", 
                              backgroundColor: "var(--color-primary)", 
                              flexShrink: 0 
                            }} aria-hidden="true" />
                            <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "var(--color-text-secondary)" }}>
                              {req}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <Link href="/contact" className="btn btn-primary" style={{ padding: "0.9rem 2rem" }}>
                        Apply for Role
                      </Link>
                    </div>
                  )}
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
