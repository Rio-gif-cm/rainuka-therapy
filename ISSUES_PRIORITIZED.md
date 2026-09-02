# QUALITY ISSUES — PRIORITIZED CHECKLIST

## CRITICAL BLOCKERS (Fix before launch)

### 1. EMAIL CONFIRMATION NOT SENT ⚠️ CRITICAL
- **File:** `app/api/bookings/route.ts`
- **Issue:** Email service code is commented out (TODO)
- **User Impact:** Bookings submitted but not delivered to therapist
- **Lines:** 37-55
- **Fix Time:** 2-3 hours
- **Dependencies:** SendGrid/AWS SES/Mailgun API key + templates

```
Status: NOT STARTED
Priority: P0 (blocks launch)
Affects: Every user booking
```

### 2. SUCCESS PAGE MISSING ⚠️ CRITICAL
- **File:** Form components redirect to wrong page
- **Issue:** After booking, user sees generic `/welcome` page instead of confirmation
- **User Impact:** User unsure if booking worked
- **Missing:** `/app/booking/confirmation/page.tsx`
- **Fix Time:** 1-2 hours
- **Shows:** Booking details, confirmation #, next steps, calendar link

```
Status: NOT STARTED
Priority: P0 (post-booking UX)
Affects: 100% of booking conversions
```

### 3. BOOKING DATA NOT STORED ⚠️ CRITICAL
- **File:** `app/api/bookings/route.ts`
- **Issue:** API accepts data but doesn't persist (no DB, no file storage)
- **User Impact:** Booking is lost; therapist never notified
- **Fix Time:** 2-4 hours
- **Solution:** Implement Supabase/MongoDB/Firebase or CSV file storage

```
Status: NOT STARTED
Priority: P0 (data persistence)
Affects: 100% of bookings
```

### 4. FORM CONSOLIDATION ⚠️ HIGH (Technical Debt)
- **Files:** 
  - `components/BookingForm.tsx` (813 lines)
  - `components/BookingFormEnhanced.tsx` (941 lines)
  - `components/StreamlinedBookingForm.tsx` (323 lines)
  - `components/BookingFormWrapper.tsx`
- **Issue:** Three nearly-identical forms with inconsistent validation
- **User Impact:** Confusing maintenance; potential inconsistent UX
- **Fix Time:** 3-4 hours
- **Action:** Keep StreamlinedBookingForm, delete others, consolidate validation

```
Status: NOT STARTED
Priority: P1 (maintenance)
Affects: Code quality + future changes
```

---

## HIGH PRIORITY (First sprint after launch)

### 5. FAQ SEARCH MISSING
- **File:** `app/faq/page.tsx`
- **Issue:** 34 FAQs with no search/filter (users must scroll)
- **User Impact:** Poor discoverability; high bounce rate on mobile
- **Fix Time:** 2 hours
- **Adds:** Input filter + real-time search

```
Status: NOT STARTED
Priority: P1 (UX)
Affects: FAQ page findability
```

### 6. ERROR MESSAGE INCONSISTENCY
- **Files:** BookingForm.tsx, StreamlinedBookingForm.tsx, BookingFormEnhanced.tsx
- **Issue:** 6+ different validation error message formats
- **User Impact:** Confusing when different forms behave differently
- **Fix Time:** 1-2 hours
- **Action:** Create validation utility with standard messages

```
Status: NOT STARTED
Priority: P1 (UX consistency)
Affects: All form interactions
```

### 7. PHONE NUMBER FORMATTING
- **File:** `components/BookingForm.tsx` line 116-119
- **Issue:** Accepts raw input (1234567890) without formatting hint
- **User Impact:** Unclear what format to enter; doesn't look phone-like
- **Fix Time:** 1 hour
- **Adds:** (123) 456-7890 formatting + input mask

```
Status: NOT STARTED
Priority: P1 (form UX)
Affects: Phone field usability
```

### 8. NETWORK ERROR HANDLING
- **Files:** StreamlinedBookingForm.tsx line 142, BookingForm.tsx line 309
- **Issue:** Generic error message; no retry mechanism
- **User Impact:** User stuck after network failure
- **Fix Time:** 1-2 hours
- **Adds:** Specific error messages + "Retry" button

```
Status: NOT STARTED
Priority: P1 (resilience)
Affects: Unreliable network conditions
```

### 9. MOBILE CTA COLLISION TEST
- **File:** `components/MobileStickyCTA.tsx`
- **Issue:** Sticky CTA button may overlap form fields on small screens
- **User Impact:** Can't see/interact with bottom form fields
- **Fix Time:** 1 hour (testing + CSS fix)
- **Action:** Test on 320px-375px screens with keyboard open

```
Status: UNTESTED
Priority: P1 (mobile UX)
Affects: Mobile users on booking page
```

---

## MEDIUM PRIORITY (Polish pass)

### 10. FAQ ANIMATION/VISUAL FEEDBACK
- **File:** `app/faq/page.tsx` lines 184-190
- **Issue:** No animation on expand/collapse; chevron doesn't rotate
- **User Impact:** Feels jarring; unclear what's expanding
- **Fix Time:** 1 hour
- **Adds:** CSS transitions + chevron rotation

```
Status: NOT STARTED
Priority: P2 (UX polish)
Affects: FAQ page feel
```

### 11. CTA COPY UNIFICATION
- **Issue:** 7+ different button copy variations
- **Examples:** "Book Now", "Reserve", "Get Started", "Schedule"
- **Fix Time:** 1-2 hours
- **Action:** Standardize to single message across all pages

```
Status: NOT STARTED
Priority: P2 (brand consistency)
Affects: Brand voice
```

### 12. ACCESSIBILITY AUDIT GAPS
- **Missing:** Focus state testing on all buttons
- **Missing:** Screen reader testing on form errors
- **Missing:** Keyboard-only navigation test
- **Fix Time:** 2-3 hours
- **Tools:** axe DevTools, NVDA, Lighthouse audit

```
Status: PARTIALLY DONE
Priority: P2 (WCAG compliance)
Affects: Disabled users
```

### 13. TESTIMONIAL FILTERING
- **File:** `app/about/page.tsx`
- **Issue:** 16 testimonials displayed in fixed order; no category filter
- **User Impact:** Users can't find testimonials relevant to their issue
- **Fix Time:** 2 hours
- **Adds:** Category filter buttons (Perinatal, ADHD, Career, etc.)

```
Status: NOT STARTED
Priority: P2 (UX feature)
Affects: About page engagement
```

### 14. FAQ HELPFULNESS VOTING
- **Issue:** No feedback loop on which FAQs are useful
- **Impact:** Can't measure content effectiveness
- **Fix Time:** 2-3 hours
- **Adds:** "Was this helpful?" buttons + analytics

```
Status: NOT STARTED
Priority: P2 (analytics)
Affects: Content strategy
```

---

## LOW PRIORITY (Nice-to-have)

### 15. BOOKING CONFIRMATION NUMBER
- **Issue:** No unique ID assigned to bookings
- **Impact:** Users can't reference their booking
- **Fix Time:** 30 min
- **Action:** Generate pseudo-UUID on form submit

```
Status: NOT STARTED
Priority: P3 (polish)
Affects: Customer service interactions
```

### 16. "ADD TO CALENDAR" BUTTON
- **Issue:** Success page doesn't help users remember appointment
- **Fix Time:** 1 hour
- **Adds:** Google Calendar + Outlook integration

```
Status: NOT STARTED
Priority: P3 (feature)
Affects: User retention
```

### 17. LOADING SKELETONS
- **Issue:** No skeleton loaders for async content
- **Fix Time:** 1-2 hours
- **Adds:** Skeleton states for testimonials, FAQs

```
Status: NOT STARTED
Priority: P3 (UX polish)
Affects: Perceived performance
```

---

## VERIFICATION TESTS

### Email Flow
```bash
1. Submit booking form
2. Check inbox (user email)
   [ ] Confirmation email received within 5 minutes
   [ ] Contains: name, email, specialty, preferred day
   [ ] Includes: "You'll hear from me within 24 hours"
   [ ] Has: unsubscribe link + privacy notice
3. Check admin inbox
   [ ] Notification received
   [ ] Contains all form data
   [ ] Has: easy-to-read template
```

### Success Page
```bash
1. Submit booking → should redirect to /booking/confirmation
2. Confirmation page shows:
   [ ] Confirmation number/ID
   [ ] Submitted details (name, email, specialty)
   [ ] "You'll hear from me within 24 hours"
   [ ] Link to FAQ or contact if they have questions
   [ ] "Add to Calendar" button
```

### Error Handling
```bash
1. Disable network in DevTools
2. Submit form
3. Should show:
   [ ] Clear error message (not "Something went wrong")
   [ ] "Retry" button
   [ ] "Contact support" link
4. Click Retry
5. Should re-attempt submission
```

### Mobile UX
```bash
1. Open booking page on iPhone SE (375px)
2. Fill out form
3. Tap input field → keyboard opens
4. Check:
   [ ] Sticky CTA button doesn't cover inputs
   [ ] Form scrolls when needed
   [ ] All fields visible + tappable
```

### FAQ
```bash
1. Open FAQ page
2. Click first item → should expand smoothly
3. Chevron should rotate 180°
4. Click again → should collapse
5. Test search:
   [ ] Type "cost" → filters to pricing FAQs
   [ ] Type "ADHD" → shows only ADHD-related FAQs
```

---

## ESTIMATED TOTAL EFFORT

| Phase | Items | Est. Hours | Status |
|-------|-------|-----------|--------|
| **Critical** | 4 | 8-12 | NOT STARTED |
| **High** | 6 | 10-14 | NOT STARTED |
| **Medium** | 4 | 7-10 | PARTIALLY DONE |
| **Low** | 3 | 3-4 | NOT STARTED |
| **Verification** | — | 4-6 | NOT STARTED |
| **TOTAL** | 17 | 32-46 | **BLOCKED** |

**Launch Readiness:** ❌ NOT READY (Email system broken)  
**Timeline to Production:** 1-2 weeks (with full focus)

---

## ACTIONABLE NEXT STEPS

**TODAY (Critical Path)**
- [ ] Set up email service (SendGrid account + API key)
- [ ] Create email templates (confirmation + admin notification)
- [ ] Implement email sending in `/api/bookings` route
- [ ] Test end-to-end: submit → receive email

**THIS WEEK**
- [ ] Build `/booking/confirmation` page
- [ ] Implement booking persistence (database or file storage)
- [ ] Set up data backup (email daily summaries to admin)
- [ ] Consolidate booking forms (delete duplicates)

**NEXT WEEK**
- [ ] Add FAQ search
- [ ] Standardize error messages
- [ ] Fix mobile CTA positioning
- [ ] Add phone number formatting
- [ ] Audit accessibility

---

