import { sanityFetch } from "@/sanity/lib/client";
import { ALL_SESSIONS_QUERY, PAGE_HEADER_QUERY } from "@/sanity/lib/queries";
import SectionLabel from "@/components/ui/SectionLabel";
import HighlightHeading from "@/components/ui/HighlightHeading";
import { IconCalendar, IconMapPin } from "@tabler/icons-react";
import fallbackSessions from "@/data/sessions.json";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Find a Session — Swell Music CIC",
  description: "Find a free Swell Music CIC session near you in Suffolk and Norfolk.",
};

const HEADER_FALLBACK = {
  eyebrow: "Free, drop-in, no booking",
  heading: "Find a session",
  highlightWord: null,
  subheading: "All sessions are free. No booking required — just turn up. If you're unsure which session is right for you, call us on 07917 799456.",
};

const PROGRAMME_COLOUR: Record<string, string> = {
  "lung-health": "#F5A623", parkinsons: "#1D9E75", dementia: "#7F77DD", "wired-sounds": "#D85A30",
};
const PROGRAMME_LABEL: Record<string, string> = {
  "lung-health": "Singing for Lung Health", parkinsons: "Waveney Skylarks",
  dementia: "Music & Dementia", "wired-sounds": "Wired Sounds",
};

export default async function FindASessionPage() {
  const [header, sanitySessionsRaw] = await Promise.all([
    sanityFetch<typeof HEADER_FALLBACK>({ query: PAGE_HEADER_QUERY, params: { page: "find-a-session" } }),
    sanityFetch<typeof fallbackSessions>({ query: ALL_SESSIONS_QUERY }),
  ]);

  const h = header ?? HEADER_FALLBACK;
  const sessions = (sanitySessionsRaw && sanitySessionsRaw.length > 0) ? sanitySessionsRaw : fallbackSessions;

  return (
    <>
      <section style={{ backgroundColor: "#1a1a1a" }} className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-5">
          {h.eyebrow && <SectionLabel>{h.eyebrow}</SectionLabel>}
          <HighlightHeading heading={h.heading} highlightWord={h.highlightWord ?? undefined} as="h1"
            className="text-4xl sm:text-5xl font-black" style={{ fontFamily: "var(--font-display)", color: "#ffffff" }} />
          {h.subheading && (
            <p className="text-base leading-relaxed max-w-xl" style={{ color: "#888888" }}>
              {h.subheading.replace("07917 799456", "")}
              <a href="tel:+447917799456" style={{ color: "#F5A623" }}>07917 799456</a>.
            </p>
          )}
        </div>
      </section>

      <section className="py-16 px-6" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <SectionLabel>All sessions</SectionLabel>
          <div className="flex flex-col gap-4" role="list" aria-label="Session list">
            {sessions.map((s) => (
              <div key={s.id ?? s.location} className="flex flex-col sm:flex-row sm:items-center gap-4 p-5 rounded-lg bg-white" style={{ border: "1px solid rgba(0,0,0,0.08)" }} role="listitem">
                <div className="w-1 self-stretch rounded-full shrink-0" style={{ backgroundColor: PROGRAMME_COLOUR[s.programme] ?? "#F5A623", minHeight: 40 }} aria-hidden="true" />
                <div className="flex flex-col gap-2 flex-1">
                  <p className="text-xs font-medium" style={{ color: PROGRAMME_COLOUR[s.programme] ?? "#F5A623" }}>
                    {PROGRAMME_LABEL[s.programme] ?? s.programme}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <span className="flex items-center gap-1.5 text-sm" style={{ color: "#1a1a1a" }}>
                      <IconCalendar size={14} style={{ color: "#888888" }} />
                      {s.day} · {s.time}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm" style={{ color: "#444444" }}>
                      <IconMapPin size={14} style={{ color: "#888888" }} />
                      {s.location} — {s.address}
                    </span>
                  </div>
                  {s.notes && <p className="text-xs" style={{ color: "#888888" }}>{s.notes}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
