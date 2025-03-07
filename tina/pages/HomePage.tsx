import { tinaField, useTina } from "tinacms/dist/react";
import type { PageQuery, PageQueryVariables } from "../__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Blocks } from "../blocks";

type Props = {
	variables: PageQueryVariables;
	data: PageQuery;
	query: string;
}

const HomePage = (props: Props) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })

  const page = data.page

  // Todo: I've started adding page templates - complete this job

  return (
    <>
      <Blocks blocks={page.blocks} />
      {/* <div data-tina-field={tinaField(page, "body")}>
				<TinaMarkdown content={page.body} />
			</div> */}
    </>
  )
}

export default HomePage;
