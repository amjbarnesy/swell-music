import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Swell Music CIC",
  description: "How Swell Music CIC collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#ffffff" }}>
      {/* Header */}
      <section className="px-6 py-14" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="max-w-3xl mx-auto">
          <p
            className="text-xs font-semibold tracking-[0.18em] uppercase mb-3"
            style={{ color: "#F5A623", fontFamily: "var(--font-body)" }}
          >
            Legal
          </p>
          <h1
            className="text-4xl sm:text-5xl font-black leading-tight"
            style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}
          >
            Privacy policy
          </h1>
          <p className="mt-4 text-base" style={{ color: "#888888" }}>
            Last updated: May 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-14">
        <div className="max-w-3xl mx-auto prose prose-neutral">
          <div className="flex flex-col gap-10 text-base leading-relaxed" style={{ color: "#444444" }}>

            {/* Who we are */}
            <div>
              <h2 className="text-xl font-black mb-3" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>
                Who we are
              </h2>
              <p>
                Swell Music CIC is a Community Interest Company registered in England and Wales
                (Company No. 12789454). We run free weekly music sessions for people living with
                lung conditions, Parkinson&rsquo;s disease, dementia, and neurodivergent communities
                across Suffolk and Norfolk.
              </p>
              <p className="mt-3">
                This website is operated by Swell Music CIC. If you have any questions about how
                we handle your data, please contact us at{" "}
                <a href="mailto:info@swellmusic.org.uk" style={{ color: "#F5A623" }}>
                  info@swellmusic.org.uk
                </a>
                .
              </p>
            </div>

            {/* What data we collect */}
            <div>
              <h2 className="text-xl font-black mb-3" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>
                What data we collect and why
              </h2>

              <h3 className="text-base font-bold mt-5 mb-2" style={{ color: "#1a1a1a" }}>Contact form</h3>
              <p>
                When you use our contact form we collect your name, email address, and the content
                of your message. We use this solely to respond to your enquiry. We do not add you
                to any mailing list or share your details with third parties.
              </p>

              <h3 className="text-base font-bold mt-5 mb-2" style={{ color: "#1a1a1a" }}>Referral form</h3>
              <p>
                When you refer someone to one of our programmes we collect your name, contact
                details, and information about the person you are referring. This information is
                used only to process the referral and contact you or the participant about next
                steps. We handle referral data with particular care given the health context.
              </p>

              <h3 className="text-base font-bold mt-5 mb-2" style={{ color: "#1a1a1a" }}>Analytics</h3>
              <p>
                With your consent we use <strong>Google Analytics 4</strong> to understand how
                people find and use this website — for example, which pages are most visited and
                how people arrive at the site. This helps us reach more people who might benefit
                from our sessions. Google Analytics sets cookies and may transfer data to Google
                servers. We have enabled IP anonymisation. You can withdraw consent at any time by
                clearing your browser cookies and rejecting analytics on your next visit.
              </p>
              <p className="mt-3">
                We also use <strong>Vercel Analytics</strong>, a privacy-first analytics tool that
                collects aggregate page view data without setting cookies or identifying individual
                users. No consent is required for this.
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-xl font-black mb-3" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>
                Cookies
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr style={{ borderBottom: "2px solid #e5e5e5" }}>
                      <th className="text-left py-2 pr-4 font-bold" style={{ color: "#1a1a1a" }}>Cookie</th>
                      <th className="text-left py-2 pr-4 font-bold" style={{ color: "#1a1a1a" }}>Purpose</th>
                      <th className="text-left py-2 font-bold" style={{ color: "#1a1a1a" }}>Consent required</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid #e5e5e5" }}>
                      <td className="py-2 pr-4 font-mono text-xs">swell-cookie-consent</td>
                      <td className="py-2 pr-4">Remembers your cookie preference</td>
                      <td className="py-2">No (essential)</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #e5e5e5" }}>
                      <td className="py-2 pr-4 font-mono text-xs">_ga, _ga_*</td>
                      <td className="py-2 pr-4">Google Analytics — tracks page visits and user journeys</td>
                      <td className="py-2">Yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Data retention */}
            <div>
              <h2 className="text-xl font-black mb-3" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>
                How long we keep data
              </h2>
              <p>
                Enquiries submitted via the contact form are kept for up to 12 months and then
                securely deleted. Referral information is kept for as long as needed to support the
                participant and then deleted. We do not retain personal data for longer than
                necessary.
              </p>
            </div>

            {/* Your rights */}
            <div>
              <h2 className="text-xl font-black mb-3" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>
                Your rights
              </h2>
              <p>Under UK GDPR you have the right to:</p>
              <ul className="mt-3 flex flex-col gap-2 list-disc list-inside">
                <li>Access the personal data we hold about you</li>
                <li>Ask us to correct inaccurate data</li>
                <li>Ask us to delete your data</li>
                <li>Object to or restrict how we use your data</li>
                <li>Withdraw consent for analytics cookies at any time</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, email us at{" "}
                <a href="mailto:info@swellmusic.org.uk" style={{ color: "#F5A623" }}>
                  info@swellmusic.org.uk
                </a>
                . We will respond within 30 days. If you are unhappy with how we handle your data
                you have the right to complain to the{" "}
                <a
                  href="https://ico.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#F5A623" }}
                >
                  Information Commissioner&rsquo;s Office (ICO)
                </a>
                .
              </p>
            </div>

            {/* Third parties */}
            <div>
              <h2 className="text-xl font-black mb-3" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>
                Third-party services
              </h2>
              <p>
                This website is hosted on <strong>Vercel</strong>. Form submissions are delivered
                via <strong>Resend</strong>. Neither service sells your data. We do not use
                advertising networks, social media tracking pixels, or any other third-party
                tracking.
              </p>
            </div>

            {/* Changes */}
            <div>
              <h2 className="text-xl font-black mb-3" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>
                Changes to this policy
              </h2>
              <p>
                We may update this policy from time to time. The date at the top of this page will
                always reflect when it was last changed. Significant changes will be noted on our
                news page.
              </p>
            </div>

            {/* Back link */}
            <div className="pt-4 border-t" style={{ borderColor: "#e5e5e5" }}>
              <Link
                href="/"
                className="text-sm font-medium"
                style={{ color: "#F5A623" }}
              >
                ← Back to Swell Music
              </Link>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
