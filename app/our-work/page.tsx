import { sanityFetch } from "@/sanity/lib/client";
import { PROGRAMMES_QUERY } from "@/sanity/lib/queries";
import { ProgrammesSectionServer } from "@/components/programmes/ProgrammesSectionServer";
import type { ProgrammeData } from "@/components/sections/ProgrammeGridServer";
import WiredSoundsStrip from "@/components/sections/WiredSoundsStrip";
import SectionLabel from "@/components/ui/SectionLabel";
import type { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Our Work — Swell Music CIC",
  description:
    "Programmes bringing the healing power of music to people living with lung conditions, Parkinson's, dementia, and neurodivergent communities.",
};

export default async function OurWorkPage() {
  const programmes = await sanityFetch<ProgrammeData[]>({ query: PROGRAMMES_QUERY });

  return (
    <>
      {/* Page header */}
      <section className="hero-bg py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-3">
          <SectionLabel>What we do</SectionLabel>
          <h1
            className="text-4xl sm:text-5xl font-black"
            style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}
          >
            Our work
          </h1>
          <p className="text-base leading-relaxed max-w-xl" style={{ color: "#888888" }}>
            Specialist programmes, grounded in clinical evidence, delivered by
            trained practitioners across Suffolk and Norfolk.
          </p>
        </div>
      </section>

      {/* Programme grid — same as homepage */}
      <ProgrammesSectionServer programmes={programmes} />

      {/* Wired Sounds strip — same as homepage */}
      <WiredSoundsStrip />
    </>
  );
}
