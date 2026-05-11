"use client";

import { useState, useEffect } from "react";

const SIZES   = [14, 16, 18, 20];
const DEFAULT = 1; // 16px
const KEY     = "swell-font-size";

export default function FontSizeControls() {
  const [idx, setIdx] = useState(DEFAULT);

  useEffect(() => {
    const saved = localStorage.getItem(KEY);
    if (saved !== null) {
      const i = SIZES.indexOf(Number(saved));
      if (i !== -1) {
        setIdx(i);
        document.documentElement.style.fontSize = `${SIZES[i]}px`;
      }
    }
  }, []);

  function change(delta: number) {
    const next = Math.max(0, Math.min(SIZES.length - 1, idx + delta));
    if (next === idx) return;
    setIdx(next);
    document.documentElement.style.fontSize = `${SIZES[next]}px`;
    localStorage.setItem(KEY, String(SIZES[next]));
  }

  return (
    <div
      className="fixed bottom-5 right-5 z-40 flex items-center gap-0 rounded-full shadow-lg"
      style={{
        backgroundColor: "#1a1a1a",
        border: "1px solid rgba(255,255,255,0.12)",
      }}
      aria-label="Text size"
    >
      <button
        onClick={() => change(-1)}
        disabled={idx === 0}
        aria-label="Decrease text size"
        className="rounded-l-full px-3 py-2 transition-colors"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "11px",
          color: idx === 0 ? "#444444" : "#888888",
          background: "none",
          border: "none",
          cursor: idx === 0 ? "default" : "pointer",
          lineHeight: 1,
        }}
        onMouseEnter={(e) => { if (idx > 0) (e.currentTarget as HTMLElement).style.color = "#F5A623"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = idx === 0 ? "#444444" : "#888888"; }}
      >
        A
      </button>

      <span style={{ color: "#333333", fontSize: "10px", userSelect: "none" }}>|</span>

      <button
        onClick={() => change(1)}
        disabled={idx === SIZES.length - 1}
        aria-label="Increase text size"
        className="rounded-r-full px-3 py-2 transition-colors"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "15px",
          color: idx === SIZES.length - 1 ? "#444444" : "#888888",
          background: "none",
          border: "none",
          cursor: idx === SIZES.length - 1 ? "default" : "pointer",
          lineHeight: 1,
        }}
        onMouseEnter={(e) => { if (idx < SIZES.length - 1) (e.currentTarget as HTMLElement).style.color = "#F5A623"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = idx === SIZES.length - 1 ? "#444444" : "#888888"; }}
      >
        A
      </button>
    </div>
  );
}
