/**
 * Consolidated schema.org structured data for Rainuka Therapy
 * Single source of truth for LocalBusiness and AggregateRating schemas
 * Licensed in: Canada (primary), California (US), Florida (US)
 * Privacy: PIPEDA-compliant (Canada primary), HIPAA-compliant (US)
 * Used in app/layout.tsx (global) to avoid duplication
 */

/**
 * LocalBusiness schema for organization credibility + SEO
 * @id is globally unique across the site (not page-specific)
 * Includes ProfessionalService type for therapy context
 * areaServed: Canada (primary), California (CA), Florida (FL)
 */
export const getLocalBusinessSchema = (config?: {
  telephone?: string
  email?: string
  priceRange?: string
  image?: string
}) => ({
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  '@id': 'https://rainuka-therapy.com#organization',
  name: 'Rainuka Therapy',
  description: 'Trauma-informed therapy for perinatal/reproductive mental health, adult ADHD diagnosis, and career transitions. Licensed therapist in Canada, California, and Florida.',
  url: 'https://rainuka-therapy.com',
  telephone: config?.telephone || '+1-555-123-4567',
  email: config?.email || 'contact@rainuka-therapy.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CA',
    addressRegion: 'ON',
    addressLocality: 'Toronto',
  },
  areaServed: [
    {
      '@type': 'Country',
      name: 'Canada',
    },
    {
      '@type': 'State',
      name: 'California',
    },
    {
      '@type': 'State',
      name: 'Florida',
    },
  ],
  priceRange: config?.priceRange || '$$',
  image: config?.image || 'https://rainuka-therapy.com/logo.png',
  sameAs: [],
  // Therapist credential markup for YMYL credibility
  // CRITICAL: Rainuka is primarily licensed in Canada. She also holds credentials in California and Florida.
  hasCredential: [
    {
      '@type': 'Credential',
      '@id': 'https://rainuka-therapy.com#credential-canada',
      name: 'Licensed Therapist (Canada)',
      credentialCategory: 'License',
      areaServed: {
        '@type': 'Country',
        name: 'Canada',
      },
      credentialSubject: {
        '@type': 'Person',
        name: 'Rainuka Oberoi',
      },
    },
    {
      '@type': 'Credential',
      '@id': 'https://rainuka-therapy.com#credential-california',
      name: 'Licensed Clinical Therapist (California)',
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
    {
      '@type': 'Credential',
      '@id': 'https://rainuka-therapy.com#credential-florida',
      name: 'Licensed Clinical Therapist (Florida)',
      credentialCategory: 'License',
      areaServed: {
        '@type': 'State',
        name: 'Florida',
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
