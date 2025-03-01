import React from "react";
import { Button } from "../../../src/components/react/Button";
import { Link } from "../../../src/components/react/Link";

export const Actions = ({ className = '', actions }) => {
  if (!actions) return null;
  
  return (
    <div className="actions">
      {actions &&
        actions.map((action, index) => {
          let element = null;
          if (action.type === "button") {
            element = <Button key={index} button={action} />;
          }
          if (action.type === "link") {
            element = <Link key={index} link={action} />;
          }
          return element;
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
        { label: 'Link', value: 'link' },
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