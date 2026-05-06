import SectionLabel from "@/components/ui/SectionLabel";
import QuoteBlock from "@/components/ui/QuoteBlock";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Swell Music CIC",
  description:
    "Meet the team behind Swell Music CIC — a Community Interest Company founded in 2020 to bring the healing power of music to people across Suffolk and Norfolk.",
};

export default function AboutPage() {
  return (
    <>
      <section style={{ backgroundColor: "#1a1a1a" }} className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-5">
          <SectionLabel>Who we are</SectionLabel>
          <h1 className="text-4xl sm:text-5xl font-black" style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}>
            About Swell Music CIC
          </h1>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: "#888888" }}>
            Swell Music CIC is a Community Interest Company founded in 2020 and based in East
            Suffolk. We run free weekly music sessions for people living with lung conditions,
            Parkinson&rsquo;s disease, dementia, and neurodivergent communities across Suffolk
            and Norfolk.
          </p>
        </div>
      </section>

      <section className="py-16 px-6" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-5">
            <SectionLabel>Our founder</SectionLabel>
            <h2 className="text-3xl font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>
              Helen Hayes
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#444444" }}>
              Helen studied at Birmingham Conservatoire and is a fully trained Singing for Lung
              Health practitioner (BLF-accredited), a certified Sing to Beat Parkinson&rsquo;s
              leader, and a specialist in music and dementia. She founded Swell Music CIC after
              seeing first-hand the transformative power of group singing in clinical settings.
            </p>
            <QuoteBlock
              quote="I started Swell Music because I knew what music could do for people — and I couldn't understand why more people didn't have access to it. So I decided to change that."
              attribution="Helen Hayes, Founder"
            />
          </div>

          <div className="flex flex-col gap-5">
            <SectionLabel>The team</SectionLabel>
            <h2 className="text-3xl font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>
              Directors &amp; partners
            </h2>
            <div className="flex flex-col gap-4">
              {[
                { name: "Jenny Cushion", role: "Communications &amp; Governance" },
                { name: "Karen Reid", role: "Director · The Seagull Theatre connection" },
              ].map((person) => (
                <div key={person.name} className="flex flex-col gap-0.5">
                  <p className="text-sm font-medium" style={{ color: "#1a1a1a" }} dangerouslySetInnerHTML={{ __html: person.name }} />
                  <p className="text-xs" style={{ color: "#888888" }} dangerouslySetInnerHTML={{ __html: person.role }} />
                </div>
              ))}
            </div>
            <p className="text-sm leading-relaxed mt-2" style={{ color: "#444444" }}>
              Our key partner is{" "}
              <strong>The Seagull Theatre</strong>, Lowestoft — a vital community venue that
              hosts three of our four programmes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs" style={{ color: "#888888" }}>
            Swell Music CIC · Company No. 12789454 · Registered in England &amp; Wales
          </p>
        </div>
      </section>
    </>
  );
}
