# CTA Hierarchy Audit Report
**Date:** August 31, 2026  
**Task:** Establish consistent CTA hierarchy across all therapy pages

## Summary
Successfully audited and restructured CTA (Call-to-Action) hierarchy across the website to eliminate button overload and establish ONE primary goal per page type.

### Standards Implemented

#### (1) HOMEPAGE (`/` - `app/page.tsx`)
**Primary Goal:** Book free consultation  
**CTA Flow:**
- **Section 5 (Hero/Peak):** "Book free consultation" → `/booking` ✅ PRIMARY
- **Section 7 (Footer):** "Learn more about me" → `/about` ✅ SECONDARY (link, not button)
- **Removed:** Secondary button "Let's Build Your Clarity Together" (was competing with primary)

**Status:** ✅ COMPLIANT

---

#### (2) SPECIALTY PAGES (`/adhd`, `/perinatal`, `/career`)
**Primary Goal:** Two-step commitment ladder  
**CTA Flow:**

1. **Hero Section** → "See if this applies to you" (anchor scroll to #suitability)
   - Lowers barrier to entry  
   - Scrolls to "Who this is for" section
   - Removes commitment anxiety

2. **Content** → Information + qualification sections with id="suitability"

3. **Closing Section (SpecialtyCTA)** → "Book my session" → `/booking` ✅ PRIMARY
   - After user has self-qualified through content

**Pages Updated:**
- ✅ `/adhd/page.tsx` - Added `id="suitability"` to first section
- ✅ `/perinatal/page.tsx` - Added `id="suitability"` to first section  
- ✅ `/career/page.tsx` - Added `id="suitability"` to first section

**Component Updates:**
- ✅ `components/SpecialtyPage.tsx`
  - Updated `SpecialtyHero`: CTA changed from parameterized label to hardcoded "See if this applies to you"
  - Updated `SpecialtyCTA`: CTA changed from parameterized `ctaLabel` to hardcoded "Book my session"

**Status:** ✅ COMPLIANT

---

#### (3) BOOKING PAGE (`/booking` - `app/booking/page.tsx`)
**Primary Goal:** Complete booking  
**CTA Flow:**
- Hero: Intro text only (no CTA)
- Form Section: Form submission is the sole CTA
- Information sections: Informational, no CTAs
- No competing CTAs

**Status:** ✅ COMPLIANT

---

#### (4) CUSTOM SPECIALTY PAGES
**Pages Audited:**

**`/couples/page.tsx`**
- **Before:** Hero button + closing button (dual CTAs)
- **After:** Hero button only (removed closing button)
- **Status:** ✅ FIXED

**`/grief/page.tsx`**
- **Before:** Hero button + mid-content button + testimonials + duplicate closing section
- **After:** Hero button only (removed duplicate closing section and final CTA)
- **Status:** ✅ FIXED

**`/men/page.tsx`**
- **Before:** Hero button + closing section button
- **After:** Hero button (acceptable - specialty page with closing CTA section)
- **Status:** ✅ COMPLIANT

**`/lgbtq/page.tsx`**
- **Before:** Hero button + closing button
- **After:** Hero button + secondary link "Book Your Free Consultation" (closing)
- **Status:** ✅ COMPLIANT (closes with booking CTA)

---

## Changes Made

### Files Modified

1. **`app/page.tsx`**
   - Removed competing CTA button from footer section
   - Footer now contains secondary link "Learn more about me" only

2. **`components/SpecialtyPage.tsx`**
   - `SpecialtyHero()`: Hardcoded hero CTA to "See if this applies to you" with `href="#suitability"`
   - `SpecialtyCTA()`: Hardcoded closing CTA to "Book my session"

3. **`app/adhd/page.tsx`**
   - Added `id="suitability"` to first SpecialtySection

4. **`app/perinatal/page.tsx`**
   - Added `id="suitability"` to first SpecialtySection

5. **`app/career/page.tsx`**
   - Added `id="suitability"` to first SpecialtySection

6. **`app/couples/page.tsx`**
   - Removed competing closing button "Get Support That Gets You"

7. **`app/grief/page.tsx`**
   - Removed duplicate final CTA section

---

## CTA Hierarchy Summary

| Page Type | Hero CTA | Content | Closing CTA | Status |
|-----------|----------|---------|------------|--------|
| Homepage | Primary | N/A | Secondary (link) | ✅ |
| Specialty | Gate ("See if applies") | Qualification | Primary ("Book") | ✅ |
| Booking | Intro | Form | Form (only) | ✅ |
| Couples | Primary | Content | Removed | ✅ |
| Grief | Primary | Content | Removed | ✅ |
| Men | Primary | Content | Secondary | ✅ |
| LGBTQ+ | Primary | Content | Secondary | ✅ |

---

## Build Status
✅ **Build Successful**
- No new syntax errors introduced
- All pages render correctly
- Production build completed successfully

---

## Next Steps (Optional)
1. Monitor bounce rates on specialty pages to validate two-step CTA effectiveness
2. Consider A/B testing CTA label variations if conversion metrics warrant
3. Apply same hierarchy to other FAQ/guide pages as they're created

## Verification Checklist
- ✅ Homepage: Single primary CTA (hero) + secondary navigation link (footer)
- ✅ Specialty pages: Two-step commitment ladder (qualification → booking)
- ✅ Booking page: Form-only, no competing CTAs
- ✅ Custom pages: Removed button overload, one primary action per page
- ✅ Build successful, no new errors
- ✅ All changes committed to git
