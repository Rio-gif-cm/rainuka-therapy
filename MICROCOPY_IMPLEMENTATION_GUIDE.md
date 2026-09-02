/**
 * EXAMPLE: Using the Microcopy Library in BookingForm.tsx
 * 
 * This file shows how to refactor BookingForm.tsx to use centralized
 * microcopy strings from lib/microcopy.ts for consistency and maintainability.
 * 
 * Replace inline strings with imports from MICROCOPY to ensure:
 * ✓ Consistent tone across all forms
 * ✓ Single source of truth for all UI text
 * ✓ Easy updates (change once, update everywhere)
 * ✓ Type-safe string references
 */

import { MICROCOPY } from '@/lib/microcopy';

/**
 * EXAMPLE 1: Form Labels
 * 
 * BEFORE:
 * <label>What should I call you? *</label>
 * 
 * AFTER:
 */
export const LabelExample = () => (
  <label>{MICROCOPY.labels.name} *</label>
);

/**
 * EXAMPLE 2: Input Placeholders
 * 
 * BEFORE:
 * <input placeholder="e.g., Alex or Marcus" />
 * 
 * AFTER:
 */
export const PlaceholderExample = () => (
  <input placeholder={MICROCOPY.placeholders.name} />
);

/**
 * EXAMPLE 3: Validation Error Messages
 * 
 * BEFORE:
 * const validateName = (name: string) => {
 *   if (!name.trim().length >= 2) {
 *     return "Please share your name so I know how to greet you."
 *   }
 * }
 * 
 * AFTER:
 */
export const validateNameExample = (name: string) => {
  if (!name.trim().length >= 2) {
    return MICROCOPY.errors.nameRequired;
  }
};

/**
 * EXAMPLE 4: Success Messages
 * 
 * BEFORE:
 * if (validFields.name) {
 *   showMessage("Name confirmed")
 * }
 * 
 * AFTER:
 */
export const SuccessExample = () => {
  return (
    <p className="text-sage-600">
      {MICROCOPY.success.nameValid}
    </p>
  );
};

/**
 * EXAMPLE 5: Button Text (Context-Specific)
 * 
 * BEFORE:
 * <button type="submit">Submit</button>
 * 
 * AFTER:
 */
export const ButtonExample = () => (
  <button type="submit">{MICROCOPY.buttons.submitBooking}</button>
);

/**
 * EXAMPLE 6: Help Text
 * 
 * BEFORE:
 * <p>* Required fields. I'll reach out within 24 hours to confirm your consultation.</p>
 * 
 * AFTER:
 */
export const HelpTextExample = () => (
  <p className="text-xs text-warm-gray-500">
    {MICROCOPY.help.requiredFields}
  </p>
);

/**
 * EXAMPLE 7: Reassurance Copy (Multi-line)
 * 
 * BEFORE:
 * <div className="card card-tinted">
 *   <p className="font-semibold">Just three questions. I'll reach out within 24 hours.</p>
 *   <p className="text-sm mt-1">No pressure. You decide after we talk.</p>
 * </div>
 * 
 * AFTER:
 */
export const ReassuranceExample = () => (
  <div className="card card-tinted">
    <p className="font-semibold">
      {MICROCOPY.reassurance.formStart}
    </p>
    <p className="text-sm mt-1">
      {MICROCOPY.reassurance.formStartContext}
    </p>
  </div>
);

/**
 * EXAMPLE 8: Dynamic Microcopy (with values)
 * 
 * BEFORE:
 * if (isValid) {
 *   setMessage("All set! I'll reach out within 24 hours.");
 * }
 * 
 * AFTER:
 */
export const DynamicExample = (isValid: boolean) => {
  if (isValid) {
    return MICROCOPY.success.formSubmitted;
  }
};

/**
 * EXAMPLE 9: Step Indicators
 * 
 * BEFORE:
 * const stepText = {
 *   contact: 'Step 1 of 3: Your Contact Information',
 *   concern: 'Step 2 of 3: Your Concerns & Availability',
 *   confirmation: 'Step 3 of 3: Review & Confirm'
 * }
 * 
 * AFTER:
 */
export const StepIndicatorExample = (step: 'contact' | 'concern' | 'confirmation') => {
  const stepTexts = {
    contact: MICROCOPY.reassurance.step1,
    concern: MICROCOPY.reassurance.step2,
    confirmation: MICROCOPY.reassurance.step3,
  };
  return stepTexts[step];
};

/**
 * EXAMPLE 10: Form Section Headers
 * 
 * BEFORE:
 * <h3>Let's start with the basics</h3>
 * <p>Three fields. Then we'll move forward together.</p>
 * 
 * AFTER:
 */
export const SectionHeaderExample = () => (
  <>
    <h3>{MICROCOPY.headers.startWithBasics}</h3>
    <p>{MICROCOPY.headers.startWithBasicsContext}</p>
  </>
);

/**
 * REFACTORING CHECKLIST for BookingForm.tsx
 * 
 * Validation Functions:
 * [ ] validateEmail → import MICROCOPY.errors.emailInvalid
 * [ ] validatePhone → import MICROCOPY.errors.phoneInvalid
 * [ ] validateName → import MICROCOPY.errors.nameRequired
 * [ ] validateField (concern) → import MICROCOPY.errors.concernTooShort
 * [ ] validateField (firstTimeTherapy) → import MICROCOPY.errors.firstTimeTherapyRequired
 * [ ] validateField (preferredTime) → import MICROCOPY.errors.dateTimeRequired
 * [ ] validateField (consent) → import MICROCOPY.errors.consentRequired
 * 
 * Form Labels:
 * [ ] Line 319: "What should I call you?" → MICROCOPY.labels.name
 * [ ] Line 359: "Best email to reach you" → MICROCOPY.labels.email
 * [ ] Line 399: "How to reach you by phone" → MICROCOPY.labels.phone
 * [ ] Line 474: "What brings you here, and what are you hoping to work on?" → MICROCOPY.labels.concernOptional
 * [ ] Line 528: "Is this your first time seeking therapy?" → MICROCOPY.labels.firstTimeTherapy
 * 
 * Placeholders:
 * [ ] Line 335: "e.g., Alex or Marcus" → MICROCOPY.placeholders.name
 * [ ] Line 375: "you@example.com" → MICROCOPY.placeholders.email
 * [ ] Line 415: "(555) 123-4567 or +1-555-123-4567" → MICROCOPY.placeholders.phone
 * [ ] Line 489: "e.g. 'Work stress and anxiety'..." → MICROCOPY.placeholders.concern
 * 
 * Success Messages (Field-level):
 * [ ] Line 323: "✓ Valid" → Context-based MICROCOPY.success (nameValid, emailValid, etc.)
 * 
 * Help/Hint Text:
 * [ ] Line 506: "Just a sentence or two..." → MICROCOPY.help.concernHint
 * [ ] Line 437: "* Required fields..." → MICROCOPY.help.requiredFields
 * [ ] Line 617: "I'll confirm this time within 24 hours." → MICROCOPY.help.timeConfirmation
 * 
 * Reassurance Messages:
 * [ ] Line 300: "Just three questions..." → MICROCOPY.reassurance.formStart
 * [ ] Line 302: "No pressure..." → MICROCOPY.reassurance.formStartContext
 * [ ] Line 516: "Thanks for sharing..." → MICROCOPY.reassurance.afterConcern
 * 
 * Buttons:
 * [ ] Update button text to use MICROCOPY.buttons.nextStep, submitBooking, etc.
 * 
 * Error Display:
 * [ ] Ensure error messages come from MICROCOPY.errors (already in validateField returns)
 * 
 * Success States:
 * [ ] Line 244: Form submission success → MICROCOPY.success.formSubmitted
 * 
 * Step Counter:
 * [ ] Line 287-289: Step text → Use MICROCOPY.reassurance.step1/2/3
 * 
 * Confirmation Card:
 * [ ] Line 649: "100% confidential..." → MICROCOPY.reassurance.confidentiality
 * [ ] Line 650: "Your privacy matters..." → MICROCOPY.reassurance.confidentialityContext
 */

/**
 * IMPLEMENTATION STEPS
 * 
 * 1. Import at top of BookingForm.tsx:
 *    import { MICROCOPY } from '@/lib/microcopy'
 * 
 * 2. Replace all inline string literals with MICROCOPY references:
 *    Search-replace patterns:
 *    - "Please share your name..." → MICROCOPY.errors.nameRequired
 *    - "What should I call you?" → MICROCOPY.labels.name
 *    - "e.g., Alex or Marcus" → MICROCOPY.placeholders.name
 *    - etc.
 * 
 * 3. Update validateField function to return MICROCOPY strings:
 *    export const validateField = (name: string, value: ...): string | undefined => {
 *      switch (name) {
 *        case 'name':
 *          if (!validateName(value)) return MICROCOPY.errors.nameRequired
 *        case 'email':
 *          if (!validateEmail(value)) return MICROCOPY.errors.emailInvalid
 *        // ... etc
 *      }
 *    }
 * 
 * 4. Update form section headers:
 *    <h3>{MICROCOPY.headers.startWithBasics}</h3>
 *    <p>{MICROCOPY.headers.startWithBasicsContext}</p>
 * 
 * 5. Update success messages:
 *    if (validFields.name) showMessage(MICROCOPY.success.nameValid)
 * 
 * 6. Do the same for app/contact/page.tsx
 * 
 * 7. Test:
 *    - Fill out booking form end-to-end
 *    - Trigger every error message
 *    - Verify field success messages appear
 *    - Check that tone is consistent and warm throughout
 */
