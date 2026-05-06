const impactStat = {
  name: "impactStat",
  title: "Impact stat",
  type: "document",
  fields: [
    {
      name: "label",
      title: "Label",
      type: "string",
      validation: (R: { required: () => unknown }) => R.required(),
    },
    {
      name: "value",
      title: "Value",
      type: "string",
      description: "e.g. 91%, 5+, £283",
      validation: (R: { required: () => unknown }) => R.required(),
    },
    {
      name: "programme",
      title: "Programme (optional)",
      type: "string",
    },
    {
      name: "source",
      title: "Source note",
      type: "string",
    },
  ],
};

export default impactStat;
