import { defineField, defineType } from "sanity";

export default defineType({
  name: "funder",
  title: "Funder",
  type: "document",
  fields: [
    defineField({ name: "name",   title: "Funder name", type: "string", validation: (R) => R.required() }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: false },
      fields: [
        defineField({ name: "alt", title: "Alt text", type: "string", description: "e.g. Co-op logo" }),
      ],
    }),
    defineField({ name: "url",    title: "Website URL (optional)", type: "url" }),
    defineField({ name: "order",  title: "Display order", type: "number" }),
    defineField({ name: "active", title: "Show on site", type: "boolean", initialValue: true }),
  ],
  orderings: [{ title: "Display order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "name", media: "logo" },
  },
});
