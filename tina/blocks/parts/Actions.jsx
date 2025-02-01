import { describe } from "node:test";
import React from "react";
import { FieldDescription } from "tinacms";

export const Actions = ({ className, actions }) => {
  return (
    <div className="actions">
      {actions &&
        actions.map((action, index) => {
          return (
            <a key={index} href={action.link} className={action.type}>
              {action.label}
            </a>
          );
        })}
    </div>
  );
};

export const actionsSchema = {
  label: "Actions",
  name: "actions",
  type: "object",
  list: true,
  ui: {
    defaultItem: {
      label: "Action Label",
      type: "button",
      icon: true,
      link: "/",
    },
    itemProps: (item) => ({ label: item.label }),
  },
  fields: [
    {
      label: "Label",
      name: "label",
      type: "string",
    },
    {
      label: "Type",
      name: "type",
      type: "string",
      options: [
        { label: "Button", value: "button" },
        // { label: 'Link', value: 'link' },
      ],
      ui: {
        component: "button-toggle",
      },
    },
    // {
    //   label: 'Icon',
    //   name: 'icon',
    //   type: 'boolean',
    // },
    {
      label: "Link",
      name: "link",
      type: "string",
      // description: "For internal links, use relative paths e.g. '/about'",
    },
  ],
};