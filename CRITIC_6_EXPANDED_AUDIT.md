# CRITIC #6: Ruthless Accessibility & Legal Compliance Audit

**Date:** 9/1/2026
**Total Gaps:** 18 (CRITICAL: 1 | HIGH: 8 | MEDIUM: 8)

## Overview

This ruthless audit identified **18 genuine compliance gaps** across:
- WCAG AA Standards (Keyboard, Focus, Semantics, Links)
- Color Contrast (4.5:1 minimum for AA)
- Screen Reader Support (ARIA, Alt Text, Landmarks)
- Legal Compliance (PIPEDA, Disclaimers, Terms)
- Mobile & Touch Accessibility
- Form Accessibility

## Critical Issues (Must Fix)

1. **S1: Root Layout Missing <main> Element (Critical)**
   - Criterion: WCAG 1.3.1
   - Impact: Main landmark required for screen reader navigation. Breaking accessibility for all pages.

## High Priority Issues (WCAG AA Failures)

1. **K4: Form Error Messages Not Announced (Missing aria-live)**
   - Criterion: WCAG 3.3.1
   - Impact: Validation errors appear visually but screen readers dont announce them.

2. **C2: Blush-400 on White (~2.8:1 Contrast Ratio - FAILS)**
   - Criterion: WCAG 1.4.3
   - Impact: blush-400 (#c08e8d) on white fails AA contrast. Affects testimonials, secondary text.

3. **C3: Blush-300 on White (~2.5:1 - FAILS)**
   - Criterion: WCAG 1.4.3
   - Impact: blush-300 (#d6adac) also fails contrast. Multiple light text options are inaccessible.

4. **F3: Date Picker Calendar Missing Keyboard Navigation**
   - Criterion: WCAG 2.1.1
   - Impact: Calendar component doesnt support arrow keys. Users cannot navigate dates with keyboard alone.

5. **L2: No Privacy Complaint Process (PIPEDA Requirement)**
   - Criterion: PIPEDA
   - Impact: Users cannot find how to lodge complaints with Office of Privacy Commissioner of Canada.

6. **L3: Terms of Service Page Missing**
   - Criterion: Canadian Contract Law
   - Impact: No legal terms page. Required for cancellation policy, liability limits, client confidentiality.

7. **MOBILE2: Viewport Meta Tag Missing or Incomplete**
   - Criterion: WCAG 1.4.4
   - Impact: Mobile users cannot zoom or resize content properly without proper viewport settings.

8. **CONSENT1: No Telehealth Informed Consent Disclosure**
   - Criterion: Canadian Telehealth Best Practice
   - Impact: Booking page missing consent form about virtual therapy risks, privacy, technical limitations.

## Medium Priority (Enhancement & Best Practice)

1. **C5: No Color Contrast Audit Tool in CI/Build Pipeline**
   - No automated contrast checker (lighthouse, axe) in build. Regressions undetected.

2. **F1: Form Inputs Missing aria-required Attribute**
   - Required fields use HTML required attribute but not aria-required. Screen readers may miss requirement.

3. **L5: No Business Registration / Tax Information Disclosed**
   - Canadian clients need to see Business Number, HST registration, corporate structure. None disclosed.

4. **SR1: Excessive aria-hidden Use (May Hide Content from Screen Readers)**
   - Multiple aria-hidden attributes found. If misused, this hides content from assistive tech.

5. **SR2: Very Few aria-label Attributes (Screen Reader Compatibility Low)**
   - Custom components may lack aria-label for screen reader identification.

6. **LINK1: 4 Links with Generic Text ("Read more", "Learn more")**
   - Screen readers cannot determine link purpose. Links must have descriptive text.

7. **TEST1: No Automated Accessibility Testing in Build Pipeline**
   - No axe, lighthouse, pa11y, or similar in CI/CD. Regressions undetected. Should run on every PR.

8. **CONSENT2: Cookie Banner / Tracking Consent Missing**
   - No cookie consent banner. Website may be tracking without explicit user consent.

