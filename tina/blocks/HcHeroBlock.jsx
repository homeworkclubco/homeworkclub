import React from "react";

export const HcHeroBlock = ({ data }) => {
  return (
    <>
      <h1 data-accent-color="orange">{data.title}</h1>
    </>
  );
};

export const HcHeroBlockSchema = {
  name: "hcHeroBlock",
  label: "Hero",
  ui: {},
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
  ],
};
