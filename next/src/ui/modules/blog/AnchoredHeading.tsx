import { slug } from '@/lib/utils'
import type { PortableTextBlock, PortableTextComponentProps } from 'next-sanity'

export default function AnchoredHeading({
	as: Tag,
	children,
	value,
}: {
	as: keyof JSX.IntrinsicElements
} & PortableTextComponentProps<PortableTextBlock>) {
	const id = slug(value.children[0].text)

	return (
		<Tag id={id}>
			{children}

			<a href={`#${id}`}>🔗</a>
		</Tag>
	)
}
