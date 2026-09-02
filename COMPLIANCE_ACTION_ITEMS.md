# Canadian Compliance - Action Items (Prioritized)

## 🔴 CRITICAL (Do This Week)

### 1. Update Privacy Policy: HIPAA → PIPEDA
**File:** `app/privacy/page.tsx`
- Replace all "HIPAA" references with "PIPEDA"
- Add PIPEDA-specific rights
- Include OPC (Office of Privacy Commissioner) contact
- Add Canadian data location/transfer disclosure

**Estimated Time:** 30 minutes
**Risk if Skipped:** Privacy Commissioner audit, fines up to $100K CAD

---

### 2. Add Global Healthcare Disclaimer (Footer)
**File:** `components/Footer.tsx`
- Add: "This is NOT medical treatment"
- Add: "See medical professional for health concerns"
- Add: Canadian crisis lines (988, 211)
- Add: Therapist jurisdiction (U.S./Canadian)

**Estimated Time:** 15 minutes
**Risk if Skipped:** Liability insurance may deny claims

---

### 3. Clarify LCSW Credential (U.S. Only)
**File:** `app/about/page.tsx` (Line 225-229)
- Add: "LCSW is a U.S. credential"
- Add: Canadian licensing status (if any)
- Add: Which Canadian regulator handles complaints

**Estimated Time:** 20 minutes
**Risk if Skipped:** Misrepresentation to Canadian clients, regulatory action

---

### 4. Fix Template Placeholders
**Files:** `app/contact/page.tsx`, `app/layout.tsx`
- "Serving [State] & 27 other states" → "Serving [List of Canadian Provinces]"
- "Based in [location]" → Actual location or "Telehealth-based in [Province]"

**Estimated Time:** 10 minutes
**Risk if Skipped:** Looks unprofessional, confuses clients

---

## 🟡 MODERATE (Within 2 Weeks)

### 5. Create Terms of Service Page
**File:** `app/terms/page.tsx` (new)
**Must include:**
- Therapy conditions & confidentiality limits
- Cancellation policy
- Fees & payment terms
- Telehealth consent
- Governing law: [Canadian Province]
- Liability disclaimers

**Estimated Time:** 2-3 hours
**Risk if Skipped:** No dispute resolution, liability exposure

---

### 6. Add Business Registration & Tax Info
**File:** Create `/terms` or add to footer/contact page
**Required fields:**
- Legal business name
- Business Number (BN) or note that not registered
- HST registration status (Yes/No)
- Operating province(s)
- Registered address or "Telehealth-based"

**Estimated Time:** 30 minutes (if info is available)
**Risk if Skipped:** CRA liability, client confusion on tax deductions

---

### 7. Create Telehealth Consent Form
**File:** `app/booking/consent.tsx` (new component)
- Virtual therapy disclosure
- Privacy limitations
- Technical backup plan
- Jurisdiction statement

**Estimated Time:** 1-2 hours
**Risk if Skipped:** Regulatory non-compliance, informed consent gaps

---

## 🟠 LOW (This Month)

### 8. Update Crisis Resources
**Files:** All pages mentioning crisis support
- Change: "988 (U.S.)" to "988 (Canada Suicide & Crisis Lifeline)"
- Add: "211 [Province]"
- Add: "911 for emergency"

**Estimated Time:** 30 minutes
**Risk if Skipped:** Clients misled to U.S.-only crisis lines

---

### 9. Verify Third-Party PIPEDA Compliance
**Action:** Email Brevo, Vercel, Render confirming PIPEDA/GDPR compliance
**File:** Update `app/privacy/page.tsx` with vendor confirmations

**Estimated Time:** 2 days (waiting for responses)
**Risk if Skipped:** Data processors may violate PIPEDA

---

### 10. Legal Review by Canadian Attorney
**Action:** Hire lawyer familiar with healthcare + PIPEDA
**Cost:** $500-2,000 CAD
**Timeline:** 1 week turnaround

**Estimated Time:** Async
**Risk if Skipped:** Missing provincial-specific regulations

---

## Total Effort
- **Critical:** 1.5 hours
- **Moderate:** 4-5 hours
- **Low:** 2.5 hours
- **Legal review:** Async (2-5 days)

**Grand Total: 8-10 hours of dev work + legal review**

---

## Testing After Fixes

1. ✅ Verify all template placeholders removed
2. ✅ Check PIPEDA language appears on privacy page
3. ✅ Confirm healthcare disclaimer visible on footer
4. ✅ Test links to Terms of Service, Telehealth Consent
5. ✅ Verify crisis lines match Canada standards
6. ✅ Have Canadian lawyer do final compliance check

---

## Deployment Gate

**DO NOT ACCEPT CANADIAN CLIENTS UNTIL:**
- [ ] PIPEDA privacy policy updated
- [ ] Healthcare disclaimer added globally
- [ ] LCSW credential clarification added to About
- [ ] Terms of Service page created
- [ ] Template placeholders fixed
- [ ] Legal review complete

---

## Questions to Answer Before Deployment

1. **Is Rainuka licensed to practice in Canada?** (RSW/CSW/Other?)
2. **Which Canadian province(s) are clients based in?**
3. **What is the Business Number (BN)?**
4. **Is the practice HST-registered?**
5. **What is the legal business name?**
6. **Which Canadian regulatory body (if any) governs this practice?**

**These answers must be added to website before Canadian client intake.**

---

Generated: September 1, 2026
