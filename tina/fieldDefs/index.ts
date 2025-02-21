/* -------------------------------------------------------------------------- /
  Common field defs
/ -------------------------------------------------------------------------- */

import type { TinaField } from "tinacms";
import { videoHeroBlock01Schema } from "../blocks/VideoHeroBlock01";
import { hcHeroBlockSchema } from "../blocks/HcHeroBlock";
import { hcThreeColCardsBlockSchema } from "../blocks/HcThreeColCardsBlock";
import { logoGridBlock01Schema } from "../blocks/LogoGridBlock01";

function blocksField(blocks = [videoHeroBlock01Schema, hcHeroBlockSchema, hcThreeColCardsBlockSchema, logoGridBlock01Schema]) {
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
  type: "string",
  description: "For internal reference only",
  required: true,
  isTitle: true,
};

const bodyField: TinaField = {
  name: "body",
  type: "rich-text",
  isBody: true,
  required: true
};

export { blocksField, titleField, bodyField };