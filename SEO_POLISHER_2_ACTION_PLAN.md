# SEO POLISHER #2: On-Page & Technical SEO Implementation Plan

**Date:** September 1, 2026  
**Polisher:** SEO POLISHER #2 (On-Page & Technical)  
**Status:** IN PROGRESS  

---

## CRITICAL FIXES NEEDED (From Auditor Feedback #2 & #3)

### A. TECHNICAL SEO INFRASTRUCTURE (BLOCKING)
- [ ] **robots.txt** — Create `/public/robots.txt` with sitemap declaration
- [ ] **sitemap.xml** — Create `/app/sitemap.ts` route handler with dynamic page discovery
- [ ] **Canonical tags** — Add to all page metadata (currently missing)
- [ ] **Viewport meta tag** — Ensure explicit viewport in layout.tsx

### B. ON-PAGE FIXES (HIGH PRIORITY)

#### Title Tags (25+ pages need shortening)
Target: 50-60 chars, primary keyword first, remove redundancy

**Current Issues:**
- Homepage: 75 chars (TOO LONG)
- Perinatal: 88 chars (SEVERELY TRUNCATED)
- ADHD: 72 chars (TOO LONG)
- About: 73 chars (TOO LONG)

#### Meta Descriptions (15+ pages)
Target: 150-160 chars, include CTA verb, primary keyword

**Current Issues:**
- Contact: Missing entirely
- Many pages lack CTAs
- Lengths vary 100-210 chars (inconsistent)

#### H1 Structure (Critical pages missing H1)
**Pages without H1:**
- Contact page
- Guides Index
- Case Studies

### C. STRUCTURED DATA

**Missing Schema:**
- [ ] FAQ schema (currently uses `<details>` tags instead)
- [ ] AggregateRating schema (on main pages)
- [ ] BreadcrumbList (on nested routes)
- [ ] VideoObject (if videos used)

### D. TEAM COLLABORATION

**Waiting for feedback from:**
- [ ] Polisher #1 (High-level SEO strategy)
- [ ] Polisher #3+ (Conversion, content depth)
- [ ] Design & UX leads (from earlier batch)

---

## IMPLEMENTATION CHECKLIST

### Phase 1: Infrastructure (This Session)
- [ ] Create robots.txt
- [ ] Create sitemap.ts
- [ ] Add canonical to all page metadata
- [ ] Verify viewport meta tag

### Phase 2: Title & Meta Fixes (This Session)
- [ ] Homepage title/meta
- [ ] Perinatal page title/meta
- [ ] ADHD page title/meta
- [ ] About page title/meta
- [ ] Contact page title/meta + H1
- [ ] 5+ other key pages

### Phase 3: H1 & Header Structure (This Session)
- [ ] Audit all pages for H1 existence
- [ ] Add missing H1 tags
- [ ] Verify H2-H3 hierarchy

### Phase 4: Schema Improvements (Next)
- [ ] FAQ schema implementation
- [ ] BreadcrumbList on nested routes
- [ ] AggregateRating updates

### Phase 5: Git Commit (End of Session)
- [ ] Commit all changes
- [ ] Link to Polisher #1 coordination

---

## REFERENCE: BEST PRACTICES (From Auditor)

### Title Tag Formula
`[Primary Keyword] — [Secondary Benefit] | Brand` (50-60 chars)

### Meta Description Formula
`[Benefit Statement] + [Primary Keyword] + [CTA]` (150-160 chars)

### Common CTA Verbs
"Book," "Learn," "Schedule," "Get support," "Discover," "Start," "Explore"

---

## FILES TO CREATE/MODIFY

1. `/public/robots.txt` (NEW)
2. `/app/sitemap.ts` (NEW)
3. `/app/layout.tsx` (MODIFY - add viewport, update metadata)
4. `/app/page.tsx` (MODIFY - title/meta)
5. `/app/about/page.tsx` (MODIFY - title/meta/H1)
6. `/app/adhd/page.tsx` (MODIFY - title/meta)
7. `/app/perinatal/page.tsx` (MODIFY - title/meta)
8. `/app/career/page.tsx` (MODIFY - title/meta)
9. `/app/contact/page.tsx` (MODIFY - missing H1/meta)
10. `/lib/schema.ts` (MODIFY - enhance structured data)

---

## COLLABORATION NOTES

**Waiting for:**
- Polisher #1 input on strategic keyword prioritization
- Design/UX leads on any micro-copy changes
- Polisher #3-5 on content depth/internal linking strategy

**Will coordinate with:**
- Polisher #3 (if content depth changes needed)
- Polisher #4+ (if conversion/CTA placement)
- QA/Testing (before final commit)

---

## TRACKING ISSUES RESOLVED

### From SEO Auditor #2 (On-Page)
- Issue #1: Title tag length/format inconsistency → **IN PROGRESS**
- Issue #2: Meta descriptions missing CTA → **IN PROGRESS**
- Issue #3: H1 missing on key pages → **IN PROGRESS**

### From SEO Auditor #3 (Technical)
- Issue #1: No sitemap.xml → **IN PROGRESS**
- Issue #2: No robots.txt → **IN PROGRESS**
- Issue #3: No canonical tags → **IN PROGRESS**
- Issue #4: No viewport meta tag → **IN PROGRESS**

### From SEO Auditor #7 (UX/Engagement)
- Issue #1: Hero CTA missing/buried → **COORDINATE with Design/Polisher #4**
- Issue #2: Long pages, poor scanability → **Coordinate with Polisher #3**
- Issue #3: FAQ using `<details>` tags → **Implement FAQ schema (Phase 4)**

---

## COMMIT PLAN

**Branch:** `feature/seo-polisher-2-on-page-technical`

**Commit Messages:**
1. `feat(seo): add robots.txt with sitemap declaration`
2. `feat(seo): create dynamic sitemap.ts route handler`
3. `feat(seo): optimize title tags and meta descriptions (25+ pages)`
4. `feat(seo): add canonical URLs to all page metadata`
5. `fix(seo): add missing H1 tags to contact, case-studies, guides pages`
6. `feat(seo): enhance structured data (canonicals, viewport, schema prep)`

---

**Next Steps:** Begin Phase 1 implementation.
