"use client";

import { useState, FormEvent } from "react";
import RevealSection from "@/components/ui/RevealSection";

const offices = [
  {
    city: "Bangalore",
    label: "HQ",
    address: "12th Floor, Embassy Golf Links Business Park, Koramangala, Bangalore — 560 034",
    phone: "+91 80 4120 0000",
    email: "bangalore@denovolawfirm.in",
  },
];

const practiceInterests = [
  "Corporate M&A",
  "Transactions",
  "Start-up Practice",
  "Intellectual Property",
  "Real Estate",
  "Litigation",
  "Other / Not sure yet",
];

const IconCheck = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: "var(--color-bg)", minHeight: "100vh" }}>
      
      {/* ── HERO SECTION ── */}
      <section style={{ position: "relative", paddingTop: "11rem", paddingBottom: "5rem", overflow: "hidden" }}>
        <div className="site-container" style={{ position: "relative", zIndex: 2 }}>
          <RevealSection>
            <p className="label-tag" style={{ marginBottom: "1.8rem" }}>Get in Touch</p>
            <h1 className="font-serif" style={{ fontSize: "clamp(2.8rem, 6vw, 4.8rem)", color: "var(--color-text-primary)", lineHeight: 1.1, marginBottom: "2rem", fontWeight: 400 }}>
              Begin the <em className="font-serif" style={{ fontStyle: "italic", color: "var(--color-primary)", fontWeight: 400 }}>Conversation</em>
            </h1>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", color: "var(--color-text-secondary)", maxWidth: "640px", lineHeight: 1.8 }}>
              Your legal matters deserve absolute confidentiality and precise advisory counsel. Schedule an initial consultation with De Novo today.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ── CONTACT GRID SECTION ── */}
      <section style={{ padding: "3rem 0 8rem 0", backgroundColor: "#fff" }}>
        <div className="site-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "5rem" }} className="lg:grid-cols-5">
            
            {/* Left Column: Office details */}
            <div className="lg:col-span-2">
              <RevealSection direction="left">
                <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                  {offices.map((office) => (
                    <div 
                      key={office.city} 
                      style={{ 
                        padding: "2.5rem 2rem", 
                        backgroundColor: "var(--color-bg)", 
                        border: "1px solid var(--color-border)",
                        transition: "background-color 0.25s ease"
                      }}
                      className="group hover:bg-[var(--color-bg-offwhite)]"
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1.2rem" }}>
                        <h2 className="font-serif" style={{ fontSize: "1.4rem", color: "var(--color-text-primary)", fontWeight: 400 }}>
                          {office.city} Office
                        </h2>
                        {office.label && (
                          <span style={{ 
                            fontFamily: "var(--font-sans)", 
                            fontSize: "0.55rem", 
                            fontWeight: 700, 
                            letterSpacing: "0.15em", 
                            textTransform: "uppercase", 
                            color: "#fff", 
                            backgroundColor: "var(--color-primary)", 
                            padding: "0.2rem 0.5rem",
                            lineHeight: 1,
                            alignSelf: "center"
                          }}>
                            {office.label}
                          </span>
                        )}
                      </div>
                      
                      <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                        {office.address}
                      </p>

                      <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                        <a
                          href={`tel:${office.phone.replace(/\s/g, "")}`}
                          style={{ 
                            fontFamily: "var(--font-sans)", 
                            fontSize: "0.82rem", 
                            color: "var(--color-text-secondary)", 
                            textDecoration: "none",
                            transition: "color 0.2s"
                          }}
                          className="hover:text-[var(--color-primary)]"
                        >
                          T: {office.phone}
                        </a>
                        <a
                          href={`mailto:${office.email}`}
                          style={{ 
                            fontFamily: "var(--font-sans)", 
                            fontSize: "0.82rem", 
                            color: "var(--color-text-secondary)", 
                            textDecoration: "none",
                            transition: "color 0.2s"
                          }}
                          className="hover:text-[var(--color-primary)]"
                        >
                          E: {office.email}
                        </a>
                      </div>
                    </div>
                  ))}

                  {/* Office Hours */}
                  <div style={{ padding: "2rem", borderTop: "1px solid var(--color-border)" }}>
                    <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--color-text-primary)", marginBottom: "1.2rem" }}>
                      Office Hours
                    </h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "var(--color-text-secondary)" }}>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>Monday – Friday</span>
                        <span>10:00 AM – 8:00 PM IST</span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>Saturday</span>
                        <span>10:00 AM – 5:00 PM IST</span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>Sunday</span>
                        <span style={{ color: "var(--color-text-muted)" }}>Closed</span>
                      </div>
                    </div>
                  </div>

                  {/* Confidentiality notice */}
                  <div style={{ padding: "1.5rem 1.8rem", backgroundColor: "var(--color-bg-offwhite)", border: "1px solid var(--color-border)" }}>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "var(--color-text-secondary)", lineHeight: 1.6, fontStyle: "italic" }}>
                      All inquiry requests are treated with absolute discretion. Your data is protected by the highest standard of privacy and client-attorney confidentiality.
                    </p>
                  </div>

                </div>
              </RevealSection>
            </div>

            {/* Right Column: Inquiry Form */}
            <div className="lg:col-span-3">
              <RevealSection delay={0.15} direction="right">
                {submitted ? (
                  <div style={{ 
                    height: "100%", 
                    display: "flex", 
                    flexDirection: "column", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    textAlign: "center", 
                    padding: "4rem 2rem", 
                    backgroundColor: "var(--color-bg)",
                    border: "1px solid var(--color-border)"
                  }}>
                    <div style={{ 
                      width: "64px", 
                      height: "64px", 
                      borderRadius: "50%", 
                      backgroundColor: "var(--color-primary)", 
                      color: "#fff",
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center", 
                      marginBottom: "2rem" 
                    }}>
                      <IconCheck />
                    </div>
                    <h2 className="font-serif" style={{ fontSize: "1.8rem", color: "var(--color-text-primary)", marginBottom: "0.8rem", fontWeight: 400 }}>
                      Thank You
                    </h2>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "var(--color-text-secondary)", maxWidth: "360px", lineHeight: 1.7 }}>
                      Your consultation request has been logged successfully. A partner from our corporate advisory team will contact you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    style={{ 
                      backgroundColor: "#fff", 
                      border: "1px solid var(--color-border)",
                      padding: "3rem", 
                      display: "flex",
                      flexDirection: "column",
                      gap: "1.8rem"
                    }}
                    aria-label="Consultation request form"
                    noValidate
                  >
                    <div>
                      <h2 className="font-serif" style={{ fontSize: "1.6rem", color: "var(--color-text-primary)", marginBottom: "0.4rem", fontWeight: 400 }}>
                        Consultation Request
                      </h2>
                      <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem", color: "var(--color-text-muted)" }}>
                        Required fields are indicated. We will respond promptly.
                      </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
                      <div>
                        <label htmlFor="contact-name" style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--color-text-primary)", marginBottom: "0.5rem" }}>
                          Full Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          placeholder="Your name"
                          style={{
                            width: "100%",
                            border: "1px solid var(--color-border)",
                            backgroundColor: "var(--color-bg)",
                            padding: "0.8rem 1rem",
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.82rem",
                            color: "var(--color-text-primary)",
                            outline: "none",
                            transition: "border-color 0.2s"
                          }}
                          className="focus:border-[var(--color-primary)]"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--color-text-primary)", marginBottom: "0.5rem" }}>
                          Email Address *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          placeholder="name@company.com"
                          style={{
                            width: "100%",
                            border: "1px solid var(--color-border)",
                            backgroundColor: "var(--color-bg)",
                            padding: "0.8rem 1rem",
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.82rem",
                            color: "var(--color-text-primary)",
                            outline: "none",
                            transition: "border-color 0.2s"
                          }}
                          className="focus:border-[var(--color-primary)]"
                        />
                      </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
                      <div>
                        <label htmlFor="contact-company" style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--color-text-primary)", marginBottom: "0.5rem" }}>
                          Company <span style={{ textTransform: "none", letterSpacing: "normal", fontWeight: 400, color: "var(--color-text-muted)" }}>(optional)</span>
                        </label>
                        <input
                          id="contact-company"
                          type="text"
                          placeholder="Your organization"
                          style={{
                            width: "100%",
                            border: "1px solid var(--color-border)",
                            backgroundColor: "var(--color-bg)",
                            padding: "0.8rem 1rem",
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.82rem",
                            color: "var(--color-text-primary)",
                            outline: "none",
                            transition: "border-color 0.2s"
                          }}
                          className="focus:border-[var(--color-primary)]"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-phone" style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--color-text-primary)", marginBottom: "0.5rem" }}>
                          Phone Number <span style={{ textTransform: "none", letterSpacing: "normal", fontWeight: 400, color: "var(--color-text-muted)" }}>(optional)</span>
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          placeholder="+91"
                          style={{
                            width: "100%",
                            border: "1px solid var(--color-border)",
                            backgroundColor: "var(--color-bg)",
                            padding: "0.8rem 1rem",
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.82rem",
                            color: "var(--color-text-primary)",
                            outline: "none",
                            transition: "border-color 0.2s"
                          }}
                          className="focus:border-[var(--color-primary)]"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-practice" style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--color-text-primary)", marginBottom: "0.5rem" }}>
                        Practice Area of Interest *
                      </label>
                      <select
                        id="contact-practice"
                        required
                        style={{
                          width: "100%",
                          border: "1px solid var(--color-border)",
                          backgroundColor: "var(--color-bg)",
                          padding: "0.8rem 1rem",
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.82rem",
                          color: "var(--color-text-primary)",
                          outline: "none",
                          cursor: "pointer"
                        }}
                      >
                        <option value="">Select a practice area</option>
                        {practiceInterests.map((p) => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-message" style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--color-text-primary)", marginBottom: "0.5rem" }}>
                        Brief Overview of Matter *
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={5}
                        placeholder="Briefly describe your legal needs or transaction. All details shared are kept strictly confidential."
                        style={{
                          width: "100%",
                          border: "1px solid var(--color-border)",
                          backgroundColor: "var(--color-bg)",
                          padding: "0.8rem 1rem",
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.82rem",
                          color: "var(--color-text-primary)",
                          outline: "none",
                          transition: "border-color 0.2s",
                          resize: "vertical"
                        }}
                        className="focus:border-[var(--color-primary)]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      style={{
                        width: "100%",
                        padding: "1.1rem",
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.2em",
                        color: "#fff",
                        backgroundColor: "var(--color-primary)",
                        border: "none",
                        cursor: "pointer",
                        transition: "background-color 0.2s"
                      }}
                      className="hover:bg-[var(--color-primary-hover)]"
                    >
                      {loading ? "Transmitting..." : "Submit Consultation Request"}
                    </button>
                  </form>
                )}
              </RevealSection>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
