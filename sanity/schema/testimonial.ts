import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "quote",       title: "Quote",       type: "text", rows: 4, validation: (R) => R.required() }),
    defineField({ name: "attribution", title: "Attribution", type: "string", description: "e.g. Margaret, 72 · Singing for Lung Health" }),
    defineField({
      name: "programme",
      title: "Programme",
      type: "string",
      options: {
        list: [
          { title: "Singing for Lung Health", value: "lung-health" },
          { title: "Waveney Skylarks (Parkinson's)", value: "parkinsons" },
          { title: "Music & Dementia", value: "dementia" },
          { title: "Wired Sounds", value: "wired-sounds" },
          { title: "General", value: "general" },
        ],
      },
    }),
    defineField({ name: "approved", title: "Approved for display", type: "boolean", initialValue: false }),
    defineField({ name: "featured", title: "Featured on homepage",  type: "boolean", initialValue: false }),
  ],
  preview: {
    select: { title: "attribution", subtitle: "approved" },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    prepare: ({ title, subtitle }: Record<string, any>) => ({
      title: (title as string) ?? "Unnamed",
      subtitle: subtitle ? "Approved" : "Pending approval",
    }),
  },
});
