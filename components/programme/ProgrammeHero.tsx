import Badge from "@/components/ui/Badge";
import Image from "next/image";

type BadgeColour = "amber" | "teal" | "purple" | "coral";

interface ProgrammeHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  accentColour: string;
  accentText: string;
  badgeLabel: string;
  badgeColour: BadgeColour;
  accreditation?: string;
  /** Optional programme logo shown to the right on desktop */
  logoSrc?: string;
}

export default function ProgrammeHero({
  eyebrow,
  title,
  description,
  accentColour,
  accentText,
  badgeLabel,
  badgeColour,
  accreditation,
  logoSrc,
}: ProgrammeHeroProps) {
  return (
    <section style={{ backgroundColor: "#1a1a1a" }} className="py-20 px-6">
      <div
        className={`max-w-7xl mx-auto ${
          logoSrc
            ? "grid grid-cols-1 lg:grid-cols-[1fr_auto] lg:items-center gap-10 lg:gap-16"
            : "flex flex-col"
        } gap-5`}
      >
        {/* Text content */}
        <div className="flex flex-col gap-5">
          <div
            className="inline-block self-start px-4 py-2 rounded"
            style={{ backgroundColor: accentColour }}
          >
            <p
              className="text-xs tracking-widest uppercase font-medium"
              style={{ color: accentText, fontFamily: "var(--font-body)" }}
            >
              {eyebrow}
            </p>
          </div>
          <h1
            className="text-4xl sm:text-5xl font-black"
            style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}
          >
            {title}
          </h1>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: "#888888" }}>
            {description}
          </p>
          <div className="flex flex-wrap gap-3 mt-2">
            <Badge colour={badgeColour}>{badgeLabel}</Badge>
            {accreditation && (
              <Badge colour="default">{accreditation}</Badge>
            )}
          </div>
        </div>

        {/* Programme logo */}
        {logoSrc && (
          <div className="flex items-center justify-start lg:justify-end">
            <Image
              src={logoSrc}
              alt={`${eyebrow} logo`}
              width={320}
              height={132}
              className="w-56 sm:w-72 lg:w-80 h-auto"
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
}
