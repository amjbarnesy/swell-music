import { defineField, defineType } from "sanity";

export default defineType({
  name: "impactStat",
  title: "Impact stat",
  type: "document",
  fields: [
    defineField({ name: "label",       title: "Label",        type: "string", validation: (R) => R.required() }),
    defineField({ name: "value",       title: "Numeric value",type: "number", validation: (R) => R.required() }),
    defineField({
      name: "unit",
      title: "Unit",
      type: "string",
      description: 'e.g. "%" or "+" or leave blank',
      options: { list: ["%", "+", "£", ""] },
    }),
    defineField({ name: "description", title: "Source / description", type: "string" }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Outcome bar (Our Impact page)",  value: "outcome-bar" },
          { title: "Counter (hero stat)",            value: "counter" },
          { title: "Reach card (geographic)",        value: "reach-card" },
        ],
      },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "programme",
      title: "Programme (optional)",
      type: "string",
      options: {
        list: [
          { title: "Singing for Lung Health", value: "lung-health" },
          { title: "Waveney Skylarks",        value: "parkinsons" },
          { title: "Music & Dementia",        value: "dementia" },
          { title: "Wired Sounds",            value: "wired-sounds" },
          { title: "All programmes",          value: "all" },
        ],
      },
    }),
    defineField({ name: "order", title: "Display order", type: "number" }),
  ],
  orderings: [{ title: "Display order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "label", subtitle: "value" },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    prepare: ({ title, subtitle }: Record<string, any>) => ({
      title: title as string,
      subtitle: String(subtitle),
    }),
  },
});
