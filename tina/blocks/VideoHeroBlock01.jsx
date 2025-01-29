import React from "react";

export const VideoHeroBlock01 = ({ data }) => {
  return (
    <>
      <h1>{data.title}</h1>
    </>
  );
};

export const videoHeroBlock01Schema = {
  name: "videoHeroBlock01",
  label: "Video Hero 1",
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
