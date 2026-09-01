# Email Automation Wave 1: Backend Implementation Guide

## Overview

This guide documents how to implement email automation for therapy booking confirmations and pre-session prep emails. The system is designed to:
- ✅ Comply with HIPAA (no PHI in emails, encryption, audit logs)
- ✅ Scale with minimal overhead (cron jobs, not polling)
- ✅ Support personalization (by persona: perinatal, ADHD, career)
- ✅ Integrate with existing booking flow
- ✅ Track performance (opens, clicks, conversions)

---

## Architecture Overview

```
Booking Form (Frontend)
    ↓
Booking API Endpoint (POST /api/bookings)
    ↓
Database: Store booking + client info
    ↓
Email Service (Brevo / SendGrid)
    ↓
Email Queue: Track delivery, opens, clicks
```

### Tech Stack

| Component | Technology | Why |
|-----------|-----------|-----|
| Email Service | Brevo or SendGrid | HIPAA BAA, affordable ($0-30/mo), reliable |
| Queue System | Bull (Redis) or simple DB polling | Delayed sends, retry logic |
| Cron Job | node-schedule or cron-parser | Trigger emails at exact times |
| Template Engine | EJS or Handlebars | Personalization (name, date, time, persona) |
| Analytics | Email service webhooks | Track opens/clicks for optimization |

---

## Phase 1: Database Schema

### Bookings Table
```sql
CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID NOT NULL REFERENCES clients(id),
  appointment_date TIMESTAMP NOT NULL,
  appointment_time TIME NOT NULL,
  session_type VARCHAR(50), -- "first_session", "follow_up", etc.
  therapist_id UUID REFERENCES therapists(id),
  
  -- Intake form status
  intake_form_completed BOOLEAN DEFAULT FALSE,
  intake_form_completed_at TIMESTAMP,
  
  -- Email tracking
  confirmation_email_sent BOOLEAN DEFAULT FALSE,
  confirmation_email_sent_at TIMESTAMP,
  confirmation_email_opened BOOLEAN DEFAULT FALSE,
  confirmation_email_opened_at TIMESTAMP,
  
  presession_email_sent BOOLEAN DEFAULT FALSE,
  presession_email_sent_at TIMESTAMP,
  presession_email_opened BOOLEAN DEFAULT FALSE,
  presession_email_opened_at TIMESTAMP,
  
  -- Metadata
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  
  -- HIPAA compliance
  created_by_user_id UUID REFERENCES users(id),
  is_sensitive BOOLEAN DEFAULT FALSE  -- Flag if special privacy needed
);
```

### Clients Table (Extended)
```sql
ALTER TABLE clients ADD COLUMN (
  primary_reason VARCHAR(255),  -- "postpartum", "ADHD", "career", etc.
  diagnosed_with TEXT[],  -- Array: ["ADHD", "anxiety", "depression"]
  email_preference VARCHAR(50) DEFAULT 'both',  -- "email_only", "text_only", "both"
  email_consent_given BOOLEAN DEFAULT FALSE,
  email_consent_given_at TIMESTAMP
);
```

### Email Events Table (for tracking)
```sql
CREATE TABLE email_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id UUID NOT NULL REFERENCES bookings(id),
  email_type VARCHAR(50), -- "confirmation", "presession", "reminder"
  event_type VARCHAR(50), -- "sent", "opened", "clicked", "bounced", "complained"
  event_data JSONB,  -- Store metadata: client IP, click URL, etc.
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## Phase 2: API Endpoints

### POST /api/bookings
**Purpose:** Create a booking and trigger confirmation email

**Request:**
```json
{
  "client_id": "uuid",
  "appointment_date": "2026-09-02",
  "appointment_time": "14:00",
  "session_type": "first_session",
  "therapist_id": "uuid"
}
```

**Response:**
```json
{
  "id": "booking-uuid",
  "status": "confirmed",
  "appointment_date": "2026-09-02",
  "appointment_time": "14:00",
  "confirmation_email": {
    "sent_at": "2026-08-31T14:00:00Z",
    "delivery_status": "queued"
  }
}
```

**Logic:**
```javascript
async function createBooking(req, res) {
  const { client_id, appointment_date, appointment_time, session_type, therapist_id } = req.body;
  
  // Validate inputs
  if (!client_id || !appointment_date || !appointment_time) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  
  try {
    // 1. Create booking in database
    const booking = await db.query(`
      INSERT INTO bookings (client_id, appointment_date, appointment_time, session_type, therapist_id)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `, [client_id, appointment_date, appointment_time, session_type, therapist_id]);
    
    // 2. Queue confirmation email (send within 5 minutes)
    await emailQueue.add('send_confirmation_email', {
      booking_id: booking.id,
      client_id: client_id,
      appointment_date: appointment_date,
      appointment_time: appointment_time,
      session_type: session_type
    }, {
      delay: 1000 * 60 * 2  // Send in 2 minutes
    });
    
    // 3. Schedule pre-session email (send 48h or 24h before, depending on session_type)
    const presession_delay = session_type === 'first_session' ? 48 * 60 * 60 * 1000 : 24 * 60 * 60 * 1000;
    const presession_send_at = new Date(new Date(appointment_date).getTime() - presession_delay);
    
    await emailQueue.add('send_presession_email', {
      booking_id: booking.id,
      client_id: client_id,
      appointment_date: appointment_date,
      appointment_time: appointment_time,
      session_type: session_type
    }, {
      delay: presession_send_at.getTime() - Date.now()
    });
    
    // 4. Log email event
    await db.query(`
      INSERT INTO email_events (booking_id, email_type, event_type, event_data)
      VALUES ($1, $2, $3, $4);
    `, [booking.id, 'confirmation', 'queued', JSON.stringify({ queued_at: new Date() })]);
    
    res.json({ id: booking.id, status: 'confirmed', message: 'Confirmation email queued' });
  } catch (error) {
    console.error('Booking error:', error);
    res.status(500).json({ error: 'Failed to create booking' });
  }
}
```

### Webhook: POST /api/emails/events
**Purpose:** Receive email delivery/open/click events from email service

**Sent by:** Brevo or SendGrid webhooks

**Request:**
```json
{
  "event": "opened",  // or "clicked", "delivered", "bounced"
  "email": "client@example.com",
  "template_id": "confirmation_email_v1",
  "external_id": "booking-uuid",
  "timestamp": 1693497600,
  "link": "https://example.com/intake-form"  // for "clicked" events
}
```

**Logic:**
```javascript
async function handleEmailEvent(req, res) {
  const { event, email, external_id: booking_id, link, timestamp } = req.body;
  
  try {
    // 1. Record event in database
    const email_type = link?.includes('intake') ? 'confirmation' : 
                       link?.includes('reschedule') ? 'confirmation' : 'presession';
    
    await db.query(`
      INSERT INTO email_events (booking_id, email_type, event_type, event_data)
      VALUES ($1, $2, $3, $4);
    `, [
      booking_id,
      email_type,
      event,
      JSON.stringify({ email, link, timestamp, user_agent: req.headers['user-agent'] })
    ]);
    
    // 2. Update booking record if needed
    if (event === 'opened' && email_type === 'confirmation') {
      await db.query(`
        UPDATE bookings SET confirmation_email_opened = true, confirmation_email_opened_at = NOW()
        WHERE id = $1;
      `, [booking_id]);
    }
    
    if (event === 'opened' && email_type === 'presession') {
      await db.query(`
        UPDATE bookings SET presession_email_opened = true, presession_email_opened_at = NOW()
        WHERE id = $1;
      `, [booking_id]);
    }
    
    res.json({ status: 'ok' });
  } catch (error) {
    console.error('Email event error:', error);
    res.status(500).json({ error: 'Failed to record event' });
  }
}
```

---

## Phase 3: Email Service Integration

### Option A: Brevo (Recommended for Therapy)

**Setup:**
1. Create Brevo account (free tier available)
2. Request Business Associate Agreement (BAA) for HIPAA compliance
3. Generate API key
4. Add to `.env`: `BREVO_API_KEY=xxx`

**Send Confirmation Email:**
```javascript
const Brevo = require('@getbrevo/brevo');
const api = new Brevo.TransactionalEmailsApi();
api.setApiKey(Brevo.ApiKeyAuth, process.env.BREVO_API_KEY);

async function sendConfirmationEmail(booking, client) {
  // Load template from template engine (see Phase 4)
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
    persona: client.primary_reason,  // "perinatal", "adhd", "career"
  });
  
  const sendSmtpEmail = {
    to: [{ email: client.email, name: client.first_name }],
    sender: { email: 'noreply@rainukatherapy.com', name: 'Rainuka' },
    subject: `You're booked with Rainuka on ${booking.appointment_date} at ${booking.appointment_time}`,
    htmlContent: emailContent,
    externalId: booking.id,  // Track this booking in webhooks
    replyTo: { email: process.env.THERAPIST_EMAIL },
    tags: ['booking_confirmation', client.primary_reason || 'general'],
  };
  
  const result = await api.sendTransacEmail(sendSmtpEmail);
  return result;
}
```

### Option B: SendGrid

**Setup:** Similar to Brevo, but uses different API

```javascript
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendConfirmationEmail(booking, client) {
  const emailContent = await renderTemplate('booking_confirmation', { /* ... */ });
  
  const msg = {
    to: client.email,
    from: 'noreply@rainukatherapy.com',
    subject: `You're booked with Rainuka on ${booking.appointment_date}`,
    html: emailContent,
    replyTo: process.env.THERAPIST_EMAIL,
    customArgs: {
      booking_id: booking.id,
      email_type: 'confirmation'
    }
  };
  
  return await sgMail.send(msg);
}
```

---

## Phase 4: Template Engine

### EJS Templates

**File:** `templates/booking_confirmation.ejs`
```ejs
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { font-size: 20px; font-weight: bold; margin-bottom: 20px; }
    .section { margin: 20px 0; border-bottom: 1px solid #eee; padding-bottom: 20px; }
    .cta { display: inline-block; background: #0066cc; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; }
    .small { font-size: 12px; color: #999; }
  </style>
</head>
<body>
  <div class="container">
    <p>Hi <strong><%= client_first_name %></strong>,</p>
    
    <p class="header">You're all set for your <%= session_type === 'first_session' ? 'first' : 'follow-up' %> session with me on <strong><%= appointment_date %></strong> at <strong><%= appointment_time %></strong>.</p>
    
    <div class="section">
      <h3>Where to Come & Parking</h3>
      <p><strong><%= practice_address %></strong></p>
      <% if (parking_info) { %>
        <p><%= parking_info %></p>
      <% } %>
    </div>
    
    <div class="section">
      <h3>Before We Meet</h3>
      <p>Please take 5 minutes to fill out this intake form:</p>
      <p><a href="<%= intake_form_link %>" class="cta">Complete Intake Form</a></p>
      
      <% if (persona === 'perinatal') { %>
        <p>You might feel nervous. That's completely normal. If you're experiencing postpartum anxiety or overwhelm—I see that a lot. You're not alone, and you're not broken.</p>
      <% } else if (persona === 'adhd') { %>
        <p><strong>ADHD reality check:</strong> ADHD is neuroscience, not a character flaw. You're not broken or lazy. If you forgot the form—no judgment. We can do it when you arrive.</p>
      <% } else if (persona === 'career') { %>
        <p>Career transitions are hard. Burnout is real. Let's figure out what comes next together.</p>
      <% } %>
    </div>
    
    <div class="section">
      <h3>What to Bring</h3>
      <ul>
        <li>Photo ID</li>
        <li>Insurance card (if applicable)</li>
        <li>Water bottle</li>
      </ul>
      <p><em>Pro tip: Tissues are here. Bring notes if you're worried you'll forget what you wanted to say.</em></p>
    </div>
    
    <div class="section">
      <h3>Need to Reschedule?</h3>
      <p>No problem. <a href="<%= reschedule_link %>" class="cta">Reschedule Here</a></p>
      <p><strong>Cancellation policy:</strong> Reschedule 24+ hours before for free. Cancel within 24 hours and the full session fee applies.</p>
    </div>
    
    <div class="section">
      <p>I'm really looking forward to meeting you on <%= appointment_date %>. If you have any questions, just reply to this email.</p>
      <p>See you then.</p>
      <p><strong><%= therapist_name %></strong><br/>
      <%= therapist_phone %><br/>
      <%= therapist_email %></p>
    </div>
    
    <p class="small">This email contains your appointment information. As part of my HIPAA commitment, I keep all session details confidential.</p>
  </div>
</body>
</html>
```

### Render Function
```javascript
const ejs = require('ejs');

async function renderTemplate(templateName, data) {
  const templatePath = `./templates/${templateName}.ejs`;
  return new Promise((resolve, reject) => {
    ejs.renderFile(templatePath, data, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}
```

---

## Phase 5: Scheduling (Cron Jobs)

### Pre-Session Email Scheduler

**Purpose:** Send emails 24-48 hours before appointment

```javascript
const schedule = require('node-schedule');

// Run every hour to check for upcoming sessions
const job = schedule.scheduleJob('0 * * * *', async () => {
  try {
    // Find bookings where:
    // 1. Appointment is 48 hours away (for first sessions)
    // 2. Appointment is 24 hours away (for follow-ups)
    // 3. Email hasn't been sent yet
    
    const now = new Date();
    const in_48_hours = new Date(now.getTime() + 48 * 60 * 60 * 1000);
    const in_24_hours = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    
    // Get first sessions due in ~48 hours
    const firstSessions = await db.query(`
      SELECT b.*, c.*, t.*
      FROM bookings b
      JOIN clients c ON b.client_id = c.id
      JOIN therapists t ON b.therapist_id = t.id
      WHERE b.session_type = 'first_session'
      AND b.appointment_date::timestamp = $1::timestamp
      AND b.presession_email_sent = false
      AND NOW() > b.appointment_date - interval '48 hours'
      AND NOW() < b.appointment_date - interval '47.5 hours';
    `, [in_48_hours]);
    
    // Get follow-ups due in ~24 hours
    const followUps = await db.query(`
      SELECT b.*, c.*, t.*
      FROM bookings b
      JOIN clients c ON b.client_id = c.id
      JOIN therapists t ON b.therapist_id = t.id
      WHERE b.session_type = 'follow_up'
      AND b.appointment_date::timestamp = $1::timestamp
      AND b.presession_email_sent = false
      AND NOW() > b.appointment_date - interval '24 hours'
      AND NOW() < b.appointment_date - interval '23.5 hours';
    `, [in_24_hours]);
    
    // Send emails
    for (const booking of [...firstSessions, ...followUps]) {
      await sendPresessionEmail(booking, booking);  // booking has client + therapist joined
      
      // Mark as sent
      await db.query(`
        UPDATE bookings SET presession_email_sent = true, presession_email_sent_at = NOW()
        WHERE id = $1;
      `, [booking.id]);
      
      console.log(`Pre-session email sent for booking ${booking.id}`);
    }
  } catch (error) {
    console.error('Cron job error:', error);
  }
});
```

---

## Phase 6: Error Handling & Retries

### Retry Logic for Failed Sends

```javascript
const emailQueue = new Bull('email', {
  redis: { host: process.env.REDIS_HOST, port: process.env.REDIS_PORT }
});

emailQueue.process('send_confirmation_email', async (job) => {
  try {
    const result = await sendConfirmationEmail(job.data.booking_id);
    return result;
  } catch (error) {
    // Retry up to 3 times with exponential backoff
    if (job.attemptsMade < 3) {
      throw error;  // Bull will retry automatically
    } else {
      // Log to database for manual review
      await db.query(`
        INSERT INTO email_events (booking_id, email_type, event_type, event_data)
        VALUES ($1, $2, $3, $4);
      `, [job.data.booking_id, 'confirmation', 'failed', JSON.stringify({ error: error.message })]);
      throw error;
    }
  }
});

emailQueue.on('failed', async (job, error) => {
  console.error(`Email job ${job.id} failed:`, error);
  // Send alert to admin
  await sendAdminAlert(`Email sending failed for booking ${job.data.booking_id}: ${error.message}`);
});
```

---

## Phase 7: HIPAA Compliance Checklist

- [ ] **End-to-end encryption:** Email service uses TLS 1.2+
- [ ] **Business Associate Agreement (BAA):** Signed with Brevo/SendGrid
- [ ] **No PHI beyond appointment details:** Confirmation email contains only: date, time, location, therapist name
- [ ] **Audit logs:** All email events recorded in database with timestamp, user IP, action
- [ ] **Secure storage:** Email content stored encrypted in database (if stored at all)
- [ ] **Access control:** Only therapist + authorized staff can view booking/email records
- [ ] **Data retention policy:** Email events deleted after 6 months (configurable)
- [ ] **Client consent:** Email address collected with explicit consent to receive emails
- [ ] **Unsubscribe option:** All transactional emails include unsubscribe link (if non-transactional)
- [ ] **Incident response plan:** Documented process if email breached (notify clients within 24h)

---

## Testing Checklist

### Unit Tests
- [ ] `createBooking()` creates record and queues emails
- [ ] `sendConfirmationEmail()` renders template with personalization
- [ ] `sendPresessionEmail()` selects correct template (perinatal/ADHD/career)
- [ ] `handleEmailEvent()` correctly logs opens/clicks
- [ ] Retry logic retries failed sends 3x with backoff

### Integration Tests
- [ ] Book appointment → confirmation email arrives <5 min
- [ ] Fill out intake form → form completion recorded
- [ ] Click reschedule link → reschedule page loads
- [ ] 48 hours before first session → pre-session email sent
- [ ] 24 hours before follow-up → pre-session email sent

### End-to-End Tests
- [ ] Full booking flow from form submission to email delivery
- [ ] Email opens tracked in database
- [ ] Email clicks tracked in database
- [ ] No-show rate before/after email automation

---

## Deployment Steps

1. **Create database schema** (migrations)
2. **Set up email service** (Brevo API key, BAA signed)
3. **Deploy API endpoints** (`/api/bookings`, `/api/emails/events`)
4. **Deploy email templates** (EJS files to server)
5. **Start cron job** (scheduler running continuously)
6. **Test end-to-end** (book appointment, verify email)
7. **Monitor** (email delivery rate, opens, bounces)
8. **Iterate** (A/B test subject lines, copy)

---

## Monitoring & Analytics

### Metrics to Track
- **Delivery rate:** % of emails delivered (aim: >95%)
- **Open rate:** % of emails opened (aim: >60%)
- **Click rate:** % who clicked intake form / reschedule link (aim: >45%)
- **Form completion:** % who filled out intake after clicking (aim: >50%)
- **No-show rate:** % of appointments where client didn't show (aim: reduce by 20-30%)
- **Bounce rate:** % of undeliverable emails (aim: <2%)

### Dashboard (Example)
```
Email Automation Wave 1 Metrics
├─ Total Confirmations Sent: 47
├─ Delivery Rate: 97.9%
├─ Open Rate: 64%
├─ Intake Form Click Rate: 72%
├─ Form Completion Rate: 55%
├─ No-Show Rate (Before): 18%
├─ No-Show Rate (After): 6%
└─ Revenue Impact: +$180/month (3 no-shows saved)
```

---

## Future Enhancements (Wave 2+)

- **Post-session follow-up email** (72h after session)
- **Multi-email drip sequences** (welcome series, onboarding, check-ins)
- **SMS reminders** (for higher engagement)
- **Referral tracking** (auto-send when referred by another client)
- **Insurance pre-auth emails** (auto-request authorization)
- **Intake form auto-fill** (pre-populate from booking data)
- **Testimonial requests** (after N sessions)
- **Re-engagement campaigns** (for inactive clients)

