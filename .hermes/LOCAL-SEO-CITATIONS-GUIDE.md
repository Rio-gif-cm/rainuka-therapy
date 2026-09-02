# LOCAL SEO: CITATION TRACKING & TEMPLATE GUIDE
**SEO Polisher #3 | Citation Strategy**  
**Created:** September 1, 2026

---

## CITATION SPREADSHEET TEMPLATE

### How to Use This Template:

1. **Create a CSV file:** `LOCAL_SEO_AUDIT_RESOURCES/citation-tracker.csv`
2. **Columns:**
   - Directory Name
   - URL
   - Tier (1/2/3)
   - Status (To Claim / Claimed / Verified / Listed)
   - Username / Email
   - NAP Match (Yes/No/Partial)
   - Last Updated
   - Notes

3. **Update Monthly:** Check each directory for accuracy

### CSV Data (Copy-Paste Ready):

```csv
Directory Name,URL,Tier,Status,Username/Email,NAP Match,Last Updated,Notes
Psychology Today,https://www.psychologytoday.com,1,To Claim,TBD,Pending,2026-09-01,Essential therapist directory
TherapyDen,https://www.therapyden.com,1,To Claim,TBD,Pending,2026-09-01,Growing therapist platform
GoodTherapy,https://www.goodtherapy.org,1,To Claim,TBD,Pending,2026-09-01,High-authority network
Google My Business,https://business.google.com,1,To Claim,TBD,Pending,2026-09-01,CRITICAL for local search
Yelp,https://www.yelp.com,2,To Claim,TBD,Pending,2026-09-01,High authority service listings
Healthgrades,https://www.healthgrades.com,2,To Claim,TBD,Pending,2026-09-01,Healthcare provider directory
Facebook Business,https://www.facebook.com/business,2,To Claim,TBD,Pending,2026-09-01,Social + business profile
LinkedIn Company,https://www.linkedin.com,2,To Claim,TBD,Pending,2026-09-01,Professional credibility
Trustpilot,https://www.trustpilot.com,3,To Claim,TBD,Pending,2026-09-01,Review platform
ZoomInfo,https://www.zoominfo.com,3,To Claim,TBD,Pending,2026-09-01,Business data aggregator
Mapquest,https://www.mapquest.com,3,To Claim,TBD,Pending,2026-09-01,Maps + local listings
Bing Places,https://www.bingplaces.com,3,To Claim,TBD,Pending,2026-09-01,Bing local search
Apple Maps,https://appleconnect.apple.com,3,To Claim,TBD,Pending,2026-09-01,Apple Maps integration
Waze,https://www.waze.com,3,To Claim,TBD,Pending,2026-09-01,Navigation + local
NAMI (National Alliance on Mental Illness),https://www.nami.org,3,To Claim,TBD,Pending,2026-09-01,Mental health advocacy
Mental Health America,https://www.mhanational.org,3,To Claim,TBD,Pending,2026-09-01,Mental health resources
Ontario College of Social Workers,https://www.ocswssw.org,3,To Claim,TBD,Pending,2026-09-01,Provincial regulatory body
Crunchbase,https://www.crunchbase.com,3,To Claim,TBD,Pending,2026-09-01,Business database
BNI (Business Network International),https://www.bni.com,3,To Claim,TBD,Pending,2026-09-01,Networking organization
Psychology.com,https://www.psychology.com,3,To Claim,TBD,Pending,2026-09-01,Psychology directory
TherapyWorks,https://therapyworks.com,3,To Claim,TBD,Pending,2026-09-01,Therapist network
Career Counselors Association,https://www.ncda.org,3,To Claim,TBD,Pending,2026-09-01,Career specialty
ABCT (Association for Behavioral and Cognitive Therapies),https://www.abct.org,3,To Claim,TBD,Pending,2026-09-01,Therapy association
```

---

## NAP MASTER DATA TEMPLATE

### NAP Consistency Source File

**File:** `LOCAL_SEO_AUDIT_RESOURCES/nap-master-data.json`

```json
{
  "canonical_business_info": {
    "business_name": "Rainuka Therapy",
    "business_name_status": "APPROVED",
    "note": "Use 'Rainuka Therapy' across all citations (NOT 'Wonderloud Therapy')",
    
    "phone": {
      "value": "+1-XXX-XXX-XXXX",
      "status": "AWAITING FROM RAINUKA",
      "note": "Replace placeholder throughout codebase"
    },
    
    "email": {
      "primary": "contact@rainuka-therapy.com",
      "secondary": "contact@rainukatherapy.com",
      "canonical": "contact@rainuka-therapy.com",
      "note": "Use canonical email in all forms and schema"
    },
    
    "primary_address": {
      "line_1": "TBD - Awaiting from Rainuka",
      "line_2": "",
      "city": "Toronto",
      "state_province": "ON",
      "postal_code": "AWAITING",
      "country": "Canada",
      "status": "AWAITING - Clarify telehealth vs. physical address",
      "note": "If telehealth-only, use 'Serves: Toronto, California, Florida'"
    },
    
    "office_hours": {
      "monday": "09:00 - 17:00",
      "tuesday": "09:00 - 17:00",
      "wednesday": "09:00 - 17:00",
      "thursday": "09:00 - 17:00",
      "friday": "09:00 - 17:00",
      "saturday": "10:00 - 14:00",
      "sunday": "CLOSED",
      "status": "AWAITING FROM RAINUKA",
      "timezone": "EST/EDT"
    },
    
    "service_areas": {
      "primary_country": "Canada (Ontario)",
      "secondary_state_1": "California (USA)",
      "secondary_state_2": "Florida (USA)",
      "service_modality": "Telehealth (virtual sessions)",
      "status": "VERIFIED"
    },
    
    "licenses": {
      "ontario": {
        "credential": "Licensed Therapist (Ontario)",
        "issued_by": "Ontario College of Social Workers",
        "valid": "AWAITING VERIFICATION",
        "expiration": "AWAITING",
        "url": "https://www.ocswssw.org/public-protection/"
      },
      "california": {
        "credential": "Licensed Clinical Social Worker (LCSW)",
        "issued_by": "California Department of Consumer Affairs",
        "license_number": "AWAITING",
        "valid": "AWAITING VERIFICATION",
        "expiration": "AWAITING",
        "url": "https://www.breeze.ca.gov/"
      },
      "florida": {
        "credential": "Licensed Clinical Social Worker (LCSW)",
        "issued_by": "Florida Department of Health",
        "license_number": "AWAITING",
        "valid": "AWAITING VERIFICATION",
        "expiration": "AWAITING",
        "url": "https://www.flhealthsource.gov/"
      }
    },
    
    "social_profiles": {
      "facebook": "https://www.facebook.com/rainukatherapy",
      "instagram": "https://www.instagram.com/rainukatherapy",
      "linkedin": "https://www.linkedin.com/company/rainuka-therapy",
      "twitter": "AWAITING",
      "youtube": "AWAITING"
    },
    
    "website": {
      "primary_domain": "https://rainuka-therapy.com",
      "alternate_domain": "https://www.rainukatherapy.com",
      "canonical": "https://rainuka-therapy.com",
      "note": "Ensure www and non-www redirect to canonical"
    }
  },

  "directory_specific_fields": {
    "psychology_today": {
      "therapist_name": "Rainuka Oberoi",
      "credentials": "Licensed Clinical Social Worker (LCSW)",
      "specializations": [
        "Perinatal Mental Health",
        "Postpartum Anxiety",
        "Adult ADHD",
        "Couples Therapy",
        "Grief Counseling",
        "Career Counseling",
        "Trauma-Informed Therapy"
      ],
      "service_areas": [
        "Toronto, Ontario",
        "San Francisco, California",
        "Oakland, California",
        "Miami, Florida",
        "Fort Lauderdale, Florida"
      ],
      "accepts_insurance": "YES/NO",
      "session_fee": "$150 for 50-minute session",
      "sliding_scale": "$80-$120",
      "session_format": [
        "Virtual/Telehealth",
        "In-person (if applicable)"
      ]
    },

    "yelp": {
      "business_name": "Rainuka Therapy",
      "category": "Mental Health Professional / Therapist",
      "phone": "+1-XXX-XXX-XXXX",
      "website": "https://rainuka-therapy.com",
      "description": "Rainuka Oberoi is a Licensed Clinical Social Worker offering trauma-informed therapy for perinatal mental health, adult ADHD diagnosis, couples counseling, grief support, and career transitions. Available via telehealth throughout Canada, California, and Florida."
    }
  },

  "last_updated": "2026-09-01",
  "next_review": "2026-09-15",
  "owner": "Rainuka Oberoi + SEO Polisher #3",
  "approval_status": "PENDING - Awaiting Rainuka's information"
}
```

---

## DIRECTORY-SPECIFIC GUIDELINES

### Psychology Today Profile Best Practices

**Fields to Complete:**
- [ ] Professional photo (headshot, professional attire, warm smile)
- [ ] Full bio (500-750 words describing approach, specializations, credentials)
- [ ] Specializations (all 7 of Rainuka's focus areas)
- [ ] Service areas (Toronto, SF, Oakland, Miami, Fort Lauderdale)
- [ ] Service modality: Telehealth
- [ ] Accepts insurance (yes/no + which)
- [ ] Session fee: $150 for 50-minute session
- [ ] Sliding scale: $80-$120
- [ ] Languages: English
- [ ] In-person: No (if telehealth-only) / Yes (if applicable)
- [ ] Video sessions: Yes
- [ ] Appointment reminder: Email
- [ ] Credentials: LCSW (license numbers)
- [ ] Education: [School details]
- [ ] Years of experience: [#]
- [ ] Focus: Trauma-informed, neurodiversity-affirming, attachment-based

**Sample Bio Template:**
```
Hello, I'm Rainuka Oberoi, a Licensed Clinical Social Worker with over 10 years 
of experience providing trauma-informed therapy for complex life transitions.

I specialize in:
• Perinatal Mental Health (pregnancy anxiety, postpartum depression, postpartum OCD, 
  reproductive trauma, pregnancy loss)
• Adult ADHD Diagnosis (particularly in women and neurodivergent professionals)
• Couples Therapy (infidelity recovery, communication, attachment)
• Grief Counseling (bereavement, anticipatory grief, career loss, identity transitions)
• Career Counseling (career anxiety, imposter syndrome, career changes)

My approach is grounded in evidence-based modalities including:
• Trauma-Informed Therapy
• Attachment-Based Approaches
• Cognitive-Behavioral Therapy (CBT)
• Somatic Therapy
• The Gottman Method (couples)
• Narrative Therapy (grief)

I work affirmatively with BIPOC clients, LGBTQ+ individuals, neurodivergent folks, 
disabled clients, and low-income communities. I believe therapy is collaborative, 
shame-reducing, and culturally responsive.

Telehealth sessions available to clients in Canada (Ontario), California, and Florida. 
Sliding scale available for those with financial constraints.

Let's explore what brought you here and build a path forward together.
```

### Yelp Profile Best Practices

**Fields to Complete:**
- [ ] Business name: Rainuka Therapy
- [ ] Phone: +1-XXX-XXX-XXXX
- [ ] Website: https://rainuka-therapy.com
- [ ] Category: Mental Health Professional / Therapist
- [ ] Description (500-750 words)
- [ ] Photos (therapist photo, office/therapy space, credentials)
- [ ] Service areas: Toronto, San Francisco, Oakland, Miami, Fort Lauderdale
- [ ] Service modality: Telehealth
- [ ] Hours: Mon-Fri 9am-5pm, Sat 10am-2pm EST

### TherapyDen Profile Best Practices

**Fields to Complete:**
- [ ] Full bio and credentials
- [ ] Specializations
- [ ] Service areas (with map)
- [ ] Session fees
- [ ] Telehealth option
- [ ] Reviews (encourage clients to leave reviews)
- [ ] Verified therapist badge (complete profile)

### GoodTherapy Profile Best Practices

**Fields to Complete:**
- [ ] Profile photo and credentials
- [ ] Comprehensive bio
- [ ] Specializations
- [ ] Therapist type: LCSW (Licensed Clinical Social Worker)
- [ ] Service areas
- [ ] Session fee
- [ ] Accepts insurance (yes/no)
- [ ] Teletherapy available
- [ ] Additional credentials/training

---

## CITATION CLAIMING WORKFLOW

### Step-by-Step for Each Directory:

1. **Search for existing profile**
   - Search "[Business Name] + [City]"
   - If found: Click "Claim This Business"
   - If not found: Create new profile

2. **Verify ownership** (usually via email or phone)
   - Confirm email address
   - Follow verification link
   - Update password (store in password manager)

3. **Complete all required fields**
   - Use NAP Master Data template above
   - Copy-paste descriptions from approved templates
   - Upload professional photos
   - Verify all information matches

4. **Add links to primary website**
   - Link to: https://rainuka-therapy.com
   - Link to: https://rainuka-therapy.com/booking

5. **Save credentials**
   - Username: ___________
   - Password: ___________
   - Verification email: ___________
   - 2FA setup: Yes / No
   - Store in: `secure/directory-credentials/[directory-name].txt`

6. **Add to sameAs array** in `lib/schema.ts`
   - Format: `https://www.psychologytoday.com/profile/...`
   - Format: `https://www.yelp.com/biz/rainuka-therapy-...`
   - etc.

7. **Update citation-tracker.csv**
   - Status: Claimed
   - Date: [Today]
   - Verification: [Yes/No/Pending]
   - Notes: [Any issues or special requirements]

---

## MONITORING & MAINTENANCE

### Monthly Citation Audit

- [ ] Verify NAP consistency across all 22+ directories
- [ ] Check for outdated information
- [ ] Look for duplicate listings (merge if found)
- [ ] Update any changed information (phone, email, address)
- [ ] Check for client reviews added to directories
- [ ] Respond to any reviews left

### Quarterly Full Audit

- [ ] Review all 22 directory profiles
- [ ] Verify each has current NAP
- [ ] Check for new competitor directories to claim
- [ ] Test all links in sameAs array
- [ ] Update citation-tracker.csv
- [ ] Report to Rainuka on status

---

**Created by:** SEO Polisher #3  
**Last Updated:** September 1, 2026  
**File Location:** C:\Users\Roanm\rainuka-therapy\.hermes\LOCAL-SEO-AUDIT-RESOURCES\
