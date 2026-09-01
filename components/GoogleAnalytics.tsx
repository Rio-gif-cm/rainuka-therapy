'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { pageview, GA_ID } from '@/lib/analytics';

/**
 * Google Analytics 4 Component
 * 
 * Handles:
 * 1. Initial GA4 script loading (strategy: afterInteractive)
 * 2. Automatic page view tracking on client-side route changes
 * 3. Scroll depth monitoring (25%, 50%, 75%, 100%)
 * 
 * To be used in app/layout.tsx or root layout
 */

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track page views on route changes
  useEffect(() => {
    if (!GA_ID) {
      console.warn('[Analytics] GA_ID not configured. Set NEXT_PUBLIC_GA_MEASUREMENT_ID in .env.local');
      return;
    }

    const url = `${pathname}${searchParams?.toString() ? `?${searchParams.toString()}` : ''}`;
    
    // Small delay to ensure title is updated
    const timer = setTimeout(() => {
      pageview(url, document.title);
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  // Track scroll depth milestones
  useEffect(() => {
    if (!GA_ID) return;

    const trackedDepths = new Set<number>();
    const depthThresholds = [25, 50, 75, 100];

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrolled = window.scrollY;

      // Calculate scroll depth as percentage
      const scrollDepth = Math.round(
        ((scrolled + windowHeight) / documentHeight) * 100
      );

      // Check if we've hit a new threshold
      for (const threshold of depthThresholds) {
        if (scrollDepth >= threshold && !trackedDepths.has(threshold)) {
          trackedDepths.add(threshold);
          
          // Only track once per threshold to avoid duplicate events
          if (typeof (window as any).gtag !== 'undefined') {
            (window as any).gtag('event', 'scroll_depth', {
              depth_percentage: threshold,
            });
          }
        }
      }
    };

    // Throttle scroll event listener
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
        setTimeout(() => {
          ticking = false;
        }, 1000); // Throttle to ~1 second intervals
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);

  if (!GA_ID) {
    return null;
  }

  return (
    <>
      {/* Load Google Analytics script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
        onError={(e) => {
          console.error('[Analytics] GA4 script failed to load:', e);
        }}
      />

      {/* Initialize Google Analytics */}
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){
              dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
              cookie_flags: 'SameSite=None;Secure',
              cookie_domain: window.location.hostname,
              send_page_view: true,
              anonymize_ip: true
            });
          `,
        }}
      />
    </>
  );
}
