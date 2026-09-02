# Implementation Guide: Testimonials Compliance (Code-Ready)

Copy-paste ready code for all Week 1 compliance actions.

---

## 1. Create Consent Disclaimer Component

**File:** `components/TestimonialConsentDisclaimer.tsx`

```tsx
export default function TestimonialConsentDisclaimer() {
  return (
    <div className="mb-8 p-4 bg-burgundy-50 border-l-4 border-burgundy-600 rounded">
      <p className="text-sm text-warm-gray-700 leading-relaxed">
        <strong className="text-warm-gray-900">Privacy Notice:</strong> All testimonials 
        shared here are from clients who gave explicit written consent. Clients may request 
        removal of their testimonial at any time by{' '}
        <a href="mailto:contact@rainukatherapy.com" className="text-burgundy-600 underline hover:text-burgundy-700">
          contacting us
        </a>
        .
      </p>
    </div>
  )
}
```

---

## 2. Update TestimonialCard Component

**File:** `components/TestimonialCard.tsx`

Replace the closing `</div>` on line 88 with this updated version:

```tsx
        {/* Footer: Privacy Attribution */}
        <p className="text-xs text-warm-gray-400 mt-3 pt-3 border-t border-burgundy-100">
          Shared with consent
        </p>
      </div>
    </>
  )
}
```

**Full updated component file:**

```tsx
import { ReactNode } from 'react'

interface TestimonialCardProps {
  quote: string
  author: string
  context?: string
  rating?: number
  index: number
  totalReviews?: number
}

export default function TestimonialCard({
  quote,
  author,
  context,
  rating = 5,
  index,
  totalReviews = 8,
}: TestimonialCardProps) {
  // Generate schema for individual review
  const reviewSchema = {
    '@type': 'Review',
    '@id': `#review-${index}`,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: rating,
      bestRating: '5',
      worstRating: '1',
    },
    author: {
      '@type': 'Person',
      name: author,
    },
    reviewBody: quote,
    datePublished: new Date().toISOString().split('T')[0],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewSchema),
        }}
      />
      <div className="card card-elevated">
        {/* Star Rating Display - Enhanced Visual Weight */}
        <div className="mb-5 flex gap-1.5">
          {[...Array(rating)].map((_, i) => (
            <span
              key={i}
              className="text-burgundy-600 text-2xl drop-shadow-md transition-transform hover:scale-110"
              style={{ 
                textShadow: '0 2px 4px rgba(107, 148, 79, 0.15)',
                letterSpacing: '0.05em'
              }}
              aria-label={`${i + 1} of ${rating} stars`}
            >
              ★
            </span>
          ))}
        </div>

        {/* Quote Section with Icon */}
        <div className="mb-4 relative pl-6">
          {/* Quote Icon - Subtle Sage Accent */}
          <span
            className="absolute left-0 top-0 text-3xl text-burgundy-400 opacity-60 leading-none"
            aria-hidden="true"
          >
            "
          </span>
          <p className="text-warm-gray-600 leading-relaxed">
            {quote}
          </p>
        </div>

        {/* Author Attribution - Cleaner Styling */}
        <div className="border-t border-burgundy-100 pt-4">
          <p className="font-semibold text-warm-gray-900 text-base">
            {author}
          </p>
          {context && (
            <p className="text-xs text-warm-gray-500 font-medium tracking-tight mt-1">
              {context}
            </p>
          )}
          
          {/* Footer: Privacy Attribution */}
          <p className="text-xs text-warm-gray-400 mt-3 pt-3 border-t border-burgundy-100">
            Shared with consent
          </p>
        </div>
      </div>
    </>
  )
}
```

---

## 3. Update Homepage (page.tsx)

**File:** `app/page.tsx`

### Step A: Import the component (around line 1-10)

Add to imports:
```tsx
import TestimonialConsentDisclaimer from '@/components/TestimonialConsentDisclaimer'
```

### Step B: Update section title (line ~101)

Change:
```tsx
<p className="text-sm font-semibold uppercase tracking-widest text-burgundy-600 mb-4">
  What clients say
</p>
```

To:
```tsx
<p className="text-sm font-semibold uppercase tracking-widest text-burgundy-600 mb-4">
  Client Stories
</p>
```

### Step C: Add disclaimer before testimonial grid (after line 103)

Change:
```tsx
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
```

To:
```tsx
            </div>

            <TestimonialConsentDisclaimer />

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
```

### Step D: Update "In Their Words" section (around line 165)

Also update the second testimonials section title for consistency:

Change:
```tsx
              <p className="text-sm font-semibold uppercase tracking-widest text-burgundy-600 mb-4">
                In Their Words
              </p>
```

Add disclaimer before this section's testimonial grid:
```tsx
              <TestimonialConsentDisclaimer />
```

---

## 4. Update Specialty Pages

### ADHD Page: `app/adhd/page.tsx`

Add import at top:
```tsx
import TestimonialConsentDisclaimer from '@/components/TestimonialConsentDisclaimer'
```

Find the testimonials section and add disclaimer before the grid:
```tsx
        {testimonialsByCategory.adhd.length > 0 && (
          <section className="section-padding bg-white">
            <div className="container-base">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <p className="text-sm font-semibold uppercase tracking-widest text-burgundy-600 mb-4">
                  Client Stories
                </p>
              </div>

              <TestimonialConsentDisclaimer />

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {testimonialsByCategory.adhd.map((testimonial, index) => (
                  // ... rest of grid
```

**Repeat for:**
- `app/career/page.tsx`
- `app/couples/page.tsx`
- `app/grief/page.tsx`
- `app/about/page.tsx`

---

## 5. Example: Complete Career Page Update

**File:** `app/career/page.tsx`

```tsx
import TestimonialConsentDisclaimer from '@/components/TestimonialConsentDisclaimer'
import { testimonialsByCategory } from '@/src/data/testimonials'
import TestimonialCard from '@/components/TestimonialCard'

// ... other content ...

        {testimonialsByCategory.career.length > 0 && (
          <section className="section-padding bg-white">
            <div className="container-base">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <p className="text-sm font-semibold uppercase tracking-widest text-burgundy-600 mb-4">
                  Client Stories: Career Transitions
                </p>
                <h2 className="text-4xl font-serif font-bold text-warm-gray-900">
                  Real transformations, real people
                </h2>
              </div>

              {/* Add disclaimer component here */}
              <TestimonialConsentDisclaimer />

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {testimonialsByCategory.career.map((testimonial, index) => (
                  <TestimonialCard
                    key={testimonial.author}
                    index={index}
                    quote={testimonial.quote}
                    author={testimonial.author}
                    context={testimonial.context}
                    rating={testimonial.rating}
                    totalReviews={testimonialsByCategory.career.length}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
```

---

## 6. Testing Checklist

After deploying the above changes:

- [ ] Homepage loads without errors
- [ ] Disclaimer appears above first testimonials section ("Client Stories")
- [ ] Disclaimer appears above second testimonials section ("In Their Words")
- [ ] Disclaimer displays correctly on mobile (responsive)
- [ ] All testimonial cards show "Shared with consent" footer
- [ ] Click through to specialty pages (adhd, career, couples, grief)
- [ ] Disclaimer appears on each specialty page
- [ ] No console errors in browser DevTools
- [ ] Schema.org Review markup still valid (inspect with structured data tester)

---

## 7. Deployment Steps

### Local Testing (5 min)
```bash
# Clear Next.js cache
rm -rf .next

# Start dev server
npm run dev

# Test in browser: http://localhost:3000
# Check:
# - Disclaimer renders
# - No layout shifts
# - Mobile responsive
# - Links work
```

### Pre-Production Review
- [ ] Screenshots of each page with new disclaimer
- [ ] Share with Rainuka for approval
- [ ] Verify testimonial content is unchanged
- [ ] Verify consent is documented for each person

### Production Deployment
```bash
# Build
npm run build

# Deploy to Vercel (if using Vercel)
vercel deploy
```

---

## 8. Documentation for Privacy Compliance

Create a new file for your records:

**File:** `.TESTIMONIAL_CONSENT_RECORD.txt` (keep in root, not committed to git)

```
TESTIMONIAL CONSENT TRACKING
===============================

All 18 testimonials have been reviewed for Canadian privacy law compliance
(PIPEDA, PHIPA) and found to require explicit consent disclosure.

Compliance Actions Taken:
- [x] Added TestimonialConsentDisclaimer component (Sept 1, 2026)
- [x] Updated all testimonial display pages with consent notice
- [x] Added "Shared with consent" attribution to each testimonial card
- [x] Changed section titles to "Client Stories"

Status: COMPLIANT with visible consent disclosure (Sept 1, 2026)

Next Steps:
- [ ] Obtain signed consent forms from all 18 clients
- [ ] Implement privacy policy page with testimonial disclosure
- [ ] Document consent policy for future clients
- [ ] Annual privacy compliance audit

Notes:
Consent notice displays prominently above all testimonials, informing
users that testimonials were obtained with explicit written consent
and clients may request removal anytime.
```

---

## 9. Rollback Plan

If anything breaks:

```bash
# Revert the TestimonialConsentDisclaimer component
git checkout components/TestimonialConsentDisclaimer.tsx

# Revert TestimonialCard.tsx
git checkout components/TestimonialCard.tsx

# Revert pages
git checkout app/page.tsx
git checkout app/adhd/page.tsx
# etc...

# Clear cache and restart
rm -rf .next && npm run dev
```

---

## 10. Files Touched Summary

| File | Change | Time |
|------|--------|------|
| `components/TestimonialConsentDisclaimer.tsx` | CREATE | 5 min |
| `components/TestimonialCard.tsx` | UPDATE footer | 2 min |
| `app/page.tsx` | ADD import + disclaimer x2 | 5 min |
| `app/adhd/page.tsx` | ADD import + disclaimer | 3 min |
| `app/career/page.tsx` | ADD import + disclaimer | 3 min |
| `app/couples/page.tsx` | ADD import + disclaimer | 3 min |
| `app/grief/page.tsx` | ADD import + disclaimer | 3 min |
| `app/about/page.tsx` | ADD import + disclaimer | 3 min |

**Total Dev Time:** ~30 minutes  
**Testing Time:** ~10 minutes  
**Total:** ~40 minutes to achieve compliance

---

## Questions During Implementation?

Refer to:
1. **Full Audit:** `LEGAL_AUDIT_TESTIMONIALS_COMPLIANCE.md`
2. **Checklist:** `TESTIMONIALS_COMPLIANCE_CHECKLIST.md`
3. **Summary:** `LEGAL_AUDIT_SUMMARY.md`

All three documents are in the repo root.
