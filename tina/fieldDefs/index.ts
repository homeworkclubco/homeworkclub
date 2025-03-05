/* -------------------------------------------------------------------------- /
  Common field defs
/ -------------------------------------------------------------------------- */

import type { TinaField } from "tinacms";
import { videoHeroBlock01Schema } from "../blocks/VideoHeroBlock01";
import { hcHeroBlockSchema } from "../blocks/HcHeroBlock";
import { hcThreeColCardsBlockSchema } from "../blocks/HcThreeColCardsBlock";
import { logoGridBlock01Schema } from "../blocks/LogoGridBlock01";
import { portfolioListBlockSchema } from "@tina/blocks/PortfolioListBlock";
import { mediaBlockSchema } from "@tina/blocks/MediaBlock";
import { textBlockSchema } from "@tina/blocks/TextBlock";
import { mediaTextBlockSchema } from "@tina/blocks/MediaTextBlock";

export const defaultBlocks = [
  videoHeroBlock01Schema,
  hcHeroBlockSchema,
  hcThreeColCardsBlockSchema,
  logoGridBlock01Schema,
  portfolioListBlockSchema,
  mediaBlockSchema,
  textBlockSchema,
  mediaTextBlockSchema,
];

function blocksField(blocks = defaultBlocks) {
  return {
    type: "object",
    list: true,
    name: "blocks",
    label: "Blocks",
    ui: {
      visualSelector: true,
    },
    templates: blocks,
  };
}

const titleField: TinaField = {
  name: "title",
  label: "Internal reference",
  type: "string",
  description: "For internal reference only",
  required: true,
  isTitle: true,
};


const bodyField: TinaField = {
  name: "body",
  label: "Body",
  type: "rich-text",
  isBody: true,
  required: true,
  overrides: {
    toolbar: ["heading", "bold", "italic", "link", "ul", "ol", "raw", "image"],
  }
};

/* -------------------------------------------------------------------------- /
  Usage:

  ui: {
    filename: slugifyFilename,
  }
/ -------------------------------------------------------------------------- */


const slugifyFilename = {
  readonly: true,
  slugify: (values) => {
    return values?.title
      ?.toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^a-z-]/g, '')
  },
};

export { blocksField, titleField, bodyField, slugifyFilename };