import { sanityFetch } from "@/sanity/lib/client";
import { PAGE_HEADER_QUERY, OUTCOME_BARS_QUERY, REACH_CARDS_QUERY, TESTIMONIALS_BY_PROGRAMME_QUERY } from "@/sanity/lib/queries";
import SectionLabel from "@/components/ui/SectionLabel";
import QuoteBlock from "@/components/ui/QuoteBlock";
import Button from "@/components/ui/Button";
import AnimatedCounter from "@/components/sections/AnimatedCounter";
import AnimatedOutcomeBars from "@/components/sections/AnimatedOutcomeBars";
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
  { _id: "2", quote: "Coming to the group is the highlight of my week. The music helps my body in ways my medication just can't.", attribution: "Robert, 68 · Waveney Skylarks" },
  { _id: "3", quote: "Mum lights up the moment the music starts. She remembers songs she's known for decades. It's magical to witness.", attribution: "Family carer · Music & Dementia at The Seagull" },
];

const HERO_STATS = [
  { target: 5,  suffix: "+", label: "weekly sessions" },
  { target: 4,  suffix: "",  label: "health conditions" },
  { target: 12, suffix: "",  label: "artists (Wired Sounds 2025)" },
  { target: 6,  suffix: "",  label: "years running" },
];

const HEALTH_CONDITIONS = [
  "Lung conditions and breathlessness",
  "Dementia",
  "Parkinson's",
  "Mental health and anxiety",
  "Bereavement",
  "Neurodiversity",
  "Chronic health conditions",
  "Social isolation",
];

const STORIES = [
  {
    title: "A dream come true",
    body: "When we first met one of our participants at the Friday Music for Wellbeing group, he told us quietly that his dream was to play music with other people. He was not sure he could. Over the weeks and months that followed, we watched him grow in confidence, form friendships, and find his place in our community. By September 2025 he was in the audience at the Wired Sounds Festival at The Seagull Theatre, cheering on the young emerging artists. One of our long-standing group members described it as a truly magical moment. It was.",
  },
  {
    title: "Taking the spotlight",
    body: "In March 2025 one of our Friday group participants felt confident enough to step forward and play a solo in front of the whole group at The Seagull Theatre. For everyone in the room it was a reminder of what a safe, warm, consistent creative space can make possible. Music for wellbeing is about so much more than the music.",
  },
  {
    title: "The Big Christmas Singalong",
    body: "In December 2024 we facilitated Asthma and Lung UK's online Big Christmas Singalong as part of their festive fundraiser. Asthma and Lung UK wrote to us afterwards to say: \"Thank you so much for facilitating a fantastic and fun-filled session.\" The certificate is proudly displayed by the members of our Lowestoft groups.",
  },
];

const MEDIA = [
  { outlet: "BBC Look East",          date: "December 2025", description: "Broadcast feature on our Singing for Lung Health sessions with Asthma and Lung UK." },
  { outlet: "BBC News online",        date: "December 2025", description: "\"Singalong in Suffolk boosts lung health and helps a good cause.\"" },
  { outlet: "BBC Suffolk",            date: "December 2025", description: "A choir made up of people with lung conditions uses singing to strengthen their breathing muscles." },
  { outlet: "BBC News online",        date: "October 2024",  description: "\"Music group expands to help neurodiverse people across counties.\"" },
  { outlet: "BBC Music Introducing",  date: "September 2025",description: "Norfolk and Suffolk feature on Wired Sounds Festival artists Kitty-May and Eve's Delight." },
  { outlet: "Suffolk Sound radio",    date: "October 2024",  description: "Helen Barnes interviewed on the Community Hour about Swell Music CIC." },
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
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#1a1a1a" }} className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          {h.eyebrow && <SectionLabel>{h.eyebrow}</SectionLabel>}
          <HighlightHeading heading={h.heading} highlightWord={h.highlightWord ?? undefined} as="h1"
            className="text-4xl sm:text-5xl font-black" style={{ fontFamily: "var(--font-display)", color: "#ffffff" }} />
          <p className="text-base max-w-2xl leading-relaxed" style={{ color: "#aaaaaa" }}>
            Music changes lives. We know that because we see it every single week in the people who walk through our doors. Here is some of what we have been up to, who we have worked with, and what we have achieved together.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-4">
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

      {/* ── Animated outcome bars ─────────────────────────────────────────── */}
      <section className="py-16 px-6" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <SectionLabel>Participant outcomes</SectionLabel>
            <h2 className="text-3xl font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>What participants tell us</h2>
          </div>
          <AnimatedOutcomeBars bars={os} />
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────────────────── */}
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

      {/* ── Stories ───────────────────────────────────────────────────────── */}
      <section className="py-16 px-6" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <SectionLabel>Stories from our community</SectionLabel>
            <h2 className="text-3xl font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>
              Statistics only tell part of the story
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STORIES.map((s) => (
              <div key={s.title} className="flex flex-col gap-3 rounded-lg p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}>
                <div className="w-1 h-8 rounded-full" style={{ backgroundColor: "#F5A623" }} />
                <h3 className="text-lg font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#444444" }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Helen's quote ─────────────────────────────────────────────────── */}
      <section className="py-16 px-6" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="max-w-3xl mx-auto">
          <QuoteBlock
            dark
            quote="Sharing my joy of making music with people is a wonderful experience. Hearing voices that can no longer speak, sing, and seeing the eyes of strangers meet in a smile when they are having the toughest day — that is why I do this."
            attribution="Helen Barnes, founder of Swell Music CIC"
          />
        </div>
      </section>

      {/* ── Health conditions ─────────────────────────────────────────────── */}
      <section className="py-16 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <SectionLabel>Who we support</SectionLabel>
            <h2 className="text-3xl font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>The health conditions we work with</h2>
            <p className="text-base max-w-2xl leading-relaxed" style={{ color: "#444444" }}>
              Our programmes support people living with a wide range of health conditions, as well as anyone who would benefit from music, community and connection. You do not need a diagnosis to come along — you just need to want to be there.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {HEALTH_CONDITIONS.map((c) => (
              <div key={c} className="flex items-center gap-3 rounded-lg px-4 py-4" style={{ backgroundColor: "#f9f9f9", border: "1px solid rgba(0,0,0,0.06)" }}>
                <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: "#F5A623" }} />
                <span className="text-sm font-medium" style={{ color: "#1a1a1a" }}>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What we believe ───────────────────────────────────────────────── */}
      <section className="py-16 px-6" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <SectionLabel>Our belief</SectionLabel>
            <h2 className="text-3xl font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>What we believe</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <p className="text-base leading-relaxed" style={{ color: "#444444" }}>
              Medical research shows that making music in a supportive, safe, social setting can greatly improve your physical and mental wellbeing. At Swell Music CIC we see that evidence come to life every week. We believe that music is not a luxury — it is a genuine, evidence-based tool for better health, and everyone deserves access to it regardless of their ability, background or diagnosis.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#444444" }}>
              We are a Community Interest Company, which means everything we do is for the benefit of the community we serve. We are not here to make a profit. We are here to make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* ── BBC / Media ───────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#1a1a1a" }} className="py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <SectionLabel>In the media</SectionLabel>
            <h2 className="text-3xl font-black" style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}>Media coverage</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {MEDIA.map((m) => (
              <div key={`${m.outlet}-${m.date}`} className="flex flex-col gap-2 rounded-lg p-5" style={{ backgroundColor: "#2a2a2a", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black px-2 py-0.5 rounded" style={{ backgroundColor: "#F5A623", color: "#412402" }}>BBC</span>
                  <span className="text-xs" style={{ color: "#888888" }}>{m.date}</span>
                </div>
                <p className="text-sm font-bold" style={{ color: "#ffffff" }}>{m.outlet}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#888888" }}>{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Geographic reach ──────────────────────────────────────────────── */}
      <section className="py-16 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <SectionLabel>Where we work</SectionLabel>
            <h2 className="text-3xl font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>Geographic reach</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {rs.map((r) => (
              <div key={r._id} className="rounded-lg px-6 py-6" style={{ border: "1px solid rgba(0,0,0,0.08)", backgroundColor: "#f9f9f9" }}>
                <p className="text-4xl font-black mb-1" style={{ fontFamily: "var(--font-display)", color: "#F5A623" }}>{r.value}{r.unit}</p>
                <p className="text-sm" style={{ color: "#444444" }}>{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTAs ──────────────────────────────────────────────────────────── */}
      <section className="py-12 px-6" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4">
          <Button href="/get-involved/refer" variant="primary">Refer someone</Button>
          <Button href="/get-involved/find-a-session" variant="ghost" className="!text-ink !border-ink/30">Find a session</Button>
        </div>
      </section>
    </>
  );
}
