import { defineField, defineType } from "sanity";

export default defineType({
  name: "session",
  title: "Session",
  type: "document",
  fields: [
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
        ],
      },
      validation: (R) => R.required(),
    }),
    defineField({ name: "location", title: "Venue name",    type: "string", validation: (R) => R.required() }),
    defineField({ name: "address",  title: "Full address",  type: "string" }),
    defineField({ name: "day",      title: "Day of week",   type: "string" }),
    defineField({ name: "time",     title: "Time",          type: "string" }),
    defineField({ name: "lat",      title: "Latitude",      type: "number" }),
    defineField({ name: "lng",      title: "Longitude",     type: "number" }),
    defineField({ name: "notes",    title: "Notes",         type: "text", rows: 2 }),
    defineField({ name: "active",   title: "Currently running", type: "boolean", initialValue: true }),
  ],
  preview: {
    select: { title: "location", subtitle: "programme" },
  },
});
