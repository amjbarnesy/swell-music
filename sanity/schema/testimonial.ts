const testimonial = {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    {
      name: "quote",
      title: "Quote",
      type: "text",
      validation: (R: { required: () => unknown }) => R.required(),
    },
    {
      name: "attribution",
      title: "Attribution",
      type: "string",
      description: "e.g. Margaret, 72 · Singing for Lung Health",
    },
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
          { title: "General", value: "general" },
        ],
      },
    },
    {
      name: "approved",
      title: "Approved for display",
      type: "boolean",
      initialValue: false,
    },
  ],
};

export default testimonial;
