import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RevealSection from "@/components/ui/RevealSection";

export const metadata: Metadata = {
  title: "About Us — Our Heritage & Values | De Novo",
  description:
    "Discover the story, mission, values and philosophy behind De Novo Law Firm — India's premier corporate legal practice built on precision, integrity and excellence.",
};


const IconShield = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const IconTarget = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
);
const IconLock = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);
const IconAward = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
  </svg>
);

const ArrowRight = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

const values = [
  {
    title: "Integrity",
    description: "Every commitment is serviced with the highest standards of integrity and honesty, grounded in strong ethical and moral principles.",
    Icon: IconShield,
  },
  {
    title: "Precision",
    description: "We approach every matter with surgical attention to detail — because in law, the difference between words is the difference between outcomes.",
    Icon: IconTarget,
  },
  {
    title: "Confidentiality",
    description: "We are committed to protecting your information with the highest standards of privacy, confidentiality and security at every stage.",
    Icon: IconLock,
  },
  {
    title: "Excellence",
    description: "We do not settle for adequate. Every brief, every filing, every strategy is a commitment to delivering beyond what clients expect.",
    Icon: IconAward,
  },
];

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "var(--color-bg)", minHeight: "100vh" }}>
      {/* ── HERO SECTION ── */}
      <section style={{ position: "relative", paddingTop: "11rem", paddingBottom: "6rem", overflow: "hidden" }}>
        <div className="site-container" style={{ position: "relative", zIndex: 2 }}>
          <RevealSection>
            <p className="label-tag" style={{ marginBottom: "1.8rem" }}>Our Heritage</p>
            <h1 className="font-serif" style={{ fontSize: "clamp(2.8rem, 6vw, 4.8rem)", color: "var(--color-text-primary)", lineHeight: 1.1, marginBottom: "2rem", fontWeight: 400 }}>
              About <em className="font-serif" style={{ fontStyle: "italic", color: "var(--color-primary)", fontWeight: 400 }}>De Novo</em>
            </h1>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", color: "var(--color-text-secondary)", maxWidth: "640px", lineHeight: 1.8 }}>
              For over three decades, De Novo has served as the strategic legal architect of choice for India&apos;s most ambitious enterprises, founders, and institutions.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section style={{ padding: "5rem 0", backgroundColor: "#fff" }}>
        <div className="site-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2.5rem" }}>
            <RevealSection direction="left">
              <div style={{ padding: "3rem 2.5rem", backgroundColor: "var(--color-bg-offwhite)", borderLeft: "3px solid var(--color-primary)", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <h2 className="font-serif" style={{ fontSize: "1.8rem", color: "var(--color-text-primary)", marginBottom: "1.2rem", fontWeight: 400 }}>
                  Our Mission
                </h2>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "var(--color-text-secondary)", lineHeight: 1.75 }}>
                  At De Novo, we deliver premium-grade legal services to clients across India, bringing maximum structural value to their business. We satisfy and exceed client expectations by fully diagnosing their unique needs and building customized frameworks that resolve complex realities.
                </p>
              </div>
            </RevealSection>

            <RevealSection direction="right" delay={0.15}>
              <div style={{ padding: "3rem 2.5rem", backgroundColor: "var(--color-primary)", color: "#fff", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <h2 className="font-serif" style={{ fontSize: "1.8rem", color: "#fff", marginBottom: "1.2rem", fontWeight: 400 }}>
                  Our Vision
                </h2>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.75 }}>
                  To stand as the definitive architecture of corporate legal excellence — constructing frameworks that outlast immediate transactions, empower generational entrepreneurship, and set the benchmark of precision in Indian business jurisprudence.
                </p>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ── VALUES SECTION (GAP-PX GRID) ── */}
      <section style={{ padding: "6rem 0", backgroundColor: "var(--color-bg)" }}>
        <div className="site-container">
          <RevealSection className="text-center" style={{ marginBottom: "4rem" }}>
            <p className="label-tag" style={{ justifyContent: "center", marginBottom: "1.5rem" }}>Our Values</p>
            <h2 className="font-serif" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "var(--color-text-primary)", fontWeight: 400 }}>
              Pillars of <em className="font-serif" style={{ fontStyle: "italic", color: "var(--color-primary)", fontWeight: 400 }}>Our Practice</em>
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


      {/* ── TEAM CULTURE ── */}
      <section style={{ padding: "6rem 0", backgroundColor: "var(--color-bg)" }}>
        <div className="site-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <RevealSection direction="left">
              <div style={{ position: "relative" }}>
                <Image
                  src="/images/team-boardroom.png"
                  alt="De Novo Law Firm team in a strategy session"
                  width={700}
                  height={500}
                  style={{ width: "100%", height: "380px", objectFit: "cover", display: "block" }}
                />
                <div style={{ position: "absolute", bottom: "-15px", right: "-15px", width: "100%", height: "100%", border: "1px solid var(--color-primary)", zIndex: -1 }} />
              </div>
            </RevealSection>

            <RevealSection delay={0.2} direction="right">
              <div>
                <p className="label-tag" style={{ marginBottom: "1.5rem" }}>Culture & People</p>
                <h2 className="font-serif" style={{ fontSize: "clamp(2rem, 3.5vw, 2.5rem)", color: "var(--color-text-primary)", lineHeight: 1.2, marginBottom: "1.5rem", fontWeight: 400 }}>
                  A Team Built for <em className="font-serif" style={{ fontStyle: "italic", color: "var(--color-primary)", fontWeight: 400 }}>Complexity</em>
                </h2>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "var(--color-text-secondary)", lineHeight: 1.75, marginBottom: "1.2rem" }}>
                  Our attorneys are not merely legal practitioners — they are strategists, problem-solvers, and architects of client outcomes. Every member of the De Novo team is selected for intellectual rigor and collaborative capability.
                </p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "var(--color-text-secondary)", lineHeight: 1.75, marginBottom: "2.5rem" }}>
                  We invest continuously in our talent, ensuring our attorneys remain at the absolute cutting edge of regulatory shifts, legal scholarship, and industry best practices.
                </p>
                <Link href="/attorneys" className="btn btn-primary">
                  Meet Our Attorneys <ArrowRight />
                </Link>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>
    </div>
  );
}
