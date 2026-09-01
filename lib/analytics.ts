/**
 * Google Analytics 4 Event Tracking Utilities
 * Privacy-first analytics tracking for therapy website
 * 
 * Key Events:
 * - page_view: Route changes (auto-tracked by GA4 pageview config)
 * - scroll_depth: User engagement depth (25%, 50%, 75%, 100%)
 * - cta_click: Call-to-action button clicks (booking, contact, phone)
 * - form_start: Form interaction initiated
 * - form_submission: Form successfully submitted
 * - form_error: Form validation/submission error
 * - section_view: Key section views (pricing, testimonials, about)
 */

export const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

/**
 * Track custom events with GA4
 * Safe fallback if gtag not available (respects ad blockers, consent)
 */
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, string | number | boolean>
) => {
  if (typeof window === 'undefined' || !GA_ID) return;
  
  try {
    if (typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', eventName, {
        ...parameters,
        // Ensure timestamp for event ordering in analytics
        event_timestamp: new Date().toISOString(),
      });
    }
  } catch (error) {
    console.debug('[Analytics] Event tracking error:', error);
  }
};

/**
 * Track page views on client-side navigation (SPA behavior)
 * Called automatically by GoogleAnalytics component on route change
 */
export const pageview = (url: string, title?: string) => {
  if (typeof window === 'undefined' || !GA_ID) return;
  
  try {
    if (typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('config', GA_ID, {
        page_path: url,
        page_title: title || document.title,
      });
    }
  } catch (error) {
    console.debug('[Analytics] Pageview tracking error:', error);
  }
};

/**
 * Track CTA button interactions
 * Used for: Booking link, Contact form, Phone call, Schedule button
 */
export const trackCTAClick = (ctaLabel: string, section?: string) => {
  trackEvent('cta_click', {
    cta_label: ctaLabel,
    section: section || 'unknown',
  });
};

/**
 * Track form initiation
 * Fired when user focuses on first form field
 */
export const trackFormStart = (formName: string) => {
  trackEvent('form_start', {
    form_name: formName,
  });
};

/**
 * Track successful form submission
 */
export const trackFormSubmission = (
  formName: string,
  formType?: 'booking' | 'contact' | 'inquiry'
) => {
  trackEvent('form_submission', {
    form_name: formName,
    form_type: formType || 'general',
  });
};

/**
 * Track form errors
 * Helps identify UX friction points
 */
export const trackFormError = (
  formName: string,
  errorType: string,
  fieldName?: string
) => {
  trackEvent('form_error', {
    form_name: formName,
    error_type: errorType,
    field_name: fieldName || 'unknown',
  });
};

/**
 * Track section views with scroll depth
 * Called when section enters viewport
 */
export const trackSectionView = (
  sectionName: string,
  scrollDepth?: number
) => {
  trackEvent('section_view', {
    section_name: sectionName,
    scroll_depth: scrollDepth ? Math.round(scrollDepth) : 0,
  });
};

/**
 * Track scroll depth milestones (25%, 50%, 75%, 100%)
 * Reports single event per milestone to avoid duplicate data
 */
export const trackScrollDepth = (depthPercentage: number) => {
  trackEvent('scroll_depth', {
    depth_percentage: Math.round(depthPercentage),
  });
};

/**
 * Track engagement time on specific sections
 * Useful for measuring content depth
 */
export const trackSectionEngagement = (
  sectionName: string,
  timeSpentSeconds: number
) => {
  trackEvent('section_engagement', {
    section_name: sectionName,
    time_spent_seconds: Math.round(timeSpentSeconds),
  });
};

/**
 * Track resource/guide downloads or views
 */
export const trackResourceAccess = (resourceName: string, resourceType: string) => {
  trackEvent('resource_access', {
    resource_name: resourceName,
    resource_type: resourceType,
  });
};

/**
 * Track file downloads (e.g., Perinatal Anxiety Guide PDF)
 */
export const trackDownload = (fileName: string, fileType: string) => {
  trackEvent('file_download', {
    file_name: fileName,
    file_type: fileType,
  });
};
