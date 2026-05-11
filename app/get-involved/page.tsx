import GetInvolvedGrid from "@/components/sections/GetInvolvedGrid";
import SectionLabel from "@/components/ui/SectionLabel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Involved — Swell Music CIC",
  description: "Join a session, refer someone, or support our work.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <section className="hero-bg py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-3">
          <SectionLabel>Take part</SectionLabel>
          <h1 className="text-4xl sm:text-5xl font-black" style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}>
            Get involved
          </h1>
        </div>
      </section>
      <GetInvolvedGrid />
    </>
  );
}
