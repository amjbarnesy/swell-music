import { sanityFetch } from "@/sanity/lib/client";
import { FUNDERS_QUERY } from "@/sanity/lib/queries";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import FunderBarServer from "@/components/sections/FunderBarServer";
import { DONATE_URL } from "@/lib/donate";
import type { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Support Us — Swell Music CIC",
  description: "Help Swell Music CIC keep sessions free for everyone who needs them.",
};

export default async function SupportUsPage() {
  const funders = await sanityFetch<Array<{
    _id: string; name: string; url?: string; logoUrl?: string; logoAlt?: string;
  }>>({ query: FUNDERS_QUERY });

  return (
    <>
      <section style={{ backgroundColor: "#1a1a1a" }} className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-5">
          <SectionLabel>Make a difference</SectionLabel>
          <h1 className="text-4xl sm:text-5xl font-black" style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}>
            Support our work
          </h1>
          <p className="text-base leading-relaxed max-w-xl" style={{ color: "#888888" }}>
            Every session is free because of the generosity of funders and supporters like you.
            Help us keep it that way.
          </p>
          <div className="flex flex-wrap gap-3 mt-2">
            <Button href="/contact" variant="primary">Get in touch</Button>
            <Button href="/get-involved/volunteer" variant="ghost">Volunteer with us</Button>
          </div>
        </div>
      </section>

      {/* Donate section */}
      <section className="px-6 py-16" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-5">
            <SectionLabel>Make a donation</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-black leading-tight" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>
              Help keep our sessions free
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "#444444" }}>
              Swell Music CIC sessions are and always will be free to attend. But running them
              costs money — room hire, equipment, travel, and the countless small things that
              make each session happen. Donations go directly towards keeping the programme
              running for the people who need it most.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#444444" }}>
              Every contribution, however small, makes a real difference to someone living with
              a lung condition, Parkinson&rsquo;s, dementia, or finding their place in a
              community that gets them.
            </p>
            <div className="mt-2">
              <a
                href={DONATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded font-semibold text-base transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#F5A623", color: "#412402" }}
              >
                Donate now
              </a>
            </div>
            <p className="text-xs" style={{ color: "#888888" }}>
              Swell Music is a Community Interest Company (No. 12789454). Payments are
              processed securely via SumUp.
            </p>
          </div>

          {/* What donations cover */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { amount: "£5",  label: "covers the cost of printed music for one session" },
              { amount: "£15", label: "contributes to a session leader's travel costs" },
              { amount: "£30", label: "helps fund room hire for a weekly session" },
              { amount: "£50", label: "supports a full month of one programme's running costs" },
            ].map((item) => (
              <div
                key={item.amount}
                className="rounded-lg p-5 flex flex-col gap-2"
                style={{ backgroundColor: "#f9f9f9", border: "1px solid #e5e5e5" }}
              >
                <span className="text-2xl font-black" style={{ fontFamily: "var(--font-display)", color: "#F5A623" }}>
                  {item.amount}
                </span>
                <p className="text-sm leading-relaxed" style={{ color: "#444444" }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FunderBarServer funders={funders} />
    </>
  );
}
