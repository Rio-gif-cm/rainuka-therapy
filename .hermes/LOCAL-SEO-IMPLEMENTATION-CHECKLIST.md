# LOCAL SEO IMPLEMENTATION CHECKLIST
**Rainuka Therapy | SEO Polisher #3**  
**Created:** September 1, 2026  
**Status:** Ready for Implementation

---

## PHASE 1: CRITICAL FOUNDATIONS (Week 1-2)
**Timeline:** 10-15 hours | **Impact:** +30% local visibility

### NAP (Name, Address, Phone) Consistency

- [ ] **1.1 Pick Canonical Business Name**
  - [ ] Decision: "Rainuka Therapy" vs. "Wonderloud Therapy"
  - [ ] Recommendation: "Rainuka Therapy" (therapist credibility)
  - [ ] Document decision in this checklist
  - [ ] Owner: Rainuka + Compliance Lead
  - [ ] Status: _______

- [ ] **1.2 Collect Real Contact Information**
  - [ ] Real phone number: ___________________
  - [ ] Canonical email: ____________________
  - [ ] Primary address or clarify "Telehealth Only": ___________________
  - [ ] Office hours (Mon-Fri? Sat availability?): ___________________
  - [ ] Service area states: ___________________
  - [ ] Owner: Rainuka
  - [ ] Due: ________

- [ ] **1.3 Update Phone Number Everywhere**
  - [ ] `lib/schema.ts` line 26 (placeholder +1-555-123-4567)
  - [ ] `app/contact/page.tsx` line 35 (contact display)
  - [ ] `app/contact/page.tsx` form placeholder text
  - [ ] All contact form backend email recipients
  - [ ] All directory listings (after directories claimed)
  - [ ] Owner: Polisher #1
  - [ ] Status: _______

- [ ] **1.4 Update Email Address Everywhere**
  - [ ] Pick canonical: contact@rainuka-therapy.com OR contact@rainukatherapy.com
  - [ ] `lib/schema.ts` line 27
  - [ ] `app/contact/page.tsx`
  - [ ] All email forms (booking, contact, newsletter)
  - [ ] All directory listings
  - [ ] Owner: Polisher #1
  - [ ] Status: _______

- [ ] **1.5 Standardize Business Name in All Metadata**
  - [ ] `app/layout.tsx` metadata title
  - [ ] `app/page.tsx` homepage metadata
  - [ ] `lib/schema.ts` all references (lines 23, 131, 409)
  - [ ] All directory listings
  - [ ] All social media (Facebook, LinkedIn, Instagram)
  - [ ] Owner: Polisher #1
  - [ ] Status: _______

### Technical SEO Foundations

- [ ] **1.6 Add robots.txt**
  - [ ] Create `/public/robots.txt`
  - [ ] Allow: / | Disallow: /admin/, /.next/, /node_modules/
  - [ ] Include: Sitemap: https://rainuka-therapy.com/sitemap.xml
  - [ ] Owner: Polisher #4 (technical)
  - [ ] Status: _______

- [ ] **1.7 Create XML Sitemap**
  - [ ] Create `app/sitemap.ts` (Next.js metadata route)
  - [ ] Include all main pages (home, about, adhd, couples, grief, perinatal, faq, guides, booking, etc.)
  - [ ] Set priority: 1.0 (home), 0.8 (service pages), 0.6 (blog/guides)
  - [ ] Set changeFrequency: weekly (home), monthly (service), as-needed (blog)
  - [ ] Owner: Polisher #4 (technical)
  - [ ] Status: _______

- [ ] **1.8 Set Up Google Search Console**
  - [ ] Add verification meta tag to `app/layout.tsx`
  - [ ] Claim property at console.search.google.com
  - [ ] Submit sitemap
  - [ ] Monitor indexed pages
  - [ ] Owner: Rainuka or Polisher #4
  - [ ] Status: _______
  - [ ] GSC Property Verified: _______ (date)

---

## PHASE 2: GOOGLE BUSINESS PROFILE & CITATIONS (Week 3-6)
**Timeline:** 20-25 hours | **Impact:** +25% local visibility

### Google Business Profile (Rainuka's Action - Takes 2-6 Weeks)

- [ ] **2.1 Claim/Create GBP**
  - [ ] Go to business.google.com
  - [ ] Search for business or create new profile
  - [ ] Business name: Rainuka Therapy
  - [ ] Business category: Mental Health Professional / Therapist
  - [ ] Owner: Rainuka
  - [ ] Status: _______
  - [ ] GBP URL: https://g.co/kgs/... OR https://www.google.com/maps/place/...

- [ ] **2.2 Complete GBP Profile Fields**
  - [ ] Verified phone number (link to real business line)
  - [ ] Business address: [Primary location or "Serves these areas"]
  - [ ] Office hours (Mon-Fri 9-5? Sat 10-2?)
  - [ ] Business description (750+ characters describing services)
  - [ ] Service areas (Toronto, San Francisco, Miami, etc.)
  - [ ] Website URL: https://rainuka-therapy.com
  - [ ] Attributes: "Telehealth available," "Accepts insurance," etc.
  - [ ] Owner: Rainuka
  - [ ] Status: _______

- [ ] **2.3 Add GBP Photos**
  - [ ] Therapist professional photo (1-2)
  - [ ] Office/therapy space (2-3)
  - [ ] Credentials/license photos (1-2)
  - [ ] Team/workspace (2-3)
  - [ ] Target: 10-15 high-quality photos
  - [ ] Owner: Rainuka
  - [ ] Status: _______

- [ ] **2.4 Enable GBP Features**
  - [ ] Enable messaging (clients can message directly)
  - [ ] Enable appointment booking (link to Calendly/booking tool)
  - [ ] Enable call button (direct call from search result)
  - [ ] Add business updates/posts (monthly)
  - [ ] Owner: Rainuka
  - [ ] Status: _______

### Directory Citations (Polisher #3 + Team)

**Tier 1: Therapist-Specific Directories (ESSENTIAL - 2-3 hours each)**

- [ ] **2.5 Psychology Today** (psychologytoday.com)
  - [ ] Create therapist profile
  - [ ] Profile fields: Photo, bio, specializations, insurance, fees
  - [ ] NAP: Rainuka Oberoi, [address], [phone], [email]
  - [ ] Specializations: Perinatal anxiety, ADHD, couples, grief, trauma, career
  - [ ] Service areas: Toronto, Canada + California + Florida
  - [ ] Service modality: Telehealth + in-person (if applicable)
  - [ ] Profile link for sameAs: ____________________
  - [ ] Owner: Rainuka or Polisher #3
  - [ ] Status: _______ | Verified: _______

- [ ] **2.6 TherapyDen** (therapyden.com)
  - [ ] Therapist profile creation
  - [ ] Profile link for sameAs: ____________________
  - [ ] Owner: Rainuka or Polisher #3
  - [ ] Status: _______ | Verified: _______

- [ ] **2.7 GoodTherapy** (goodtherapy.org)
  - [ ] Therapist profile creation
  - [ ] Profile link for sameAs: ____________________
  - [ ] Owner: Rainuka or Polisher #3
  - [ ] Status: _______ | Verified: _______

**Tier 2: General Professional Services (1 hour each)**

- [ ] **2.8 Yelp** (yelp.com)
  - [ ] Claim business profile
  - [ ] Profile link: ____________________
  - [ ] Status: _______

- [ ] **2.9 Google Maps** (separate from GBP)
  - [ ] Verify on Google Maps
  - [ ] Maps link: ____________________
  - [ ] Status: _______

- [ ] **2.10 Healthgrades** (healthgrades.com)
  - [ ] Provider profile
  - [ ] Profile link: ____________________
  - [ ] Status: _______

- [ ] **2.11 Facebook Business Page**
  - [ ] Create/update business page
  - [ ] Profile link: ____________________
  - [ ] Status: _______

- [ ] **2.12 LinkedIn Company Page**
  - [ ] Create/update company page
  - [ ] Profile link: ____________________
  - [ ] Status: _______

**Tier 3: Additional Directories (30 mins each, lower priority)**

- [ ] **2.13 Trustpilot, ZoomInfo, Mapquest, Bing Places, Apple Maps, Waze**
  - [ ] (Low priority; add after Tier 1-2 complete)
  - [ ] Status: _______

### Citation Data Management

- [ ] **2.14 Create Citation Spreadsheet**
  - [ ] 22 directories tracked
  - [ ] Columns: Directory name | URL | Username | Password | Verified | NAP match | Last updated | Notes
  - [ ] File: `LOCAL_SEO_AUDIT_RESOURCES/citation-tracker.csv`
  - [ ] Owner: Polisher #3
  - [ ] Status: _______

- [ ] **2.15 Update sameAs in Schema**
  - [ ] `lib/schema.ts` line 50 (currently empty array)
  - [ ] Add all claimed directory URLs
  - [ ] Format: 
    ```typescript
    sameAs: [
      'https://www.psychologytoday.com/profile/...',
      'https://www.therapyden.com/profile/...',
      'https://www.goodtherapy.org/profile/...',
      // ... etc
    ]
    ```
  - [ ] Owner: Polisher #1 + Polisher #3
  - [ ] Status: _______

---

## PHASE 3: SCHEMA & STRUCTURED DATA (Week 6-8)
**Timeline:** 15-20 hours | **Impact:** +15% CTR, +10% trust signals

### LocalBusiness Schema Expansion

- [ ] **3.1 Expand getLocalBusinessSchema() in lib/schema.ts**
  - [ ] Add openingHoursSpecification (Mon-Fri, Sat hours)
  - [ ] Add geo (GeoCoordinates: Toronto lat/lng default)
  - [ ] Add image array (3-5 professional photos)
  - [ ] Expand areaServed (specific cities: Toronto, SF, Miami, etc.)
  - [ ] Link sameAs (directory URLs)
  - [ ] Add aggregateRating (linked to parent)
  - [ ] Add contactPoint (ContactType: Customer Service)
  - [ ] Owner: Polisher #1 + Polisher #3
  - [ ] Status: _______
  - [ ] Schema validation test passed: _______

- [ ] **3.2 Update Credential Markup**
  - [ ] Verify all hasCredential fields (lines 53-96)
  - [ ] CA: Licensed Clinical Social Worker
  - [ ] FL: Licensed Clinical Social Worker
  - [ ] ON: Licensed Therapist (verify exact provincial credential)
  - [ ] Owner: Compliance Lead + Polisher #1
  - [ ] Status: _______

- [ ] **3.3 Add MedicalBusiness Type**
  - [ ] Add to @type: ['LocalBusiness', 'ProfessionalService', 'MedicalBusiness']
  - [ ] Add medicalSpecialty array:
    - [ ] Psychiatry
    - [ ] Psychotherapy
    - [ ] Mental Health Counseling
  - [ ] Owner: Polisher #1
  - [ ] Status: _______

### Review & Rating Schema

- [ ] **3.4 Enhance AggregateRating Schema**
  - [ ] Link aggregateRating to LocalBusiness (not standalone)
  - [ ] Update ratingCount and reviewCount dynamically
  - [ ] Fix @id: https://rainuka-therapy.com#aggregate-rating (remove "wonderloudtherapy" reference)
  - [ ] Owner: Polisher #1
  - [ ] Status: _______

- [ ] **3.5 Add Review Schema for Testimonials**
  - [ ] For each published testimonial (with explicit consent):
    ```json
    {
      "@type": "Review",
      "@id": "https://rainuka-therapy.com/reviews#review-001",
      "name": "[Testimonial title]",
      "reviewBody": "[Quote]",
      "reviewRating": {"@type": "Rating", "ratingValue": "5"},
      "datePublished": "[Date]",
      "author": {"@type": "Person", "name": "Anonymous"}
    }
    ```
  - [ ] Only include testimonials with written consent
  - [ ] Keep author names anonymous or pseudonymous for privacy
  - [ ] Owner: Polisher #1 + Compliance Lead
  - [ ] Status: _______

### Schema Testing & Validation

- [ ] **3.6 Validate All Schema with Google Rich Results Test**
  - [ ] Test homepage at search.google.com/test/rich-results
  - [ ] Test about page
  - [ ] Test location pages (after created)
  - [ ] Verify no errors in Schema Markup
  - [ ] Document test results
  - [ ] Owner: Polisher #4 + Polisher #3
  - [ ] Status: _______
  - [ ] Test date: _______ | Results: PASS / FAIL

- [ ] **3.7 Set Up CI/CD Schema Validation**
  - [ ] Create scripts/validate-schema.js
  - [ ] Check for required LocalBusiness fields
  - [ ] Validate phone/email format
  - [ ] Verify areaServed not empty
  - [ ] Run on every deployment
  - [ ] Owner: Polisher #4 (technical)
  - [ ] Status: _______

---

## PHASE 4: LOCATION PAGES & LOCAL KEYWORDS (Week 9-14)
**Timeline:** 30-40 hours | **Impact:** +40-60% local organic traffic

### Location Page Content Strategy

- [ ] **4.1 Create Primary Location Pages (3 pages = 9 hours)**

  **Page 1: /therapy-toronto**
  - [ ] H1: "Therapy in Toronto | Trauma-Informed Therapist | Rainuka Oberoi"
  - [ ] Content structure:
    - [ ] Hero section with Toronto-specific value prop
    - [ ] "About my Toronto practice" section (300+ words)
    - [ ] Specializations (perinatal, ADHD, couples, grief, career)
    - [ ] License verification (Ontario therapist license: ________)
    - [ ] Testimonials from Toronto clients (2-3)
    - [ ] Local mental health resources (crisis lines, orgs)
    - [ ] "Why I serve Toronto" narrative
    - [ ] Local statistics (postpartum anxiety in Ontario, ADHD diagnosis rates)
    - [ ] Session format (telehealth, in-person hours, timezone)
    - [ ] CTA: "Book a free consultation"
  - [ ] Meta keywords: therapy Toronto, therapist Toronto, ADHD therapist Toronto, trauma therapy Toronto, couples therapy Toronto
  - [ ] Meta description: ~155 chars with Toronto, specialization, CTA
  - [ ] Internal links: Link to /adhd, /couples, /perinatal, /grief pages
  - [ ] Owner: Polisher #1 or #2 (content) + Polisher #3 (keywords)
  - [ ] Status: _______
  - [ ] URL live: https://rainuka-therapy.com/therapy-toronto
  - [ ] SEO validation: PASS / FAIL

  **Page 2: /therapy-california**
  - [ ] Similar structure, CA license focus, San Francisco + Oakland
  - [ ] Status: _______
  - [ ] URL: https://rainuka-therapy.com/therapy-california

  **Page 3: /therapy-florida**
  - [ ] Similar structure, FL license focus, Miami + Fort Lauderdale
  - [ ] Status: _______
  - [ ] URL: https://rainuka-therapy.com/therapy-florida

- [ ] **4.2 Create Secondary Location Pages (5 pages = 12 hours)**
  - [ ] /therapy/san-francisco
  - [ ] /therapy/oakland
  - [ ] /therapy/miami
  - [ ] /therapy/fort-lauderdale
  - [ ] /therapy/ontario (if serving rest of Ontario outside Toronto)
  - [ ] Status: _______

- [ ] **4.3 Create Telehealth-Specific Content Page**
  - [ ] URL: /telehealth-therapy
  - [ ] Content:
    - [ ] "Online Therapy for [Specialties] | Serving Canada + USA via Telehealth"
    - [ ] Benefits of telehealth
    - [ ] Virtual session format explanation
    - [ ] Time zone information
    - [ ] Technology requirements
    - [ ] Privacy/HIPAA compliance (for UK/EU viewers, mention GDPR)
    - [ ] Service area map or list
    - [ ] Testimonials from remote clients
  - [ ] Keywords: telehealth therapy, online therapy [City], virtual therapist, remote counseling
  - [ ] Owner: Polisher #1 or #2 (content)
  - [ ] Status: _______

### Geo-Targeted Keywords Implementation

- [ ] **4.4 Audit Homepage Keywords**
  - [ ] Current keywords: "therapy, therapist, perinatal mental health, ADHD, career counseling"
  - [ ] Add geo modifiers: "therapy in Toronto," "ADHD therapist California," "online therapy"
  - [ ] Update meta keywords
  - [ ] Update H1 on homepage (if applicable)
  - [ ] Owner: Polisher #1 + Polisher #3
  - [ ] Status: _______

- [ ] **4.5 Add Breadcrumb Navigation**
  - [ ] Add BreadcrumbList schema to all location pages
  - [ ] Format: Home > Therapy Services > [City]
  - [ ] Visual breadcrumbs on page
  - [ ] Owner: Polisher #2 (UX/frontend)
  - [ ] Status: _______

### Schema Updates for Location Pages

- [ ] **4.6 Create Location-Specific Schema**
  - [ ] For each location page, add schema option:
    ```typescript
    getLocalBusinessSchema({
      latitude: 43.6629,  // Toronto
      longitude: -79.3957,
      areaServed: [{ '@type': 'AdministrativeArea', name: 'Toronto, Ontario, Canada' }],
    })
    ```
  - [ ] Update areaServed in lib/schema.ts with URLs to location pages
  - [ ] Owner: Polisher #1 + Polisher #3
  - [ ] Status: _______

---

## PHASE 5: REVIEW COLLECTION & MANAGEMENT (Week 14-16)
**Timeline:** 15-20 hours | **Impact:** +15-20% CTR

### Automated Review System Setup

- [ ] **5.1 Create Review Request Email Template**
  - [ ] Post-session email trigger (48 hours after session)
  - [ ] Subject: "Would you share your therapy experience?"
  - [ ] Body template:
    ```
    Hi [Client Name],
    
    Thank you for coming in for your recent session. 
    I'd love to hear about your experience. Sharing a review 
    helps other people find the right therapist.
    
    Leave a review on:
    • Google: [GBP review link]
    • Psychology Today: [PT review link]
    • Yelp: [Yelp review link]
    • TherapyDen: [TD review link]
    
    Questions? Reply to this email.
    
    Best,
    Rainuka
    ```
  - [ ] Add QR codes for mobile convenience
  - [ ] Owner: Polisher #3 + Rainuka (for approval)
  - [ ] File: `LOCAL_SEO_AUDIT_RESOURCES/review-request-email.md`
  - [ ] Status: _______

- [ ] **5.2 Set Up Review Collection Tool (Automation)**
  - [ ] Option A: Calendly integration (auto-send review link after booking)
  - [ ] Option B: Zapier/Make (automated email + SMS)
  - [ ] Option C: Manual email from CRM
  - [ ] Configure to send 48 hours post-session
  - [ ] Owner: Rainuka or Polisher #4 (technical)
  - [ ] Status: _______
  - [ ] Tool chosen: _______
  - [ ] Live date: _______

### Review Response Framework

- [ ] **5.3 Create Review Response SLA & Templates**
  - [ ] SLA: Respond to ALL reviews within 48 hours
  - [ ] Template for 5-star reviews:
    ```
    "Thank you [Name] for taking the time to share. 
    I'm glad that [specific element] was helpful. 
    Looking forward to our continued work together."
    ```
  - [ ] Template for 4-star reviews:
    ```
    "Thank you for your feedback. I appreciate you noting [point]. 
    I'd love to understand more—please reach out at 
    [contact info] to discuss how I can better support you."
    ```
  - [ ] Template for <4-star reviews:
    ```
    "I'm sorry [specific issue] wasn't what you needed. 
    Your experience matters to me. Please call at [number] 
    so we can discuss how to better support you."
    ```
  - [ ] Owner: Rainuka (review management owner)
  - [ ] File: `LOCAL_SEO_AUDIT_RESOURCES/review-response-templates.md`
  - [ ] Status: _______

- [ ] **5.4 Set Up Review Dashboard (Google, Psychology Today, Yelp)**
  - [ ] Create weekly review tracking spreadsheet
  - [ ] Columns: Date | Platform | Name | Rating | Review text | Response sent | Date responded
  - [ ] Assign review management owner: _______
  - [ ] Schedule weekly review check-in
  - [ ] Owner: Rainuka or Polisher #3
  - [ ] Status: _______

### Review Schema Implementation

- [ ] **5.5 Add Review Schema to AggregateRating**
  - [ ] Link AggregateRating to actual reviews (not just testimonials)
  - [ ] Update ratingCount on GBP weekly
  - [ ] Schema example:
    ```json
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "ratingCount": "27",
      "reviewCount": "27"
    }
    ```
  - [ ] Owner: Polisher #1 + Polisher #3
  - [ ] Status: _______

---

## PHASE 6: COMPLIANCE & LEGAL (Week 15-16)
**Timeline:** 8-10 hours | **Impact:** Risk mitigation

### Testimonial Consent Audit

- [ ] **6.1 Audit Existing Testimonials**
  - [ ] List all current testimonials
  - [ ] Check for written consent documentation
  - [ ] Mark: Has consent / No consent / Unclear
  - [ ] Action: Remove non-consented testimonials
  - [ ] Owner: Compliance Lead
  - [ ] Status: _______
  - [ ] Audit complete: _______

- [ ] **6.2 Create Testimonial Consent Form**
  - [ ] Form template:
    ```
    TESTIMONIAL CONSENT FORM
    
    I authorize Rainuka Therapy to use my feedback/testimonial 
    on the website, marketing materials, and social media.
    
    Name disclosure:
    ☐ Use my full name: _________________
    ☐ Use pseudonym: ___________________
    ☐ Keep anonymous
    
    I have reviewed the exact quote below and give permission 
    for its use. I understand this is public and may appear in 
    search results.
    
    QUOTE: [___________________________]
    
    Signature: ________________  Date: __________
    ```
  - [ ] File: `LOCAL_SEO_AUDIT_RESOURCES/testimonial-consent-form.pdf`
  - [ ] Owner: Compliance Lead
  - [ ] Status: _______

- [ ] **6.3 Store Consent Documentation**
  - [ ] Folder: `secure/testimonials/`
  - [ ] One file per testimonial: consent + quote + publication date
  - [ ] Access: Rainuka + Compliance Lead only
  - [ ] Owner: Rainuka or Compliance Lead
  - [ ] Status: _______

### License Verification

- [ ] **6.4 Verify All Professional Licenses**
  - [ ] California LCSW: Valid? Expiration: _______
  - [ ] Florida LCSW: Valid? Expiration: _______
  - [ ] Ontario therapist license: Valid? Expiration: _______
  - [ ] Add license verification links to About page
  - [ ] Update schema credentials with exact titles
  - [ ] Owner: Rainuka + Compliance Lead
  - [ ] Verification date: _______

- [ ] **6.5 Update About Page Credentials**
  - [ ] Replace placeholders [Provincial Regulatory Body]
  - [ ] Add real regulatory body names:
    - [ ] California: California Department of Consumer Affairs
    - [ ] Florida: Florida Department of Health
    - [ ] Ontario: Ontario College of Social Workers (or actual body)
  - [ ] Add verification links
  - [ ] Owner: Polisher #1 (content update)
  - [ ] Status: _______

---

## PHASE 7: ONGOING MONITORING & OPTIMIZATION (Month 6+)
**Timeline:** 15 hours/month | **Impact:** Compound 5-10% monthly growth

### Monthly Monitoring Tasks

- [ ] **7.1 Google Search Console Analysis (2 hours/month)**
  - [ ] Check Search Performance report
  - [ ] Identify top-performing local keywords
  - [ ] Find keywords with high impressions but low CTR (optimize titles/descriptions)
  - [ ] Check for new ranking opportunities
  - [ ] Monitor crawl errors
  - [ ] Owner: Polisher #3 or Rainuka
  - [ ] Schedule: _______

- [ ] **7.2 Local Ranking Monitoring (1 hour/month)**
  - [ ] Track top 20 local keywords
  - [ ] Check ranking position for:
    - [ ] "therapy Toronto" and variants
    - [ ] "ADHD therapist California"
    - [ ] "couples therapy Miami"
    - [ ] "telehealth therapist"
  - [ ] Tool: Google Search Console or Ahrefs
  - [ ] Owner: Polisher #3
  - [ ] Schedule: _______

- [ ] **7.3 Review Management (1.5 hours/month)**
  - [ ] Respond to new reviews (all platforms)
  - [ ] Analyze review sentiment
  - [ ] Identify improvement opportunities from feedback
  - [ ] Send review request emails (target: 5+ new reviews/month)
  - [ ] Owner: Rainuka
  - [ ] Schedule: _______

- [ ] **7.4 Citation Consistency Audits (1 hour/quarter)**
  - [ ] Re-verify NAP consistency across all citations
  - [ ] Check for outdated info
  - [ ] Update if any changes (phone, address, hours)
  - [ ] File: citation-tracker.csv
  - [ ] Owner: Polisher #3
  - [ ] Schedule: _______

- [ ] **7.5 Backlink Profile Growth (2 hours/month)**
  - [ ] Identify 2-3 link opportunities (therapy blogs, mental health orgs, directories)
  - [ ] Reach out for guest posts or partnerships
  - [ ] Track new backlinks (Ahrefs, Moz, SEMrush)
  - [ ] Target: 2-4 new quality local/niche backlinks/month
  - [ ] Owner: Polisher #3
  - [ ] Schedule: _______

- [ ] **7.6 Schema Validation (1 hour/quarter)**
  - [ ] Run Google Rich Results Test on homepage
  - [ ] Test location pages
  - [ ] Verify no schema errors
  - [ ] Update schema if business info changes
  - [ ] Owner: Polisher #4 (technical)
  - [ ] Schedule: _______

### Monthly Reporting

- [ ] **7.7 Local SEO Monthly Report**
  - [ ] Template:
    ```
    LOCAL SEO MONTHLY REPORT — [Month/Year]
    
    GOOGLE BUSINESS PROFILE:
    - GBP views: [number]
    - GBP click-throughs: [number]
    - New reviews: [count]
    - Average rating: [4.5/5.0]
    
    LOCAL RANKINGS:
    - Top ranking keyword: [keyword] @ position [#]
    - New rankings (top 20): [count]
    - Lost rankings: [count]
    
    CITATIONS:
    - New citations claimed: [count]
    - Citation consistency score: [%]
    
    ORGANIC TRAFFIC:
    - Local search traffic: [#] visitors
    - Month-over-month change: [+/- %]
    - Top traffic source cities: [list]
    
    REVIEWS:
    - New reviews received: [count]
    - Average rating: [#.#]
    - Response rate: [100%]
    - Sentiment: [Positive/Mixed]
    
    NEXT MONTH PRIORITIES:
    - [Priority 1]
    - [Priority 2]
    ```
  - [ ] Owner: Polisher #3
  - [ ] Schedule: 1st of each month

---

## SUMMARY CHECKLIST

**Total Implementation Hours:** ~90 hours (first 6 months)  
**Ongoing Maintenance:** ~15 hours/month  
**Expected ROI:** 3-5x (new clients per hour invested)

| Phase | Duration | Impact | Status |
|-------|----------|--------|--------|
| 1. Critical Foundations | 10-15 hrs | +30% visibility | _____ |
| 2. Directory Citations | 20-25 hrs | +25% visibility | _____ |
| 3. Schema & Reviews | 15-20 hrs | +15% CTR | _____ |
| 4. Location Pages | 30-40 hrs | +40-60% traffic | _____ |
| 5. Review Management | 15-20 hrs | +15-20% CTR | _____ |
| 6. Compliance | 8-10 hrs | Legal safety | _____ |
| 7. Ongoing Monitoring | 15 hrs/mo | Compound growth | _____ |

**Total: ~90 hours Phase 1-6, then 15 hrs/month ongoing**

---

**Created by:** SEO Polisher #3 (Local SEO & Citations)  
**Last Updated:** September 1, 2026  
**Next Review:** October 1, 2026 (Phase 1-2 completion check)
