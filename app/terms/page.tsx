import type { Metadata } from "next";
import RevealSection from "@/components/ui/RevealSection";

export const metadata: Metadata = {
  title: "Terms of Service | De Novo Law Firm",
  description: "Read the terms and conditions governing the use of the De Novo Law Firm website and services.",
};

const definitions = [
  {
    term: "Affiliate",
    desc: 'means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.',
  },
  {
    term: "Country",
    desc: "refers to: Karnataka, India",
  },
  {
    term: "Firm",
    desc: '(referred to as either "the Firm", "We", "Us" or "Our" in this Agreement) refers to De Novo, # 3728, 10th cross, 13th B main road, Indira Nagar, Bangalore-560046.',
  },
  {
    term: "Device",
    desc: "means any device that can access the Service such as a computer, a cellphone or a digital tablet.",
  },
  {
    term: "Service",
    desc: "refers to the Website.",
  },
  {
    term: "Terms and Conditions",
    desc: '(also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Firm regarding the use of the Service. This Terms and Conditions agreement has been created with the help of the Terms and Conditions Generator.',
  },
  {
    term: "Third-party Social Media Service",
    desc: "means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.",
  },
  {
    term: "Website",
    desc: "refers to De Novo, accessible from http://denovolawfirm.in/",
  },
  {
    term: "You",
    desc: "means the individual accessing or using the Service, or the Firm, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.",
  },
];

export default function TermsPage() {
  return (
    <div style={{ backgroundColor: "var(--color-bg)", minHeight: "100vh" }}>
      {/* ── HERO HEADER ── */}
      <section style={{ position: "relative", paddingTop: "11rem", paddingBottom: "5rem", overflow: "hidden" }}>
        <div className="site-container">
          <RevealSection>
            <p className="label-tag" style={{ marginBottom: "1.8rem" }}>Legal & Regulatory</p>
            <h1 className="font-serif" style={{ fontSize: "clamp(2.8rem, 6vw, 4.8rem)", color: "var(--color-text-primary)", lineHeight: 1.1, marginBottom: "2rem", fontWeight: 400 }}>
              Terms of <em className="font-serif" style={{ fontStyle: "italic", color: "var(--color-primary)", fontWeight: 400 }}>Service</em>
            </h1>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", color: "var(--color-text-secondary)", maxWidth: "640px", lineHeight: 1.8 }}>
              Last updated: June 10, 2026. Please read these Terms and Conditions carefully before using Our website.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ── CONTENT BODY ── */}
      <section style={{ padding: "3rem 0 8rem 0", backgroundColor: "#fff" }}>
        <div className="site-container">
          <div className="max-w-3xl mx-auto">
            <RevealSection>
              
              {/* SECTION: Interpretation and Definitions */}
              <div style={{ marginBottom: "4rem" }}>
                <h2 className="font-serif text-2xl mb-6 text-[var(--color-primary)] border-b border-[var(--color-border)] pb-3 font-normal">
                  Interpretation and Definitions
                </h2>
                
                <h3 className="font-sans font-bold text-sm text-[var(--color-text-primary)] uppercase tracking-wider mb-3">
                  Interpretation
                </h3>
                <p className="font-sans text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                </p>

                <h3 className="font-sans font-bold text-sm text-[var(--color-text-primary)] uppercase tracking-wider mb-4">
                  Definitions
                </h3>
                <p className="font-sans text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  For the purposes of these Terms and Conditions:
                </p>

                <div className="space-y-4 my-8">
                  {definitions.map((def) => (
                    <div 
                      key={def.term}
                      style={{ 
                        padding: "1.5rem", 
                        backgroundColor: "var(--color-bg)", 
                        borderLeft: "2px solid var(--color-primary)",
                        borderTop: "1px solid var(--color-border)",
                        borderRight: "1px solid var(--color-border)",
                        borderBottom: "1px solid var(--color-border)"
                      }}
                    >
                      <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-[var(--color-primary)] mb-1">
                        {def.term}
                      </h4>
                      <p className="font-sans text-[13px] text-[var(--color-text-secondary)] leading-relaxed">
                        {def.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION: Acknowledgment */}
              <div style={{ marginBottom: "4rem" }}>
                <h2 className="font-serif text-2xl mb-6 text-[var(--color-primary)] border-b border-[var(--color-border)] pb-3 font-normal">
                  Acknowledgment
                </h2>
                <p className="font-sans text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Firm. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
                </p>
                <p className="font-sans text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
                </p>
                <p className="font-sans text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
                </p>
                <p className="font-sans text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  You represent that you are over the age of 18. The Firm does not permit those under 18 to use the Service.
                </p>
                <p className="font-sans text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Firm. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.
                </p>
              </div>

              {/* SECTION: Links to Other Websites */}
              <div style={{ marginBottom: "4rem" }}>
                <h2 className="font-serif text-2xl mb-6 text-[var(--color-primary)] border-b border-[var(--color-border)] pb-3 font-normal">
                  Links to Other Websites
                </h2>
                <p className="font-sans text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  Our Service may contain links to third-party web sites or services that are not owned or controlled by the Firm.
                </p>
                <p className="font-sans text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  The Firm has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Firm shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.
                </p>
                <p className="font-sans text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.
                </p>
              </div>

              {/* SECTION: Termination */}
              <div style={{ marginBottom: "4rem" }}>
                <h2 className="font-serif text-2xl mb-6 text-[var(--color-primary)] border-b border-[var(--color-border)] pb-3 font-normal">
                  Termination
                </h2>
                <p className="font-sans text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.
                </p>
                <p className="font-sans text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  Upon termination, Your right to use the Service will cease immediately.
                </p>
              </div>

              {/* SECTION: Limitation of Liability */}
              <div style={{ marginBottom: "4rem" }}>
                <h2 className="font-serif text-2xl mb-6 text-[var(--color-primary)] border-b border-[var(--color-border)] pb-3 font-normal">
                  Limitation of Liability
                </h2>
                <p className="font-sans text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  Notwithstanding any damages that You might incur, the entire liability of the Firm and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You.
                </p>
                <p className="font-sans text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  To the maximum extent permitted by applicable law, in no event shall the Firm or its members be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Firm or any member has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.
                </p>
                <p className="font-sans text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party&apos;s liability will be limited to the greatest extent permitted by law.
                </p>
              </div>

              {/* SECTION: "AS IS" and "AS AVAILABLE" Disclaimer */}
              <div style={{ marginBottom: "4rem" }}>
                <h2 className="font-serif text-2xl mb-6 text-[var(--color-primary)] border-b border-[var(--color-border)] pb-3 font-normal">
                  &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer
                </h2>
                <p className="font-sans text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  The Service is provided to You &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Firm, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Firm provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.
                </p>
                <p className="font-sans text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  Without limiting the foregoing, neither the Firm nor any of the Firm&apos;s provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Firm are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.
                </p>
              </div>

              {/* SECTION: Governing Law */}
              <div style={{ marginBottom: "4rem" }}>
                <h2 className="font-serif text-2xl mb-6 text-[var(--color-primary)] border-b border-[var(--color-border)] pb-3 font-normal">
                  Governing Law
                </h2>
                <p className="font-sans text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to applicable laws in India.
                </p>
              </div>

              {/* SECTION: Disputes Resolution */}
              <div style={{ marginBottom: "4rem" }}>
                <h2 className="font-serif text-2xl mb-6 text-[var(--color-primary)] border-b border-[var(--color-border)] pb-3 font-normal">
                  Disputes Resolution
                </h2>
                <p className="font-sans text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Firm.
                </p>
              </div>

              {/* SECTION: Severability and Waiver */}
              <div style={{ marginBottom: "4rem" }}>
                <h2 className="font-serif text-2xl mb-6 text-[var(--color-primary)] border-b border-[var(--color-border)] pb-3 font-normal">
                  Severability and Waiver
                </h2>
                
                <h3 className="font-sans font-bold text-sm text-[var(--color-text-primary)] uppercase tracking-wider mb-3">
                  Severability
                </h3>
                <p className="font-sans text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.
                </p>

                <h3 className="font-sans font-bold text-sm text-[var(--color-text-primary)] uppercase tracking-wider mb-3">
                  Waiver
                </h3>
                <p className="font-sans text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  Except as provided herein, the failure to exercise a right or to require performance of an obligation under this Terms shall not effect a party&apos;s ability to exercise such right or require such performance at any time thereafter nor shall be the waiver of a breach constitute a waiver of any subsequent breach.
                </p>
              </div>

              {/* SECTION: Translation Interpretation */}
              <div style={{ marginBottom: "4rem" }}>
                <h2 className="font-serif text-2xl mb-6 text-[var(--color-primary)] border-b border-[var(--color-border)] pb-3 font-normal">
                  Translation Interpretation
                </h2>
                <p className="font-sans text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute.
                </p>
              </div>

              {/* SECTION: Changes to These Terms and Conditions */}
              <div style={{ marginBottom: "4rem" }}>
                <h2 className="font-serif text-2xl mb-6 text-[var(--color-primary)] border-b border-[var(--color-border)] pb-3 font-normal">
                  Changes to These Terms and Conditions
                </h2>
                <p className="font-sans text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days&apos; notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.
                </p>
                <p className="font-sans text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.
                </p>
              </div>

              {/* SECTION: Contact Us */}
              <div>
                <h2 className="font-serif text-2xl mb-6 text-[var(--color-primary)] border-b border-[var(--color-border)] pb-3 font-normal">
                  Contact Us
                </h2>
                <p className="font-sans text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  If you have any questions about this terms &amp; conditions, You can contact us:
                </p>
                <ul className="space-y-3 pl-4">
                  <li className="font-sans text-sm text-[var(--color-text-secondary)] flex items-center">
                    <span className="inline-block w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full mr-3 flex-shrink-0" />
                    By email:&nbsp;
                    <a href="mailto:harsit@denovolawfirm.in" className="text-[var(--color-primary)] hover:underline font-semibold">
                      harsit@denovolawfirm.in
                    </a>
                  </li>
                </ul>
              </div>

            </RevealSection>
          </div>
        </div>
      </section>
    </div>
  );
}
