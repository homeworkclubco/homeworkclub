import type { Collection } from "tinacms";
import { videoHeroBlock01Schema } from "../blocks/VideoHeroBlock01";
import { hcHeroBlockSchema } from "../blocks/HcHeroBlock";
import { hcThreeColCardsBlockSchema } from "../blocks/HcThreeColCardsBlock";
import { logoGridBlock01Schema } from "../blocks/LogoGridBlock01";
import { pageSeo } from "../fieldDefs/pageSeo";

export const PageCollection: Collection = {
  name: "page",
  label: "Pages",
  path: "src/content/page",
  format: "mdx",
  defaultItem: () => {
    return {
      title: "New Page",
      body: "",
      blocks: [],
      seo: {
        title: "New page",
        description: "SEO decription here",
        image: "",
        robots: {
          index: true,
          follow: true,
        },
      },
    }
  },
  ui: {
    router: ({ document }) => {
      return `/${document._sys.filename.toLowerCase()}`;
    },
  },
  fields: [
    {
      name: "title",
      type: "string",
      description: "For internal reference only",
      required: true,
    },
    // {
    //   name: "seoTitle",
    //   type: "string",
    //   required: true
    // },
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
      templates: [videoHeroBlock01Schema, hcHeroBlockSchema, hcThreeColCardsBlockSchema, logoGridBlock01Schema],
    },
    pageSeo,
  ]
}
