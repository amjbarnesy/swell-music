const newsPost = {
  name: "newsPost",
  title: "News post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (R: { required: () => unknown }) => R.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (R: { required: () => unknown }) => R.required(),
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "summary",
      title: "Summary",
      type: "text",
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "image",
      title: "Cover image",
      type: "image",
      options: { hotspot: true },
    },
  ],
};

export default newsPost;
