import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RevealSection from "@/components/ui/RevealSection";

export const metadata: Metadata = {
  title: "Insights & News — Thought Leadership | De Novo",
  description:
    "Legal insights, analysis and news from De Novo Law Firm — expert perspectives on India's evolving corporate legal landscape.",
};

const articles = [
  {
    id: "1",
    category: "Corporate Law",
    title: "The New Landscape of Cross-Border M&A in India: What Acquirers Need to Know",
    excerpt: "India's regulatory environment for foreign acquisitions has shifted significantly in the past 24 months. We analyze the key changes and their strategic implications for international acquirers.",
    date: "November 28, 2024",
    readTime: "8 min read",
    image: "/images/practice-corporate.png",
    featured: true,
    href: "/insights/cross-border-ma-india",
  },
  {
    id: "2",
    category: "Start-up Law",
    title: "ESOP Structuring for Indian Startups: A Founder's Guide to Getting It Right",
    excerpt: "Employee stock option plans are among the most consequential early decisions a startup makes. We break down the key structural choices and their long-term implications.",
    date: "October 15, 2024",
    readTime: "6 min read",
    image: "/images/team-boardroom.png",
    featured: false,
    href: "/insights/esop-structuring",
  },
  {
    id: "3",
    category: "Intellectual Property",
    title: "Protecting Software Patents in India: The Evolving Jurisprudence",
    excerpt: "Indian courts have been refining the boundaries of software patent protection. Our IP team analyzes recent decisions and what they mean for technology companies.",
    date: "September 30, 2024",
    readTime: "7 min read",
    image: "/images/practice-ip.png",
    featured: false,
    href: "/insights/software-patents-india",
  },
  {
    id: "4",
    category: "Real Estate",
    title: "RERA After Seven Years: The Transformation of India's Real Estate Legal Framework",
    excerpt: "Seven years since RERA's introduction, we assess how the regulatory landscape has reshaped developer obligations, buyer rights, and dispute resolution in Indian real estate.",
    date: "August 22, 2024",
    readTime: "9 min read",
    image: "/images/philosophy-books.png",
    featured: false,
    href: "/insights/rera-seven-years",
  },
  {
    id: "5",
    category: "Corporate Law",
    title: "Director Liability in India: Recent Developments Every Board Member Must Understand",
    excerpt: "Recent enforcement actions have clarified — and in some cases expanded — the personal liability of directors. We examine what has changed and how boards should respond.",
    date: "July 10, 2024",
    readTime: "5 min read",
    image: "/images/practice-corporate.png",
    featured: false,
    href: "/insights/director-liability",
  },
  {
    id: "6",
    category: "Litigation",
    title: "Commercial Courts: Five Years of India's Arbitration Revolution",
    excerpt: "India's Commercial Courts Act promised faster dispute resolution for business. We assess the outcomes five years on and what remains to be achieved.",
    date: "June 5, 2024",
    readTime: "6 min read",
    image: "/images/hero-interior.png",
    featured: false,
    href: "/insights/commercial-courts",
  },
];

export default function InsightsPage() {
  const featured = articles.find((a) => a.featured)!;
  const rest = articles.filter((a) => !a.featured);

  return (
    <div style={{ backgroundColor: "var(--color-bg)", minHeight: "100vh" }}>
      
      {/* ── HERO SECTION ── */}
      <section style={{ position: "relative", paddingTop: "11rem", paddingBottom: "5rem", overflow: "hidden" }}>
        <div className="site-container" style={{ position: "relative", zIndex: 2 }}>
          <RevealSection>
            <p className="label-tag" style={{ marginBottom: "1.8rem" }}>Thought Leadership</p>
            <h1 className="font-serif" style={{ fontSize: "clamp(2.8rem, 6vw, 4.8rem)", color: "var(--color-text-primary)", lineHeight: 1.1, marginBottom: "2rem", fontWeight: 400 }}>
              Insights & <em className="font-serif" style={{ fontStyle: "italic", color: "var(--color-primary)", fontWeight: 400 }}>News</em>
            </h1>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", color: "var(--color-text-secondary)", maxWidth: "640px", lineHeight: 1.8 }}>
              Critical regulatory analysis, transactional breakdowns, and judicial reviews from De Novo&apos;s principal partners.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ── FEATURED ARTICLE BLOCK ── */}
      <section style={{ padding: "3rem 0", backgroundColor: "#fff" }}>
        <div className="site-container">
          <RevealSection>
            <Link
              href={featured.href}
              id={`featured-article-${featured.id}`}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                backgroundColor: "var(--color-bg)",
                border: "1px solid var(--color-border)",
                textDecoration: "none",
                transition: "all 0.3s ease"
              }}
              className="lg:grid-cols-2 group hover:shadow-lg"
            >
              {/* Featured Image */}
              <div style={{ position: "relative", height: "340px", overflow: "hidden" }} className="lg:h-full">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: "cover", display: "block" }}
                />
                <div style={{ 
                  position: "absolute", 
                  top: "1.5rem", 
                  left: "1.5rem", 
                  backgroundColor: "var(--color-primary)", 
                  color: "#fff",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.58rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  padding: "0.4rem 0.8rem",
                  lineHeight: 1
                }}>
                  Featured
                </div>
              </div>

              {/* Featured Content */}
              <div style={{ padding: "3rem 2.5rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <span style={{ 
                  fontFamily: "var(--font-sans)", 
                  fontSize: "0.62rem", 
                  fontWeight: 700, 
                  letterSpacing: "0.15em", 
                  textTransform: "uppercase", 
                  color: "var(--color-primary)",
                  marginBottom: "1rem" 
                }}>
                  {featured.category}
                </span>
                <h2 className="font-serif group-hover:text-[var(--color-primary)]" style={{ fontSize: "1.8rem", color: "var(--color-text-primary)", marginBottom: "1.2rem", lineHeight: 1.25, fontWeight: 400, transition: "color 0.2s" }}>
                  {featured.title}
                </h2>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: "2rem" }}>
                  {featured.excerpt}
                </p>
                <div style={{ display: "flex", gap: "1.5rem", fontFamily: "var(--font-sans)", fontSize: "0.72rem", color: "var(--color-text-muted)" }}>
                  <span>{featured.date}</span>
                  <span>•</span>
                  <span>{featured.readTime}</span>
                </div>
              </div>
            </Link>
          </RevealSection>
        </div>
      </section>

      {/* ── ARTICLES GRID (GAP-PX STRUCTURE) ── */}
      <section style={{ padding: "5rem 0 8rem 0", backgroundColor: "var(--color-bg)" }}>
        <div className="site-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1px", backgroundColor: "var(--color-border)" }}>
            {rest.map((article, i) => (
              <RevealSection key={article.id} delay={0.07 * i}>
                <Link
                  href={article.href}
                  id={`article-${article.id}`}
                  style={{
                    backgroundColor: "#fff",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    textDecoration: "none",
                    transition: "all 0.3s ease"
                  }}
                  className="group hover:shadow-md"
                >
                  {/* Card Image */}
                  <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: "cover", display: "block" }}
                    />
                    <div style={{ 
                      position: "absolute", 
                      top: "1rem", 
                      left: "1rem", 
                      backgroundColor: "rgba(255,255,255,0.92)", 
                      color: "var(--color-text-primary)",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.55rem",
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      padding: "0.3rem 0.6rem",
                      lineHeight: 1
                    }}>
                      {article.category}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div style={{ padding: "2rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                    <h3 className="font-serif group-hover:text-[var(--color-primary)]" style={{ fontSize: "1.2rem", color: "var(--color-text-primary)", marginBottom: "0.8rem", lineHeight: 1.35, fontWeight: 400, transition: "color 0.2s" }}>
                      {article.title}
                    </h3>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem", color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "1.8rem" }}>
                      {article.excerpt}
                    </p>
                    <div style={{ display: "flex", gap: "1rem", fontFamily: "var(--font-sans)", fontSize: "0.68rem", color: "var(--color-text-muted)", marginTop: "auto" }}>
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </Link>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
