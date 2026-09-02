# Canadian Compliance Audit Report
## Rainuka Oberoi Therapy Website

**Date:** September 1, 2026  
**Audit Scope:** Legal registration, credentials, healthcare disclaimers, privacy policy (PIPEDA), tax ID, and required legal pages  
**Client Base:** Canadian clients

---

## EXECUTIVE SUMMARY

**COMPLIANCE STATUS:** ⚠️ **SIGNIFICANT GAPS IDENTIFIED**

The website contains several **critical and moderate compliance gaps** for Canadian service delivery:

| Requirement | Status | Severity |
|---|---|---|
| Canadian business registration verification | ❌ Missing | CRITICAL |
| LCSW credential translation/equivalency | ⚠️ Partial | CRITICAL |
| Healthcare disclaimers | ⚠️ Weak | CRITICAL |
| PIPEDA privacy policy reference | ❌ Missing | CRITICAL |
| Terms of Service page | ❌ Missing | MODERATE |
| Tax ID / HST number disclosure | ❌ Missing | MODERATE |
| Accessibility statement | ✅ Present | Compliant |
| Privacy policy | ✅ Present | Partial (US-focused) |

---

## FINDINGS BY REQUIREMENT

### 1. CANADIAN BUSINESS REGISTRATION ❌

**Finding:** No evidence of business registration verification on website.

**Gaps:**
- No reference to business name registration (provincial/federal)
- No Business Number (BN) or HST Registration Number displayed
- No indication of corporate structure (sole proprietor, corporation, partnership)
- Location listed as "[State] & 27 other states" (template placeholder, not Canada-specific)

**Why This Matters (Canadian Law):**
- All therapy practices operating in Canada must register with the province where they practice
- If operating across multiple Canadian provinces, federal registration may be required
- HST/GST applies to therapy services in most provinces

**Compliance Risk:** **HIGH**  
- Potential CRA liability if no HST registration exists
- Provincial regulators may require proof of business registration during compliance audits

---

### 2. LCSW CREDENTIAL TRANSLATION / CANADIAN EQUIVALENCY ❌

**Finding:** LCSW credential is U.S.-based; no Canadian equivalency information provided.

**Current State:**
```tsx
// app/about/page.tsx - Line 225-229
Licensed Clinical Social Worker (LCSW). Full license number and
issuing state are provided during your free consultation and on
any intake paperwork, so you can verify them directly with the
state licensing board.
```

**Problem for Canadian Clients:**
- LCSW is a **U.S. credential only** — issued by U.S. states
- Canada uses different credentials:
  - **Registered Social Workers (RSW)** — provincial regulation
  - **Certified Social Workers (CSW)** — national certification
  - **Licensed Clinical Social Workers** — NOT a Canadian credential
- Canadian clients need to know:
  1. Is the therapist also licensed in Canada (RSW/CSW)?
  2. What is the cross-border regulatory framework?
  3. Can they register complaints to a Canadian regulator?

**Compliance Risk:** **CRITICAL**  
- Misrepresentation of credentials to Canadian clients
- Canadian regulatory bodies (e.g., Ontario College of Social Workers and Social Service Workers) require specific disclosures
- Potential disciplinary action if not transparent about jurisdiction

**Required Disclosure:**
- Clear statement that LCSW is a U.S. credential
- If licensed in Canada, state province + regulatory body + license number
- If NOT licensed in Canada, disclose that therapy may not fall under provincial regulation

---

### 3. HEALTHCARE PROVIDER DISCLAIMERS ⚠️

**Finding:** Very limited, weak disclaimers. No comprehensive healthcare liability statement.

**Current Disclaimers Found:**
```tsx
// app/resources/perinatal-anxiety-guide/page.tsx
"This guide is educational and not a substitute for professional
medical advice. If you're experiencing severe symptoms or thoughts of
self-harm, contact your OB, psychiatrist, or call 988 (Suicide & Crisis Lifeline)."
```

```tsx
// app/adhd-faq/page.tsx (Line responding to ADHD testing question)
"As an LCSW I do not conduct formal psychological testing or prescribe medication."
```

**Gaps:**
- ❌ No global disclaimer on every page (header, footer, or policy page)
- ❌ No clear statement: "This is NOT medical care" (required for therapeutic boundaries)
- ❌ No statement about scope of practice (therapy ≠ psychiatry, psychology testing, prescribing)
- ❌ No emergency contact instructions for Canadian crisis lines (211, 988 US-only)
- ❌ No informed consent disclosure regarding telehealth risks
- ❌ No statement about therapist license jurisdiction

**Why This Matters (Canadian Law):**
- Canadian healthcare regulators require therapists to clearly state the limits of their practice
- Liability insurance requires explicit disclaimers
- Clients need to know therapy is NOT medical treatment under Canadian healthcare law

---

### 4. PRIVACY POLICY & PIPEDA COMPLIANCE ❌

**Current Privacy Policy:**
Located at `/privacy` (11,653 bytes)

**What Exists:**
- ✅ Data minimization principles ("only collect what you provide")
- ✅ HIPAA compliance mentioned (but HIPAA is U.S.-only)
- ✅ Data encryption standards (AES-256, TLS 1.3)
- ✅ User rights (access, correct, delete, portability)
- ✅ No Google Analytics or tracking

**Critical Gaps:**
```tsx
// app/privacy/page.tsx - Line 135-153
"HIPAA Compliance & Security
All session data is protected under HIPAA 
(Health Insurance Portability and Accountability Act):"
```

**Problem:** 
- **HIPAA is U.S. federal law only** — does NOT apply to Canadian therapists
- Canadian equivalent is **PIPEDA** (Personal Information Protection and Electronic Documents Act)
- HIPAA is mentioned but PIPEDA is **entirely absent**

**Required for Canadian Compliance (PIPEDA):**
```markdown
❌ MISSING:
1. Explicit reference to PIPEDA compliance
2. Data controller and processor identification
3. Purposes of data collection tied to therapeutic relationship
4. Consent mechanisms (explicit opt-in, not implied)
5. Data subject rights under PIPEDA (access, correction, challenge)
6. Breach notification procedures (mandatory in some provinces)
7. Data transfer restrictions (PIPEDA restricts cross-border transfers)
8. Third-party service locations (Brevo, Vercel must comply with PIPEDA)
9. Retention schedules (Canadian law varies by province)
10. Contact information for privacy complaints to provincial regulators

⚠️ PARTIALLY PRESENT:
- Generic "Your Rights" section (universal, not PIPEDA-specific)
- No provincial privacy office contact info
```

**Compliance Risk:** **CRITICAL**  
- PIPEDA violations can result in fines up to $100,000 CAD
- Provincial regulators (e.g., Ontario IPC) can conduct audits
- Class-action lawsuit potential if clients' data is mishandled

**Additional Concern:**
- Privacy policy mentions Brevo (email service) — no confirmation it's PIPEDA-compliant
- Vercel/Render hosting locations not disclosed — clients need to know if data leaves Canada

---

### 5. TAX ID / HST REGISTRATION NUMBER ❌

**Finding:** No tax ID, HST registration number, or tax-related disclosures.

**Gaps:**
- ❌ No Business Number (BN) displayed
- ❌ No HST/GST registration status stated
- ❌ No invoice/receipt policy documented
- ❌ No tax receipt language on pricing pages

**Why This Matters:**
- Canadian clients may claim therapy as a medical expense (tax deduction)
- HST-registered therapists must issue compliant invoices/receipts
- Clients need to verify HST registration for tax purposes
- CRA audits can target therapy practices

**Where Tax Info Should Appear:**
- Pricing page
- Invoice template
- Contact/business info footer
- Terms of Service

---

### 6. LEGAL PAGES INVENTORY ❌

**Pages That Exist:**
| Page | URL | Status |
|---|---|---|
| Privacy Policy | `/privacy` | ✅ EXISTS |
| Accessibility Statement | `/accessibility` | ✅ EXISTS |
| Terms of Service | N/A | ❌ **MISSING** |
| Contact/Business Info | `/contact` | ⚠️ INCOMPLETE |
| Disclaimer/Legal Notice | N/A | ❌ **MISSING** |

**Critical Missing Pages:**

#### A. **Terms of Service / Terms of Use** ❌
- Required by law in Canada for service providers
- Should include:
  - Conditions of therapy (cancellation policy, no-show fees)
  - Scope of services
  - Liability limitations
  - Dispute resolution
  - Governing law (should specify Canadian province)
  - Client confidentiality and mandatory reporting limits

#### B. **Medical / Healthcare Disclaimer** ❌
- Should clearly state:
  - Therapy is NOT medical treatment
  - Not a substitute for medical care
  - Therapist's scope (social work, not medicine/psychiatry)
  - When to seek emergency help (Canadian crisis lines)

#### C. **Telehealth Consent & Disclaimer** ❌
- Current state: Telehealth mentioned but no specific consent form
- Required for Canadian telehealth:
  - Informed consent to virtual therapy
  - Technical privacy/security acknowledgment
  - Backup support if connection fails
  - Jurisdiction and regulatory framework

---

## CANADIAN-SPECIFIC COMPLIANCE ISSUES

### Issue 1: Geographic Mismatch in Contact Information
```tsx
// app/contact/page.tsx - Line 58
"Telehealth Only
Serving [State] & 27 other states"
```
**Problem:** Template placeholder still in place. No mention of Canadian provinces.

### Issue 2: Therapy License Jurisdiction Unclear
**Current:** LCSW (U.S.) — no Canadian credential disclosure

**What Canadian Clients Need:**
- Clear statement: "I am licensed to practice therapy in [Province(s)] of Canada"
- OR: "I am not currently regulated by a Canadian provincial body; see Canadian regulatory status below"
- Regulatory body name (e.g., "College of Nurses of Ontario" if applicable)
- Client complaint process (which regulator to contact)

### Issue 3: Insurance Claims & HST
**Current:** References U.S. insurance (OON benefits), no Canadian info

**Missing:**
- Coverage under Canadian provincial health plans (unlikely, but should be stated)
- Whether HST is included in stated fees
- Invoicing format for tax deductions

### Issue 4: Crisis Resources
```tsx
// app/resources/perinatal-anxiety-guide/page.tsx
"call 988 (Suicide & Crisis Lifeline)"
```
**Problem:** 988 is U.S.-only. Canadians should call:
- **988** (Canada's new Suicide & Crisis Lifeline — as of Sept 2023)
- **211** (provincial health/mental health resources)
- **Emergency:** 911 or local emergency services

---

## RECOMMENDATIONS & FIXES

### CRITICAL (Do Immediately):

#### 1. Add Canadian Business Registration & Tax Information
**File:** Create `/terms` page or add to footer

```markdown
## Business Registration & Tax Information

**Business Name:** Rainuka Oberoi Therapy (or legal entity name)
**Operating Province:** [Canada, Province(s)]
**Business Number (BN):** [Insert CRA BN, if applicable]
**HST/GST Registration:** [Yes/No, and GST# if registered]
**Registered Address:** [Canadian address, or N/A if virtual-only]

**Regulatory Status:** This therapy practice is regulated by 
[insert Canadian regulatory body or "not subject to provincial regulation"].

**Tax Receipts:** Invoices for therapy services are issued on request 
and include HST where applicable.
```

#### 2. Replace HIPAA with PIPEDA in Privacy Policy
**File:** `app/privacy/page.tsx`

**Change:**
```tsx
// BEFORE:
"HIPAA Compliance & Security
All session data is protected under HIPAA 
(Health Insurance Portability and Accountability Act):"

// AFTER:
"PIPEDA Compliance & Security
All session data is protected under PIPEDA 
(Personal Information Protection and Electronic Documents Act), Canada's federal privacy law:"

// ADD:
"Data Protection Rights Under PIPEDA:
- Right to access your personal information
- Right to request corrections
- Right to understand how your data is used
- Right to challenge our practices
- Complaints may be filed with the Office of the Privacy Commissioner of Canada (OPC)

Contact: privacy@rainukatherapy.com or [Provincial Privacy Office if applicable]"
```

#### 3. Add Healthcare Disclaimer to Footer (Global)
**File:** `components/Footer.tsx` (create if missing)

```tsx
<div className="text-xs text-warm-gray-500 mt-8 pt-4 border-t border-warm-gray-200">
  <p>
    <strong>Important Disclaimer:</strong> This website provides 
    information about therapy services. Therapy is NOT medical treatment 
    and does not replace care from a doctor, psychiatrist, or other medical 
    professional. In a mental health emergency, contact local emergency 
    services (911) or a crisis line: Canada 988 or 211.
  </p>
</div>
```

#### 4. Add Canadian License Information to About Page
**File:** `app/about/page.tsx` (Line 225-229)

**Replace:**
```tsx
// BEFORE:
"Licensed Clinical Social Worker (LCSW). Full license number and
issuing state are provided during your free consultation..."

// AFTER:
"Licensed Clinical Social Worker (LCSW) in [U.S. State].
Note: LCSW is a U.S. credential. 

For Canadian clients: I am [regulated/not regulated] by 
[Canadian regulatory body if applicable]. For credential verification 
or regulatory complaints, contact [provincial college/board]."
```

#### 5. Create Terms of Service Page
**File:** `app/terms/page.tsx` (new)

**Must include:**
- Therapy conditions (confidentiality, mandatory reporting exceptions)
- Cancellation policy (24-hour cancellation notice, etc.)
- Fees and payment terms
- Telehealth consent & limitations
- Liability disclaimers
- Governing law: Provincial law of [Province] and laws of Canada

#### 6. Update Contact Page Template Placeholders
**File:** `app/contact/page.tsx`

**Change:**
```tsx
// BEFORE:
"Telehealth Only
Serving [State] & 27 other states"

// AFTER:
"Telehealth Only
Serving [List Canadian Provinces], regulated by [Regulatory Body]"
```

---

### MODERATE (Within 2 weeks):

#### 7. Create Telehealth Consent Form
**File:** New `/booking/telehealth-consent` or add to booking flow

```markdown
## Telehealth Consent & Privacy Agreement

By scheduling a telehealth appointment, you consent to:

1. **Virtual Therapy Delivery:**
   - Session conducted over [video platform]
   - I will verify your identity at start of session
   - You must be in a private location

2. **Privacy Acknowledgment:**
   - Third parties must not be visible/audible during session
   - I cannot guarantee absolute privacy on video platforms
   - Recording is not permitted without written consent

3. **Technical Limitations:**
   - If connection fails, we will reschedule
   - No therapy via text/chat (voice/video only)

4. **Data Protection:**
   - Your data is protected under Canadian privacy law (PIPEDA)
   - See privacy policy for full details

5. **Jurisdiction:**
   - This agreement is governed by the laws of [Province]
```

#### 8. Update Crisis Resources Site-Wide
**Files:** Search for "988" and add Canadian context

```markdown
## Mental Health Crisis Support

🆘 **Emergency:** 911 (or local emergency services)

📞 **Crisis Lines:**
- **Canada Suicide & Crisis Lifeline:** 988 or 1-833-456-4566
- **211 Ontario** (or your province): Information & referrals
- **Kids Help Phone:** 1-800-668-6868

📱 **Text Support:** Text 741741 (Crisis Text Line)

⚠️ **Immediate Danger:** Call 911 or go to nearest emergency room
```

### LOW PRIORITY (Housekeeping):

#### 9. Add HST Disclosure to Pricing Page
**File:** `app/pricing/page.tsx` (if exists) or `/booking`

```markdown
**HST:** [Where applicable, X% HST added to quoted fees]
**Tax Receipts:** Available upon request for tax deduction purposes
```

#### 10. Document Third-Party PIPEDA Compliance
**File:** Privacy policy addendum

```markdown
### Third-Party Vendors & Privacy

We use minimal third-party services, all PIPEDA-compliant:

- **Email (Brevo):** GDPR-compliant; confirms PIPEDA readiness [verify/link]
- **Hosting (Vercel/Render):** [Location + PIPEDA confirmation]
- **No analytics:** No behavioral tracking

Contracts with all vendors include data protection clauses 
and mandatory PIPEDA compliance.
```

---

## REGULATORY FRAMEWORK QUICK REFERENCE

### Canadian Privacy Law
- **Federal:** PIPEDA (applies to most therapy practices)
- **Provincial Adds:** 
  - Quebec: Law 25 (LPRPDE)
  - Alberta, BC: PIPA (similar to PIPEDA)
- **Regulator:** Office of the Privacy Commissioner of Canada (OPC)

### Therapy Licensing (Varies by Province)
- **Ontario:** College of Nurses of Ontario (CNO) — if RN/NP
  - Social workers: Social Work and Social Service Workers (OCSWSSW)
- **BC:** College of Nurses and Midwives of British Columbia
- **Alberta:** Health Professions Act — Psychologists, counsellors, social workers
- **Quebec:** Ordre professionnel des travailleurs sociaux du Québec

### Telehealth Requirements
- Informed consent required
- Privacy statement for video platform
- Therapist location disclosure (jurisdiction)
- Backup plan if connection lost

---

## SUMMARY TABLE: Compliance Checklist

| Requirement | Current State | Required By | Fix File | Priority |
|---|---|---|---|---|
| Canadian business registration | ❌ None | CRA/Provincial | `/terms` or footer | 🔴 CRITICAL |
| LCSW credential → Canadian equivalent | ⚠️ Partial | Provincial regulators | `app/about/page.tsx` | 🔴 CRITICAL |
| Healthcare disclaimer | ❌ Weak | Liability insurance | `components/Footer.tsx` | 🔴 CRITICAL |
| PIPEDA privacy policy | ❌ HIPAA only | PIPEDA statute | `app/privacy/page.tsx` | 🔴 CRITICAL |
| Terms of Service | ❌ Missing | Common law / CYA | `app/terms/page.tsx` | 🟡 MODERATE |
| Tax ID / HST disclosure | ❌ None | CRA / invoices | `app/pricing/page.tsx` | 🟡 MODERATE |
| Telehealth consent | ⚠️ Minimal | Provincial regulators | `app/booking/consent` | 🟡 MODERATE |
| Canadian crisis lines | ⚠️ 988 only (US) | Safety best practice | All resource pages | 🟠 LOW |

---

## COMPLIANCE RISK ASSESSMENT

**Overall Risk Level:** 🔴 **HIGH**

### If Audit Occurs:
1. **CRA (Canada Revenue Agency):** No HST/business number → potential penalties
2. **Provincial Regulator:** No disclosure of US-only credential → disciplinary action
3. **Privacy Commissioner:** Missing PIPEDA → audit + compliance order
4. **Liability Insurance:** Missing disclaimers → possible coverage denial

### If Client Complaint Filed:
- No Terms of Service → unclear dispute resolution
- No healthcare disclaimer → claim of misrepresentation
- PIPEDA violations → privacy complaint to OPC

---

## NEXT STEPS

1. **This Week:** Update privacy policy (HIPAA → PIPEDA) and add footer disclaimer
2. **Next Week:** Create Terms of Service, update About page credentials
3. **Week 3:** Create business registration/tax info page
4. **Week 4:** Audit all pages for template placeholders (e.g., "[State]", "[location]")
5. **Before Launch:** Legal review by Canadian healthcare attorney

---

## CONCLUSION

The website provides excellent user experience and accessibility but **lacks critical Canadian legal compliance**. The primary issues are:
1. No acknowledgment that LCSW is U.S.-only
2. Privacy policy references HIPAA instead of PIPEDA
3. Missing Terms of Service and healthcare disclaimer
4. Business registration/tax information absent

**These gaps expose the practice to regulatory liability and class-action risk.** Prioritize the CRITICAL fixes before accepting Canadian clients.

---

**Report Prepared:** September 1, 2026  
**Audit Conducted By:** Hermes Agent  
**Next Review:** After fixes implemented
