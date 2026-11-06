import { defineConfig, fontProviders } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'

const site = 'https://cakewalkdev.com'

export default defineConfig({
  site,
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  // Self-hosted with metric-matched fallbacks, so text never waits on Google Fonts
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Anton',
      cssVariable: '--font-anton',
      weights: [400],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
    {
      // Variable, so every weight the body text uses (regular through extrabold) comes from one file.
      // Upright only: nothing sets body text in italic, so the italic file would be a wasted preload.
      provider: fontProviders.fontsource(),
      name: 'Nunito Sans',
      cssVariable: '--font-nunito-sans',
      weights: ['400 800'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap(),
  ],
})
