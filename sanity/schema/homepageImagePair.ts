import { defineField, defineType } from "sanity";

export default defineType({
  name: "homepageImagePair",
  title: "Homepage — image pair",
  type: "document",
  fields: [
    defineField({
      name: "imageLeft",
      title: "Left image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt",     title: "Alt text",       type: "string", description: "Describe the image for screen readers." }),
        defineField({ name: "caption", title: "Caption (optional)", type: "string", description: "Short caption shown beneath the image." }),
      ],
    }),
    defineField({
      name: "imageRight",
      title: "Right image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt",     title: "Alt text",       type: "string", description: "Describe the image for screen readers." }),
        defineField({ name: "caption", title: "Caption (optional)", type: "string", description: "Short caption shown beneath the image." }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Homepage image pair" }),
  },
});
