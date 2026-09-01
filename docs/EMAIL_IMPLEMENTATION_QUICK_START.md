# Email Automation Wave 1 — Backend Implementation Quick Reference

**For:** Backend Developer (2-4 hours implementation)
**Status:** Ready for deployment
**Latest Commit:** 5dd6318 (pushed to main)

---

## 📋 Quick Checklist (In Order)

### Step 1: Environment Setup (30 min)
```bash
# 1.1 Create Brevo account
# https://www.brevo.com/signup/

# 1.2 Request Business Associate Agreement (BAA)
# Email: support@brevo.com
# Mention: "Therapy practice, mental health, HIPAA compliance needed"

# 1.3 Generate API key
# Account Settings → API Keys → Create new key
# Copy key

# 1.4 Add to .env
echo "BREVO_API_KEY=xxx" >> .env
echo "PRACTICE_ADDRESS=123 Main St, Suite 100, City, State" >> .env
echo "PARKING_INFO=Free street parking, meters enforced 9am-5pm" >> .env
echo "THERAPIST_PHONE=+1-555-0123" >> .env
echo "THERAPIST_EMAIL=rainuka@therapy.com" >> .env
echo "APP_URL=https://rainuka-therapy.vercel.app" >> .env
```

### Step 2: Database Schema (45 min)
```bash
# 2.1 Run migration to create tables
# See: docs/EMAIL_BACKEND_IMPLEMENTATION.md → Phase 1

# SQL commands in:
# - bookings table (appointment + email tracking)
# - clients table extended (persona info)
# - email_events table (audit log)

# 2.2 Verify tables created
psql $DATABASE_URL -c "\dt bookings email_events"
```

### Step 3: API Endpoints (1 hour)
```bash
# 3.1 Create endpoint: POST /api/bookings
# Code reference: docs/EMAIL_BACKEND_IMPLEMENTATION.md → Phase 2

# 3.2 Create endpoint: POST /api/emails/events
# (webhook receiver for Brevo callbacks)

# 3.3 Test endpoints in staging
curl -X POST http://localhost:3000/api/bookings \
  -H "Content-Type: application/json" \
  -d '{"client_id":"uuid","appointment_date":"2026-09-02","appointment_time":"14:00"}'
```

### Step 4: Email Templates (30 min)
```bash
# 4.1 Create template files
mkdir -p templates/emails
touch templates/emails/booking_confirmation.ejs
touch templates/emails/presession_prep.ejs

# 4.2 Copy content from:
# - docs/EMAIL_TEMPLATE_1_BOOKING_CONFIRMATION.md
# - docs/EMAIL_TEMPLATE_2_PRESESSION_PREP.md

# 4.3 Test rendering
node -e "const ejs = require('ejs'); ejs.renderFile('./templates/emails/booking_confirmation.ejs', {client_first_name:'Test',appointment_date:'2026-09-02'}, (err,result) => console.log(result))"
```

### Step 5: Automation Setup (15 min)
```bash
# 5.1 Install dependencies
npm install @getbrevo/brevo bull redis node-schedule

# 5.2 Configure cron job (see Phase 5 in implementation guide)
# Hourly check for upcoming sessions → queue pre-session emails

# 5.3 Set up email queue processor
# Code reference: docs/EMAIL_BACKEND_IMPLEMENTATION.md → Phase 6
```

### Step 6: Testing (1 hour)
```bash
# 6.1 Create test booking
curl -X POST http://localhost:3000/api/bookings \
  -H "Content-Type: application/json" \
  -d '{
    "client_id":"550e8400-e29b-41d4-a716-446655440000",
    "appointment_date":"2026-09-02T14:00:00",
    "appointment_time":"14:00",
    "session_type":"first_session",
    "therapist_id":"550e8400-e29b-41d4-a716-446655440001"
  }'

# 6.2 Verify in Brevo dashboard
# - Email queued
# - Delivered within 5 minutes
# - No errors in logs

# 6.3 Test mobile rendering
# Forward email to phone, check layout

# 6.4 Verify links work
# Click intake form link → form loads
# Click reschedule link → reschedule page loads
```

---

## 📦 Dependencies to Install

```json
{
  "@getbrevo/brevo": "^20.0.0",
  "bull": "^4.11.0",
  "redis": "^4.6.0",
  "node-schedule": "^2.1.0",
  "ejs": "^3.1.8"
}
```

---

## 🔧 Code Templates

### API Endpoint: POST /api/bookings

**Location:** `app/api/bookings/route.ts` (Next.js app router)

```typescript
import { createBooking } from '@/lib/email/booking-service';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { client_id, appointment_date, appointment_time, session_type, therapist_id } = await req.json();
    
    // Validate
    if (!client_id || !appointment_date || !appointment_time) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }
    
    // Create booking + queue emails
    const booking = await createBooking({
      client_id,
      appointment_date,
      appointment_time,
      session_type,
      therapist_id,
    });
    
    return NextResponse.json({ id: booking.id, status: 'confirmed' });
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
```

### Email Service: Send Confirmation

**Location:** `lib/email/booking-service.ts`

```typescript
import Brevo from '@getbrevo/brevo';
import { renderTemplate } from './template-engine';
import { emailQueue } from './queue';

const brevoApi = new Brevo.TransactionalEmailsApi();
brevoApi.setApiKey(Brevo.ApiKeyAuth, process.env.BREVO_API_KEY);

export async function sendConfirmationEmail(booking: any, client: any) {
  const emailContent = await renderTemplate('booking_confirmation', {
    client_first_name: client.first_name,
    appointment_date: booking.appointment_date,
    appointment_time: booking.appointment_time,
    session_type: booking.session_type,
    therapist_name: booking.therapist.name,
    practice_address: process.env.PRACTICE_ADDRESS,
    parking_info: process.env.PARKING_INFO,
    intake_form_link: `${process.env.APP_URL}/intake/${booking.id}`,
    reschedule_link: `${process.env.APP_URL}/reschedule/${booking.id}`,
    therapist_phone: process.env.THERAPIST_PHONE,
    therapist_email: process.env.THERAPIST_EMAIL,
    persona: client.primary_reason,
  });

  const sendSmtpEmail = {
    to: [{ email: client.email, name: client.first_name }],
    sender: { email: 'noreply@rainukatherapy.com', name: 'Rainuka' },
    subject: `You're booked with Rainuka on ${booking.appointment_date} at ${booking.appointment_time}`,
    htmlContent: emailContent,
    externalId: booking.id,
    replyTo: { email: process.env.THERAPIST_EMAIL },
    tags: ['booking_confirmation', client.primary_reason || 'general'],
  };

  return await brevoApi.sendTransacEmail(sendSmtpEmail);
}
```

### Cron Job: Schedule Pre-Session Emails

**Location:** `lib/email/scheduler.ts`

```typescript
import schedule from 'node-schedule';
import { db } from '@/lib/db';
import { emailQueue } from './queue';

export function startScheduler() {
  // Run every hour
  schedule.scheduleJob('0 * * * *', async () => {
    try {
      // Find first sessions due in ~48 hours
      const firstSessions = await db.query(`
        SELECT b.*, c.*, t.*
        FROM bookings b
        JOIN clients c ON b.client_id = c.id
        JOIN therapists t ON b.therapist_id = t.id
        WHERE b.session_type = 'first_session'
        AND b.presession_email_sent = false
        AND NOW() > b.appointment_date - interval '48 hours'
        AND NOW() < b.appointment_date - interval '47.5 hours'
      `);

      // Find follow-ups due in ~24 hours
      const followUps = await db.query(`
        SELECT b.*, c.*, t.*
        FROM bookings b
        JOIN clients c ON b.client_id = c.id
        JOIN therapists t ON b.therapist_id = t.id
        WHERE b.session_type = 'follow_up'
        AND b.presession_email_sent = false
        AND NOW() > b.appointment_date - interval '24 hours'
        AND NOW() < b.appointment_date - interval '23.5 hours'
      `);

      // Queue emails
      for (const booking of [...firstSessions, ...followUps]) {
        await emailQueue.add('send_presession_email', {
          booking_id: booking.id,
          client_id: booking.client_id,
        });

        // Mark as sent
        await db.query(
          'UPDATE bookings SET presession_email_sent = true WHERE id = $1',
          [booking.id]
        );
      }
    } catch (error) {
      console.error('Scheduler error:', error);
    }
  });
}
```

---

## 🧪 Testing Scenarios

### Test Case 1: Happy Path
```
1. Create booking in staging
2. Verify confirmation email queued
3. Check Brevo dashboard: email sent
4. Check inbox: email arrives <5 min
5. Click intake form link: form loads
6. Verify email renders on mobile
7. ✅ PASS
```

### Test Case 2: Pre-Session Email
```
1. Create booking dated 48 hours from now
2. Wait for cron job (or manually trigger)
3. Verify pre-session email queued
4. Check Brevo dashboard: email sent
5. Check inbox: email arrives with correct persona copy
6. ✅ PASS
```

### Test Case 3: Persona Personalization
```
1. Create booking with perinatal client
   - Verify confirmation email includes perinatal copy
2. Create booking with ADHD client
   - Verify confirmation email includes ADHD copy
3. Create booking with career client
   - Verify confirmation email includes career copy
4. ✅ PASS (all 3 personas render correctly)
```

### Test Case 4: Webhook
```
1. Create booking + send email
2. Brevo sends "opened" webhook to /api/emails/events
3. Verify event logged in email_events table
4. Verify booking.confirmation_email_opened = true
5. ✅ PASS
```

---

## 📊 Monitoring Checklist

### Day 1 (Deployment)
- [ ] All API endpoints responding
- [ ] Confirmation emails sending within 5 min
- [ ] Email delivery rate >95%
- [ ] No error logs

### Week 1
- [ ] Email open rate tracking (target: >60%)
- [ ] Intake form clicks tracking (target: >70%)
- [ ] Form completion rate (target: >50%)
- [ ] No bounces/DMARC failures

### Month 1
- [ ] No-show rate baseline established
- [ ] Comparing pre/post email automation
- [ ] Qualitative feedback from Rainuka
- [ ] Plan Wave 2 improvements

---

## 🆘 Troubleshooting

### Email not delivered
```
1. Check Brevo dashboard → recent sends → status
2. Check logs for API errors
3. Verify API key is correct
4. Verify recipient email is valid
5. Check spam filters (Gmail, Outlook)
6. Re-test with test email address
```

### Template not rendering
```
1. Verify EJS syntax (<%=, <%, %>)
2. Test render manually:
   node -e "const ejs = require('ejs'); ejs.renderFile('./templates/booking_confirmation.ejs', {client_first_name:'Test'}, (e,r) => console.log(r))"
3. Check all variables are passed from API
4. Verify template file path is correct
```

### Cron job not firing
```
1. Verify node-schedule is imported + scheduler started
2. Check if process is still running
3. Verify database query is correct
4. Test cron syntax: "0 * * * *" (every hour)
5. Check logs for scheduler errors
```

### HIPAA compliance issues
```
1. Verify BAA signed with Brevo
2. Verify no PHI in email body (only appointment details)
3. Verify email is encrypted in transit (TLS 1.2+)
4. Verify audit logs created (email_events table)
5. Verify client consent recorded (email_consent_given)
```

---

## 📞 Support Resources

**Documents to reference:**
1. `docs/EMAIL_BACKEND_IMPLEMENTATION.md` — Full technical specs
2. `docs/EMAIL_TEMPLATE_1_BOOKING_CONFIRMATION.md` — Copy + structure
3. `docs/EMAIL_TEMPLATE_2_PRESESSION_PREP.md` — Copy + structure
4. `docs/EMAIL_AUTOMATION_WAVE1_SUMMARY.md` — Overview + roadmap

**Brevo Resources:**
- API Docs: https://developers.brevo.com/docs
- Email Template Guide: https://help.brevo.com/hc/en-us/articles/
- BAA Request: support@brevo.com

**Node.js Resources:**
- EJS Templating: https://ejs.co/
- Bull Queue: https://github.com/OptimalBits/bull
- node-schedule: https://www.npmjs.com/package/node-schedule

---

## ✅ Final Checklist Before Production

- [ ] All environment variables set in .env
- [ ] Database migrations run (bookings, email_events, clients extended)
- [ ] API endpoints tested in staging
- [ ] Email templates render correctly
- [ ] Cron job scheduled and logging
- [ ] Email queue processing and retrying
- [ ] Webhook endpoint receiving Brevo events
- [ ] No PHI leakage (security audit)
- [ ] HIPAA compliance verified (BAA signed, encryption, audit logs)
- [ ] Test bookings → emails arriving <5 min
- [ ] Mobile rendering tested (iPhone + Android)
- [ ] Analytics dashboard configured (opens, clicks, conversions)
- [ ] Error alerts set up (failed sends, bounce spikes)
- [ ] Backup/recovery plan documented
- [ ] Ready to deploy

---

**Total implementation time: 7-13 hours**
**Status: Ready for deployment**
**Git commit: 5dd6318 (pushed to main)**
