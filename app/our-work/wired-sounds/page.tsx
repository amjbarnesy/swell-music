import ProgrammeHero from "@/components/programme/ProgrammeHero";
import SectionLabel from "@/components/ui/SectionLabel";
import QuoteBlock from "@/components/ui/QuoteBlock";
import Button from "@/components/ui/Button";
import { IconVolume, IconUsers, IconStar } from "@tabler/icons-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wired Sounds Festival — Swell Music CIC",
  description:
    "An annual neurodivergent-friendly music festival celebrating neurodiverse creativity. 12 artists performed in 2025.",
};

const features = [
  {
    icon: IconVolume,
    title: "Low-sensory environment",
    description:
      "Carefully designed to reduce sensory overwhelm — adjusted lighting, clear spaces, and a relaxed atmosphere throughout.",
  },
  {
    icon: IconStar,
    title: "Neurodivergent artists",
    description:
      "Wired Sounds exists to platform musicians whose work deserves a stage — 12 artists performed in 2025.",
  },
  {
    icon: IconUsers,
    title: "Inclusive audience",
    description:
      "A festival designed for everyone, with a particular welcome for neurodivergent attendees and their families.",
  },
];

export default function WiredSoundsPage() {
  return (
    <>
      <ProgrammeHero
        eyebrow="Wired Sounds Festival"
        title="Music made differently."
        description="An annual neurodivergent-friendly music festival celebrating the creativity and talent of neurodiverse musicians. Low-sensory, welcoming, and utterly unique."
        accentColour="#D85A30"
        accentText="#712B13"
        badgeLabel="Neurodivergent"
        badgeColour="coral"
      />

      <section className="py-16 px-6" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <SectionLabel>The festival</SectionLabel>
            <h2 className="text-3xl font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>What makes Wired Sounds different</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="flex flex-col gap-3 p-5 rounded-lg bg-white" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
                  <div className="w-9 h-9 rounded flex items-center justify-center" style={{ backgroundColor: "#FAECE7" }}>
                    <Icon size={18} style={{ color: "#712B13" }} />
                  </div>
                  <h3 className="text-sm font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#444444" }}>{f.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2025 highlights */}
      <section className="py-16 px-6" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <SectionLabel>Wired Sounds 2025</SectionLabel>
          <h2 className="text-3xl font-black" style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}>Last year in numbers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
            {[
              { value: "12",   label: "artists performed" },
              { value: "£283", label: "raised for Swell Music CIC" },
              { value: "1",    label: "unforgettable day" },
            ].map((s) => (
              <div key={s.label} className="rounded-lg px-6 py-6 flex flex-col gap-1" style={{ backgroundColor: "#2a2a2a", border: "1px solid rgba(255,255,255,0.08)" }}>
                <p className="text-4xl font-black" style={{ fontFamily: "var(--font-display)", color: "#D85A30" }}>{s.value}</p>
                <p className="text-sm" style={{ color: "#888888" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <QuoteBlock quote="Finally a festival where I don't have to mask. I was just me, and the music was extraordinary." attribution="Wired Sounds 2025 attendee" />
          <QuoteBlock quote="Performing here meant everything. This is the only stage I've played where the audience really gets it." attribution="Wired Sounds 2025 artist" />
        </div>
      </section>

      <section className="py-10 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4">
          <Button href="/contact" variant="primary">Get involved in 2026</Button>
          <Button href="/support-us" variant="ghost" className="!text-ink !border-ink/30">Support the festival</Button>
        </div>
      </section>
    </>
  );
}
