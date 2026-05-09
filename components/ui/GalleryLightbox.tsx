"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface GalleryImage {
  url: string;
  alt?: string;
}

interface GalleryLightboxProps {
  images: GalleryImage[];
  postTitle?: string;
  columns?: 2 | 3;
  gridAspectRatio?: string;
}

export default function GalleryLightbox({
  images,
  postTitle,
  columns = 3,
  gridAspectRatio = "4/3",
}: GalleryLightboxProps) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () => setActive((i) => (i !== null ? (i - 1 + images.length) % images.length : null)),
    [images.length],
  );
  const next = useCallback(
    () => setActive((i) => (i !== null ? (i + 1) % images.length : null)),
    [images.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, prev, next]);

  return (
    <>
      {/* Grid */}
      <div
        className={`grid gap-3 ${
          columns === 3 ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-2"
        }`}
      >
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="relative rounded-lg overflow-hidden cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            style={{ aspectRatio: gridAspectRatio }}
            aria-label={img.alt ?? `Open photo ${i + 1}`}
          >
            <Image
              src={img.url}
              alt={img.alt ?? `${postTitle ?? "Gallery"} photo ${i + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes={
                columns === 3
                  ? "(max-width: 640px) 50vw, 33vw"
                  : "50vw"
              }
            />
            {/* hover tint + zoom icon */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="11" y1="8" x2="11" y2="14" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox overlay */}
      {active !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.92)" }}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
        >
          {/* Close button */}
          <button
            onClick={close}
            className="absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full text-white transition-colors"
            style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
                "rgba(255,255,255,0.25)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
                "rgba(255,255,255,0.15)")
            }
            aria-label="Close lightbox"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Prev button */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-11 h-11 rounded-full text-white transition-colors"
              style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  "rgba(255,255,255,0.25)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  "rgba(255,255,255,0.15)")
              }
              aria-label="Previous photo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}

          {/* Image */}
          <div
            className="relative"
            style={{
              width: "min(92vw, 1100px)",
              height: "min(82vh, 760px)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[active].url}
              alt={images[active].alt ?? `Photo ${active + 1}`}
              fill
              className="object-contain"
              sizes="min(92vw, 1100px)"
              priority
            />
          </div>

          {/* Next button */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-11 h-11 rounded-full text-white transition-colors"
              style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  "rgba(255,255,255,0.25)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  "rgba(255,255,255,0.15)")
              }
              aria-label="Next photo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}

          {/* Counter */}
          <p
            className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm tabular-nums"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            {active + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}
