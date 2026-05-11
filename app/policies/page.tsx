import type { Metadata } from "next";
import { IconFileText, IconDownload } from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "Policies — Swell Music CIC",
  description:
    "Swell Music CIC organisational policies including safeguarding and equality.",
};

const POLICIES = [
  {
    title: "Adult Safeguarding Policy",
    description:
      "Our policy for safeguarding adults at risk who participate in or are connected with Swell Music sessions. Reviewed November 2024.",
    filename: "Swell-Adult-Safeguarding-Policy-4.11.24.pdf",
    date: "November 2024",
  },
  {
    title: "Child Safeguarding Policy",
    description:
      "Our policy for safeguarding children and young people who may attend or be connected with Swell Music sessions. Reviewed June 2023.",
    filename: "Swell-Child-Safeguarding-Policy-14.6.23.pdf",
    date: "June 2023",
  },
  {
    title: "Equality Policy",
    description:
      "Our commitment to equality, diversity, and inclusion across all Swell Music activities, programmes, and employment. Reviewed October 2020.",
    filename: "Swell-Music-Equality-Policy-1.10.20.pdf",
    date: "October 2020",
  },
];

export default function PoliciesPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#ffffff" }}>
      {/* Header */}
      <section className="px-6 py-14" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="max-w-3xl mx-auto">
          <p
            className="text-xs font-semibold tracking-[0.18em] uppercase mb-3"
            style={{ color: "#F5A623", fontFamily: "var(--font-body)" }}
          >
            Swell Music CIC
          </p>
          <h1
            className="text-4xl sm:text-5xl font-black leading-tight"
            style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}
          >
            Our policies
          </h1>
          <p className="mt-4 text-base max-w-xl leading-relaxed" style={{ color: "#888888" }}>
            Swell Music CIC is committed to the safety, wellbeing, and fair treatment of
            everyone connected with our work. Our policies are available to download below.
          </p>
        </div>
      </section>

      {/* Policy list */}
      <section className="px-6 py-14">
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {POLICIES.map((policy) => (
            <div
              key={policy.filename}
              className="flex items-start gap-5 rounded-lg p-6"
              style={{ border: "1px solid #e5e5e5" }}
            >
              {/* Icon */}
              <div
                className="shrink-0 rounded-md p-3"
                style={{ backgroundColor: "#fff8ec" }}
              >
                <IconFileText size={24} style={{ color: "#F5A623" }} />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h2
                      className="text-lg font-black leading-snug"
                      style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}
                    >
                      {policy.title}
                    </h2>
                    <p className="text-xs mt-0.5" style={{ color: "#888888" }}>
                      Last reviewed: {policy.date}
                    </p>
                  </div>
                  <a
                    href={`/${policy.filename}`}
                    download
                    className="inline-flex items-center gap-2 rounded px-4 py-2 text-sm font-semibold shrink-0 transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "#F5A623", color: "#412402" }}
                  >
                    <IconDownload size={15} />
                    Download PDF
                  </a>
                </div>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: "#444444" }}>
                  {policy.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="max-w-3xl mx-auto mt-10">
          <p className="text-sm leading-relaxed" style={{ color: "#888888" }}>
            If you have any questions about our policies or safeguarding arrangements please
            contact us at{" "}
            <a
              href="mailto:info@swellmusic.org.uk"
              className="underline underline-offset-2"
              style={{ color: "#F5A623" }}
            >
              info@swellmusic.org.uk
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
