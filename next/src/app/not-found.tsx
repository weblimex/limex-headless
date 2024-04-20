import { fetchSanity, groq } from '@/lib/sanity'
import Modules from '@/ui/modules'

export default async function NotFound() {
	const page = await get404()
	if (!page) return <h1 className="text-center text-5xl">404</h1>
	return <Modules modules={page?.modules} />
}

export async function generateMetadata() {
	return (await get404())?.metadata
}

async function get404() {
	return await fetchSanity<Sanity.Page>(
		groq`*[_type == 'page' && metadata.slug.current == '404'][0]{
			...,
			modules[]{
				...,
				ctas[]{
					...,
					link{
						...,
						internal->{ title, metadata }
					}
				}
			}
		}`,
		{
			tags: ['404'],
		},
	)
}
