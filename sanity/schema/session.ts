const session = {
  name: "session",
  title: "Session",
  type: "document",
  fields: [
    {
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
      validation: (R: { required: () => unknown }) => R.required(),
    },
    {
      name: "location",
      title: "Location name",
      type: "string",
      validation: (R: { required: () => unknown }) => R.required(),
    },
    {
      name: "address",
      title: "Full address",
      type: "string",
    },
    {
      name: "day",
      title: "Day of week",
      type: "string",
    },
    {
      name: "time",
      title: "Time",
      type: "string",
    },
    {
      name: "lat",
      title: "Latitude",
      type: "number",
    },
    {
      name: "lng",
      title: "Longitude",
      type: "number",
    },
    {
      name: "notes",
      title: "Notes",
      type: "text",
    },
  ],
};

export default session;
