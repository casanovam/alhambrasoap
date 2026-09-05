import { defineConfig } from 'astro/config';

// Set SITE_URL / BASE_PATH when deploying (e.g. GitHub Pages: BASE_PATH=/alhambrasoap)
export default defineConfig({
  site: process.env.SITE_URL || 'https://casanovam.github.io',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
