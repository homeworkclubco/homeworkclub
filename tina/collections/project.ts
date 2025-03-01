import { TagsField, type Collection } from "tinacms";
import { blocksField, titleField, slugifyFilename } from "../fieldDefs";
import { pageSeo } from "@tina/fieldDefs/pageSeo";

export const ProjectCollection: Collection = {

  name: "project",
  label: "Projects",
  path: "src/content/work",
  format: "mdx",
  ui: {
    router({ document }) {
      return `/work/${document._sys.filename}`;
    },
    filename: slugifyFilename,
  },
  fields: [
    titleField,
    {
      name: "subtitle",
      label: "Subtitle",
      type: "string",
    },
    {
      name: "mainImage",
      label: "Image",
      type: "image",
      description: "must be square"
    },
    {
      name: "mainImageAlt",
      label: "Image Alt Text",
      type: "string",
    },
    {
      name: "tags",
      label: "Tags",
      type: "string",
      list: true,
      ui: {
        component: 'tags',
      },
    },
    {
      name: "pubDate",
      label: "Publication Date",
      type: "datetime",
    },
    {
      name: "updatedDate",
      label: "Updated Date",
      type: "datetime",
    },
    // @ts-ignore,
    blocksField(),
    pageSeo,
  ],
}
