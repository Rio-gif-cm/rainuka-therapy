# SEO POLISHER #1 (Keywords & Content) — Draft Proposal
**Role:** Keywords & Content Optimization Lead  
**Date:** September 1, 2026  
**Status:** 🟡 DRAFT — Awaiting Team Feedback (Design Lead, Copy Lead #3, Other Polishers)  

---

## EXECUTIVE SUMMARY

**Audit Input:** SEO AUDITOR #4 (Content Quality) + SEO AUDITOR #8 (Competitive Analysis)  
**Key Findings:**
- ✅ Exceptional content depth (2000-4500+ words per page) and authentic voice
- ❌ **32+ content quality issues** (outdated metadata, topic coverage gaps, LSI keywords missing, readability)
- ❌ **20+ competitive gaps** (zero backlinks, zero blog content, zero local landing pages, AI search invisibility)
- ❌ **Brand inconsistency** ("Wonderloud" vs "Rainuka" in metadata)
- ❌ **Zero keyword rankings** for high-intent specialty searches

**Proposed Focus (This Session):**
1. **Critical Fixes (Week 1):** Brand standardization, credentials placeholders, metadata freshness
2. **Content Depth Additions (Week 2-3):** ADHD in women, pregnancy vs. postpartum comparison, career grief, LSI keywords
3. **Internal Linking & CTA Strategy (Week 3-4):** Cross-service connections, engagement mechanics
4. **Collaboration with Copy Lead & Design Lead** for tone, voice, and visual hierarchy integration

**Expected Impact:** 
- +40-60% keyword rankings (local + specialty searches)
- +25-35% internal link equity distribution
- +15-20% engagement CTR (with Design Lead's CTA improvements)
- AI search visibility (prerequisite for long-term authority)

---

## ISSUE ANALYSIS & PROPOSED FIXES

### CATEGORY 1: CRITICAL METADATA & BRAND CONSISTENCY (Week 1)

#### **Issue #1: Brand Confusion — "Wonderloud" vs "Rainuka" Inconsistency**
**Severity:** 🔴 CRITICAL  
**Location:** All page metadata (titles, descriptions)

**Current State:**
- About page meta: `"About Rainuka Oberoi | Licensed Therapist"`
- ADHD page meta: `"Adult ADHD Therapy | Diagnosis, Executive Function | **Wonderloud Therapy**"`
- Homepage: Rainuka Therapy
- Mixed brand signals = confusion to search engines + users

**Proposed Fix:**
- **Decision Needed (TEAM INPUT):** Pick ONE brand: "Rainuka Therapy" or "Wonderloud Therapy"
  - If "Rainuka" → update all metadata + FAQ pricing page + credentials section
  - If "Wonderloud" → update homepage + all copy (major refactor)
  - Recommendation: **"Rainuka Therapy"** (more personal, already in homepage, clearer for personal brand)

**Implementation:**
1. Update metadata on 7 core pages (About, ADHD, Couples, Grief, Perinatal, FAQ, Guides)
2. Remove "Wonderloud" from ADHD page metadata title
3. Add standardized suffix: `"Rainuka Therapy | [Specialty] Therapy & Counseling"`
4. Verify FAQ pricing page mentions brand correctly

**Files to Change:**
- `app/about/page.tsx` (metadata)
- `app/adhd/page.tsx` (metadata)
- `app/couples/page.tsx` (metadata)
- `app/grief/page.tsx` (metadata)
- `app/perinatal/page.tsx` (metadata)
- `app/faq/page.tsx` (metadata + body if needed)
- `app/guides/page.tsx` (metadata)

**SEO Value:** Consistency = trust signals + reduced bounce rate on branded searches

---

#### **Issue #2: Credentials Section Contains Placeholder Text [CRITICAL]**
**Severity:** 🔴 CRITICAL  
**Location:** `app/about/page.tsx` (lines 210-216)

**Current (Unfinished):**
```
I am a Licensed Clinical Social Worker (LCSW) with credentials in Canada and the United States. 
For Canadian clients, note that LCSW is a U.S. credential. I am regulated in Canada by [Provincial Regulatory Body].
```

**Proposed Fix:**
**Option A (Recommended):** Replace [brackets] with actual regulatory bodies
- Canada: "British Columbia College of Social Workers" (if BC-based) OR "Ontario College of Social Workers" (if ON-based)
- Verify actual province of licensure with Rainuka

**Option B:** Remove Canada references entirely if not actively licensed in Canada
- Simplify: "I am a Licensed Clinical Social Worker (LCSW) licensed in the United States, serving clients across multiple states."

**Decision Needed:** Which option is accurate? Once confirmed, I'll update immediately.

**SEO Impact:** Thin/placeholder content = Google penalty; credibility damage

---

#### **Issue #3: Outdated Telehealth State Count (Perinatal Page)**
**Severity:** 🟡 HIGH  
**Location:** `app/perinatal/page.tsx` (line 200)

**Current:**
```
"Telehealth Available - Sessions from home, your office, or wherever feels comfortable. 28 states served."
```

**Question for Rainuka:** Is "28 states" still accurate?
- If serving 30+ states now → update number
- If serving Canada + US → add both regions
- If number uncertain → remove specific count entirely

**Proposed Fix (Pending Confirmation):**
- Replace with either accurate number OR remove ("Telehealth available nationwide" / "Many U.S. states served")

---

#### **Issue #4: FAQ Pricing Verification**
**Severity:** 🟡 HIGH  
**Location:** `app/faq/page.tsx` (line 28)

**Current:**
```
"$150/session for 50 minutes. If that's tight, I have sliding scale ($80-$120)..."
```

**Question:** Are these prices current as of September 2026?

**Action:** Verify with Rainuka, then update if needed.

---

#### **Issue #5: Add "Last Updated" Dates to Guides**
**Severity:** 🟡 MEDIUM  
**Location:** `app/guides/page.tsx` (guide cards)

**Proposed Fix:**
- For guides older than 6 months, add "Updated: [Month Year]" below publication date
- Signals freshness to Google (Helpful Content Update consideration)

---

### CATEGORY 2: TOPIC COVERAGE GAPS (Week 2-3)

#### **Issue #6: ADHD Page Missing "ADHD in Women" Deep Dive**
**Severity:** 🔴 HIGH  
**Location:** `app/adhd/page.tsx` (lines 137-141, "ADHD in Women" card exists but no content follows)

**Current:**
- Card mentions: "High masking hides hyperactivity. Diagnosis reveals what's always been there."
- Problem: No 300-400 word deep-dive section follows

**Proposed Content Addition (350 words):**

**Section Title:** "Why ADHD in Women Goes Undiagnosed: Masking, Late Diagnosis & Identity Reconstruction"

**Key Points to Cover:**
1. **Diagnostic delay in women** — Women often diagnosed 10-15 years later than men
2. **Why:** Socialization teaches masking (suppressing hyperactivity, performing organization)
3. **Missed signs:** Emotional dysregulation misread as anxiety/depression, not ADHD
4. **Executive dysfunction in motherhood:** ADHD + perinatal transition = acute shame
5. **Late diagnosis identity shock:** "If I have ADHD now, what does that mean for my past?"
6. **Therapy's role:** Reframing identity, self-compassion, integrating diagnosis into sense of self

**LSI Keywords to Include:**
- Female ADHD, undiagnosed ADHD in women, ADHD masking, rejection sensitivity dysphoria, emotional dysregulation, executive dysfunction in women

**Unique Angle:** Rainuka's perinatal + ADHD intersection (many women diagnosed during motherhood transition)

**Files:** Modify `app/adhd/page.tsx` (add H2 section after testimonials or in "How I Work With ADHD")

---

#### **Issue #7: Perinatal Page Missing Pregnancy vs. Postpartum Comparison**
**Severity:** 🟡 HIGH  
**Location:** `app/perinatal/page.tsx` (lines 59-70, lists both but doesn't differentiate)

**Proposed Content Addition (400-500 words):**

**Section Title:** "Pregnancy Anxiety vs. Postpartum Anxiety: Different Triggers, Different Treatment"

**Key Points to Cover:**
1. **Pregnancy anxiety (prenatal anxiety):**
   - Triggers: Fear of miscarriage, "what if something's wrong," medical trauma, intrusive thoughts about baby harm
   - Timeline: Can start at 12 weeks or earlier
   - Prevalence: 10-15% of pregnant people
   - Treatment: Reassurance, grounding, CBT adapted for pregnancy

2. **Postpartum anxiety:**
   - Triggers: Sleep deprivation, hormonal shifts, identity loss, overwhelm with new responsibility
   - Timeline: Typically peaks 2-6 weeks postpartum
   - Prevalence: 10-15% of postpartum people
   - Treatment: Sleep support, medication safety (lactation), somatic work

3. **Overlap with ADHD:**
   - Executive dysfunction worsens postpartum
   - Shame cycle (undiagnosed ADHD → anxiety → self-blame)
   - Therapy helps: Naming what's ADHD vs. what's anxiety

**LSI Keywords to Include:**
- Prenatal anxiety, antenatal anxiety, postpartum OCD, perinatal anxiety disorder, reproductive trauma, birth trauma therapy, postpartum rage, maternal mental health

**Visual Option (Design Lead Input):** Side-by-side comparison table? (e.g., Trigger | Pregnancy | Postpartum)

**Files:** Add to `app/perinatal/page.tsx` (new H2 section after "Types of Perinatal Anxiety" or before)

---

#### **Issue #8: Grief Page Missing "Career Loss & Professional Identity Grief"**
**Severity:** 🟡 HIGH  
**Location:** `app/grief/page.tsx` (lines 80-118, Types of Grief list)

**Proposed Content Addition (300-350 words):**

**New 7th Grief Type:** "Career Loss & Professional Identity Grief"

**Context:**
- Forced retirement, layoff, career pivot, involuntary career change
- Often unrecognized as "real grief" by society (vs. death)
- High prevalence in 2026 (tech layoffs, burnout-driven career exits)
- Aligns with Rainuka's career counseling specialty

**Key Points to Cover:**
1. **Why career loss is grief:** Career = identity, purpose, daily structure, community
2. **Types of career loss:**
   - Forced layoff or termination
   - Burnout-forced career exit
   - Identity shift (promotion/demotion = loss of old self)
   - Industry collapse (e.g., journalist → AI replacement)

3. **Grief symptoms:**
   - Loss of purpose/identity ("Who am I without this career?")
   - Shame and self-blame
   - Disrupted daily rhythm
   - Isolation (friends still in field)
   - Financial anxiety + existential crisis

4. **Therapy approach:**
   - Honoring the loss without rushing "productivity"
   - Building new identity (≠ old career identity)
   - Financial & practical support + emotional processing

**LSI Keywords:**
- Job loss grief, career loss, professional identity loss, unemployment grief, career change grief, career transition anxiety

**Files:** Modify `app/grief/page.tsx` (add to grief types section, then expand in main content)

---

#### **Issue #9: Couples Page Missing Affair Recovery Timeline Expectations**
**Severity:** 🟡 MEDIUM  
**Location:** `app/couples/page.tsx` (lines 200-266, Infidelity section mentions phases but no timeline clarity)

**Proposed Content Addition (300 words):**

**Section Title:** "Affair Recovery Timeline: What to Expect Month by Month"

**Key Points to Cover:**
1. **Phase 1: Atonement (1-3 months)**
   - What's happening: Crisis processing, blame, anger peaks
   - What therapy does: Safety-building, reducing defensiveness
   - Realistic expectation: "We won't feel close yet"

2. **Phase 2: Attunement (3-12 months)**
   - What's happening: Beginning to hear each other; trust rebuilds incrementally
   - What therapy does: EFT/Gottman work on connection patterns
   - Realistic expectation: "Progress isn't linear; setbacks are normal"

3. **Phase 3: Attachment (6-24 months)**
   - What's happening: New relationship identity forms; bonding deepens
   - What therapy does: Future-focused work; meaning-making
   - Realistic expectation: "The affair becomes part of your story, not the whole story"

**Key Message:** "Recovery timelines vary; these are realistic ranges based on research."

**Design Consideration:** Could this be a visual timeline component? (Design Lead input)

**Files:** Add to `app/couples/page.tsx` (new H3 subsection in Infidelity recovery)

---

#### **Issue #10: About Page Missing "Who I'm Best Suited For" Clarity**
**Severity:** 🟡 MEDIUM  
**Location:** `app/about/page.tsx` (lines 379-413, Diversity section says "I work affirmatively with" but no "NOT ideal fit for")

**Proposed Content Addition (200-250 words):**

**Section Title:** "Who I'm Best Suited For (And Who Might Benefit From Specialization Elsewhere)"

**Key Points to Cover:**
1. **I'm a great fit if you:**
   - Seeking therapy for ADHD, perinatal mental health, career transitions
   - Identify as BIPOC, LGBTQ+, neurodivergent, disabled, or low-income (trauma-informed, culturally responsive)
   - Want a therapist with lived experience of multiple identities

2. **You might benefit from a specialist if you:**
   - In acute crisis (suicidal, self-harm active) → call 988 (Suicide & Crisis Lifeline)
   - Have active substance use disorder → specialized addiction treatment programs
   - Seeking primary PTSD/trauma treatment → trauma specialists (EMDR, Somatic Experiencing)
   - Need psychiatric medication management → psychiatrist + therapist collaboration
   - Couples therapy at critical breaking point → intensive Couples/EFT specialists

**Why This Matters:**
- Builds trust through honesty
- Prevents wasted consultation calls
- Positions Rainuka as confident, scoped, professional

**SEO Value:** Reduces bounce rate; improves targeting (right people book)

**Files:** Modify `app/about/page.tsx` (add after Diversity section, before CTA)

---

### CATEGORY 3: LSI KEYWORDS & SEMANTIC VARIATION (Week 3)

#### **Issue #11: Integrate LSI Keywords into Page Headers & Metadata**

**About Page LSI Keywords (Missing):**
- Trauma-informed therapist, culturally responsive therapy, neurodivergent-affirming, evidence-based therapy, attachment-informed therapy, LCSW

**Proposed Fix:**
- Rewrite H1: "Meet Rainuka Oberoi: Trauma-Informed Therapist & LCSW for ADHD, Perinatal Mental Health & Career Counseling"
- Include in first 100 words: trauma-informed, LCSW, evidence-based, neurodivergent-affirming

**ADHD Page LSI Keywords (Scattered, need consolidation):**
- CBT for ADHD, somatic therapy ADHD, attachment-based ADHD therapy, executive function coaching, shame-informed therapy

**Proposed Fix:**
- Add H2 section: "ADHD Therapy Modalities: CBT, Somatic Therapy & Attachment-Based Approaches" (300 words)
- Explain each modality + how Rainuka integrates them

**Perinatal Page LSI Keywords (Missing Variants):**
- Prenatal anxiety, antenatal anxiety, perinatal OCD, postpartum OCD, reproductive trauma, maternal mental health

**Proposed Fix:**
- Replace generic "Pregnancy anxiety" with: "Prenatal Anxiety, Antenatal Anxiety & Perinatal OCD"
- Use all variants in appropriate contexts

**Couples Page LSI Keywords:**
- EFT (Emotionally Focused Therapy), Gottman Method, attachment-based couples therapy, couples conflict resolution, infidelity recovery, rebuilding trust

**Proposed Fix:**
- Add H2 section: "Evidence-Based Couples Therapy: Gottman Method, EFT & Attachment-Based Approaches" (400 words)

**Grief Page LSI Keywords:**
- Grief counselor vs. grief therapist, dual process model, meaning-making, continuing bonds therapy, narrative therapy grief, complicated grief, prolonged grief disorder

**Proposed Fix:**
- Rename sections to include LSI variants (e.g., "Narrative Therapy & Grief Meaning-Making: Restoring Your Story")

---

### CATEGORY 4: INTERNAL LINKING & CROSS-SERVICE STRATEGY (Week 3-4)

#### **Issue #12: Minimal Internal Linking Between Related Services**
**Severity:** 🟡 HIGH  
**Current State:** Each specialty page stands alone; no links to related specialties

**Proposed Fix:** Create internal linking architecture

**Example Cross-Links:**
1. **Couples page** → Add sidebar: "If one partner needs individual therapy first: [→ ADHD Therapy] [→ Perinatal Therapy] [→ Career Counseling]"
2. **ADHD page** → "If ADHD is affecting your relationships or career: [→ Couples Therapy] [→ Career Counseling]"
3. **Perinatal page** → "If perinatal anxiety is tied to undiagnosed ADHD: [→ ADHD Therapy]"
4. **Grief page** → "Career loss or identity grief: [→ Career Counseling]"
5. **FAQ page** → 15+ contextual internal links to specialty pages (e.g., "Q: What if I have ADHD + anxiety?" → Link to ADHD page)

**SEO Value:** +20-30% internal link equity; improved user journey clarity

**UX Coordination (Design Lead):** Should these be sidebar cards? Inline links? CTA buttons?

---

#### **Issue #13: FAQ Page Missing Internal Linking Strategy**
**Severity:** 🟡 MEDIUM  
**Current:** FAQ answers questions but doesn't link to related service pages

**Proposed Fix:** Audit all 30+ FAQs; add 10-15 contextual internal links

**Example:**
- Current: "Q: Will therapy help with ADHD symptoms?"
- Improved: "Q: Will therapy help with ADHD symptoms? Yes. [Read our comprehensive ADHD therapy guide] to understand how CBT, somatic therapy, and attachment-based approaches address ADHD specifically."

**Files:** `app/faq/page.tsx`

---

### CATEGORY 5: CONTENT FRESHNESS & READABILITY (Week 4)

#### **Issue #14: Readability Optimization**
**Severity:** 🟡 MEDIUM  
**Current:** Some 500+ word single paragraphs (About page bio section)

**Proposed Fix (Coordinate with Design Lead):**
- Break long paragraphs into 3-4 sentence chunks
- Add visual breaks: bullet points, subheadings, quoted callouts
- Target Flesch-Kincaid: 60+ (Excellent readability)

**Files:** About page bio section, Couples Infidelity section (with Design Lead's card redesign)

---

## IMPLEMENTATION ROADMAP

### **WEEK 1 (Critical Metadata & Brand Consistency)**
- [ ] **Decision Needed:** Brand name (Rainuka or Wonderloud?) + credentials regulatory body + current pricing + telehealth state count
- [ ] Update metadata on 7 core pages (brand standardization)
- [ ] Fix credentials placeholder text
- [ ] Verify pricing on FAQ page
- [ ] Add/update "Last Updated" dates to guides older than 6 months
- [ ] Commit changes: "fix: Standardize brand name and metadata consistency across all pages"

### **WEEK 2-3 (Content Depth Additions)**
- [ ] ADHD in Women deep dive (350 words) + LSI keywords
- [ ] Pregnancy vs. Postpartum comparison (400-500 words) + LSI keywords
- [ ] Career Loss grief type (300 words) + LSI keywords
- [ ] Affair recovery timeline expectations (300 words)
- [ ] About page "Who I'm best suited for" section (200-250 words)
- [ ] Internal linking audit + strategy document
- [ ] Commit changes: "content: Add topic coverage gaps (ADHD women, pregnancy vs postpartum, career grief)"

### **WEEK 3-4 (LSI Keywords & Internal Linking)**
- [ ] ADHD Therapy Modalities section (300 words)
- [ ] Perinatal keyword variant replacement (prenatal, antenatal, etc.)
- [ ] Couples Therapy Modalities section (400 words)
- [ ] Grief page LSI keyword headers
- [ ] Implement internal linking (Couples, ADHD, Perinatal, FAQ pages)
- [ ] Readability pass (coordinate with Design Lead)
- [ ] Commit changes: "seo: Add LSI keywords and internal linking structure"

---

## COLLABORATION NEEDS

### **Design Lead (POLISHER #1 — Design Refinement)**
- [ ] Visual treatment for internal linking cards?
- [ ] Readability improvements: Should long sections be tabbed? (Like POLISHER #2's About page tabs)
- [ ] Comparison table for Pregnancy vs. Postpartum? (Design component)
- [ ] Timeline graphic for Affair Recovery phases? (Design component)

### **Copy Lead (POLISHER #3 — Voice & Tone)**
- [ ] Review ADHD Women section for authentic, trauma-informed voice
- [ ] Review Pregnancy vs. Postpartum section for clarity + empathy
- [ ] Review Career Grief section for validation + hope
- [ ] Ensure new sections match Rainuka's established voice (not robotic)

### **Other Polishers (UX, Technical, Performance)**
- [ ] POLISHER #2 (UX Lead): How should internal linking integrate with sticky CTA + breadcrumbs?
- [ ] POLISHER #7 (Conversion): Should internal links include CTA text ("Learn More", "Explore")?
- [ ] Technical SEO: Validate schema markup on new sections

---

## TEAM QUESTIONS FOR FEEDBACK

### **Critical Decisions Needed:**
1. **Brand Name:** "Rainuka Therapy" or "Wonderloud Therapy"? (Recommend: Rainuka)
2. **Credentials:** What's Rainuka's actual Canadian regulatory body? (Or should we remove Canada references?)
3. **Pricing:** Are $150/$80-120 prices current as of Sept 2026?
4. **Telehealth:** How many states currently served? Is "28" accurate?

### **Design Collaboration:**
5. Should internal linking be sidebar cards, inline links, or CTA buttons? (Design Lead input)
6. Visual timeline for Affair Recovery phases? Comparison table for Pregnancy vs. Postpartum?
7. Should readability improvements include tabbed content? (Coordinate with POLISHER #2)

### **Copy Collaboration:**
8. Does ADHD Women section feel authentic to Rainuka's voice?
9. Does Career Grief section align with how Rainuka frames this work?
10. Should any new sections include quotes or case examples?

---

## SUCCESS METRICS (Post-Implementation)

| Metric | Current | Target | Timeline |
|--------|---------|--------|----------|
| H1 keyword optimization | 20% | 80% | Week 1 |
| LSI keyword coverage | 40% | 85% | Week 3 |
| Internal links per page | 2-3 | 8-10 | Week 3-4 |
| CTAs within content | 1 | 4-5 | Week 4 (with Design Lead) |
| Metadata consistency | 50% | 100% | Week 1 |
| Readability (Flesch) | 58 | 60+ | Week 4 |
| Keyword rankings (local specialty) | ~0 | 30-50 | Month 2 (ongoing) |
| FAQ internal links | 0 | 15+ | Week 4 |

---

## NOTES FOR NEXT AUDIT (3 Months)

- Monitor Search Console: Are new keywords ranking? (ADHD women, prenatal anxiety, career grief)
- Track engagement: Do internal links increase page dwell time?
- Monitor conversion: Do new sections drive consultation bookings?
- Assess AI search visibility: Does content depth now meet citation thresholds?

---

## STATUS: READY FOR TEAM FEEDBACK

**Files Created:**
- `.hermes/POLISHER-1-SEO-KEYWORDS-CONTENT-DRAFT.md` (this file)

**Next Steps:**
1. Design Lead reviews (visual/component needs)
2. Copy Lead reviews (voice/authenticity)
3. Team consensus on critical decisions (brand, credentials, pricing, telehealth)
4. Implementation begins Week 1

**Expected Completion:** End of Week 4 (October 3, 2026)

---

**Awaiting Feedback From:**
- @Copy Lead (POLISHER #3) — Voice & tone review
- @Design Lead (POLISHER #1) — Visual/component guidance
- @Rainuka — Critical decisions (brand, credentials, pricing, telehealth)
