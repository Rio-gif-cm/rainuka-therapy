import type { Metadata } from 'next'
import { Merriweather, Inter } from 'next/font/google'
import './globals.css'

const merriweather = Merriweather({
  variable: '--font-merriweather',
  subsets: ['latin'],
  weight: ['400', '700'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Rainuka Oberoi, LCSW | Therapy for Perinatal, ADHD & Career',
  description: 'Trauma-informed therapy for perinatal/reproductive mental health, adult ADHD diagnosis, and career transitions. Telehealth available. Sliding scale. Based in [location].',
  keywords: 'therapy, therapist, perinatal mental health, ADHD, career counseling, postpartum anxiety, reproductive trauma',
  openGraph: {
    title: 'Rainuka Oberoi, LCSW | Therapy for Perinatal, ADHD & Career',
    description: 'Trauma-informed therapy for perinatal/reproductive mental health, adult ADHD diagnosis, and career transitions.',
    type: 'website',
  },
  // Tailwind CSS will now compile correctly with Next.js 16 auto-detection
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Schema.org JSON-LD structured data for SEO
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    name: 'Rainuka Oberoi, LCSW',
    description: 'Trauma-informed therapy for perinatal/reproductive mental health, adult ADHD diagnosis, and career transitions.',
    url: 'https://rainukatherapy.com',
    telephone: '+1-XXX-XXX-XXXX', // Update with actual phone
    email: 'contact@rainukatherapy.com', // Update with actual email
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
      addressRegion: 'CA', // Update with actual state
      addressLocality: 'San Francisco', // Update with actual city
    },
    sameAs: [
      // Add social media links
    ],
    areaServed: {
      '@type': 'State',
      name: 'California',
    },
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      // Update with actual hours
    },
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
  }

  return (
    <html lang="en" className={`${merriweather.variable} ${inter.variable}`}>
      <head>
        <meta name="description" content="Therapy for perinatal mental health, adult ADHD, and career transitions." />
        {/* Schema.org structured data for LocalBusiness + ProfessionalService */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema, null, 2),
          }}
        />
        {/* Build ID: b6b97ca-rebuilt */}
      </head>
      <body 
        className="font-sans bg-warm-gray-50 text-warm-gray-700"
        style={{
          backgroundColor: '#faf9f7',
          color: '#5e534a',
          fontFamily: 'var(--font-inter)',
          lineHeight: '1.6',
        }}
      >
        {/* Skip to main content link - visually hidden but keyboard accessible */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:bg-sage-400 focus:text-white focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
// Build timestamp: Mon, Aug 31, 2026  1:36:50 PM
// deploy
