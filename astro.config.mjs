// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Wilsons and Related',
			tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 6 },
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/WilsonsAndRelated/WilsonsAndRelated.github.io' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
        site: 'https://wilsonsandrelated.github.io/'
});
