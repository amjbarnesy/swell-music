import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import { IconPlayerPlay } from "@tabler/icons-react";

export default function Hero() {
  return (
    <section style={{ backgroundColor: "#1a1a1a" }} className="pt-16 pb-0">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="flex flex-col gap-6">
          <SectionLabel>East Suffolk · Free for all</SectionLabel>
          <h1
            className="text-4xl sm:text-5xl font-black leading-tight"
            style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}
          >
            Music that{" "}
            <span style={{ color: "#F5A623" }}>heals</span>,<br />
            connects, and<br />
            changes lives.
          </h1>
          <p className="text-base leading-relaxed max-w-md" style={{ color: "#888888" }}>
            Free weekly sessions for people living with lung conditions, Parkinson&rsquo;s,
            dementia, and neurodivergent communities across Suffolk and Norfolk. No experience
            needed. Always free.
          </p>
          <div className="flex flex-wrap gap-3 mt-2">
            <Button href="/get-involved/find-a-session" variant="primary">
              Find a session near me
            </Button>
            <Button href="/our-impact" variant="ghost">
              See our impact
            </Button>
          </div>
        </div>

        {/* Right — video placeholder */}
        <div
          className="relative flex items-center justify-center rounded-lg overflow-hidden"
          style={{
            aspectRatio: "16/9",
            border: "2px dashed #F5A623",
            backgroundColor: "#2a2a2a",
          }}
        >
          <div className="flex flex-col items-center gap-3 text-center px-8">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#F5A623" }}
            >
              <IconPlayerPlay size={24} style={{ color: "#412402" }} />
            </div>
            <p className="text-sm font-medium" style={{ color: "#888888" }}>
              Real session footage
            </p>
          </div>
        </div>
      </div>

      {/* Stat bar */}
      <div
        className="w-full py-4 px-6"
        style={{ backgroundColor: "#F5A623" }}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          {[
            "5+ free weekly sessions",
            "4 health conditions",
            "Free always, no booking",
            "Founded 2020",
          ].map((stat) => (
            <p
              key={stat}
              className="text-sm font-medium"
              style={{ color: "#412402", fontFamily: "var(--font-body)" }}
            >
              {stat}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
