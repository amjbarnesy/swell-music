"use client";

import { useEffect, useRef, useState } from "react";

interface OutcomeBar {
  _id: string;
  label: string;
  value: number;
  unit: string;
  description?: string | null;
  programme?: string | null;
}

const COLOUR_MAP: Record<string, string> = {
  "lung-health":  "#F5A623",
  parkinsons:     "#1D9E75",
  dementia:       "#7F77DD",
  "wired-sounds": "#D85A30",
  all:            "#F5A623",
};

export default function AnimatedOutcomeBars({ bars }: { bars: OutcomeBar[] }) {
  const ref       = useRef<HTMLDivElement>(null);
  const [go, setGo] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setGo(true); observer.disconnect(); } },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-col gap-8">
      {bars.map((o, i) => {
        const colour = COLOUR_MAP[o.programme ?? "all"] ?? "#F5A623";
        return (
          <div key={o._id} className="flex flex-col gap-2">
            <div className="flex items-center justify-between gap-4">
              <span className="text-base font-medium" style={{ color: "#1a1a1a" }}>{o.label}</span>
              <span
                className="text-2xl font-black shrink-0"
                style={{ fontFamily: "var(--font-display)", color: colour }}
              >
                {o.value}{o.unit}
              </span>
            </div>
            <div
              className="h-3 rounded-full overflow-hidden"
              style={{ backgroundColor: "#e5e7eb" }}
              role="progressbar"
              aria-valuenow={o.value}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${o.label}: ${o.value}${o.unit}`}
            >
              <div
                className="h-full rounded-full"
                style={{
                  width: go ? `${o.value}%` : "0%",
                  backgroundColor: colour,
                  transition: `width 1.1s cubic-bezier(0.4,0,0.2,1) ${i * 120}ms`,
                }}
              />
            </div>
            {o.description && (
              <p className="text-xs" style={{ color: "#888888" }}>Source: {o.description}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
