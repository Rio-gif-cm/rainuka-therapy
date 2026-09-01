# Therapist Credential Schema.org Research & Implementation

**Date:** August 31, 2026  
**Focus:** SEO Credibility Enhancement via Schema.org Markup  
**Task:** Research and implement therapist credential markup for Rainuka Oberoi, LCSW

---

## Research Findings

### 1. Schema.org Standards for Therapists

#### Best Practices Identified:

**LocalBusiness vs. MedicalBusiness vs. HealthAndBeautyBusiness**

| Schema Type | Best For | Key Properties |
|---|---|---|
| **MedicalBusiness** | Licensed mental health professionals, therapists, counselors | `medicalSpecialty`, `hasCredential`, `medicineCredential` |
| **HealthAndBeautyBusiness** | Wellness practitioners, non-licensed providers | Basic business info, less clinical weight |
| **LocalBusiness + ProfessionalService** | Generic therapist listings, lower SEO impact | Basic contact, hours, services |

**Current State:** Site uses `LocalBusiness + ProfessionalService` (lines 102-142 in layout.tsx)  
**Recommendation:** Enhance with therapist-specific credential markup using `hasCredential` property chain

---

### 2. Therapist Credential Markup Standard

#### Key Properties for Credentials:

```json
{
  "@type": "Credential",
  "credentialCategory": "License",
  "name": "Licensed Clinical Social Worker (LCSW)",
  "areaServed": {
    "@type": "State",
    "name": "California"
  },
  "validFrom": "YYYY-MM-DD",
  "credentialSubject": {
    "@type": "Person",
    "name": "Rainuka Oberoi"
  }
}
```

#### License Types for Mental Health:
- **LCSW** (Licensed Clinical Social Worker) - Primary credential
- **LMFT** (Licensed Marriage and Family Therapist)
- **LPCC** (Licensed Professional Counselor Supervisor)
- **Psychologist** (Ph.D. or Psy.D.)

#### Specializations (medicalSpecialty):
- Perinatal Mental Health
- Adult ADHD Diagnosis
- Reproductive Trauma
- Career Counseling
- Trauma-Informed Therapy

---

### 3. Insurance Schema Integration

#### Insurance Acceptance Properties:

```json
{
  "@type": "HealthInsurancePlan",
  "name": "Insurance Plans Accepted",
  "acceptedPaymentMethod": [
    "Insurance",
    "Cash",
    "Credit Card"
  ]
}
```

**Note:** Insurance details should be data-driven from business info; using placeholder structure for extensibility.

---

### 4. SEO Impact & YMYL Compliance

#### Why This Matters for Therapy Websites:

1. **YMYL (Your Money or Your Life):** Mental health content is regulated by Google's YMYL policy
   - Requires demonstrated E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
   - Credential markup directly addresses "A" and "T" signals

2. **Local Medical Discovery:** MedicalBusiness markup enables:
   - Featured in health-specific search results
   - Better categorization in Google Maps medical categories
   - Rich snippet display in SERPs

3. **Patient Trust Signals:**
   - Visible license validation in search results
   - Specialization clarity reduces bounce rate
   - Credential verification improves conversion

---

### 5. Key Implementation Recommendations

#### For Rainuka Oberoi Therapy Practice:

✅ **Primary Improvement:** Add `hasCredential` array to existing LocalBusiness schema
✅ **Secondary:** Expand `medicalSpecialty` with structured therapist focus areas
✅ **Future:** Consider migration to MedicalBusiness when other medical details are finalized

#### Data Points Needed:
- LCSW License Number (if shareable)
- State of License (CA)
- License Issue/Renewal Dates
- Accepted Insurance Plans (if applicable)
- Supervision Credentials (if applicable)

---

## Schema.org Documentation Sources

1. **schema.org/MedicalBusiness** - Official specification for medical/health businesses
   - URL: https://schema.org/MedicalBusiness
   - Usage: 100K-1M domains (July 2026)
   - Key: Medical specialties, credentials, healthcare-specific properties

2. **schema.org/Credential** - Structured credential markup
   - URL: https://schema.org/Credential
   - Properties: credentialCategory, name, areaServed, validFrom

3. **schema.org/LocalBusiness** - Foundation type (currently used)
   - URL: https://schema.org/LocalBusiness
   - Properties: hasCertification, hasCredential (supported but not utilized)

4. **SchemaValidator MedicalBusiness Guide** - Implementation best practices
   - Emphasis on verified credentials only
   - Requirements for license accuracy
   - Healthcare compliance safeguards

---

## Therapist SEO Best Practices (from ProfileTree & Reframe)

1. **Display Credentials Prominently**
   - License type and jurisdiction visible
   - Professional memberships (BACP, UKCP, etc.)
   - Registration numbers where shareable

2. **Specialization Clarity**
   - One-page-per-specialty approach
   - Specific focus areas (Perinatal, ADHD, Career) ranked in SERPs
   - Structured data + content alignment

3. **Trust Signals**
   - Insurance acceptance (if available)
   - Supervision/consultation arrangements
   - Years of experience
   - Client testimonials (ethically)

4. **Local SEO for Therapists**
   - Google Business Profile optimization
   - Location-based keyword targeting
   - Area served markup (state/regional level for telehealth)

---

## Implementation: Credential Markup Enhancement

**File Modified:** `app/layout.tsx`  
**Change:** Added `hasCredential` array to organizationSchema (lines ~126-145)

```typescript
hasCredential: [
  {
    "@type": "Credential",
    "@id": "https://rainukatherapy.com#lcsw-credential",
    "name": "Licensed Clinical Social Worker (LCSW)",
    "credentialCategory": "License",
    "areaServed": {
      "@type": "State",
      "name": "California"
    },
    "credentialSubject": {
      "@type": "Person",
      "name": "Rainuka Oberoi"
    }
  }
],
medicalSpecialty: [
  "Perinatal Mental Health",
  "Postpartum Anxiety",
  "Reproductive Trauma",
  "Adult ADHD Diagnosis",
  "Career Counseling",
  "Trauma-Informed Therapy"
]
```

**Why This Approach:**
- ✅ Uses standard schema.org properties supported by Google
- ✅ Adds credential specificity without claiming unverified information
- ✅ Expands medicalSpecialty list for better search categorization
- ✅ Maintains backward compatibility with LocalBusiness structure
- ✅ Future-proof: Can scale to MedicalBusiness type when needed

---

## Validation & Next Steps

### Testing:
1. Google Rich Results Test: https://search.google.com/test/rich-results
2. Schema.org Validator: https://validator.schema.org/
3. Server deployment: Verify schema renders in HTML

### Future Enhancements:
- [ ] Add license number (if public)
- [ ] Add validFrom/validThrough dates for license
- [ ] Insurance acceptance array (if available)
- [ ] Testimonials/AggregateRating integration
- [ ] Consider MedicalBusiness migration if clinical detail level increases

---

## Commit & Deploy

**Commit Message:** `research: therapist credential schema`  
**Changes:**
- Added `hasCredential` array with LCSW markup
- Expanded `medicalSpecialty` structure
- Enhanced schema.org SEO credibility signals

**Deployment:** Next.js build → Deploy to production  
**Verification:** Schema visible in page source after build
