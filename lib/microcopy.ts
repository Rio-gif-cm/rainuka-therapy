/**
 * Rainuka Therapy — Microcopy Library
 * 
 * Centralized, reusable strings for all UI text: labels, placeholders, error messages,
 * success messages, button text, help text, and reassurance copy.
 * 
 * Principles:
 * - Warm, conversational tone (not corporate)
 * - Specific, action-oriented language
 * - Consistent voice across all forms
 * - Accessible language (no jargon)
 * - Direct error messages (what to fix, not why)
 * - Success messages tied to actions
 * 
 * Usage:
 * import { MICROCOPY } from '@/lib/microcopy'
 * 
 * <label htmlFor="name">{MICROCOPY.labels.name}</label>
 * <input placeholder={MICROCOPY.placeholders.name} />
 * 
 * if (!formData.name) error = MICROCOPY.errors.nameRequired
 * if (isValid) showMessage(MICROCOPY.success.name)
 */

export const MICROCOPY = {
  /**
   * FORM FIELD LABELS
   * Used as <label> text and form field identifiers
   */
  labels: {
    // Booking Form
    name: "What's your name?",
    email: "Email I'll confirm with",
    phone: "Phone number",
    concern: "What brings you in today?",
    concernOptional: "What brings you in today? (optional)",
    firstTimeTherapy: "Have you tried therapy before?",
    preferredTime: "Pick a time that works for you",
    consent:
      "I've read and agree to the privacy & confidentiality terms",

    // Contact Form
    contactName: "What's your name?",
    contactEmail: "Your email",
    contactMessage: "Message",
  },

  /**
   * PLACEHOLDER TEXT
   * Shown inside empty inputs to model expected input
   * Keep short, use gender-neutral examples, show format
   */
  placeholders: {
    name: "e.g., Sam",
    email: "you@example.com",
    phone: "(555) 123-4567 or +1-555-123-4567",
    concern:
      "Work stress, anxiety, grief—whatever brought you here",
    contactName: "e.g., Jordan",
    contactEmail: "you@example.com",
    contactMessage:
      "What's going on with you?",
  },

  /**
   * ERROR MESSAGES
   * Shown when validation fails
   * - Say what went wrong (not why)
   * - Be specific about what to fix
   * - Use warm, direct tone
   * - No corporate jargon
   */
  errors: {
    // Validation errors
    nameRequired: "I need your name to confirm the booking.",
    nameMinLength: "Please enter at least 2 characters.",
    emailRequired: "Please enter your email address.",
    emailInvalid: "Please enter a valid email address.",
    emailConfirmation: "I need a correct email to send your confirmation.",
    phoneRequired: "Please enter your phone number.",
    phoneInvalid: "Please enter a valid 10+ digit phone number.",
    phoneFull:
      "I need a complete phone number to call and confirm. At least 10 digits.",

    // Textarea errors
    concernTooShort:
      "Please share at least one sentence—it helps me prepare.",
    concernMinLength:
      "Share a bit about what's on your mind—even one sentence helps.",

    // Selection/radio errors
    firstTimeTherapyRequired: "Let me know: is this your first time?",
    firstTimeTherapyHint:
      "I need to know if this is your first time. It helps me understand where you're starting from.",

    // Date/time errors
    dateTimeRequired: "Please pick a time that works for you.",
    dateTimeFull:
      "Pick a time that works for you. I'll confirm within 24 hours.",

    // Checkbox errors
    consentRequired: "Please review and accept the privacy terms.",
    consentFull:
      "I need you to agree that you're ready and that you've read the privacy policy.",

    // Form submission errors
    submitError:
      "We couldn't save your info. Please check your connection and try again.",
    submitErrorGeneric: "Something went wrong. Please try again.",
    missingFields: "Please fill in all required fields.",
  },

  /**
   * SUCCESS MESSAGES
   * Shown when a field validates successfully
   * - Tie to the specific action/info
   * - Keep short (1-2 words + checkmark)
   * - Use action voice ("I'll email you" not "Email confirmed")
   */
  success: {
    // Field-level confirmations
    nameValid: "✓ Got your name",
    emailValid: "✓ I'll reach you here",
    phoneValid: "✓ I'll call you here",
    concernValid: "✓ Thanks for sharing",
    firstTimeTherapyValid: "✓ Got it",
    dateTimeValid: "✓ Time set",

    // Form-level confirmations
    formSubmitted: "✓ All set! I'll reach out within 24 hours.",
    contactFormSubmitted: "✓ Message sent! I'll reply within 24 hours.",
    bookingConfirmed:
      "✓ Your appointment request has been received. I'll confirm the time within 24 hours.",
  },

  /**
   * BUTTON & CTA TEXT
   * Action-specific, not generic verbs
   */
  buttons: {
    // Form navigation
    nextStep: "Next step",
    goBack: "Go back",
    back: "← Back",
    continue: "Continue",

    // Form submission
    submitBooking: "Request appointment",
    submitContact: "Send",
    submitMessage: "Send message",

    // General
    close: "Close",
    cancel: "Cancel",
    confirm: "Confirm",
    skip: "Skip",

    // Navigation/CTA
    scheduleCall: "Schedule your free call",
    learnMore: "Learn more",
  },

  /**
   * HELP TEXT & HINTS
   * Context, clarification, or reassurance
   * Optional info that doesn't repeat the label
   */
  help: {
    // Form-level hints
    requiredFields: "* Required. We'll talk within 24 hours.",
    requiredFieldsShort: "* Required",
    requiredMessage: "Required fields marked with *",

    // Field-level help
    concernHint:
      "One or two sentences is perfect—we'll dig deeper when we talk.",
    concernMinimum:
      "Just a sentence or two. It helps me understand what brought you in.",

    // Contact info hints
    emailConfirmation: "I respond within 24 hours.",
    phoneHours: "Mon-Fri, 9am-5pm EST",
    locationInfo: "Serving [State] & 27 other states",

    // Reassurance
    timeConfirmation: "I'll confirm this time within 24 hours.",
    privacyAssurance: "100% confidential & HIPAA-protected.",
    privacyContext:
      "Your privacy matters. Everything you share stays between us.",
  },

  /**
   * REASSURANCE COPY
   * Multi-line context, encouragement, progress signals
   * Used in info banners, step cards, micro-reassurances
   */
  reassurance: {
    // Booking form intro
    formStart: "Three quick questions. I'll confirm within 24 hours.",
    formStartContext: "No rush. You decide after we talk.",
    formStartFull:
      "Just three questions. I'll reach out within 24 hours.\nNo pressure. You decide after we talk.",

    // Progress signals
    afterConcern:
      "Thanks for sharing. Just two more to go.",
    afterConcernFull:
      "Thanks for sharing. Two more questions and we're through.",

    // Confirmation card
    confidentiality: "100% confidential & HIPAA-protected",
    confidentialityContext:
      "Your privacy matters. Everything you share stays between us.",

    // Step indicators
    step1: "Step 1 of 3: Your Contact Information",
    step2: "Step 2 of 3: Your Concerns & Availability",
    step3: "Step 3 of 3: Review & Confirm",

    // Final confirmation
    almostReady: "Almost ready to book",
    reviewInfo: "Your information",
    readyToBook: "Ready to book?",
  },

  /**
   * SECTION HEADERS & STEP TEXT
   */
  headers: {
    // Booking form
    bookingTitle: "Schedule Your Free Consultation",
    bookingSubtitle: "Let's get to know each other",
    startWithBasics: "Let's start with the basics",
    startWithBasicsContext:
      "Three fields. Then we'll move forward together.",
    whatBrings: "What brings you here?",
    whatBringsContext:
      "We're almost there. Just a couple more details to help me understand your situation.",
    almostDone: "Almost ready to book",

    // Contact page
    getInTouch: "Get in Touch",
    getInTouchSubtitle:
      "Questions about therapy? Ready to book? Just want to say hello?",
    contactInformation: "Contact Information",
    sendAMessage: "Send a Message",
    dropMeLine: "Drop me a line",
    quickLinks: "Quick Links",
  },

  /**
   * NAVIGATION & LINKS
   */
  navigation: {
    scheduleCall: "Schedule Your Free Call →",
    viewFAQ: "View FAQ →",
    learnAbout: "Learn About Me →",
    backToHome: "Back to home",
  },

  /**
   * VALIDATION & INFO ALERTS
   */
  alerts: {
    // Info/success
    fieldValid: "✓ Valid",
    expanded: "✓ Expanded",
    success: "✓ Success",

    // Warnings
    optional: "(optional)",
    required: "(required)",

    // Contact info
    phone: "Phone",
    email: "Email",
    location: "Location",
  },
} as const;

/**
 * TYPE-SAFE MICROCOPY EXPORTS
 * 
 * Use these to ensure strings are never typo'd in code.
 * Example:
 * 
 * type ErrorKey = keyof typeof MICROCOPY.errors
 * function getError(key: ErrorKey) {
 *   return MICROCOPY.errors[key]
 * }
 */
export type MicrocopySection = keyof typeof MICROCOPY;
export type MicrocopyKey<T extends MicrocopySection> = keyof typeof MICROCOPY[T];

/**
 * HELPERS FOR DYNAMIC MICROCOPY
 * 
 * For messages that include dynamic content (e.g., name, time, date)
 */
export const formatMicrocopy = {
  confirmationWithName: (name: string) =>
    `Thanks for reaching out, ${name}. I'll confirm your appointment within 24 hours.`,

  confirmationWithTime: (date: string, time: string) =>
    `I'll confirm ${date} at ${time} within 24 hours.`,

  fieldError: (field: string, reason: string) =>
    `${field}: ${reason}`,

  progressStep: (current: number, total: number) =>
    `Step ${current} of ${total}`,
};
