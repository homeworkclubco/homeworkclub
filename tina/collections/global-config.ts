import type { Collection } from "tinacms";
import IconComponent from "../components/IconComponent";
import { globalSeo } from "./globalSeo";

export const GlobalConfigCollection: Collection = {
  name: "config",
  label: "Global Config",
  path: "src/content/config",
  format: "json",
  ui: {
    
    global: true,
    allowedActions: {
      create: false,
      delete: false,
    }
  },
  fields: [
    globalSeo,
    // {
    //   name: "seo",
    //   label: "General site config",
    //   type: "object",
    //   fields: [
    //     {
    //       name: "title",
    //       label: "Site title for SEO",
    //       type: "string",
    //       required: true,
    //     },
    //     {
    //       name: "description",
    //       label: "Site description for SEO",
    //       type: "string",
    //       required: true,
    //     },
    //     {
    //       name: "siteOwner",
    //       label: "Your Name, Company Name (Used in the footer",
    //       required: true,
    //       type: "string",
    //       ui: {
    //         defaultValue: "Your name here"
    //       },
    //     },
    //     // Add more settings here...
    //   ],
    // },
    {
      name: "header",
      label: "Header",
      type: "object",
      fields: [{
        name: "nav",
        label: "Site Navigation Menu (Reorder, Add, Remove)",
        type: "object",
        list: true,
        ui: {
          itemProps: (item) => {
            return {
              label: item.title
            };
          },
        },
        fields: [
          {
            name: "title",
            label: "Title of Nav Item",
            type: "string",
            required: true
          },
          {
            name: "link",
            label: "Path of the Nav Item",
            type: "string",
            required: true
          },
          {
            name: "target",
            label: "Open in new tab",
            required: false,
            type: "string",
            options: [
              { label: 'Yes', value: '_blank' },
              { label: "No", value: "_self" },
            ],
            ui: {
              component: "button-toggle",
            },
          }
        ]
      },
      ],
    },
    {
      name: "footer",
      label: "Footer",
      type: "object",
      fields: [
        {
          name: "siteName",
          label: "Site Name",
          type: "string",
          // ui: {
          //   component: "textarea"
          // }
        }
      ]
    },
    {
      name: "contactLinks",
      label: "Contact Links",
      type: "object",
      description: "Links to your social media profiles and more",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: item.title
          }
        },
      },
      fields: [
        {
          name: "title",
          label: "Title",
          type: "string"
        },
        {
          name: "link",
          label: "Link",
          type: "string"
        },
        {
          name: "icon",
          label: "Icon",
          type: "string",
          ui: {
            //@ts-ignore
            component: IconComponent
          }
        }
      ],
    }

    // Add other config fields here...
  ]
}
