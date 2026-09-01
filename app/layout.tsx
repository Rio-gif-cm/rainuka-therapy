import type { Metadata } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'
import './sensory-friendly.css'
import './micro-interactions.css'
import GoogleAnalyticsWrapper from '@/components/GoogleAnalyticsWrapper'

/**
 * TYPEFACE PAIRING
 *
 * Fraunces (display serif) + Inter (text sans).
 *
 * Why Fraunces over Merriweather: Merriweather is a sturdy screen slab —
 * it reads institutional, and it only ships 400/700, which forces every
 * heading to be either plain or heavy. Fraunces is a VARIABLE font with a
 * true optical-size axis, so headings get refined high-contrast letterforms
 * at display sizes and sturdier ones at small sizes, automatically. That
 * optical compensation is the thing that makes editorial typography read
 * "expensive" rather than merely "big".
 *
 * The weight range 300-700 lets the scale run LIGHT at large sizes (h1 at
 * 400, display at 400) and heavier at small sizes (h3/h4 at 600) so optical
 * heft stays constant down the ramp.
 *
 * `display: 'swap'` + preloaded subsets keeps LCP intact — text paints
 * immediately in the fallback and reflows once.
 */
const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  // Variable font: omit `weight` so the full 300-700 range is available.
  // next/font rejects `axes` when an explicit weight list is supplied.
  // `opsz` is the axis that powers `font-optical-sizing: auto` in globals.css —
  // without it declared here the browser has no optical-size axis to animate.
  axes: ['opsz', 'SOFT', 'WONK'],
  style: ['normal', 'italic'],
  display: 'swap',
  fallback: ['Iowan Old Style', 'Palatino Linotype', 'Georgia', 'serif'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  fallback: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
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
                    console.log('[Perf] LCP:', entry.renderTime || entry.loadTime, 'ms | Element:', (entry as any).element?.tagName);
                    // Track LCP threshold compliance
                    const lcpValue = entry.renderTime || entry.loadTime;
                    const status = lcpValue < 2500 ? '✓ GOOD' : '⚠ NEEDS IMPROVEMENT';
                    console.log('[Perf] LCP Status:', status, `(${lcpValue}ms / 2500ms target)`);
                    // Send to analytics if needed
                    if (window.gtag) {
                      gtag('event', 'page_view', { 
                        value: entry.renderTime || entry.loadTime,
                        metric_category: 'web_vitals'
                      });
                    }
                  });
                });
                observer.observe({ entryTypes: ['largest-contentful-paint'] });
              } catch (error) {
                console.warn('[Perf] LCP monitoring failed:', error);
              }
            }
            
            // CLS (Cumulative Layout Shift) monitoring
            if ('PerformanceObserver' in window) {
              try {
                let clsValue = 0;
                const observer = new PerformanceObserver((list) => {
                  for (const entry of list.getEntries()) {
                    if (!(entry as any).hadRecentInput) {
                      clsValue += (entry as any).value;
                      console.log('[Perf] CLS Updated:', clsValue.toFixed(3), '|', (clsValue < 0.1 ? '✓ GOOD' : '⚠ NEEDS IMPROVEMENT'));
                    }
                  }
                });
                observer.observe({ entryTypes: ['layout-shift'] });
              } catch (error) {
                console.warn('[Perf] CLS monitoring failed:', error);
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
  // Enhanced with therapist credential markup for YMYL credibility signals
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': 'https://rainukatherapy.com#organization',
    name: 'Rainuka Oberoi, LCSW',
    description: 'Trauma-informed therapy for perinatal/reproductive mental health, adult ADHD diagnosis, and career transitions.',
    url: 'https://rainukatherapy.com',
    telephone: '+1-555-123-4567',
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
    // THERAPIST CREDENTIAL MARKUP - SEO credibility enhancement for YMYL
    hasCredential: [
      {
        '@type': 'Credential',
        '@id': 'https://rainukatherapy.com#lcsw-credential',
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
        // Extend with actual license details when available:
        // validFrom: 'YYYY-MM-DD',
        // validThrough: 'YYYY-MM-DD',
        // sameAs: 'https://search.dca.ca.gov/' // California license lookup URL
      },
    ],
    // Enhanced specialties for structured medical data
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
  }

  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <meta name="description" content="Therapy for perinatal mental health, adult ADHD, and career transitions." />
        
        {/* DNS Prefetch for critical third-party domains */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Prefetch critical pages for faster navigation (LCP optimization) */}
        <link rel="prefetch" href="/" as="document" fetchPriority="high" />
        <link rel="prefetch" href="/booking" as="document" fetchPriority="high" />
        <link rel="prefetch" href="/about" as="document" fetchPriority="low" />
        <link rel="prefetch" href="/perinatal" as="document" fetchPriority="low" />
        <link rel="prefetch" href="/adhd" as="document" fetchPriority="low" />
        {/* Fonts are self-hosted and preloaded by next/font (see Fraunces/Inter
            above) — a manual Google Fonts <link> would add a redundant
            third-party round trip and re-introduce the very render-block
            next/font exists to remove. */}
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
          /* Font family, size and leading intentionally come from the type
             scale in globals.css. An inline fontFamily/lineHeight here would
             win the cascade and silently defeat the token system. */
        }}
      >
        {/* Google Analytics 4 - Event Tracking Setup */}
        <GoogleAnalyticsWrapper />

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
