import ProgrammeHero from "@/components/programme/ProgrammeHero";
import SectionLabel from "@/components/ui/SectionLabel";
import QuoteBlock from "@/components/ui/QuoteBlock";
import Button from "@/components/ui/Button";
import { IconMusic, IconUsers, IconHeartHandshake, IconCalendar, IconMapPin } from "@tabler/icons-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Waveney Skylarks — Swell Music CIC",
  description:
    "Sing to Beat Parkinson's sessions in Halesworth and Lowestoft — evidence-based music therapy for people living with Parkinson's disease.",
};

const features = [
  {
    icon: IconMusic,
    title: "Rhythmic entrainment",
    description:
      "Music with a strong beat helps the brain regulate movement — a proven approach for managing Parkinson's motor symptoms.",
  },
  {
    icon: IconUsers,
    title: "Group vocal work",
    description:
      "Singing strengthens the voice, improves swallowing function, and builds lung capacity — areas often affected by Parkinson's.",
  },
  {
    icon: IconHeartHandshake,
    title: "Peer connection",
    description:
      "A community of people who truly understand. Carers and partners are warmly welcome.",
  },
];

const sessions = [
  { day: "Wednesday", time: "11:00am – 12:30pm", location: "Halesworth", address: "Halesworth Community Centre, Quay Street, Halesworth, IP19 8ET" },
  { day: "Friday", time: "2:00pm – 3:30pm", location: "Lowestoft", address: "The Seagull Theatre, Morton Road, Lowestoft, NR32 2HY" },
];

export default function ParkinsonsPage() {
  return (
    <>
      <ProgrammeHero
        eyebrow="Waveney Skylarks"
        title="Music that moves with you."
        description="Evidence-based group singing sessions for people living with Parkinson's disease, led by a certified Sing to Beat Parkinson's practitioner. Running in Halesworth and Lowestoft."
        accentColour="#1D9E75"
        accentText="#085041"
        badgeLabel="Parkinson's disease"
        badgeColour="teal"
        accreditation="Sing to Beat Parkinson's"
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
                  <div className="w-9 h-9 rounded flex items-center justify-center" style={{ backgroundColor: "#E1F5EE" }}>
                    <Icon size={18} style={{ color: "#085041" }} />
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
          <h2 className="text-3xl font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>Clinically grounded</h2>
          <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "#444444" }}>
            Sing to Beat Parkinson's is a programme developed with leading Parkinson's researchers.
            Studies show group singing can improve vocal loudness, breath support, and motor function
            (Haneishi, 2001; Elefant et al., 2012). Helen Hayes is a trained and certified Sing to
            Beat Parkinson's leader.
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
                  <IconCalendar size={16} style={{ color: "#1D9E75" }} />
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
          <QuoteBlock quote="Coming to Skylarks is the highlight of my week. The music helps my body in ways my medication just can't." attribution="Robert, 68 · Waveney Skylarks" />
          <QuoteBlock quote="Helen has such warmth. She makes everyone feel capable and valued, whatever stage of the disease you're at." attribution="Pat, carer · Waveney Skylarks" />
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
