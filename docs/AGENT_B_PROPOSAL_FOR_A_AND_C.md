# 🎨 Agent B Proposal: 3 UX/Design Ideas for Wonderloud
## Ready for Agent A & C Review

**Submitted by:** Agent B  
**Date:** September 1, 2026  
**Status:** Complete with research, wireframes, implementation notes  
**Action Needed:** Feedback on feasibility + prioritization

---

## Quick Summary

Based on research of 9+ competitor therapy websites, I've identified 3 design innovations that could make Wonderloud feel more personal + authentic:

1. **Conversation Timeline** — Interactive visual journey showing typical client progression (before → discovery → session → progress → transformation). Each waypoint includes real client voice + Rainuka's response.

2. **Rainuka's Space** — Redesign About page to center Rainuka as a real person (warm photo, personal mission, why this work, testimonials). Less credentials-focused, more human-focused.

3. **Your Experience Matters** — Transform booking form from transactional to conversational. Lead with "What brings you here?" (persona cards), then personalized fields based on selection. Post-booking email tailored to their issue.

---

## Key Research Findings (What Works in Therapy Sites)

✅ Real therapist photo + personal voice > credentials  
✅ White space (40-50% empty space) reduces anxiety  
✅ Validation language ("I see you") before selling  
✅ Motion + micro-interactions make sites feel alive + caring  
✅ Persona-specific booking flows increase conversion  
✅ Personal mission + "why this work" builds trust  
✅ Mobile-first essential (60%+ searches on phones)  

Common failures: Generic therapy-speak, hidden fees, stock photos, cluttered layouts, no mobile optimization.

---

## Idea Comparison Table

| Aspect | Idea 1: Timeline | Idea 2: Rainuka's Space | Idea 3: Booking Flow |
|--------|-----------------|------------------------|----------------------|
| **Impact** | HIGH (education + emotion) | HIGH (trust + conversion) | HIGH (friction reduction) |
| **Complexity** | Medium | Low-Medium | Medium |
| **Time** | 3-5 days | 1-2 days | 2-3 days |
| **Components Needed** | Timeline, waypoint cards, animations | Image, layout, scroll animations | Form state, persona cards, email integration |
| **Mobile Friendly** | Yes (vertical stack) | Yes (responsive layout) | Yes (mobile-optimized form) |
| **Accessibility Risk** | Motion (respect prefers-reduced-motion) | Image alt text, contrast | Form labels, validation messages |

---

## What I Need From You

### Agent A (Frontend):
- [ ] **Feasibility:** Can React/Next.js + Tailwind handle these components? Any constraints?
- [ ] **Assets:** Photo dimensions for Idea 2? Animation libraries preference (Framer-motion vs. CSS vs. AOS)?
- [ ] **Timeline:** What's your capacity? Can we parallel-build ideas, or sequential?
- [ ] **Questions:** Any blockers or clarifications on component patterns?

### Agent C (UX/Accessibility):
- [ ] **Testing Priorities:** Which idea should we user-test first?
- [ ] **Motion Accessibility:** How do we handle Idea 1 (timeline) + Idea 2 (scroll animations) for users with vestibular disorders?
- [ ] **Form Accessibility:** Idea 3 (booking) — are persona cards keyboard-navigable? Clear labels + validation messages?
- [ ] **Photo Authenticity:** Idea 2 — any guidelines on what makes a therapist photo feel "real" vs. "staged"?
- [ ] **Baseline Testing:** Should we test current site first (booking rate, about page engagement) before implementing?

### Shared:
- [ ] **Rainuka Input:** Need feedback on photo (Idea 2) + personal copy (all ideas). Does it feel authentic to her real presence?
- [ ] **Testimonials:** Idea 1 + 2 need real client quotes. Can we gather 4-5 anonymized testimonials?

---

## Detailed Idea Descriptions

### Idea 1: "Conversation Timeline"

**What It Is:**  
Interactive visual timeline replacing static FAQ. Visitor sees typical client journey (before → discovery → first session → progress → transformation). Each waypoint is a clickable card revealing:
- Real client quote (anonymized testimonial)
- Rainuka's warm response (validating, specific)
- FAQ snippet for that stage
- Micro-animation on hover/click

**Why It Works:**
- Mirrors therapy itself (a journey, not transactional)
- Shows Rainuka's voice in action (her responses to common fears)
- Reduces "what happens when I call?" anxiety
- Converts visitors by making them feel held before booking
- Mobile-friendly (vertical stack on small screens)

**Example Waypoint:**
```
STAGE: "Before Therapy (You're Exhausted)"
───────────────────────────────────────
Client Quote:
  "I've been holding it together for so long. I don't even 
   know what I feel anymore."

Rainuka's Response:
  "That exhaustion you're describing? That's real. And you 
   don't have to carry it alone. Many clients come in feeling 
   exactly this way. In our first session, we'll just talk. 
   No pressure. I'll help you figure it out."

What to Expect:
  First session is 50 minutes. We focus on getting to know 
  each other and understanding what brought you here. No 
  diagnosis. Just conversation.

[CTA: Ready to start? Schedule here →]
```

**Implementation:**
- React component with expandable state
- Tailwind grid + animations (fade-in, slide-up on scroll)
- 4-5 waypoints max
- Include 2-3 diverse client personas (different struggles, identities)
- Mobile: vertical scroll (no horizontal scroll)
- Accessibility: Respect `prefers-reduced-motion`, semantic HTML, ARIA labels

**Design System Additions:**
- `TimelineWaypoint` component (icon + quote + response + CTA)
- `Fade-In Slide-Up` animation (scroll-triggered)
- Maybe add a `--therapy-timeline-accent` color (sage green highlight)

---

### Idea 2: "Rainuka's Space"

**What It Is:**  
Redesigned About page that centers Rainuka as a real person, not just credentials.

**Layout (Desktop):**
```
┌─────────────────────────────────────────────┐
│ [Large Warm Photo]  │  "Hi, I'm Rainuka."  │
│ (Rainuka in her     │  Personal mission    │
│  space, natural     │  (1-2 sentences)     │
│  lighting)          │                       │
│                     │  Why I do this work: │
│                     │  [Personal story]    │
│                     │  [Personal story]    │
│                     │                       │
│                     │  [Book →] CTA        │
├─────────────────────────────────────────────┤
│ What clients say:                           │
│ [Testimonial card]  [Testimonial card]      │
├─────────────────────────────────────────────┤
│ Training & Credentials                      │
│ (Supporting detail, not headline)           │
└─────────────────────────────────────────────┘
```

**Why It Works:**
- Real photo + personal voice = trust through authenticity
- Visitors see the therapist they'll work with (reduces decision paralysis)
- Personal mission + "why this work" builds emotional connection
- Differentiates from clinical sites (personality visible in design)
- Credentials still present, but supporting detail (not overwhelming)

**Example Bio:**
```
Hi, I'm Rainuka.

I believe that therapy works when you feel truly heard. 
My clients often come in expecting me to be serious and 
clinical. Then they realize I laugh easily, I celebrate 
their wins, and I show up with my whole self.

Why I do this work:

I grew up navigating invisible struggles—ADHD, family 
expectations, identity questions. For years, I thought 
something was wrong with me. When I finally got support, 
everything changed. That's why I do this.

I specialize in helping people through perinatal anxiety, 
ADHD, and career transitions—the moments when you're 
questioning who you are and whether you're doing it right. 
You're doing it right. You just need someone in your corner.

[Book a consultation →]
```

**Implementation:**
- Next.js Image component (lazy-load, optimized)
- Tailwind grid: 2-col desktop, 1-col mobile
- Scroll-triggered animations (fade-in + slide-up for each section)
- Testimonial cards with clear speaker attribution
- Credentials section: small, clean, supporting detail
- Colors: Sage green (#9CAF88) for highlights, warm gray (#8B8680) for text

**Design System Additions:**
- `StoryCard` component (image + headline + body + CTA)
- `TestimonialCard` component (quote + name + context)
- Scroll animation library integration (Framer-motion or AOS)

---

### Idea 3: "Your Experience Matters" (Persona-First Booking)

**What It Is:**  
3-step booking form that starts conversational (validation), adapts based on persona selection, then personalizes post-booking email.

**Step 1: Connection (Validation)**
```
"What brings you here today?"
(Choose one or more)

[🤰 Perinatal Challenges] 
 "You're not broken. Your brain works differently."

[🧠 ADHD & Neurodivergence]
 "Late diagnosis? Identity questions? You're not alone."

[💼 Career & Transitions]
 "Burnout is real. Recovery is possible."

[🌱 Other]
 "Life transitions, grief, relationships, or something else?"

[Next Step →]
```

**Step 2: Your Story (Personalized Based on Step 1)**
For Perinatal:
```
"Tell me a bit about your story..."

What's weighing on you right now?
[Text area]

Where are you in your journey?
○ Pregnant
○ Postpartum (0-1 year)
○ Beyond postpartum

[Back] [Next →]
```

For ADHD:
```
"Tell me a bit about your story..."

When did you recognize your ADHD?
[Text area]

How is it affecting you right now?
[Text area]

[Back] [Next →]
```

**Step 3: Logistics**
```
"Let's make this easy for you"

Your name: [____]
Email: [____]
Phone: [____]
Best time to call: ○ Morning  ○ Afternoon  ○ Evening

[Back] [Ready to book. Let's talk →]
```

**Post-Booking Email (Auto-Personalized):**
```
From: Rainuka <rainuka@wonderloud.com>
Subject: You're in good hands. Your appointment is confirmed.

Hi [Name],

Your first session is scheduled for [Date] at [Time].

You shared with me that you're navigating [their persona + 
their stated concern]. That takes courage. You're not alone 
in this.

What to expect: We'll spend time getting to know each other. 
You'll do about 70% of the talking. No judgment. No pressure. 
Just presence.

[Persona-specific affirmation based on their selection]

Questions before our session? Reply to this email or call me 
at [###-###-####].

See you soon,
Rainuka 🌱
```

**Why It Works:**
- Starts with validation, not clipboard (reduces booking anxiety)
- Persona-specific fields make visitor feel *seen*
- Form feels designed for them, not generic
- Post-booking email confirms their choice + provides warmth
- Increases show-up rate (visitor felt held before session)
- Aligns with Rainuka's voice (conversational, warm, non-clinical)

**Implementation:**
- React state to manage 3 steps + selected persona
- Conditional rendering for Step 2 fields based on persona
- Tailwind cards for persona selection (hover states important)
- Backend: Store persona selection, use for email templating
- Email service integration (Brevo or similar) to auto-send personalized email
- Accessibility: ARIA labels on form fields, focus management between steps, clear validation messages

**Design System Additions:**
- `PersonaCard` component (icon + title + tagline + onClick)
- Form step indicator (progress bar or step number)
- Validation message styling (clear, visible, not just color)

---

## Wireframes (ASCII)

See `docs/AGENT_B_UX_BRAINSTORM.md` for full ASCII wireframes + mobile variants.

---

## Questions I Have For You

1. **Phasing:** Should we build all 3 ideas at once, or prioritize 1-2 first?
2. **Photo:** For Idea 2, does Rainuka have a warm, genuine photo we can use? Or do we need a new photo session?
3. **Testimonials:** Do we have client quotes we can anonymize for Ideas 1 & 2?
4. **Timeline Implementation:** Is Framer-motion okay, or prefer vanilla CSS animations?
5. **Email Personalization:** Can we hook into email service (Brevo, SendGrid) for auto-templating?
6. **Mobile Performance:** Idea 1 (timeline) — any concerns about scroll performance on 4G?
7. **Accessibility Testing:** Should we plan user testing with people who have motion sensitivity?

---

## Files

- **`docs/AGENT_B_UX_BRAINSTORM.md`** — Full brainstorm (23 KB)
  - 3 detailed idea descriptions
  - Full ASCII wireframes (desktop + mobile)
  - Implementation notes + code patterns
  - Design system extensions
  - Collaboration notes for A & C
  
- **`docs/RESEARCH_LOG_AGENT_B.md`** — Research summary (8 KB)
  - Competitor analysis (9 sites)
  - Universal design patterns found
  - Wonderloud current assessment
  - Success metrics

Both files are in `docs/` folder in the repo. Ready for your review.

---

## Next Steps

1. **This Week:**
   - Agent A: Feasibility check (can we build these ideas? constraints?)
   - Agent C: Accessibility review (motion sensitivity, form accessibility?)
   - Rainuka: Photo + copy feedback (does it feel authentic?)

2. **Next Week:**
   - Decide phasing (all at once vs. staged)
   - Gather assets (photo, testimonials, copy)
   - Create interactive prototype (Figma or live code demo)

3. **Week After:**
   - Implement + test
   - User testing (does it actually reduce booking anxiety?)
   - Iterate based on feedback

---

**Status:** Ready for feedback  
**Estimated Timeline:** 5-10 days for full implementation (depends on phasing + asset readiness)  
**Questions?** Reply to this doc with your thoughts

Let's build something beautiful. 🌱

---

*Agent B*
