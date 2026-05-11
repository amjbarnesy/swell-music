import { sanityFetch } from "@/sanity/lib/client";
import { PAGE_HEADER_QUERY } from "@/sanity/lib/queries";
import SectionLabel from "@/components/ui/SectionLabel";
import QuoteBlock from "@/components/ui/QuoteBlock";
import HighlightHeading from "@/components/ui/HighlightHeading";
import type { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "About Us — Swell Music CIC",
  description:
    "Meet the team behind Swell Music CIC — a Community Interest Company bringing free music sessions to people across Suffolk and Norfolk.",
};

const FALLBACK = {
  eyebrow: "Who we are",
  heading: "About Swell Music CIC",
  highlightWord: null,
  subheading:
    "Swell Music CIC is a Community Interest Company founded in 2020 and based in East Suffolk. We run free weekly music sessions for people living with lung conditions, Parkinson's disease, dementia, and neurodivergent communities across Suffolk and Norfolk.",
};

const team = [
  {
    name: "Helen Hayes",
    role: "Founder & Director",
    bio: "Founded Swell Music CIC in August 2020 after three years as a community music practitioner in East Suffolk. Studied at Birmingham Conservatoire with a career spanning music, education and the arts. Trained Singing for Lung Health practitioner (accredited by Asthma and Lung UK), Sing to Beat Parkinson's leader, and specialist in dementia awareness and neurodiversity. Leads all community sessions and programmes.",
  },
  {
    name: "Jenny Cushion",
    role: "Director",
    bio: "Brings business leadership, communications and governance expertise through her role as Managing Director at Fern Communications Ltd, with extensive experience across energy, engineering and community sectors and multiple board positions.",
  },
  {
    name: "Karen Reid",
    role: "Director",
    bio: "Recently joined the board with a connection to The Seagull Theatre in Lowestoft — a core partner and vital part of East Suffolk's community arts landscape.",
  },
];

const hellenCareer = [
  "Studied at Birmingham Conservatoire",
  "Education Officer at Cheltenham Festivals",
  "Owned and managed Potton Hall recording studio, Suffolk",
  "Completed dementia awareness training at Norfolk and Norwich Hospital",
  "Certified Sing to Beat Parkinson's leader",
  "Trained Singing for Lung Health practitioner (Asthma and Lung UK)",
  "Music workshops for Musical Keys, Suffolk Artlink, Creative Arts East, and Norfolk and Norwich Festival Bridge",
  "Music Co-ordinator at First Light Lowestoft",
  "Lead singer and violinist in swing trio Out of Nowhere",
];

export default async function AboutPage() {
  const header =
    (await sanityFetch<typeof FALLBACK>({
      query: PAGE_HEADER_QUERY,
      params: { page: "about" },
    })) ?? FALLBACK;

  return (
    <>
      {/* Hero */}
      <section className="hero-bg py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-5">
          {header.eyebrow && <SectionLabel>{header.eyebrow}</SectionLabel>}
          <HighlightHeading
            heading={header.heading}
            highlightWord={header.highlightWord ?? undefined}
            as="h1"
            className="text-4xl sm:text-5xl font-black"
            style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}
          />
          {header.subheading && (
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: "#888888" }}>
              {header.subheading}
            </p>
          )}
        </div>
      </section>

      {/* Opening quote */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F5A623" }}>
        <div className="max-w-3xl mx-auto">
          <blockquote>
            <p
              className="text-xl sm:text-2xl font-black leading-snug mb-4"
              style={{ fontFamily: "var(--font-display)", color: "#412402" }}
            >
              &ldquo;Sharing my joy of making music with people is a wonderful experience.
              Hearing voices that can no longer speak, sing — and seeing the eyes of strangers
              meet in a smile when they are having the toughest day — is why I do this.&rdquo;
            </p>
            <footer className="text-sm font-medium" style={{ color: "#412402" }}>
              — Helen Hayes, Founder &amp; Director
            </footer>
          </blockquote>
        </div>
      </section>

      {/* What we are */}
      <section className="py-16 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-4">
            <SectionLabel>What we are</SectionLabel>
            <h2
              className="text-3xl font-black"
              style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}
            >
              A Community Interest Company
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#444444" }}>
              Swell Music CIC is directed by a small team of dedicated professionals combining
              expertise in music, wellbeing, community arts, business and governance — committed
              to serving their communities.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#444444" }}>
              All of our sessions are free. We believe that access to the proven benefits of
              music should never depend on someone&rsquo;s ability to pay.
            </p>
            <p className="text-xs mt-2" style={{ color: "#888888" }}>
              Swell Music CIC · Company No. 12789454 · Registered in England &amp; Wales
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <SectionLabel>Who we serve</SectionLabel>
            <h2
              className="text-3xl font-black"
              style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}
            >
              Four communities
            </h2>
            <ul className="flex flex-col gap-3">
              {[
                "People living with COPD and other lung conditions",
                "People living with Parkinson's disease",
                "People living with dementia and their carers",
                "Neurodivergent communities",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "#444444" }}>
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#F5A623" }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Helen bio */}
      <section className="py-16 px-6" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <SectionLabel>Our founder</SectionLabel>
            <h2
              className="text-3xl font-black"
              style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}
            >
              Helen Hayes
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col gap-5">
              <p className="text-sm leading-relaxed" style={{ color: "#444444" }}>
                Helen founded Swell Music CIC in August 2020 after three years working as a
                community music practitioner in East Suffolk, focusing on improving health and
                wellbeing through music-making for vulnerable community members.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#444444" }}>
                Since freelancing in 2018 she has trained in singing and music-making for people
                with a range of health conditions. She leads multiple groups and has provided
                workshops for Musical Keys, Suffolk Artlink, Creative Arts East, the Norfolk and
                Norwich Festival Bridge, and Lowestoft Rising&rsquo;s Ness Fest.
              </p>
              <QuoteBlock
                quote="Growing up in Leicestershire, I benefitted greatly from the opportunities offered by the county music service and inspirational teachers. Those early experiences gave me an insight into the life-changing effects of making music with others."
                attribution="Helen Hayes"
              />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-xs font-medium tracking-widest uppercase" style={{ color: "#F5A623" }}>
                Career highlights
              </p>
              <ul className="flex flex-col gap-3">
                {hellenCareer.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "#444444" }}>
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#F5A623" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <SectionLabel>The team</SectionLabel>
            <h2
              className="text-3xl font-black"
              style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}
            >
              Directors
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map((person) => (
              <div
                key={person.name}
                className="flex flex-col gap-3 p-6 rounded-lg"
                style={{ border: "1px solid rgba(0,0,0,0.08)", backgroundColor: "#f9f9f9" }}
              >
                <div className="flex flex-col gap-0.5">
                  <p
                    className="text-base font-bold"
                    style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}
                  >
                    {person.name}
                  </p>
                  <p className="text-xs font-medium" style={{ color: "#F5A623" }}>
                    {person.role}
                  </p>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#444444" }}>
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 px-6" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <SectionLabel>Our key partner</SectionLabel>
          <h2
            className="text-3xl font-black"
            style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}
          >
            The Seagull Theatre
          </h2>
          <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "#444444" }}>
            Based in Lowestoft, The Seagull Theatre is a vital part of East Suffolk&rsquo;s
            community arts landscape and a core partner for Swell Music. Three of our four
            programmes are hosted at The Seagull, making it central to everything we do.
          </p>
        </div>
      </section>
    </>
  );
}
