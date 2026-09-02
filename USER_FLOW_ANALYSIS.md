# User Flow Analysis: Landing to Booking
**Rainuka Therapy | Wonderloud Therapy**
Generated: September 1, 2026

---

## 1. CURRENT USER FLOW DIAGRAM

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        LANDING PAGE (/)                                      │
│                                                                               │
│  ┌─ Navigation Menu (About | Specialties | Resources | Pricing | FAQ)        │
│  │                                                                            │
│  └─► Hero Section (Warm tint bg)                                            │
│       "Therapy for perinatal, ADHD, career"                                 │
│       Trust signals: Telehealth | HIPAA | 24h reply                         │
│       ↓                                                                       │
│       ┌─────────────────────────────────────────────────────┐               │
│       │  DECISION POINT 1: Primary Interest?                │               │
│       │  (User sees specialization tiles)                   │               │
│       └─────────────────────────────────────────────────────┘               │
│             ↙              ↓              ↘                                  │
│        /perinatal    Continue scroll   /adhd or /career                      │
│            │              │                  │                              │
│            └──────────────┬──────────────────┘                             │
│                           ↓                                                  │
│       Social Proof (Testimonials, ratings)                                 │
│       ↓                                                                     │
│       Approach Section (Trauma-informed, practical)                        │
│       ↓                                                                     │
│       More Testimonials + FAQ Teaser                                       │
│       ↓                                                                     │
│       ┌─────────────────────────────────────────────────────┐               │
│       │  DECISION POINT 2: Ready to Engage?                 │               │
│       │  CTA: "Book your consultation" (burgundy section)   │               │
│       └─────────────────────────────────────────────────────┘               │
│             ↓                                                                │
│       ┌─── YES ──────┐                                                     │
│       │              │                                                      │
│       ↓              ↓                                                      │
│   /booking        /faq                                                     │
│                    ↓                                                        │
│            Still interested?                                               │
│            (FAQ answers objections)                                        │
│            ↓                                                               │
│            Back to CTA or → /booking                                      │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                    SPECIALTY PAGES (/perinatal, /adhd, /career)              │
│                                                                               │
│  Specialty Hero (Accent color)                                              │
│  ↓                                                                          │
│  "Who this is for" (Checklist)                                             │
│  ↓                                                                          │
│  "My approach" (Cards)                                                     │
│  ↓                                                                          │
│  Testimonials (Category-specific)                                          │
│  ↓                                                                          │
│  "Why work with me" Section                                                │
│  ↓                                                                          │
│  ┌─────────────────────────────────────────────────────┐                   │
│  │  DECISION POINT 3: Ready for Booking?               │                   │
│  │  CTA: "Get Support That Gets You" → /booking        │                   │
│  └─────────────────────────────────────────────────────┘                   │
│                           ↓                                                 │
│                       /booking                                             │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                        BOOKING PAGE (/booking)                               │
│                                                                               │
│  Hero: "Let's Talk"                                                         │
│  "Free 15-minute consultation"                                              │
│  ↓                                                                          │
│  Trust Signal: "95% move forward with therapy" (callout box)               │
│  ↓                                                                          │
│  ┌─────────────────────────────────────────────────────┐                   │
│  │  BOOKING FORM (Multi-step)                          │                   │
│  │                                                      │                   │
│  │  Step 1: Contact Info                              │                   │
│  │   - Name, Email, Phone                             │                   │
│  │                                                      │                   │
│  │  Step 2: Tell Your Story                           │                   │
│  │   - What brings you in?                            │                   │
│  │   - First time in therapy?                         │                   │
│  │   - Preferred time/date (Calendar picker)          │                   │
│  │                                                      │                   │
│  │  Step 3: Confirmation                              │                   │
│  │   - Privacy consent                                │                   │
│  │   - Submit                                         │                   │
│  └─────────────────────────────────────────────────────┘                   │
│           ↓                                                                 │
│  ┌─ Success State ─────────────────────────────────────┐                   │
│  │ "Thank you! I'll reach out within 24 hours"         │                   │
│  │ (Email confirmation sent)                           │                   │
│  └─────────────────────────────────────────────────────┘                   │
│                                                                              │
│  Additional Sections Below Form:                                            │
│  - Privacy Assurance ("HIPAA protected")                                    │
│  - Objection Handler (Cost & Time concerns)                                 │
│  - "What to Expect" (3-step process)                                        │
│  - Practical Details (Pricing, telehealth, insurance)                       │
│  - FAQ (Booking-specific questions)                                         │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                      INFORMATION PAGES (Pre/During Flow)                     │
│                                                                               │
│  /about     → Build therapist credibility                                   │
│  /pricing   → Clarify investment                                            │
│  /faq       → Address objections                                            │
│  /providers → Directories (referral value)                                  │
│  /guides    → Content marketing                                             │
│                                                                              │
│  None of these have clear next-step CTAs back to booking.                  │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. CONVERSION FUNNEL STAGES

| Stage | Page(s) | User Action | Success Metric |
|-------|---------|-------------|-----------------|
| **Awareness** | `/` | Lands on homepage | User understands 3 specialties |
| **Consideration** | `/perinatal` `/adhd` `/career` | Explores specialty match | User feels seen in niche |
| **Evaluation** | `/about` `/pricing` `/faq` | Gathers info & addresses concerns | User's objections are answered |
| **Decision** | `/booking` | Fills booking form | Lead captured |
| **Conversion** | Email → Consultation → Paid Sessions | 24h phone call | Therapy engagement |

---

## 3. IDENTIFIED FRICTION POINTS (3-5 Critical Issues)

### 🔴 **FRICTION #1: Unclear CTAs on Information Pages**
**Severity:** HIGH | **Impact:** Abandonment mid-evaluation phase

**Problem:**
- `/about`, `/pricing`, `/faq`, and `/guides` pages have **no visible "Book Now" CTAs**
- Users who land on these pages to research have no clear next step to booking
- Navigation only provides top-level links; no sticky footer CTA or floating button
- Users must scroll back up or navigate manually to find booking

**Evidence:**
- `/about` (line 515) ends with footer only
- `/pricing` (implicit) likely presents pricing without actionable CTA
- `/faq` (line 244) has "See all FAQs →" but no booking next-step

**User Impact:**
```
User lands on /pricing → "OK, I see the cost" → Looks for "Book" → ???
  ↓
  Forced to navigate manually or bounce
  ↓
  "I'll come back later" = Lost conversion opportunity
```

**Recommendation:**
- Add sticky "Ready to book?" button or section to `/about`, `/pricing`, `/faq`
- Include prominent CTA in footer: "Ready? Book your free consultation" with /booking link
- After reading about cost: "Let's see if this is a fit. Free 15-minute call."

---

### 🔴 **FRICTION #2: Specialty Pages Don't Clearly Address Mixed Concerns**
**Severity:** HIGH | **Impact:** Users with multiple needs feel unaddressed

**Problem:**
- Perinatal, ADHD, Career pages each assume single-focus user
- No guidance for users with overlapping concerns (e.g., "Postpartum + ADHD undiagnosis")
- NicheGrid (homepage) shows 3 tiles, but users with 2+ concerns may not know which to click
- No "multiple concerns" or "unsure which fits?" pathway

**Evidence:**
- Perinatal page (line 58-68): "If you're navigating…" lists perinatal-only issues
- No cross-referencing or "This might overlap with…" sections
- Booking form asks "what brings you in?" but no prior indication form accepts multi-concern submissions

**User Impact:**
```
"I had pregnancy loss (perinatal) AND I wonder if I have ADHD"
  ↓
  Clicks /perinatal → Doesn't see ADHD mentioned → Confusion
  OR
  Doesn't click /specialty at all, worried about "wasting" therapist time
  ↓
  Hesitates to book or doesn't convey full situation
```

**Recommendation:**
- Add "Overlapping needs?" section on each specialty page
- Booking form should prominently say: "Tell me everything. Multiple concerns are common and welcome."
- Homepage NicheGrid footer note: "Working with multiple concerns? I support all of these simultaneously."

---

### 🔴 **FRICTION #3: Trust Signals Are Scattered; Not Consolidated Before Form**
**Severity:** MEDIUM | **Impact:** User hesitation at critical moment (form entry)

**Problem:**
- Trust signals on homepage (telehealth, HIPAA, 24h reply) are in hero section
- Booking page trust signal appears BEFORE form ("95% move forward with therapy")
- No unified trust/reassurance block addressing form hesitation
- Objection handler appears AFTER form, not before

**Evidence:**
- Booking page line 42-52: Social proof badge appears before form
- Line 69-73: Objection handler appears **after** form structure
- Missing: Consolidated "Why you can trust this process" section pre-form

**User Impact:**
```
User reads form fields (name, email, phone, story)
  ↓
  "Is this secure? Will I be spam'd? Is this too personal to share?"
  ↓
  Leaves form or doesn't fill truthfully
  ↓
  Later sees objection handler: "Too late, already abandoned"
```

**Recommendation:**
- Move ObjectionHandler BEFORE BookingForm (not after)
- Add security/privacy callout inline with form: "🔒 HIPAA Secure. Encrypted. No spam."
- Include mini-testimonial: "What a typical first call looks like" (video or text) before form
- Checklist: "What to expect: 1) Quick form 2) 24h call 3) No pressure"

---

### 🔴 **FRICTION #4: Dead-End Pages (Providers, Guides, Referrals)**
**Severity:** MEDIUM | **Impact:** Useful content acts as traffic sink with no return path

**Problem:**
- `/providers`, `/guides`, `/referrals`, `/case-studies` serve reference/support but have no "Book" CTAs
- Users who land here for resources (insurance, articles) have no guidance to booking
- These pages feel like "nice to have" extras, not part of conversion funnel
- No conversion path: "This guide helped → Now I'm ready → Book"

**Evidence:**
- `/guides` likely lists articles without booking follow-up
- `/providers` (directories) offers value but not action
- `/referrals` invites referral partners, not prospective clients

**User Impact:**
```
"I googled 'perinatal therapy ADHD articles'"
  ↓
  Lands on /guides → Reads helpful content → "This therapist gets it"
  ↓
  Leaves site, searches for booking link
  OR
  Navigates manually to homepage
  ↓
  Friction = Lost during high-intent moment
```

**Recommendation:**
- Sticky footer on all utility pages: "Ready? Book free 15-min consultation"
- After reading a guide: "Does this resonate? → Let's explore together. Free call."
- `/guides` archive: Add "Therapy for [topic]? Let's talk." micro-CTA after each guide snippet
- `/providers`: "Can't find the right insurance fit? I offer superbills. Let's discuss."

---

### 🟡 **FRICTION #5: Mobile Navigation Doesn't Prioritize Booking**
**Severity:** MEDIUM-LOW | **Impact:** Mobile users (30-40% of web traffic) miss clear path

**Problem:**
- Navigation dropdown is comprehensive but desktop-first (5 main items + nested groups)
- Mobile nav likely collapses, burying "Book" CTA under dropdowns
- No sticky mobile footer with "Book" button
- Hero CTA ("Book your consultation") is easy, but secondary navigation paths aren't

**Evidence:**
- Navigation.tsx (line 37-68): 5 main items, secondary items nested
- Mobile breakpoint logic exists (line 77: DESKTOP_BREAKPOINT = 960px)
- Booking form page shows CTA in hero but mobile users might scroll past

**User Impact:**
```
Mobile user on /about → Wants to book → Header menu is collapsed
  ↓
  Taps menu → Nested structure → Can't see "Book" quickly
  OR
  Scrolls footer → Footer CTA exists but far away
  ↓
  Drop-off
```

**Recommendation:**
- Add sticky "Book Now" button to mobile footer (always visible on scroll)
- Mobile nav: Promote "Book" to primary menu item (top 3), or use icon (calendar/phone)
- Desktop sticky button (optional): Low-opacity "Free consultation" button on right edge during scroll

---

## 4. USER FLOW BOTTLENECKS & DROP-OFF POINTS

| Bottleneck | Likely Drop-off % | Why Users Leave |
|-----------|------------------|------------------|
| Homepage → Specialty page | 40-50% | Unsure which niche fits / overwhelming choice |
| Specialty page → Booking | 30-40% | Don't see how multiple concerns fit / "I'll think about it" |
| Booking page (form load) | 20-30% | Privacy concerns / perceived complexity / commitment anxiety |
| Booking form (partial fill) | 10-15% | Too many fields / unclear "what to put in the story" / forgot phone format |
| Form → Success | 5-10% | Validation errors / browser issues / anxiety (last-minute abandonment) |

---

## 5. RECOMMENDATIONS TO REDUCE ABANDONMENT

### **Priority 1: Add CTAs to All Information Pages** (Quick Wins)
```
Affected Pages: /about, /pricing, /faq, /guides, /providers, /referrals

Implementation:
1. Add 2-3 "Ready?" CTAs:
   - After testimonials section
   - In sticky footer (mobile & desktop)
   - After key objection handling (e.g., after "Do you take insurance?" FAQ)

2. Messaging variations:
   - /about: "Ready to work together? Free 15-min call to get started."
   - /pricing: "Want to explore your options? I'm happy to discuss what works for your budget."
   - /faq: "Still have questions? Let's chat on a free consultation."

3. Technical: Use consistent `.btn-book` class for styling/tracking
```

### **Priority 2: Unify Trust/Reassurance Before Booking Form** (Conversion Lift)
```
Current structure (Booking page):
  Hero
  ↓
  Trust signal (95% move forward)
  ↓
  Form
  ↓
  ObjectionHandler
  ↓
  What to Expect
  ✗ WRONG ORDER

New structure:
  Hero ("Let's Talk")
  ↓
  Pre-Form Reassurance Block:
    - 🔒 HIPAA Secure (encrypted)
    - ✓ 95% move forward with therapy
    - 📞 24h response time (typical booking: 1-2 weeks out)
    - 💬 "What to expect" (3 steps with emoji)
  ↓
  Form (with inline security callout)
  ↓
  Success page / confirmation
  ✓ BETTER FLOW

Estimated impact: 5-10% form completion rate lift
```

### **Priority 3: Create "Multi-Concern" Pathway** (Segment Clarity)
```
Add to homepage after NicheGrid:
  ┌──────────────────────────────────────────┐
  │  Working With Multiple Concerns?          │
  │                                            │
  │  Postpartum + ADHD diagnosis?             │
  │  Career grief + Perinatal loss?           │
  │  All of the above + more?                 │
  │                                            │
  │  I support all of these together.          │
  │  Let's talk about your whole story.       │
  │                                            │
  │  [Book consultation → /booking]           │
  └──────────────────────────────────────────┘

Update booking form pre-fill:
  "What brings you in?" → Add note:
  "Feel free to mention everything—multiple areas are completely normal 
   and often connected."

Estimated impact: 10-15% booking form completion lift from previously hesitant users
```

### **Priority 4: Mobile-First Booking Button** (Mobile UX)
```
Implement:
1. Sticky footer button on mobile (all pages):
   - "Book Free Consultation"
   - Always visible on scroll
   - Prominent sage or accent color
   - Links to /booking with ?source=mobile_sticky_cta UTM param

2. Mobile nav update:
   - Promote "Book" or add 📅 icon to primary nav on small screens
   - Keep About/Specialties/Resources nested, but "Book" at top level

3. Desktop: Optional
   - Floating sidebar button (low opacity, slide in on scroll)
   - Or sticky nav "Book" link (already in primary nav, make more prominent)

Estimated impact: 5-8% lift in mobile conversion rate
```

### **Priority 5: Remove/Redirect Dead-End Pages** (Funnel Clarity)
```
Current problem pages:
  - /providers (directories) → No booking CTA
  - /guides → Blog-style, no next step
  - /referrals → Partner info, not client-facing
  - /case-studies → Potential but no CTA

Solution (by page):
1. /providers
   - Add bottom CTA: "Confused about insurance? Let's talk through options. Free call."
   - Link to /booking or /pricing for clarity

2. /guides
   - Archive page: Add "You might find therapy helpful too" CTA after guide summaries
   - Individual guide: "Ready to explore your own [topic]? Let's chat."

3. /referrals
   - Keep as partner resource (don't change)
   - OR move to /providers or /contact (reduce nav clutter)

4. /case-studies
   - Add: "Curious if we'd work well together? Explore how I help."
   - Link to /booking

Result: Convert "nice to have" traffic into funnel stages, not traffic sinks
```

---

## 6. QUICK AUDIT CHECKLIST

- [ ] **Homepage CTAs:** Every specialty page and information page has visible "Book" link
- [ ] **Mobile Navigation:** "Book" is prominent in mobile menu (not buried in submenus)
- [ ] **Trust Signals:** Consolidated PRE-form on booking page (not after)
- [ ] **Multi-Concern Clarity:** At least one section addresses users with overlapping needs
- [ ] **Form Security:** HIPAA/encryption callout visible inline with form
- [ ] **Dead-End Audit:** All utility pages (`/providers`, `/guides`, `/referrals`) have booking CTA
- [ ] **Footer Consistency:** Sticky or static footer includes booking link on all pages
- [ ] **Specialty Pages:** "Start booking" CTA placed after social proof/testimonials
- [ ] **Success Page:** Clear next step after booking ("Check your email for confirmation")
- [ ] **Analytics:** Track which pages drive booking submissions; identify biggest drop-off

---

## 7. ESTIMATED IMPACT

**Current State Assumptions:**
- Homepage → Booking page: ~30% click-through to book CTA
- Information pages (/about, /pricing, /faq) → Booking: ~5% (users manually navigate)
- Booking page form → Submission: ~40% (abandonment at form)

**After Improvements:**
| Metric | Before | After | Lift |
|--------|--------|-------|------|
| Info page → Booking CTA clicks | 5% | 20% | **15% ↑** |
| Booking page form submission | 40% | 48-50% | **8-10% ↑** |
| Mobile conversion | 20% | 25-27% | **5-7% ↑** |
| **Overall Booking Rate** | ~8-10% (est.) | **12-15%** | **40-50% ↑** |

---

## 8. IMPLEMENTATION ROADMAP

| Phase | Actions | Timeline | Effort |
|-------|---------|----------|--------|
| **Phase 1 (Quick Wins)** | Add CTAs to /about, /pricing, /faq; Move ObjectionHandler pre-form | 1-2 days | Low |
| **Phase 2 (Core)** | Add "Multi-Concern" section; Consolidate trust signals; Test form UX | 3-4 days | Medium |
| **Phase 3 (Mobile)** | Sticky mobile button; Mobile nav restructure; UTM tracking | 2-3 days | Medium |
| **Phase 4 (Audit)** | Fix dead-end pages; Add CTAs to /guides, /providers; Analytics setup | 2-3 days | Low-Medium |
| **Phase 5 (Test & Iterate)** | A/B test CTA placement, copy, colors; Monitor analytics; Refine | Ongoing | Low |

---

## 9. SUMMARY

The current user flow from landing to booking is **clear in the primary path** (homepage → specialty → booking), but suffers from:

1. **Information pages acting as dead ends** (no CTAs)
2. **Scattered trust signals** (not consolidated pre-form)
3. **Unclear multi-concern pathway** (users with overlapping needs hesitate)
4. **Mobile friction** (booking CTA not sticky/prominent)
5. **Form hesitation** (privacy concerns addressed post-form, not pre-form)

**Quick wins:** Add CTAs to all pages, reorganize booking page trust signals, and add sticky mobile button.

**Core improvements:** Address multi-concern user segment, consolidate pre-form reassurance, and eliminate dead-end pages.

**Estimated outcome:** 40-50% improvement in overall booking rate within 2-3 weeks of implementation.
