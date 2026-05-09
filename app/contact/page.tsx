import { sanityFetch } from "@/sanity/lib/client";
import { SESSION_LOCATIONS_QUERY } from "@/sanity/lib/queries";
import SectionLabel from "@/components/ui/SectionLabel";
import ContactForm from "@/components/contact/ContactForm";
import MapWrapper from "@/components/contact/MapWrapper";
import { IconMail, IconPhone, IconBrandFacebook } from "@tabler/icons-react";
import type { SessionLocation } from "@/components/contact/SessionsMap";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Contact — Swell Music CIC",
  description: "Get in touch with Swell Music CIC. We'd love to hear from you.",
};

const LOCATIONS_FALLBACK: SessionLocation[] = [
  { _id: "1", name: "The Seagull Theatre",             address: "Morton Road, Lowestoft, NR33 0JH",        note: "Friday Music for Wellbeing · Open Access · Wired Sounds Festival", lat: 52.4548, lng: 1.7352 },
  { _id: "2", name: "Reydon Sports & Community Centre", address: "Near Southwold",                          note: "Singing for Lung Health — Tuesdays 10am–11.30am",                   lat: 52.3271, lng: 1.6612 },
  { _id: "3", name: "Pavilion Theatre & Bandstand",     address: "Gorleston",                               note: "Singing for Lung Health — alternate Wednesdays",                    lat: 52.5716, lng: 1.7328 },
  { _id: "4", name: "Shrublands Community Trust",       address: "Gorleston",                               note: "Singing for Lung Health & Open Access — alternate Wednesdays",     lat: 52.5783, lng: 1.7246 },
  { _id: "5", name: "First Light — Battery of Ideas",   address: "London Road North, Lowestoft",            note: "Community singing pop-up sessions",                                 lat: 52.4793, lng: 1.7452 },
  { _id: "6", name: "Halesworth Community Centre",      address: "Quay Street, Halesworth, IP19 8ET",       note: "Community singing & accessible carol services",                     lat: 52.3493, lng: 1.5068 },
];

export default async function ContactPage() {
  const fetched = await sanityFetch<SessionLocation[]>({ query: SESSION_LOCATIONS_QUERY });
  const locations = fetched && fetched.length > 0 ? fetched : LOCATIONS_FALLBACK;

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#1a1a1a" }} className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-5">
          <SectionLabel>Get in touch</SectionLabel>
          <h1 className="text-4xl sm:text-5xl font-black" style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}>
            Contact us
          </h1>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: "#aaaaaa" }}>
            Whether you want to come along to a session, refer a friend or family member, explore a funding or partnership opportunity, or just find out more about what we do — we would love to hear from you. All of our community sessions are free and no booking is required, but if you have any questions before coming along, just drop us a message and we will get back to you within two working days.
          </p>
        </div>
      </section>

      {/* ── Form + Contact details ────────────────────────────────────────── */}
      <section className="py-16 px-6" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Form — takes up 2/3 */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <SectionLabel>Send a message</SectionLabel>
              <h2 className="text-2xl font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>Write to us</h2>
            </div>
            <ContactForm />
          </div>

          {/* Contact details — takes up 1/3 */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <SectionLabel>Other ways to reach us</SectionLabel>
              <h2 className="text-2xl font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>Direct contact</h2>
            </div>

            <div className="flex flex-col gap-5">
              <a href="mailto:info@swellmusic.org.uk" className="flex items-start gap-3 group">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: "#FEF3D7" }}>
                  <IconMail size={18} style={{ color: "#854F0B" }} />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium" style={{ color: "#888888" }}>Email</span>
                  <span className="text-sm font-medium group-hover:underline" style={{ color: "#1a1a1a" }}>info@swellmusic.org.uk</span>
                </div>
              </a>

              <a href="tel:+447917799456" className="flex items-start gap-3 group">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: "#FEF3D7" }}>
                  <IconPhone size={18} style={{ color: "#854F0B" }} />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium" style={{ color: "#888888" }}>Phone</span>
                  <span className="text-sm font-medium group-hover:underline" style={{ color: "#1a1a1a" }}>07917 799456</span>
                </div>
              </a>

              <a
                href="https://www.facebook.com/Swell-Music-CIC-100595698557837"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: "#FEF3D7" }}>
                  <IconBrandFacebook size={18} style={{ color: "#854F0B" }} />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium" style={{ color: "#888888" }}>Facebook</span>
                  <span className="text-sm font-medium group-hover:underline" style={{ color: "#1a1a1a" }}>Swell Music CIC</span>
                </div>
              </a>
            </div>

            {/* What to expect */}
            <div className="rounded-lg p-5 flex flex-col gap-3" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}>
              <h3 className="text-sm font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>What to expect</h3>
              <ul className="flex flex-col gap-2">
                {[
                  "We respond within two working days",
                  "All sessions are free — no need to book",
                  "No musical experience required",
                  "Everyone is warmly welcome",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "#444444" }}>
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#F5A623" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
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
              We run free sessions across Suffolk and Norfolk. Click any pin for details.
            </p>
          </div>

          {/* Map */}
          <div style={{ height: "480px", borderRadius: "0.5rem", overflow: "hidden" }}>
            <MapWrapper locations={locations} />
          </div>

          {/* Location chips — driven by the same Sanity data */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {locations.map((loc) => (
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
    </>
  );
}
