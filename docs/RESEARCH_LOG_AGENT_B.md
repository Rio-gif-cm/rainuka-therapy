# Research Log: Agent B UX/Design Innovation

**Session:** September 1, 2026  
**Agent:** B (UX/Design Research)  
**Task:** Research competitor sites, propose 3 layout/UX innovations for Wonderloud

## Research Sources & Key Findings

### Competitor Sites Analyzed

| Site | Specialty | Key Strength | UX Pattern |
|------|-----------|--------------|-----------|
| The Intentional Conversation | Trauma, BIPOC, LGBTQIA+ | Warmth + authenticity | Cozy spacing, real photo, validating copy |
| Therapy with Gayane | Solo practice | Personal + professional balance | Soft palette, direct copy, human-centered |
| RISE Therapy San Diego | General | Creative expression | Bold colors, interactive animations |
| Maxima Therapy | Neurodiversity | Inclusive design | Motion-heavy, emotional resonance, flexible navigation |
| Somatic Therapy Brooklyn | Somatic therapy | UX clarity | User research-driven, scannable layouts, accessibility focus |
| Westside Behavioral Health | Scheduling | Friction reduction | Multi-step form, clear CTAs, F-pattern reading |

### Research Articles & Guides

- **SimplePractice:** Top 10 therapist websites
- **Reframe Practice:** 15 therapy website patterns + design principles
- **Go Bloom Creative:** Beautiful therapy website design examples
- **MuffinGroup:** Therapist website design vs. clinical healthcare
- **Design for Therapists:** Custom WordPress therapy sites
- **Transference Studio:** 15 therapy websites that convert (neurodiversity-affirming, culturally responsive)
- **Zynnyme:** Websites for therapists complete guide 2026

### Universal Patterns Identified (Cross-Site)

1. **Therapist as Person > Credentials:** Real photo + personal bio converts better than credentials-first approach
2. **Validation Language:** "I see you / this is real / you're not alone" before pitching services
3. **White Space:** 40-50% empty space reduces cognitive load for anxious visitors
4. **Simplicity in Navigation:** 3-5 key pages, clear hierarchy, easy mobile experience
5. **Booking Friction Reduction:** Visible CTA on every page, simple form (3-5 fields), clear fees upfront
6. **Specialty Pages:** Each niche deserves dedicated page + tailored messaging
7. **Personal Voice:** Conversational, first-person, warm tone > clinical distance
8. **Trust Signals:** Credentials as supporting detail, testimonials, accessibility compliance, privacy assurance
9. **Motion & Interaction:** Subtle micro-interactions + animations make site feel alive + caring (when respectful of motion preferences)
10. **Mobile-First:** 60%+ therapy clients search on phones; site must be responsive, fast (<3s load)

### Common Failures (From Analyzed Sites)

- Generic therapy-speak without personal voice
- Hidden pricing / fees
- Stock photography (undermines trust)
- Cluttered layouts (too much info, poor hierarchy)
- Slow load times
- Poor mobile optimization
- Missing accessibility (WCAG compliance)
- Credentials-only approach (no warmth)

---

## Wonderloud Current State Assessment

### Strengths
✅ Clean, professional design (sage green + warm gray palette is therapeutic + trustworthy)  
✅ Three specialty pages (perinatal, ADHD, career) with niche-specific copy  
✅ Accessible (WCAG 2.1 AA+)  
✅ Warm, validating copy (not clinical)  
✅ Multi-step booking form (progressive disclosure)  
✅ Well-organized information architecture  

### Gaps (Opportunities for Innovation)
❌ **Limited Human Connection:** Rainuka's personality is warm + present in-person, but visual design doesn't fully communicate that yet  
❌ **Static Experience:** No motion, micro-interactions, or sense of "aliveness" (vs. Maxima's motion-rich approach)  
❌ **Booking Feels Transactional:** Form exists, but lacks conversational warmth that builds trust before booking  
❌ **About Page Opportunity:** Could feature Rainuka more prominently + personally (real photo, personal mission, why this work)  
❌ **FAQ vs. Conversation:** Current FAQ is informational but feels like Q&A, not guidance from Rainuka  
❌ **Mobile Timeline Concept:** Homepage currently static; could use interactive timeline to guide visitor through typical client journey  

---

## Three Proposed UX/Design Innovations

### **Idea 1: "Conversation Timeline"**
**Concept:** Interactive visual journey through client transformation (before → discovery → session → progress → transformation)  
**Why:** Mirrors therapy itself; reduces anxiety about "what happens when I call"; shows Rainuka's voice + presence  
**Implementation:** React timeline with expandable waypoints, micro-animations, mobile vertical scroll  
**Difficulty:** Medium (component complexity, animation)

### **Idea 2: "Rainuka's Space"**
**Concept:** Redesign About page to center Rainuka as real person (warm photo, personal mission, why this work, testimonials)  
**Why:** Trust through authenticity; reduces decision paralysis; differentiates from clinical sites  
**Implementation:** Large photo + paired bio layout, scroll-triggered animations, credentials as supporting detail  
**Difficulty:** Low-Medium (layout, image optimization, copy restructuring)

### **Idea 3: "Your Experience Matters"**
**Concept:** Transform booking form from transactional to conversational (lead with validation, persona selection, personalized fields, warm post-booking email)  
**Why:** Visitors feel *seen* before booking; increases show-up rate; aligns with Rainuka's voice  
**Implementation:** 3-step form with dynamic fields, persona card component, email personalization backend  
**Difficulty:** Medium (state management, conditional rendering, email integration)

---

## Design System Extensions Needed

### New Components
- **PersonaCard:** Icon + title + validating tagline + click handler
- **TimelineWaypoint:** Icon + quote + response + CTA + expandable state
- **StoryCard:** Image + headline + body text + micro-animation

### New Animation Patterns
- **Fade-In Slide-Up:** Scroll-triggered reveal (respects `prefers-reduced-motion`)
- **Expand/Collapse:** Smooth height transition (timeline waypoints, accordion sections)
- **Hover Lift:** Subtle shadow + scale on card hover (persona cards, testimonial cards)

### New Color Additions
- **Validation Green:** `#6DAA64` (warm green checkmark, affirming)
- **Highlight Overlay:** `#9CAF88` @ 0.2 opacity (sage green background highlight)

---

## Recommendations for Phasing

### **Priority 1 (Quick Wins, 1-2 days)**
1. **Idea 2 (Rainuka's Space):** Update About page. Relatively low-effort, high impact on trust + conversion.
2. **Idea 3 Step 1 (Persona Cards):** Redesign booking form first step. Builds momentum, shows progress.

### **Priority 2 (Medium-Term, 3-5 days)**
3. **Idea 3 Complete:** Finish personalized booking + email automation
4. **Idea 1 (Timeline):** Build interactive timeline (higher complexity, but highest novelty + engagement)

### **Priority 3 (Polish, Ongoing)**
5. Micro-animations across all interactions
6. Accessibility testing (motion preferences, form validation)
7. Mobile polish + performance optimization

---

## Collaboration Framework

### Agent A (Frontend) Needs:
- Confirmation that components are buildable in React/Next.js
- Asset requirements (photo, icons, animation libraries)
- Component patterns (TimelineWaypoint, PersonaCard, StoryCard)

### Agent C (UX/Accessibility) Needs:
- User testing priorities (which idea to test first?)
- Motion preference testing (prefers-reduced-motion)
- Form accessibility audit (labels, validation messages, keyboard navigation)

### Shared Dependencies:
- Rainuka's input on photo + personal copy (for Ideas 2 & 3)
- Testimonial quotes (real client feedback for Ideas 1 & 2)
- Design system finalization (colors, spacing, typography choices)

---

## Success Metrics (Post-Implementation)

Track these to validate improvements:
- **Booking Rate:** % of visitors completing booking form (target: 8-12%)
- **About Page Engagement:** Scroll depth, time on page (should increase with larger photo)
- **Timeline Interaction Rate:** % of visitors clicking/expanding waypoints
- **Form Completion Rate:** % starting → finishing booking form
- **Post-Booking Email Open Rate:** (target: 45-60% for therapy)
- **First Session Show-Up Rate:** (target: 90%+)

---

## File Output

Generated:
- `docs/AGENT_B_UX_BRAINSTORM.md` — Full brainstorm + 3 detailed ideas with ASCII wireframes
- `docs/RESEARCH_LOG_AGENT_B.md` — This file (research summary + recommendations)

Ready for Agent A & C feedback.

---

**Status:** Complete  
**Next Step:** Await feedback from Agents A & C; refine ideas based on feasibility + accessibility concerns  
**Time:** ~4 hours research + synthesis
