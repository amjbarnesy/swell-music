import SectionLabel from "@/components/ui/SectionLabel";
import ReferralForm from "@/components/refer/ReferralForm";
import { IconUserCheck, IconClock, IconDoor, IconHeartHandshake } from "@tabler/icons-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refer Someone — Swell Music CIC",
  description: "Refer a patient or client to Swell Music CIC. Free sessions, no waiting list, 48-hour response.",
};

const steps = [
  {
    icon: IconUserCheck,
    title: "Complete the referral form",
    body: "Takes less than five minutes. Tell us about the person you are referring and which programme feels right for them — we can advise if you are not sure.",
  },
  {
    icon: IconClock,
    title: "We respond within 48 hours",
    body: "Helen or a team member will contact the participant or their carer directly to introduce the sessions, answer any questions, and agree the best way forward.",
  },
  {
    icon: IconDoor,
    title: "They join at their own pace",
    body: "All sessions are drop-in and free. There is no waiting list and no obligation — participants can come along whenever they feel ready.",
  },
];

const PROGRAMMES = [
  {
    colour:    "#F5A623",
    name:      "Singing for Lung Health",
    who:       "People living with lung conditions and breathlessness",
    detail:    "Run in partnership with Asthma and Lung UK. Every session is led by an accredited practitioner and combines singing, breathing exercises and relaxation. Available in Lowestoft, Reydon, Gorleston, and online nationally.",
  },
  {
    colour:    "#1D9E75",
    name:      "Waveney Skylarks",
    who:       "People living with Parkinson's disease — carers and partners welcome",
    detail:    "Music making and singing specifically designed for people with Parkinson's. Research shows group singing can support motor function, voice strength and emotional wellbeing.",
  },
  {
    colour:    "#7F77DD",
    name:      "Music & Dementia",
    who:       "People living with dementia and their carers",
    detail:    "A safe and familiar musical environment that supports memory, mood and connection. Family members and carers are always welcome and often find the sessions as meaningful as the participants themselves.",
  },
  {
    colour:    "#D85A30",
    name:      "Music for Wellbeing & Open Access",
    who:       "Anyone who would benefit from music, community and connection",
    detail:    "Our Friday Music for Wellbeing group at The Seagull Theatre is open to everyone — no diagnosis, no experience, no booking needed. Our Open Access programme specifically welcomes neurodivergent adults.",
  },
];

const WHO_CAN_REFER = [
  "GPs and practice nurses",
  "Physiotherapists and respiratory nurses",
  "Occupational therapists",
  "Social workers and care coordinators",
  "Mental health workers",
  "Community nurses and link workers",
  "Family members and carers",
  "Anyone who knows someone who would benefit",
];

export default function ReferPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="hero-bg py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-5">
          <SectionLabel>For health &amp; social care professionals</SectionLabel>
          <h1 className="text-4xl sm:text-5xl font-black" style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}>
            Refer someone to<br />our sessions
          </h1>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: "#aaaaaa" }}>
            Our programmes are free, drop-in, and open to anyone — no waiting list, no clinical threshold to meet. If you know someone who would benefit from music, community and connection, we would love to welcome them. Referrals take less than five minutes and we will follow up within 48 hours.
          </p>
          <div className="flex flex-wrap gap-6 mt-2">
            {[
              { value: "Free", label: "always, for all participants" },
              { value: "48hrs", label: "response to every referral" },
              { value: "No", label: "waiting list" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-0.5">
                <span className="text-2xl font-black" style={{ fontFamily: "var(--font-display)", color: "#F5A623" }}>{s.value}</span>
                <span className="text-xs" style={{ color: "#666666" }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why refer ────────────────────────────────────────────────────── */}
      <section className="py-16 px-6" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <SectionLabel>The evidence</SectionLabel>
              <h2 className="text-3xl font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>Why music works</h2>
            </div>
            <p className="text-base leading-relaxed" style={{ color: "#444444" }}>
              Medical research shows that group singing and music-making in a supportive social setting can improve physical and mental wellbeing across a wide range of conditions. At Swell Music CIC we see that evidence come to life every week.
            </p>
            <div className="flex flex-col gap-4">
              {[
                { stat: "91%", label: "of Singing for Lung Health participants felt less isolated" },
                { stat: "87%", label: "reported improved mood across all programmes" },
                { stat: "78%", label: "reported easier breathing after regular attendance" },
              ].map((s) => (
                <div key={s.label} className="flex items-start gap-4 p-4 rounded-lg bg-white" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
                  <span className="text-2xl font-black shrink-0" style={{ fontFamily: "var(--font-display)", color: "#F5A623" }}>{s.stat}</span>
                  <p className="text-sm leading-relaxed pt-1" style={{ color: "#444444" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <SectionLabel>Who can refer</SectionLabel>
              <h2 className="text-3xl font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>Anyone can refer</h2>
            </div>
            <p className="text-base leading-relaxed" style={{ color: "#444444" }}>
              There is no formal referral pathway required. We welcome referrals from health and social care professionals as well as family members, carers, and self-referrals.
            </p>
            <ul className="flex flex-col gap-2">
              {WHO_CAN_REFER.map((w) => (
                <li key={w} className="flex items-center gap-3 text-sm" style={{ color: "#444444" }}>
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#F5A623" }} />
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Programmes ───────────────────────────────────────────────────── */}
      <section className="py-16 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <SectionLabel>Our programmes</SectionLabel>
            <h2 className="text-3xl font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>What we offer</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {PROGRAMMES.map((p) => (
              <div key={p.name} className="flex flex-col gap-3 p-6 rounded-lg" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
                <div className="w-1 h-8 rounded-full" style={{ backgroundColor: p.colour }} />
                <h3 className="text-lg font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>{p.name}</h3>
                <p className="text-xs font-medium" style={{ color: p.colour }}>{p.who}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#444444" }}>{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────────── */}
      <section className="py-16 px-6" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <SectionLabel>The process</SectionLabel>
            <h2 className="text-3xl font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>Three simple steps</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="flex flex-col gap-4 p-6 rounded-lg bg-white" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-black" style={{ fontFamily: "var(--font-display)", color: "#F5A623" }}>{i + 1}</span>
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#FEF3D7" }}>
                      <Icon size={18} style={{ color: "#854F0B" }} />
                    </div>
                  </div>
                  <h3 className="text-base font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#444444" }}>{step.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Referral form ────────────────────────────────────────────────── */}
      <section className="py-16 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <SectionLabel>Make a referral</SectionLabel>
              <h2 className="text-3xl font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>Referral form</h2>
              <p className="text-sm" style={{ color: "#444444" }}>
                Takes less than five minutes. We will respond within 48 hours.
              </p>
            </div>
            <ReferralForm />
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-6">
            <div className="rounded-lg p-5 flex flex-col gap-4" style={{ backgroundColor: "#f9f9f9", border: "1px solid rgba(0,0,0,0.06)" }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#FEF3D7" }}>
                <IconHeartHandshake size={18} style={{ color: "#854F0B" }} />
              </div>
              <h3 className="text-base font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>What happens next</h3>
              <ul className="flex flex-col gap-2.5">
                {[
                  "We contact the participant or carer within 48 hours",
                  "We introduce the sessions and answer any questions",
                  "They join whenever they feel ready — no pressure",
                  "We will keep you updated if you would like us to",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "#444444" }}>
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#F5A623" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="hero-bg rounded-lg p-5 flex flex-col gap-3">
              <h3 className="text-base font-black" style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}>Prefer to call?</h3>
              <p className="text-sm" style={{ color: "#888888" }}>
                Happy to talk through whether one of our programmes is right for your patient or client.
              </p>
              <a href="tel:+447917799456" className="text-sm font-medium" style={{ color: "#F5A623" }}>
                07917 799456
              </a>
              <a href="mailto:info@swellmusic.org.uk" className="text-sm font-medium" style={{ color: "#F5A623" }}>
                info@swellmusic.org.uk
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
