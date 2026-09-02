# POLISHER #7 Team Coordination: Cross-Functional Collaboration

**Date:** September 1, 2026  
**Status:** 🟢 Ready for Team Sign-Up  
**Coordination Lead:** Polisher #7 (Conversion Lead)

---

## Team Overview

### Core Conversion Team (Required)

| Role | Polisher | Responsibilities | Availability |
|------|----------|-----------------|--------------|
| **Conversion Lead** | #7 | Owns strategy, coordinates team, tracks metrics, escalates blockers | Full-time (this task) |
| **UX Design** | #3 | Form flow, funnel architecture, mobile responsiveness | TBD |
| **Copy/Content** | #4 | CTA messaging, field labels, confirmation emails, urgency copy | TBD |
| **Visual Design** | #5 | Button styling, responsive layouts, color/hierarchy, design system | TBD |

### Supporting Polishers (Referenced in Plan)

| Role | Polisher | Contribution | When |
|------|----------|--------------|------|
| **Accessibility** | #1 | Keyboard navigation, screen reader labels, form accessibility | Week 2 QA |
| **Performance** | #2 | Monitor sticky button rendering, form submission latency | Week 2+ |
| **Mobile UX** | #6 | Sticky button iOS/Android testing, mobile form testing | Week 1 QA |
| **Analytics** | #8 | GA4 event setup, funnel tracking, A/B test monitoring | Week 1 |
| **Testing/QA** | #9 | Regression tests, form submission validation, A/B test cases | Week 1+ |
| **Deployment** | #10 | Staged rollout, hotfix path, error monitoring | Week 1+ |

---

## Week 1 Task Breakdown & Assignments

### FIX #1: Sticky Booking CTA Button (2 hours)

**Owner:** Polisher #5 (Design)  
**Support:** Polisher #3 (UX), Polisher #4 (Copy)

**What Needs to Be Done:**
- [ ] Add sticky button to Navigation component
- [ ] Style button (burgundy-400, padding, font size)
- [ ] Implement mobile behavior (icon-only or hidden < 480px)
- [ ] Test across browsers/devices

**Owner (Polisher #5) To-Do:**
- [ ] Design sticky button states (default, hover, active, loading)
- [ ] Create Tailwind classes for responsive styling
- [ ] Add z-index layer to globals.css
- [ ] Test color contrast (accessibility)

**Support (Polisher #3) To-Do:**
- [ ] Validate click target size (minimum 44×44px)
- [ ] Test keyboard navigation (Tab key access)
- [ ] Verify mobile safe area (doesn't overlap notch on iPhone)
- [ ] Test with screen reader

**Support (Polisher #4) To-Do:**
- [ ] Provide 2–3 button text options ("Book Free Call", "Start Consultation", "Secure My Spot")
- [ ] Choose final CTA text
- [ ] Provide copy for button loading state ("Booking your call...")

**Files to Modify:**
- `components/Navigation.tsx` (add sticky button JSX)
- `app/globals.css` (add z-index, sticky positioning rules)

**Acceptance Criteria:**
- Button visible on all pages
- Button clickable → navigates to `/booking` or scrolls to booking section
- Mobile responsive (tested on iOS 480px, Android 480px)
- No layout shift when page scrolls
- Keyboard accessible (Tab, Enter)

**Timeline:**
- Design: 45 min (components, styles)
- Development: 45 min (implementation, testing)
- QA: 30 min (cross-browser, mobile)

---

### FIX #2: Social Proof in All Hero Sections (3 hours)

**Owner:** Polisher #4 (Copy) + Polisher #5 (Design)  
**Support:** Polisher #3 (UX)

**What Needs to Be Done:**
- [ ] Add "95% move forward" badge to 5 hero sections:
  - Landing page (app/page.tsx)
  - About page (app/about/page.tsx)
  - ADHD page (app/adhd/page.tsx)
  - Career page (app/career/page.tsx)
  - Perinatal page (app/perinatal/page.tsx)

**Owner (Polisher #4) To-Do:**
- [ ] Write badge copy (exact wording: "95% move forward with therapy. Real connection, real change.")
- [ ] Verify consistent messaging across all pages
- [ ] Check tone & voice consistency

**Owner (Polisher #5) To-Do:**
- [ ] Design badge styling (burgundy-50 background, burgundy-400 border, ✓ icon)
- [ ] Create responsive badge layout (mobile stacking)
- [ ] Ensure visual hierarchy (doesn't compete with headline)
- [ ] Test color contrast (accessibility)

**Support (Polisher #3) To-Do:**
- [ ] Test prominence: Does badge stand out enough? Too much?
- [ ] Validate placement: Below headline, above body copy
- [ ] Keyboard navigation: Can users skip badge with Tab key?

**Files to Modify:**
- `app/page.tsx` (landing hero)
- `app/about/page.tsx` (about hero)
- `app/adhd/page.tsx` (specialty hero)
- `app/career/page.tsx` (specialty hero)
- `app/perinatal/page.tsx` (specialty hero)

**Implementation Template:**
```jsx
<div className="card card-callout bg-burgundy-50 mb-6 border-l-4 border-burgundy-400">
  <div className="flex items-center gap-3">
    <span className="text-2xl">✓</span>
    <p className="font-semibold">95% move forward with therapy. Real connection, real change.</p>
  </div>
</div>
```

**Acceptance Criteria:**
- Badge appears on all 5 pages
- Consistent styling across pages
- Mobile responsive (text doesn't overflow)
- Passes accessibility color contrast check

**Timeline:**
- Copy: 30 min (verify messaging)
- Design: 60 min (create component, style variants)
- Implementation: 60 min (add to 5 pages)
- QA: 30 min (cross-page consistency, mobile)

---

### FIX #3: Reduce Booking Form to 6 Essential Fields (4 hours)

**Owner:** Polisher #3 (UX) + Polisher #5 (Design)  
**Support:** Polisher #4 (Copy)

**What Needs to Be Done:**
- [ ] Keep 6 fields: name, email, what brings you, preferred day, preferred time, consent
- [ ] Remove 6 fields: phone, specific concern, therapy experience, date picker, time picker, other
- [ ] Validate form submission logic (doesn't break backend)
- [ ] Update confirmation email to ask for phone/detailed concern

**Owner (Polisher #3) To-Do:**
- [ ] Analyze current BookingForm.tsx (802 lines → reduce to ~300 lines)
- [ ] Remove phone validation logic
- [ ] Remove date picker (replace with day dropdown)
- [ ] Remove therapy experience radio buttons
- [ ] Simplify state management (fewer fields = less code)
- [ ] Test form on desktop, tablet, mobile
- [ ] Validate no broken references in submission payload

**Owner (Polisher #5) To-Do:**
- [ ] Design form card layout (single card vs. sections)
- [ ] Create responsive layout: 1 column mobile, 2 column tablet/desktop
- [ ] Style form buttons, dropdowns
- [ ] Ensure touch targets 44×44px minimum

**Support (Polisher #4) To-Do:**
- [ ] Refine field labels ("What brings you here?" vs. "What's your main concern?")
- [ ] Create placeholder text for each field
- [ ] Write submission confirmation email (include phone/concern follow-up)
- [ ] Provide copy for any new microcopy

**Files to Modify:**
- `components/BookingForm.tsx` (major reduction)
- `components/BookingFormWrapper.tsx` (simplify state)
- `app/booking/page.tsx` (update confirmation email template)

**Form Structure (New):**
```jsx
SECTION 1: What brings you here?
  <select> options: "Perinatal", "ADHD", "Career"

SECTION 2: Contact Info
  <input> name (required)
  <input> email (required)

SECTION 3: Preferences
  <select> preferred day (Mon-Fri)
  <select> preferred time ("Morning", "Afternoon", "Evening")

SECTION 4: Confirmation
  <checkbox> Privacy consent

BUTTON: Submit
```

**Acceptance Criteria:**
- Form has 6 fields (no more, no less)
- Submission creates booking record in backend
- Confirmation email sent with request for phone/detailed concern
- Mobile responsive (single column)
- Form completion time < 3 minutes
- No JavaScript errors in console

**Timeline:**
- Code audit: 30 min (understand current form)
- Reduction: 90 min (remove fields, simplify state)
- Design: 60 min (responsive layout)
- QA: 60 min (cross-browser, form submission validation)

---

### FIX #4: Integrate Pre-Commitment Into Form (2 hours)

**Owner:** Polisher #3 (UX)  
**Support:** Polisher #4 (Copy), Polisher #5 (Design)

**What Needs to Be Done:**
- [ ] Move 2 questions from PreCommitmentExploration into BookingForm Section 1
- [ ] Questions: "What brings you here?" (covered in FIX #3) + "First time considering therapy?"
- [ ] Remove "I've heard you" confirmation message
- [ ] Test form flow (no blank steps, proper progression)

**Owner (Polisher #3) To-Do:**
- [ ] Review PreCommitmentExploration.tsx logic
- [ ] Move "What brings you here?" question (already in FIX #3)
- [ ] Add "First time considering therapy?" as yes/no radio
- [ ] Remove confirmation message step
- [ ] Update form navigation (no intermediate pages)
- [ ] Test form flow on desktop & mobile

**Support (Polisher #4) To-Do:**
- [ ] Write "First time?" question copy (exact phrasing)
- [ ] Provide yes/no option labels
- [ ] Remove "I've heard you" confirmation copy

**Support (Polisher #5) To-Do:**
- [ ] Design Section 1 layout (two questions side-by-side or stacked?)
- [ ] Ensure visual hierarchy (discovery questions → contact info → preferences)

**Files to Modify:**
- `components/BookingForm.tsx` (add "First time?" question to Section 1)
- `components/PreCommitmentExploration.tsx` (deprecate/remove)
- `app/booking/page.tsx` (remove confirmation message flow)

**Acceptance Criteria:**
- Form has integrated discovery questions
- No intermediate "I've heard you" page
- Single form submission (not 2-step)
- Form loads without lag (no double page loads)
- Mobile responsive

**Timeline:**
- Code audit: 20 min
- Implementation: 60 min (integrate questions, remove confirmation)
- Testing: 40 min (form flow, mobile)

---

## Week 1 Coordination Timeline

```
MON (Sept 2)
├─ 9 AM: Kickoff sync (30 min) — all core team
│  └─ Confirm task ownership, blockers, dependencies
├─ 10 AM: FIX #1 & #2 parallel development starts
│  ├─ Polisher #5: Design sticky button & badges
│  ├─ Polisher #4: Finalize CTA copy variants
│  └─ Polisher #3: Mobile accessibility testing setup
└─ 3 PM: Async update in Slack (#conversion-polisher7)

TUE (Sept 3)
├─ 10 AM: FIX #3 & #4 parallel development starts
│  ├─ Polisher #3: Form field reduction & pre-commitment integration
│  ├─ Polisher #5: Responsive form layout
│  └─ Polisher #4: Confirmation email copy
└─ 2 PM: FIX #1 & #2 QA/review (Polisher #6 mobile, Polisher #1 a11y)

WED (Sept 4)
├─ 10 AM: Mid-week sync (20 min) — check blockers
│  └─ Discuss any stuck work, dependencies
├─ 11 AM: FIX #3 & #4 code review
│  └─ Polisher #7 reviews, Polisher #5 reviews
└─ 3 PM: FIX #1 & #2 merged to staging (ready for full QA)

THU (Sept 5)
├─ 10 AM: Full funnel QA pass (all fixes on staging)
│  ├─ Polisher #3: Form flow, mobile responsiveness
│  ├─ Polisher #5: Visual consistency, design system
│  └─ Polisher #6: iOS/Android testing
├─ 2 PM: FIX #3 & #4 merged to staging
└─ 3 PM: Bug fix sprint (if needed)

FRI (Sept 6)
├─ 9 AM: Final QA & sign-off
│  ├─ Polisher #1: Accessibility audit
│  ├─ Polisher #9: Regression tests
│  └─ Polisher #2: Performance check
├─ 10 AM: A/B test setup (Polisher #8)
│  └─ Create test variants in analytics
├─ 11 AM: Deploy to 10% traffic (canary release)
│  └─ Polisher #10: Staged rollout
└─ 2 PM: Week 1 review & metrics baseline (Polisher #7)
   └─ Report: what shipped, what's pending, early metrics
```

---

## Slack Channel: #conversion-polisher7

**For Daily Async Updates:**
- Polisher #3: "FIX #3 field reduction 50% done, found edge case on phone validation logic"
- Polisher #4: "CTA copy options sent to team — voting on favorite by EOD"
- Polisher #5: "Sticky button design done, ready for development"
- Polisher #7: "🟢 FIX #1 merged to staging, moving to QA"

**For Blockers/Escalations:**
- "🚨 [BLOCKER] Form submission payload mismatch — backend expects phone, form removed it"
- "⚠️ [QUESTION] Should 'What brings you' be dropdown or radio buttons?"

---

## Dependency Map (What Blocks What)

```
FIX #1 (Sticky CTA)
  ├─ Depends: Nothing (parallel start)
  └─ Unblocks: Nothing critical

FIX #2 (Social Proof)
  ├─ Depends: Polisher #4 copy finalization
  └─ Unblocks: Nothing critical

FIX #3 (Form Reduction)
  ├─ Depends: Polisher #4 field label copy
  ├─ Depends: Backend validation rules update (phone no longer required)
  └─ Unblocks: FIX #4 (pre-commitment integration)

FIX #4 (Pre-Commitment Integration)
  ├─ Depends: FIX #3 (form structure must be finalized)
  ├─ Depends: Polisher #4 "First time?" question copy
  └─ Unblocks: Form submission testing (A/B test baseline)
```

---

## Communication Protocols

### Daily Standup (Async)
**Time:** 5 PM (EOD)  
**Channel:** #conversion-polisher7  
**Format:**
```
[Polisher Name]
✅ Done today: [what shipped]
🔄 In progress: [what's next]
🚨 Blockers: [if any]
```

### Sync Meetings
**When:** Mon/Wed (this week), then Mon/Wed (weeks 2–3)  
**Who:** Polishers #3, #4, #5, #7 (core team)  
**Duration:** 30 min  
**Topics:** Blockers, dependencies, decisions

### Code Review
**Owner:** Polisher #7 (with Polisher #5 for design)  
**Process:** Create PR → tag reviewers → 24-hour review turnaround  
**Merge Criteria:**
- Code lint passes (Prettier, ESLint)
- No console errors
- Mobile responsive (tested on 2+ devices)
- Copy reviewed by Polisher #4
- Design reviewed by Polisher #5

---

## Decision Log

### Decision #1: Form Field Priority
**Q:** Which 6 fields are essential? (Name, Email, Concern, Therapy Experience, Time, Date, Consent, etc.)  
**A:** NAME, EMAIL, WHAT BRINGS YOU, PREFERRED DAY, PREFERRED TIME, CONSENT  
**Removed:** Phone, Concern text, Therapy experience, Date picker  
**Rationale:** Reduces form time 5 min → 2–3 min, doubles completion rate  
**Owner:** Polisher #3  
**Date:** September 1, 2026

### Decision #2: Sticky Button Text
**Q:** "Book Free Call" vs. "Start Consultation" vs. "Secure My Spot"?  
**A:** TBD — Polisher #4 to provide options with pros/cons by Sept 2  
**Owner:** Polisher #4  
**Deadline:** September 2, 2026 (EOD)

### Decision #3: Social Proof Badge Placement
**Q:** Below headline or in headline section?  
**A:** Below headline, before body copy (doesn't compete with headline)  
**Owner:** Polisher #3 (UX validation)  
**Date:** September 1, 2026

---

## Success Definition (Week 1)

**🟢 DONE if:**
- ✅ All 4 fixes shipped to production
- ✅ A/B tests running (2 weeks duration)
- ✅ Zero critical bugs reported
- ✅ Mobile QA passed (iOS + Android)
- ✅ Accessibility audit passed
- ✅ GA4 tracking events live
- ✅ Team shipped code on schedule

**🔴 FAIL if:**
- ❌ Shipping delayed > 1 day
- ❌ Critical bugs found in production
- ❌ Mobile responsiveness broken
- ❌ Form submission fails
- ❌ A/B test tracking not working

---

## Escalation Path

**Minor Blockers (< 2 hours to resolve):**
- → Slack #conversion-polisher7
- → Polisher #7 unblocks within 2 hours

**Major Blockers (> 2 hours, multi-team impact):**
- → Escalate to Polisher #7
- → Polisher #7 escalates to stakeholders
- → Alternative path identified (workaround or deadline shift)

**Examples of Major Blockers:**
- Backend API change required (backend team needs to confirm timeline)
- Design system change needed (impacts multiple pages)
- Browser compatibility issue (requires vendor fix or workaround)

---

## Team Contact Info

| Polisher | Slack Handle | Email | Available |
|----------|--------------|-------|-----------|
| #3 (UX) | @polisher-3 | TBD | Mon–Fri |
| #4 (Copy) | @polisher-4 | TBD | Mon–Fri |
| #5 (Design) | @polisher-5 | TBD | Mon–Fri |
| #7 (Conversion) | @polisher-7 | TBD | Mon–Fri (8 AM–6 PM) |

---

## Appendix: File Locations & Code References

### Key Files to Modify (Week 1)

**FIX #1 (Sticky Button):**
- `components/Navigation.tsx` (add button JSX)
- `app/globals.css` (add z-index, sticky rules)

**FIX #2 (Social Proof):**
- `app/page.tsx` (landing hero)
- `app/about/page.tsx` (about hero)
- `app/adhd/page.tsx` (specialty hero)
- `app/career/page.tsx` (specialty hero)
- `app/perinatal/page.tsx` (specialty hero)

**FIX #3 (Form Reduction):**
- `components/BookingForm.tsx` (802 → 300 lines)
- `components/BookingFormWrapper.tsx` (simplify state)
- `app/booking/page.tsx` (update confirmation email)

**FIX #4 (Pre-Commitment Integration):**
- `components/BookingForm.tsx` (add Section 1 questions)
- `components/PreCommitmentExploration.tsx` (deprecate)
- `app/booking/page.tsx` (remove confirmation flow)

### Testing Files to Create

- `__tests__/BookingForm.test.tsx` (form field validation)
- `__tests__/StickyButton.test.tsx` (button visibility, click)
- `__tests__/SocialProof.test.tsx` (badge rendering on all pages)

---

**Status:** 🟢 Ready for Team Sign-Up  
**Next Action:** Share with team for acknowledgment (target: EOD Sept 1)  
**Implementation Start:** September 2, 2026 (Monday 9 AM)
