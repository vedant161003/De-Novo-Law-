import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import RevealSection from "@/components/ui/RevealSection";

type PracticeArea = {
  title: string;
  tagline: string;
  heroDesc: string;
  image: string;
  capabilities: string[];
  approach: string;
  relatedAttorneys: string[];
};

const areas: Record<string, PracticeArea> = {
  corporate: {
    title: "Corporate M&A",
    tagline: "Precision-driven structural engineering for high-stakes acquisitions.",
    heroDesc: "Comprehensive advisory for the full lifecycle of corporate transactions — from preliminary structuring through regulatory clearance and integration.",
    image: "/images/practice-corporate.png",
    capabilities: [
      "Domestic and cross-border M&A advisory",
      "Joint ventures and strategic alliances",
      "Corporate restructuring and demergers",
      "Due diligence and transaction management",
      "Post-merger integration counsel",
      "Regulatory approvals and filings",
      "Shareholder and board advisory",
    ],
    approach: "We approach each corporate transaction as architects approach a complex structure — with rigorous attention to every supporting element, from regulatory frameworks to stakeholder dynamics. Our team combines deep legal knowledge with commercial acumen to deliver transactions that don't just close, but endure.",
    relatedAttorneys: ["harsit-v-raj"],
  },
  transactions: {
    title: "Transactions",
    tagline: "Architectural integrity in complex financial and commercial dealings.",
    heroDesc: "End-to-end counsel for the full spectrum of commercial and financial transactions — structured with precision, executed with certainty.",
    image: "/images/hero-interior.png",
    capabilities: [
      "Private equity and venture capital",
      "Debt financing and structured finance",
      "Project finance and infrastructure deals",
      "Commercial contracts and master service agreements",
      "Regulatory compliance advisory",
      "Cross-border transaction structuring",
    ],
    approach: "Our Transactions practice is built on a fundamental belief: structure determines outcome. We invest deeply in understanding the commercial objectives of each deal before engineering the legal architecture that best serves those objectives.",
    relatedAttorneys: ["harsit-v-raj"],
  },
  startup: {
    title: "Start-up Practice",
    tagline: "The legal architecture behind India's most ambitious ventures.",
    heroDesc: "Purpose-built legal counsel for founders — combining strategic sophistication with the operational urgency that start-ups demand.",
    image: "/images/team-boardroom.png",
    capabilities: [
      "Incorporation and equity architecture",
      "Co-founder agreements and vesting schedules",
      "Term sheet review and negotiation",
      "Series A through C fundraising support",
      "Employee Stock Option Plans (ESOPs)",
      "Regulatory compliance for tech startups",
      "Cross-border entity structuring",
    ],
    approach: "Having advised over 200 startups, we understand that early-stage legal counsel must be both rigorous and rapid. We deploy frameworks developed from hundreds of early-stage deals to deliver advice that protects your future without slowing your momentum.",
    relatedAttorneys: ["harsit-v-raj", "abhimanyu-devaiah"],
  },
  "intellectual-property": {
    title: "Intellectual Property",
    tagline: "Your innovations, fortified with uncompromising legal precision.",
    heroDesc: "Full-spectrum IP counsel — from prosecution and registration through enforcement, licensing and portfolio management.",
    image: "/images/practice-ip.png",
    capabilities: [
      "Patent prosecution and strategy",
      "Patent litigation and enforcement",
      "Trademark registration and portfolio management",
      "Copyright strategy and licensing",
      "Trade secrets and confidentiality frameworks",
      "IP due diligence in M&A and investments",
      "Domain name disputes",
    ],
    approach: "Intellectual property is not merely a legal matter — it is your most durable competitive advantage. We approach IP strategy the way engineers approach infrastructure: with long-term structural integrity as the primary objective.",
    relatedAttorneys: ["abhimanyu-devaiah"],
  },
  "real-estate": {
    title: "Real Estate",
    tagline: "Strategic legal frameworks for India's premium property market.",
    heroDesc: "Comprehensive real estate legal counsel for developers, investors, REITs and corporates navigating India's complex property landscape.",
    image: "/images/philosophy-books.png",
    capabilities: [
      "Commercial and residential property transactions",
      "Development and construction agreements",
      "REIT structuring and regulatory compliance",
      "Joint development agreements",
      "Title due diligence and clearance",
      "Real estate financing",
      "Dispute resolution and litigation",
    ],
    approach: "Real estate transactions are among the most legally complex matters an enterprise faces. Our team combines decades of transactional experience with deep knowledge of India's evolving property regulations to deliver counsel that protects every dimension of your investment.",
    relatedAttorneys: ["abhimanyu-devaiah"],
  },
  litigation: {
    title: "Litigation",
    tagline: "Rigorous advocacy architected for the most complex disputes.",
    heroDesc: "Strategic litigation counsel combining meticulous preparation with the bold clarity that winning arguments demand.",
    image: "/images/hero-interior.png",
    capabilities: [
      "Commercial dispute resolution",
      "Intellectual property litigation",
      "Employment and labor disputes",
      "Domestic and international arbitration",
      "Regulatory investigation defense",
      "Insolvency and bankruptcy proceedings",
      "Consumer protection litigation",
    ],
    approach: "Litigation is not just argument — it is the systematic dismantling of uncertainty. We approach every dispute with the same architectural precision we bring to transactions: first mastering the structural elements, then constructing the most compelling case from those foundations.",
    relatedAttorneys: ["abhimanyu-devaiah"],
  },
};

export async function generateStaticParams() {
  return Object.keys(areas).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = areas[slug];
  if (!area) return {};
  return {
    title: `${area.title} — Practice Area | De Novo`,
    description: area.heroDesc,
  };
}

const attorneyNames: Record<string, string> = {
  "harsit-v-raj": "Harsit V Raj",
  "abhimanyu-devaiah": "Abhimanyu Devaiah",
};

const getIcon = (slug: string) => {
  const props = { width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch(slug) {
    case "corporate":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="18" height="18" rx="1"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>
        </svg>
      );
    case "transactions":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9"/><path d="M12 3a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><line x1="3" y1="12" x2="21" y2="12"/>
        </svg>
      );
    case "startup":
      return (
        <svg {...props}>
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
        </svg>
      );
    case "intellectual-property":
      return (
        <svg {...props}>
          <path d="M9 21h6M12 3a6 6 0 0 1 6 6c0 2.4-1.3 4.5-3.3 5.7L14 17H10l-.7-2.3C7.3 13.5 6 11.4 6 9a6 6 0 0 1 6-6z"/>
        </svg>
      );
    case "real-estate":
      return (
        <svg {...props}>
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      );
    case "litigation":
      return (
        <svg {...props}>
          <line x1="12" y1="3" x2="12" y2="21"/><path d="M3 7l9-4 9 4"/><path d="M5 7l7 13 7-13"/>
        </svg>
      );
    default:
      return null;
  }
};

const getSmallIcon = (slug: string) => {
  const props = { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch(slug) {
    case "corporate":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="18" height="18" rx="1"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>
        </svg>
      );
    case "transactions":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9"/><path d="M12 3a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><line x1="3" y1="12" x2="21" y2="12"/>
        </svg>
      );
    case "startup":
      return (
        <svg {...props}>
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
        </svg>
      );
    case "intellectual-property":
      return (
        <svg {...props}>
          <path d="M9 21h6M12 3a6 6 0 0 1 6 6c0 2.4-1.3 4.5-3.3 5.7L14 17H10l-.7-2.3C7.3 13.5 6 11.4 6 9a6 6 0 0 1 6-6z"/>
        </svg>
      );
    case "real-estate":
      return (
        <svg {...props}>
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      );
    case "litigation":
      return (
        <svg {...props}>
          <line x1="12" y1="3" x2="12" y2="21"/><path d="M3 7l9-4 9 4"/><path d="M5 7l7 13 7-13"/>
        </svg>
      );
    default:
      return null;
  }
};

export default async function PracticeAreaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = areas[slug];
  if (!area) notFound();

  return (
    <div style={{ backgroundColor: "var(--color-bg)", minHeight: "100vh" }}>
      
      {/* ── BANNER HERO SECTION ── */}
      <section style={{ position: "relative", paddingTop: "6rem", overflow: "hidden" }}>
        <div style={{ position: "relative", height: "420px", width: "100%" }}>
          <Image
            src={area.image}
            alt={area.title}
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            priority
          />
          {/* Overlay gradient */}
          <div style={{ 
            position: "absolute", 
            inset: 0, 
            background: "linear-gradient(to top, rgba(17,17,16,0.92) 0%, rgba(17,17,16,0.5) 60%, rgba(17,17,16,0.15) 100%)" 
          }} />

          {/* Title and metadata block */}
          <div style={{ position: "absolute", bottom: "3.5rem", left: 0, right: 0 }}>
            <div className="site-container">
              <div style={{ maxWidth: "680px", color: "#fff" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1.2rem" }}>
                  <span style={{ color: "rgba(255,179,172,0.95)", display: "flex", alignItems: "center" }}>
                    {getIcon(slug)}
                  </span>
                  <span style={{ 
                    fontFamily: "var(--font-sans)", 
                    fontSize: "0.62rem", 
                    fontWeight: 700, 
                    letterSpacing: "0.25em", 
                    textTransform: "uppercase", 
                    color: "rgba(255,255,255,0.7)" 
                  }}>
                    Practice Area
                  </span>
                </div>
                
                <h1 className="font-serif" style={{ fontSize: "clamp(2.5rem, 5vw, 3.8rem)", color: "#fff", lineHeight: 1.15, marginBottom: "1rem", fontWeight: 400 }}>
                  {area.title}
                </h1>
                
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
                  {area.heroDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DUAL COLUMN DETAILS SECTION ── */}
      <section style={{ padding: "5rem 0", backgroundColor: "#fff" }}>
        <div className="site-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4.5rem" }} className="lg:grid-cols-3">
            
            {/* Left Column: Approach and Capabilities */}
            <div className="lg:col-span-2">
              <RevealSection>
                <h2 className="font-serif" style={{ fontSize: "1.8rem", color: "var(--color-text-primary)", marginBottom: "1.2rem", fontWeight: 400 }}>
                  Our Approach
                </h2>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", color: "var(--color-text-secondary)", lineHeight: 1.8, marginBottom: "3.5rem" }}>
                  {area.approach}
                </p>

                <h3 className="font-serif" style={{ fontSize: "1.5rem", color: "var(--color-text-primary)", marginBottom: "1.8rem", fontWeight: 400 }}>
                  Core Capabilities
                </h3>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
                  {area.capabilities.map((cap) => (
                    <div
                      key={cap}
                      style={{
                        padding: "1.5rem",
                        backgroundColor: "var(--color-bg)",
                        border: "1px solid var(--color-border)",
                        display: "flex",
                        gap: "0.8rem",
                        alignItems: "flex-start"
                      }}
                    >
                      <span style={{ 
                        width: "5px", 
                        height: "5px", 
                        borderRadius: "50%", 
                        backgroundColor: "var(--color-primary)", 
                        marginTop: "0.45rem",
                        flexShrink: 0 
                      }} aria-hidden="true" />
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "var(--color-text-secondary)", lineHeight: 1.5 }}>
                        {cap}
                      </span>
                    </div>
                  ))}
                </div>
              </RevealSection>
            </div>

            {/* Right Column: Lead Partners and sidebar CTA */}
            <div>
              <RevealSection delay={0.2} direction="right">
                <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                  
                  {/* Lead Attorneys */}
                  <div style={{ padding: "2.2rem 2rem", backgroundColor: "var(--color-bg-offwhite)", border: "1px solid var(--color-border)" }}>
                    <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--color-primary)", marginBottom: "1.8rem" }}>
                      Lead Attorneys
                    </h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                      {area.relatedAttorneys.map((attorneySlug) => (
                        <Link
                          key={attorneySlug}
                          href={`/attorneys/${attorneySlug}`}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem",
                            textDecoration: "none",
                            color: "inherit"
                          }}
                          className="group"
                        >
                          <div style={{ 
                            width: "42px", 
                            height: "42px", 
                            borderRadius: "50%", 
                            backgroundColor: "var(--color-primary)", 
                            color: "#fff",
                            fontFamily: "var(--font-serif)",
                            fontWeight: 700,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "1rem"
                          }}>
                            {attorneyNames[attorneySlug]?.charAt(0)}
                          </div>
                          <span 
                            style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "var(--color-text-primary)", fontWeight: 600, transition: "color 0.2s" }}
                            className="group-hover:text-[var(--color-primary)]"
                          >
                            {attorneyNames[attorneySlug]}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Sidebar Contact Card */}
                  <div style={{ padding: "2.2rem 2rem", backgroundColor: "var(--color-primary)", color: "#fff" }}>
                    <h3 className="font-serif" style={{ fontSize: "1.4rem", color: "#fff", marginBottom: "0.8rem", fontWeight: 400 }}>
                      Need {area.title} Advisory?
                    </h3>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, marginBottom: "2rem" }}>
                      Schedule a preliminary strategic consultation meeting with our practice specialists.
                    </p>
                    <Link
                      href="/contact"
                      style={{
                        display: "block",
                        textAlign: "center",
                        padding: "0.9rem",
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.62rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                        backgroundColor: "#fff",
                        color: "var(--color-primary)",
                        textDecoration: "none",
                        transition: "background-color 0.2s"
                      }}
                      className="hover:bg-[var(--color-bg-offwhite)]"
                    >
                      Book Consultation
                    </Link>
                  </div>

                </div>
              </RevealSection>
            </div>

          </div>
        </div>
      </section>

      {/* ── OTHER PRACTICE AREAS SHOWCASE ── */}
      <section style={{ padding: "5rem 0 7rem 0", backgroundColor: "var(--color-bg)" }}>
        <div className="site-container">
          <h2 className="font-serif" style={{ fontSize: "1.6rem", color: "var(--color-text-primary)", marginBottom: "2.5rem", fontWeight: 400 }}>
            Other Practice Areas
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "1rem" }}>
            {Object.entries(areas)
              .filter(([key]) => key !== slug)
              .map(([key, a]) => (
                <Link
                  key={key}
                  href={`/practice-areas/${key}`}
                  style={{
                    padding: "1.8rem 1rem",
                    backgroundColor: "#fff",
                    border: "1px solid var(--color-border)",
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    transition: "all 0.25s ease"
                  }}
                  className="group hover:bg-[var(--color-primary)] hover:text-white"
                >
                  <span style={{ color: "var(--color-primary)", marginBottom: "0.8rem", display: "block" }} className="group-hover:text-white">
                    {getSmallIcon(key)}
                  </span>
                  <span 
                    style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", color: "var(--color-text-secondary)", fontWeight: 700 }}
                    className="group-hover:text-white"
                  >
                    {a.title}
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>

    </div>
  );
}
