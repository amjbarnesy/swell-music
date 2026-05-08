import { defineField, defineType } from "sanity";

export default defineType({
  name: "programme",
  title: "Programme",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Programme name",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "slug",
      title: "URL slug",
      type: "slug",
      options: { source: "title" },
      validation: (R) => R.required(),
      description: "Auto-filled from the name. Links to /our-work/[slug]",
    }),
    defineField({
      name: "shortDescription",
      title: "Short description",
      type: "text",
      rows: 3,
      description: "One or two sentences shown on the homepage card.",
    }),
    defineField({
      name: "badgeLabel",
      title: "Badge label",
      type: "string",
      description: "e.g. Lung conditions, Parkinson's disease",
    }),
    defineField({
      name: "theme",
      title: "Colour theme",
      type: "string",
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
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      description: "Lower numbers appear first.",
    }),
    defineField({
      name: "active",
      title: "Show on site",
      type: "boolean",
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
