import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import RevealSection from "@/components/ui/RevealSection";

const attorneys: Record<string, {
  name: string;
  title: string;
  image: string;
  specializations: string[];
  education: string[];
  bio: string[];
  achievements: string[];
  contactHref: string;
}> = {
  "harsit-v-raj": {
    name: "Harsit V. Raj",
    title: "Senior Managing Partner",
    image: "/images/harsit-portrait.png",
    specializations: ["Corporate Law", "Mergers & Acquisitions", "Private Equity", "Cross-Border Strategy", "Dispute Resolution"],
    education: [
      "Bachelor of Law (Hons.) — Hidayatullah National Law University, Raipur, 2016",
    ],
    bio: [
      "Harsit completed his Bachelor of Law (Hons.) at Hidayatullah National Law University, Raipur in 2016. During his tenure, he participated at the 12th National Youth Parliament held by Ministry of Parliamentary Affairs. Soon after he went on to publish a paper on, 'Freedom of speech viz-a-viz Right to Privacy' which was presided by accomplished Senior Advocate, Fali S. Nariman at Bar Council of India.",
      "Prior to co-founding De Novo, Harsit handled complex domestic and cross-border corporate litigation matters. Personally administering first hand solutions to many intricate issues within different frameworks of various organizations.",
      "His areas of expertise are Corporate Advisory, Mergers and Acquisitions, Real Estate Investments, Laws of Insolvency and Dispute Resolution. Harsit has worked with a number of companies in different sectors of the industry including Fintech, IT, construction, education, automotive, infrastructure and tourism."
    ],
    achievements: [
      "Published research on 'Freedom of speech viz-a-viz Right to Privacy' with BCI",
      "Participant at the 12th National Youth Parliament, Ministry of Parliamentary Affairs",
      "Expert advisor across Fintech, IT, Construction, and Infrastructure sectors"
    ],
    contactHref: "/contact",
  },
  "abhimanyu-devaiah": {
    name: "Abhimanyu Devaiah",
    title: "Founding Partner",
    image: "/images/abhimanyu-portrait.png",
    specializations: ["Litigation", "Criminal Law", "Real Estate", "Civil Disputes", "ADR / Mediation"],
    education: [
      "LL.B. — Karnataka State Law University, Bangalore, 2017",
    ],
    bio: [
      "Abhimanyu completed his Bachelor of Laws at Karnataka State Law University, Bangalore in 2017. At law school, he participated in two rigorous internship programs with the Advocate General's Office at High Court, Karnataka and The Woman and Child Cell (National Law School of Indian University).",
      "Before co-founding De Novo, Abhimanyu represented Lawyers Transcontinental where he single handedly oversaw litigation proceedings related to Criminal, Family, Real Estate, Civil Disputes and White Collar Crime. He presented arguments in High Court, District Court and various other Tribunals, initiating and defending on behalf of the firm.",
      "Abhimanyu's vast experience in legal research gives him an edge into developing unique 'early stage' litigation strategies as well as decisively solving commercial matters in Alternate Dispute Resolution, Arbitration and Mediation."
    ],
    achievements: [
      "Double internship at Advocate General's Office & Woman & Child Cell (NLSIU)",
      "Lead counsel at Lawyers Transcontinental representing Criminal and Civil matters",
      "Arbitrator & Mediator for high-value commercial disputes"
    ],
    contactHref: "/contact",
  },
};

export async function generateStaticParams() {
  return Object.keys(attorneys).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const attorney = attorneys[slug];
  if (!attorney) return {};
  return {
    title: `${attorney.name} — ${attorney.title} | De Novo`,
    description: attorney.bio[0],
  };
}

export default async function AttorneyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const attorney = attorneys[slug];
  if (!attorney) notFound();

  return (
    <div style={{ backgroundColor: "var(--color-bg)", minHeight: "100vh" }}>
      {/* ── PROFILE HEADER SECTION ── */}
      <section style={{ paddingTop: "11rem", paddingBottom: "3rem", overflow: "hidden", borderBottom: "1px solid var(--color-border)" }}>
        <div className="site-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "4rem", alignItems: "end" }}>
            
            {/* Portrait Column */}
            <RevealSection direction="left">
              <div style={{ position: "relative", maxWidth: "420px" }}>
                <Image
                  src={attorney.image}
                  alt={`${attorney.name} — ${attorney.title}`}
                  width={500}
                  height={620}
                  style={{ width: "100%", height: "auto", maxHeight: "500px", objectFit: "cover", objectPosition: "top", display: "block" }}
                  priority
                />
                <div style={{ position: "absolute", bottom: "-12px", right: "-12px", width: "100%", height: "100%", border: "1px solid var(--color-primary)", zIndex: -1 }} />
              </div>
            </RevealSection>

            {/* Profile Brief Column */}
            <RevealSection direction="right" delay={0.15}>
              <div style={{ paddingBottom: "1rem" }}>
                <p className="label-tag" style={{ marginBottom: "1.5rem" }}>Attorney Profile</p>
                <h1 className="font-serif" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--color-text-primary)", lineHeight: 1.1, marginBottom: "0.8rem", fontWeight: 400 }}>
                  {attorney.name}
                </h1>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "var(--color-primary)", fontWeight: 600, marginBottom: "2.2rem" }}>
                  {attorney.title}
                </p>

                {/* Specializations Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2.5rem" }}>
                  {attorney.specializations.map((s) => (
                    <span
                      key={s}
                      style={{
                        fontSize: "0.72rem",
                        fontFamily: "var(--font-sans)",
                        color: "var(--color-text-secondary)",
                        backgroundColor: "#fff",
                        padding: "0.4rem 0.8rem",
                        border: "1px solid var(--color-border)"
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <Link href={attorney.contactHref} className="btn btn-primary">
                  Request Consultation
                </Link>
              </div>
            </RevealSection>

          </div>
        </div>
      </section>

      {/* ── PROFILE DETAILS SECTION ── */}
      <section style={{ padding: "5rem 0 7rem 0", backgroundColor: "#fff" }}>
        <div className="site-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4rem" }} className="lg:grid-cols-3">
            
            {/* Biography Left Block */}
            <div className="lg:col-span-2">
              <RevealSection>
                <h2 className="font-serif" style={{ fontSize: "1.8rem", color: "var(--color-text-primary)", marginBottom: "1.8rem", fontWeight: 400 }}>
                  Biography
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  {attorney.bio.map((para, i) => (
                    <p key={i} style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "var(--color-text-secondary)", lineHeight: 1.8 }}>
                      {para}
                    </p>
                  ))}
                </div>
              </RevealSection>
            </div>

            {/* Credentials Sidebar Block */}
            <div>
              <RevealSection delay={0.2} direction="right">
                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                  
                  {/* Education List */}
                  <div style={{ padding: "2rem", backgroundColor: "var(--color-bg-offwhite)", border: "1px solid var(--color-border)" }}>
                    <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--color-primary)", marginBottom: "1.2rem" }}>
                      Education & Credentials
                    </h3>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                      {attorney.education.map((e) => (
                        <li key={e} style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem", color: "var(--color-text-secondary)", lineHeight: 1.6, borderLeft: "2px solid var(--color-primary)", paddingLeft: "1rem" }}>
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements List */}
                  <div style={{ padding: "2rem", backgroundColor: "var(--color-bg-offwhite)", border: "1px solid var(--color-border)" }}>
                    <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--color-primary)", marginBottom: "1.2rem" }}>
                      Advisory & Achievements
                    </h3>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
                      {attorney.achievements.map((a, idx) => (
                        <li key={idx} style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start" }}>
                          <span style={{ 
                            width: "5px", 
                            height: "5px", 
                            borderRadius: "50%", 
                            backgroundColor: "var(--color-primary)", 
                            marginTop: "0.45rem",
                            flexShrink: 0 
                          }} aria-hidden="true" />
                          <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem", color: "var(--color-text-secondary)", lineHeight: 1.5 }}>
                            {a}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </RevealSection>
            </div>

          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION FOOTER ── */}
      <section style={{ padding: "6rem 0", backgroundColor: "var(--color-primary)", color: "#fff", textAlign: "center" }}>
        <div className="site-container">
          <RevealSection>
            <h2 className="font-serif" style={{ fontSize: "clamp(2rem, 4.5vw, 2.8rem)", color: "#fff", marginBottom: "1.2rem", fontWeight: 400 }}>
              Retain <em className="font-serif" style={{ fontStyle: "italic", color: "rgba(255,179,172,0.95)", fontWeight: 400 }}>{attorney.name}</em>
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", color: "rgba(255,255,255,0.75)", maxWidth: "520px", margin: "0 auto 2.5rem auto", lineHeight: 1.85 }}>
              Book an advisory consultation meeting to evaluate your corporate, IP, or litigation matter with {attorney.name.split(" ")[0]}.
            </p>
            <Link href="/contact" className="btn btn-outline" style={{ padding: "1rem 2.5rem" }}>
              Book Consultation
            </Link>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}
