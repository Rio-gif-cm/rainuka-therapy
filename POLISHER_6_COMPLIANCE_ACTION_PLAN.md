# POLISHER #6: Accessibility & Compliance Action Plan
**Role:** Compliance Lead (WCAG, Contrast, Focus, Alt Text, Legal)  
**Date:** September 2, 2026  
**Status:** 🔴 IN PROGRESS  

---

## OVERVIEW

Rainuka Therapy website has **two critical audit streams**:

1. **WCAG 2.1 AA Accessibility** (8 issues, 57% compliant → 100% target)
2. **Canadian Legal Compliance** (6 critical gaps, healthcare + PIPEDA + business registration)

**Current State:**
- ✅ Typography & responsiveness audited (high quality)
- ✅ CTA placement audited (11 improvements identified)
- ❌ **WCAG compliance gaps** (keyboard nav, focus states, contrast)
- ❌ **Legal disclaimers** (PIPEDA, Terms of Service, healthcare liability)

---

## ACCESSIBILITY AUDIT: WCAG 2.1 AA (8 ISSUES)

### 🔴 CRITICAL (1 issue)
**1. Missing Skip-to-Main-Content Link**
- **Criterion:** WCAG 2.4.1 Bypass Blocks (Level A)
- **Impact:** Keyboard users cannot skip navigation
- **File:** `app/layout.tsx`
- **Fix Time:** 10 minutes
- **Status:** ⏳ PENDING

---

### 🟠 HIGH (3 issues)

**2. Dropdown Keyboard Trap (No Escape Key)**
- **Criterion:** WCAG 2.1.1 Keyboard (Level A)
- **Impact:** Cannot close dropdowns with Escape
- **File:** `components/Navigation.tsx` (lines 205-341)
- **Fix Time:** 20 minutes
- **Status:** ⏳ PENDING

**3. Focus Indicators Not Visible**
- **Criterion:** WCAG 2.4.7 Focus Visible (Level AA)
- **Impact:** Users don't see which element has focus
- **Location:** All interactive elements (global CSS issue)
- **File:** `app/globals.css`
- **Fix Time:** 15 minutes
- **Status:** ⏳ PENDING

**4. Calendar Picker No Keyboard Navigation**
- **Criterion:** WCAG 2.1.1 Keyboard (Level A)
- **Impact:** Date picker only works with mouse
- **File:** `components/CalendarPicker.tsx`
- **Fix Time:** 30 minutes
- **Status:** ⏳ PENDING

---

### 🟡 MEDIUM (4 issues)

**5. Generic Link Text ("Read more", "Learn more")**
- **Criterion:** WCAG 2.4.9 Link Purpose (Level AAA, best practice)
- **Impact:** Screen reader users don't know destination
- **Files:** Multiple pages
- **Fix Time:** 20 minutes
- **Status:** ⏳ PENDING

**6. Form Errors Not Announced to Screen Readers**
- **Criterion:** WCAG 3.3.1 Error Identification (Level A)
- **Impact:** Validation errors not read aloud
- **File:** `components/BookingForm.tsx`
- **Fix Time:** 15 minutes
- **Status:** ⏳ PENDING

**7. Testimonial Text Color Contrast (2.8:1 → 4.5:1 needed)**
- **Criterion:** WCAG 1.4.3 Contrast Minimum (Level AA)
- **Colors:** `blush-400` on light backgrounds fails
- **File:** `components/TestimonialCard.tsx`
- **Fix Time:** 10 minutes
- **Status:** ⏳ PENDING

**8. Sensory-Friendly Toggle Missing ARIA Label**
- **Criterion:** WCAG 1.3.1 Info and Relationships (Level A)
- **Impact:** Screen readers can't identify toggle purpose
- **File:** `components/SensoryFriendlyToggle.tsx`
- **Fix Time:** 5 minutes
- **Status:** ⏳ PENDING

---

## LEGAL COMPLIANCE AUDIT: CANADIAN (6 CRITICAL GAPS)

### 🔴 CRITICAL GAPS

**1. Canadian Business Registration Missing ❌**
- No Business Number, HST registration, or corporate structure disclosed
- **Risk:** CRA liability, provincial audit failure
- **Fix:** Add to footer or Terms page
- **Files:** `components/Footer.tsx`, create `/terms` page
- **Time:** 15 minutes

**2. LCSW Credential Translation Missing ❌**
- LCSW is U.S. only; no Canadian regulatory equivalency disclosed
- **Risk:** Misrepresentation to Canadian clients, disciplinary action
- **Fix:** Add Canadian licensing disclosure
- **Files:** `app/about/page.tsx` (lines 225-229)
- **Time:** 10 minutes

**3. Healthcare Disclaimers Weak ⚠️**
- No global healthcare liability statement
- No scope-of-practice disclaimer (therapy ≠ psychiatry, testing, prescribing)
- No informed consent for telehealth
- **Risk:** Liability exposure, regulatory non-compliance
- **Fix:** Add to footer + create disclaimers page
- **Files:** `components/Footer.tsx`, create disclaimer section
- **Time:** 20 minutes

**4. PIPEDA Privacy Policy Gaps (HIPAA ≠ PIPEDA) ❌**
- Policy mentions U.S. HIPAA law (not applicable in Canada)
- Missing: PIPEDA consent, breach notification, provincial contact info
- Missing: Third-party service compliance (Brevo, Vercel PIPEDA status)
- **Risk:** PIPEDA violation fines up to $100k CAD
- **Fix:** Replace HIPAA with PIPEDA, add Data Protection Rights section
- **Files:** `app/privacy/page.tsx`
- **Time:** 30 minutes

**5. Terms of Service Page Missing ❌**
- No cancellation policy, liability limits, dispute resolution
- No governing law stated (must specify Canadian province)
- No telehealth consent form
- **Risk:** Unenforceable terms, client disputes
- **Fix:** Create new `/terms` page with full terms
- **Files:** Create `app/terms/page.tsx`
- **Time:** 45 minutes

**6. Tax & Business Info Missing ❌**
- No HST/GST disclosure, no tax receipt policy
- Contact page has template placeholder ("[State] & 27 other states")
- **Risk:** Tax audit exposure, client tax deduction issues
- **Fix:** Update contact page, add tax/billing info
- **Files:** `app/contact/page.tsx`, add invoice/tax section
- **Time:** 15 minutes

---

## IMPLEMENTATION PRIORITY

### Phase 1: CRITICAL COMPLIANCE (90 minutes) — DO FIRST
**Goal:** Remove legal liability exposure, achieve WCAG A compliance

**Accessibility (50 min):**
- [ ] Add skip-to-main-content link — `app/layout.tsx` (10 min)
- [ ] Fix dropdown escape key handling — `components/Navigation.tsx` (20 min)
- [ ] Add visible focus indicators (global) — `app/globals.css` (15 min)
- [ ] Add ARIA label to sensory toggle — `components/SensoryFriendlyToggle.tsx` (5 min)

**Legal (40 min):**
- [ ] Replace HIPAA → PIPEDA in privacy policy — `app/privacy/page.tsx` (15 min)
- [ ] Add Canadian licensing disclosure — `app/about/page.tsx` (10 min)
- [ ] Add global healthcare disclaimer footer — `components/Footer.tsx` (15 min)

### Phase 2: WCAG AA + LEGAL COMPLETENESS (60 minutes)
**Goal:** Full WCAG AA compliance, complete legal framework

**Accessibility (30 min):**
- [ ] Implement calendar keyboard navigation — `components/CalendarPicker.tsx` (30 min)

**Legal (30 min):**
- [ ] Create Terms of Service page — `app/terms/page.tsx` (25 min)
- [ ] Add Tax/Business Info section — footer + terms page (5 min)

### Phase 3: BEST PRACTICES (30 minutes)
**Goal:** Enhance beyond baseline, close loop on all audits

**Accessibility (30 min):**
- [ ] Improve generic link text — Multiple pages (15 min)
- [ ] Add form error announcements (live regions) — `components/BookingForm.tsx` (10 min)
- [ ] Fix testimonial contrast — `components/TestimonialCard.tsx` (5 min)

---

## FILES TO MODIFY

| File | Issues Fixed | Status |
|------|--------------|--------|
| `app/layout.tsx` | Skip-to-main (WCAG #1) | ⏳ |
| `app/globals.css` | Focus visible (WCAG #3) | ⏳ |
| `components/Navigation.tsx` | Dropdown trap (WCAG #2) | ⏳ |
| `components/CalendarPicker.tsx` | Keyboard nav (WCAG #4) | ⏳ |
| `components/BookingForm.tsx` | Error announcements (WCAG #6) | ⏳ |
| `components/TestimonialCard.tsx` | Contrast fix (WCAG #7) | ⏳ |
| `components/SensoryFriendlyToggle.tsx` | ARIA label (WCAG #8) | ⏳ |
| `components/Footer.tsx` | Healthcare disclaimer + tax info (Legal #3, #6) | ⏳ |
| `app/privacy/page.tsx` | HIPAA → PIPEDA (Legal #4) | ⏳ |
| `app/about/page.tsx` | Canadian licensing (Legal #2) | ⏳ |
| `app/contact/page.tsx` | Remove template placeholder (Legal #6) | ⏳ |
| `app/terms/page.tsx` | NEW: Terms of Service (Legal #5) | ⏳ |
| Multiple pages | Generic link text (WCAG #5) | ⏳ |

---

## COMPLIANCE METRICS

| Metric | Current | Target | Gap |
|--------|---------|--------|-----|
| WCAG 2.1 AA Compliance | 57% (4/7 criteria) | 100% | -43% |
| Canadian Legal Compliance | 33% (2/6 gaps closed) | 100% | -67% |
| Accessibility Issues | 8 issues | 0 | 8 issues |
| Legal Issues | 6 gaps | 0 | 6 gaps |
| **Total Effort** | — | — | **~3.5 hours** |

---

## TEAM COLLABORATION

**Coordination Points:**
1. **Copy Lead (for legal text):** Work together on healthcare disclaimer, Terms of Service, PIPEDA privacy language
   - Ensure clarity, warmth, legal accuracy
   - Review all customer-facing legal disclaimers
   
2. **Designer (for contrast/focus):** Review visual changes to contrast, focus indicators
   - Ensure focus outlines meet WCAG 2.1 AA visual specs (3px, 3:1 contrast)
   - Verify testimonial text color changes don't break brand
   
3. **QA/Testing:** Keyboard testing, screen reader verification
   - Tab navigation across all components
   - VoiceOver (Mac) / NVDA (Windows) testing for form errors, skip link

---

## VERIFICATION CHECKLIST

### WCAG Testing
- [ ] Keyboard-only navigation (Tab, Shift+Tab, Enter, Escape) works end-to-end
- [ ] All focus states visible (3px outline, 3:1 contrast minimum)
- [ ] Skip-to-main link works and is keyboard-navigable
- [ ] Dropdown closes with Escape key
- [ ] Calendar navigation via arrow keys
- [ ] Form errors announced to screen readers
- [ ] All link text is descriptive (no "read more" generics)
- [ ] Contrast checker confirms 4.5:1 minimum on all text

### Legal Testing
- [ ] Privacy policy clearly states PIPEDA compliance
- [ ] About page discloses Canadian licensing status
- [ ] Healthcare disclaimer visible on every page (footer)
- [ ] Terms of Service page exists and is accessible
- [ ] Contact page shows Canadian provinces (not U.S. states)
- [ ] Tax/business registration info present

---

## REFERENCES

- **WCAG 2.1 AA Audit:** `ACCESSIBILITY_AUDIT_COMPLETION_REPORT.md`
- **Remediation Guide:** `ACCESSIBILITY_REMEDIATION_GUIDE.md`
- **Legal Audit:** `CANADIAN_COMPLIANCE_AUDIT.md`
- **Quick Reference:** `ACCESSIBILITY_AUDIT_SUMMARY.md`

---

## NEXT STEPS

1. **Load this plan** — Share with Copy Lead, Designer, QA
2. **Start Phase 1** — Begin with critical accessibility + legal fixes
3. **Collaborate** — Daily sync on blocking issues
4. **Verify** — Test each fix before committing
5. **Document** — Maintain this checklist as work progresses

**Status Update Frequency:** Every 2 hours or when issue is blocked
