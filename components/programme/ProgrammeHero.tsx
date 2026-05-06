import Badge from "@/components/ui/Badge";

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
}: ProgrammeHeroProps) {
  return (
    <section style={{ backgroundColor: "#1a1a1a" }} className="py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-5">
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
    </section>
  );
}
