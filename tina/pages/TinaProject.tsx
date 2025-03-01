import { tinaField, useTina } from "tinacms/dist/react";
import type { ProjectQuery, ProjectQueryVariables } from "../__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Blocks } from "@tina/blocks";

type Props = {
	variables: ProjectQueryVariables;
	data: ProjectQuery;
	query: string;
}

const TinaProject = (props: Props) => {
	const { data } = useTina({
		query: props.query,
		variables: props.variables,
		data: props.data,
	})

	const project = data.project;

	return (
    <main id="main">
      <Blocks data={project.blocks} />
    </main>
  )
}

export default TinaProject;
