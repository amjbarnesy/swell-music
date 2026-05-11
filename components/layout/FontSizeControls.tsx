"use client";

import { useState, useEffect } from "react";

const SIZES  = [14, 16, 18, 20]; // px — four steps
const DEFAULT = 1;                // index of 16px
const KEY     = "swell-font-size";

export default function FontSizeControls() {
  const [idx, setIdx] = useState(DEFAULT);

  // Apply saved preference on mount
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

  const btnBase: React.CSSProperties = {
    fontFamily:  "var(--font-body)",
    lineHeight:  1,
    transition:  "color 0.15s, opacity 0.15s",
    cursor:      "pointer",
    background:  "none",
    border:      "none",
    padding:     "2px 4px",
  };

  return (
    <div className="flex items-center gap-0.5" aria-label="Text size">
      <button
        onClick={() => change(-1)}
        disabled={idx === 0}
        aria-label="Decrease text size"
        style={{ ...btnBase, fontSize: "11px", color: idx === 0 ? "#444444" : "#888888" }}
        onMouseEnter={(e) => { if (idx > 0) (e.currentTarget as HTMLElement).style.color = "#F5A623"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = idx === 0 ? "#444444" : "#888888"; }}
      >
        A
      </button>
      <span style={{ color: "#333333", fontSize: "10px" }}>|</span>
      <button
        onClick={() => change(1)}
        disabled={idx === SIZES.length - 1}
        aria-label="Increase text size"
        style={{ ...btnBase, fontSize: "14px", color: idx === SIZES.length - 1 ? "#444444" : "#888888" }}
        onMouseEnter={(e) => { if (idx < SIZES.length - 1) (e.currentTarget as HTMLElement).style.color = "#F5A623"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = idx === SIZES.length - 1 ? "#444444" : "#888888"; }}
      >
        A
      </button>
    </div>
  );
}
