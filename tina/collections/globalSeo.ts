import type { TinaField } from "tinacms"

export const globalSeo: TinaField = {
  label: 'Global SEO',
  name: 'seo',
  type: 'object',
  ui: {
    defaultItem: {
      url: 'https://example.com',
      siteName: 'Example',
      divider: ' | ',
    }
  },
  fields: [
    {
      label: "URL",
      name: "url",
      type: "string",
      required: true,
      description: "The URL of your site. This will be used to generate the canonical URL for your pages.",
    },
    {
      label: 'Site Name',
      name: 'siteName',
      required: true,
      type: 'string',
      description: 'The name of your site. This will be appended to the title of your pages.',
    },
    {
      label: "Divider",
      name: "divider",
      type: "string",
      description: "A character or string that will be used to separate the title of your pages from the site name. For example: ' | '",
    },
  ],
};