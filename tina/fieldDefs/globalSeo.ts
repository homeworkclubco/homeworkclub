import type { TinaField } from "tinacms"

export const globalSeo: TinaField = {
  label: 'Global SEO',
  name: 'seo',
  type: 'object',
  ui: {
    defaultItem: {
      url: 'https://example.com',
      siteName: 'Example',
      defaultDescription: 'This is a Homework Club creation',
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
      label: "Default description",
      name: "defaultDescription",
      type: "string",
      description: "A default description for your site. This will be used as the description when a page does not have its own description.",
      required: true,
    },
    {
      label: "Divider",
      name: "divider",
      type: "string",
      description: "A character or string that will be used to separate the title of your pages from the site name. For example: ' | '",
      required: true,
    },
    {
      label: "Default image",
      name: "defaultImage",
      type: "image",
      description: "This image will show up when this page is shared on social media. It should be at least 1200px wide and 630px tall.",
      required: true,
    },
    {
      label: "Discourage search engines from indexing this site",
      name: "noIndex",
      type: "boolean",
      description: "If checked, search engines will be discouraged from indexing this site.",
    }
    // {
    //   label: "Robots",
    //   name: "robots",
    //   type: "object",
    //   fields: [
    //     {
    //       label: "Index",
    //       name: "index",
    //       type: "boolean",
    //       description: "Allow search engines to index this site.",
    //       required: true,
    //     },
    //     {
    //       label: "Follow",
    //       name: "follow",
    //       type: "boolean",
    //       description: "Allow search engines to follow links on this site.",
    //       required: true,
    //     },
    //   ],
    // }
  ],
};