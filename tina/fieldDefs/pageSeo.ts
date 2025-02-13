import type { TinaField } from "tinacms"

/* ****************************************
Example default values: 

  seo: {
    title: "New page",
    description: "SEO decription here",
    image: "",
    robots: {
      index: true,
      follow: true,
    },
  }

**************************************** */

export const pageSeo: TinaField = {
  label: 'Page SEO',
  name: 'seo',
  type: 'object',
  required: true,
  fields: [
    {
      label: 'Title',
      name: 'title',
      type: 'string',
      required: true,
      description: "This text will appear in the first line when this shows up in search results. Max 60 characters"
    },
    {
      label: "Remove Site Name from Title",
      name: "removeSiteName",
      type: "boolean",
    },
    {
      label: 'Description',
      name: 'description',
      type: 'string',
      required: true,
      description: "This text will appear as the description when this shows up in search results. Max 160 characters will show. Note, sometimes Google may choose to not use this text if it doesn't think it is accurate enough.",
      ui: {
        component: "textarea"
      }
    },
    {
      label: "Image",
      name: "image",
      type: "image",
      description: "This image will show up when this page is shared on social media. It should be at least 1200px wide and 630px tall.",
    },
    {
      label: "Robots (advanced)",
      name: "robots",
      type: "object",
      required: true,
      
      fields: [
        {
          label: "Index",
          name: "index",
          type: "boolean",
          description: "Allow search engines to index this page.",
          required: true,
        },
        {
          label: "Follow",
          name: "follow",
          type: "boolean",
          description: "Allow search engines to follow the links on this page.",
          required: true,
        }
      ]
    }
  ],
}