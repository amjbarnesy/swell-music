import { sanityFetch } from "@/sanity/lib/client";
import { WIRED_SOUNDS_PAGE_QUERY } from "@/sanity/lib/queries";
import ProgrammeHero from "@/components/programme/ProgrammeHero";
import SectionLabel from "@/components/ui/SectionLabel";
import QuoteBlock from "@/components/ui/QuoteBlock";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import GalleryLightbox from "@/components/ui/GalleryLightbox";
import { IconVolume, IconUsers, IconStar, IconPlayerPlay } from "@tabler/icons-react";
import type { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Wired Sounds Festival — Swell Music CIC",
  description:
    "An annual neurodivergent-friendly music festival celebrating neurodiverse creativity. 12 artists performed in 2025.",
};

// ─── YouTube embed helper ─────────────────────────────────────────────────────
function getYouTubeEmbedUrl(url: string): string | null {
  try {
    const u = new URL(url);
    let id: string | null = null;
    if (u.hostname === "youtu.be") {
      id = u.pathname.slice(1);
    } else if (u.hostname.includes("youtube.com")) {
      id = u.searchParams.get("v");
    }
    return id
      ? `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1&showinfo=0&iv_load_policy=3`
      : null;
  } catch {
    return null;
  }
}

// ─── Portable text components ─────────────────────────────────────────────────
const ptComponents = {
  block: {
    normal:     ({ children }: any) => <p className="text-sm leading-relaxed mb-3" style={{ color: "#444444" }}>{children}</p>,
    h2:         ({ children }: any) => <h2 className="text-3xl font-black mt-8 mb-3" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>{children}</h2>,
    h3:         ({ children }: any) => <h3 className="text-lg font-bold mt-5 mb-2" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>{children}</h3>,
    blockquote: ({ children }: any) => <blockquote className="border-l-4 pl-4 italic my-4 text-sm" style={{ borderColor: "#D85A30", color: "#444444" }}>{children}</blockquote>,
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc list-inside space-y-1 mb-3 text-sm" style={{ color: "#444444" }}>{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal list-inside space-y-1 mb-3 text-sm" style={{ color: "#444444" }}>{children}</ol>,
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-semibold">{children}</strong>,
    em:     ({ children }: any) => <em className="italic">{children}</em>,
    link:   ({ value, children }: any) => (
      <a href={value?.href} className="underline hover:opacity-75" style={{ color: "#D85A30" }}
        target={value?.href?.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
};

const features = [
  { icon: IconVolume, title: "Low-sensory environment",  description: "Carefully designed to reduce sensory overwhelm — adjusted lighting, clear spaces, and a relaxed atmosphere throughout." },
  { icon: IconStar,   title: "Neurodivergent artists",   description: "Wired Sounds exists to platform musicians whose work deserves a stage — 12 artists performed in 2025." },
  { icon: IconUsers,  title: "Inclusive audience",       description: "A festival designed for everyone, with a particular welcome for neurodivergent attendees and their families." },
];

interface WiredSoundsData {
  videoUrl?: string;
  gallery?: Array<{ url: string; alt?: string }>;
  bodyHeading?: string;
  body?: unknown[];
}

export default async function WiredSoundsPage() {
  const cms = await sanityFetch<WiredSoundsData>({ query: WIRED_SOUNDS_PAGE_QUERY }) ?? {};

  const embedUrl   = cms.videoUrl ? getYouTubeEmbedUrl(cms.videoUrl) : null;
  const hasGallery = cms.gallery && cms.gallery.length > 0;
  const hasBody    = cms.bodyHeading || (cms.body && cms.body.length > 0);

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

      {/* YouTube video */}
      <section className="py-16 px-6" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="max-w-7xl mx-auto">
          {embedUrl ? (
            <div className="relative rounded-lg overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <iframe
                src={embedUrl}
                title="Wired Sounds Festival video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          ) : (
            <div
              className="relative flex items-center justify-center rounded-lg"
              style={{ aspectRatio: "16/9", border: "2px dashed #D85A30", backgroundColor: "#2a2a2a" }}
            >
              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: "#D85A30" }}>
                  <IconPlayerPlay size={24} color="#fff" />
                </div>
                <p className="text-sm" style={{ color: "#888888" }}>Festival video — add a YouTube link in the CMS</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* What makes it different */}
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

      {/* Gallery — up to 12 photos */}
      {hasGallery && (
        <section className="py-16 px-6" style={{ backgroundColor: "#1a1a1a" }}>
          <div className="max-w-7xl mx-auto flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <SectionLabel>In the room</SectionLabel>
              <h2 className="text-3xl font-black" style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}>Festival gallery</h2>
            </div>
            <GalleryLightbox images={cms.gallery!} postTitle="Wired Sounds Festival" columns={3} gridAspectRatio="4/3" />
          </div>
        </section>
      )}

      {/* Additional body content */}
      {hasBody && (
        <section className="py-16 px-6" style={{ backgroundColor: "#f9f9f9" }}>
          <div className="max-w-7xl mx-auto flex flex-col gap-8">
            {cms.bodyHeading && (
              <h2 className="text-3xl font-black" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>
                {cms.bodyHeading}
              </h2>
            )}
            {cms.body && cms.body.length > 0 && (
              <div className="sm:columns-2 gap-12 [&>*]:break-inside-avoid">
                <PortableText value={cms.body as any} components={ptComponents} />
              </div>
            )}
          </div>
        </section>
      )}

      {/* Quotes */}
      <section className="py-16 px-6" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <QuoteBlock quote="Finally a festival where I don't have to mask. I was just me, and the music was extraordinary." attribution="Wired Sounds 2025 attendee" />
          <QuoteBlock quote="Performing here meant everything. This is the only stage I've played where the audience really gets it." attribution="Wired Sounds 2025 artist" />
        </div>
      </section>

      {/* CTAs */}
      <section className="py-10 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4">
          <Button href="/contact" variant="primary">Get involved in 2026</Button>
          <Button href="/support-us" variant="ghost" className="!text-ink !border-ink/30">Support the festival</Button>
        </div>
      </section>
    </>
  );
}
