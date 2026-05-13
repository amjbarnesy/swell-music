import { defineField, defineType } from "sanity";

export default defineType({
  name: "programme",
  title: "Programme",
  type: "document",
  groups: [
    { name: "card",    title: "Homepage card" },
    { name: "page",    title: "Page content" },
    { name: "gallery", title: "Gallery" },
    { name: "meta",    title: "Settings" },
  ],
  fields: [
    // ── Homepage card ──────────────────────────────────────────────────────────
    defineField({
      name: "title",
      title: "Programme name",
      type: "string",
      group: "card",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "slug",
      title: "URL slug",
      type: "slug",
      options: { source: "title" },
      group: "card",
      validation: (R) => R.required(),
      description: "Auto-filled from the name. Links to /our-work/[slug]",
    }),
    defineField({
      name: "shortDescription",
      title: "Short description (homepage card)",
      type: "text",
      rows: 3,
      group: "card",
      description: "One or two sentences shown on the homepage card.",
    }),
    defineField({
      name: "locationSummary",
      title: "Location summary",
      type: "string",
      group: "card",
      description: "Shown beneath the CTA button on the homepage row, e.g. 'The Seagull Theatre, Lowestoft  ·  Tuesdays'",
    }),
    defineField({
      name: "featuredImage",
      title: "Featured image",
      type: "image",
      group: "card",
      options: { hotspot: true },
      description: "Shown alongside the programme row on the homepage and Our Work page. If omitted a striped placeholder is shown.",
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          description: "Describe the image for screen readers.",
        }),
      ],
    }),
    defineField({
      name: "badgeLabel",
      title: "Badge label",
      type: "string",
      group: "card",
      description: "e.g. Lung conditions, Parkinson's disease",
    }),
    defineField({
      name: "theme",
      title: "Colour theme",
      type: "string",
      group: "card",
      options: {
        list: [
          { title: "Amber (Lung Health)", value: "amber" },
          { title: "Teal (Parkinson's)", value: "teal" },
          { title: "Purple (Dementia)", value: "purple" },
          { title: "Coral (Neurodivergent)", value: "coral" },
          { title: "Blue", value: "blue" },
          { title: "Green", value: "green" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "iconName",
      title: "Icon",
      type: "string",
      group: "card",
      options: {
        list: [
          { title: "Lungs", value: "lungs" },
          { title: "Accessibility / Parkinson's", value: "accessible" },
          { title: "Brain / Dementia", value: "brain" },
          { title: "Music note", value: "music" },
          { title: "Heart", value: "heart" },
          { title: "People / Group", value: "users" },
          { title: "Star", value: "star" },
        ],
        layout: "radio",
      },
    }),

    // ── Page content ───────────────────────────────────────────────────────────
    defineField({
      name: "pageTitle",
      title: "Page headline",
      type: "string",
      group: "page",
      description: "Large heading on the programme page, e.g. 'Breathe better. Live better.'",
    }),
    defineField({
      name: "pageDescription",
      title: "Page description",
      type: "text",
      rows: 4,
      group: "page",
      description: "The paragraph beneath the headline.",
    }),
    defineField({
      name: "accreditation",
      title: "Accreditation badge (optional)",
      type: "string",
      group: "page",
      description: "e.g. BLF Accredited, Sing to Beat Parkinson's",
    }),

    defineField({
      name: "features",
      title: "Session features",
      type: "array",
      group: "page",
      description: "Up to 3 cards shown in the 'What happens in a session' section.",
      of: [
        {
          type: "object",
          name: "feature",
          fields: [
            defineField({ name: "title",       title: "Title",       type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
          ],
          preview: {
            select: { title: "title" },
            prepare: (v: Record<string, any>) => ({ title: v.title }),
          },
        },
      ],
      validation: (R) => R.max(3),
    }),

    defineField({
      name: "whoFor",
      title: "Who it's for",
      type: "array",
      group: "page",
      description: "Bullet list of who can attend. Leave empty to hide this section.",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "evidenceHeading",
      title: "Evidence section heading",
      type: "string",
      group: "page",
      description: "e.g. Clinically grounded",
    }),
    defineField({
      name: "evidenceBody",
      title: "Evidence body text",
      type: "array",
      group: "page",
      of: [{ type: "block" }],
      description: "Leave empty to hide this section.",
    }),

    defineField({
      name: "bodyHeading",
      title: "Additional content — section heading",
      type: "string",
      group: "page",
      description: "Full-width heading above the two-column text. e.g. 'What is Singing for Lung Health?'",
    }),
    defineField({
      name: "body",
      title: "Additional content — body text",
      type: "array",
      group: "page",
      of: [{ type: "block" }],
      description: "Flows into two columns below the heading. Leave both empty and this section won't appear.",
    }),

    // ── Gallery ────────────────────────────────────────────────────────────────
    defineField({
      name: "gallery",
      title: "Photo gallery",
      type: "array",
      group: "gallery",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", title: "Alt text", type: "string" }),
          ],
        },
      ],
      validation: (R) => R.max(6),
      description: "Up to 6 photos displayed in a 3-column grid.",
    }),

    // ── Status ─────────────────────────────────────────────────────────────────
    defineField({
      name: "onHold",
      title: "Currently on hold",
      type: "boolean",
      group: "meta",
      initialValue: false,
      description: "Turn on to show a notice that this programme is temporarily not running. The programme stays visible on the site.",
    }),
    defineField({
      name: "onHoldMessage",
      title: "On hold message",
      type: "string",
      group: "meta",
      description: "Shown on the programme card and page when 'Currently on hold' is on. e.g. 'Currently seeking funding to restart — we hope to be back soon.'",
    }),

    // ── Settings ───────────────────────────────────────────────────────────────
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      group: "meta",
      description: "Lower numbers appear first on the homepage.",
    }),
    defineField({
      name: "active",
      title: "Show on site",
      type: "boolean",
      group: "meta",
      initialValue: true,
    }),
  ],
  orderings: [
    { title: "Display order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "title", subtitle: "badgeLabel" },
    prepare: (v: Record<string, any>) => ({ title: v.title, subtitle: v.subtitle }),
  },
});
