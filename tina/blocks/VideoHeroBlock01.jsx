import React from "react";
import { getBlockName } from "../utils";

export const VideoHeroBlock01 = ({ data }) => {
  const blockName = getBlockName(data.__typename);
  
  return (
    <div className={`section block ${blockName}`} data-accent-color="">
      <h1 data-accent-color="orange">{data.title}</h1>
    </div>
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
