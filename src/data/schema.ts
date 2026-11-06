export type SchemaNode = Record<string, unknown>
export type Breadcrumb = { name: string; url: string }

export const SITE = 'https://cakewalkdev.com'
export const ORGANIZATION_ID = `${SITE}/#organization`
export const WEBSITE_ID = `${SITE}/#website`

export const organizationRef = { '@id': ORGANIZATION_ID }
export const websiteRef = { '@id': WEBSITE_ID }

export const description = 'Cakewalk creates best-in-class websites and applications within a simple price structure.'

export const founders: SchemaNode[] = [
  { '@type': 'Person', name: 'Matt Waler', url: 'https://mattwaler.com' },
  { '@type': 'Person', name: 'Aaron Bushnell', url: 'https://aaronmbushnell.com' },
]

export const organization: SchemaNode = {
  '@type': 'Organization',
  '@id': ORGANIZATION_ID,
  name: 'Cakewalk',
  alternateName: 'Cakewalk Development',
  url: SITE,
  logo: `${SITE}/favicon-100x100.png`,
  description,
  founder: founders,
  knowsAbout: [
    'Web Development',
    'Content Management Systems',
    'Static Websites',
    'Website Hosting and Maintenance',
    'Laravel',
    'Statamic',
    'Astro',
    'Tailwind CSS',
    'Alpine.js',
  ],
}

export const website: SchemaNode = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  name: 'Cakewalk',
  url: SITE,
  description,
  inLanguage: 'en-US',
  publisher: organizationRef,
}

export const breadcrumbList = (crumbs: Breadcrumb[]): SchemaNode => ({
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: crumb.url,
  })),
})
