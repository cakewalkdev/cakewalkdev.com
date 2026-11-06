import type { APIRoute } from 'astro'
import { SITE, description } from '../data/schema'

// A plain-text map of the site for language models (https://llmstxt.org)
export const GET: APIRoute = () => {
  const link = (title: string, path: string, note: string) => `- [${title}](${SITE}${path}): ${note}`

  const body = [
    '# Cakewalk',
    '',
    `> ${description}`,
    '',
    'Cakewalk is Matt Waler (https://mattwaler.com) and Aaron Bushnell (https://aaronmbushnell.com), developers with 30+ years of experience. They build CMS-driven sites (mostly Statamic), static sites, and custom integrations, then handle hosting, updates, and maintenance. Every project gets a fixed price up front.',
    '',
    '## Pages',
    '',
    link('Home', '/', 'What Cakewalk offers, the tools behind it, recent work, client testimonials, and a contact form.'),
    link('Contact', '/#contact', 'Get in touch about a website, application, or integration.'),
    '',
  ].join('\n')

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
