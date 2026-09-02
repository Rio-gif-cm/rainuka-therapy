/**
 * FAQ Schema Generator for Rainuka Therapy
 * Generates schema.org FAQPage markup for all FAQ pages
 * Used for Google Rich Results (FAQ snippets in search results)
 * 
 * FAQPage schema enhances:
 * - Search visibility with FAQ rich snippets
 * - Click-through rates with expandable Q&A in SERP
 * - User experience in Google Search
 * 
 * Applied to:
 * - /faq (general therapy FAQs)
 * - /perinatal-faq (perinatal/postpartum specific)
 * - /adhd-faq (ADHD diagnosis and management)
 */

export interface FAQItem {
  q: string
  a: string
}

/**
 * Generate FAQPage schema from array of Q&A pairs
 * @param faqs - Array of FAQ items with question (q) and answer (a)
 * @param pageUrl - Full URL of the FAQ page (for @id)
 * @param pageTitle - SEO title of the FAQ page
 * @returns JSON-LD schema object for FAQPage
 */
export const getFAQPageSchema = (
  faqs: FAQItem[],
  pageUrl: string,
  pageTitle: string
) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': pageUrl,
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
  // Breadcrumb context (optional, helps with search)
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://rainuka-therapy.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: pageTitle,
        item: pageUrl,
      },
    ],
  },
})

/**
 * Generate multiple FAQPage schemas (for main FAQ page)
 * When FAQ content is too long, split into multiple FAQPage entries
 * This is a pattern for pages with 50+ questions
 * @param faqs - Full array of FAQ items
 * @param pageUrl - Full URL of the FAQ page
 * @param pageTitle - SEO title
 * @param itemsPerPage - How many items per schema (default 30)
 * @returns Array of schema objects (usually just 1 unless very large)
 */
export const getFAQPageSchemaMultiple = (
  faqs: FAQItem[],
  pageUrl: string,
  pageTitle: string,
  itemsPerPage: number = 30
) => {
  const schemas = []
  for (let i = 0; i < faqs.length; i += itemsPerPage) {
    const chunk = faqs.slice(i, i + itemsPerPage)
    schemas.push(getFAQPageSchema(chunk, pageUrl, pageTitle))
  }
  return schemas
}

/**
 * Combine FAQPage with LocalBusiness schema
 * For maximum rich result opportunity
 * @param faqs - Array of FAQ items
 * @param pageUrl - Full page URL
 * @param organizationSchema - LocalBusiness schema from lib/schema.ts
 * @returns Combined schema with FAQPage and organization context
 */
export const getFAQPageWithOrganization = (
  faqs: FAQItem[],
  pageUrl: string,
  organizationSchema: any
) => {
  const faqSchema = getFAQPageSchema(faqs, pageUrl, 'Frequently Asked Questions')
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organizationSchema,
      faqSchema,
    ],
  }
}

/**
 * Schema for Perinatal FAQ (specialized)
 * Adds MedicalWebPage context for health content quality
 */
export const getPerinatalFAQSchema = (
  faqs: FAQItem[],
  pageUrl: string
) => {
  const baseSchema = getFAQPageSchema(faqs, pageUrl, 'Perinatal & Postpartum FAQs')
  return {
    ...baseSchema,
    // Add health-specific markup
    '@type': ['FAQPage', 'MedicalWebPage'],
    medicalAudience: ['Patient', 'Pregnant'],
    specialty: 'Perinatal Mental Health',
  }
}

/**
 * Schema for ADHD FAQ (specialized)
 * Adds medical context for diagnosis-related content
 */
export const getADHDFAQSchema = (
  faqs: FAQItem[],
  pageUrl: string
) => {
  const baseSchema = getFAQPageSchema(faqs, pageUrl, 'ADHD Diagnosis FAQs')
  return {
    ...baseSchema,
    '@type': ['FAQPage', 'MedicalWebPage'],
    medicalAudience: ['Patient', 'Adult'],
    specialty: 'Adult ADHD Diagnosis',
  }
}
