import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Volunteer — Swell Music CIC",
  description: "Volunteer with Swell Music CIC and help bring music to people who need it most.",
};

export default function VolunteerPage() {
  return (
    <section className="hero-bg py-20 px-6 min-h-[60vh]">
      <div className="max-w-7xl mx-auto flex flex-col gap-5">
        <SectionLabel>Give your time</SectionLabel>
        <h1 className="text-4xl sm:text-5xl font-black" style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}>
          Volunteer with us
        </h1>
        <p className="text-base leading-relaxed max-w-xl" style={{ color: "#888888" }}>
          We&rsquo;re always looking for warm, enthusiastic volunteers to help at sessions.
          No musical experience needed — just a willingness to support our participants.
        </p>
        <div className="mt-2">
          <Button href="/contact" variant="primary">Get in touch</Button>
        </div>
      </div>
    </section>
  );
}
