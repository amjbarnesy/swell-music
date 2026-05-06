import ProgrammeHero from "@/components/programme/ProgrammeHero";
import SectionLabel from "@/components/ui/SectionLabel";
import QuoteBlock from "@/components/ui/QuoteBlock";
import Button from "@/components/ui/Button";
import { IconMusic, IconUsers, IconHeart, IconCalendar, IconMapPin } from "@tabler/icons-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music & Dementia — Swell Music CIC",
  description:
    "Weekly music sessions at The Seagull Theatre for people living with dementia and their carers, connecting through melody and memory.",
};

const features = [
  {
    icon: IconMusic,
    title: "Music and memory",
    description:
      "Familiar songs unlock memories and emotions that other therapies cannot reach — a well-established benefit of music for dementia.",
  },
  {
    icon: IconHeart,
    title: "Emotional wellbeing",
    description:
      "Music reduces agitation and anxiety. Participants often arrive withdrawn and leave with smiles — every single week.",
  },
  {
    icon: IconUsers,
    title: "Carers included",
    description:
      "Sessions are designed for the person and their carer together, offering respite, joy, and shared connection.",
  },
];

const sessions = [
  { day: "Thursday", time: "10:30am – 12:00pm", location: "Lowestoft", address: "The Seagull Theatre, Morton Road, Lowestoft, NR32 2HY" },
];

export default function DementiaPage() {
  return (
    <>
      <ProgrammeHero
        eyebrow="Music & Dementia"
        title="Music holds what memory can't."
        description="Weekly sessions at The Seagull Theatre in Lowestoft for people living with dementia and their carers. Connecting through the songs that last a lifetime."
        accentColour="#7F77DD"
        accentText="#3C3489"
        badgeLabel="Dementia"
        badgeColour="purple"
      />

      <section className="py-16 px-6" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <SectionLabel>The sessions</SectionLabel>
            <h2 className="text-3xl font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>What happens in a session</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="flex flex-col gap-3 p-5 rounded-lg bg-white" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
                  <div className="w-9 h-9 rounded flex items-center justify-center" style={{ backgroundColor: "#EEEDFE" }}>
                    <Icon size={18} style={{ color: "#3C3489" }} />
                  </div>
                  <h3 className="text-sm font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#444444" }}>{f.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <SectionLabel>The evidence</SectionLabel>
          <h2 className="text-3xl font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>Why music works for dementia</h2>
          <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "#444444" }}>
            Music for dementia is supported by extensive research showing that musical memory is
            preserved even in advanced dementia (Jacobsen et al., 2015). The Music & Memory and
            Music for Dementia campaigns have brought this evidence to national attention. Helen Hayes
            is a trained dementia music specialist who adapts each session to the group&rsquo;s needs.
          </p>
        </div>
      </section>

      <section className="py-16 px-6" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <SectionLabel>Find us</SectionLabel>
          <h2 className="text-3xl font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>Session times &amp; locations</h2>
          <div className="flex flex-col gap-4">
            {sessions.map((s) => (
              <div key={s.location} className="flex flex-col sm:flex-row sm:items-center gap-4 p-5 rounded-lg" style={{ border: "1px solid rgba(0,0,0,0.08)", backgroundColor: "#ffffff" }}>
                <div className="flex items-center gap-2 shrink-0">
                  <IconCalendar size={16} style={{ color: "#7F77DD" }} />
                  <span className="text-sm font-medium" style={{ color: "#1a1a1a" }}>{s.day} · {s.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconMapPin size={16} style={{ color: "#888888" }} />
                  <span className="text-sm" style={{ color: "#444444" }}>{s.location} — {s.address}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <QuoteBlock quote="Mum lights up the moment the music starts. She remembers songs she's known for decades. It's magical to witness." attribution="Family carer · Music & Dementia at The Seagull" />
          <QuoteBlock quote="I arrived with Dad feeling exhausted and left feeling hopeful. That's not something I expected from a singing group." attribution="Daughter, carer · Music & Dementia" />
        </div>
      </section>

      <section className="py-10 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4">
          <Button href="/get-involved/find-a-session" variant="primary">Join this session</Button>
          <Button href="/get-involved/refer" variant="ghost" className="!text-ink !border-ink/30">Refer someone</Button>
        </div>
      </section>
    </>
  );
}
