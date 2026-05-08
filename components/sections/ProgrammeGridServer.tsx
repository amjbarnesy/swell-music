import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import Badge from "@/components/ui/Badge";
import {
  IconLungs,
  IconAccessible,
  IconBrain,
  IconMusic,
  IconHeart,
  IconUsers,
  IconStar,
  type Icon,
} from "@tabler/icons-react";

// ─── Theme map ────────────────────────────────────────────────────────────────
type Theme = "amber" | "teal" | "purple" | "coral" | "blue" | "green";
type BadgeColour = "amber" | "teal" | "purple" | "coral" | "default";

const THEME: Record<Theme, { header: string; text: string; badge: BadgeColour }> = {
  amber:  { header: "#F5A623", text: "#412402", badge: "amber" },
  teal:   { header: "#1D9E75", text: "#085041", badge: "teal" },
  purple: { header: "#7F77DD", text: "#3C3489", badge: "purple" },
  coral:  { header: "#D85A30", text: "#712B13", badge: "coral" },
  blue:   { header: "#3B82F6", text: "#1e3a8a", badge: "default" },
  green:  { header: "#22C55E", text: "#14532d", badge: "teal" },
};

// ─── Icon map ─────────────────────────────────────────────────────────────────
const ICON_MAP: Record<string, Icon> = {
  lungs:      IconLungs,
  accessible: IconAccessible,
  brain:      IconBrain,
  music:      IconMusic,
  heart:      IconHeart,
  users:      IconUsers,
  star:       IconStar,
};

// ─── Types ────────────────────────────────────────────────────────────────────
export interface ProgrammeData {
  _id: string;
  title: string;
  slug: string;
  shortDescription?: string;
  badgeLabel?: string;
  theme?: string;
  iconName?: string;
}

// ─── Fallback data (no Sanity yet) ────────────────────────────────────────────
const FALLBACK: ProgrammeData[] = [
  {
    _id: "lung-health",
    title: "Singing for Lung Health",
    slug: "lung-health",
    shortDescription:
      "BLF-accredited group singing to strengthen breathing, reduce isolation, and improve quality of life for people with COPD and other lung conditions.",
    badgeLabel: "Lung conditions",
    theme: "amber",
    iconName: "lungs",
  },
  {
    _id: "parkinsons",
    title: "Waveney Skylarks",
    slug: "parkinsons",
    shortDescription:
      "Sing to Beat Parkinson's sessions in Halesworth and Lowestoft — evidence-based singing to help manage motor symptoms and boost wellbeing.",
    badgeLabel: "Parkinson's disease",
    theme: "teal",
    iconName: "accessible",
  },
  {
    _id: "dementia",
    title: "Music & Dementia",
    slug: "dementia",
    shortDescription:
      "Weekly music sessions at The Seagull Theatre for people living with dementia and their carers — connecting through melody and memory.",
    badgeLabel: "Dementia",
    theme: "purple",
    iconName: "brain",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function ProgrammeGridServer({
  programmes,
}: {
  programmes: ProgrammeData[] | null;
}) {
  const items = programmes && programmes.length > 0 ? programmes : FALLBACK;

  return (
    <section className="py-16 px-6" style={{ backgroundColor: "#f9f9f9" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-2 mb-10">
          <SectionLabel>What we do</SectionLabel>
          <h2
            className="text-3xl sm:text-4xl font-black"
            style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}
          >
            Our programmes
          </h2>
          <p className="text-base max-w-xl" style={{ color: "#444444" }}>
            Specialised programmes, each designed around the unique needs of a different community.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((p) => {
            const themeKey = (p.theme ?? "amber") as Theme;
            const colours = THEME[themeKey] ?? THEME.amber;
            const IconComponent = ICON_MAP[p.iconName ?? "music"] ?? IconMusic;

            return (
              <Link
                key={p._id}
                href={`/our-work/${p.slug}`}
                className="flex flex-col rounded-lg overflow-hidden transition-opacity hover:opacity-90"
                style={{ border: "1px solid rgba(0,0,0,0.08)" }}
              >
                {/* Coloured header band */}
                <div
                  className="px-5 py-4 flex items-center gap-3"
                  style={{ backgroundColor: colours.header }}
                >
                  <IconComponent size={22} style={{ color: colours.text }} />
                  <span
                    className="text-base font-bold"
                    style={{ color: colours.text, fontFamily: "var(--font-display)" }}
                  >
                    {p.title}
                  </span>
                </div>

                {/* Card body */}
                <div className="px-5 py-5 flex flex-col gap-3 flex-1 bg-white">
                  {p.shortDescription && (
                    <p className="text-sm leading-relaxed" style={{ color: "#444444" }}>
                      {p.shortDescription}
                    </p>
                  )}
                  {p.badgeLabel && (
                    <Badge colour={colours.badge}>{p.badgeLabel}</Badge>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
