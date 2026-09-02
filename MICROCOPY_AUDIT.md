# Rainuka Therapy — Comprehensive Microcopy Audit
**Date:** September 2024  
**Scope:** All form labels, button text, error messages, success confirmations, placeholders, and hints across the Rainuka Therapy site.  
**Approach:** Applied humanizer skill patterns + writer best practices to ensure every string is warm, specific, action-oriented, consistent, and jargon-free.

---

## Audit Summary

**Total Improvements Identified:** 32+  
**Categories:** Labels (8), Placeholders (6), Error Messages (8), Success Messages (5), Button Text (3), Help Text (4), Navigation/CTA (3)  
**Core Issues Found:**
- Generic, sterile language in labels and buttons
- Vague error messages that don't guide users
- Placeholders that don't model expected input
- Corporate formality where warmth is needed
- Inconsistent tone across form steps

---

## LABELS & FIELD DESCRIPTIONS

### 1. **"What should I call you?"** → **"What's your name?"**
- **Current:** Overly polite, adds cognitive load with "call you"
- **Issue:** Sounds like customer service script
- **Improved:** Direct, warm, conversational
- **Context:** Booking form Step 1 (contact)
- **Type:** Label

### 2. **"Best email to reach you"** → **"Email I'll confirm with"**
- **Current:** Generic "reach you" is corporate; implies multiple methods
- **Issue:** Vague about what'll happen (creates micro-anxiety)
- **Improved:** Specific about the action (confirmation)
- **Context:** Booking form Step 1 (contact)
- **Type:** Label
- **A11y:** aria-label becomes more descriptive

### 3. **"How to reach you by phone"** → **"Phone number"**
- **Current:** Awkward phrasing, redundant ("reach you by phone" implies phone)
- **Issue:** Adds friction to a simple input
- **Improved:** Clean, direct, actionable
- **Context:** Booking form Step 1 (contact)
- **Type:** Label

### 4. **"Is this your first time seeking therapy?"** → **"Have you tried therapy before?"**
- **Current:** "Seeking therapy" is formal/clinical; "first time" creates pressure
- **Issue:** Language mismatches user's mental model (people say "tried therapy")
- **Improved:** Conversational, mirrors how users think
- **Context:** Booking form Step 2 (concern)
- **Type:** Label/Radio Group

### 5. **"What brings you here, and what are you hoping to work on?"** → **"What brings you in today? (optional)"**
- **Current:** Two questions in one; "hoping to work on" is clinical
- **Issue:** Cognitive overload; unclear if both required
- **Improved:** One clear question; signals it's optional
- **Context:** Booking form Step 2 (concern) — textarea
- **Type:** Label

### 6. **"What should I call you?"** (contact page form) → **"What's your name?"**
- **Current:** Same overly polite phrasing on contact form
- **Issue:** Inconsistency across site; same problem as #1
- **Improved:** Match booking form; parallel structure
- **Context:** Contact page form
- **Type:** Label

### 7. **"Tell me what's on your mind..."** (contact form placeholder) → **"Share what's on your mind"**
- **Current:** Already warm but ends with ellipsis (suggests trailing off)
- **Issue:** Ellipsis creates uncertainty; feels incomplete
- **Improved:** Confident, complete thought
- **Context:** Contact form textarea
- **Type:** Placeholder

### 8. **Form label: "Send a Message"** → **"Drop me a line"** (or "Send a Message" is fine; keep context-dependent)
- **Current:** "Send a Message" is formal
- **Issue:** Doesn't match warm tone of "What's your name?"
- **Improved:** Either "Drop me a line" (more casual) or keep "Send a Message" but add subheader
- **Context:** Contact page, form heading
- **Type:** Section header
- **Note:** Acceptable as-is if paired with warmer intro copy

---

## PLACEHOLDERS

### 9. **"Jane"** → **"e.g., Sam"**
- **Current:** Single name without guidance; gendered
- **Issue:** Doesn't communicate format; may confuse users who use different naming conventions
- **Improved:** Adds "e.g." to show it's an example; gender-neutral
- **Context:** Contact form, name field
- **Type:** Placeholder

### 10. **"you@example.com"** → **"you@example.com"**
- **Current:** Already good
- **Status:** ✓ Keep as-is; clear format, familiar pattern

### 11. **"(555) 000-0000"** → **"(555) 123-4567 or +1-555-123-4567"**
- **Current:** Shows format but uses "000-0000" (looks fake/placeholder-ish)
- **Issue:** Users might literally type zeros; unclear if extensions OK
- **Improved:** Uses real-looking number; shows two accepted formats
- **Context:** Booking form Step 1
- **Status:** ✓ Already in BookingForm.tsx — keep this version

### 12. **"e.g., 'Work stress and anxiety' or 'I'm struggling with depression.'"** → **"Work stress, anxiety, grief—whatever brought you here"**
- **Current:** Two examples (good) but very long; clinical tone
- **Issue:** Placeholder is 70+ chars; feels prescriptive
- **Improved:** Shorter, more diverse example topics; conversational
- **Context:** Booking form Step 2, textarea
- **Type:** Placeholder

### 13. **"Share what's on your mind. Even one sentence helps me prepare."** → **"What's going on with you?"**
- **Current:** Long, reassuring but takes up valuable space in textarea
- **Issue:** Placeholder text that reads like instruction copy; takes up real estate
- **Improved:** Shorter, open-ended, conversational
- **Context:** Contact form textarea
- **Type:** Placeholder

### 14. **"e.g., Alex or Marcus"** → **"e.g., Jordan"**
- **Current:** Two gender-specific examples
- **Issue:** Gendered; may not represent all user identities
- **Improved:** Gender-neutral example (or offer "e.g., Sam, Alex, Jordan")
- **Context:** Booking form Step 1
- **Type:** Placeholder

---

## ERROR MESSAGES

### 15. **"Please share your name so I know how to greet you."** → **"I need your name so I can confirm your booking."**
- **Current:** "Greet you" is warm but not specific about why
- **Issue:** Vague about what happens next; feels optional ("so I know")
- **Improved:** Explains the **why** clearly; shows it's essential
- **Context:** Name validation error
- **Type:** Error message

### 16. **"I'll send your confirmation email here. Make sure it's correct."** → **"I need a correct email to send your confirmation."**
- **Current:** Two sentences; second sentence doesn't add info (of course email should be correct)
- **Issue:** Tells them to do something they already know; doesn't explain the error
- **Improved:** Single, clear statement of what went wrong
- **Context:** Email validation error (invalid format)
- **Type:** Error message

### 17. **"I need a complete phone number so I can call to confirm. At least 10 digits."** → **"Please enter a valid 10+ digit phone number."**
- **Current:** Warm ("so I can call") but verbose; two sentences
- **Issue:** Too much explanation for a simple format error; may feel patronizing
- **Improved:** Concise, actionable, tells them exactly what to fix
- **Context:** Phone validation error
- **Type:** Error message

### 18. **"Share what's on your mind—even one sentence helps. We'll dig deeper when we talk."** → **"Please share at least one sentence—this helps me prepare."**
- **Current:** Reassuring but doesn't explain what's wrong
- **Issue:** Reads like instruction copy, not an error; unclear minimum
- **Improved:** Clear minimum requirement + reason
- **Context:** Concern textarea validation error (< 10 chars)
- **Type:** Error message

### 19. **"I need to know if this is your first time in therapy. It helps me understand your starting point."** → **"Let me know: is this your first time?"**
- **Current:** Overly explanatory; feels like a PSA
- **Issue:** Error message shouldn't lecture; user knows it's required (radio was unselected)
- **Improved:** Light, friendly reminder without justification
- **Context:** Radio button group — firstTimeTherapy not selected
- **Type:** Error message

### 20. **"Pick a time that works for you. I'll confirm within 24 hours."** → **"Please pick a time that works for you."**
- **Current:** Warm but confirmation detail belongs elsewhere (in success state, not error)
- **Issue:** Error messages should say what's missing, not what happens next
- **Improved:** Focused on the action needed
- **Context:** Calendar picker — no date/time selected
- **Type:** Error message

### 21. **"I need you to agree that you're ready and that you've read the privacy policy."** → **"Please review and accept the privacy & confidentiality terms."**
- **Current:** "I need you to agree that you're ready" is weird phrasing
- **Issue:** Doesn't clearly state that the checkbox needs to be checked
- **Improved:** Tells them exactly what action is needed
- **Context:** Checkbox validation error (consent not checked)
- **Type:** Error message

### 22. **"Something went wrong. Please try again."** → **"We couldn't save your info. Please check your connection and try again."**
- **Current:** Generic fallback
- **Issue:** Doesn't give user any debugging info; feels like it's their fault
- **Improved:** Specific about what might've happened; compassionate
- **Context:** API error / form submission failure
- **Type:** Error message

---

## SUCCESS MESSAGES & CONFIRMATIONS

### 23. **"Name confirmed"** → **"✓ Got your name"**
- **Current:** Sterile, generic success message
- **Issue:** Doesn't acknowledge what they did; feels robotic
- **Improved:** Warmer, shows confirmation of specific info
- **Context:** Field-level success message (name input)
- **Type:** Inline success

### 24. **"Email confirmed"** → **"✓ I'll reach you here"**
- **Current:** Generic
- **Issue:** Doesn't explain what it means
- **Improved:** Tells them what we'll do with the email
- **Context:** Field-level success message (email input)
- **Type:** Inline success

### 25. **"Phone confirmed"** → **"✓ I'll call you here"**
- **Current:** Generic
- **Issue:** Doesn't tie to action
- **Improved:** Specific about how we'll use the phone number
- **Context:** Field-level success message (phone input)
- **Type:** Inline success

### 26. **"Got it-let's talk about this"** → **"✓ Thanks for sharing"**
- **Current:** Overly familiar ("let's talk about this")
- **Issue:** Sounds presumptuous; we're not talking yet
- **Improved:** Warm acknowledgment; no false intimacy
- **Context:** Field-level success message (concern textarea)
- **Type:** Inline success

### 27. **"Your information has been submitted successfully"** (or similar final success) → **"✓ All set! I'll reach out within 24 hours."**
- **Current:** Corporate template language
- **Issue:** Generic; doesn't set next expectation
- **Improved:** Warm confirmation + timeline
- **Context:** Form submission success state
- **Type:** Page-level success

---

## BUTTON TEXT & CALLS TO ACTION

### 28. **"Next" (generic step button)** → **"Let's go" / "Next step"**
- **Current:** Generic navigation button
- **Issue:** Neutral, doesn't tie to context
- **Improved:** Can vary by step ("Let's go" for first step, "Continue" or "Next" for others)
- **Context:** Booking form multi-step navigation
- **Type:** Button

### 29. **"Back"** → **"Go back"**
- **Current:** Fine, but inconsistent with "Next"
- **Issue:** If we're using "Let's go," should match tone
- **Improved:** Match the forward button's energy
- **Context:** Booking form multi-step navigation
- **Type:** Button

### 30. **"Submit" (final button)** → **"Request appointment"** / **"Send"**
- **Current:** Generic
- **Issue:** Generic verb doesn't tie to context; users aren't "submitting a form"
- **Improved:** Action-specific ("Request appointment" for booking; "Send" for contact form)
- **Context:** Booking form final CTA / Contact form CTA
- **Type:** Button (primary CTA)

---

## HELP TEXT & HINT COPY

### 31. **"* Required fields. I'll reach out within 24 hours to confirm your consultation."** → **"* Required. We'll talk within 24 hours."**
- **Current:** "Confirm your consultation" is formal
- **Issue:** Too wordy; "consultation" is clinical
- **Improved:** Warmer, shorter, same info
- **Context:** Form footer / required field hint
- **Type:** Help text

### 32. **"Just a sentence or two. It helps me understand what brought you in, and we'll explore more together."** → **"One or two sentences is perfect—we'll dig deeper when we talk."**
- **Current:** OK but could be punchier
- **Issue:** "It helps me understand" is generic
- **Improved:** Reframes as a partnership; removes unnecessary words
- **Context:** Concern textarea help text
- **Type:** Help text

---

## REASSURANCE COPY (System Messages)

### 33. **"Just three questions. I'll reach out within 24 hours. No pressure. You decide after we talk."** → **"Three quick questions. I'll confirm within 24 hours. No rush."**
- **Current:** Good but slightly wordy
- **Issue:** "You decide after we talk" feels defensive
- **Improved:** Shorter, removes implied disclaimer
- **Context:** Info banner at top of booking form Step 1
- **Type:** Reassurance copy

### 34. **"Thanks for sharing. Two more questions and we're through."** → **"Thanks for sharing. Just two more to go."**
- **Current:** "We're through" is awkward phrasing
- **Issue:** Doesn't flow naturally; sounds like we're done (but we're not)
- **Improved:** "Two more to go" is energetic, clear progress
- **Context:** Micro-reassurance after concern field (Step 2)
- **Type:** Reassurance copy

---

## TONE & CONSISTENCY PATTERNS

### Pattern A: Use Conversational Language
- ❌ "I'll send your confirmation email here"
- ✅ "I'll email you to confirm"

### Pattern B: Avoid Redundancy
- ❌ "Best email to reach you" (redundant — email's purpose is to reach someone)
- ✅ "Email for confirmation"

### Pattern C: Error Messages Explain What's Wrong, Not Why
- ❌ "I need your name so I know how to greet you"
- ✅ "Please enter your name"

### Pattern D: Success Messages Show Action
- ❌ "Email confirmed"
- ✅ "✓ I'll email you here"

### Pattern E: CTA Buttons Match the Action
- ❌ "Submit" (generic)
- ✅ "Request appointment" / "Send" (specific)

---

## Implementation Priority

**Tier 1 (High Impact — Implement First):**
- Error messages (#15–#22) — most user-facing, highest friction
- Button text (#28–#30) — primary CTAs
- Field labels (#1–#3) — users see these every time

**Tier 2 (Medium Impact — Implement Next):**
- Placeholders (#9–#14) — guides input
- Success messages (#23–#27) — reinforces progress
- Help text (#31–#32) — explains requirements

**Tier 3 (Polish — Implement Last):**
- Reassurance copy (#33–#34) — nice-to-have context
- Navigation consistency (#28–#29) — button tones

---

## Tone Voice Guide

**Core Principles for Rainuka Therapy Microcopy:**

1. **Warm, not sterile:** Use "I'll email you" not "Email confirmation will be sent"
2. **Specific, not vague:** "Phone number" not "How to reach you by phone"
3. **Action-oriented:** "Request appointment" not "Submit"
4. **Consistent person:** Use "I" and "you" (therapist/client relationship); avoid "we" (creates false intimacy before first session)
5. **No corporate jargon:** 
   - ❌ "Seeking therapy," "consultation," "primary concern"
   - ✅ "Therapy," "appointment," "what's going on"
6. **No false reassurance:** Remove defensive phrases like "You decide after we talk"
7. **Direct error messages:** Say what's missing, not why it's missing
8. **Accessible language:** Avoid clinical terms; use everyday words

---

## Testing Checklist

- [ ] All field labels rewritten to conversational tone
- [ ] All placeholders updated to gender-neutral examples + clear format
- [ ] All error messages explain what to fix (not why)
- [ ] All success messages tied to specific action
- [ ] All button text matches the action (not generic "Submit")
- [ ] Tone consistent across booking form + contact form
- [ ] No corporate jargon in any string
- [ ] Help text is optional info, not repetition of label
- [ ] Reassurance copy doesn't sound defensive

---

## Files to Update

1. **components/BookingForm.tsx** — labels, error msgs, success msgs, help text, reassurance copy
2. **app/contact/page.tsx** — contact form labels, button text
3. **components/EnhancedComponents.tsx** — success/error message animation, aria-labels
4. **BOOKING_FORM_EXAMPLE.tsx** — example reference (if keeping)
5. **libs/validation.ts** or inline validation functions — error messages

---

## Microcopy Library (Reusable Strings)

### Form Labels
```typescript
const LABELS = {
  name: "What's your name?",
  email: "Email I'll confirm with",
  phone: "Phone number",
  concern: "What brings you in today?",
  firstTimeTherapy: "Have you tried therapy before?",
  preferredTime: "Pick a time that works for you",
  consent: "I've read and agree to the privacy terms",
}
```

### Placeholders
```typescript
const PLACEHOLDERS = {
  name: "e.g., Sam",
  email: "you@example.com",
  phone: "(555) 123-4567 or +1-555-123-4567",
  concern: "Work stress, anxiety, grief—whatever brought you here",
}
```

### Error Messages
```typescript
const ERRORS = {
  nameRequired: "I need your name to confirm the booking.",
  emailInvalid: "Please enter a valid email address.",
  phoneInvalid: "Please enter a 10+ digit phone number.",
  concernTooShort: "Please share at least one sentence—it helps me prepare.",
  firstTimeTherapyRequired: "Let me know: is this your first time?",
  dateTimeRequired: "Please pick a time that works for you.",
  consentRequired: "Please review and accept the privacy terms.",
  submitError: "We couldn't save your info. Please check your connection and try again.",
}
```

### Success Messages
```typescript
const SUCCESS = {
  name: "✓ Got your name",
  email: "✓ I'll reach you here",
  phone: "✓ I'll call you here",
  concern: "✓ Thanks for sharing",
  formSubmitted: "✓ All set! I'll reach out within 24 hours.",
}
```

### Button Labels
```typescript
const BUTTONS = {
  nextStep: "Next step",
  back: "Go back",
  submitBooking: "Request appointment",
  submitContact: "Send",
}
```

### Help Text
```typescript
const HELP = {
  requiredFields: "* Required. We'll talk within 24 hours.",
  concernHint: "One or two sentences is perfect—we'll dig deeper when we talk.",
  emailConfirmation: "I respond within 24 hours",
  reassurance: "Three quick questions. I'll confirm within 24 hours.",
}
```

---

## Next Steps

1. **Create a `lib/microcopy.ts`** with all strings above
2. **Update BookingForm.tsx** to import and use from `lib/microcopy.ts`
3. **Update contact/page.tsx** similarly
4. **Test form flows** end-to-end for tone consistency
5. **QA:** Read through entire form as a first-time user — does it feel warm?
6. **A11y review:** Ensure aria-labels use updated microcopy
7. **Deploy & monitor:** Check for form abandonment rate changes (expect improvement)

