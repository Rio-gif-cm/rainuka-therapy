# Agent D: Design & UX Review — Page Concept Feedback

**Assigned to:** Agent D (Designer/UX)  
**From:** Agent G (Creative Workshop)  
**Date:** September 1, 2026  
**Status:** Awaiting Your Review

---

## YOUR ROLE

You're evaluating these 3 page concepts from a **design + UX perspective**:
- Visual hierarchy and layout
- Accessibility (WCAG 2.1 AA minimum)
- Mobile responsiveness
- User flow (how does it funnel to booking?)
- Component reusability (can we leverage existing design system?)

---

## 🎨 CONCEPT 1: "What Therapy Actually Feels Like"

### Design Questions for You
1. **Layout:** Should the walkthrough be:
   - [ ] Vertical timeline (desktop: side-by-side timeline + content; mobile: stacked)
   - [ ] Accordion (expand/collapse each section)
   - [ ] Horizontal progress bar (user clicks/drags through 5 stages)
   - [ ] Card-based (one card per stage, swipeable on mobile)
   - **Your recommendation:**

2. **Visual Signal:** How do we signal the progression?
   - Numbered steps? Icons? Color progression? Connectors?
   - **Suggestion:** Each stage has a subtle color shift (calm → engaged → listening → clarity)?

3. **Media Placement:** If we add optional video clips (e.g., "A real 10-minute scene from a first session"):
   - Where do they live? Inline? Expandable? Separate page?
   - **Your call:**

4. **Accessibility:** 
   - Can we make the timeline keyboard-navigable?
   - Do we need a "print this page" layout for anxious clients who want to pre-read?
   - **Recommendations:**

5. **CTA Placement:** Where does "Book a session" live on this page?
   - End of walkthrough (strongest conversion signal)?
   - Sidebar (persistent)?
   - Both (risk of clutter)?
   - **Your instinct:**

---

## 📹 CONCEPT 2: "Meet Me Where You Are"

### Design Questions for You
1. **Video Placement:**
   - Homepage hero (replaces or alongside current photo)?
   - Dedicated "Meet Rainuka" page?
   - FAQ/About page integration?
   - Embedded in multiple places?
   - **Recommendation:**

2. **Video UX:**
   - Auto-play on scroll (muted, so doesn't startle users)?
   - Captions on or off by default? (Always include, default on for accessibility)
   - Thumbnail custom or auto-generated?
   - Size: Full width? Constrained? Responsive breakpoints?
   - **Best practices for therapy video:**

3. **Post-Video Experience:**
   - After video ends, what happens next?
   - CTA? Social proof? Testimonials?
   - Scroll to booking, or explicit "Next step" button?
   - **User flow design:**

4. **Fallback:** If video fails to load:
   - Auto-play text transcript?
   - Static "Meet Rainuka" image + download link?
   - **Accessibility fallback:**

5. **Responsive Design:**
   - Does 2-3 min video work on mobile (data usage)?
   - Should we suggest "Watch on WiFi" message?
   - **Mobile-first approach:**

6. **Accessibility:**
   - YouTube embed vs. self-hosted?
   - Captions quality + sync?
   - Audio description track needed? (Probably not for intro video)
   - **Your recommendation:**

---

## 💭 CONCEPT 3: "Things Clients Ask"

### Design Questions for You
1. **Card Design:**
   - Expandable cards (question visible, answer revealed on click)?
   - Side-by-side (Q on left, A on right)?
   - Full-width cards (Q + A both visible)?
   - Modal popup (click question → answer in overlay)?
   - **Strongest UX:**

2. **Organization:**
   - Filter by category (Perinatal, ADHD, Career, Money, Relationships)?
   - Searchable (Ctrl+F style)?
   - Recommended read order (most popular first)?
   - Alphabetical?
   - **Your structure:**

3. **Visual Hierarchy:**
   - How do we distinguish Q from A visually?
   - Bold question, indented answer?
   - Color difference?
   - Icon indicators?
   - **Design approach:**

4. **Engagement:**
   - "Helpful?" voting on each answer (yes/no thumbs)?
   - "Ask your own question" form?
   - Related Q&A suggestions at bottom?
   - **Interaction design:**

5. **Mobile:**
   - How do modal/expandable cards work on tiny screens?
   - Single-column? Justified width?
   - Keyboard navigation for keyboard users / screen readers?
   - **Responsive breakdown:**

6. **Performance:**
   - If we grow to 50+ Q&As, how do we avoid overwhelming?
   - Pagination? Infinite scroll? Lazy loading?
   - **Scalability plan:**

---

## 🔧 COMPONENT REUSABILITY

Check our existing design system (from `lib/styles` or component library):

1. Do we already have an **accordion component**?
   - If yes, reuse for Concept 1 + 3
   - If no, should we build one reusable version?

2. Do we already have a **video container component**?
   - For responsive YouTube embeds, captions, loading states?

3. Do we already have **card components**?
   - Can we reuse them for Q&A cards?

**Your audit:**

---

## 🎯 PRIORITY RANKING

Please rank these concepts by **design feasibility + impact**:

1. **Easiest to Design** (can ship fastest):
2. **Strongest Visual Impact** (will convert most visitors):
3. **Most Accessible** (can meet WCAG AA without workarounds):
4. **Most Scalable** (can grow without redesign):

**Your assessment:**

---

## 🔄 FEEDBACK FOR AGENTS E & F

After reviewing all 3 concepts, provide feedback:

**To Agent E (Content):**
- Does the written content work with the UX you're imagining? 
- Are there places where content needs to be cut/expanded for design fit?

**To Agent F (Strategy):**
- Which concept should we launch first from a design readiness perspective?
- Any technical constraints we should know about (Next.js, Vercel, animation libraries)?

---

## 📋 YOUR DELIVERABLES

1. Answers to all design questions above
2. Wireframe or layout sketch for your top recommendation (even rough)
3. Accessibility checklist for each concept
4. Component audit (what exists, what needs building)
5. Feedback to E & F (see above)

**Timeline:** Please respond by [DATE] so we can synthesize feedback in Round 2

---

## 🎨 DESIGN INSPIRATION (Optional)

Similar therapy websites doing video well:
- [Examples of good therapy video UX]

Q&A patterns you might reference:
- Stripe's FAQ (expandable, searchable)
- Notion's help center (categorized, visual hierarchy)

Timeline/walkthrough patterns:
- [Process flows you've seen work well]

---

**Next:** Wait for Agent E and F feedback, then Round 2 synthesis with all input.
