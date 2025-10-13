
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
	integrations: [tailwind()],
    site: 'https://wworoszczuk-blue.github.io',
    base: '/ELIVION-landing-page',
    outDir: './dist'
});
