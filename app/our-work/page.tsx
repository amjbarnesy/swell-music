import ProgrammeGrid from "@/components/sections/ProgrammeGrid";
import SectionLabel from "@/components/ui/SectionLabel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work — Swell Music CIC",
  description:
    "Four programmes bringing the healing power of music to people living with lung conditions, Parkinson's, dementia, and neurodivergent communities.",
};

export default function OurWorkPage() {
  return (
    <>
      <section style={{ backgroundColor: "#1a1a1a" }} className="py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-3">
          <SectionLabel>What we do</SectionLabel>
          <h1
            className="text-4xl sm:text-5xl font-black"
            style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}
          >
            Our work
          </h1>
          <p className="text-base leading-relaxed max-w-xl" style={{ color: "#888888" }}>
            Four specialist programmes, grounded in clinical evidence, delivered by
            trained practitioners across Suffolk and Norfolk.
          </p>
        </div>
      </section>
      <ProgrammeGrid />
    </>
  );
}
