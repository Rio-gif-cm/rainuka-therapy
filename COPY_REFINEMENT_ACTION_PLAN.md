# Copy Refinement Action Plan — POLISHER #3

**Date:** September 1, 2026  
**Status:** Implementation in progress  
**Critic Feedback Source:** COPY_PLACEMENT_TONE_AUDIT.md (25+ issues identified)

---

## Executive Summary

The critic audit identified 25 specific copy issues across the site, organized into 9 categories:
- **Sentence Length Monotony** (6 issues) → Add rhythm variation
- **Vague Language** (8 issues) → Replace adjectives with specifics + data
- **Tone Consistency** (5 issues) → Standardize pronouns, remove emoji
- **Word Placement** (4 issues) → Move verbs forward, remove interruptions
- **Repetition** (2 issues) → Remove "real," replace "support" with specific terms
- **Corporate Drift** (3 issues) → Replace "approach," "affirm" with client-centered phrasing
- **Lists & Structure** (4 issues) → Add visual breaks, emotional flow
- **Transitions** (3 issues) → Clear headers, bridge tones
- **Authority/Specificity** (3 issues) → Add numbers, timelines, outcomes

**Implementation focus:** Top 5 categories = 85% of impact.

---

## TOP PRIORITY FIXES (High Impact, Fast Execution)

### 1. Remove "Real" Repetition (Homepage)
**Issue:** 7 instances of "real" on homepage  
**Impact:** Corporate, filler language reduces clarity  
**Status:** ⏳ PENDING

| Before | After |
|--------|-------|
| "Real tools" | "Tools you'll use Monday morning" |
| "Real feedback" | "What clients report" |
| "Real clients" | [Attribute first name + context] |

### 2. Standardize Pronouns (About Page)
**Issue:** Shifts between "I" and "we" create distance  
**Impact:** "We" feels corporate; "I" feels intimate + therapeutic  
**Status:** ⏳ PENDING

| Before | After |
|--------|-------|
| "We move at your pace" | "I track your pace" |
| "Your nervous system matters" | "Your nervous system matters. I'm tracking it." |

### 3. Replace "Support" (All Pages)
**Issue:** 8+ instances; corporate word that dilutes specificity  
**Impact:** Therapy is specific action, not generic support  
**Status:** ⏳ PENDING

| Before | After |
|--------|-------|
| "Perinatal support" | "Grief therapy for postpartum loss" |
| "Specialized support" | "ADHD diagnosis and coaching" |
| "Career support" | "Rebuilding after burnout" |

### 4. Vary CTA Language (All Pages)
**Issue:** "Book Your Consultation" appears 4+ times  
**Impact:** Repetition reduces click urgency  
**Status:** ⏳ PENDING

| Location | Current | New |
|----------|---------|-----|
| Hero | "Book Your Consultation" | "Start Your Free Conversation" |
| Specialty pages | "Book a Call" | "Schedule a Free Call" |
| Bottom section | "Get Started" | "Get Started" (keep) |
| FAQ area | "Book" | "Let's Talk" |

### 5. Break Long Paragraphs (About Page)
**Issue:** Paragraphs 4-7 sentences; scanner fatigue  
**Impact:** <3 sentence paragraphs convert 50-78% better  
**Status:** ⏳ PENDING

---

## MEDIUM PRIORITY FIXES (Secondary Impact)

### 6. Remove Emoji (Perinatal Page)
**Issue:** 🤰 emoji undercuts seriousness of grief  
**Status:** ⏳ PENDING

### 7. Replace Vague Words
**Audit Finding:** "significant," "meaningful," "real connection" need data  
**Status:** ⏳ PENDING

### 8. Fix Awkward Placement
**Issue:** Parenthetical "(LCSW)" interrupts flow  
**Before:** "Licensed Clinical Social Worker (LCSW) in good standing"  
**After:** "Licensed Clinical Social Worker. My license is verified and in good standing."  
**Status:** ⏳ PENDING

### 9. Add Numbering to Claims
**Issue:** "8 of 10 clients" beats "significant improvement"  
**Status:** ⏳ PENDING

---

## IMPLEMENTATION CHECKLIST

### Pages to Review & Patch
- [ ] `app/page.tsx` (Homepage)
- [ ] `app/about/page.tsx` (About)
- [ ] `app/perinatal/page.tsx` (Perinatal specialty)
- [ ] `app/adhd/page.tsx` (ADHD specialty)
- [ ] `app/career/page.tsx` (Career specialty)
- [ ] Components: `CTAButton`, Testimonials, FAQ sections

### Testing After Changes
- [ ] "20-second benefit test" passes (can someone understand value in 20s?)
- [ ] Tone is warm (not clinical, not corporate)
- [ ] Specificity check (no vague words)
- [ ] Rhythm check (sentence length varies)
- [ ] Build passes: `npm run build` ✓
- [ ] Deploy: `git push origin main` ✓

### Word Economy Metrics
- Hero section: 39% reduction target (203 → 124 words)
- Testimonials: 47% reduction target (356 → 187 words)
- FAQ: 23% reduction target
- Page content: All paragraphs ≤3 sentences
- CTAs: All ≤6 words, action verb first

---

## PARALLEL COORDINATION

**Working WITH:** Polishers 1, 2, 4-10  
**Handing TO:** Design & UX for integration  
**Share drafts:** Will post rewrites to `/docs/COPY_REFINEMENT_DRAFTS/` for team feedback

---

## NEXT STEPS

1. ✅ **Audit received** – 25 issues documented
2. ⏳ **Implement top 5 fixes** – Begin with homepage "real" removal
3. ⏳ **Test locally** – Verify tone, rhythm, clarity
4. ⏳ **Share draft rewrites** – Get feedback from Design & UX leads
5. ⏳ **Refine based on feedback** – Iterate with team
6. ⏳ **Build & deploy** – Commit changes, push to production

---

**Status:** Starting implementation of fix #1 (Remove "real" repetition)
