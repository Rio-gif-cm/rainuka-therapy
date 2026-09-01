# Analytics & Monitoring Wave 1: GA4 Event Tracking Implementation

## Overview

Google Analytics 4 event tracking foundation has been implemented for the Rainuka Therapy website. This captures key user interactions, scroll depth, and engagement metrics without tracking personally identifiable information (PII).

## What's Implemented

### 1. **GA4 Integration** (`components/GoogleAnalytics.tsx`)
- Loads Google Analytics script with `afterInteractive` strategy (non-blocking)
- Automatic page view tracking on client-side route changes
- Scroll depth monitoring (25%, 50%, 75%, 100% milestones)
- Anonymized IP addresses for privacy compliance
- Error logging for script failures

### 2. **Event Tracking Utilities** (`lib/analytics.ts`)
Comprehensive TypeScript utilities for tracking:

| Event | Purpose | Example |
|-------|---------|---------|
| `cta_click` | Call-to-action button clicks | Booking link, contact button, phone call |
| `form_start` | Form interaction initiated | User focuses on first field |
| `form_submission` | Successful form submission | Booking or contact form completed |
| `form_error` | Form validation/submission errors | Missing email, API failure |
| `section_view` | Key section enters viewport | Hero, services, testimonials |
| `section_engagement` | Time spent in section | Measures content depth |
| `scroll_depth` | Scroll milestone reached | 25%, 50%, 75%, 100% |
| `resource_access` | Guide or resource viewed | Perinatal Anxiety Guide accessed |
| `file_download` | File download tracked | PDF, guide, resource |

### 3. **React Hooks** (`components/AnalyticsHooks.tsx`)
- `useSectionTracking()` - Auto-detect section visibility and engagement
- `useFormTracking()` - Monitor form interactions without manual instrumentation

### 4. **Layout Integration** (`app/layout.tsx`)
- GoogleAnalytics component added to root layout
- Ensures GA4 loads on all pages

## Configuration

### Step 1: Add GA4 Measurement ID
Create `.env.local` in project root (already created):
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-YOUR_MEASUREMENT_ID
```

**Get your Measurement ID:**
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create/select property for rainukatherapy.com
3. Go to Admin → Data Streams → Web
4. Copy Measurement ID (starts with `G-`)
5. Paste into `.env.local`

### Step 2: Verify Installation
1. Start dev server: `npm run dev`
2. Open browser console → check for `[Analytics] GA4 script loaded` message
3. Go to Google Analytics → Realtime → Active Users should show 1

### Step 3: Integrate into Components
Use tracking utilities in any page/component:

```tsx
// In a component (client or server with useEffect)
import { trackCTAClick, trackFormSubmission } from '@/lib/analytics';

export default function Component() {
  return (
    <button onClick={() => trackCTAClick('book_now', 'hero')}>
      Book Now
    </button>
  );
}
```

## Usage Examples

### Example 1: Track Button Clicks
```tsx
import { trackCTAClick } from '@/lib/analytics';

<button onClick={() => trackCTAClick('schedule_button', 'services')}>
  Schedule Consultation
</button>
```

### Example 2: Track Form Submission
```tsx
import { trackFormSubmission, trackFormError } from '@/lib/analytics';

const handleSubmit = async (e) => {
  try {
    const response = await fetch('/api/bookings', { method: 'POST', body });
    trackFormSubmission('booking_form', 'booking');
  } catch (error) {
    trackFormError('booking_form', error.message);
  }
};
```

### Example 3: Track Section Engagement
```tsx
import { useSectionTracking } from '@/components/AnalyticsHooks';

export default function ServicesSection() {
  const sectionRef = useSectionTracking('services_section');
  return <section ref={sectionRef}>...</section>;
}
```

### Example 4: Track File Downloads
```tsx
import { trackDownload } from '@/lib/analytics';

<a 
  href="/guides/perinatal-anxiety.pdf" 
  onClick={() => trackDownload('perinatal-anxiety.pdf', 'pdf')}
>
  Download Guide
</a>
```

## Privacy & Compliance

✅ **GDPR/CCPA Compliant:**
- No PII collected (emails, phone numbers NOT tracked)
- IP addresses anonymized (`anonymize_ip: true`)
- Respects ad blockers and Do Not Track signals
- No third-party cookies for tracking

✅ **Transparent:**
- GA4 disclosure should be in Privacy Policy
- Users can opt-out via browser extensions
- No personal data masking needed (no PII collected)

## Dashboard Insights

Once integrated, GA4 dashboard will show:

1. **Engagement Metrics:**
   - Page views by section
   - Time on page / section engagement
   - Scroll depth distribution (which content do users read?)

2. **Conversion Funnel:**
   - CTA click → Form start → Form submission
   - Identify where users drop off

3. **Content Performance:**
   - Which pages have highest engagement?
   - Which sections do users scroll to?

4. **Error Tracking:**
   - Form validation errors by field
   - Submission failures by type
   - Helps prioritize UX improvements

## Next Steps

After deploying and collecting 1-2 weeks of data:

1. **Heatmaps** - Add Microsoft Clarity (free) or Hotjar for visual click/scroll maps
2. **Session Recording** - Consider consent-gated Hotjar or Clarity for UX diagnostics
3. **Error Tracking** - Add Sentry or Rollbar for JavaScript error monitoring
4. **Optimization** - Use GA4 insights to A/B test CTA copy, form fields, page layouts

## Files Created

- `.env.local` - GA4 Measurement ID configuration
- `lib/analytics.ts` - Event tracking utility functions
- `components/GoogleAnalytics.tsx` - GA4 script loading & page view tracking
- `components/AnalyticsHooks.tsx` - React hooks for automatic tracking
- `components/BookingPageExample.tsx` - Reference implementation
- `docs/ANALYTICS_SETUP.md` - This documentation

## Troubleshooting

**GA4 not showing events:**
1. Verify `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set correctly
2. Check browser console for errors
3. Ensure you're on production domain (GA4 filters localhost by default)
4. Wait 24-48 hours for first data to appear in GA4 dashboard

**Events showing as "undefined":**
- Check that `gtag` is defined before calling `trackEvent()`
- Ensure GA4 component is in root layout
- Inspect `window.gtag` in console

**Too much noise in events:**
- GA4 batches similar events - check aggregation settings
- Consider filtering out internal traffic in GA4 settings

## References

- [Google Analytics 4 Docs](https://support.google.com/analytics/answer/10089681)
- [GA4 Event Tracking Guide](https://support.google.com/analytics/answer/9322688)
- [Next.js Script Component](https://nextjs.org/docs/app/api-reference/components/script)
- [GDPR Analytics Compliance](https://support.google.com/analytics/answer/9019185)
