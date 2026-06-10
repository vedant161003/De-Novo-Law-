import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RevealSection from "@/components/ui/RevealSection";

export const metadata: Metadata = {
  title: "Our Attorneys — Principal Partners | De Novo",
  description:
    "Meet the principal attorneys at De Novo Law Firm — Harsit V Raj and Abhimanyu Devaiah — architects of India's most complex corporate legal landscapes.",
};

const attorneys = [
  {
    id: "harsit-v-raj",
    name: "Harsit V. Raj",
    title: "Senior Managing Partner",
    image: "/images/harsit-portrait.png",
    specializations: ["Corporate Advisory", "Mergers & Acquisitions", "Real Estate Investments", "Insolvency Laws", "Dispute Resolution"],
    education: "Bachelor of Law (Hons.), 2016 | Hidayatullah National Law University, Raipur",
    bio: "Harsit completed his Bachelor of Law (Hons.) at Hidayatullah National Law University, Raipur in 2016. During his tenure, he participated at the 12th National Youth Parliament held by Ministry of Parliamentary Affairs. Soon after he went on to publish a paper on, 'Freedom of speech viz-a-viz Right to Privacy' which was presided by accomplished Senior Advocate, Fali S. Nariman at Bar Council of India. Prior to co-founding De Novo, Harsit handled complex domestic and cross-border corporate litigation matters, personally administering first-hand solutions to many intricate issues within different organizational frameworks.",
    href: "/attorneys/harsit-v-raj",
  },
  {
    id: "abhimanyu-devaiah",
    name: "Abhimanyu Devaiah",
    title: "Founding Partner",
    image: "/images/abhimanyu-portrait.png",
    specializations: ["Litigation", "Criminal Law", "Real Estate", "Civil Disputes", "ADR / Mediation"],
    education: "LL.B., 2017 | Karnataka State Law University, Bangalore",
    bio: "Abhimanyu completed his Bachelor of Laws at Karnataka State Law University, Bangalore in 2017. At law school, he participated in two rigorous internship programs with the Advocate General's Office at High Court, Karnataka and The Woman and Child Cell (National Law School of Indian University). Prior to co-founding De Novo, Abhimanyu represented Lawyers Transcontinental where he single-handedly oversaw litigation proceedings related to Criminal, Family, Real Estate, Civil Disputes and White Collar Crime, presenting arguments in High Court, District Court and various other Tribunals.",
    href: "/attorneys/abhimanyu-devaiah",
  },
];

const ArrowRight = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

export default function AttorneysPage() {
  return (
    <div style={{ backgroundColor: "var(--color-bg)", minHeight: "100vh" }}>
      {/* ── HERO SECTION ── */}
      <section style={{ position: "relative", paddingTop: "11rem", paddingBottom: "6rem", overflow: "hidden" }}>
        <div className="site-container" style={{ position: "relative", zIndex: 2 }}>
          <RevealSection>
            <p className="label-tag" style={{ marginBottom: "1.8rem" }}>The Firm</p>
            <h1 className="font-serif" style={{ fontSize: "clamp(2.8rem, 6vw, 4.8rem)", color: "var(--color-text-primary)", lineHeight: 1.1, marginBottom: "2rem", fontWeight: 400 }}>
              Our <em className="font-serif" style={{ fontStyle: "italic", color: "var(--color-primary)", fontWeight: 400 }}>Attorneys</em>
            </h1>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", color: "var(--color-text-secondary)", maxWidth: "640px", lineHeight: 1.8 }}>
              Our principal partners are legal strategists who engineer commercial certainty. We approach the practice of law with surgical attention to structure, logic, and precision.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ── ATTORNEY LIST SECTION ── */}
      <section style={{ padding: "4rem 0 7rem 0", backgroundColor: "#fff" }}>
        <div className="site-container">
          <div style={{ display: "flex", flexDirection: "column", gap: "8rem" }}>
            {attorneys.map((attorney, i) => (
              <RevealSection key={attorney.id} delay={0.1}>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: "4.5rem",
                  alignItems: "center"
                }}>
                  {/* Image Column */}
                  <div style={{ position: "relative", order: i % 2 === 0 ? 1 : 2 }}>
                    <div style={{ position: "relative", overflow: "hidden" }} className="group">
                      <Image
                        src={attorney.image}
                        alt={`${attorney.name} — ${attorney.title} at De Novo Law Firm`}
                        width={500}
                        height={600}
                        style={{ width: "100%", height: "480px", objectFit: "cover", objectPosition: "top", display: "block" }}
                      />
                    </div>
                    {/* Floating border offset */}
                    <div style={{ 
                      position: "absolute", 
                      top: "15px", 
                      left: i % 2 === 0 ? "15px" : "-15px", 
                      width: "100%", 
                      height: "100%", 
                      border: "1px solid var(--color-primary)", 
                      zIndex: -1 
                    }} aria-hidden="true" />
                  </div>

                  {/* Details Column */}
                  <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
                    <p style={{ 
                      fontFamily: "var(--font-sans)", 
                      fontSize: "0.62rem", 
                      fontWeight: 700, 
                      letterSpacing: "0.25em", 
                      textTransform: "uppercase", 
                      color: "var(--color-primary)",
                      marginBottom: "0.8rem" 
                    }}>
                      {attorney.title}
                    </p>
                    <h2 className="font-serif" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "var(--color-text-primary)", marginBottom: "1.5rem", fontWeight: 400 }}>
                      {attorney.name}
                    </h2>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "var(--color-text-secondary)", lineHeight: 1.8, marginBottom: "2rem" }}>
                      {attorney.bio}
                    </p>

                    {/* Specializations */}
                    <div style={{ marginBottom: "1.8rem" }}>
                      <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--color-text-primary)", marginBottom: "0.8rem" }}>
                        Speciality Areas
                      </h3>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                        {attorney.specializations.map((s) => (
                          <span
                            key={s}
                            style={{
                              fontSize: "0.72rem",
                              fontFamily: "var(--font-sans)",
                              color: "var(--color-text-secondary)",
                              backgroundColor: "var(--color-bg-offwhite)",
                              padding: "0.4rem 0.8rem",
                              border: "1px solid var(--color-border)"
                            }}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Education */}
                    <div style={{ marginBottom: "2.5rem" }}>
                      <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--color-text-primary)", marginBottom: "0.4rem" }}>
                        Credentials
                      </h3>
                      <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "var(--color-text-secondary)" }}>
                        {attorney.education}
                      </p>
                    </div>

                    <Link href={attorney.href} className="btn btn-ghost-dark">
                      View Full Profile <ArrowRight />
                    </Link>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPEAK WITH AN EXPERT CTA BAND ── */}
      <section style={{ padding: "6rem 0", backgroundColor: "var(--color-bg-darker)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="site-container" style={{ textAlign: "center" }}>
          <RevealSection>
            <p className="label-tag label-tag--white" style={{ justifyContent: "center", marginBottom: "1.8rem" }}>Inquiry</p>
            <h2 className="font-serif" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#fff", lineHeight: 1.2, marginBottom: "1.2rem", fontWeight: 400 }}>
              Speak with a <em className="font-serif" style={{ fontStyle: "italic", color: "rgba(255,179,172,0.9)", fontWeight: 400 }}>Partner</em>
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.92rem", color: "rgba(255,255,255,0.65)", maxWidth: "520px", margin: "0 auto 2.8rem auto", lineHeight: 1.8 }}>
              Our attorneys are available for strictly confidential, strategic legal consultations. Contact De Novo to schedule your preliminary advisory meeting.
            </p>
            <Link href="/contact" className="btn btn-outline" style={{ padding: "1.1rem 2.5rem" }}>
              Schedule Consultation
            </Link>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}
