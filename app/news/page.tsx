import SectionLabel from "@/components/ui/SectionLabel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News — Swell Music CIC",
  description: "Latest news and updates from Swell Music CIC.",
};

export default function NewsPage() {
  return (
    <section style={{ backgroundColor: "#1a1a1a" }} className="py-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col gap-5">
        <SectionLabel>Latest</SectionLabel>
        <h1 className="text-4xl sm:text-5xl font-black" style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}>
          News
        </h1>
        <p className="text-base" style={{ color: "#888888" }}>
          News posts will appear here once connected to Sanity CMS.
        </p>
      </div>
    </section>
  );
}
