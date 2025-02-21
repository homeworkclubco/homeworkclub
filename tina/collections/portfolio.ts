import type { Collection } from "tinacms";
import { blocksField, titleField } from "../fieldDefs";
import { pageSeo } from "@tina/fieldDefs/pageSeo";

export const ProjectsCollection: Collection = {

  name: "projects",
  label: "Projects",
  path: "src/content/work",
  format: "mdx",
  ui: {
    router({ document }) {
      return `/work/${document._sys.filename}`;
    },
  },
  fields: [
    titleField,
    // @ts-ignore,
    blocksField(),
    {
      name: "description",
      label: "Description",
      type: "string",
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
    {
      name: "heroImage",
      label: "Hero Image",
      type: "image",
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
    },
    pageSeo,
  ],
}
