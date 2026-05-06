import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import FunderBar from "@/components/sections/FunderBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Us — Swell Music CIC",
  description: "Help Swell Music CIC keep sessions free for everyone who needs them.",
};

export default function SupportUsPage() {
  return (
    <>
      <section style={{ backgroundColor: "#1a1a1a" }} className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-5">
          <SectionLabel>Make a difference</SectionLabel>
          <h1 className="text-4xl sm:text-5xl font-black" style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}>
            Support our work
          </h1>
          <p className="text-base leading-relaxed max-w-xl" style={{ color: "#888888" }}>
            Every session is free because of the generosity of funders and supporters like you.
            Help us keep it that way.
          </p>
          <div className="flex flex-wrap gap-3 mt-2">
            <Button href="/contact" variant="primary">Get in touch</Button>
            <Button href="/get-involved/volunteer" variant="ghost">Volunteer with us</Button>
          </div>
        </div>
      </section>
      <FunderBar />
    </>
  );
}
