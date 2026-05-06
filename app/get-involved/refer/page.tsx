import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { IconUserCheck, IconClock, IconDoor } from "@tabler/icons-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refer Someone — Swell Music CIC",
  description:
    "Refer a patient or client to Swell Music CIC sessions. Simple form, 48-hour response, no waiting list.",
};

const steps = [
  {
    icon: IconUserCheck,
    title: "Complete the referral form",
    description: "Takes less than 3 minutes. Tell us about the person you&rsquo;re referring and the programme that best fits their needs.",
  },
  {
    icon: IconClock,
    title: "We make contact within 48 hours",
    description: "Helen or a team member will reach out to the participant or their carer to introduce the sessions and answer any questions.",
  },
  {
    icon: IconDoor,
    title: "They join the next session",
    description: "No waiting list. Sessions are drop-in, so they can start as soon as the following week.",
  },
];

export default function ReferPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "#1a1a1a" }} className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-5">
          <SectionLabel>For health &amp; social care professionals</SectionLabel>
          <h1 className="text-4xl sm:text-5xl font-black" style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}>
            Refer someone to<br />our sessions.
          </h1>
          <p className="text-base leading-relaxed max-w-xl" style={{ color: "#888888" }}>
            Free for all participants. No waiting list. Sessions are drop-in. Our programmes are
            suitable for referrals from GPs, occupational therapists, physiotherapists, social
            workers, and carers.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-6" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <SectionLabel>How it works</SectionLabel>
            <h2 className="text-3xl font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>Three simple steps</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="flex flex-col gap-4 p-5 rounded-lg bg-white" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-black" style={{ fontFamily: "var(--font-display)", color: "#F5A623" }}>{i + 1}</span>
                    <div className="w-9 h-9 rounded flex items-center justify-center" style={{ backgroundColor: "#FEF3D7" }}>
                      <Icon size={18} style={{ color: "#854F0B" }} />
                    </div>
                  </div>
                  <h3 className="text-sm font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#444444" }} dangerouslySetInnerHTML={{ __html: step.description }} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Referral form */}
      <section className="py-16 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-2xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <SectionLabel>Referral form</SectionLabel>
            <h2 className="text-3xl font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>Make a referral</h2>
            <p className="text-sm" style={{ color: "#444444" }}>
              All fields are required unless marked optional.
            </p>
          </div>

          {/* Replace YOUR_FORMSPREE_ID with the actual Formspree form ID */}
          <form
            action="https://formspree.io/f/YOUR_FORMSPREE_ID"
            method="POST"
            className="flex flex-col gap-6"
            noValidate
          >
            {/* Referrer details */}
            <fieldset className="flex flex-col gap-4">
              <legend className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: "#888888" }}>
                About you
              </legend>

              <div className="flex flex-col gap-1">
                <label htmlFor="referrer_name" className="text-sm font-medium" style={{ color: "#1a1a1a" }}>
                  Your name
                </label>
                <input
                  id="referrer_name"
                  name="referrer_name"
                  type="text"
                  required
                  autoComplete="name"
                  className="px-3 py-2.5 text-sm rounded"
                  style={{ border: "1px solid rgba(0,0,0,0.2)", outline: "none" }}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="referrer_role" className="text-sm font-medium" style={{ color: "#1a1a1a" }}>
                  Your role
                </label>
                <input
                  id="referrer_role"
                  name="referrer_role"
                  type="text"
                  required
                  placeholder="e.g. GP, Occupational Therapist, Social Worker"
                  className="px-3 py-2.5 text-sm rounded"
                  style={{ border: "1px solid rgba(0,0,0,0.2)", outline: "none" }}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="referrer_organisation" className="text-sm font-medium" style={{ color: "#1a1a1a" }}>
                  Organisation
                </label>
                <input
                  id="referrer_organisation"
                  name="referrer_organisation"
                  type="text"
                  required
                  className="px-3 py-2.5 text-sm rounded"
                  style={{ border: "1px solid rgba(0,0,0,0.2)", outline: "none" }}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="referrer_email" className="text-sm font-medium" style={{ color: "#1a1a1a" }}>
                  Your email
                </label>
                <input
                  id="referrer_email"
                  name="_replyto"
                  type="email"
                  required
                  autoComplete="email"
                  className="px-3 py-2.5 text-sm rounded"
                  style={{ border: "1px solid rgba(0,0,0,0.2)", outline: "none" }}
                />
              </div>
            </fieldset>

            {/* Participant details */}
            <fieldset className="flex flex-col gap-4">
              <legend className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: "#888888" }}>
                About the person you&rsquo;re referring
              </legend>

              <div className="flex flex-col gap-1">
                <label htmlFor="participant_name" className="text-sm font-medium" style={{ color: "#1a1a1a" }}>
                  Participant first name
                </label>
                <input
                  id="participant_name"
                  name="participant_name"
                  type="text"
                  required
                  className="px-3 py-2.5 text-sm rounded"
                  style={{ border: "1px solid rgba(0,0,0,0.2)", outline: "none" }}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="condition" className="text-sm font-medium" style={{ color: "#1a1a1a" }}>
                  Condition / reason for referral
                </label>
                <select
                  id="condition"
                  name="condition"
                  required
                  className="px-3 py-2.5 text-sm rounded bg-white"
                  style={{ border: "1px solid rgba(0,0,0,0.2)", outline: "none" }}
                >
                  <option value="">Select a programme</option>
                  <option value="lung-health">Lung condition — Singing for Lung Health</option>
                  <option value="parkinsons">Parkinson&rsquo;s disease — Waveney Skylarks</option>
                  <option value="dementia">Dementia — Music &amp; Dementia</option>
                  <option value="neurodivergent">Neurodivergent — Wired Sounds</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="location" className="text-sm font-medium" style={{ color: "#1a1a1a" }}>
                  Preferred location
                </label>
                <select
                  id="location"
                  name="location"
                  required
                  className="px-3 py-2.5 text-sm rounded bg-white"
                  style={{ border: "1px solid rgba(0,0,0,0.2)", outline: "none" }}
                >
                  <option value="">Select a location</option>
                  <option value="lowestoft">Lowestoft — The Seagull Theatre</option>
                  <option value="halesworth">Halesworth — Community Centre</option>
                  <option value="no-preference">No preference</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="notes" className="text-sm font-medium" style={{ color: "#1a1a1a" }}>
                  Additional notes <span style={{ color: "#888888" }}>(optional)</span>
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  className="px-3 py-2.5 text-sm rounded resize-y"
                  style={{ border: "1px solid rgba(0,0,0,0.2)", outline: "none" }}
                  placeholder="Any information that would help us support this person well"
                />
              </div>
            </fieldset>

            {/* Honeypot */}
            <input type="text" name="_gotcha" className="hidden" aria-hidden="true" tabIndex={-1} />
            <input type="hidden" name="_subject" value="New referral — Swell Music CIC" />

            <Button type="submit" variant="primary" className="self-start">
              Submit referral
            </Button>

            <p className="text-xs" style={{ color: "#888888" }}>
              We will respond within 48 hours. All sessions are free. No waiting list.
              Data held in accordance with our privacy policy.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
