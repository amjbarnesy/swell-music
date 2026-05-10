/**
 * Server-side adapter: maps Sanity `ProgrammeData` records → the `Programme`
 * type that `ProgrammesSection` expects.
 *
 * Colours and location strings are hardcoded here (Option 1).
 * When the Sanity schema gains `color`, `colorSoft`, `colorDeep`, and
 * `location` fields, replace the lookup maps with the Sanity values directly.
 */

import type { ProgrammeData } from "@/components/sections/ProgrammeGridServer";
import { ProgrammesSection } from "./ProgrammesSection";
import type { Programme, ProgrammeIconKey } from "./types";

// ─── Colour palettes keyed by Sanity `theme` value ────────────────────────────
const COLOUR_MAP: Record<string, { color: string; colorSoft: string; colorDeep: string }> = {
  amber:  { color: "#F5A623", colorSoft: "#fde9bb", colorDeep: "#412402" },
  teal:   { color: "#1D9E75", colorSoft: "#c7e6d8", colorDeep: "#085041" },
  purple: { color: "#7F77DD", colorSoft: "#e1dcf7", colorDeep: "#3C3489" },
  coral:  { color: "#D85A30", colorSoft: "#faece7", colorDeep: "#712B13" },
  blue:   { color: "#3B82F6", colorSoft: "#dbeafe", colorDeep: "#1e3a8a" },
  green:  { color: "#22C55E", colorSoft: "#dcfce7", colorDeep: "#14532d" },
};

// ─── Icon key translation ──────────────────────────────────────────────────────
// Sanity uses Tabler icon names; the new components use custom SVG keys.
const ICON_KEY_MAP: Record<string, ProgrammeIconKey> = {
  lungs:      "lung",
  accessible: "bird",   // Parkinson's → Waveney Skylarks (bird)
  brain:      "brain",
  music:      "note",
  heart:      "heart",
  users:      "voice",
  star:       "voice",  // fallback
};

// ─── Location strings keyed by programme slug ─────────────────────────────────
// Update these when session schedules change.
const LOCATION_MAP: Record<string, string> = {
  "lung-health": "The Seagull Theatre, Lowestoft  ·  Tuesdays",
  "parkinsons":  "Halesworth & Lowestoft  ·  Weekly",
  "dementia":    "The Seagull Theatre  ·  Thursdays",
  "wellbeing":   "Online  ·  Mondays",
};

const FALLBACK_COLOUR = COLOUR_MAP.amber;
const FALLBACK_LOCATION = "Suffolk & Norfolk";

function toRow(p: ProgrammeData): Programme {
  const colours = COLOUR_MAP[p.theme ?? "amber"] ?? FALLBACK_COLOUR;
  const slug = p.slug ?? p._id;

  return {
    id:        slug,
    name:      p.title,
    blurb:     p.shortDescription ?? "",
    tag:       p.badgeLabel ?? "",
    location:  LOCATION_MAP[slug] ?? FALLBACK_LOCATION,
    color:     colours.color,
    colorSoft: colours.colorSoft,
    colorDeep: colours.colorDeep,
    iconKey:   ICON_KEY_MAP[p.iconName ?? "music"] ?? "note",
    href:      `/our-work/${slug}`,
    ...(p.featuredImageUrl
      ? { image: { src: p.featuredImageUrl, alt: p.featuredImageAlt ?? p.title } }
      : {}),
  };
}

// ─── Fallback data ─────────────────────────────────────────────────────────────
const FALLBACK_PROGRAMMES: ProgrammeData[] = [
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
    title: "Music for well-being",
    slug: "dementia",
    shortDescription:
      "Weekly music sessions at The Seagull Theatre for people living with dementia and their carers — connecting through melody and memory.",
    badgeLabel: "Dementia",
    theme: "purple",
    iconName: "brain",
  },
];

// ─── Component ─────────────────────────────────────────────────────────────────
export function ProgrammesSectionServer({
  programmes,
  kicker,
  title,
  lede,
  id,
}: {
  programmes: ProgrammeData[] | null;
  kicker?: string;
  title?: string;
  lede?: string;
  id?: string;
}) {
  const items = programmes && programmes.length > 0 ? programmes : FALLBACK_PROGRAMMES;
  const mapped: Programme[] = items.map(toRow);

  return (
    <ProgrammesSection
      programmes={mapped}
      kicker={kicker}
      title={title}
      lede={lede}
      id={id}
    />
  );
}
