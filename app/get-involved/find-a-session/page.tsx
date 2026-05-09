import { sanityFetch } from "@/sanity/lib/client";
import { ALL_SESSIONS_QUERY, PAGE_HEADER_QUERY, SESSION_LOCATIONS_QUERY } from "@/sanity/lib/queries";
import SectionLabel from "@/components/ui/SectionLabel";
import HighlightHeading from "@/components/ui/HighlightHeading";
import MapWrapper from "@/components/contact/MapWrapper";
import { IconCalendar, IconMapPin } from "@tabler/icons-react";
import fallbackSessions from "@/data/sessions.json";
import type { SessionLocation } from "@/components/contact/SessionsMap";
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

const LOCATIONS_FALLBACK: SessionLocation[] = [
  { _id: "1", name: "The Seagull Theatre",             address: "Morton Road, Lowestoft, NR33 0JH",        note: "Friday Music for Wellbeing · Open Access · Wired Sounds Festival", lat: 52.4548, lng: 1.7352 },
  { _id: "2", name: "Reydon Sports & Community Centre", address: "Near Southwold",                          note: "Singing for Lung Health — Tuesdays 10am–11.30am",                   lat: 52.3271, lng: 1.6612 },
  { _id: "3", name: "Pavilion Theatre & Bandstand",     address: "Gorleston",                               note: "Singing for Lung Health — alternate Wednesdays",                    lat: 52.5716, lng: 1.7328 },
  { _id: "4", name: "Shrublands Community Trust",       address: "Gorleston",                               note: "Singing for Lung Health & Open Access — alternate Wednesdays",     lat: 52.5783, lng: 1.7246 },
  { _id: "5", name: "First Light — Battery of Ideas",   address: "London Road North, Lowestoft",            note: "Community singing pop-up sessions",                                 lat: 52.4793, lng: 1.7452 },
  { _id: "6", name: "Halesworth Community Centre",      address: "Quay Street, Halesworth, IP19 8ET",       note: "Community singing & accessible carol services",                     lat: 52.3493, lng: 1.5068 },
];

const PROGRAMME_COLOUR: Record<string, string> = {
  "lung-health": "#F5A623", parkinsons: "#1D9E75", dementia: "#7F77DD", "wired-sounds": "#D85A30",
};
const PROGRAMME_LABEL: Record<string, string> = {
  "lung-health": "Singing for Lung Health", parkinsons: "Waveney Skylarks",
  dementia: "Music & Dementia", "wired-sounds": "Wired Sounds",
};

export default async function FindASessionPage() {
  const [header, sanitySessionsRaw, fetchedLocations] = await Promise.all([
    sanityFetch<typeof HEADER_FALLBACK>({ query: PAGE_HEADER_QUERY, params: { page: "find-a-session" } }),
    sanityFetch<typeof fallbackSessions>({ query: ALL_SESSIONS_QUERY }),
    sanityFetch<SessionLocation[]>({ query: SESSION_LOCATIONS_QUERY }),
  ]);

  const h         = header ?? HEADER_FALLBACK;
  const sessions  = (sanitySessionsRaw && sanitySessionsRaw.length > 0) ? sanitySessionsRaw : fallbackSessions;
  const locations = (fetchedLocations  && fetchedLocations.length  > 0) ? fetchedLocations  : LOCATIONS_FALLBACK;
  const uniqueVenues = locations.filter(
    (loc, i, arr) => arr.findIndex((l) => l.name === loc.name) === i,
  );

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
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

      {/* ── Online session ───────────────────────────────────────────────── */}
      <section className="py-16 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <SectionLabel>Online · Nationwide</SectionLabel>
            <span className="text-xs font-medium px-2.5 py-1 rounded-full" style={{ backgroundColor: "#e8f5f1", color: "#1D9E75" }}>
              Ongoing
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-start gap-4 p-5 rounded-lg" style={{ backgroundColor: "#f9f9f9", border: "1px solid rgba(0,0,0,0.08)" }} role="listitem">
            <div className="w-1 self-stretch rounded-full shrink-0" style={{ backgroundColor: "#F5A623", minHeight: 40 }} aria-hidden="true" />
            <div className="flex flex-col gap-3 flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-xs font-medium" style={{ color: "#F5A623" }}>Singing for Lung Health</p>
                <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: "#e8f5f1", color: "#1D9E75" }}>Online</span>
              </div>
              <p className="text-base font-black leading-snug" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>
                Asthma and Lung UK — Motivational Mondays
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="flex items-center gap-1.5 text-sm" style={{ color: "#1a1a1a" }}>
                  <IconCalendar size={14} style={{ color: "#888888" }} />
                  Every Monday · 10am – 10.30am
                </span>
                <span className="flex items-center gap-1.5 text-sm" style={{ color: "#444444" }}>
                  <IconMapPin size={14} style={{ color: "#888888" }} />
                  Online · Open to anyone across the UK · Free
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#444444" }}>
                A six-week introductory course followed by an ongoing weekly group. Helen leads these national online sessions on behalf of Asthma and Lung UK. If you cannot get to one of our in-person groups, or if you would like to try a session from the comfort of your own home first, this is a wonderful place to start.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── In-person session list ───────────────────────────────────────── */}
      <section className="py-16 px-6" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <SectionLabel>In-person sessions</SectionLabel>
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

      {/* ── Map ──────────────────────────────────────────────────────────── */}
      <section className="py-16 px-6" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <SectionLabel>Where you&apos;ll find us</SectionLabel>
            <h2 className="text-3xl font-black" style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}>Our session locations</h2>
            <p className="text-sm max-w-xl" style={{ color: "#888888" }}>
              Click any pin for venue details and what sessions run there.
            </p>
          </div>

          <div style={{ height: "480px", borderRadius: "0.5rem", overflow: "hidden" }}>
            <MapWrapper locations={locations} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {uniqueVenues.map((loc) => (
              <div key={loc._id} className="flex items-start gap-3 rounded-lg px-4 py-3" style={{ backgroundColor: "#2a2a2a", border: "1px solid rgba(255,255,255,0.08)" }}>
                <span className="mt-1.5 w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: "#F5A623" }} />
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium" style={{ color: "#ffffff" }}>{loc.name}</span>
                  {loc.address && <span className="text-xs" style={{ color: "#888888" }}>{loc.address}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ──────────────────────────────────────────────────── */}
      <section className="py-16 px-6" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-8">
          <div className="flex flex-col gap-2">
            <SectionLabel>Still have questions?</SectionLabel>
            <h2 className="text-3xl font-black" style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}>
              We&apos;d love to hear from you
            </h2>
            <p className="text-sm leading-relaxed max-w-lg" style={{ color: "#888888" }}>
              Not sure which session is right for you, or would you like to talk to someone before coming along? Get in touch and we will help you find the best place to start.
            </p>
          </div>
          <a
            href="/contact"
            className="shrink-0 px-6 py-3 rounded-lg text-sm font-medium transition-opacity hover:opacity-90 whitespace-nowrap"
            style={{ backgroundColor: "#F5A623", color: "#412402", fontFamily: "var(--font-body)" }}
          >
            Contact Swell →
          </a>
        </div>
      </section>
    </>
  );
}
