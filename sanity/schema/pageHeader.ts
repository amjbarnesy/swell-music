import { defineField, defineType } from "sanity";

const PAGE_OPTIONS = [
  { title: "Homepage",                  value: "homepage" },
  { title: "About Us",                  value: "about" },
  { title: "Our Work (hub)",            value: "our-work" },
  { title: "Singing for Lung Health",   value: "lung-health" },
  { title: "Waveney Skylarks",          value: "parkinsons" },
  { title: "Music & Dementia",          value: "dementia" },
  { title: "Wired Sounds Festival",     value: "wired-sounds" },
  { title: "Our Impact",                value: "our-impact" },
  { title: "Get Involved (hub)",        value: "get-involved" },
  { title: "Find a Session",            value: "find-a-session" },
  { title: "Refer Someone",             value: "refer" },
  { title: "Volunteer",                 value: "volunteer" },
  { title: "Support Us",               value: "support-us" },
  { title: "News",                      value: "news" },
  { title: "Contact",                   value: "contact" },
];

export default defineType({
  name: "pageHeader",
  title: "Page header",
  type: "document",
  fields: [
    defineField({
      name: "page",
      title: "Page",
      type: "string",
      options: { list: PAGE_OPTIONS },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "eyebrow",
      title: "Eyebrow label",
      type: "string",
      description: "Small uppercase label above the heading",
    }),
    defineField({
      name: "heading",
      title: "Heading (h1)",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "highlightWord",
      title: "Highlight word",
      type: "string",
      description: "Optional: one word in the heading to colour amber",
    }),
    defineField({
      name: "subheading",
      title: "Subheading",
      type: "text",
      rows: 3,
    }),
  ],
  preview: {
    select: { title: "heading", subtitle: "page" },
  },
});
