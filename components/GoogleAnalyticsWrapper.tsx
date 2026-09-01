'use client';

import dynamic from 'next/dynamic';

// Client-side wrapper for dynamic GA4 component import
// Needed because useSearchParams() requires client-side context
const GoogleAnalyticsComponent = dynamic(() => import('./GoogleAnalytics'), {
  ssr: false,
  loading: () => null,
});

export default function GoogleAnalyticsWrapper() {
  return <GoogleAnalyticsComponent />;
}
