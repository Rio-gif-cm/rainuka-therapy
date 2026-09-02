# 🎯 Agent E Quick Reference: Winning Micro-Copy

## 5 Categories. 3-5 Refined Options Each. Ready to Ship.

---

## 1. FORM ERRORS (Replace 5 Generic Messages)

| Field | NEW MESSAGE | Why |
|-------|-------------|-----|
| **Email** | "That email didn't land right. Double-check—I'll send your call details there." | Empathetic, not blaming |
| **Phone** | "Let me make sure I can call you back—need the full number, area code included." | Frames as mutual care |
| **Name** | "I need at least 2 characters to greet you properly. How do you like to be called?" | Invites personalization |
| **Concern** | "Just a sentence or two on your mind—that helps me listen better when we talk." | Shorter, benefit-focused |
| **Consent** | "I need you to agree you're ready to move forward and that you've reviewed my privacy policy." | Clearer intent |

---

## 2. LOADING STATE (Add Message to Spinner)

```
"Sending your info securely… I'll confirm within 24 hours."
```
- Explains action (not just spinning)
- Builds trust ("securely")
- Sets timeline (not vague "soon")

---

## 3. SUCCESS MESSAGE (Replace Generic Confirm)

```
"Got it! I'll call {PHONE} by tomorrow at this time to confirm your session.
No obligation—if we're not a fit, no worries. See you soon."
```

**Secondary CTA Below:**  
"Prepare for your first session" → [link to guide]

---

## 4. EMPTY STATES (No Slots / No Therapist Match)

**No Available Slots:**  
"I'm booked through Friday. Next opening: Monday, 10am. Want to wait, or try email?"

**No Therapist Match:**  
"That therapist is fully booked. Here are 2 other specialists for your concern—want to browse?"

---

## 5. NETWORK ERROR (Retry / Fallback)

```
"Something hiccupped on my end. Your info is safe—want to try again, or email me directly?"
```
- Takes responsibility (not blaming user)
- Addresses worry (data safety)
- Offers choice (try/email)

---

## Tone Principles (All Messages)

✅ **Warm** — Conversational tone, never formal  
✅ **Specific** — Concrete timelines + phone numbers  
✅ **Reassuring** — Removes blame + offers alternatives  
✅ **Therapy-Fit** — Trust-building, low-pressure  

---

## Implementation

**Location:** `lib/microcopy.ts`  
```typescript
import { MICROCOPY } from '@/lib/microcopy'

// Use in BookingForm.tsx:
<p className="text-alert-600">{MICROCOPY.errors.email.message}</p>
<span className="text-sage-600">{MICROCOPY.loading.primary}</span>
<p>{MICROCOPY.success.headline}</p>
```

---

## Next Steps

1. **Agent D:** Design review (colors, icons, styling)
2. **Agent F:** Frontend implementation in BookingForm.tsx
3. **Agent G:** Voice authenticity check + tone polish
4. **All:** Final refinement round
5. **Commit:** Clean commit with before/after examples
6. **Measure:** A/B test completion lift + abandonment reduction

---

## Files to Review

- `lib/microcopy.ts` — Full constants (20+ messages)
- `MICROCOPY_WORKSHOP.md` — Detailed proposal + options
- `BEFORE_AFTER_MICROCOPY.md` — Comparison table + UX wins
- `AGENT_COORDINATION.md` — Collab workflow

---

**Status:** ✅ Ready for Design + Frontend + Copy Review  
**Branch:** `test/burgundy-deep-gray-sea-blue`  
**Commits:** `8f54a57` + `dfc8982` + `79dc4e6`

