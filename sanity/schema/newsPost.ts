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
    defineField({ name: "excerpt",     title: "Excerpt",     type: "text", rows: 3, description: "Short summary for the news index" }),
    defineField({
      name: "coverImage",
      title: "Cover image",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
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
