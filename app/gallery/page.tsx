import { sanityFetch } from "@/sanity/lib/client";
import { GALLERY_IMAGES_QUERY } from "@/sanity/lib/queries";
import GalleryClient, { type GalleryImage } from "@/components/gallery/GalleryClient";
import SectionLabel from "@/components/ui/SectionLabel";
import type { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Gallery — Swell Music CIC",
  description: "Photos from our Singing for Lung Health, Parkinson's, Dementia and Wellbeing sessions across Suffolk.",
};

export default async function GalleryPage() {
  const images = await sanityFetch<GalleryImage[]>({ query: GALLERY_IMAGES_QUERY });

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="hero-bg py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-5">
          <SectionLabel>Our community</SectionLabel>
          <h1 className="text-4xl sm:text-5xl font-black" style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}>
            Gallery
          </h1>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: "#aaaaaa" }}>
            A glimpse into our sessions — the music, the people, and the moments that make Swell Music what it is.
          </p>
        </div>
      </section>

      {/* ── Gallery ───────────────────────────────────────────────────────── */}
      <section className="py-16 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto">
          {!images || images.length === 0 ? (
            <p className="text-sm" style={{ color: "#888888" }}>
              No photos uploaded yet — check back soon.
            </p>
          ) : (
            <GalleryClient images={images} />
          )}
        </div>
      </section>
    </>
  );
}
