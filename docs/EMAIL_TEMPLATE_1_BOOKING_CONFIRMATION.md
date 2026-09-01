# Email Template 1: Booking Confirmation

## Subject Line
**Recommended:** `You're booked with Rainuka on [DATE] at [TIME]`

**Why this works:** Uses client's first name (mental ownership), specific date/time (scannability), therapist first name (warmth)

**Alternative:** `Your appointment is confirmed — [DATE] at [TIME]`

---

## Template Structure (6 Sections)

```
Hi [CLIENT_FIRST_NAME],

You're all set for your [SESSION_TYPE] session with me on [DAY], [DATE] at [TIME].

---

## Where to Come & Parking

**Location:** [PRACTICE_ADDRESS]
[OPTIONAL: Parking details—"Street parking on [STREET] is free, or use the lot behind the building"]
[OPTIONAL: Special access—"The door is to the right of the bakery. Come in and have a seat in the waiting area."]

---

## Before We Meet

Please take 5 minutes to fill out this intake form. It helps me understand what brought you in and saves us time at the start of the session:
[INTAKE_FORM_LINK]

**Heads up:** The form asks about your mental health history and current symptoms. This is totally normal, and nothing you share is shocking or surprising to me.

---

## What to Bring

- Photo ID (even if you've been here before—it's just how I track records)
- Insurance card (if applicable)
- Any questions or notes about what brought you here

**Pro tip:** Bring a tissue. Many people feel emotions during therapy, and that's completely OK.

---

## Need to Reschedule or Cancel?

Life happens! Here's our cancellation policy:
- **Reschedule 24+ hours before:** No charge. Use this link to pick a new time: [RESCHEDULE_LINK]
- **Cancel within 24 hours:** Full session fee applies (but still let me know—I'd rather hear from you)
- **To reschedule:** [RESCHEDULE_LINK]
- **To cancel:** Reply to this email or call [PHONE]

---

## Final Thoughts

I'm really looking forward to meeting you. If you have any questions or concerns before Tuesday, the easiest way to reach me is to reply to this email—it comes straight to my inbox.

See you [DATE] at [TIME]. Let's do this.

[YOUR_NAME]
[CREDENTIALS, e.g., "LCSW, Specializing in Perinatal Mental Health"]
[PHONE]
[EMAIL]

---

## Privacy Note

*This email contains your appointment information. As part of my HIPAA commitment, I keep all session details confidential.*
```

---

## Customization by Persona

### Perinatal Version (Anxiety/Overwhelm Focus)

**"Before We Meet" section (modified):**

```
## Before We Meet

Please take 5 minutes to fill out this intake form. It helps me understand what you're experiencing:
[INTAKE_FORM_LINK]

**You might feel nervous.** That's completely normal. If you're in the postpartum period and experiencing anxiety, intrusive thoughts, or overwhelm—I see that a lot. You're not alone, and you're not broken.

**Come as you are.** Messy hair? Spit-up on your shirt? Baby in tow for the first 5 min? All totally fine. This space is for you to be real.
```

**"What to Bring" section (modified):**

```
## What to Bring

- Photo ID
- Insurance card (if applicable)
- A water bottle (seriously, hydration helps with anxiety)
- Snacks or bottle/pacifier if you're bringing baby for drop-off

**Pro tip:** Tissues are here. So is grace. You're going to be OK.
```

### ADHD Version (Anti-Perfectionism Focus)

**"Before We Meet" section (modified):**

```
## Before We Meet

Please fill out this intake form before we meet:
[INTAKE_FORM_LINK]

**Real talk:** ADHD brains work differently—they're not "broken" or "lazy." If you got diagnosed late, or you suspect ADHD, let's talk about it without shame.

**Forgot the form?** No judgment. We can do it right when you get here.
```

**"What to Bring" section (modified):**

```
## What to Bring

- Photo ID
- Insurance card (if applicable)
- Water bottle (ADHD brains need hydration)
- Literally nothing else—no need to prepare a speech

**Pro tip:** Questions will pop into your head on the way. Jot them down so you don't forget.
```

### Career Coaching Version (Burnout/Transition Focus)

**"Before We Meet" section (modified):**

```
## Before We Meet

Please fill out this intake form. It asks about your work history and what brought you here:
[INTAKE_FORM_LINK]

**You're burned out—that's data, not failure.** Career transitions are hard. Let's figure out what comes next.
```

**"Final Thoughts" section (modified):**

```
## Final Thoughts

I'm really looking forward to meeting you. Before we talk, take a moment to think about: **What would success look like for you?** No wrong answer—just yours.

If you have questions before [DATE], reply to this email.

See you then.
```

---

## Testing Checklist

- [ ] All personalization tags filled: [CLIENT_FIRST_NAME], [DATE], [TIME], [PHONE], etc.
- [ ] Intake form link is live and correct
- [ ] Reschedule link is live (if applicable)
- [ ] Phone number is clickable on mobile
- [ ] Email renders in Gmail, Outlook, Apple Mail
- [ ] Email looks good on mobile (iPhone 12 viewport)
- [ ] No PHI beyond appointment details
- [ ] Personal signature present
- [ ] Spell-checked
- [ ] Tone matches practice voice

---

## Send Timing

**When:** Immediately after booking (within 5 minutes)
**Via:** Email service with HIPAA compliance (Brevo, SendGrid with BAA, Mailgun)
**Frequency:** One email, once per booking
**Follow-up:** Pre-session reminder (Wave 1 Email #2, sent 24-48h before)

---

## Analytics to Track

- **Delivery:** % bounces (if >5%, check email list)
- **Opens:** % opened (aim: 60%+)
- **Clicks:** % who clicked intake form link (aim: 70%+)
- **Conversions:** % who completed intake form (aim: 50%+)
- **No-shows:** Compare no-show % before/after email

