# 🍰 Cakewalk

The website for [Cakewalk](https://cakewalkdev.com), built on Astro.

## 🧰 Tools

- [Astro](https://astro.build/)
- [TailwindCSS](https://tailwindcss.com/)
- [Alpine.js](https://alpinejs.dev/)
- [AOS](https://michalsnik.github.io/aos/)

## ⭐️ Requirements

- [Node](https://nodejs.org/en/)
- [NVM](https://github.com/nvm-sh/nvm)

## 🛠 Getting Started

- `nvm use` to switch to the valid node version
- `npm i` to install dependencies
- `npm run dev` to boot up a live-reloading dev server
- `npm run build` to build your production-ready site into `dist`
- `npm run preview` to serve that build locally

## ☁️ Hosting

The site deploys to Cloudflare as static files. `public/_headers` sets long-lived caching on Astro's fingerprinted assets, and the contact form posts to [Static Forms](https://staticforms.dev).
