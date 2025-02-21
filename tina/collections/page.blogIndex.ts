import { defaultPageSeo, pageSeo } from "../fieldDefs/pageSeo"
import { titleField, bodyField } from "../fieldDefs";
import { type TinaField } from "tinacms";

/* -------------------------------------------------------------------------- /
  Blog index page template
/ -------------------------------------------------------------------------- */

export const blogIndexPageTemplate = {
  label: "Blog List Page",
  name: "blogIndex",
  ui: {
    defaultItem: {
      title: "Blog",
      body: "",
      seo: defaultPageSeo,
    },
  },
  fields: [titleField, pageSeo],
};