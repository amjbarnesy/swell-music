"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { IconX, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

export type GalleryImage = {
  _id: string;
  category: string;
  url: string;
  alt: string;
};

const CATEGORY_LABELS: Record<string, string> = {
  "lung-health":  "Singing for Lung Health",
  "parkinsons":   "Sing to Beat Parkinson's",
  "dementia":     "Music & Dementia",
  "wellbeing":    "Music for Wellbeing",
  "open-access":  "Open Access",
  "wired-sounds": "Wired Sounds",
  "general":      "General",
};

type Props = { images: GalleryImage[] };

export default function GalleryClient({ images }: Props) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex]   = useState<number | null>(null);

  // Build the ordered category list from what's actually in the data
  const categories = ["all", ...Array.from(new Set(images.map((i) => i.category)))];

  const filtered = activeCategory === "all"
    ? images
    : images.filter((i) => i.category === activeCategory);

  // ── Lightbox helpers ───────────────────────────────────────────────────────
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(() =>
    setLightboxIndex((n) => (n === null ? null : (n - 1 + filtered.length) % filtered.length)),
  [filtered.length]);
  const next = useCallback(() =>
    setLightboxIndex((n) => (n === null ? null : (n + 1) % filtered.length)),
  [filtered.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape")     closeLightbox();
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, closeLightbox, prev, next]);

  // Reset lightbox when filter changes
  useEffect(() => { setLightboxIndex(null); }, [activeCategory]);

  return (
    <>
      {/* ── Filter bar ──────────────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => {
          const isActive = cat === activeCategory;
          const label = cat === "all" ? "All photos" : (CATEGORY_LABELS[cat] ?? cat);
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-colors"
              style={{
                backgroundColor: isActive ? "#F5A623" : "transparent",
                color:           isActive ? "#412402" : "#888888",
                border:          isActive ? "1px solid #F5A623" : "1px solid rgba(0,0,0,0.15)",
                fontFamily:      "var(--font-body)",
              }}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* ── Image grid ──────────────────────────────────────────────────── */}
      {filtered.length === 0 ? (
        <p className="text-sm" style={{ color: "#888888" }}>No images in this category yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((img, idx) => (
            <button
              key={img._id}
              onClick={() => setLightboxIndex(idx)}
              className="relative w-full overflow-hidden rounded-lg group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              style={{ aspectRatio: "4/3" }}
              aria-label={`View: ${img.alt}`}
            >
              <Image
                src={img.url}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-3"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" }}
              >
                <p className="text-xs text-white line-clamp-2">{img.alt}</p>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* ── Lightbox ────────────────────────────────────────────────────── */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          style={{ backgroundColor: "rgba(0,0,0,0.9)" }}
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 p-2 rounded-full"
            style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#ffffff" }}
            onClick={closeLightbox}
            aria-label="Close"
          >
            <IconX size={20} />
          </button>

          {/* Prev */}
          {filtered.length > 1 && (
            <button
              className="absolute left-4 p-2 rounded-full"
              style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#ffffff" }}
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous image"
            >
              <IconChevronLeft size={24} />
            </button>
          )}

          {/* Image */}
          <div
            className="relative w-full max-w-4xl"
            style={{ maxHeight: "80vh", aspectRatio: "auto" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full" style={{ maxHeight: "80vh" }}>
              <Image
                src={filtered[lightboxIndex].url}
                alt={filtered[lightboxIndex].alt}
                width={1200}
                height={800}
                className="object-contain w-full"
                style={{ maxHeight: "80vh" }}
                priority
              />
            </div>
            {filtered[lightboxIndex].alt && (
              <p className="text-center text-sm mt-3" style={{ color: "#aaaaaa" }}>
                {filtered[lightboxIndex].alt}
              </p>
            )}
            <p className="text-center text-xs mt-1" style={{ color: "#555555" }}>
              {lightboxIndex + 1} / {filtered.length}
            </p>
          </div>

          {/* Next */}
          {filtered.length > 1 && (
            <button
              className="absolute right-4 p-2 rounded-full"
              style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#ffffff" }}
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next image"
            >
              <IconChevronRight size={24} />
            </button>
          )}
        </div>
      )}
    </>
  );
}
