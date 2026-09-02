import type { Metadata } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'
import './sensory-friendly.css'
import './micro-interactions.css'
import GoogleAnalyticsWrapper from '@/components/GoogleAnalyticsWrapper'
import { getLocalBusinessSchema, getAggregateRatingSchema } from '@/lib/schema'

/**
 * TYPEFACE PAIRING
 *
 * Fraunces (display serif) + Inter (text sans).
 *
 * Why Fraunces over Merriweather: Merriweather is a sturdy screen slab -
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
 * `display: 'swap'` + preloaded subsets keeps LCP intact - text paints
 * immediately in the fallback and reflows once.
 */
const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  // Variable font: omit `weight` so the full 300-700 range is available.
  // next/font rejects `axes` when an explicit weight list is supplied.
  // `opsz` is the axis that powers `font-optical-sizing: auto` in globals.css -
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
  title: 'Wonderloud Therapy | Therapy for Perinatal, ADHD & Career',
  description: 'Trauma-informed therapy for perinatal/reproductive mental health, adult ADHD diagnosis, and career transitions. Telehealth available. Sliding scale. Based in [location].',
  keywords: 'therapy, therapist, perinatal mental health, ADHD, career counseling, postpartum anxiety, reproductive trauma',
  openGraph: {
    title: 'Wonderloud Therapy | Therapy for Perinatal, ADHD & Career',
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
                    // LCP element type captured for monitoring
                    const lcpValue = entry.renderTime || entry.loadTime;
                    const status = lcpValue < 2500 ? '✓ GOOD' : '⚠ NEEDS IMPROVEMENT';
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
                      // CLS threshold tracking (0.1 is the good target)
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
              if (getLCP) getLCP(metric => { /* LCP metric captured */ });
              if (getFCP) getFCP(metric => { /* FCP metric captured */ });
              if (getCLS) getCLS(metric => { /* CLS metric captured */ });
            }
          `,
        }}
      />
    )
  }

  // Schema.org JSON-LD structured data for SEO
  // Consolidated from lib/schema.ts (single source of truth)
  const organizationSchema = getLocalBusinessSchema()

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
            above) - a manual Google Fonts <link> would add a redundant
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
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:bg-burgundy-400 focus:text-white focus:px-4 focus:py-2 focus:rounded"
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
