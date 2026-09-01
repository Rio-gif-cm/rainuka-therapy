# Copy Polish Pass: Headlines & CTAs Audit

## CURRENT STATE → IMPROVED STATE

### HOMEPAGE (app/page.tsx)

#### Section 1: Hero CTA
- **Current**: "Book Your Free Call"
- **Issue**: Passive, doesn't convey the benefit or emotional urgency
- **Improved**: "Start Feeling Better Today"
- **Emotional resonance**: Action-focused, benefit-clear, present-tense

#### Section 2: Specialty Section Heading
- **Current**: "What I Specialize In"
- **Issue**: Passive, clinical
- **Improved**: "Find Your Path Forward"
- **Benefit**: Shifts from provider-centric to client-centric, more hopeful

#### Section 3: Approach Section
- **Current**: "Therapy that fits the life you actually have"
- **Issue**: Good, but could be punchier
- **Improved**: "Therapy That Actually Fits Your Real Life"
- **Resonance**: Emphasis on "Actually" adds credibility and emotional punch

#### Section 4: Main CTA Section Heading
- **Current**: "Ready to talk?"
- **Issue**: Weak, passive, assumptive
- **Improved**: "Ready to Reclaim Your Peace?"
- **Benefit**: Stronger emotional hook, clearer outcome

#### Section 5: Main CTA Button
- **Current**: "Book Your Free Call"
- **Issue**: Transactional, doesn't convey value
- **Improved**: "Start Your Breakthrough Session"
- **Benefit**: "Breakthrough" suggests progress/clarity, more emotionally charged

#### Section 6: Footer CTA
- **Current**: "Still deciding?"
- **Issue**: Weak, uncertain framing
- **Improved**: "Ready for Clarity?"
- **Benefit**: Positive, outcome-focused

#### Section 7: Button in Footer CTA Area
- **Current**: "Book a Free 15-Minute Call"
- **Issue**: Passive, no benefit
- **Improved**: "Get Your Personalized Plan"
- **Benefit**: Specific outcome, actionable, punchier

---

### HERO SECTION COMPONENT (components/HeroSection.tsx)

#### Primary CTA
- **Current**: "Book a Free 15-Minute Call"
- **Issue**: Passive, transactional
- **Improved**: "Start Your Free Breakthrough Call"
- **Resonance**: "Breakthrough" = progress, clarity, hope

#### Secondary CTA
- **Current**: "See How I Work"
- **Issue**: Passive, unclear benefit
- **Improved**: "Learn My Approach"
- **Emotional pull**: More direct, clearer intent

#### Persona Discovery CTA (Inside the Hero)
- **Current**: "See if this applies to you"
- **Issue**: Passive, tentative
- **Improved**: "Find Your Solution"
- **Benefit**: Direct action, solution-oriented

#### Secondary Link in Persona
- **Current**: "Learn more →"
- **Issue**: Generic, weak
- **Improved**: "Explore Your Path →"
- **Benefit**: More inviting, specific to therapy journey

---

### IMPLEMENTATION CHECKLIST
- [ ] Update app/page.tsx (homepage)
- [ ] Update components/HeroSection.tsx
- [ ] Update components/NicheGrid.tsx
- [ ] Update app/booking/page.tsx
- [ ] Update app/perinatal/page.tsx
- [ ] Update app/about/page.tsx
- [ ] Build and test
- [ ] Commit with clear message
- [ ] Push to remote
