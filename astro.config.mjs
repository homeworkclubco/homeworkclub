// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tinaDirective from "./astro-tina-directive/register"
import netlify from '@astrojs/netlify';
import { imageService } from '@unpic/astro/service'


import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), react(), tinaDirective(), icon()],
  image: {
    service: imageService(),
    domains: ['assets.tina.io'],
  },

  redirects: {
    '/admin': '/admin/index.html',
  },

  adapter: netlify(),
})