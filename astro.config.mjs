import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import robotsTxt from 'astro-robots-txt';
import webmanifest from 'astro-webmanifest';

// https://astro.build/config
export default defineConfig({
  site: "https://andrewalmasi.github.io",
  experimental: {
    integrations: true,
  },
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    compress({
      css: true,
      html: false,
      js: true,
      img: false,
      svg: false,
    }),
    robotsTxt({
      sitemapBaseFileName: 'sitemap-index',
      policy: [
        {
          userAgent: 'Googlebot',
          allow: '/',
          crawlDelay: 2,
        },
      ],
    }),
    webmanifest({
      name: 'Andrew Almasi',
      icon: './public/favicon.svg',
      lang: 'en-US',
      short_name: 'arshia',
      description: "This is Andrew Arshia Almasi's Blog. Welcome!",
      theme_color: '#4455ef',
      background_color: '#4455ef',
      display: 'standalone',
    }),
  ],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  }
});
