import SectionLabel from "@/components/ui/SectionLabel";
import QuoteBlock from "@/components/ui/QuoteBlock";
import Button from "@/components/ui/Button";
import AnimatedCounter from "@/components/sections/AnimatedCounter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Impact — Swell Music CIC",
  description:
    "Evidence of the difference Swell Music CIC makes to people's lives across Suffolk and Norfolk.",
};

const outcomes = [
  { label: "Felt less isolated",         pct: 91, colour: "#F5A623", note: "Singing for Lung Health participant survey" },
  { label: "Improved mood",              pct: 87, colour: "#1D9E75", note: "All programmes combined" },
  { label: "Would recommend to others",  pct: 96, colour: "#7F77DD", note: "All programmes combined" },
  { label: "Easier breathing",           pct: 78, colour: "#D85A30", note: "Singing for Lung Health cohort" },
];

const quotes = [
  {
    quote: "I never thought singing could make me feel this way. I breathe better, I sleep better, and I have friends again.",
    attribution: "Margaret, 72 · Singing for Lung Health",
  },
  {
    quote: "Coming to Skylarks is the highlight of my week. The music helps my body in ways my medication just can't.",
    attribution: "Robert, 68 · Waveney Skylarks",
  },
  {
    quote: "Mum lights up the moment the music starts. She remembers songs she's known for decades. It's magical to witness.",
    attribution: "Family carer · Music & Dementia at The Seagull",
  },
];

const reach = [
  { label: "Counties",          value: "2" },
  { label: "Session locations", value: "6+" },
  { label: "Sessions per week", value: "5+" },
];

const stats = [
  { target: 5,  suffix: "+", label: "weekly sessions" },
  { target: 4,  suffix: "",  label: "health conditions" },
  { target: 12, suffix: "",  label: "artists (Wired Sounds 2025)" },
  { target: 6,  suffix: "",  label: "years running" },
];

export default function OurImpactPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "#1a1a1a" }} className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <SectionLabel>Evidenced outcomes</SectionLabel>
          <h1
            className="text-4xl sm:text-5xl font-black"
            style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}
          >
            Our impact
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <p
                  className="text-4xl font-black"
                  style={{ fontFamily: "var(--font-display)", color: "#F5A623" }}
                >
                  <AnimatedCounter target={s.target} suffix={s.suffix} />
                </p>
                <p className="text-sm" style={{ color: "#888888" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Participant outcomes */}
      <section className="py-16 px-6" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <SectionLabel>Participant outcomes</SectionLabel>
            <h2
              className="text-3xl font-black"
              style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}
            >
              What participants tell us
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {outcomes.map((o) => (
              <div key={o.label} className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium" style={{ color: "#1a1a1a" }}>
                    {o.label}
                  </span>
                  <span
                    className="text-sm font-black"
                    style={{ fontFamily: "var(--font-display)", color: o.colour }}
                  >
                    {o.pct}%
                  </span>
                </div>
                <div
                  className="h-2 rounded-full overflow-hidden"
                  style={{ backgroundColor: "#e5e7eb" }}
                  role="progressbar"
                  aria-valuenow={o.pct}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${o.label}: ${o.pct}%`}
                >
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${o.pct}%`, backgroundColor: o.colour }}
                  />
                </div>
                <p className="text-xs" style={{ color: "#888888" }}>
                  Source: {o.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voices */}
      <section className="py-16 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <SectionLabel>Voices from our sessions</SectionLabel>
            <h2
              className="text-3xl font-black"
              style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}
            >
              In their own words
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quotes.map((q) => (
              <QuoteBlock key={q.attribution} quote={q.quote} attribution={q.attribution} />
            ))}
          </div>
        </div>
      </section>

      {/* BBC feature */}
      <section style={{ backgroundColor: "#1a1a1a" }} className="py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <span
            className="text-sm font-black px-3 py-1 rounded shrink-0"
            style={{ backgroundColor: "#F5A623", color: "#412402" }}
          >
            BBC
          </span>
          <div className="flex flex-col gap-1">
            <h3
              className="text-lg font-black"
              style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}
            >
              National media recognition
            </h3>
            <p className="text-sm" style={{ color: "#888888" }}>
              Swell Music CIC was featured on BBC Look East and BBC News in December 2025,
              highlighting the transformative impact of the Singing for Lung Health programme.
            </p>
          </div>
        </div>
      </section>

      {/* Geographic reach */}
      <section className="py-16 px-6" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <SectionLabel>Where we work</SectionLabel>
            <h2
              className="text-3xl font-black"
              style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}
            >
              Geographic reach
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {reach.map((r) => (
              <div
                key={r.label}
                className="rounded-lg px-6 py-6"
                style={{ border: "1px solid rgba(0,0,0,0.08)", backgroundColor: "#ffffff" }}
              >
                <p
                  className="text-4xl font-black mb-1"
                  style={{ fontFamily: "var(--font-display)", color: "#F5A623" }}
                >
                  {r.value}
                </p>
                <p className="text-sm" style={{ color: "#444444" }}>
                  {r.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="py-12 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4">
          <Button href="/get-involved/refer" variant="primary">
            Refer someone
          </Button>
          <Button href="/get-involved/find-a-session" variant="ghost" className="!text-ink !border-ink/30">
            Find a session
          </Button>
        </div>
      </section>
    </>
  );
}
