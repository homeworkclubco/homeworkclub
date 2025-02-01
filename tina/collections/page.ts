import type { Collection } from "tinacms";
import { videoHeroBlock01Schema } from "../blocks/VideoHeroBlock01";
import { HcHeroBlockSchema } from "../blocks/HcHeroBlock";

export const PageCollection: Collection = {
  name: "page",
  label: "Pages",
  path: "src/content/page",
  format: "mdx",
  ui: {
    router: ({ document }) => {
      return `/${document._sys.filename}`;
    },
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
      templates: [videoHeroBlock01Schema, HcHeroBlockSchema],
    }
  ]
}
