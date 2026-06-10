import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import RevealSection from "@/components/ui/RevealSection";

interface ArticleData {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  authorTitle: string;
  sections: {
    heading?: string;
    text: string;
    list?: string[];
  }[];
}

const articles: Record<string, ArticleData> = {
  "cross-border-ma-india": {
    category: "Corporate Law",
    title: "The New Landscape of Cross-Border M&A in India: What Acquirers Need to Know",
    excerpt: "India&apos;s regulatory environment for foreign acquisitions has shifted significantly in the past 24 months. We analyze the key changes and their strategic implications for international acquirers.",
    date: "November 28, 2024",
    readTime: "8 min read",
    image: "/images/practice-corporate.png",
    author: "Harsit V. Raj",
    authorTitle: "Senior Managing Partner",
    sections: [
      {
        text: "India&apos;s foreign direct investment (FDI) and cross-border mergers and acquisitions (M&amp;A) landscape has undergone significant regulatory evolution over the past 24 months. As India solidifies its position as a primary global growth engine, international acquirers must navigate a complex grid of foreign exchange regulations, antitrust thresholds, and corporate law procedures.",
      },
      {
        heading: "Navigating the FEMA Cross-Border Merger Regulations",
        text: "The Foreign Exchange Management (Cross Border Merger) Regulations play a critical role in structuring deals. Inbound mergers—where a foreign company merges into an Indian entity—enjoy relatively streamlined pathways under the &apos;Automatic Route&apos; of the RBI, provided they satisfy specific asset-liability and remittance conditions. However, outbound mergers—where an Indian company merges into a foreign entity—require prior, explicit approval from the Reserve Bank of India (RBI), which subjects the transaction to deep regulatory scrutiny regarding currency outflows and capital account balances.",
      },
      {
        heading: "The New Deal Value Threshold (DVT) in Indian Merger Control",
        text: "Under the Competition (Amendment) Act, 2023, the Competition Commission of India (CCI) introduced a Deal Value Threshold (DVT). Transactions valued above INR 2,000 Crore (approx. USD 240 million) require prior CCI approval if the target company has &apos;substantial business operations in India&apos;. This represents a major shift from asset- or turnover-based thresholds, capturing high-value digital and technology acquisitions that previously escaped antitrust review.",
      },
      {
        heading: "Corporate Approvals &amp; NCLT Timelines",
        text: "Cross-border mergers in India require approval from the National Company Law Tribunal (NCLT). The NCLT process involves coordinating with multiple statutory authorities, including the Registrar of Companies (RoC), Regional Director (RD), Official Liquidator, and Income Tax department. Acquirers should anticipate a timeline of 9 to 12 months for obtaining sanction, and structure transaction timelines, drop-dead dates, and interim funding arrangements accordingly.",
      },
      {
        heading: "Key Takeaways for Global Acquirers",
        text: "When architecting cross-border transactions involving Indian entities, acquirers must build a robust compliance checklist:",
        list: [
          "Conduct early regulatory feasibility studies focusing on FEMA compliance and RBI reporting.",
          "Assess deal valuations against the new DVT thresholds early in the diligence phase.",
          "Draft transaction documents with robust material adverse effect (MAE) clauses to account for NCLT approval timelines.",
          "Incorporate tax-efficient transfer pricing structures for intellectual property and post-merger integrations.",
        ],
      },
    ],
  },
  "esop-structuring": {
    category: "Start-up Law",
    title: "ESOP Structuring for Indian Startups: A Founder&apos;s Guide to Getting It Right",
    excerpt: "Employee stock option plans are among the most consequential early decisions a startup makes. We break down the key structural choices and their long-term implications.",
    date: "October 15, 2024",
    readTime: "6 min read",
    image: "/images/team-boardroom.png",
    author: "Abhimanyu Devaiah",
    authorTitle: "Founding Partner",
    sections: [
      {
        text: "Employee Stock Option Plans (ESOPs) are a startup&apos;s most potent instrument for attracting, retaining, and aligning high-caliber talent. However, poorly structured pools or short-sighted vesting mechanics can lead to severe capitalization table distortion, tax mismatches, and shareholder disputes.",
      },
      {
        heading: "Determining Pool Size and Equity Allocation",
        text: "In the early stages, founders typically allocate between 10% to 15% of the company&apos;s fully-diluted equity to the ESOP pool. This pool should be established prior to raising institutional Series A capital to prevent immediate founder dilution. Allocation should be structured systematically, mapping grants to key milestones, seniority tiers, and performance indicators rather than issuing large, ad-hoc blocks.",
      },
      {
        heading: "Structuring Vesting and Cliff Periods",
        text: "Under Indian law (Companies Act, 2013), a minimum vesting period of one year from the date of grant is mandatory. Founders should adopt a standard four-year vesting schedule with a 1-year cliff. Graded vesting can be structured monthly or quarterly thereafter. For key executives, incorporating performance-based vesting conditions—linked to product launches or revenue milestones—ensures close alignment with core company objectives.",
      },
      {
        heading: "Navigating the Dual Tax Events",
        text: "ESOPs in India trigger tax events at two distinct milestones: first, at the time of exercise (where the difference between the Fair Market Value and the exercise price is taxed as a perquisite under salary income), and second, at the time of sale (where gains are taxed under Capital Gains Tax rules). Founders must educate employees on these cash-flow implications and structure reasonable exercise windows (e.g. 5 to 10 years post-termination) to manage tax burdens.",
      },
      {
        heading: "Key Takeaways for Founders",
        text: "Founders looking to design a resilient and effective ESOP structure should adhere to these parameters:",
        list: [
          "Establish the ESOP pool before signing term sheets with new institutional investors.",
          "Enforce a mandatory 1-year cliff to protect equity against early departures.",
          "Provide transparent tax guides to employees to ensure they understand perquisite tax implications.",
          "Design exercise windows that allow former employees to realize value without cash-flow distress.",
        ],
      },
    ],
  },
  "software-patents-india": {
    category: "Intellectual Property",
    title: "Protecting Software Patents in India: The Evolving Jurisprudence",
    excerpt: "Indian courts have been refining the boundaries of software patent protection. Our IP team analyzes recent decisions and what they mean for technology companies.",
    date: "September 30, 2024",
    readTime: "7 min read",
    image: "/images/practice-ip.png",
    author: "Harsit V. Raj",
    authorTitle: "Senior Managing Partner",
    sections: [
      {
        text: "Navigating software patentability in India requires a deep understanding of Section 3(k) of the Patents Act, 1970. Historically, the Indian Patent Office (IPO) maintained a highly restrictive approach toward software innovations. However, recent judicial reviews are establishing a more balanced, technology-forward framework.",
      },
      {
        heading: "Deconstructing Section 3(k) &apos;Computer Programmes Per Se&apos;",
        text: "Section 3(k) explicitly excludes &apos;a mathematical or business method or a computer programme per se or algorithms&apos; from patentability. The key phrase &apos;per se&apos; has been the subject of extensive litigation. The legislative intent was not to bar software patents entirely, but to prevent the monopolization of abstract mathematical logic or code that lacks physical, industrial, or technological application.",
      },
      {
        heading: "The Delhi High Court Interventions",
        text: "In landmark decisions such as Ferid Allani v. Union of India, the Delhi High Court clarified that software-implemented inventions are patentable if they exhibit a &apos;technical effect&apos; or solve a &apos;technical problem&apos;. The court ruled that in today&apos;s digital age, barring software patents would stymie innovation. If the software operates in conjunction with hardware to produce a new technical outcome, it escapes the Section 3(k) exclusion.",
      },
      {
        heading: "Best Practices for Patent Drafting",
        text: "To secure patent approval in India, technology companies must shift their drafting approach. Patent specifications must not describe software as a standalone sequence of code or algorithm. Instead, claims should be structured around a system where the software acts as a control mechanism integrated with physical hardware components, demonstrating an improvement in the functioning of the hardware device itself.",
      },
      {
        heading: "Key Takeaways for Tech Firms",
        text: "Protecting software-based intellectual property in India requires key strategic adjustments:",
        list: [
          "Structure software claims as a combination of hardware and software working together.",
          "Clearly document and highlight the &apos;technical effect&apos; or solution in the patent specification.",
          "Avoid abstract algorithmic claims; describe the physical inputs, processing steps, and outputs.",
          "Leverage recent Delhi High Court precedents in response to patent examination reports.",
        ],
      },
    ],
  },
  "rera-seven-years": {
    category: "Real Estate",
    title: "RERA After Seven Years: The Transformation of India&apos;s Real Estate Legal Framework",
    excerpt: "Seven years since RERA&apos;s introduction, we assess how the regulatory landscape has reshaped developer obligations, buyer rights, and dispute resolution in Indian real estate.",
    date: "August 22, 2024",
    readTime: "9 min read",
    image: "/images/philosophy-books.png",
    author: "Abhimanyu Devaiah",
    authorTitle: "Founding Partner",
    sections: [
      {
        text: "The enactment of the Real Estate (Regulation and Development) Act (RERA) in 2016 marked a watershed moment for India&apos;s real estate sector. Designed to bring transparency, accountability, and buyer protection, RERA has profoundly altered the operational and dispute dynamics of developers and purchasers alike.",
      },
      {
        heading: "The 70% Escrow Rule: Restoring Financial Discipline",
        text: "RERA&apos;s most impactful structural intervention is Section 4(2)(l)(D), which requires developers to deposit 70% of all collections from buyers into a dedicated project escrow account. These funds can only be withdrawn for construction and land acquisition costs, verified by architects and chartered accountants. This mechanism has effectively eliminated the systemic practice of diverting capital to launch new projects, significantly reducing delays.",
      },
      {
        heading: "Standardizing Developer Commitments",
        text: "Prior to RERA, the definition of saleable area was highly manipulated. RERA standardized &apos;carpet area&apos;, protecting buyers from paying for non-functional built-up spaces. Furthermore, Section 14 mandates a five-year structural defect liability period. Developers are legally bound to rectify any structural or workmanship defects discovered within five years of possession, without charging buyers.",
      },
      {
        heading: "The Jurisdictional Battleground: RERA vs. IBC",
        text: "While RERA established dedicated state tribunals for rapid dispute resolution, the Insolvency and Bankruptcy Code (IBC) has emerged as a parallel path for home buyers seeking refunds. The Supreme Court&apos;s rulings have confirmed that home buyers are financial creditors under the IBC, giving them the right to initiate insolvency proceedings. Navigating the intersection of RERA and IBC remains a critical focus for developers and buyer collectives.",
      },
      {
        heading: "Key Takeaways for Stakeholders",
        text: "Developers, buyers, and lenders must understand the primary rules shaping real estate compliance:",
        list: [
          "Developers must establish strict project accounting to comply with the 70% escrow withdraw rule.",
          "Buyers should verify the RERA registration number and project status before signing agreements.",
          "Promoters must factor in the 5-year structural defect warranty in their construction contracts.",
          "Address disputes through RERA state tribunals before invoking parallel bankruptcy remedies.",
        ],
      },
    ],
  },
  "director-liability": {
    category: "Corporate Law",
    title: "Director Liability in India: Recent Developments Every Board Member Must Understand",
    excerpt: "Recent enforcement actions have clarified — and in some cases expanded — the personal liability of directors. We examine what has changed and how boards should respond.",
    date: "July 10, 2024",
    readTime: "5 min read",
    image: "/images/practice-corporate.png",
    author: "Harsit V. Raj",
    authorTitle: "Senior Managing Partner",
    sections: [
      {
        text: "Corporate governance standards in India have intensified, shifting personal accountability from corporate entities directly to their board members. Directors can no longer hide behind the corporate veil. Both executive and independent directors must fully comprehend their exposures under Indian corporate jurisprudence.",
      },
      {
        heading: "Section 166 of the Companies Act, 2013",
        text: "The Companies Act, 2013 codified directors&apos; duties for the first time in Section 166. Directors must act in good faith to promote the objects of the company, exercise independent judgment, and avoid conflicts of interest. Breaches of these duties are subject to severe civil penalties and, in cases of deliberate fraud, criminal liability.",
      },
      {
        heading: "The Safe Harbor Rule: Reality or Illusion?",
        text: "Section 149(12) provides a safe harbor for independent directors, stating they can only be held liable for acts of omission or commission that occurred with their knowledge, consent, or connivance, or where they failed to act diligently. However, recent regulatory actions demonstrate that regulators place a high burden of proof on independent directors to show active diligence, especially in financial statement approvals.",
      },
      {
        heading: "Liability Under the IBC and Criminal Statutes",
        text: "Under Section 66 of the IBC, directors face personal liability for &apos;fraudulent trading&apos; or &apos;wrongful trading&apos; if they continued to incur debt when they knew there was no reasonable prospect of avoiding insolvency. Additionally, environmental laws, tax regulations, and the Prevention of Money Laundering Act (PMLA) impose vicarious criminal liability on directors for corporate offenses.",
      },
      {
        heading: "Key Takeaways for Board Members",
        text: "Board members must implement robust personal governance protocols to mitigate liability:",
        list: [
          "Ensure board minutes accurately record your active dissent or queries on risky transactions.",
          "Perform independent due diligence before joining boards or approving complex financials.",
          "Secure comprehensive Directors &amp; Officers (D&amp;O) liability insurance coverage.",
          "Actively monitor insolvency triggers and seek early corporate restructuring advisory.",
        ],
      },
    ],
  },
  "commercial-courts": {
    category: "Litigation",
    title: "Commercial Courts: Five Years of India&apos;s Arbitration Revolution",
    excerpt: "India&apos;s Commercial Courts Act promised faster dispute resolution for business. We assess the outcomes five years on and what remains to be achieved.",
    date: "June 5, 2024",
    readTime: "6 min read",
    image: "/images/hero-interior.png",
    author: "Abhimanyu Devaiah",
    authorTitle: "Founding Partner",
    sections: [
      {
        text: "Over the past five years, India has made significant strides in positioning itself as a hub for commercial dispute resolution. The introduction of the Commercial Courts Act, 2015, alongside major updates to the Arbitration and Conciliation Act, has dramatically reshaped the speed and procedural discipline of business dispute resolution.",
      },
      {
        heading: "Specialized Judges and Strict Timelines",
        text: "The Commercial Courts Act established dedicated commercial divisions within High Courts and District Courts. It introduced a separate civil procedure code for commercial disputes, featuring mandatory Pre-Institution Mediation and Settlement (PIMS) and strict timeline controls. For example, written statements must be filed within 120 days from summons—a deadline that courts have ruled cannot be extended under any circumstances.",
      },
      {
        heading: "Speeding Up Arbitral Award Enforcement",
        text: "The Arbitration Act amendments have complemented commercial courts by establishing fast-track arbitration schedules (12-month timeline for domestic awards) and limiting judicial interference. Section 34 petitions (challenging arbitral awards) are now heard exclusively by commercial divisions, which are mandated to dispose of these matters within one year. This has significantly reduced the time required to enforce commercial awards in India.",
      },
      {
        heading: "Active Judicial Case Management",
        text: "The introduction of Case Management Hearings allows judges to actively set schedules for trial, witness examination, and arguments, preventing the historic stalling tactics of traditional litigation. Additionally, PIMS rules require parties to attempt mediation before launching suits, filtering out cases that can be settled amicably and keeping court dockets clean.",
      },
      {
        heading: "Key Takeaways for Corporate Litigants",
        text: "Litigants must adapt their litigation strategy to match the specialized commercial rules:",
        list: [
          "Draft arbitration clauses specifying seat, venue, and governing law with absolute clarity.",
          "Prepare all evidence, documents, and disclosures upfront before initiating commercial court suits.",
          "Adhere strictly to the 120-day timeline for filing written statements; no extensions are permitted.",
          "Leverage Pre-Institution Mediation (PIMS) to seek early settlements and avoid litigation costs.",
        ],
      },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return {};
  return {
    title: `${article.title.replace(/&apos;/g, "'").replace(/&amp;/g, "&")} | De Novo Insights`,
    description: article.excerpt.replace(/&apos;/g, "'").replace(/&amp;/g, "&"),
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    notFound();
  }

  return (
    <div style={{ backgroundColor: "var(--color-bg)", minHeight: "100vh" }}>
      {/* ── HERO BANNER ── */}
      <section style={{ position: "relative", paddingTop: "11rem", paddingBottom: "3rem", overflow: "hidden" }}>
        <div className="site-container">
          <RevealSection>
            {/* Back to Insights */}
            <Link 
              href="/insights" 
              style={{ 
                display: "inline-flex", 
                alignItems: "center", 
                gap: "0.5rem", 
                color: "var(--color-primary)", 
                fontFamily: "var(--font-sans)", 
                fontSize: "0.7rem", 
                fontWeight: 700, 
                letterSpacing: "0.15em", 
                textTransform: "uppercase", 
                textDecoration: "none",
                marginBottom: "2rem" 
              }}
              className="hover:opacity-80 transition-opacity"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              Back to Insights
            </Link>

            {/* Category tag */}
            <p className="label-tag" style={{ marginBottom: "1.5rem" }}>{article.category}</p>
            
            {/* Title */}
            <h1 
              className="font-serif" 
              style={{ 
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)", 
                color: "var(--color-text-primary)", 
                lineHeight: 1.15, 
                marginBottom: "2rem", 
                fontWeight: 400 
              }}
              dangerouslySetInnerHTML={{ __html: article.title }}
            />

            {/* Meta Band */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "var(--color-text-muted)", borderBottom: "1px solid var(--color-border)", paddingBottom: "2rem" }}>
              <span>{article.date}</span>
              <span>•</span>
              <span>By <strong>{article.author}</strong> ({article.authorTitle})</span>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── ARTICLE CONTENT ── */}
      <section style={{ padding: "3rem 0 8rem 0", backgroundColor: "#fff" }}>
        <div className="site-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr" }} className="lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Article Text */}
            <div className="lg:col-span-8">
              <RevealSection>
                {/* Featured Image */}
                <div style={{ position: "relative", width: "100%", height: "420px", marginBottom: "3rem" }}>
                  <Image
                    src={article.image}
                    alt={article.title.replace(/&apos;/g, "'").replace(/&amp;/g, "&")}
                    fill
                    style={{ objectFit: "cover", display: "block" }}
                    priority
                  />
                  <div style={{ position: "absolute", bottom: "-12px", right: "-12px", width: "100%", height: "100%", border: "1px solid var(--color-primary)", zIndex: -1 }} />
                </div>

                {/* Content Sections */}
                <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                  {article.sections.map((section, idx) => (
                    <div key={idx}>
                      {section.heading && (
                        <h2 className="font-serif" style={{ fontSize: "1.6rem", color: "var(--color-text-primary)", marginBottom: "1rem", fontWeight: 400 }} dangerouslySetInnerHTML={{ __html: section.heading }} />
                      )}
                      <p 
                        style={{ 
                          fontFamily: "var(--font-sans)", 
                          fontSize: "0.92rem", 
                          color: "var(--color-text-secondary)", 
                          lineHeight: 1.8, 
                          marginBottom: section.list ? "1.5rem" : "0" 
                        }}
                        dangerouslySetInnerHTML={{ __html: section.text }}
                      />
                      {section.list && (
                        <ul className="space-y-4 pl-4" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                          {section.list.map((li, liIdx) => (
                            <li key={liIdx} className="font-sans text-sm text-[var(--color-text-secondary)] align-top" style={{ display: "flex", alignItems: "start" }}>
                              <span className="inline-block w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full mr-3 mt-2 flex-shrink-0" />
                              <div dangerouslySetInnerHTML={{ __html: li }} />
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </RevealSection>
            </div>

            {/* Right Column: Sticky Sidebar Info */}
            <div className="lg:col-span-4">
              <div style={{ position: "sticky", top: "7rem" }}>
                <RevealSection delay={0.2}>
                  {/* Practice Lead Card */}
                  <div style={{ padding: "2.5rem 2rem", backgroundColor: "var(--color-bg)", border: "1px solid var(--color-border)" }} className="mb-8">
                    <h3 className="font-serif text-[18px] text-[var(--color-text-primary)] mb-4 font-normal">Practice Lead</h3>
                    <div className="flex gap-4 items-center mb-6" style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1.5rem" }}>
                      <div style={{ position: "relative", width: "60px", height: "60px", borderRadius: "50%", overflow: "hidden" }}>
                        <Image
                          src={article.author === "Harsit V. Raj" ? "/images/harsit-portrait.png" : "/images/abhimanyu-portrait.png"}
                          alt={article.author}
                          fill
                          style={{ objectFit: "cover", objectPosition: "top" }}
                        />
                      </div>
                      <div>
                        <h4 className="font-sans font-bold text-sm text-[var(--color-text-primary)]">{article.author}</h4>
                        <p className="font-sans text-xs text-[var(--color-text-muted)]">{article.authorTitle}</p>
                      </div>
                    </div>
                    <p className="font-sans text-[13px] text-[var(--color-text-secondary)] leading-relaxed mb-6">
                      For consultations regarding {article.category.toLowerCase()} regulations, transactions, and structuring, contact our principal office.
                    </p>
                    <Link href="/contact" className="btn btn-ghost-dark w-full text-center" style={{ display: "block", textAlign: "center" }}>
                      Request Consultation
                    </Link>
                  </div>

                  {/* Legal Disclaimer Box */}
                  <div style={{ padding: "1.5rem", borderLeft: "2px solid var(--color-primary)", backgroundColor: "var(--color-bg)" }}>
                    <h4 className="font-sans font-bold text-[10px] uppercase tracking-wider text-[var(--color-primary)] mb-2">Legal Disclaimer</h4>
                    <p className="font-sans text-[11px] text-[var(--color-text-muted)] leading-relaxed">
                      The insights presented in this article do not constitute legal advice and are intended for general information purposes only. Acquirers, founders, and directors should consult legal counsel regarding specific transactional structures.
                    </p>
                  </div>
                </RevealSection>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
