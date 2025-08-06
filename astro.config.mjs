// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Wilsons and Related',
			editLink: {
        		baseUrl: 'https://github.com/WilsonsAndRelated/WilsonsAndRelated.github.io',
      		},
			tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 6 },
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/WilsonsAndRelated/WilsonsAndRelated.github.io' }],
			sidebar: [
				{
					label: 'Reference',
					items: [
						{ label: 'Fantasy Football Rulebook', slug: 'rulebook'}
					],
				},
			],
		}),
	],
        site: 'https://wilsonsandrelated.github.io/'
});
