import { tinaField, useTina } from "tinacms/dist/react";
import type { PageQuery, PageQueryVariables } from "../__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";

type Props = {
	variables: PageQueryVariables;
	data: PageQuery;
	query: string;
}

const TinaPageSimple = (props: Props) => {
	const { data } = useTina({
		query: props.query,
		variables: props.variables,
		data: props.data,
	})

	const page = data.page;

	// Return different content depending on page.__pageType

	return (
    <>
      <div className="prose" data-tina-field={tinaField(page, 'body')}>
        <TinaMarkdown content={page.body} />
      </div>
    </>
  )
}

export default TinaPageSimple;
