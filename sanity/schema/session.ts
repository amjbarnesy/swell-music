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
          { title: "Music for Wellbeing", value: "wellbeing" },
          { title: "Open Access", value: "open-access" },
          { title: "Wired Sounds", value: "wired-sounds" },
        ],
      },
      validation: (R) => R.required(),
    }),
    defineField({ name: "location", title: "Venue name",    type: "string", validation: (R) => R.required() }),
    defineField({ name: "address",  title: "Full address",  type: "string" }),
    defineField({ name: "day",      title: "Day of week",   type: "string" }),
    defineField({ name: "time",     title: "Time",          type: "string" }),
    defineField({ name: "notes",    title: "Notes",         type: "text", rows: 2, description: "Extra info shown on the session card (e.g. 'Carers and partners welcome')" }),
    defineField({
      name: "lat",
      title: "Latitude",
      type: "number",
      description: "Right-click the venue on Google Maps → 'What's here?' to copy coordinates",
    }),
    defineField({
      name: "lng",
      title: "Longitude",
      type: "number",
      description: "The second number from Google Maps coordinates (e.g. 1.7352 for Lowestoft)",
    }),
    defineField({
      name: "active",
      title: "Currently running",
      type: "boolean",
      initialValue: true,
      description: "Uncheck to hide from the session list and map without deleting",
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      description: "Lower numbers appear first in the session list",
    }),
  ],
  orderings: [
    { title: "Display order", name: "manualOrder", by: [{ field: "order", direction: "asc" }] },
    { title: "Programme then day", name: "programmeDay", by: [{ field: "programme", direction: "asc" }, { field: "day", direction: "asc" }] },
  ],
  preview: {
    select: { title: "location", subtitle: "programme" },
  },
});
