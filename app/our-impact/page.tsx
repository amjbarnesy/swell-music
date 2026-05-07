import { sanityFetch } from "@/sanity/lib/client";
import { PAGE_HEADER_QUERY, OUTCOME_BARS_QUERY, REACH_CARDS_QUERY, TESTIMONIALS_BY_PROGRAMME_QUERY } from "@/sanity/lib/queries";
import SectionLabel from "@/components/ui/SectionLabel";
import QuoteBlock from "@/components/ui/QuoteBlock";
import Button from "@/components/ui/Button";
import AnimatedCounter from "@/components/sections/AnimatedCounter";
import HighlightHeading from "@/components/ui/HighlightHeading";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Our Impact — Swell Music CIC",
  description: "Evidence of the difference Swell Music CIC makes to people's lives.",
};

const HEADER_FALLBACK = { eyebrow: "Evidenced outcomes", heading: "Our impact", highlightWord: null, subheading: null };

const OUTCOME_FALLBACK = [
  { _id: "1", label: "Felt less isolated",       value: 91, unit: "%", description: "Singing for Lung Health participant survey", programme: "lung-health" },
  { _id: "2", label: "Improved mood",             value: 87, unit: "%", description: "All programmes combined",                   programme: "all" },
  { _id: "3", label: "Would recommend to others", value: 96, unit: "%", description: "All programmes combined",                   programme: "all" },
  { _id: "4", label: "Easier breathing",          value: 78, unit: "%", description: "Singing for Lung Health cohort",            programme: "lung-health" },
];

const REACH_FALLBACK = [
  { _id: "1", label: "Counties",           value: 2,  unit: "" },
  { _id: "2", label: "Session locations",  value: 6,  unit: "+" },
  { _id: "3", label: "Sessions per week",  value: 5,  unit: "+" },
];

const QUOTE_FALLBACK = [
  { _id: "1", quote: "I never thought singing could make me feel this way. I breathe better, I sleep better, and I have friends again.", attribution: "Margaret, 72 · Singing for Lung Health" },
  { _id: "2", quote: "Coming to Skylarks is the highlight of my week. The music helps my body in ways my medication just can't.", attribution: "Robert, 68 · Waveney Skylarks" },
  { _id: "3", quote: "Mum lights up the moment the music starts. She remembers songs she's known for decades. It's magical to witness.", attribution: "Family carer · Music & Dementia at The Seagull" },
];

const COLOUR_MAP: Record<string, string> = {
  "lung-health": "#F5A623", parkinsons: "#1D9E75", dementia: "#7F77DD", "wired-sounds": "#D85A30", all: "#F5A623",
};

const HERO_STATS = [
  { target: 5,  suffix: "+", label: "weekly sessions" },
  { target: 4,  suffix: "",  label: "health conditions" },
  { target: 12, suffix: "",  label: "artists (Wired Sounds 2025)" },
  { target: 6,  suffix: "",  label: "years running" },
];

export default async function OurImpactPage() {
  const [header, outcomes, reach, quotes] = await Promise.all([
    sanityFetch<typeof HEADER_FALLBACK>({ query: PAGE_HEADER_QUERY, params: { page: "our-impact" } }),
    sanityFetch<typeof OUTCOME_FALLBACK>({ query: OUTCOME_BARS_QUERY }),
    sanityFetch<typeof REACH_FALLBACK>({ query: REACH_CARDS_QUERY }),
    sanityFetch<typeof QUOTE_FALLBACK>({ query: TESTIMONIALS_BY_PROGRAMME_QUERY, params: { programme: "general" } }),
  ]);

  const h  = header   ?? HEADER_FALLBACK;
  const os = (outcomes && outcomes.length > 0) ? outcomes : OUTCOME_FALLBACK;
  const rs = (reach    && reach.length    > 0) ? reach    : REACH_FALLBACK;
  const qs = (quotes   && quotes.length   > 0) ? quotes   : QUOTE_FALLBACK;

  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "#1a1a1a" }} className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          {h.eyebrow && <SectionLabel>{h.eyebrow}</SectionLabel>}
          <HighlightHeading heading={h.heading} highlightWord={h.highlightWord ?? undefined} as="h1"
            className="text-4xl sm:text-5xl font-black" style={{ fontFamily: "var(--font-display)", color: "#ffffff" }} />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6">
            {HERO_STATS.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <p className="text-4xl font-black" style={{ fontFamily: "var(--font-display)", color: "#F5A623" }}>
                  <AnimatedCounter target={s.target} suffix={s.suffix} />
                </p>
                <p className="text-sm" style={{ color: "#888888" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome bars */}
      <section className="py-16 px-6" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <SectionLabel>Participant outcomes</SectionLabel>
            <h2 className="text-3xl font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>What participants tell us</h2>
          </div>
          <div className="flex flex-col gap-6">
            {os.map((o) => {
              const colour = COLOUR_MAP[o.programme ?? "all"] ?? "#F5A623";
              return (
                <div key={o._id} className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium" style={{ color: "#1a1a1a" }}>{o.label}</span>
                    <span className="text-sm font-black" style={{ fontFamily: "var(--font-display)", color: colour }}>{o.value}{o.unit}</span>
                  </div>
                  <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: "#e5e7eb" }}
                    role="progressbar" aria-valuenow={o.value} aria-valuemin={0} aria-valuemax={100} aria-label={`${o.label}: ${o.value}${o.unit}`}>
                    <div className="h-full rounded-full" style={{ width: `${o.value}%`, backgroundColor: colour }} />
                  </div>
                  {o.description && <p className="text-xs" style={{ color: "#888888" }}>Source: {o.description}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Voices */}
      <section className="py-16 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <SectionLabel>Voices from our sessions</SectionLabel>
            <h2 className="text-3xl font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>In their own words</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {qs.map((q) => <QuoteBlock key={q._id} quote={q.quote} attribution={q.attribution} />)}
          </div>
        </div>
      </section>

      {/* BBC */}
      <section style={{ backgroundColor: "#1a1a1a" }} className="py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <span className="text-sm font-black px-3 py-1 rounded shrink-0" style={{ backgroundColor: "#F5A623", color: "#412402" }}>BBC</span>
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-black" style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}>National media recognition</h3>
            <p className="text-sm" style={{ color: "#888888" }}>Featured on BBC Look East and BBC News in December 2025, highlighting the transformative impact of the Singing for Lung Health programme.</p>
          </div>
        </div>
      </section>

      {/* Reach */}
      <section className="py-16 px-6" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <SectionLabel>Where we work</SectionLabel>
            <h2 className="text-3xl font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>Geographic reach</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {rs.map((r) => (
              <div key={r._id} className="rounded-lg px-6 py-6" style={{ border: "1px solid rgba(0,0,0,0.08)", backgroundColor: "#ffffff" }}>
                <p className="text-4xl font-black mb-1" style={{ fontFamily: "var(--font-display)", color: "#F5A623" }}>{r.value}{r.unit}</p>
                <p className="text-sm" style={{ color: "#444444" }}>{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4">
          <Button href="/get-involved/refer" variant="primary">Refer someone</Button>
          <Button href="/get-involved/find-a-session" variant="ghost" className="!text-ink !border-ink/30">Find a session</Button>
        </div>
      </section>
    </>
  );
}
