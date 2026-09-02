# Final 5 Copy Rephrasings: Ready for Implementation

**Agent C Deliverable**  
**Date:** September 1, 2026  
**Status:** Ready for Agent A & B Approval, Then Code Changes

---

## REFRAMING #1: FROM "TRAUMA-INFORMED" TO SPECIFIC NERVOUS SYSTEM WORK

### Context
Used 7+ times across site. Generic industry language that doesn't differentiate.

### Current
"I work trauma-informed, culturally humble, practical."

### Reframed
> "I'm trained to notice when your nervous system is protecting you—hypervigilance, avoidance patterns, the ways you've learned to survive. I understand *why* those patterns made sense. Then, if they're holding you back now, I teach you practical ways to dial them down. This isn't about erasing your survival skills; it's about giving you options."

### Why It Works
- **Specific:** Names observable nervous system patterns, not abstract "trauma-informed"
- **Honest:** Acknowledges that protection patterns made sense (validates past)
- **Agency:** Clarifies the work is about *choice*, not fixing
- **Differentiating:** Most therapists say "trauma-informed"; we explain what it actually means
- **Grounded:** Evident in Rainuka's case studies and practice approach

### Word Count
Original: 7 words → New: 56 words  
**Trade-off Analysis:** Longer, but introduction/bio section is *meant* to be detailed. This doesn't bloat the page; it deepens the first impression.

### Pages to Apply
- `app/about/page.tsx` (line ~88)
- `app/perinatal/page.tsx` (if "trauma-informed" appears in hero/opening)
- `app/couples/page.tsx` (if "trauma-informed couples work" appears)

---

## REFRAMING #2: FROM "SAFE SPACE" TO PERMISSION & RELATIONSHIP

### Context
Used in child/transition contexts. "Safe space" is boilerplate and doesn't explain the actual work.

### Current
"Therapy gives your child a safe space to practice handling transitions."

### Reframed
> "Your child learns to name what they're feeling instead of shutting down. They practice speaking up when they're confused or scared. They see that big emotions don't break the room or break the relationship. And you get tools to recognize what they needs before they melt down—because you can't teach them to name it if you're also overwhelmed."

### Why It Works
- **Specific outcomes:** Naming emotions, speaking up, emotional tolerance (not vague "safety")
- **Includes parent:** Most parents *need* tools too; this acknowledges that
- **Observable:** You can see a child naming emotions; you can't see "safe space"
- **Honest:** Acknowledges parent overwhelm as part of the work
- **Relational:** Shifts from environment ("space") to relationship dynamics

### Word Count
Original: 13 words → New: 65 words  
**Trade-off Analysis:** This is a fuller value proposition, appropriate for a specialty page exploring child therapy outcomes.

### Pages to Apply
- `app/back-to-school/page.tsx` (transitions section)
- Any child/family therapy framing if it exists

---

## REFRAMING #3: FROM "COMPASSIONATE" TO BEHAVIORAL SPECIFICS

### Context
Used as generic descriptor. "Compassionate" is bare-minimum expectation, not a differentiator.

### Current
"It's a real part of your life that deserves compassionate, accessible support."

### Reframed
> "Your disability isn't what we're fixing in therapy. Your disability is part of how your body and mind work. Therapy is about building a life that actually fits your disabled self—access that works, relationships that aren't exhausting, and understanding which struggles are *you* and which ones are the world failing to accommodate."

### Why It Works
- **Reframes the work:** Not "managing" disability, but building a life around it
- **Specificity:** Naming actual goals (access, non-exhausting relationships, clarity on systemic vs. personal)
- **Empowering:** Moves past "compassionate" pity to disability justice framing
- **Differentiated:** Most therapy is still ableist-by-default; this is explicitly disability-affirming
- **Shows understanding:** Grounded in understanding that disability/ableism is systemic, not just individual

### Word Count
Original: 13 words → New: 54 words  
**Trade-off Analysis:** Longer, but this is a *core value prop* section on the disability page. Worth the depth.

### Pages to Apply
- `app/disability-access/page.tsx` (main opening or value section)

---

## REFRAMING #4: FROM "HEALING JOURNEY" TO UNDERSTANDING & AGENCY

### Context
Implied in perinatal language around "moving through," "navigating," "path forward." Healing journey metaphor suggests linear progress; Rainuka's work is about complexity and choice.

### Current
"Perinatal therapy for pregnancy loss, postpartum anxiety, infertility, reproductive trauma."
*[Implicit: you'll move through these stages]*

### Reframed
> "Therapy for the invisible parts of perinatal life. Your grief and relief showing up at the same time. Your anxiety after a baby not as weakness, but as your nervous system in overdrive. Your infertility shame living in isolation. Here, your feelings get *named*, not pathologized. We understand the gap between how you look and how you actually feel. And we work from there."

### Why It Works
- **Honors complexity:** Grief + relief (not linear journey through stages)
- **Validates hidden experience:** Names the gap between outside/inside (core to Rainuka's framing)
- **Specific to perinatal:** Pregnancy loss, postpartum, infertility, shame—the actual lived experiences
- **Reframes emotion:** Anxiety as nervous system response, not pathology
- **Agency-focused:** You're not on a journey *through*; you're building understanding *of*

### Word Count
Current brief → New: 65 words  
**Trade-off Analysis:** This is more substantial, but appropriate for a hero/opening section. It gives visitors immediately clear insight into what Rainuka actually does.

### Pages to Apply
- `app/perinatal/page.tsx` (hero description, line ~40)

---

## REFRAMING #5: FROM "TRAUMA-INFORMED" TO SYSTEMIC RECOGNITION (Identity-Based)

### Context
Used when describing race-based, LGBTQ+, disability-based harm. "Trauma-informed" minimizes the fact that this harm is systemic, not individual pathology.

### Current
"I provide affirmative, trauma-informed care grounded in queer psychology."

### Reframed
> "I don't ask you to minimize your queerness or navigate safety on your own. Discrimination isn't in your head—it's in your world. We work *knowing* that, rooted in queer psychological research on resilience, identity, and chosen family. What you're experiencing isn't a disorder to treat. It's a reasonable response to an unreasonable context. And your survival skills are exactly that—not pathology."

### Why It Works
- **Systemic framing:** Names discrimination as real, not a cognitive distortion
- **Permission:** Says you don't have to minimize yourself
- **Specific to identity:** Chosen family, identity navigation, queer psychology (not generic "affirmative")
- **Reframes symptoms:** Hypervigilance, caution = survival skills, not anxiety disorder
- **Grounded:** Research-backed (queer psychology) without being clinical
- **Activist:** Explicitly political about what's systemic vs. individual

### Word Count
Original: 9 words → New: 68 words  
**Trade-off Analysis:** Substantial, but this is the *core promise* of identity-affirming therapy. The depth is necessary and differentiating.

### Pages to Apply
- `app/lgbtq/page.tsx` (opening promise, line ~30)
- `app/bipoc/page.tsx` (if similar "trauma-informed" language exists)

---

## WORD COUNT SUMMARY

| Reframing | Section | Original | New | Increase | Type |
|-----------|---------|----------|-----|----------|------|
| #1 | About bio | 7 | 56 | +49 | Bio/depth appropriate |
| #2 | Back-to-school transitions | 13 | 65 | +52 | Outcome clarity necessary |
| #3 | Disability value prop | 13 | 54 | +41 | Reframing (not bloat) |
| #4 | Perinatal hero | Brief | 65 | +55 | Hero section depth OK |
| #5 | LGBTQ+ promise | 9 | 68 | +59 | Core positioning |

**Overall:** These aren't *additions*; they're *replacements* of vague language with specific, high-value copy. They make pages *clearer*, not longer.

---

## IMPLEMENTATION CHECKLIST

### Before Merge
- [ ] Agents A & B approve all 5 rephrasings
- [ ] Confirm page locations & line numbers
- [ ] Verify no SEO impact (keywords preserved where relevant)
- [ ] Check tone consistency with COPY_WARMTH_AUDIT baseline

### Code Changes
- [ ] `app/about/page.tsx` — Rephrase bio section (Reframing #1)
- [ ] `app/perinatal/page.tsx` — Update hero description (Reframing #4)
- [ ] `app/back-to-school/page.tsx` — Rephrase transitions section (Reframing #2)
- [ ] `app/lgbtq/page.tsx` — Update opening promise (Reframing #5)
- [ ] `app/disability-access/page.tsx` — Rephrase value prop (Reframing #3)
- [ ] Search & verify: no remaining instances of removed clichées
- [ ] Optional: `app/couples/page.tsx`, `app/bipoc/page.tsx` (if similar language exists)

### Testing
- [ ] Local build passes
- [ ] Pages render without layout shifts
- [ ] Tone warmth maintained (read-through against COPY_WARMTH_AUDIT)
- [ ] No new clichées introduced
- [ ] Copy reads naturally on mobile & desktop

### Commit
- [ ] Branch: `feature/copy-cliche-rephrase`
- [ ] Commit message includes: reference to AGENT_C_CLICHE_AUDIT.md, BRAINSTORM_LOG.md
- [ ] All agents credited as co-authors
- [ ] Full brainstorm log preserved in git

---

## QUICK REFERENCE: SWAP SHEET

**For Developers Implementing These:**

### Swap #1 (About)
```
OLD: I work trauma-informed, culturally humble, practical.

NEW: I'm trained to notice when your nervous system is protecting you—hypervigilance, avoidance patterns, the ways you've learned to survive. I understand *why* those patterns made sense. Then, if they're holding you back now, I teach you practical ways to dial them down. This isn't about erasing your survival skills; it's about giving you options.
```

### Swap #2 (Back-to-School)
```
OLD: Therapy gives your child a safe space to practice handling transitions.

NEW: Your child learns to name what they're feeling instead of shutting down. They practice speaking up when they're confused or scared. They see that big emotions don't break the room or break the relationship. And you get tools to recognize what they need before they melt down—because you can't teach them to name it if you're also overwhelmed.
```

### Swap #3 (Disability Access)
```
OLD: It's a real part of your life that deserves compassionate, accessible support.

NEW: Your disability isn't what we're fixing in therapy. Your disability is part of how your body and mind work. Therapy is about building a life that actually fits your disabled self—access that works, relationships that aren't exhausting, and understanding which struggles are *you* and which ones are the world failing to accommodate.
```

### Swap #4 (Perinatal)
```
OLD: Perinatal therapy for pregnancy loss, postpartum anxiety, infertility, reproductive trauma.

NEW: Therapy for the invisible parts of perinatal life. Your grief and relief showing up at the same time. Your anxiety after a baby not as weakness, but as your nervous system in overdrive. Your infertility shame living in isolation. Here, your feelings get *named*, not pathologized. We understand the gap between how you look and how you actually feel. And we work from there.
```

### Swap #5 (LGBTQ+)
```
OLD: I provide affirmative, trauma-informed care grounded in queer psychology.

NEW: I don't ask you to minimize your queerness or navigate safety on your own. Discrimination isn't in your head—it's in your world. We work *knowing* that, rooted in queer psychological research on resilience, identity, and chosen family. What you're experiencing isn't a disorder to treat. It's a reasonable response to an unreasonable context. And your survival skills are exactly that—not pathology.
```

---

**Status:** READY FOR AGENT A & B APPROVAL  
**Next Step:** Implement approved rephrasings, test locally, commit with full brainstorm log

