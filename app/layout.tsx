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
  // Service Worker Registration & Performance Monitoring Component
  const ServiceWorkerRegister = () => {
    if (typeof window === 'undefined') return null
    
    return (
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Register Service Worker for offline support and caching
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', async () => {
                try {
                  const registration = await navigator.serviceWorker.register('/sw.js', {
                    scope: '/',
                  });
                  console.log('[App] Service Worker registered:', registration);
                  
                  // Listen for updates
                  registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    newWorker.addEventListener('statechange', () => {
                      if (newWorker.state === 'activated') {
                        console.log('[App] Service Worker updated, refresh recommended');
                        // Optionally notify user to refresh
                      }
                    });
                  });
                } catch (error) {
                  console.warn('[App] Service Worker registration failed:', error);
                }
              });
            }
            
            // Performance monitoring: Log LCP (Largest Contentful Paint)
            if ('PerformanceObserver' in window) {
              try {
                const observer = new PerformanceObserver((list) => {
                  const entries = list.getEntries();
                  entries.forEach((entry) => {
                    console.log('[Perf] LCP:', entry.renderTime || entry.loadTime, 'ms');
                    // Send to analytics if needed
                    if (window.gtag) {
                      gtag('event', 'page_view', { value: entry.renderTime || entry.loadTime });
                    }
                  });
                });
                observer.observe({ entryTypes: ['largest-contentful-paint'] });
              } catch (error) {
                console.warn('[Perf] LCP monitoring failed:', error);
              }
            }
            
            // Report Web Vitals
            if ('web-vitals' in window) {
              const { getCLS, getFID, getFCP, getLCP, getTTFB } = window['web-vitals'] || {};
              if (getLCP) getLCP(metric => console.log('[Vitals] LCP:', metric.value));
              if (getFCP) getFCP(metric => console.log('[Vitals] FCP:', metric.value));
              if (getCLS) getCLS(metric => console.log('[Vitals] CLS:', metric.value));
            }
          `,
        }}
      />
    )
  }

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
        {/* Service Worker Registration & Performance Monitoring */}
        <ServiceWorkerRegister />
        
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
