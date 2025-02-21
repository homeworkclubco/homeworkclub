import { defaultPageSeo, pageSeo } from "../fieldDefs/pageSeo"
import { titleField, bodyField, blocksField } from "../fieldDefs";
import { type TinaField } from "tinacms";


/* -------------------------------------------------------------------------- /
  Contact page template
/ -------------------------------------------------------------------------- */

export const blockPageTemplate = {
  name: 'page',
  label: 'Block Page',
  ui: {
    defaultItem: {
      title: "New Page",
      blocks: [],
      seo: defaultPageSeo,
    },
  },
  fields: [
    titleField,
    blocksField(), // use defaults
    pageSeo,
  ]
};