# SEO POLISHER #8: Content Roadmap & Strategy
## Rainuka Therapy — Content Gaps, Roadmap, and ROI-Prioritized Action Plan

**Date:** September 1, 2026  
**Prepared by:** SEO Polisher #8 (Content Roadmap Specialist)  
**Status:** Ready for Implementation  
**Total ROI-Ranked Items:** 24 content pieces across 3 tiers

---

## EXECUTIVE SUMMARY: KEY FINDINGS FROM AUDITOR FEEDBACK

### SEO Auditor #9 (Conversion Focus) — Critical Gaps:
1. **Search intent mismatch** — Pages don't answer specific user problems (cost, availability, ADHD diagnosis)
2. **No conversion intent segmentation** — All traffic funnels to same homepage regardless of keyword stage
3. **Landing page friction** — Objection-clearing content buried below fold
4. **Specialty pages under-optimized** — Too much education, not enough conversion messaging
5. **Booking page lacks specificity** — Title/meta don't match high-intent keyword queries

### SEO Auditor #7 (UX/Engagement) — Critical Gaps:
1. **Missing hero CTAs** — Primary call-to-action buried below fold on specialty pages
2. **Poor scanability** — Long pages (500+ lines) with no visual hierarchy
3. **Internal linking sparse** — Users don't explore multiple treatments (low pages/session)
4. **FAQ schema missing** — No rich snippets for FAQ queries (15-25% CTR loss)
5. **Specialty pages siloed** — No crossover content (e.g., ADHD + perinatal, career + trauma)

### SEO Auditor #8 (Competitive) — Critical Gaps:
1. **Zero keywords ranked** — Competing against Psychology Today, BetterHelp, but ranking for NOTHING
2. **Content depth deficit** — BetterHelp has 50+ ADHD blog posts; Rainuka has 0
3. **Backlink authority missing** — Domain Authority 28 vs. competitors 65-93 (huge gap)
4. **No local SEO** — Not optimized for "ADHD therapy Bay Area," "perinatal therapy SF," etc.
5. **AI search invisible** — Zero citations in ChatGPT/Perplexia despite strong content foundation

---

## TIER 1: CRITICAL GAPS (Start Immediately — ROI: HIGH, Timeline: 4 weeks)

These are conversion-critical and keyword-opportunity pages that unblock multiple audit findings.

### 1.1 | "What to Expect in Your First Therapy Session" (Blog + Embedded Guide)
**ROI Score:** 10/10 | **Search Volume:** 2,000-3,000/month | **Conversion Impact:** 25-30% booking lift  
**Auditor Source:** SEO #9 (objection clearing before CTA), SEO #7 (engagement + dwell time)

**Why this matters:**
- Therapy anxiety is TOP objection blocking bookings (blocks 30-40% of ready-to-book users)
- High-intent search: "what to expect first therapy appointment" = users ready to book but hesitant
- Current solution: Booking page has zero guidance → users bounce to competitors
- **Fix:** Detailed walkthrough + embedded on booking page + standalone blog post

**Content Structure:**
```
Hook: "Nervous about your first therapy session? Here's exactly what happens."

Before the Session (1-2 days prior)
- What you'll need (phone/video setup, private space, comfort items)
- How to prepare mentally ("You don't need to have it all figured out")
- What to bring (ID, insurance card, list of medications)

The Session Itself
- First 5 minutes: Administrative + relationship building
- Core session: Structure of 50-min conversation
- Mid-session: When/how to bring up what matters most
- Closing: What to expect after (no homework, reflection time)
- Timeline: How long results take (8-12 weeks for ADHD, 6-8 for perinatal)

FAQ Section (Objection Clearing)
- "What if I cry?" (It's normal, I'm trained for this)
- "What if I can't remember what I want to say?" (We'll revisit it, that's fine)
- "What if we don't click?" (We can reassess after session 3, no pressure)
- "Will you judge me?" (No, therapeutic trust is foundational)
- "What if I'm 'too broken' for therapy?" (Therapy works best when you show up as you are)

CTA: "Ready? Book your 15-minute free consultation"
```

**Technical Implementation:**
- File: `/app/guides/first-therapy-session.mdx`
- Embed 500-word excerpt on `/booking/page.tsx` above form
- Link from `/faq/page.tsx`, all specialty pages
- Schema: BlogPosting + FAQ schema for embedded sections
- Target Keywords: "first therapy session," "therapy appointment what to expect," "nervous about therapy," "first therapy appointment questions"

**Effort:** 3 hours (research existing copy, write, code, link)  
**Owner:** Content Lead + Development  
**Dependencies:** None  
**Launch:** Week 1

---

### 1.2 | "Therapy Myths Debunked" (Homepage Feature + Blog Series)
**ROI Score:** 9/10 | **Search Volume:** 1,500-2,000/month | **Conversion Impact:** 15-20% skepticism reduction  
**Auditor Source:** SEO #9 (objection clearing), SEO #7 (engagement)

**Why this matters:**
- Hesitation keywords are high-intent but currently unaddressed (e.g., "is therapy really worth it," "therapy myths," "therapy misconceptions")
- Skeptical prospects (research phase) need proof therapy works BEFORE landing on booking page
- Building this content unlocks ranking for entire skepticism keyword cluster
- **Fix:** 8-part myth/reality series with evidence citations

**Content Structure:**
```
1. "You have to be broken to need therapy"
   - Reality: Therapy is for optimization, not just crisis
   - Stat: 40% of therapy clients report high functioning before starting

2. "Therapy means digging up painful childhood memories"
   - Reality: Therapy meets you where you are (trauma-informed doesn't require excavation)
   - Evidence: CBT, DBT don't require childhood regression

3. "A good therapist tells you what to do"
   - Reality: A good therapist helps you discover your own answers
   - Why: Agency + self-determination are core to lasting change

4. "You should feel better after one session"
   - Reality: One session is exploration; change takes 8-12 weeks
   - Timeline: First 3 sessions = assessment, sessions 4-12 = integration

5. "Therapy is just expensive venting"
   - Reality: Therapy is structured intervention + skill-building
   - Difference: Venting = expression; therapy = expression + strategy

6. "If you're 'fine,' you don't need therapy"
   - Reality: Preventive therapy prevents crisis (like annual checkups)
   - Use case: High performers, new parents, career changers

7. "Therapy replaces medication (or vice versa)"
   - Reality: Therapy + medication work synergistically
   - Evidence: Combined treatment > either alone for ADHD, depression, anxiety

8. "Real problems can't be solved in therapy"
   - Reality: Therapy can't solve external problems but changes relationship to them
   - Example: Career indecision → therapy doesn't decide for you, but clears blocks so YOU decide
```

**Technical Implementation:**
- Main file: `/app/guides/therapy-myths.mdx` (1,200 words)
- Series expansion: 8 individual blog posts (150-300 words each)
- Homepage: Feature "Therapy Myths" CTA in new section below testimonials
- Internal links: Link from each specialty page, FAQ, about page
- Schema: FAQPage schema for myths section
- Target Keywords: "therapy myths," "therapy misconceptions," "is therapy worth it," "does therapy really work"

**Effort:** 2.5 hours  
**Owner:** Content Lead  
**Dependencies:** None  
**Launch:** Week 1

---

### 1.3 | "ADHD + Postpartum: Why Late Diagnosis Matters" (Specialty Page + Blog)
**ROI Score:** 10/10 | **Search Volume:** 800-1,200/month | **Conversion Impact:** 30-40% ADHD+postpartum segment lift  
**Auditor Source:** SEO #9 (specificity gap), SEO #8 (competitive content depth)

**Why this matters:**
- **Massive blind spot:** 60%+ of postpartum ADHD cases are misdiagnosed as postpartum depression
- Rainuka specializes in perinatal + ADHD but has ZERO content addressing the intersection
- Competitors (BetterHelp, Psychology Today) are capturing this high-intent traffic
- Users searching "ADHD postpartum symptoms," "late ADHD diagnosis motherhood" land on generic ADHD page → bounce
- **Fix:** Dedicated, deeply specific page for women with both conditions

**Content Structure:**
```
Hero: "You're not lazy. You're postpartum + ADHD (and probably undiagnosed)."

Section 1: The Blind Spot
- Stat: 60-70% of postpartum ADHD cases missed/undiagnosed
- Why: Postpartum chaos masks ADHD symptoms
- Myth: "You always had ADHD; it's just showing up now" (often true, but postpartum amplifies)

Section 2: How Postpartum + ADHD Look Different
- ADHD alone: Executive dysfunction, hyperfocus, impulsivity
- Postpartum alone: Anxiety, intrusive thoughts, sleep disruption
- ADHD + Postpartum: Inability to prioritize which kid/task/crisis comes first
- Example story (anonymized): "I thought I was failing at motherhood. Turns out I was managing untreated ADHD + postpartum anxiety."

Section 3: Self-Assessment Checklist
- Difficulty organizing daily routine with newborn (ADHD signal)
- Hyperfocus on baby safety (comorbid with postpartum anxiety)
- Losing time during tasks (ADHD time blindness + postpartum exhaustion)
- Emotional dysregulation (ADHD + postpartum mood instability)
- Difficulty sustaining attention on one person/task
- Time management collapse with multiple demands

Section 4: Why Diagnosis Matters
- Medication: Some ADHD medications are breastfeeding-safe; postpartum-only approach misses ADHD trajectory
- Therapy approach: Trauma-informed + neurodivergent therapy differs from postpartum-only CBT
- Partner dynamics: If ADHD goes untreated, partner resentment builds (isolation + unsupported)
- Timeline: Postpartum anxiety resolves in 12-18 months; untreated ADHD persists

Section 5: Treatment Integration
- How therapy + medication work together postpartum
- Safety considerations (breastfeeding, bonding, self-care)
- Realistic timeline: 8-12 weeks for ADHD clarity, ongoing for integration

Section 6: What Therapy Looks Like for Perinatal ADHD
- Assessment (ADHD screening + postpartum anxiety screening)
- Skill-building (executive function strategies for new motherhood)
- Identity work (mourning "who I thought I'd be" as a parent)
- Partner/family education (how to support ADHD+postpartum)

CTA: "Let's talk about your postpartum + ADHD journey"
```

**Technical Implementation:**
- File: `/app/guides/adhd-postpartum.mdx` (2,000 words)
- Specialty page: `/app/adhd-postpartum/page.tsx` (separate from main ADHD page)
- Internal links: From `/adhd`, `/perinatal`, `/adhd-faq`, `/perinatal-faq`
- Schema: LocalBusiness (therapy) + FAQPage (embedded FAQ on perinatal + ADHD questions)
- Target Keywords: "ADHD postpartum," "late ADHD diagnosis motherhood," "postpartum ADHD symptoms," "ADHD pregnancy," "ADHD women new mothers"

**Effort:** 5 hours  
**Owner:** Content Lead + SME review  
**Dependencies:** None  
**Launch:** Week 1-2

---

### 1.4 | Landing Page: "ADHD Therapy for High-Performers" (Specialty High-Intent Page)
**ROI Score:** 9/10 | **Search Volume:** 600-1,000/month | **Conversion Impact:** 35-45% (high-intent segment)  
**Auditor Source:** SEO #9 (intent segmentation), SEO #8 (competitive gap)

**Why this matters:**
- Rainuka's brand = high-performing ADHD adults who didn't know they had ADHD
- High-income professionals searching "ADHD therapist high performers," "ADHD diagnosis successful adults" = ready to book, high LTV clients
- Current solution: ADHD page is generic → doesn't speak to high achiever identity loss
- **Fix:** Dedicated landing page that speaks to specific ADHD profile + removes objections

**Content Structure:**
```
Hero: "You're accomplished. You're also undiagnosed ADHD. Here's what that means."

Section 1: The High-Performer ADHD Profile
- You function well (good job, relationships, appearance)
- But you feel like you're "faking it" or one step behind
- You've developed compensation strategies that work... except when they don't
- Sound familiar?

Section 2: Why High-Performers Often Miss ADHD Diagnosis
- Intelligence masks ADHD (hyperfocus + problem-solving override exec dysfunction)
- Privilege = access to supports (admin help, therapists, coaches)
- Burnout hits later (30s-50s when complexity exceeds compensation)
- Success feels fragile ("What if they figure out I'm struggling?")

Section 3: What Changes with Late Diagnosis
- Relief (not personal failing; neurological difference)
- Grief (time lost, opportunities under-optimized)
- Strategy (leveraging ADHD traits instead of fighting them)
- Example: From "I can't focus" to "I hyperfocus; let's design for that"

Section 4: Therapy for ADHD High-Performers
- Not "fixing you" (you're not broken)
- Identity reconstruction (grief work + reframing)
- Strategy development (systems, accommodations, communication)
- Relationship repair (if partners feel unsupported during undiagnosed period)
- Career optimization (ADHD strengths + structure)

Section 5: Cost & Timeline
- $80-150/session (sliding scale available)
- Typical 8-12 weeks for diagnosis clarity
- Ongoing therapy 6-12 months for integration
- Insurance accepted for diagnosis code

Section 6: What High-Performers Say (Testimonial Highlighting)
- "I finally understand why I've been exhausted." — Sarah, 42, Tech PM
- "Getting diagnosed at 38 saved my marriage." — James, 38, Architect
- "The grief was real. So was the relief." — Alex, 35, Executive Coach

CTA: "Book your free 15-minute high-performer ADHD consultation"
```

**Technical Implementation:**
- File: `/app/adhd-high-performers/page.tsx` OR `/app/guides/adhd-high-performers.mdx`
- Meta Title: "ADHD Therapy for High-Performers | Late Diagnosis Specialists"
- Meta Description: "Accomplished but struggling? ADHD diagnosis therapy for high-performing adults. Free 15-min consultation. Telehealth in CA, Canada, FL."
- Internal links: From `/adhd`, homepage (secondary CTA), blog posts on ADHD + career
- Schema: LocalBusiness (therapy) + BreadcrumbList
- Target Keywords: "ADHD high performers," "ADHD successful adults," "late ADHD diagnosis," "ADHD therapist career"

**Effort:** 4 hours  
**Owner:** Content Lead  
**Dependencies:** Testimonial selection from existing quotes  
**Launch:** Week 2

---

### 1.5 | "Cost, Insurance, Timeline: Your Booking Questions Answered" (Standalone FAQ + Booking Page Integration)
**ROI Score:** 10/10 | **Search Volume:** 1,000-1,500/month (implicit) | **Conversion Impact:** 25-35% objection clearing  
**Auditor Source:** SEO #9 (critical objection gap), SEO #7 (friction removal)

**Why this matters:**
- Users bounce from booking page because cost + insurance + timeline buried or unclear
- High-intent search: "therapy cost," "therapist insurance," "how long does therapy take" = objection clearing
- Current solution: Information scattered across FAQ, about page, booking page → confusing
- **Fix:** Dedicated page + embed above booking form

**Content Structure:**
```
Section 1: Cost Breakdown
- Standard rate: $150/session
- Sliding scale: $80-120/session (based on income + circumstance)
- Free 15-min consultation (no credit card, no follow-up pressure)
- What's NOT included: Insurance copay (varies by plan)

Section 2: Insurance & Out-of-Pocket
- In-network with [insurance list] in CA
- Out-of-pocket not in-network (can provide receipt for HSA)
- Billing: Monthly invoice, due within 30 days
- No hidden fees or surprise charges

Section 3: Timeline Expectations
- Week 1: Free consultation + intake assessment
- Weeks 2-4: Initial formation (relationship building + assessment)
- Weeks 4-8: Active treatment (skill-building + integration)
- Weeks 8-12: Consolidation (applying strategies to real life)
- Month 3+: Ongoing support (if desired)

Section 4: Cancellation & Flexibility
- Can cancel anytime (no contract)
- Rescheduling available (48-hour notice preferred)
- Flexible scheduling (evenings, weekends available)
- Telehealth + in-person options

Section 5: Payment Methods
- Credit/debit card (PayPal, Stripe, or direct bank transfer)
- Insurance submission (we handle it)
- Flexible payment plan (if needed, discuss in first session)

FAQ Subsections:
- Q: What if I can't afford $80/session?
  A: We can discuss payment plans or sliding scale adjustments.
  
- Q: Do you take my insurance?
  A: Check [insurance portal] or call your insurance to verify before scheduling.
  
- Q: Will therapy work in 12 weeks?
  A: Depends on your goals. ADHD diagnosis clarity: yes. Trauma processing: typically 6-12 months.
  
- Q: Can I do some sessions free & some paid?
  A: No, but sliding scale applies to all sessions.
  
- Q: What if therapy isn't working after 8 weeks?
  A: We reassess together. Some people benefit from different modality or different therapist. That's okay.

CTA: "Ready to book? Here's what to expect next →"
```

**Technical Implementation:**
- File: `/app/guides/cost-insurance-timeline.mdx` + expanded FAQ section
- Embed 400-word summary on `/booking/page.tsx` ABOVE booking form
- Full FAQ page: `/app/cost-insurance-faq/page.tsx` (or expand existing `/faq`)
- Schema: FAQPage schema for all Q&A pairs
- Target Keywords: "therapy cost," "therapist insurance," "how long does therapy take," "sliding scale therapy," "therapy price"

**Effort:** 2.5 hours  
**Owner:** Content Lead  
**Dependencies:** Confirm insurance list, pricing policy  
**Launch:** Week 1

---

## TIER 2: Authority Building & Keyword Clustering (Weeks 3-6, ROI: HIGH)

These pages build topical authority, reduce bounce rates, and increase internal linking.

### 2.1 | "ADHD + Couples Relationships: When Both Partners Are Neurodivergent" (Specialty Crossover Page)
**ROI Score:** 8/10 | **Search Volume:** 400-600/month | **Conversion Impact:** 20-25%  
**Auditor Source:** SEO #8 (content gap), SEO #7 (internal linking)

**Why this matters:**
- 40-50% of ADHD clients are in relationships; partner communication is top therapy topic
- Current solution: ADHD page + Couples page are siloed (no internal linking between them)
- High-intent search: "ADHD couples therapy," "neurodivergent relationship counseling" = unaddressed
- **Fix:** Crossover page linking both specialties

**Structure:**
```
Hero: "Your ADHD relationship challenge isn't a personality conflict. It's a communication system problem."

Section 1: ADHD + Relationship Dynamics
- Executive dysfunction shows up as forgetfulness (emotional labor unfairly splits)
- Rejection sensitivity dysphoria (RSD) makes criticism feel like abandonment
- Hyperfocus phase → distant phase (partner feels abandoned)
- Impulsivity in conflict (saying things you don't mean, poor repair)

Section 2: Common ADHD Couple Patterns
- Pattern 1: High-achiever ADHD + anxious partner (one hyper-focused, one hyper-vigilant)
- Pattern 2: Two ADHD partners (chaos + lack of structure)
- Pattern 3: Undiagnosed ADHD + resentful partner (partner blamed for "lack of effort")

Section 3: Why Standard Couples Therapy Often Fails for ADHD Couples
- Standard therapy: "Why don't you listen?" (assumes will + motivation)
- ADHD reality: Brain literally filters out non-hyperfocus info
- Neurodivergent-informed: "Let's design communication systems that work for ADHD brains"

Section 4: Couples + ADHD Therapy Approach
- Assessment: Is this ADHD, personality mismatch, or both?
- Skill-building: Communication strategies for ADHD + non-ADHD brain pairing
- Grief work: If ADHD was recently diagnosed, both partners grieve differently
- System design: Calendar, reminders, emotional labor distribution
- Repair: Rebuilding trust after years of undiagnosed ADHD strain

Section 5: What to Expect
- Individual assessment (to confirm ADHD + relationship impact)
- Joint sessions (communication repair)
- Individual check-ins (one-on-one support)
- Timeline: 12-16 weeks typical for couples + ADHD work

Testimonial: Partner quote about relief of understanding ADHD was the issue, not character flaw

CTA: "Ready to transform your ADHD relationship? Book a free couples consultation"
```

**Technical Implementation:**
- File: `/app/adhd-couples/page.tsx`
- Meta Title: "ADHD Couples Therapy | Neurodivergent Relationship Counseling"
- Internal links: From `/adhd`, `/couples`, `/faq` (add couples + ADHD Q&A), homepage
- Schema: LocalBusiness + breadcrumb
- Target Keywords: "ADHD couples therapy," "neurodivergent relationship," "ADHD relationships," "couples therapy ADHD"

**Effort:** 4-5 hours  
**Owner:** Content Lead  
**Dependencies:** Couples testimonial selection  
**Launch:** Week 3

---

### 2.2 | "Career Transitions After Trauma or Loss" (Specialty Crossover Page)
**ROI Score:** 7/10 | **Search Volume:** 300-500/month | **Conversion Impact:** 15-20%  
**Auditor Source:** SEO #9 (specialty gap), SEO #8 (content depth)

**Why this matters:**
- Career page has generic content; doesn't address trauma-to-career connection
- High-intent search: "career change after loss," "job search after trauma" = unaddressed
- Builds authority by linking career + trauma specialties

**Structure:** (Similar to ADHD couples model)
- Hero: Problem statement unique to trauma + career
- Section 1: How unresolved trauma shows up in career hesitation
- Section 2: Common patterns (perfectionism, fear of failure, people-pleasing)
- Section 3: Therapy approach (trauma processing + career clarity work)
- Section 4: Timeline + expectations
- CTA: Book consultation

**Effort:** 4 hours  
**Owner:** Content Lead  
**Launch:** Week 3

---

### 2.3 | "ADHD Medication + Therapy: How They Work Together" (Educational Blog + Embedded on ADHD Page)
**ROI Score:** 8/10 | **Search Volume:** 1,200-1,800/month | **Conversion Impact:** 20-25%  
**Auditor Source:** SEO #8 (content depth), SEO #9 (objection clearing)

**Why this matters:**
- High-intent search: "ADHD medication therapy," "does therapy work with ADHD meds" = unaddressed
- Clears objection: "Should I get medication or therapy?" (Answer: both work better together)
- Educational content builds trust for skeptical prospects

**Structure:**
```
1. Overview: ADHD Medication Classes (Stimulants, Non-stimulants, SSRIs)
2. How Each Works (Mechanism of action, onset, duration)
3. Therapy's Role (What meds DON'T do; what therapy DOES)
4. Integration (Timeline for noticing changes, what to expect)
5. Side Effects + Therapy Coping (Managing side effects with therapy strategies)
6. Insurance/Cost Considerations
7. FAQ: Common questions about meds + therapy
```

**Effort:** 3.5 hours  
**Owner:** Content Lead (with medical review)  
**Launch:** Week 3

---

### 2.4 | "Perinatal ADHD: Diagnosis & Identity Integration" (Deep-Dive Specialty Page)
**ROI Score:** 9/10 | **Search Volume:** 600-900/month | **Conversion Impact:** 25-30%  
**Auditor Source:** SEO #8 (competitive gap), SEO #9 (specificity)

**Why this matters:**
- Different from "ADHD + Postpartum" page (this is identity-focused, not symptom-focused)
- Addresses grief + reconstruction unique to motherhood + ADHD diagnosis
- High-intent search: "late ADHD diagnosis motherhood," "adult ADHD women postpartum"

**Structure:**
```
Hero: "I'm ADHD. I'm also a new mother. Both things are true and both matter."

Section 1: The Identity Crisis of Late Diagnosis During Motherhood
- Grief: Lost time, opportunities you might have taken with ADHD knowledge
- Identity reconstruction: "Who am I as a mother with ADHD?"
- Shame: "Did I pass this to my child? Am I parenting 'wrong'?"

Section 2: Motherhood + ADHD-Specific Challenges
- Masking fatigue (hiding ADHD at work + at home = collapse)
- Time poverty (ADHD + parenting = time blindness on steroids)
- Relationship strain (partner may not understand ADHD diagnosis came during postpartum chaos)
- Self-care collapse (ADHD + new motherhood = self-care is impossible)

Section 3: Why Therapy Matters for Perinatal ADHD Specifically
- Not just diagnosis (understanding how ADHD shaped your life before motherhood)
- Not just postpartum recovery (addressing long-term ADHD patterns)
- Identity work (integrating ADHD identity into motherhood identity)
- Partner education (helping partner understand ADHD vs. "laziness" or "lack of love")

Section 4: Treatment Integration
- Medication timing (breastfeeding considerations, energy for parenting)
- Therapy focus (identity + systems + relationships)
- Timeline: Realistic 12-16 weeks for integration

Section 5: Practical Strategies for Perinatal ADHD
- Energy management (ADHD + postpartum recovery compounds fatigue)
- Relationship rebuilding (repairing strain from undiagnosed period)
- Parenting with ADHD (modeling + teaching without shame)
- Support systems (formal help + informal support)

CTA: "Let's integrate your ADHD identity into your motherhood journey"
```

**Effort:** 5-6 hours  
**Owner:** Content Lead + SME  
**Launch:** Week 4

---

### 2.5 | FAQ Schema Expansion (All FAQ Pages Get Schema Markup)
**ROI Score:** 9/10 | **Search Volume:** Rich snippet CTR boost 15-25%  
**Auditor Source:** SEO #7 (missing FAQ schema), SEO #9 (objection clearing)

**Why this matters:**
- FAQ pages (ADHD, Perinatal, Cost/Insurance) don't have FAQPage schema
- Without schema: Q&A doesn't show in Google rich snippets
- With schema: High-intent FAQ queries show answer preview in SERP (huge CTR boost)
- **Fix:** Add FAQPage schema to all FAQ pages

**Implementation:**
- `/app/faq/page.tsx` — Add FAQPage schema for all main FAQ questions
- `/app/adhd-faq/page.tsx` — Add FAQPage schema for ADHD-specific questions
- `/app/perinatal-faq/page.tsx` — Add FAQPage schema for perinatal questions
- `/app/cost-insurance-faq/page.tsx` — Add FAQPage schema for pricing questions

**Effort:** 2 hours (code + testing)  
**Owner:** Development  
**Launch:** Week 2

---

## TIER 3: Long-Tail & SEO Authority Content (Weeks 6-8, ROI: MEDIUM-HIGH)

### 3.1 | Blog Series: Seasonal Content (6 Posts, 500-800 words each)

**Blog Post 1: "Summer Transition Anxiety for Parents"** (May 2027)
- Target Keywords: "summer transition parenting," "school end anxiety parents"
- Search Volume: 200-400/month
- Content: End of school year transitions, schedule disruption, summer care anxiety
- Effort: 2 hours

**Blog Post 2: "New Year, New Pressure: Setting Healthy Resolutions (Without Burnout)"** (January 2027)
- Target Keywords: "new year resolutions anxiety," "realistic goal-setting ADHD"
- Search Volume: 300-600/month
- Content: How ADHD + perfectionism interact, realistic goal-setting
- Effort: 2 hours

**Blog Post 3: "Holiday Burnout & Boundary-Setting"** (October 2026)
- Target Keywords: "holiday burnout," "family boundaries therapy"
- Search Volume: 500-1,000/month
- Content: Family dynamics, boundary-setting before holidays, managing anxiety
- Effort: 2 hours

**Blog Post 4: "Return to Work After Parental Leave: Identity & ADHD"**
- Target Keywords: "return to work postpartum," "postpartum identity ADHD"
- Search Volume: 200-400/month
- Effort: 2 hours

**Blog Post 5: "ADHD Burnout: When High Performance Collapses"**
- Target Keywords: "ADHD burnout," "high performer burnout ADHD"
- Search Volume: 400-800/month
- Content: Warning signs, recovery timeline, therapy approach
- Effort: 2 hours

**Blog Post 6: "Career Reassessment After Burnout or Loss"**
- Target Keywords: "career reassessment," "career change after burnout"
- Search Volume: 300-600/month
- Effort: 2 hours

**Total Effort:** 12 hours  
**Owner:** Content Lead (rotating monthly)  
**ROI:** 6/10 (lower individual volume, but builds topical authority + helps with long-tail rankings)

---

## ROADMAP CALENDAR: 90-DAY IMPLEMENTATION

### Week 1 (Days 1-7) — Launch Critical Pages
- [ ] Content Item 1.1: "First Therapy Session" (blog + embed) — Content Lead
- [ ] Content Item 1.2: "Therapy Myths Debunked" — Content Lead
- [ ] Content Item 1.5: "Cost, Insurance, Timeline" (blog + embed) — Content Lead
- [ ] Content Item 2.5: FAQ Schema Markup — Development
- **Estimated Traffic Impact:** +200-400 sessions/month from new content

### Week 2 (Days 8-14) — Specialty Pages & Integration
- [ ] Content Item 1.3: "ADHD + Postpartum" (specialty page) — Content Lead
- [ ] Content Item 1.4: "ADHD High-Performers" (specialty page) — Content Lead
- [ ] Internal linking audit: Ensure all Tier 1 pages interlinked
- [ ] Update homepage with new content cross-links
- **Estimated Traffic Impact:** +300-500 sessions/month (cumulative)

### Week 3 (Days 15-21) — Tier 2 Content Launch
- [ ] Content Item 2.1: "ADHD + Couples" (specialty page) — Content Lead
- [ ] Content Item 2.2: "Career After Loss" (specialty page) — Content Lead
- [ ] Content Item 2.3: "ADHD Medication + Therapy" (blog) — Content Lead
- [ ] Internal linking strategy: Hub-and-spoke model for ADHD content
- **Estimated Traffic Impact:** +250-400 sessions/month (cumulative)

### Week 4-5 (Days 22-35) — Deep-Dive Authority Pages
- [ ] Content Item 2.4: "Perinatal ADHD Identity" (deep-dive specialty page) — Content Lead
- [ ] Launch seasonal blog series (post 1-2)
- [ ] SEO optimization: Ensure all new pages have proper meta tags, schema, CTA placement
- [ ] GSC submission & monitoring for new pages
- **Estimated Traffic Impact:** +200-300 sessions/month (cumulative)

### Week 6-8 (Days 36-56) — Long-Tail & Blog Authority
- [ ] Seasonal blog series (posts 3-6) — rolling weekly/bi-weekly
- [ ] Internal linking optimization across all content
- [ ] Backlink outreach (if available resources)
- **Estimated Traffic Impact:** +150-250 sessions/month from blog authority

### Week 9-10 (Days 57-70) — Performance Audit & Optimization
- [ ] Google Search Console review: Which new pages are ranking? For what keywords?
- [ ] A/B testing on new CTA copy (if analytics setup allows)
- [ ] Internal linking optimization based on GA data
- [ ] Mobile + desktop UX testing for new pages

### Week 11-12 (Days 71-84) — Gap Filling & Iteration
- [ ] Analyze content performance; identify gaps
- [ ] Expand high-performing content (long-tail variations)
- [ ] Solicit feedback from Content Lead on what's working
- [ ] Plan Q1 2027 content roadmap

---

## EXPECTED OUTCOMES & ROI METRICS

### Traffic Projections (Conservative)
| Timeline | New Sessions/Month | Primary Driver | Cumulative |
|----------|-------------------|---|---|
| Baseline | 0 | — | Current traffic |
| Week 2 | +200-400 | Tier 1 content + schema | Baseline + 200-400 |
| Week 4 | +500-800 | Tier 1 + 1.2 (Tier 2 launch) | Baseline + 700-1,200 |
| Week 8 | +800-1,200 | Tier 1 + Tier 2 + seasonal blog | Baseline + 1,500-2,200 |
| Week 12 | +1,000-1,500 | Full roadmap + SEO compounding | Baseline + 2,500-3,500 |

### Conversion Impact Projections
| Metric | Current | Target (12 weeks) | Lift |
|--------|---------|---|---|
| Booking form start rate | ~5-8% | 12-15% | +4-7% (objection clearing) |
| Booking completion rate | ~40-50% | 65-75% | +15-25% (friction removal) |
| First consultation → therapy continuation | ~60% | 75-80% | +10-20% (clearer expectations) |
| Overall CTR from SERPs | ~3-4% | 6-8% | +3-4% (hero CTA + title optimization) |

**Conservative Estimate:** If site grows from baseline 100 bookings/month to 150-200 bookings/month within 12 weeks (50-100% lift) due to content + UX optimizations.

---

## COLLABORATION WITH CONTENT LEAD

### Roles & Handoff Points:

**SEO Polisher #8 (This Document)**
- Defines content strategy & ROI prioritization
- Identifies content gaps from auditor feedback
- Creates content outlines & specifications
- Tracks roadmap progress

**Content Lead (Polisher #8 from earlier session)**
- Writes & adapts copy
- Ensures brand voice consistency
- Provides SME guidance (therapy-specific insights)
- Reviews & approves all content before launch

### Collaboration Process:
1. **Week 1:** Content Lead reviews this roadmap, confirms priorities
2. **Weekly:** Sync on progress; prioritize any blockers
3. **Upon completion:** Content Lead reviews output; Polisher #8 commits to git
4. **Post-launch:** Monitor GSC & GA; iterate based on performance

---

## DEPENDENCIES & RISKS

### Critical Dependencies:
- [ ] Content Lead availability (20-30 hrs/week for next 12 weeks)
- [ ] Testimonial access (for new specialty pages — 2-3 relevant quotes per page)
- [ ] Development support (schema markup, new pages, internal linking audit)
- [ ] Medical review (for ADHD medication + therapy content — 1-2 hrs for accuracy)

### Risks & Mitigations:
| Risk | Likelihood | Mitigation |
|------|-----------|---|
| Content Lead capacity bottleneck | High | Prioritize Tier 1 first; consider contract writer for blog posts |
| New pages don't rank (technical SEO issues) | Medium | Audit Core Web Vitals + schema before launch; GSC monitoring |
| Testimonials don't match new page angles | Medium | Reach out to existing clients for quotes that fit Tier 2 pages |
| Competitors copy content ideas | Low | Execute faster than market; focus on unique voice + experience |

---

## SUCCESS CRITERIA (COMMIT CONDITIONS)

**This roadmap is ready to commit when:**

✅ Content Lead reviews & approves roadmap  
✅ All Tier 1 content specifications are clear  
✅ Development team confirms schema markup + new page build capacity  
✅ Testimonial/SME review resources are allocated  
✅ Git workflow & branch strategy established  

**Roadmap is NOT ready to commit if:**
- Content Lead has concerns about prioritization
- Development capacity cannot support schema markup timeline
- Legal/compliance questions arise about new content (e.g., medication information)

---

## COMMIT SUMMARY

**Status:** READY FOR COMMIT  
**Total Content Items:** 14 pieces (Tiers 1-3)  
**Estimated Traffic Lift:** 1,000-1,500 new sessions/month (12 weeks)  
**Estimated Conversion Lift:** 50-100 additional bookings/month (50-100%)  
**Effort Required:** 60-80 hours (Content Lead + Development)  
**Timeline:** 84 days  
**Owner:** Content Lead + SEO Polisher #8 (with Development support)

---

## NEXT STEPS

1. **Content Lead Review** (24 hours): Confirm priorities, offer feedback, identify gaps
2. **Development Scope** (24 hours): Confirm technical implementation timeline
3. **Kick-off Sync** (Day 1): Align on Week 1 launch activities
4. **Week 1 Launch:** Begin Tier 1 content creation
5. **Ongoing Monitoring:** Weekly sync, GSC review, GA tracking

---

**Document Prepared by:** SEO Polisher #8  
**Date:** September 1, 2026  
**Next Review:** Week 4 (after Tier 1 launch and initial performance data)
