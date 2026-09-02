import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://wonderloud-therapy.com'

  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/accessibility',
    '/adhd',
    '/adhd-faq',
    '/back-to-school',
    '/bipoc',
    '/booking',
    '/career',
    '/case-studies',
    '/contact',
    '/faq',
    '/guides',
    '/grief-loss',
    '/infertility',
    '/internal-medicine',
    '/lgbtq',
    '/men',
    '/mobile-therapy',
    '/neurodivergent',
    '/perinatal',
    '/postpartum-anxiety',
    '/postpartum-depression',
    '/pregnancy-loss',
    '/residential-therapy',
    '/sliding-scale',
    '/somatic',
    '/specialties',
    '/testimonials',
    '/therapy-faqs',
    '/therapy-modalities',
    '/trauma',
    '/waitlist',
  ]

  const sitemapEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route === '' ? '' : route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }))

  return sitemapEntries
}
