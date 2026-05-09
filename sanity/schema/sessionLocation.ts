import { defineField, defineType } from "sanity";

export default defineType({
  name: "sessionLocation",
  title: "Session location",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Venue name",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "string",
      description: "Shown in the map popup and location list (e.g. Morton Road, Lowestoft, NR33 0JH)",
    }),
    defineField({
      name: "note",
      title: "Sessions at this venue",
      type: "string",
      description: "Brief description of what runs here — shown in the map popup (e.g. Friday Music for Wellbeing · Open Access)",
    }),
    defineField({
      name: "lat",
      title: "Latitude",
      type: "number",
      description: "Find this by searching the address on maps.google.com, right-clicking and copying the coordinates",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "lng",
      title: "Longitude",
      type: "number",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "active",
      title: "Show on map",
      type: "boolean",
      initialValue: true,
      description: "Uncheck to hide this location without deleting it",
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      description: "Lower numbers appear first in the list below the map",
    }),
  ],
  orderings: [
    { title: "Display order", name: "manualOrder", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "name", subtitle: "address" },
  },
});
