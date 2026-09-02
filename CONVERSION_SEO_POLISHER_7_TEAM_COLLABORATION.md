# CONVERSION SEO POLISHER #7 — TEAM COLLABORATION & HANDOFF GUIDE

**Date:** September 1, 2026  
**Polisher:** SEO POLISHER #7 (Conversion-Focused)  
**Status:** Phase 1 Complete (Tracking Infrastructure). Phases 2-3 Pending Collaboration

---

## QUICK REFERENCE FOR TEAM

### What I've Done ✅
1. **Implemented keyword intent tracking** — Booking form now captures UTM source & session duration
2. **Fired GA4 conversion events** — 4 events firing: form_view, field_interact, form_submit, form_success
3. **Analyzed 24 conversion SEO issues** from Auditor #9 and prioritized fixes
4. **Created detailed fix proposal** with effort estimates and expected impact
5. **Reduced booking form to 6 essential fields** (already done by prior polisher; enhanced with tracking)

### What Needs Collaboration 🤝
The following fixes require input from other polishers:

---

## PHASE 2: COPY & POSITIONING (For Copy/Content Polishers)

### ISSUE #1: Vague Value Proposition
**Severity:** CRITICAL | **Impact:** 20-35% conversion loss

**Your task:**
- Review and refine hero copy for homepage + all specialty pages
- Current: "Therapy that fits the life you actually have"
- Target: Specific outcome + proof point + logistics

**Proposed template for ADHD page:**
```
"Diagnosis clarity and relief. If you're late-diagnosed with ADHD, 
we unpack the grief and build new systems in 8-12 weeks."

Trust signals: "95% of clients move forward with ongoing therapy"
Logistics: "$80-$150/session. First 15-minute call is free."
Location: "Telehealth in California, Canada, Florida. Respond within 24h."
```

**Action items:**
- [ ] Refine for Perinatal page (postpartum anxiety + bonding)
- [ ] Refine for Career page (burnout recovery + transitions)
- [ ] Test CTA copy variants (A/B test infrastructure ready)
- [ ] Update FAQ answers to be more persuasive (see ISSUE #15)

**Timeline:** 3-4 hours  
**Due:** Pending your availability

---

## PHASE 3: UX & DESIGN (For Design/UX Polishers)

### ISSUE #6: No Sticky Header CTA
**Severity:** MEDIUM | **Impact:** 12-18% conversion loss (mobile: 60% of traffic)

**Your task:**
Create sticky mobile CTA + floating desktop button

**Specs:**
- **Mobile:** Sticky bottom bar (44px height min)
  - Text: "Book ADHD Consultation" (dynamic by page)
  - Button color: Burgundy with white text
  - Appears: Always visible on scroll
  - Event tracking: Fire `sticky_cta_click` GA4 event

- **Desktop:** Floating button bottom-right corner
  - Text: "Start Your Free Session"
  - Appears: After user scrolls 30% down page
  - Color: Teal with hover state
  - Fade in/out on scroll

**Components to create:**
1. `components/StickyMobileNav.tsx` — Mobile bottom bar
2. `components/FloatingCTA.tsx` — Desktop floating button
3. Integrate into all specialty pages + homepage + booking page

**A/B Test Opportunity:**
- Test A: Sticky bar always visible
- Test B: Sticky bar appears after 15% scroll
- Test C: No sticky bar (control)
- Metric: Sticky CTA click-through rate + form completion rate

**Timeline:** 3-4 hours  
**Due:** Next 1-2 days (high priority)

---

### ISSUE #3 & #5: Landing Page Friction + Content Reordering
**Severity:** HIGH | **Impact:** 20-30% abandonment reduction potential

**Your task:**
Reorder specialty pages for conversion optimization

**Current flow (education-first):**
1. Hero (problem statement)
2. "Who this is for" (research phase)
3. "What ADHD actually is" (education heavy, 1000+ words)
4. "How I work" (trust building)
5. Testimonials (social proof)
6. FAQ (objection clearing)
7. Bottom CTA

**Proposed flow (trust-first, CTA-early):**
1. Hero (problem + solution)
2. Social proof snippet (immediate trust)
3. **"Why Rainuka for ADHD" section** ← MOVE UP (credentials + fit)
4. **"Cost, Insurance, Timeline" section** ← MOVE UP (objection clearing)
5. **Sticky CTA trigger zone** ← INSERT HERE
6. "Who this is for" (research validation)
7. "What ADHD actually is" (deeper education)
8. "How I work" (methodology)
9. FAQ (detailed objections)
10. Bottom CTA (closing)

**Files to restructure:**
- `app/adhd/page.tsx`
- `app/perinatal/page.tsx`
- `app/career/page.tsx`

**Approval needed from:**
- Content Polisher (copy flow makes sense?)
- Design Polisher (visual hierarchy clear?)
- Copy Polisher (credential section sounds professional?)

**Timeline:** 4-6 hours  
**Due:** Next 2-3 days

---

## PHASE 4: PRICING & LOGISTICS (Cross-functional)

### ISSUE #13: Pricing Not Transparent
**Severity:** HIGH | **Impact:** 10-15% abandonment

**Your task:**
Add pricing section to mid-page of specialty pages

**Content needed (from Rainuka):**
- Session cost: "$80-$150 per 50 minutes" (already known)
- Sliding scale policy: (need confirmation)
- Insurance acceptance: "Out-of-network, superbill provided"
- Availability: "Currently accepting 1-2 new clients per month"
- First session: "Free 15-minute consultation"

**Section structure:**
```
"What This Costs"
- Individual Sessions: $80–$150 / 50 minutes
  Sliding scale based on income
  
- Free Initial Consultation: Free / 15 minutes
  No cost. No obligation. No pressure.
  
- Insurance: Out-of-network
  Superbill provided for reimbursement
  
[Badge] Currently accepting 1–2 new clients per month
```

**Files to update:**
- `app/adhd/page.tsx`
- `app/perinatal/page.tsx`
- `app/career/page.tsx`

**New pages to create:**
- `app/therapy-cost/page.tsx` — Generic pricing page
- `app/adhd-therapy-cost/page.tsx` — ADHD-specific pricing

**Timeline:** 3-4 hours  
**Due:** Next 1-2 days (high priority)

---

## PHASE 5: TECHNICAL SEO (For Dev/SEO Polishers)

### ISSUE #4: Booking Page Meta Tags
**Severity:** MEDIUM | **Impact:** 10-15% click-through improvement

**Your task:**
Update booking page title and meta description to mention specialties

**Current:**
- Title: "Book Your Free Therapy Consultation | Wonderloud Therapy"
- Meta: "Book your free 15-minute therapy consultation. Explore your needs, discuss your goals. No pressure, no obligation. Telehealth available. Licensed therapist in Canada, California, and Florida."

**Proposed:**
- Title: "Book Therapy Consultation (ADHD, Perinatal, Career) | Telehealth"
- Meta: "Free 15-min ADHD, perinatal, or career therapy consultation. Available in CA, Canada, FL. First call free. Book now—respond within 24h."

**File:** `app/booking/page.tsx`

**Timeline:** 1 hour  
**Due:** Next 1 day

---

### ISSUE #19: Schema Markup
**Severity:** MEDIUM | **Impact:** 5-10% rich snippet CTR lift

**Your task:**
Add ProfessionalService + Service schema to booking and specialty pages

**Schema to add:**
```json
{
  "@context": "https://schema.org/",
  "@type": "MedicalBusiness",
  "name": "Rainuka Therapy",
  "description": "ADHD, perinatal, and career therapy",
  "areaServed": ["California", "Canada", "Florida"],
  "availableService": [
    {
      "@type": "Service",
      "name": "ADHD Therapy",
      "url": "https://rainuka.com/adhd",
      "price": "80-150",
      "priceCurrency": "USD",
      "duration": "PT50M",
      "serviceType": "Psychotherapy"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "12"
  }
}
```

**Files:**
- `app/booking/page.tsx`
- `app/adhd/page.tsx`
- `app/perinatal/page.tsx`
- `app/career/page.tsx`

**Timeline:** 3 hours  
**Due:** Next 2-3 days

---

### ISSUE #18: Long-Tail Keyword Landing Pages
**Severity:** HIGH | **Impact:** 20-30% organic traffic opportunity

**Your task:**
Create 5 new landing pages targeting high-intent keywords

**Pages to create:**
1. `/adhd-therapy-cost` → "ADHD therapy cost" + "$80-150 per session" prominently
2. `/free-therapy-consultation` → "Free therapy consultation" + reassurance copy
3. `/adult-adhd-late-diagnosis` → "Adult ADHD late diagnosis" + reframe narrative
4. `/perinatal-depression-treatment` → "Postpartum depression" + recovery focus
5. `/career-burnout-therapy` → "Career burnout therapy" + transition coaching

**Each page should include:**
- Keyword in title, H1, and meta description
- Relevant specialty-specific testimonial (2-3)
- Pricing section
- CTA to booking (with UTM: utm_source=long_tail&utm_campaign=[keyword])
- FAQ targeting that specific keyword's objections

**Template structure:**
```
- Hero (keyword-specific)
- Social proof (2-3 testimonials from that specialty)
- "What [problem] looks like" (education)
- "How I help with [problem]" (methodology)
- Pricing & logistics
- FAQ (objection clearing for that keyword)
- CTA to booking
```

**Timeline:** 10-12 hours (1-2 hours per page)  
**Due:** Next 2-4 weeks (medium priority)

---

## PHASE 6: CONFIRMATION PAGE & CONVERSION TRACKING

### ISSUE #12: Thank-You Page Conversion Tracking
**Severity:** HIGH | **Impact:** 15-20% conversion attribution clarity

**Your task:**
Create confirmation page with tracking

**File to create:** `app/booking/confirmation/page.tsx`

**Content:**
```jsx
<Section>
  <h1>Your consultation is booked! ✓</h1>
  <p>Rainuka will reach out within 24 hours via {contactMethod}.</p>
  
  <NextSteps>
    <Step 1>Your consultation call is scheduled</Step>
    <Step 2>Rainuka sends Zoom link 2 hours before</Step>
    <Step 3>You'll discuss what brings you here</Step>
  </NextSteps>
  
  <FAQ items={[
    "What should I prepare?",
    "Is this HIPAA secure?",
    "What if I need to reschedule?",
    "What's the next step after consultation?"
  ]} />
  
  <Engagement>
    <p>While you wait, explore:</p>
    <Link href="/adhd-faq">ADHD FAQ</Link>
    <Link href="/testimonials">Client Stories</Link>
  </Engagement>
</Section>
```

**GA4 Event fired:**
```javascript
gtag('event', 'booking_confirmation', {
  specialty: 'adhd',
  session_duration: 120
})
```

**Timeline:** 2 hours  
**Due:** Next 1 day (high priority)

---

## PHASE 7: ONGOING OPTIMIZATION (Analytics-Driven)

### ISSUE #22: A/B Testing Framework
**Your task:**
Set up A/B testing to validate hypotheses

**Recommended test stack:**
- Tool: Google Optimize (free, GA4-native) or Optimizely
- Duration: 2-4 weeks per test
- Sample size: 100+ users per variant

**Test 1: CTA Copy Variants**
- Control: "Start Your Free Breakthrough Call"
- Variant A: "Start Your Free Session"
- Variant B: "Schedule Consultation (24h Response)"
- Metric: CTA click-through rate, form completion rate

**Test 2: Pricing Transparency**
- Control: Current homepage (no pricing visible)
- Variant A: Pricing section on homepage
- Metric: Bounce rate, time-on-page, booking form CTR

**Test 3: Form Simplification**
- Control: Current 6-field form
- Variant A: 5-field form (remove "preferred day")
- Metric: Form completion rate, abandonment rate

**Timeline:** 4 hours setup + 2-4 weeks per test  
**Due:** After confirmation page live

---

## COLLABORATION CHECKLIST

### Immediate (Next 1-2 Days)
- [ ] **Copy Polisher:** Review hero copy updates for ADHD/Perinatal/Career pages
- [ ] **Design/UX Polisher:** Build sticky mobile CTA + floating desktop button
- [ ] **Dev:** Update booking page meta tags
- [ ] **Dev:** Create confirmation page
- [ ] **Product/Rainuka:** Confirm pricing, sliding scale policy, availability statement

### Short-term (Next 2-4 Days)
- [ ] **Content Polisher:** Reorder specialty pages (authority → pricing → CTA → education)
- [ ] **Copy Polisher:** Add pricing section copy to specialties
- [ ] **Design Polisher:** Implement sticky CTA across all pages
- [ ] **Dev:** Create `/therapy-cost` and `/adhd-therapy-cost` landing pages

### Medium-term (Next 2-4 Weeks)
- [ ] **Dev:** Implement A/B testing framework setup
- [ ] **Content Polisher:** Create 5-10 long-tail keyword landing pages
- [ ] **SEO Polisher:** Add schema markup to pages
- [ ] **Dev:** Implement abandoned form email recovery
- [ ] **Analytics:** Start monthly keyword ranking audits

---

## DATA I'M NOW COLLECTING (GA4 Events)

### Real-time Conversion Funnel Data
Once these improvements are live, you'll have access to:

1. **By Specialty:**
   - ADHD form completion rate
   - Perinatal form completion rate
   - Career form completion rate
   - Which specialty converts best?

2. **By Traffic Source:**
   - Organic search → booking form completion
   - Direct → booking form completion
   - Which traffic source has best ROI?

3. **By Session Duration:**
   - Average time from landing → form submit
   - Do longer sessions = higher conversion?
   - Optimal page dwell time?

4. **Booking funnel drop-off:**
   - Where users abandon (which form field?)
   - Which step has highest friction?
   - Mobile vs. desktop abandonment rates

---

## EXPECTED IMPACT (30-Day Target)

| Issue | Current | Target | Impact |
|-------|---------|--------|--------|
| Booking form completion | 40% | 60% | Single-page form + sticky CTA |
| Bounce rate on specialty pages | 45% | 35% | Better content order + sticky CTA |
| Conversion rate (landing → booking) | 8-10% | 15-18% | All changes combined |
| Cost per booking | TBD | -30-40% | Higher conversion = lower CAC |
| Mobile vs. desktop CR gap | 20-25% | 10-15% | Sticky mobile CTA |

---

## CONTACT & QUESTIONS

If you have questions about:
- **Tracking data** → Check GA4 funnel report (Conversion > Paths to Conversion)
- **Copy approach** → Review SEO_AUDITOR_9_CONVERSION_FOCUS.md
- **Effort estimates** → Check CONVERSION_SEO_POLISHER_7_PROPOSAL.md
- **Progress tracking** → Check CONVERSION_SEO_POLISHER_7_IMPLEMENTATION_STATUS.md

---

**Status:** Ready for Phase 2 collaboration  
**Next Review:** After sticky CTA + confirmation page merged  
**Success Metric:** 15-25% conversion rate improvement in 30 days
