# Internal Link Strategy & Implementation Plan
## Wonderloud Therapy

**Document Type:** SEO Strategy + Developer Implementation Guide  
**Created:** September 1, 2026  
**Status:** Ready for Deployment

---

## Part 1: Strategic Framework

### The Problem We're Solving

**Current State (Siloed Content):**
```
Visitor lands on /adhd
↓
Reads about ADHD therapy
↓
Clicks "Book" or bounces
↗ Missing: Knowledge that ADHD often co-occurs with:
   - Career burnout
   - Relationship strain
   - Parenting challenges
   - Anxiety/depression
```

**Goal State (Interconnected Hub):**
```
Visitor lands on /adhd
↓
Reads about ADHD + discovers related content
↓
"Oh, I also struggle with [career/couples/parenting]"
↓
Clicks related specialty page to learn more
↓
Higher intent + broader awareness → Booking conversion
```

### Why This Matters for SEO

1. **Topic Authority:** Google sees ADHD+Career+Couples as related cluster, not separate silos
2. **Keyword Capture:** "ADHD therapy for busy professionals" = /adhd + /career linked together
3. **Link Juice Distribution:** Authority flows from high-traffic /homepage to all specialty pages
4. **Crawl Efficiency:** Bot can reach all important content in 2-3 hops

### Metrics We'll Track

**Before Implementation Baseline:**
- Google Search Console: avg position for each specialty keyword
- Analytics: avg session duration, pages/session, bounce rate
- Conversion: booking rate from each specialty page source

**After Implementation (30-day window):**
- Avg session duration: target +20% (more page views)
- Pages/session: target +1.5 (navigation between specialties)
- Booking conversion: target +10% (secondary specialty exposure)
- GSC rank improvement: specialty pages should move up 2-3 positions on average

---

## Part 2: Detailed Implementation Guide

### FILE-BY-FILE CHANGES

---

## File 1: `/app/adhd/page.tsx`

### Current State
- Hero → Who This Is For → Basics → How I Work → Identity Reconstruction → Stats → Testimonials → Why Rainuka → CTA
- **Only link:** CTA button to /booking

### Changes Required

**Change 1.1: Add inline link in "How I Work" section**

**Location:** After SpecialtyGrid, before "Identity Reconstruction"  
**Add new component or JSX:**
```tsx
{/* NEW: Cross-niche pathway hint */}
<div className="mt-8 p-6 bg-cream-50 rounded-lg border-l-4 border-accent">
  <p className="text-sm font-semibold text-accent mb-2">💬 ADHD Often Comes With…</p>
  <ul className="text-warm-gray-700 space-y-2 text-sm">
    <li>
      <strong>Relationship challenges?</strong> See our{' '}
      <Link href="/couples" className="text-accent underline hover:no-underline">
        couples therapy page
      </Link>
      .
    </li>
    <li>
      <strong>Burnout at work?</strong> Explore{' '}
      <Link href="/career" className="text-accent underline hover:no-underline">
        ADHD + career support
      </Link>
      .
    </li>
    <li>
      <strong>Parenting a child with ADHD?</strong> Read about{' '}
      <Link href="/parents" className="text-accent underline hover:no-underline">
        parenting with ADHD
      </Link>
      .
    </li>
  </ul>
</div>
```

**Change 1.2: Add "Related Content" section before CTA**

**Location:** After Testimonials, before SpeciltyWhyRainuka  
**Add new section:**
```tsx
{/* NEW: Related Content Hub */}
<SpecialtySection tone="sage" width="wide">
  <SpecialtySectionHeader
    accent={accent}
    eyebrow="Dig Deeper"
    title="Related Content"
    intro="ADHD doesn't exist in isolation. Explore how it connects to other areas of your life."
  />
  <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
    <Link
      href="/adhd-faq"
      className="p-6 bg-white rounded-lg border border-accent hover:shadow-lg transition-shadow"
    >
      <h3 className="font-bold text-accent mb-2">ADHD FAQ</h3>
      <p className="text-sm text-warm-gray-600">
        Late diagnosis, executive dysfunction, medication + therapy, time blindness—answered plainly.
      </p>
    </Link>
    <Link
      href="/career"
      className="p-6 bg-white rounded-lg border border-accent hover:shadow-lg transition-shadow"
    >
      <h3 className="font-bold text-accent mb-2">Career + Burnout</h3>
      <p className="text-sm text-warm-gray-600">
        ADHD burnout looks like imposter syndrome. Untangle it with career-focused therapy.
      </p>
    </Link>
    <Link
      href="/couples"
      className="p-6 bg-white rounded-lg border border-accent hover:shadow-lg transition-shadow"
    >
      <h3 className="font-bold text-accent mb-2">Couples Therapy</h3>
      <p className="text-sm text-warm-gray-600">
        ADHD impacts relationships. Therapy helps both partners understand and adapt.
      </p>
    </Link>
    <Link
      href="/parents"
      className="p-6 bg-white rounded-lg border border-accent hover:shadow-lg transition-shadow"
    >
      <h3 className="font-bold text-accent mb-2">Parenting + ADHD</h3>
      <p className="text-sm text-warm-gray-600">
        Parent with ADHD? Parenting a kid with ADHD? Integrated support helps both.
      </p>
    </Link>
  </div>
</SpecialtySection>
```

**Time estimate:** 30 mins (copy, create component, test)

---

## File 2: `/app/career/page.tsx`

### Current State
- Hero → Who I Help → What This Is Not → Why Therapy → Career as Identity Question → Imposter Syndrome → Industry Specific → FAQ → Why Rainuka → CTA

### Changes Required

**Change 2.1: Add inline link in "Why Therapy for Career Stuff" section**

**Location:** In the paragraph after "Career decisions are identity decisions"  
**Find & replace:**
```tsx
// OLD
<p className="text-warm-gray-700 mt-6 mb-0">
  Career decisions are identity decisions. Who you are at work, what you'll tolerate, what's worth the cost.
</p>

// NEW
<p className="text-warm-gray-700 mt-6 mb-0">
  Career decisions are identity decisions. Who you are at work, what you'll tolerate, what's worth the cost.
  Often, <strong>career burnout is actually late ADHD diagnosis</strong>—and many clients discover this in therapy.{' '}
  <Link href="/adhd" className="text-accent underline hover:no-underline">
    Explore ADHD + career connection
  </Link>
  .
</p>
```

**Change 2.2: Add comorbidity callout after "Imposter Syndrome" section**

**Location:** Before FAQ section  
**Add:**
```tsx
{/* NEW: Life stage + career comorbidities */}
<SpecialtySection tone="cream">
  <SpecialtySectionHeader
    accent={accent}
    eyebrow="Career + Life Transitions"
    title="Sometimes Career Questions Hide Other Stuff"
  />
  <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
    <div className="p-6 bg-white rounded-lg border border-l-4" style={{ borderLeftColor: accent.accentText }}>
      <h3 className="font-bold text-warm-gray-900 mb-2">Career Burnout + ADHD Diagnosis</h3>
      <p className="text-warm-gray-600 text-sm mb-4">
        Many high-performing professionals mask ADHD until burnout unmasks it. Late diagnosis changes everything.
      </p>
      <Link href="/adhd" className="text-sm font-bold text-accent underline hover:no-underline">
        Read ADHD therapy page →
      </Link>
    </div>
    <div className="p-6 bg-white rounded-lg border border-l-4" style={{ borderLeftColor: accent.accentText }}>
      <h3 className="font-bold text-warm-gray-900 mb-2">Career + Parenting Overload</h3>
      <p className="text-warm-gray-600 text-sm mb-4">
        New parenthood often destabilizes careers. These are separate problems that need parallel support.
      </p>
      <Link href="/parents" className="text-sm font-bold text-accent underline hover:no-underline">
        Parenting + career support →
      </Link>
    </div>
  </div>
</SpecialtySection>
```

**Change 2.3: Add "Related Content" section before CTA**

Same pattern as ADHD page:
```tsx
{/* NEW: Related Content */}
<div className="grid md:grid-cols-3 gap-6">
  <Link href="/adhd">ADHD + Career Burnout</Link>
  <Link href="/couples">Career + Relationship Impact</Link>
  <Link href="/faq">Career Questions in FAQ</Link>
</div>
```

**Time estimate:** 45 mins

---

## File 3: `/app/faq/page.tsx`

### Current State
- Hero → About Therapy FAQs → Practical Info → Privacy & Confidentiality → Specialty FAQs → CTA → Footer

### Changes Required

**Change 3.1: Add "Specialty FAQs" navigation section**

**Location:** After last FAQ category, before CTA section  
**Add:**
```tsx
{/* NEW: Specialty FAQ Navigation */}
<div className="mb-16 p-8 bg-burgundy-50 rounded-lg">
  <h2 className="text-2xl font-serif font-bold text-warm-gray-900 mb-6">
    Looking for something more specific?
  </h2>
  <p className="text-warm-gray-600 mb-6">
    We have detailed FAQs for each of our specialties. Find answers tailored to your situation.
  </p>
  <div className="grid md:grid-cols-2 gap-6">
    <div>
      <h3 className="font-bold text-warm-gray-900 mb-3">📋 ADHD-Specific Questions</h3>
      <p className="text-sm text-warm-gray-600 mb-4">
        Late diagnosis, executive dysfunction, rejection sensitivity, medication + therapy, workplace accommodations.
      </p>
      <Link href="/adhd-faq" className="inline-block font-bold text-burgundy-600 hover:underline">
        Go to ADHD FAQ →
      </Link>
    </div>
    <div>
      <h3 className="font-bold text-warm-gray-900 mb-3">🤰 Perinatal & Postpartum</h3>
      <p className="text-sm text-warm-gray-600 mb-4">
        Pregnancy anxiety, postpartum depression/anxiety, intrusive thoughts, birth trauma, pregnancy loss, infertility.
      </p>
      <Link href="/perinatal-faq" className="inline-block font-bold text-burgundy-600 hover:underline">
        Go to Perinatal FAQ →
      </Link>
    </div>
  </div>
</div>
```

**Time estimate:** 20 mins

---

## File 4: `/app/adhd-faq/page.tsx`

### Current State
- Hero → Diagnosis FAQs → Treatment FAQs → Daily Life FAQs → CTA → Related Pages (currently linking to /adhd, /parents, /faq, /pricing)

### Changes Required

**Change 4.1: Expand "Related Pages" section**

**Location:** In the "Related Pages" section at bottom  
**Current:**
```tsx
<Link href="/adhd" className="text-burgundy-600 underline">
  ADHD Therapy for Adults
</Link>
<span className="text-warm-gray-300">•</span>
<Link href="/parents" className="text-burgundy-600 underline">
  Parents & Caregivers
</Link>
<span className="text-warm-gray-300">•</span>
<Link href="/faq" className="text-burgundy-600 underline">
  General FAQ
</Link>
<span className="text-warm-gray-300">•</span>
<Link href="/pricing" className="text-burgundy-600 underline">
  Pricing & Insurance
</Link>
```

**New:**
```tsx
<div className="space-y-4">
  <div>
    <h3 className="font-bold text-warm-gray-900 mb-2">ADHD-Related Specialties</h3>
    <div className="flex gap-4 flex-wrap">
      <Link href="/adhd" className="text-burgundy-600 underline">
        ADHD Therapy for Adults
      </Link>
      <span className="text-warm-gray-300">•</span>
      <Link href="/career" className="text-burgundy-600 underline">
        Career + Burnout
      </Link>
      <span className="text-warm-gray-300">•</span>
      <Link href="/couples" className="text-burgundy-600 underline">
        Couples Therapy
      </Link>
      <span className="text-warm-gray-300">•</span>
      <Link href="/parents" className="text-burgundy-600 underline">
        Parenting + ADHD
      </Link>
    </div>
  </div>
  <div>
    <h3 className="font-bold text-warm-gray-900 mb-2">General Resources</h3>
    <div className="flex gap-4 flex-wrap">
      <Link href="/faq" className="text-burgundy-600 underline">
        General FAQ
      </Link>
      <span className="text-warm-gray-300">•</span>
      <Link href="/perinatal-faq" className="text-burgundy-600 underline">
        Perinatal & Postpartum FAQ
      </Link>
      <span className="text-warm-gray-300">•</span>
      <Link href="/pricing" className="text-burgundy-600 underline">
        Pricing & Insurance
      </Link>
    </div>
  </div>
</div>
```

**Time estimate:** 15 mins

---

## File 5: `/app/perinatal-faq/page.tsx`

### Current State
- Hero → Pregnancy FAQ → Postpartum FAQ → Loss/Fertility FAQ → Treatment FAQ → Related Pages (currently /perinatal, /parents, /grief, /faq)

### Changes Required

**Change 5.1: Expand "Related Pages" section**

**Location:** Same as ADHD FAQ  
**New structure:**
```tsx
<div className="space-y-4">
  <div>
    <h3 className="font-bold text-warm-gray-900 mb-2">Perinatal & Postpartum Support</h3>
    <div className="flex gap-4 flex-wrap">
      <Link href="/perinatal" className="text-burgundy-600 underline">
        Perinatal Therapy
      </Link>
      <span className="text-warm-gray-300">•</span>
      <Link href="/grief" className="text-burgundy-600 underline">
        Grief Support
      </Link>
      <span className="text-warm-gray-300">•</span>
      <Link href="/parents" className="text-burgundy-600 underline">
        Parents & Caregivers
      </Link>
      <span className="text-warm-gray-300">•</span>
      <Link href="/couples" className="text-burgundy-600 underline">
        Couples Therapy
      </Link>
    </div>
  </div>
  <div>
    <h3 className="font-bold text-warm-gray-900 mb-2">Comorbidity & Context</h3>
    <div className="flex gap-4 flex-wrap">
      <Link href="/adhd-faq" className="text-burgundy-600 underline">
        ADHD FAQ
      </Link>
      <span className="text-warm-gray-300">•</span>
      <Link href="/faq" className="text-burgundy-600 underline">
        General FAQ
      </Link>
      <span className="text-warm-gray-300">•</span>
      <Link href="/anxiety" className="text-burgundy-600 underline">
        Anxiety Support
      </Link>
    </div>
  </div>
</div>
```

**Time estimate:** 15 mins

---

## File 6: Niche Pages (`/app/bipoc/page.tsx`, `/app/lgbtq/page.tsx`, `/app/disability-access/page.tsx`, etc.)

### Current State
- Each likely has: Hero + intro text + CTA section + minimal linking

### Changes Required (Pattern for All)

**Change 6.X: Add "Next Steps" CTA section before footer**

**Location:** After main content, before Footer component  
**Add:**
```tsx
{/* NEW: Next Steps CTA */}
<section className="section-padding bg-warm-gray-50 border-t border-burgundy-100">
  <div className="container-base max-w-3xl mx-auto text-center">
    <h2 className="text-3xl font-serif font-bold text-warm-gray-900 mb-6">
      Ready to explore therapy?
    </h2>
    <p className="text-lg text-warm-gray-600 mb-8">
      A free 15-minute call is how we start. No commitment, no forms—just a conversation about what you need.
    </p>
    <Link
      href="/booking"
      className="inline-block btn btn-primary"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.875rem 1.75rem',
        fontWeight: 600,
        fontSize: '1rem',
        borderRadius: '0.5rem',
        border: 'none',
        cursor: 'pointer',
        textDecoration: 'none',
      }}
    >
      Schedule Your Free Consultation
    </Link>
    <p className="text-sm text-warm-gray-600 mt-6">
      Telehealth • Sliding scale • Confidential
    </p>
  </div>
</section>

{/* NEW: Related Resources */}
<section className="section-padding bg-white">
  <div className="container-base max-w-3xl mx-auto">
    <h3 className="text-2xl font-serif font-bold text-warm-gray-900 mb-6 text-center">
      Explore Our Other Specialties
    </h3>
    <p className="text-warm-gray-600 text-center mb-8">
      Many of our clients work on multiple areas. See what else we offer.
    </p>
    <div className="grid md:grid-cols-2 gap-6">
      <Link href="/adhd" className="p-6 bg-cream-50 rounded-lg hover:shadow transition-shadow">
        <h4 className="font-bold text-warm-gray-900 mb-2">Adult ADHD</h4>
        <p className="text-sm text-warm-gray-600">Late diagnosis, executive function, shame recovery.</p>
      </Link>
      <Link href="/perinatal" className="p-6 bg-cream-50 rounded-lg hover:shadow transition-shadow">
        <h4 className="font-bold text-warm-gray-900 mb-2">Perinatal & Postpartum</h4>
        <p className="text-sm text-warm-gray-600">Pregnancy anxiety, postpartum depression, birth trauma.</p>
      </Link>
      <Link href="/career" className="p-6 bg-cream-50 rounded-lg hover:shadow transition-shadow">
        <h4 className="font-bold text-warm-gray-900 mb-2">Career & Burnout</h4>
        <p className="text-sm text-warm-gray-600">Identity questions, imposter syndrome, transitions.</p>
      </Link>
      <Link href="/couples" className="p-6 bg-cream-50 rounded-lg hover:shadow transition-shadow">
        <h4 className="font-bold text-warm-gray-900 mb-2">Couples Therapy</h4>
        <p className="text-sm text-warm-gray-600">Communication, conflict, reconnection.</p>
      </Link>
      {/* Add more as needed */}
    </div>
  </div>
</section>
```

**Files affected:**
- `/app/bipoc/page.tsx`
- `/app/lgbtq/page.tsx`
- `/app/disability-access/page.tsx`
- `/app/financial-access/page.tsx`
- `/app/men/page.tsx`
- `/app/neurodivergent/page.tsx`

**Time estimate:** 15 mins × 6 = 90 mins

---

## File 7: `/components/Footer.tsx` (or equivalent)

### Current State
- Footer likely has: Links, contact, copyright, minimal nav

### Changes Required

**Change 7.1: Add "Specialties" column to footer nav**

**Location:** Main footer links section  
**Add:**
```tsx
{/* NEW: Specialties Column */}
<div>
  <h4 className="font-bold text-warm-gray-900 mb-4">Specialties</h4>
  <ul className="space-y-2 text-sm">
    <li>
      <Link href="/adhd" className="text-warm-gray-600 hover:text-warm-gray-900">
        Adult ADHD
      </Link>
    </li>
    <li>
      <Link href="/perinatal" className="text-warm-gray-600 hover:text-warm-gray-900">
        Perinatal & Postpartum
      </Link>
    </li>
    <li>
      <Link href="/career" className="text-warm-gray-600 hover:text-warm-gray-900">
        Career & Burnout
      </Link>
    </li>
    <li>
      <Link href="/couples" className="text-warm-gray-600 hover:text-warm-gray-900">
        Couples Therapy
      </Link>
    </li>
    <li>
      <Link href="/grief" className="text-warm-gray-600 hover:text-warm-gray-900">
        Grief Support
      </Link>
    </li>
    <li>
      <Link href="/parents" className="text-warm-gray-600 hover:text-warm-gray-900">
        Parents & Caregivers
      </Link>
    </li>
    <li>
      <Link href="/bipoc" className="text-warm-gray-600 hover:text-warm-gray-900">
        BIPOC Affirming
      </Link>
    </li>
    <li>
      <Link href="/lgbtq" className="text-warm-gray-600 hover:text-warm-gray-900">
        LGBTQ+ Affirming
      </Link>
    </li>
    <li>
      <Link href="/disability-access" className="text-warm-gray-600 hover:text-warm-gray-900">
        Disability Access
      </Link>
    </li>
    <li>
      <Link href="/financial-access" className="text-warm-gray-600 hover:text-warm-gray-900">
        Financial Access
      </Link>
    </li>
  </ul>
</div>
```

**Time estimate:** 20 mins

---

## File 8: `/app/booking/page.tsx`

### Current State
- Hero → Form → Privacy → Objection Handler → Info → FAQ → Footer
- No pre-context links

### Changes Required

**Change 8.1: Add "Not Sure Which Specialty?" section before form**

**Location:** After hero, before BookingFormWrapper  
**Add:**
```tsx
{/* NEW: Specialty Discovery */}
<section className="section-padding bg-burgundy-50 border-b border-burgundy-200">
  <div className="container-base max-w-3xl mx-auto">
    <h2 className="text-2xl font-serif font-bold text-warm-gray-900 mb-4">
      Not sure which specialty fits?
    </h2>
    <p className="text-warm-gray-600 mb-6">
      No problem—the free consultation is partly about figuring that out. But here's a quick overview:
    </p>
    <div className="grid md:grid-cols-2 gap-6 mb-8">
      <Link href="/adhd" className="p-4 bg-white rounded-lg hover:shadow transition-shadow">
        <h3 className="font-bold text-warm-gray-900 mb-2">Adult ADHD</h3>
        <p className="text-sm text-warm-gray-600">Late diagnosis, executive dysfunction, shame recovery.</p>
      </Link>
      <Link href="/perinatal" className="p-4 bg-white rounded-lg hover:shadow transition-shadow">
        <h3 className="font-bold text-warm-gray-900 mb-2">Perinatal & Postpartum</h3>
        <p className="text-sm text-warm-gray-600">Pregnancy anxiety, postpartum mood, birth trauma.</p>
      </Link>
      <Link href="/career" className="p-4 bg-white rounded-lg hover:shadow transition-shadow">
        <h3 className="font-bold text-warm-gray-900 mb-2">Career & Burnout</h3>
        <p className="text-sm text-warm-gray-600">Burnout, imposter syndrome, identity questions.</p>
      </Link>
      <Link href="/couples" className="p-4 bg-white rounded-lg hover:shadow transition-shadow">
        <h3 className="font-bold text-warm-gray-900 mb-2">Couples Therapy</h3>
        <p className="text-sm text-warm-gray-600">Communication, conflict, reconnection.</p>
      </Link>
      <Link href="/grief" className="p-4 bg-white rounded-lg hover:shadow transition-shadow">
        <h3 className="font-bold text-warm-gray-900 mb-2">Grief & Loss</h3>
        <p className="text-sm text-warm-gray-600">Pregnancy loss, bereavement, identity grief.</p>
      </Link>
      <Link href="/parents" className="p-4 bg-white rounded-lg hover:shadow transition-shadow">
        <h3 className="font-bold text-warm-gray-900 mb-2">Parents & Caregivers</h3>
        <p className="text-sm text-warm-gray-600">Parenting overwhelm, identity as parent.</p>
      </Link>
    </div>
    <p className="text-sm text-warm-gray-600">
      Or explore our <Link href="/faq" className="underline">general FAQ</Link> for more questions.
    </p>
  </div>
</section>
```

**Time estimate:** 25 mins

---

## Summary of Implementation

| File | Changes | Time |
|------|---------|------|
| `/app/adhd/page.tsx` | Add comorbidity hints + related content section | 30m |
| `/app/career/page.tsx` | Add ADHD link + life stage callout + related content | 45m |
| `/app/faq/page.tsx` | Add specialty FAQ navigation section | 20m |
| `/app/adhd-faq/page.tsx` | Expand related pages section | 15m |
| `/app/perinatal-faq/page.tsx` | Expand related pages section | 15m |
| Niche pages (×6) | Add next steps CTA + related resources | 90m |
| `/components/Footer.tsx` | Add specialties column | 20m |
| `/app/booking/page.tsx` | Add specialty discovery section | 25m |
| **TOTAL** | | **260 mins (4-5 hours)** |

---

## Testing Checklist

### Before Deployment

- [ ] Run all pages locally; verify links work (no 404s)
- [ ] Check anchor text is descriptive (not "click here")
- [ ] Verify no duplicate links on same page (e.g., /adhd doesn't appear twice)
- [ ] Test responsive design: mobile, tablet, desktop
- [ ] Analytics: capture baseline data for:
  - Avg session duration (by page)
  - Bounce rate (by source)
  - Pages/session
  - Booking conversion rate

### After Deployment (Week 1)

- [ ] Monitor Google Search Console for crawl errors
- [ ] Verify all pages are indexed (site: search in Google)
- [ ] Check Analytics: any spikes in 404 errors?
- [ ] Test user journey: can you navigate from /adhd → /career → /booking?
- [ ] A/B split (if possible): pre/post comparison for 2-3 pages

### Ongoing (Monthly)

- [ ] GSC: monitor keyword rank changes (expect +2-3 position improvement on average)
- [ ] Analytics: compare session duration, pages/session to baseline
- [ ] Booking funnel: track which specialties drive most bookings
- [ ] Update broken internal links if any pages are retired

---

## Rollout Strategy

### Option A: Big Bang (Recommended)
Deploy all changes at once; easier to correlate analytics.
- **When:** Tuesday-Wednesday (avoid weekends for troubleshooting)
- **Notify:** Rainuka that changes are live; watch for booking funnel shifts

### Option B: Phased
Deploy in phases; safer but harder to measure impact.
- **Phase 1 (Day 1):** FAQ pages + footer (low risk)
- **Phase 2 (Day 3):** ADHD, Career, Booking pages (medium risk)
- **Phase 3 (Day 5):** Niche pages (lowest traffic, lowest risk)

---

## Success Metrics (30-Day Target)

| Metric | Current | Target | Change |
|--------|---------|--------|--------|
| Avg session duration | ? min | +20% | More exploration |
| Pages/session | ? | +1.5 | Users navigate between specialties |
| Bounce rate | ? % | -5-10% | Content relevance improves |
| Booking conversion | ? % | +5-10% | Secondary specialty exposure |
| GSC rank (specialty pages) | Position 20-50 | Position 12-40 | Authority boost |
| Internal links per page | 0-2 | 4-6 | Strategic interconnection |

---

## Git Commit Message Template

```
feat: Add strategic internal linking for SEO + user navigation

Changes:
- ADHD, Career pages: Add comorbidity hints + related content sections
- FAQ pages: Cross-reference specialty FAQs
- Niche pages: Add booking CTA + specialty grid
- Footer: Add specialties navigation column
- Booking: Add specialty discovery section

Impact:
- Improves topic clustering for Google
- Increases pages/session by distributing link juice
- Boosts conversion by exposing secondary specialties
- Better user experience: clear navigation between related therapies

Metrics to track:
- Session duration, pages/session (Analytics)
- Keyword rank for comorbidity terms (GSC)
- Booking rate by specialty source (Conversion funnel)

Testing:
- All links verified (no 404s)
- Responsive design tested (mobile, tablet, desktop)
- Baseline metrics captured pre-launch
```

---

## Questions for Review

Before deploying, confirm:

1. **Anchor text:** Are the link texts descriptive and SEO-friendly?
   - ✅ "ADHD therapy for late diagnosis and burnout"
   - ❌ "click here" or single-word links

2. **Overflow:** Do pages feel cluttered with too many internal links?
   - Target: 4-6 internal links per page, max 5 per section

3. **Relevance:** Does each link make sense to the user landing there?
   - E.g., ADHD page → Career link should be justified by copy

4. **Analytics setup:** Are you ready to track link clicks (UTM params or event tracking)?
   - Optional but recommended for measuring impact

---

## Next Steps

1. ✅ Audit complete (done)
2. 📋 Review this implementation plan (you are here)
3. 🔗 Code changes (4-5 hours work)
4. 🧪 Testing & QA (1-2 hours)
5. 🚀 Deploy
6. 📊 Monitor metrics for 30 days
7. 📈 Report on ROI + adjust if needed

---

**Questions? Next steps?** Review the audit findings and start with Phase 1 changes (FAQ + Footer + Niche Pages).
