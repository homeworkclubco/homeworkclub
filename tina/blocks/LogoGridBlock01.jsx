import React from "react";
import { getBlockName } from "../utils";
import "./LogoGridBlock01.css";

export const LogoGridBlock01 = ({ data }) => {
  const blockName = getBlockName(data.__typename);
  
  return (
    <section className={`section block ${blockName}`} data-accent-color="secondary" data-background-color="neutral">
      <div className="container">
        {data.title && <h2 className="blockTitle">{data.title}</h2>}

        <div className={`${blockName}__grid`}>
          {data.logos.map((logo, index) => (
            <div key={index} className={`${blockName}__gridItem`}>
              <img src={logo.src} alt={logo.alt} className={`${blockName}__logo`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const logoGridBlock01Schema = {
  name: "logoGridBlock01",
  label: "Logo Grid",
  ui: {},
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "object",
      label: "Logos",
      name: "logos",
      list: true,
      required: true,
      ui: {
        defaultItem: {
          src: "",
          alt: "Logo",
        },
        itemProps: (item) => ({ label: item.alt }),
      },
      fields: [
        {
          type: "image",
          label: "Logo",
          name: "src",
          required: true,
          description:
            "Ensure that you correctly resize the image to match the other logos. Please use an SVG file for best results.",
        },
        {
          type: "string",
          label: "Alt",
          name: "alt",
          required: true,
          description: "Required for accessibility and SEO.",
        },
      ],
    },
  ],
};
