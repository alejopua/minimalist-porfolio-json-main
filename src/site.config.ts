import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
	author: "Pedro Alejandro Ramirez",
	title: "Astro Theme Cactus",
	description: "An opinionated starter theme for Astro",
	lang: "en-GB",
	ogLocale: "en_GB",
	date: {
		locale: "en-GB",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	}
};

// Used to generate links in both the Header.
export const menuLinks: Array<{ title: string; path: string }> = [
	{
		title: "CuHome",
		path: "/",
	},
	{
		title: "404",
		path: "/404/",
	},
];

