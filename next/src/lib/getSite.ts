import { fetchSanity, groq } from './sanity'

export default async function getSite() {
	return await fetchSanity<Sanity.Site>(
		groq`
			*[_type == 'site'][0]{
				...,
				menu[]{
					...,
					internal->{ _type, title, metadata },
					links[]{
						...,
						internal->{ _type, title, metadata }
					}
				},
				'ogimage': ogimage.asset->url
			}
		`,
		{ tags: ['site'] },
	)
}
