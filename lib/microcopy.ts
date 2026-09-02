/**
 * MICROCOPY Constants — Refined for Therapy Booking UX
 * 
 * Agent E Workshop Output: Warm, specific, reassuring copy for high-friction moments
 * Usage: Import into BookingForm.tsx, EnhancedComponents.tsx, and form validation
 * 
 * Each message is designed to:
 * - Remove blame (never "you did this wrong")
 * - Set clear expectations (timelines, what happens next)
 * - Build trust (acknowledge process, offer alternatives)
 * - Stay therapy-appropriate (warm, professional, never frivolous)
 */

export const MICROCOPY = {
  /**
   * FORM VALIDATION ERRORS
   * Displayed when user input fails validation.
   * Context: User has made effort; message should guide, not punish.
   */
  errors: {
    name: {
      label: 'Name',
      message: "I need at least 2 characters to greet you properly. How do you like to be called?",
      hint: "First name, full name, or whatever feels right.",
    },
    email: {
      label: 'Email',
      message: "That email didn't land right. Double-check—I'll send your call details there.",
      hint: "Example: you@example.com",
    },
    phone: {
      label: 'Phone',
      message: "Let me make sure I can call you back—need the full number, area code included.",
      hint: "US: (555) 123-4567 or 555-123-4567",
    },
    concern: {
      label: 'What Brings You',
      message: "Just a sentence or two on your mind—that helps me listen better when we talk.",
      hint: "Even one sentence is enough to get started.",
    },
    firstTimeTherapy: {
      label: 'Therapy Experience',
      message: "Please let me know if this is your first time exploring therapy—it helps me meet you where you are.",
      hint: "Honest answer helps me explain the process.",
    },
    preferredTime: {
      label: 'Preferred Time',
      message: "Choose a date and time that works for you. I'll confirm within 24 hours.",
      hint: "Pick one or I'll suggest alternatives.",
    },
    consent: {
      label: 'Agreement',
      message: "I need you to agree you're ready to move forward and that you've reviewed my privacy policy.",
      hint: "This protects both of us.",
    },
  },

  /**
   * LOADING STATES
   * Displayed while form is submitting or data is being processed.
   * Context: User anxiety peaks here—"Is it working? How long?"
   * Strategy: Specificity + timeline = confidence
   */
  loading: {
    primary: "Sending your info securely… I'll confirm within 24 hours.",
    alt1: "Holding your spot… one moment.",
    alt2: "Booking your call… checking my calendar for the best time.",
    hint: "This usually takes 10-15 seconds.",
  },

  /**
   * EMPTY STATES
   * Displayed when expected content doesn't exist (no slots, no results, etc.)
   * Context: Potential deal-breaker. Offer alternative path immediately.
   */
  emptyStates: {
    noAvailableSlots: {
      title: "I'm fully booked right now",
      message: "My next opening is Monday, 10am. Want to wait, or try email?",
      primaryAction: "Email me instead",
      secondaryAction: "Check next week's slots",
    },
    noTherapistMatch: {
      title: "That therapist is fully booked",
      message: "Here are 2 other specialists who work with your concern—want to browse?",
      primaryAction: "See other therapists",
      secondaryAction: "Join waitlist",
    },
    noFormData: {
      title: "Nothing here yet",
      message: "Start a new booking to get scheduled.",
      primaryAction: "Begin booking",
    },
  },

  /**
   * SUCCESS STATES
   * Displayed when form submission succeeds.
   * Context: Peak trust moment. Celebrate, confirm, set expectations for next step.
   */
  success: {
    primary: (phone) =>
      `Got it! I'll call ${phone} by tomorrow at this time to confirm your session.\nNo obligation—if we're not a fit, no worries. See you soon.`,
    headline: "You're all set!",
    secondaryHeadline: "What happens next:",
    nextSteps: [
      "I'll call you by tomorrow to confirm",
      "We'll pick the best time for your first session",
      "If we're not a fit, that's totally okay—no pressure",
    ],
    timelineHint: "Expect my call within 24 hours.",
    secondaryCTA: {
      label: "Prepare for your first session",
      url: "/guides/first-therapy-session",
      description: "5 things to know before we meet",
    },
  },

  /**
   * ERROR STATES
   * Displayed when something breaks (network, API, submission).
   * Context: User has tried and failed. Validate their effort, offer alternative.
   */
  errors_system: {
    networkError: {
      title: "Something hiccupped on my end",
      message: "Your info is safe—want to try again, or email me directly?",
      primaryAction: "Try again",
      secondaryAction: "Email me instead",
      note: "It's not you—this happens sometimes.",
    },
    serverError: {
      title: "I'm not quite ready",
      message: "I'm temporarily offline. Please try again in a few minutes, or reach out via email.",
      primaryAction: "Retry",
      secondaryAction: "Email me",
    },
    validationError: {
      title: "Let's fix a couple things",
      message: "I'll highlight what needs attention below. You're close!",
      note: "All fields are important—I'll explain why as you go.",
    },
  },

  /**
   * REASSURANCE MESSAGES
   * Displayed at form start or key decision points.
   * Context: Set expectations, reduce anxiety, build confidence.
   */
  reassurance: {
    formStart: {
      headline: "Three simple questions. Then I'll reach out within 24 hours.",
      subheader: "No obligation. If we're not a fit, that's okay. You decide after we talk.",
    },
    privacyContextual: {
      message: "Everything you share is private and protected.",
      link: "Read my privacy policy",
    },
    stepSummary: {
      step1: "Step 1 of 3: Your Contact Information",
      step2: "Step 2 of 3: Your Concerns & Availability",
      step3: "Step 3 of 3: Review & Confirm",
    },
  },

  /**
   * HINTS & HELPER TEXT
   * Short, encouraging messages shown alongside inputs.
   * Context: Explain why field matters without making user feel interrogated.
   */
  hints: {
    name: "First name, full name, or whatever feels right.",
    email: "I'll send your confirmation and appointment details here.",
    phone: "I'll use this to call and confirm your session time.",
    concern: "One sentence is enough—we'll dive deeper when we talk.",
    firstTimeTherapy: "Helps me know where to start. Totally judgment-free.",
    preferredTime: "Pick a few times—I'll find the best fit.",
    consent: "Confirms you're ready to move forward and you've read my privacy policy.",
  },
};

/**
 * STYLING RECOMMENDATIONS
 * 
 * Error Message Container:
 * - Border: 1px solid theme.alert.400 (warm amber)
 * - Background: theme.alert.50 (light warm)
 * - Icon: ⚠️ or ❌ (small, left-aligned)
 * - Text: theme.alert.700 (dark warm, good contrast)
 * 
 * Loading State:
 * - Spinner: animated (3 dots or standard spinner)
 * - Text: below spinner, centered
 * - Color: theme.sage.600 (soft, calming)
 * 
 * Success State:
 * - Icon: ✓ or 🎉 (contextual)
 * - Background: theme.sage.50 (light calm)
 * - Border: 2px solid theme.sage.400 (affirming)
 * - Text: theme.sage.900 (dark, readable)
 * - Animation: fade-in + subtle scale (no jarring bounce)
 */

export default MICROCOPY;
