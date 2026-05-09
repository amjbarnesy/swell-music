import { defineField, defineType } from "sanity";

export default defineType({
  name: "wiredSoundsPage",
  title: "Wired Sounds Festival page",
  type: "document",
  // Singleton — only one document of this type should exist (create one in Studio and leave it)
  fields: [
    defineField({
      name: "videoUrl",
      title: "Festival video (YouTube)",
      type: "url",
      description: "Paste a YouTube link — e.g. https://youtu.be/abc123. Leave empty to hide the video.",
    }),
    defineField({
      name: "gallery",
      title: "Photo gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", title: "Alt text", type: "string" }),
          ],
        },
      ],
      validation: (R) => R.max(12),
      description: "Up to 12 photos displayed in a 3-column grid.",
    }),
    defineField({
      name: "bodyHeading",
      title: "Additional content — section heading",
      type: "string",
      description: "Full-width heading above the two-column text.",
    }),
    defineField({
      name: "body",
      title: "Additional content — body text",
      type: "array",
      of: [{ type: "block" }],
      description: "Flows into two columns below the heading. Leave both empty and this section won't appear.",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Wired Sounds Festival page" }),
  },
});
