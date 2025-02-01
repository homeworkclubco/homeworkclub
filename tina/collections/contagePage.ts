import type { Collection } from "tinacms";
import { videoHeroBlock01Schema } from "../blocks/VideoHeroBlock01";

export const ContactPageCollection: Collection = {
  name: "contactPage",
  label: "Contact",
  path: "src/content/singleton",
  format: "mdx",
  ui: {
    router: ({ document }) => {
      return `/${document._sys.filename}`;
    },
    global: true,
    allowedActions: {
      create: false,
      delete: false,
    }
  },
  fields: [
    {
      name: "seoTitle",
      type: "string",
      required: true
    },
    {
      name: "body",
      type: "rich-text",
      isBody: true,
      required: true
    },
    {
      type: "object",
      list: true,
      name: "blocks",
      label: "Blocks",
      ui: {
        visualSelector: true,
      },
      templates: [videoHeroBlock01Schema],
    }
  ]
}
