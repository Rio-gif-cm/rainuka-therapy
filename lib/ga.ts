/**
 * Google Analytics 4 Conversion Tracking Module
 * Specialized events for booking funnel and UTM parameter capture
 * 
 * Events tracked:
 * - form_view: Initial form load
 * - field_interact: User interaction with form fields
 * - form_submit: Form submission attempt
 * - form_success: Successful booking completion
 */

export const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

/**
 * Capture UTM parameters from URL on page load
 * Returns UTM object for passing to GA4 events
 */
export const captureUTMParameters = (): Record<string, string> => {
  if (typeof window === 'undefined') return {};
  
  const params = new URLSearchParams(window.location.search);
  const utmData: Record<string, string> = {};
  
  const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
  
  utmParams.forEach((param) => {
    const value = params.get(param);
    if (value) {
      utmData[param] = value;
    }
  });
  
  return utmData;
};

/**
 * Store UTM parameters in session storage for use across page navigation
 */
export const storeUTMParameters = (): void => {
  if (typeof window === 'undefined') return;
  
  const utm = captureUTMParameters();
  if (Object.keys(utm).length > 0) {
    sessionStorage.setItem('utm_params', JSON.stringify(utm));
  }
};

/**
 * Retrieve stored UTM parameters from session storage
 */
export const getStoredUTMParameters = (): Record<string, string> => {
  if (typeof window === 'undefined') return {};
  
  try {
    const stored = sessionStorage.getItem('utm_params');
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
};

/**
 * Core event tracking with UTM support
 * Safe fallback if gtag not available (respects ad blockers, consent)
 */
const trackEventWithUTM = (
  eventName: string,
  parameters?: Record<string, string | number | boolean>
) => {
  if (typeof window === 'undefined' || !GA_ID) return;
  
  try {
    if (typeof (window as any).gtag !== 'undefined') {
      // Merge stored UTM parameters with event parameters
      const utm = getStoredUTMParameters();
      const eventData = {
        ...utm,
        ...parameters,
        event_timestamp: new Date().toISOString(),
      };
      
      (window as any).gtag('event', eventName, eventData);
    }
  } catch (error) {
    console.debug('[GA] Event tracking error:', error);
  }
};

/**
 * GA4 Event 1: form_view
 * Fire when user views the booking form
 * Indicates awareness and interest in booking
 */
export const trackFormView = (formName: string = 'booking_form') => {
  trackEventWithUTM('form_view', {
    form_name: formName,
    event_type: 'awareness',
  });
};

/**
 * GA4 Event 2: field_interact
 * Fire when user focuses on or starts typing in a form field
 * Indicates active engagement with the form
 */
export const trackFieldInteraction = (
  fieldName: string,
  formName: string = 'booking_form'
) => {
  trackEventWithUTM('field_interact', {
    form_name: formName,
    field_name: fieldName,
    event_type: 'engagement',
  });
};

/**
 * GA4 Event 3: form_submit
 * Fire when user clicks submit button (attempt to submit)
 * Indicates intent to complete booking
 */
export const trackFormSubmit = (
  formName: string = 'booking_form',
  stepName?: string
) => {
  trackEventWithUTM('form_submit', {
    form_name: formName,
    form_step: stepName || 'final',
    event_type: 'consideration',
  });
};

/**
 * GA4 Event 4: form_success
 * Fire when form submission succeeds and user sees confirmation
 * Indicates completed conversion
 */
export const trackFormSuccess = (
  formName: string = 'booking_form',
  conversationType: string = 'booking_request'
) => {
  trackEventWithUTM('form_success', {
    form_name: formName,
    conversion_type: conversationType,
    event_type: 'conversion',
  });
};

/**
 * Track form errors for optimization insights
 * Helps identify friction points in the funnel
 */
export const trackFormError = (
  formName: string,
  errorType: string,
  fieldName?: string
) => {
  trackEventWithUTM('form_error', {
    form_name: formName,
    error_type: errorType,
    field_name: fieldName || 'unknown',
    event_type: 'issue',
  });
};

/**
 * Initialize GA tracking on page load
 * Capture and store UTM parameters
 */
export const initializeGATracking = (): void => {
  if (typeof window === 'undefined') return;
  
  // Store UTM parameters on page load
  storeUTMParameters();
  
  // Optionally track that analytics initialized
  if (typeof (window as any).gtag !== 'undefined') {
    try {
      (window as any).gtag('config', GA_ID, {
        allow_google_signals: false,
        anonymize_ip: true,
      });
    } catch (error) {
      console.debug('[GA] Initialization error:', error);
    }
  }
};
