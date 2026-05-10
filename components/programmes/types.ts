// Domain type for an editable programme record.
// Whatever CMS / database you wire in later (Sanity, Payload, Supabase, etc.)
// should hydrate into this shape.

export type ProgrammeIconKey =
  | "lung"
  | "bird"
  | "brain"
  | "note"
  | "heart"
  | "voice";

export type Programme = {
  id: string;
  /** Display title — e.g. "Singing for Lung Health" */
  name: string;
  /** 1–2 sentence description shown in the row body */
  blurb: string;
  /** Short condition / audience pill — e.g. "Dementia" */
  tag: string;
  /** Venue + cadence — e.g. "The Seagull Theatre, Lowestoft  ·  Tuesdays" */
  location: string;
  /**
   * Per-programme palette. Stored as plain hex so the CMS can edit them.
   *  - color:      vivid background for the icon tile
   *  - colorSoft:  tinted pill background (~15% mix with paper)
   *  - colorDeep:  ink colour that reads on top of `color`
   */
  color: string;
  colorSoft: string;
  colorDeep: string;
  /** Which icon to render — see {@link iconMap} */
  iconKey: ProgrammeIconKey;
  /** Optional photo. Falls back to a striped placeholder if omitted. */
  image?: {
    src: string;
    alt: string;
  };
  /** Where "Find a session" links to (defaults to /find-a-session?p={id}) */
  href?: string;
};
