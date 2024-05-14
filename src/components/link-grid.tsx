import { getLinks } from "~/actions/links"
import { LinkCard } from "~/components/link-card"
import { NoItems } from "~/components/svg"

interface Props {
	tagFilter?: string
}

export const LinkGrid: React.FC<Props> = async ({ tagFilter }) => {
	const links = await getLinks(tagFilter)

	if (!links.length) {
		return (
			<>
				<NoItems className="mx-auto mb-4 mt-36 w-full" />
				<p className="mb-36 text-center text-xl">No hay links 🥴</p>
			</>
		)
	}

	return (
		<section className="mb-40 mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:md:grid-cols-4">
			<h2 className="sr-only">Tarjetas de links</h2>
			{links.map((link) => (
				<LinkCard key={link.id} link={link} />
			))}
		</section>
	)
}
