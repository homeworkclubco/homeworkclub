import { defaultPageSeo, pageSeo } from "../fieldDefs/pageSeo"
import { titleField, bodyField } from "../fieldDefs";
import { type TinaField } from "tinacms";

/* -------------------------------------------------------------------------- /
  Contact page template
/ -------------------------------------------------------------------------- */

export const contactPageTemplate = {
  label: "Contact page",
  name: "contact",
  ui: {
    defaultItem: {
      title: "Contact",
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