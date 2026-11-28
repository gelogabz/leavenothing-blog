// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://gelogabz.github.io',
  base: '/leavenothing-blog',
  integrations: [sitemap()],
});
