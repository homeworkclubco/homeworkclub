/* -------------------------------------------------------------------------- /
  Pages config

  All pages are set up as templates options which allows us to configure the
  fields for each page type. The `ui.router` function is used to generate the
  URL for each page based on the filename of the page.
/ -------------------------------------------------------------------------- */

import type { Collection, TinaField } from "tinacms";

import { defaultPageSeo, pageSeo } from "../fieldDefs/pageSeo";
import { contactPageTemplate } from "./page.contact";
import { blogIndexPageTemplate } from "./page.blogIndex";
import { blockPageTemplate } from "./page.block";
import { simplePageTemplate } from "./page.simple";

const titleField: TinaField = {
  name: "title",
  type: "string",
  description: "For internal reference only",
  required: true,
};

const bodyField: TinaField = {
  name: "body",
  type: "rich-text",
  isBody: true,
  required: true
};

export const PageCollection: Collection = {
  name: "page",
  label: "Pages",
  path: "src/content/page",
  format: "mdx",
  ui: {
    router: ({ document }) => {
      return `/${document._sys.filename.toLowerCase()}`;
    },
  },
  templates: [
    simplePageTemplate,
    // @ts-ignore
    blockPageTemplate,
    contactPageTemplate,
    blogIndexPageTemplate
    
    
  ]
}
