import { defineField, defineType } from "sanity";

export default defineType({
  name: "newsPost",
  title: "News post",
  type: "document",
  fields: [
    defineField({ name: "title",       title: "Title",       type: "string", validation: (R) => R.required() }),
    defineField({ name: "slug",        title: "Slug",        type: "slug", options: { source: "title" }, validation: (R) => R.required() }),
    defineField({ name: "publishedAt", title: "Published at",type: "datetime" }),
    defineField({ name: "author",      title: "Author",      type: "string", initialValue: "Swell Music CIC" }),
    defineField({ name: "excerpt",     title: "Excerpt",     type: "text", rows: 3, description: "Short summary shown on the news index" }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
      description: "Type a category and press Enter to add it. Use existing ones (e.g. 'Community', 'Fundraising') or create your own.",
    }),
    defineField({
      name: "coverImage",
      title: "Cover image",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
    }),
    defineField({
      name: "gallery",
      title: "Photo gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
        },
      ],
      validation: (R) => R.max(6),
      description: "Up to 6 photos in a 3-column grid. Leave empty and the gallery won't appear.",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
        },
      ],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "publishedAt", media: "coverImage" },
  },
});
