import { defineField, defineType } from "sanity";

export default defineType({
  name: "heroContent",
  title: "Homepage hero",
  type: "document",
  fields: [
    defineField({ name: "heroHeading",      title: "Heading",             type: "string" }),
    defineField({ name: "heroHighlightWord",title: "Highlight word",      type: "string", description: "Word to colour amber" }),
    defineField({ name: "heroSubheading",   title: "Subheading",          type: "text", rows: 3 }),
    defineField({ name: "heroPrimaryCTA",   title: "Primary button label",type: "string" }),
    defineField({ name: "heroPrimaryURL",   title: "Primary button URL",  type: "string" }),
    defineField({ name: "heroSecondaryCTA", title: "Secondary button label", type: "string" }),
    defineField({ name: "heroSecondaryURL", title: "Secondary button URL",   type: "string" }),
    defineField({
      name: "heroVideoUrl",
      title: "Video URL (YouTube)",
      type: "url",
      description: "Paste a YouTube link, e.g. https://www.youtube.com/watch?v=abc123 or https://youtu.be/abc123",
    }),
    defineField({ name: "heroVideoCaption", title: "Video placeholder caption", type: "string", description: "Shown when no video URL is set" }),
  ],
  preview: {
    select: { title: "heroHeading" },
    prepare: () => ({ title: "Homepage hero" }),
  },
});
