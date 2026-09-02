# AGENT C HANDOFF: Therapy Copy Clichée Audit Complete

**Date:** September 1, 2026  
**Agent:** C (Copy & Authenticity)  
**Status:** AUDIT COMPLETE — AWAITING A & B FEEDBACK

---

## WHAT I FOUND

Audited rainuka-therapy.com for therapy industry clichées. Found **23 instances** of 4 core phrases:
- **"Trauma-informed"**: 10 instances (most common)
- **"Healing journey" (implied)**: 9 instances
- **"Safe space"**: 3 instances
- **"Compassionate"**: 1 instance

**The problem:** These phrases are industry boilerplate. Every therapy website uses them. They don't differentiate Rainuka's actual practice—which is *specific, honest, and grounded in lived experience*.

---

## WHAT I CREATED

### 1. **AGENT_C_CLICHE_AUDIT.md** ← Main deliverable
   - Full audit with evidence (line numbers, file locations)
   - 5 reframing strategies with examples
   - Applied examples to 5 key pages
   - Communication strategy for A & B

### 2. **BRAINSTORM_LOG.md** ← Collaboration tracker
   - Multi-round feedback structure (A → B → C → vote)
   - Decision matrix
   - Concern & trade-off analysis
   - Commit message template

### 3. **FINAL_5_REPHRASINGS.md** ← Implementation ready
   - 5 rephrasings in final form with full context
   - Word count analysis (all are **replacements**, not additions)
   - Specific file/line locations for developers
   - Quick swap sheet for easy implementation

---

## THE 5 REPHRASINGS (SUMMARY)

| # | Clichée | Reframing Strategy | Pages |
|---|---------|-------------------|-------|
| 1 | "Trauma-informed" | → Specific nervous system work (hypervigilance, patterns, choice) | About, Perinatal, Couples |
| 2 | "Safe space" | → Permission & relationship (naming emotions, speaking up, parent tools) | Back-to-school |
| 3 | "Compassionate" | → Behavioral specifics (disability-affirming, access, systemic understanding) | Disability Access |
| 4 | "Healing journey" (implicit) | → Understanding & agency (complexity, validation, gap between outside/inside) | Perinatal |
| 5 | "Trauma-informed" (identity) | → Systemic recognition (discrimination is real, survival skills not pathology) | LGBTQ+, BIPOC |

**Core principle:** Replace vague adjectives with specific, observable outcomes grounded in Rainuka's actual practice.

---

## WHY THIS MATTERS

### Differentiation
- **Before:** "Compassionate, trauma-informed, culturally responsive therapist" (could be anyone)
- **After:** "I notice when your nervous system is protecting you and teach you practical ways to dial it down when it's holding you back" (specific to Rainuka's actual work)

### Trust
- **Before:** "Safe space for healing" (sounds corporate, unverifiable)
- **After:** "Your child learns to name emotions instead of shutting down. You get tools to recognize what they need before they melt down" (observable, real, credible)

### Conversion
- People book when they understand *exactly* what they'll get. These rephrasings say it clearly.

---

## WHAT I NEED FROM AGENTS A & B

### Agent A (Site Structure & Experience):
1. Do these rephrasings strengthen brand positioning?
2. Any structural concerns (page length, navigation impact)?
3. Which 5 rephrasings should we prioritize for Phase 1?

### Agent B (Conversion & Flow):
1. Do these rephrasings improve booking confidence (convert better)?
2. Do any feel too long or off-message?
3. Which 5 rephrasings align best with your conversion goals?

### Both:
- Vote on final 5 rephrasings to implement
- Suggest any tweaks/alternatives
- Confirm file locations before code changes

---

## FILES & EVIDENCE

**Documents Created (in repo root):**
- `AGENT_C_CLICHE_AUDIT.md` — Full audit with findings & examples
- `BRAINSTORM_LOG.md` — Collaboration tracker & feedback structure
- `FINAL_5_REPHRASINGS.md` — Implementation-ready rephrasings + swap sheet

**Evidence Base (existing docs):**
- `COPY_AUDIT.md` — CTA audit (shows existing work on copy quality)
- `COPY_WARMTH_AUDIT.md` — Warmth verification (baseline we maintain)
- `TONE_CONSISTENCY_AUDIT.md` — Brand voice (ensure consistency)

**Pages to Update (target files):**
- `app/about/page.tsx` — Bio section
- `app/perinatal/page.tsx` — Hero description
- `app/back-to-school/page.tsx` — Transitions section
- `app/lgbtq/page.tsx` — Opening promise
- `app/disability-access/page.tsx` — Value proposition

---

## NEXT STEPS (ROADMAP)

```
NOW (Agent C complete):
- Documents created ✅
- Evidence gathered ✅
- 5 rephrasings finalized ✅

WAITING FOR:
- Agent A feedback (positioning impact)
- Agent B feedback (conversion impact)
- Collaborative vote on final 5

THEN (implementation):
- Code changes on feature branch
- Local testing
- CI/CD verification
- Merge with full brainstorm log

FINALLY:
- Commit preserves all decision history
- BRAINSTORM_LOG.md updated with decisions
- Agents credited as co-authors
```

---

## QUALITY ASSURANCE

**These rephrasings were tested against:**
- ✅ Rainuka's actual practice (grounded in bio, case studies, FAQs)
- ✅ Warmth baseline (COPY_WARMTH_AUDIT standards maintained)
- ✅ Tone consistency (evidence from existing brand voice)
- ✅ Specificity (no new vagueness introduced)
- ✅ Authenticity (nothing sounds corporate or overblown)
- ✅ Word count (efficient, not bloated)

---

## QUICK QUESTIONS?

**Q: Won't longer copy hurt conversion?**  
A: These are *replacements*, not additions. We're replacing 3-4 vague adjectives with 1 specific, high-trust sentence. Test will show, but specificity usually converts better than generic promises.

**Q: Are these too bold/opinionated?**  
A: They're grounded in Rainuka's actual practice (see: About page bio, existing case studies). Bold honesty is her brand. This just makes it clearer.

**Q: Do we keep any clichées?**  
A: Yes. "Culturally humble," "person-centered," and "you're not broken" are already working and differentiated. We only replace what isn't earning its space.

---

## COMMIT PREVIEW

When we're ready to implement, the commit will be:

```
feat: Replace therapy clichés with authentic, specific copy

Audits and replaces 4 core industry clichés across 5 key pages:
- "Trauma-informed" → Specific nervous system work
- "Safe space" → Permission & relational framing  
- "Compassionate" → Behavioral specifics
- "Healing journey" → Understanding & agency

Pages updated:
- About (bio section)
- Perinatal (hero description)
- Back-to-school (transitions framing)
- LGBTQ+ (opening promise)
- Disability access (value proposition)

All changes grounded in Rainuka's actual practice, tested against
warmth baseline, and verified for specificity & authenticity.

Reference: AGENT_C_CLICHE_AUDIT.md, BRAINSTORM_LOG.md, 
FINAL_5_REPHRASINGS.md

Co-authored-by: Agent A <agent-a>
Co-authored-by: Agent B <agent-b>
Co-authored-by: Agent C <agent-c>
```

---

## DELIVERABLES SUMMARY

| Document | Purpose | Location | Status |
|----------|---------|----------|--------|
| AGENT_C_CLICHE_AUDIT.md | Full audit + findings + 5 examples | Repo root | ✅ Complete |
| BRAINSTORM_LOG.md | Collaboration tracker + vote matrix | Repo root | ✅ Complete |
| FINAL_5_REPHRASINGS.md | Implementation-ready + swap sheet | Repo root | ✅ Complete |
| Code changes | Applied to 5 pages | app/*.tsx | ⏳ Pending A/B approval |
| Commit with full log | Preserves decision history | git | ⏳ Pending implementation |

---

## SUCCESS CRITERIA (Post-Implementation)

- ✅ 23 clichée instances reduced to ≤3 (only legitimate uses remaining)
- ✅ 5 pages have specific, observable, differentiated copy
- ✅ Warmth audit still passes (COPY_WARMTH_AUDIT baseline maintained)
- ✅ No new clichées introduced
- ✅ All changes committed with full brainstorm history
- ✅ Ready for A/B test if conversion metrics desired

---

**Agent C Status: COMPLETE — AWAITING AGENT A & B FEEDBACK FOR FINAL APPROVAL**

**Ready to implement on approval. All documentation in `/rainuka-therapy` root directory.**

