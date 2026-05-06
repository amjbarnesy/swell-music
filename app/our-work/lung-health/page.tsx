import ProgrammeHero from "@/components/programme/ProgrammeHero";
import SectionLabel from "@/components/ui/SectionLabel";
import QuoteBlock from "@/components/ui/QuoteBlock";
import Button from "@/components/ui/Button";
import { IconLungs, IconUsers, IconCalendar, IconMapPin } from "@tabler/icons-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Singing for Lung Health — Swell Music CIC",
  description:
    "BLF-accredited group singing sessions for people with COPD and other lung conditions across East Suffolk.",
};

const features = [
  {
    icon: IconLungs,
    title: "Breathing exercises through song",
    description:
      "Specially designed vocal exercises strengthen the respiratory muscles and improve breath control.",
  },
  {
    icon: IconUsers,
    title: "Peer support and community",
    description:
      "Share experiences with others who understand. Many participants say the friendships are as valuable as the music.",
  },
  {
    icon: IconCalendar,
    title: "Weekly, drop-in format",
    description:
      "No commitment, no booking. Come when you can. Each session stands alone.",
  },
];

const whoFor = [
  "People with COPD or bronchiectasis",
  "Anyone with a long-term lung condition",
  "Those recovering from chest surgery or illness",
  "Carers and family members are welcome",
];

const sessions = [
  { day: "Tuesday", time: "2:00pm – 3:30pm", location: "Lowestoft", address: "The Seagull Theatre, Morton Road, Lowestoft, NR32 2HY" },
];

export default function LungHealthPage() {
  return (
    <>
      <ProgrammeHero
        eyebrow="Singing for Lung Health"
        title="Breathe better. Live better."
        description="BLF-accredited group singing sessions that strengthen breathing, reduce isolation, and improve quality of life for people living with COPD and other lung conditions."
        accentColour="#F5A623"
        accentText="#412402"
        badgeLabel="Lung conditions"
        badgeColour="amber"
        accreditation="BLF Accredited"
      />

      {/* What happens */}
      <section className="py-16 px-6" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <SectionLabel>The sessions</SectionLabel>
            <h2 className="text-3xl font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>
              What happens in a session
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="flex flex-col gap-3 p-5 rounded-lg bg-white" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
                  <div className="w-9 h-9 rounded flex items-center justify-center" style={{ backgroundColor: "#FEF3D7" }}>
                    <Icon size={18} style={{ color: "#854F0B" }} />
                  </div>
                  <h3 className="text-sm font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#444444" }}>{f.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <SectionLabel>Who it&rsquo;s for</SectionLabel>
            <h2 className="text-3xl font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>
              Everyone is welcome
            </h2>
          </div>
          <ul className="flex flex-col gap-3">
            {whoFor.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm" style={{ color: "#444444" }}>
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#F5A623" }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Evidence */}
      <section className="py-16 px-6" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <SectionLabel>The evidence</SectionLabel>
            <h2 className="text-3xl font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>
              Clinically grounded
            </h2>
          </div>
          <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "#444444" }}>
            The Singing for Lung Health programme is accredited by the British Lung Foundation (BLF).
            Clinical studies have shown group singing can improve lung function, exercise capacity,
            and psychological wellbeing in people with COPD (Lord et al., 2010; Skingley et al., 2014).
            Helen Hayes is a fully trained BLF Singing for Lung Health practitioner.
          </p>
        </div>
      </section>

      {/* Sessions */}
      <section className="py-16 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <SectionLabel>Find us</SectionLabel>
            <h2 className="text-3xl font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>
              Session times &amp; locations
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {sessions.map((s) => (
              <div key={s.location} className="flex flex-col sm:flex-row sm:items-center gap-4 p-5 rounded-lg" style={{ border: "1px solid rgba(0,0,0,0.08)", backgroundColor: "#f9f9f9" }}>
                <div className="flex items-center gap-2 shrink-0">
                  <IconCalendar size={16} style={{ color: "#F5A623" }} />
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

      {/* Quotes */}
      <section className="py-16 px-6" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <QuoteBlock quote="I never thought singing could make me feel this way. I breathe better, I sleep better, and I have friends again." attribution="Margaret, 72 · Singing for Lung Health" />
          <QuoteBlock quote="My doctor actually noticed the improvement. She asked what I was doing differently. I said singing!" attribution="David, 65 · Singing for Lung Health" />
        </div>
      </section>

      {/* CTAs */}
      <section className="py-10 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4">
          <Button href="/get-involved/find-a-session" variant="primary">Join this session</Button>
          <Button href="/get-involved/refer" variant="ghost" className="!text-ink !border-ink/30">Refer someone</Button>
        </div>
      </section>
    </>
  );
}
