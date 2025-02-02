import { tinaField, useTina } from "tinacms/dist/react";
import type { ContactPageQuery, ContactPageQueryVariables, PageQuery, PageQueryVariables } from "../__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Blocks } from "../blocks";

type Props = {
	variables: ContactPageQueryVariables;
	data: ContactPageQuery;
	query: string;
}

const ContactPage = (props: Props) => {
	const { data } = useTina({
		query: props.query,
		variables: props.variables,
		data: props.data,
	})

	const page = data.contactPage;


	return (
		<main id="main">
			<Blocks blocks={page.blocks} />
			<div data-tina-field={tinaField(page, "body")}>
				<TinaMarkdown content={page.body} />
			</div>
		</main>
	)
}

export default ContactPage;
