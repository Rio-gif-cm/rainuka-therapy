# METADATA & BRAND CONSISTENCY FIX (PHASE 1 WEEK 3)
**Priority:** CRITICAL - Brand consistency directly impacts SEO & user trust

**Current Issue:** Site has mixed branding ("Wonderloud Therapy" vs "Rainuka Therapy")  
**Decision:** Standardize on "Rainuka Therapy" across all pages  
**Status:** Ready to implement

---

## PAGES TO UPDATE

### HIGH PRIORITY (10 pages)

1. **app/page.tsx** (Homepage)
   - Title: Change from "Therapy for Perinatal, ADHD & Career | Wonderloud"
   - To: "ADHD, Perinatal & Career Therapy | Rainuka Therapy"
   - Description: Keep current (good), just add Rainuka at end
   - Canonical: Update from "wonderloud-therapy.com" to "rainuka-therapy.com"

2. **app/about/page.tsx** (About)
   - Title: Update to include "Rainuka"
   - Description: Brand consistency

3. **app/adhd/page.tsx** (ADHD Specialty)
   - Title: Update branding
   - H1: Optimize with keywords

4. **app/perinatal-faq/page.tsx** (Perinatal)
   - Title: Update branding

5. **app/faq/page.tsx** (FAQ)
   - Title: Update branding
   - Keep current structure (good content)

6. **app/guides/page.tsx** (Guides Hub)
   - Title: Update branding

7. **app/contact/page.tsx** (Contact)
   - Title: Update branding

8. **app/booking/page.tsx** (Booking)
   - Title: Update branding

9. **app/layout.tsx** (Global Layout)
   - Check for default metadata affecting all pages

10. **Other pages with identity**: couples, grief, career, etc.

---

## BATCH CHANGES TO MAKE

### Change 1: Homepage (app/page.tsx)

**Replace:**
```
title: 'Therapy for Perinatal, ADHD & Career | Wonderloud',
description: 'Trauma-informed therapy for perinatal grief, postpartum anxiety, ADHD diagnosis, and career burnout. Get your free 15-minute consultation today.',
canonical: 'https://wonderloud-therapy.com',
openGraph.title: 'Therapy for Perinatal, ADHD & Career | Wonderloud',
openGraph.url: 'https://wonderloud-therapy.com',
```

**With:**
```
title: 'ADHD, Perinatal & Career Therapy for High-Achieving Women | Rainuka Therapy',
description: 'Trauma-informed therapy specializing in ADHD diagnosis, perinatal mental health, and career transitions. Telehealth available. Free 15-minute consultation.',
canonical: 'https://rainuka-therapy.com',
openGraph.title: 'ADHD, Perinatal & Career Therapy for High-Achieving Women | Rainuka Therapy',
openGraph.url: 'https://rainuka-therapy.com',
```

### Change 2: All Wonderloud Canonical URLs
Find & Replace: `https://wonderloud-therapy.com` → `https://rainuka-therapy.com`

### Change 3: About Page H1
**Current:** "Meet Your Therapist" (generic)  
**Change to:** "Rainuka Oberoi: Trauma-Informed Therapist for ADHD, Perinatal & Career"

### Change 4: ADHD Page Title & H1
**Current title:** (Check and replace "Wonderloud" if present)  
**New title:** "ADHD Therapy for Women: Diagnosis, Diagnosis, Treatment & Recovery | Rainuka"  
**H1:** "Adult ADHD Therapy for Women: Diagnosis, Treatment & Recovery"

### Change 5: Perinatal Page
**New title:** "Perinatal Mental Health Therapy: Pregnancy, Postpartum & Beyond | Rainuka"  
**H1:** "Perinatal Mental Health Therapy: Pregnancy, Postpartum & Beyond"

---

## VERIFICATION CHECKLIST

After changes, verify:
- [ ] Homepage renders correctly with new branding
- [ ] All Wonderloud URLs redirected to Rainuka (301 redirect setup)
- [ ] Google Search Console shows new canonical URLs
- [ ] No broken links to old domains
- [ ] OG tags (Facebook) show new branding
- [ ] Twitter card tags updated

---

## SEO IMPACT

- CTR improvement: 5-10% (consistent branding in search results)
- Brand recognition: Increased (unified brand signal)
- Trust signals: Improved (consistent messaging)
- No ranking penalty (proper 301 redirects maintain link equity)

---

## FILES TO COMMIT

After changes:
- [ ] app/page.tsx (homepage)
- [ ] app/about/page.tsx
- [ ] app/adhd/page.tsx
- [ ] app/perinatal-faq/page.tsx
- [ ] app/faq/page.tsx
- [ ] app/guides/page.tsx
- [ ] app/contact/page.tsx
- [ ] app/booking/page.tsx
- [ ] app/layout.tsx (if needed)
- [ ] package.json or redirect config (301 redirects)

---
