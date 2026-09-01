/**
 * Schema.org structured data utilities for rich snippets and SEO
 */

/**
 * Generate BreadcrumbList schema for hierarchical navigation
 * @param items - Array of {name, url} objects
 * @returns Schema.org BreadcrumbList JSON-LD
 */
export function generateBreadcrumbList(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/**
 * Generate VideoObject schema for video testimonials
 * @param videoData - Video details
 * @returns Schema.org VideoObject JSON-LD
 */
export function generateVideoObject(videoData: {
  name: string
  description: string
  url: string
  thumbnailUrl?: string
  uploadDate?: string
  duration?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: videoData.name,
    description: videoData.description,
    url: videoData.url,
    thumbnailUrl: videoData.thumbnailUrl || '',
    uploadDate: videoData.uploadDate || new Date().toISOString(),
    duration: videoData.duration || 'PT5M',
  }
}

/**
 * Generate AggregateRating schema with Review items
 * @param ratingData - Rating details
 * @returns Schema.org AggregateRating JSON-LD
 */
export function generateAggregateRating(ratingData: {
  ratingValue: string | number
  bestRating?: number
  worstRating?: number
  ratingCount: number
  reviewCount?: number
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    ratingValue: String(ratingData.ratingValue),
    bestRating: ratingData.bestRating || 5,
    worstRating: ratingData.worstRating || 1,
    ratingCount: ratingData.ratingCount,
    reviewCount: ratingData.reviewCount || ratingData.ratingCount,
  }
}

/**
 * Generate LocalBusiness schema
 * @param businessData - Business details
 * @returns Schema.org LocalBusiness JSON-LD
 */
export function generateLocalBusiness(businessData: {
  name: string
  description: string
  url: string
  telephone?: string
  email?: string
  address?: {
    addressCountry: string
    addressRegion: string
    addressLocality: string
  }
  areaServed?: { type: string; name: string }
  priceRange?: string
  image?: string
  sameAs?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': 'https://rainukatherapy.com#local-business',
    name: businessData.name,
    description: businessData.description,
    url: businessData.url,
    telephone: businessData.telephone,
    email: businessData.email,
    address: businessData.address
      ? {
          '@type': 'PostalAddress',
          ...businessData.address,
        }
      : undefined,
    areaServed: businessData.areaServed,
    priceRange: businessData.priceRange,
    image: businessData.image,
    sameAs: businessData.sameAs || [],
  }
}

/**
 * Generate FAQPage schema
 * @param faqs - Array of {q, a} objects
 * @returns Schema.org FAQPage JSON-LD
 */
export function generateFAQPage(faqs: Array<{ q: string; a: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }
}
