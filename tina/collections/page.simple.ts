import { defaultPageSeo, pageSeo } from "../fieldDefs/pageSeo"
import { titleField, bodyField } from "../fieldDefs";
import { type TinaField } from "tinacms";

/* -------------------------------------------------------------------------- /
  Contact page template
/ -------------------------------------------------------------------------- */

export const simplePageTemplate = {
  name: "simple",
  label: "Simple (text) page",
  ui: {
    defaultItem: {
      title: "New Page",
      body: "",
      seo: defaultPageSeo,
    },
  },
  fields: [
    titleField,
    bodyField,
    pageSeo,
  ],
};