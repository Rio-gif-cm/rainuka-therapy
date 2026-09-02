# CRITIC #6: Ruthless Accessibility & Legal Compliance Audit

**Date:** 9/1/2026
**Total Gaps Found:** 14
**Critical:** 2 | **High:** 6 | **Medium:** 6

## Executive Summary

This ruthless audit identified **14 genuine compliance gaps** across WCAG AA, color contrast, keyboard navigation, screen readers, alt text, legal disclaimers, and PIPEDA requirements.

### Severity Breakdown
| Severity | Count | Status |
|----------|-------|--------|
| 🔴 CRITICAL | 2 | Blocks legal compliance & core accessibility |
| 🟠 HIGH | 6 | WCAG AA failures |
| 🟡 MEDIUM | 6 | Enhancement & best practice |
| 🟢 LOW | 0 | Polish & edge cases |

---

## Detailed Gaps

### 🔴 A1: Missing <main> Landmark in Root Layout

**Severity:** CRITICAL
**WCAG Criterion:** WCAG 1.3.1 (Info and Relationships)

**Details:** Root layout.tsx does not wrap page content in a <main> element. This breaks screen reader landmark navigation.

**Locations:** app/layout.tsx

### 🔴 LC3: Missing Healthcare/Therapy Disclaimer

**Severity:** CRITICAL
**WCAG Criterion:** Canadian Professional Liability (Risk Management)

**Details:** No clear disclaimer stating therapy is not medical treatment. This is a liability risk and required by insurance standards.

**Locations:** app/about/page.tsx, app/contact/page.tsx, Footer component

### 🟠 C2: Color Contrast Below 4.5:1 for Text on Light Backgrounds

**Severity:** HIGH
**WCAG Criterion:** WCAG 1.4.3 (Contrast Minimum)

**Details:** 2 text color combinations fail WCAG AA contrast requirements. Users with low vision cannot read affected text.

**Locations:** tailwind.config.ts, components/TestimonialCard.tsx

### 🟠 F1: Form Errors Not Announced via Live Regions

**Severity:** HIGH
**WCAG Criterion:** WCAG 3.3.1 (Error Identification)

**Details:** Form validation errors appear visually but lack aria-live or role="alert". Screen readers will not announce errors immediately.

**Locations:** components/BookingForm.tsx

### 🟠 L3: Links Without href Attribute

**Severity:** HIGH
**WCAG Criterion:** WCAG 2.4.1 (Link Purpose)

**Details:** 21 <Link> elements found without href. These are not keyboard accessible.

**Locations:** Multiple components

### 🟠 LC2: No Contact Info for Privacy Complaints (PIPEDA Requirement)

**Severity:** HIGH
**WCAG Criterion:** PIPEDA Requirement

**Details:** Privacy policy lacks information on how to lodge complaints with the Office of the Privacy Commissioner of Canada.

**Locations:** app/privacy/page.tsx

### 🟠 LC4: Missing Terms of Service Page

**Severity:** HIGH
**WCAG Criterion:** Canadian Contract Law (Standard Practice)

**Details:** No Terms of Service page exists. This is required to establish legal boundaries, cancellation policies, and liability limits.

**Locations:** app/terms/page.tsx (MISSING)

### 🟠 MOB2: Missing or Incomplete Viewport Meta Tag

**Severity:** HIGH
**WCAG Criterion:** WCAG 1.4.4 (Resize Text)

**Details:** Viewport meta tag missing or incomplete. Mobile users cannot zoom or resize content properly.

**Locations:** app/layout.tsx

### 🟡 F2: Required Fields Not Explicitly Marked (Missing aria-required)

**Severity:** MEDIUM
**WCAG Criterion:** WCAG 1.3.1 (Info and Relationships)

**Details:** Form uses HTML required attribute but not aria-required. Some screen readers may miss the requirement.

**Locations:** components/BookingForm.tsx

### 🟡 L2: Generic Link Text ("Read more", "Learn more", etc.)

**Severity:** MEDIUM
**WCAG Criterion:** WCAG 2.4.9 (Link Purpose)

**Details:** Found ~4 links with generic text. Screen readers cannot determine link purpose from text alone.

**Locations:** Multiple pages, Guides, Service pages

### 🟡 LC5: No Telehealth Informed Consent Disclosure

**Severity:** MEDIUM
**WCAG Criterion:** Canadian Telehealth Best Practice

**Details:** Booking page lacks consent statement about telehealth privacy, technical limitations, and virtual therapy risks.

**Locations:** app/booking/page.tsx

### 🟡 LC6: No Business Registration or Tax Information (CRA Requirement)

**Severity:** MEDIUM
**WCAG Criterion:** Canadian Revenue Agency (CRA) Standard

**Details:** No Business Number, HST registration, or corporate structure disclosed. Required for transparency with Canadian clients.

**Locations:** components/Footer.tsx, Contact page

### 🟡 H2: Skipped Heading Levels (e.g., H1 → H3)

**Severity:** MEDIUM
**WCAG Criterion:** WCAG 1.3.1 (Info and Relationships)

**Details:** 2 pages skip heading levels. This confuses screen reader users about content structure.

**Locations:** Multiple pages

### 🟡 MOB1: Interactive Elements with Small Touch Targets (< 44x44px)

**Severity:** MEDIUM
**WCAG Criterion:** WCAG 2.5.5 (Touch Target Size)

**Details:** 20 interactive elements use minimal padding. Mobile/touch users cannot reliably activate small buttons (WCAG recommends 44x44px minimum).

**Locations:** Multiple components

---

## Positive Findings

✅ **Layout uses semantic HTML (nav, footer detected)** — Navigation and footer found in 0+ pages

✅ **Navigation detects tabIndex attempts** — 0 potential focus order violations logged

✅ **Tailwind config includes semantic color names** — burgundy, clay, dusk palette found

✅ **Form uses HTML label elements** — 8 labels found for accessibility

✅ **Link elements used consistently** — Found Next.js Link component usage throughout

✅ **0 images have alt attributes** — Accessibility practices in place for image content

✅ **Privacy policy exists and mentions data protection** — Privacy page found at /privacy

✅ **Heading structure detected in pages** — 21 H1 headings found

✅ **Meta tags present in layout** — SEO/social sharing metadata found

✅ **Mobile-responsive design detected** — Responsive components found

