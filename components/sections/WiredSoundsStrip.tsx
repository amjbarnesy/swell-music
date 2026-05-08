import Link from "next/link";
import { IconArrowRight, IconMusic } from "@tabler/icons-react";
import SectionLabel from "@/components/ui/SectionLabel";

export default function WiredSoundsStrip() {
  return (
    <section className="py-16 px-6" style={{ backgroundColor: "#1a1a1a" }}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-8">

        {/* Icon badge */}
        <div
          className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: "#D85A30" }}
        >
          <IconMusic size={28} color="#fff" />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-2 flex-1">
          <SectionLabel>Something different</SectionLabel>
          <h2
            className="text-2xl sm:text-3xl font-black"
            style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}
          >
            Wired Sounds Festival
          </h2>
          <p className="text-sm leading-relaxed max-w-xl" style={{ color: "#888888" }}>
            An annual neurodivergent-friendly music festival — low-sensory, welcoming, and
            celebrating neurodiverse creativity. 12 artists performed in 2025.
          </p>
        </div>

        {/* CTA */}
        <Link
          href="/our-work/wired-sounds"
          className="flex-shrink-0 flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold transition-opacity hover:opacity-80"
          style={{ backgroundColor: "#D85A30", color: "#ffffff", fontFamily: "var(--font-body)" }}
        >
          Find out more
          <IconArrowRight size={16} />
        </Link>

      </div>
    </section>
  );
}
