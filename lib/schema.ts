/**
 * Consolidated schema.org structured data for Wonderloud Therapy
 * Single source of truth for LocalBusiness and AggregateRating schemas
 * Used in app/layout.tsx (global) to avoid duplication
 */

/**
 * LocalBusiness schema for organization credibility + SEO
 * @id is globally unique across the site (not page-specific)
 * Includes ProfessionalService type for therapy context
 */
export const getLocalBusinessSchema = (config?: {
  telephone?: string
  email?: string
  priceRange?: string
  image?: string
}) => ({
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  '@id': 'https://wonderloudtherapy.com#organization',
  name: 'Wonderloud Therapy',
  description: 'Trauma-informed therapy for perinatal/reproductive mental health, adult ADHD diagnosis, and career transitions.',
  url: 'https://wonderloudtherapy.com',
  telephone: config?.telephone || '+1-555-123-4567',
  email: config?.email || 'contact@wonderloudtherapy.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
    addressRegion: 'CA',
    addressLocality: 'San Francisco',
  },
  areaServed: {
    '@type': 'State',
    name: 'California',
  },
  priceRange: config?.priceRange || '$$',
  image: config?.image || 'https://wonderloudtherapy.com/logo.png',
  sameAs: [],
  // Therapist credential markup for YMYL credibility
  hasCredential: [
    {
      '@type': 'Credential',
      '@id': 'https://wonderloudtherapy.com#lcsw-credential',
      name: 'Licensed Clinical Social Worker (LCSW)',
      credentialCategory: 'License',
      areaServed: {
        '@type': 'State',
        name: 'California',
      },
      credentialSubject: {
        '@type': 'Person',
        name: 'Rainuka Oberoi',
      },
    },
  ],
  medicalSpecialty: [
    'Perinatal Mental Health',
    'Postpartum Anxiety',
    'Reproductive Trauma',
    'Adult ADHD Diagnosis',
    'Career Counseling',
    'Trauma-Informed Therapy',
  ],
  specialties: [
    'Perinatal Mental Health',
    'Postpartum Anxiety',
    'Adult ADHD Diagnosis',
    'Career Counseling',
    'Trauma-Informed Therapy',
    'Reproductive Mental Health',
  ],
  knowsAbout: [
    'Perinatal mental health',
    'ADHD',
    'Career transitions',
    'Reproductive trauma',
    'Postpartum anxiety',
  ],
  availableLanguage: ['en'],
})

/**
 * AggregateRating schema for testimonials/social proof
 * Dynamically accounts for actual testimonial count
 * @id anchors to the parent LocalBusiness for implicit relationship
 */
export const getAggregateRatingSchema = (testimonialCount: number) => ({
  '@context': 'https://schema.org',
  '@type': 'AggregateRating',
  '@id': 'https://wonderloudtherapy.com#aggregate-rating',
  ratingValue: '5',
  bestRating: '5',
  worstRating: '1',
  ratingCount: String(testimonialCount),
  reviewCount: String(testimonialCount),
})
