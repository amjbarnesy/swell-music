import { defineField, defineType } from "sanity";

export const GALLERY_CATEGORIES = [
  { title: "Singing for Lung Health",   value: "lung-health" },
  { title: "Sing to Beat Parkinson's",  value: "parkinsons"  },
  { title: "Music & Dementia",          value: "dementia"    },
  { title: "Music for Wellbeing",       value: "wellbeing"   },
  { title: "Open Access",               value: "open-access" },
  { title: "Wired Sounds",              value: "wired-sounds"},
  { title: "General",                   value: "general"     },
];

export default defineType({
  name: "galleryImage",
  title: "Gallery image",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (R) => R.required(),
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          description: "Describe the image for screen readers.",
          validation: (R) => R.required(),
        }),
      ],
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: { list: GALLERY_CATEGORIES, layout: "radio" },
      validation: (R) => R.required(),
      description: "Which programme or topic does this photo belong to?",
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      description: "Lower numbers appear first within the category. Use the drag handle in the list view to reorder.",
    }),
    defineField({
      name: "active",
      title: "Show on site",
      type: "boolean",
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: "Category then order",
      name: "categoryOrder",
      by: [{ field: "category", direction: "asc" }, { field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "image.alt", subtitle: "category", media: "image" },
    prepare: ({ title, subtitle, media }: Record<string, any>) => ({
      title: title ?? "Untitled",
      subtitle,
      media,
    }),
  },
});
