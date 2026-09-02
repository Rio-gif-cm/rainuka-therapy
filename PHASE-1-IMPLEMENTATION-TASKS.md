# PHASE 1 IMPLEMENTATION TASKS (Days 1-30)
**SEO Polisher #6: Foundation & Directory Listing Sprint**

**Deadline:** September 30, 2026  
**Owner:** Polisher #6 (Competitive Positioning)  
**Status:** In Progress

---

## WEEK 1: DIRECTORY & AUTHORITY FOUNDATION

### Task 1.1: TherapyDen Profile (Free, High Authority DA=68)
- [ ] Create TherapyDen account: https://therapyden.com/therapists/sign-up
- [ ] Fill profile with:
  - Specialties: Adult ADHD, Perinatal Mental Health, Career Counseling, Trauma
  - Bio: Focus on niche angle (ADHD + motherhood + career)
  - License verification: California LCSW #123456 (verify actual license #)
  - Photo: Professional headshot
  - Rates: $150/session, sliding scale $80-120
  - Telehealth: Yes, 28+ states (verify count)
  - Insurance: List accepted insurance
- [ ] Link to website once live
- [ ] Verify profile shows in search results

### Task 1.2: GoodTherapy Profile ($30/month)
- [ ] Create GoodTherapy account: https://www.goodtherapy.org/
- [ ] Fill profile (same content as TherapyDen)
- [ ] Set up recurring $30/month billing
- [ ] Add GoodTherapy widget to website (if available)

### Task 1.3: Zencare Profile ($59/month)
- [ ] Create Zencare account: https://zencare.co/therapists/sign-up
- [ ] Fill profile (same content structure)
- [ ] Set up recurring $59/month billing
- [ ] Zencare has excellent community; emphasize niche angle

### Task 1.4: Psychology Today Free Profile
- [ ] Claim or create Psychology Today profile: https://www.psychologytoday.com/us
- [ ] Fill profile (free version available)
- [ ] Verify license
- [ ] Note: Psychology Today will likely rank higher than Rainuka's site for generic keywords (OK; we're not competing there)

### Task 1.5: Local Health Directories (5 total, free)
- [ ] HealthGrades: https://www.healthgrades.com/
  - Profile: LCSW credentials, specialties, reviews
- [ ] Zocdoc: https://www.zocdoc.com/
  - Note: Medical/therapy hybrid; may require verification
- [ ] Ratemds: https://www.ratemds.com/ (therapist section)
  - Lower traffic but fast listing
- [ ] Yelp: https://biz.yelp.com/
  - Claim business profile
- [ ] YellowPages: https://www.yellowpages.com/
  - Verify business info

**Action Item:** Create spreadsheet tracking all 10 directory URLs, login credentials, completion status

---

## WEEK 2: GOOGLE BUSINESS PROFILE OPTIMIZATION

### Task 2.1: Google Business Profile Overhaul
**Goal:** Make GBP the hub for local discoverability

#### Section 1: Business Info
- [ ] Business name: "Rainuka Oberoi - Licensed Therapist"
- [ ] Address: Clinic address (or "Telehealth only" + service area)
- [ ] Phone: Direct phone number
- [ ] Website: https://rainuka-therapy.com
- [ ] Hours: Clear availability (online therapy hours)
- [ ] Service areas: Bay Area + all served states

#### Section 2: Specialties & Services
- [ ] Add ALL specialties:
  - Adult ADHD diagnosis & therapy
  - Perinatal mental health (pregnancy + postpartum)
  - Career counseling & transitions
  - Trauma-informed therapy
  - Couples counseling (if offered)
  - Grief counseling
- [ ] Service offerings:
  - Individual therapy
  - Couples therapy (if offered)
  - Telehealth available
  - Sliding scale available

#### Section 3: Business Photos (20+ minimum)
- [ ] 5 professional headshots (different angles, warm/approachable)
- [ ] 5 office/workspace photos (if in-person space)
- [ ] 5 lifestyle photos (coffee shop, nature, reflecting warmth)
- [ ] 3 team/credentials photos (degrees, certifications)
- [ ] 2 community/event photos (local involvement)
- [ ] Upload with descriptive titles & alt text

#### Section 4: Business Description
- [ ] Main description (200-300 words, keyword-rich):
  - Focus on niche: ADHD + perinatal + career
  - Include: "LCSW with expertise in..."
  - Highlight unique angle

#### Task 2.2: Google Business Posts Strategy
**Goal:** Post 1x per week for 52 weeks (year-long calendar)

**Post Calendar (Sample):**
- Week 1: "ADHD Awareness: Signs You Might Be Undiagnosed" (high-traffic post)
- Week 2: "Postpartum Anxiety: It's More Common Than You Think"
- Week 3: "Career Burnout + Mental Health: When To Seek Support"
- Week 4: "5 Myths About Perinatal Mental Health"
- [Continue pattern rotating through ADHD, perinatal, career, therapy modalities]

**Action:** Create post template + calendar in Google Docs. Polisher #6 writes monthly batch of 4 posts; scheduled auto-post via GBP.

#### Task 2.3: Google Business Q&A
- [ ] Monitor Q&A section daily
- [ ] Answer all questions within 24 hours
- [ ] Proactively add FAQs (e.g., "What insurance do you accept?" and answer it first)
- [ ] Use keywords in answers (e.g., "ADHD therapy," "perinatal anxiety")

#### Task 2.4: Google Business Reviews Strategy
- [ ] Aim for 10-20 new reviews in 90 days
- [ ] Send "leave review" link to current clients (via email or text)
- [ ] Respond to all reviews (positive and negative) within 48 hours
- [ ] Use responses to reinforce niche positioning

---

## WEEK 3: METADATA & BRAND CONSISTENCY FIX

### Task 3.1: Audit Current Metadata
**Action:** Run audit of all pages to identify "Wonderloud Therapy" vs. "Rainuka Therapy" inconsistencies

```bash
cd C:/Users/Roanm/rainuka-therapy
grep -r "Wonderloud" app/ --include="*.tsx" --include="*.ts"
```

**Expected output:** Files with inconsistent branding

### Task 3.2: Standardize on "Rainuka Therapy"
**Decision:** Use "Rainuka Therapy" everywhere (not "Wonderloud")

**Pages to update:**
- [ ] `app/page.tsx` (homepage metadata)
- [ ] `app/about/page.tsx` (about page)
- [ ] `app/adhd/page.tsx` (ADHD specialty)
- [ ] `app/perinatal/page.tsx` (perinatal specialty)
- [ ] `app/couples/page.tsx` (couples specialty)
- [ ] `app/grief/page.tsx` (grief specialty)
- [ ] `app/career/page.tsx` (career specialty, if exists)
- [ ] `app/guides/page.tsx` (guides)
- [ ] `app/faq/page.tsx` (FAQ)

**Pattern to update:**
```
OLD: "About Rainuka Oberoi | Licensed Therapist (Wonderloud Therapy)"
NEW: "About Rainuka Oberoi | Licensed Therapist | ADHD, Perinatal, Career"
```

### Task 3.3: Update H1 Tags (Keyword Optimization)
**Goal:** Make each H1 keyword-rich and descriptive

**Current → Proposed:**

| Page | Current H1 | Proposed H1 | Keywords |
|------|-----------|-------------|----------|
| ADHD | (TBD - audit) | "ADHD Therapy for Women: Diagnosis, Treatment & Recovery" | ADHD therapy, women, diagnosis |
| Perinatal | (TBD) | "Perinatal Mental Health Therapy: Pregnancy, Postpartum & Beyond" | Perinatal, postpartum, pregnancy, mental health |
| Career | (TBD) | "Career Counseling for Burnout & Professional Transitions" | Career counseling, burnout, transitions |
| Couples | (TBD) | "Couples Therapy: Rebuild Trust, Improve Communication, Strengthen Bonds" | Couples therapy, trust, communication |
| Grief | (TBD) | "Grief Counseling: Navigating Loss, Bereavement & Complex Grief" | Grief counseling, bereavement, loss |

**Action:** Run audit of all H1 tags, prioritize rewrites.

### Task 3.4: Meta Description Audit & Updates
**Formula:** [Benefit] + [Primary keyword] + [CTA] | [Brand]

**Example:**
- OLD: "About Rainuka Oberoi's therapy practice"
- NEW: "ADHD, perinatal & career therapy for high-achieving women | Rainuka Therapy | Free consultation"

**Target:** 150-160 characters, keyword-rich, CTA-oriented

---

## WEEK 4: TECHNICAL SCHEMA & VERIFICATION

### Task 4.1: Schema Implementation Verification

**Already Implemented (from Polisher #4):**
- [ ] AggregateRating schema (home + about pages)
- [ ] Review schemas (testimonials)

**Need to Add/Verify:**
- [ ] **Person Schema with License Number:**
  ```json
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rainuka Oberoi",
    "jobTitle": "Licensed Clinical Social Worker",
    "url": "https://rainuka-therapy.com/about",
    "knowsAbout": ["ADHD", "Perinatal Mental Health", "Career Counseling", "Trauma"],
    "sameAs": ["https://therapyden.com/...", "https://psychologytoday.com/..."],
    "credentialCategory": "License",
    "credentialIdentifier": "California LCSW #XXXXX" // Verify actual license #
  }
  ```

- [ ] **LocalBusiness Schema (on home page):**
  ```json
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://rainuka-therapy.com",
    "name": "Rainuka Therapy",
    "description": "ADHD, perinatal & career therapy specialist",
    "url": "https://rainuka-therapy.com",
    "telephone": "[phone]",
    "areaServed": "CA, [states]",
    "priceRange": "$150/session"
  }
  ```

- [ ] **FAQ Schema** (verify existing on /faq page)
  - Test in Google Rich Results: https://search.google.com/test/rich-results

### Task 4.2: Google Search Console Verification
- [ ] Verify site ownership in GSC
- [ ] Submit XML sitemap (if not already done)
- [ ] Check for crawl errors
- [ ] Verify no noindex tags blocking important pages

### Task 4.3: Verify Current Content Accuracy
**From Auditor #4 Report:**
- [ ] Replace `[Provincial Regulatory Body]` in credentials section (actual body: BC College of Social Workers, etc.)
- [ ] Verify "28 states" telehealth count (update if inaccurate)
- [ ] Verify pricing: "$150/session, sliding scale $80-120" (is this current?)
- [ ] Verify Google Business Profile hours match actual availability

**Action:** Create checklist of all facts to verify with Rainuka (credentials, pricing, availability)

---

## PHASE 1 SUMMARY & NEXT STEPS

### By September 30, Expected Outcomes:
- ✅ Listed on 10+ directories (TherapyDen, GoodTherapy, Zencare, PT, HealthGrades, Zocdoc, Ratemds, Yelp, YellowPages, + 1 more)
- ✅ Google Business Profile fully optimized (20+ photos, 4 posts scheduled)
- ✅ All metadata standardized to "Rainuka Therapy"
- ✅ All H1 tags keyword-optimized
- ✅ Schema markup verified in Google Rich Results
- ✅ All credentials/pricing/facts verified

### Hand-Off to Phase 2 (October 1):
- **Content Build:** Start writing 12 blog posts + 3 pillar pages
- **Internal Linking:** Set up sitemap + internal link strategy
- **Engagement:** Continue GBP posts (1x/week ongoing)

---

## BACKLOG & QUESTIONS FOR BRAND LEAD (POLISHER #9)

**Before Moving to Phase 2, Need Answers:**

1. **Positioning:** Approve "ADHD + Perinatal + Career for high-achieving women" as primary niche?
2. **Directory Priority:** Which 3 directories should be priority 1? (Suggest: TherapyDen, GoodTherapy, Psychology Today)
3. **Pricing Verification:** Confirm current rates ($150/session, sliding scale $80-120)?
4. **Telehealth States:** How many states currently served? (Audit says "28 states")
5. **License Info:** Confirm California LCSW license number for schema markup
6. **Content Voice:** Should blog posts be personal (storytelling) or clinical (professional)?
7. **Guest Post Targets:** Which publications should we pitch first? (Suggest: ADDitude Magazine, Motherly, Psychology Today Blogs)

---

## COMMIT READY

**Status:** Phase 1 tasks documented and ready to execute.  
**Owner:** Polisher #6 (execute), Brand Lead (Polisher #9) (approve decisions)  
**Timeline:** 30 days to completion (Sept 1-30, 2026)

---
