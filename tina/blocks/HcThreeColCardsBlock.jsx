import React from "react";
import "./HcThreeColCardsBlock.css";
import { getBlockName } from "../utils";
import { Actions, actionsSchema } from "./parts/Actions";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";

export const HcThreeColCardsBlock = ({ data }) => {
  const blockName = getBlockName(data.__typename);

  return (
    <div
      className={`section block ${blockName}`}
      data-accent-color="secondary"
      data-background-color="accent"
    >
      <div className="container" data-center-content>
        {data.title && <h2 className="blockTitle">{data.title}</h2>}

        {data.cards && (
          <div className={`${blockName}-cards`}>
            {data.cards.map((card, index) => (
              <div
                key={index}
                className={`${blockName}-card`}
                data-background-color="accent-soft"
                data-tina-field={tinaField(card)}
              >
                <h3 data-tina-field={tinaField(card, "title")} className={`${blockName}-cardTitle`}>
                  {card.title}
                </h3>
                <div data-tina-field={tinaField(card, "body")} className={`${blockName}-cardBody`}>
                  <TinaMarkdown content={card.body} />
                </div>
              </div>
            ))}
          </div>
        )}

        <Actions actions={data.actions} />
      </div>
    </div>
  );
};

export const hcThreeColCardsBlockSchema = {
  name: "hcThreeColCardsBlock",
  label: "Homework Club 3 Column Cards",
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
      name: "cards",
      label: "Cards",
      list: true,
      required: true,
      ui: {
        itemProps: (item) => ({ label: item.title }),
        defaultItem: {
          title: "Card Title",
          body: "Card Body",
        },
      },
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
          required: true,
        },
        {
          type: "rich-text",
          name: "body",
          label: "Body",
          required: true,
        },
      ],
    },
    actionsSchema,
  ],
};
