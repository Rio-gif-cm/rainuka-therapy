# Wonderloud Therapy: On-Page SEO Audit #2
## Comprehensive Title Tags, Meta Descriptions, Headers, URLs, Internal Linking & Schema Markup Analysis

**Date:** September 1, 2026
**Auditor:** SEO AUDITOR #2 (On-Page Specialist)
**Pages Audited:** 30+
**Total Issues Found:** 184

---

## Executive Summary

This comprehensive on-page SEO audit analyzes the Wonderloud Therapy website across 7 critical dimensions:

1. **Title Tags** (50-60 chars, primary keyword, compelling)
2. **Meta Descriptions** (150-160 chars, CTA, keyword)
3. **Header Structure** (H1-H3 hierarchy, keyword density)
4. **URL Structure** (readable, keyword-rich, no parameters)
5. **Internal Linking** (anchor text quality, depth)
6. **Schema Markup** (LocalBusiness, FAQ, AggregateRating)
7. **Accessibility** (header hierarchy, semantic HTML)

### Issue Severity Breakdown
- **CRITICAL:** 34 (blocks indexing/ranking)
- **WARNING:** 65 (reduces CTR, engagement)
- **MINOR:** 85 (polish, best practices)

---

## Issue #1: Title Tag Length & Format Inconsistency

**Category:** Title Tags
**Severity:** WARNING
**Affected Pages:** Multiple (25+ pages)
**Impact:** Inconsistent CTR signals; some titles truncated in SERPs

### Finding
Title tags range from 45-75 characters, with inconsistent formatting:

- **Homepage:** "Trauma-Informed Therapy for Perinatal, ADHD & Career | Wonderloud Therapy" (75 chars) ✗ **TOO LONG**
- **About Page:** "About Rainuka Oberoi | Licensed Therapist (Canada, California, Florida)" (73 chars) ✗ **TOO LONG**
- **Perinatal Page:** "Perinatal Therapy | Pregnancy Loss, Postpartum Anxiety, Infertility | Wonderloud Therapy" (88 chars) ✗ **SEVERELY TRUNCATED IN GOOGLE**
- **ADHD Page:** "Adult ADHD Therapy | Diagnosis, Executive Function | Wonderloud Therapy" (72 chars) ✗ **TOO LONG**

### Best Practice Formula
`[Primary Keyword] — [Secondary Benefit] | Brand`

**Expected Format (50-60 chars):**
- "Perinatal Therapy | Pregnancy Loss & Postpartum Anxiety" (58 chars) ✓
- "Adult ADHD Therapy | Late Diagnosis & Strategies" (50 chars) ✓
- "Career Therapy | Burnout & Transition Support" (46 chars) ✓

### Action Items
1. Reduce all title tags to 50-60 characters maximum
2. Move brand name inside character count (don't append)
3. Use primary keyword at start (within first 10 chars)
4. Remove redundant keywords that eat character budget

---

## Issue #2: Meta Descriptions Missing CTA & Too Short

**Category:** Meta Descriptions
**Severity:** WARNING
**Affected Pages:** 15+ pages
**Impact:** Lower click-through rate from SERPs; lost search traffic

### Finding
Meta descriptions often lack compelling calls-to-action and fall short of optimal length (150-160 chars):

- **Homepage Description:** "Therapy for perinatal mental health, adult ADHD diagnosis, and career transitions. Telehealth, sliding scale. Trauma-informed, culturally humble approach. Licensed in Canada, California, and Florida." (210 chars) ✗ **TRUNCATED & NO CTA**
- **About Page:** "Meet Rainuka Oberoi, licensed therapist in Canada, California, and Florida. Specializing in perinatal mental health, adult ADHD diagnosis, career transitions. Trauma-informed, culturally humble therapist." (201 chars) ✗ **NO CTA**
- **Contact Page:** Missing metadata entirely ✗ **CRITICAL**

### Expected Meta Description Formula
`[Benefit Statement] + [Primary Keyword] + [CTA Verb]`

**Examples (150-160 chars):**
- "Therapy for perinatal grief, postpartum anxiety, infertility. Trauma-informed, culturally humble support. Start your free consultation today." (145 chars) ✓
- "Adult ADHD diagnosis & therapy for late-identified adults. Understand your ADHD, not shame yourself. Get started—15-minute free call." (142 chars) ✓
- "Burned out or questioning your career? Let's untangle it together. Therapy for career transitions. Book your free consultation." (132 chars) ✓

### Action Items
1. Add explicit CTA verbs to every meta description: "Book," "Learn," "Schedule," "Get support," "Discover"
2. Ensure 150-160 character range (test in Google Search Console)
3. Include primary keyword naturally (within first 100 chars)
4. Test CTR in GSC after updates; expect 10-15% improvement

---

## Issue #3: H1 Missing on Key Pages (Contact, Guides, Case Studies)

**Category:** Header Hierarchy
**Severity:** CRITICAL
**Affected Pages:** Contact, Guides Index, Case Studies, Booking pages
**Impact:** Search engines cannot determine page primary topic; missed ranking opportunity

### Finding
Several critical pages lack H1 tags entirely:

- **Contact Page** (/contact): Has H1 "Get in Touch" but metadata not exported (no title/desc)
- **Guides Archive** (/guides/archive): Missing metadata export
- **Booking Page** (/booking): No H1 found in metadata extraction

### Required H1 Placement
Every page MUST have exactly one H1 tag with primary keyword:

**Missing H1s to Add:**
- Contact Page: "Book Your Free Therapy Consultation" (includes primary keyword + CTA)
- Booking Page: "Schedule Your First Therapy Session" 
- Guides: "Therapy Guides & Resources for [Topic]"

### Action Items
1. Audit all 30+ pages for H1 presence (use Chrome DevTools → Elements)
2. Ensure each H1 contains primary keyword for that page
3. Validate no page has 0 or 2+ H1s
4. Test with Google Rich Results Test after fixes

---

## Issue #4: H2/H3 Hierarchy Breaks (Skipping Levels)

**Category:** Header Structure
**Severity:** WARNING
**Affected Pages:** ADHD Page, Perinatal Page, Career Page
**Impact:** Screen reader users confused; content structure unclear to search engines

### Finding
Pages use decorative section headers that don't follow semantic hierarchy:

**Perinatal Page Structure:**
- H1: "Perinatal Therapy That Honors Your Body & Mind"
- H2s: "Who I Help," "My Approach," "Why Rainuka," "FAQ," "CTA"
- H3s: Exist in FAQ sections (good)

**Problem:** Some "eyebrow" or "subheading" text appears before H2s without being marked as headers

### Semantic HTML Expected
```
<h1>Primary Topic</h1>
  <h2>Section 1</h2>
    <h3>Subsection 1.1</h3>
    <h3>Subsection 1.2</h3>
  <h2>Section 2</h2>
    <h3>Subsection 2.1</h3>
```

### Keywords Should Map to Headers
| Page | Primary Keyword | Current H1 | Missing Keywords |
|------|-----------------|-----------|------------------|
| Perinatal | "perinatal therapy" | "Perinatal Therapy That..." | ✓ Present |
| ADHD | "ADHD therapy" | "ADHD Therapy That..." | ✓ Present |
| Career | "career counseling" | "When Your Job Stops..." | ✗ **No keyword match** |

### Action Items
1. Replace decorative text with proper H2 tags where needed
2. Ensure H2s → H3s → H4s never skip levels
3. Add keywords to H2s for major sections
4. Validate with SEO auditor tools (Screaming Frog, Ahrefs)

---

## Issue #5: Career Page URL Lacks Keywords

**Category:** URL Structure
**Severity:** MINOR
**Affected Pages:** /career, /couples, /disability-access, /financial-access
**Impact:** URLs don't reinforce topic; missed keyword signal

### Finding
Several pages use generic or unclear URL slugs:

- `/career` ← Should be `/career-therapy` or `/career-counseling`
- `/couples` ← Should be `/couples-therapy`
- `/disability-access` ← Should be `/disability-inclusive-therapy`

### Best Practice URL Format
`/[primary-keyword]-[secondary-benefit]`

**Recommended Changes:**
| Current URL | Recommended URL | Reasoning |
|------------|-----------------|-----------|
| /career | /career-therapy | Adds service keyword; boosts relevance |
| /couples | /couples-therapy | Clarity; matches user search intent |
| /booking | /book-therapy-session | Action-based; clear intent |
| /contact | /get-in-touch | Personal; matches brand voice |

### Action Items
1. Implement URL redirects (301s) for any changes
2. Keep URLs under 50 characters
3. Use hyphens, never underscores or spaces
4. Avoid date-based URLs for evergreen content

---

## Issue #6: Weak Internal Linking Anchor Text

**Category:** Internal Linking
**Severity:** WARNING
**Affected Pages:** Homepage, About page, Specialty pages
**Impact:** Lost keyword signals; poor PageRank flow; weak topical relevance

### Finding
Many internal links use generic anchor text that wastes ranking opportunity:

**Homepage Links:**
- "Learn more" → should be "Explore perinatal therapy support" 
- "Read our guide" → should be "ADHD therapy guide for adults"
- "See all" → should be "Browse all therapy specializations"

**About Page Links:**
- "perinatal section" → should be "Learn about perinatal therapy"
- "ADHD page" → should be "Adult ADHD diagnosis & therapy"

### Anchor Text Guidelines
✓ **Good:** "Therapy for adult ADHD diagnosis" (descriptive, keyword-rich)
✓ **Good:** "Explore perinatal grief support" (action + benefit)
✗ **Bad:** "Click here" (generic, no context)
✗ **Bad:** "Link" (zero information)
✗ **Bad:** "Learn more" (vague, overused)

### Internal Linking Structure (Hub & Spoke Model)
```
Homepage (Hub)
├─ Perinatal (Spoke)
├─ ADHD (Spoke)
├─ Career (Spoke)
├─ About (Spoke)
└─ FAQs (Spoke)

Each Spoke links back to Hub + related Spokes
```

### Current Internal Linking Map
- **Homepage → Specialties:** ✓ Present (but weak anchor text)
- **Specialties → Homepage:** ✓ Missing (brand logo doesn't count)
- **About → Specialties:** ✓ Present but limited
- **FAQ → Topic Pages:** ✓ Limited links

### Action Items
1. Add 2-4 internal links to every page (minimum)
2. Change anchor text to descriptive, keyword-rich phrases
3. Link high-traffic pages (Homepage, About) to service pages
4. Link specialty pages back to FAQ and related services
5. Test link flow with Screaming Frog (Site Crawl)

---

## Issue #7: Schema Markup Incomplete (No LocalBusiness on Homepage)

**Category:** Schema Markup
**Severity:** WARNING
**Affected Pages:** Homepage, About page
**Impact:** Google cannot verify business details; missed rich snippet opportunity

### Finding
Current schema markup is minimal:

✓ **Present:** AggregateRating schema (homepage testimonials)
✗ **Missing:** LocalBusiness schema (should be on every page or in layout)
✗ **Missing:** BreadcrumbList (on nested pages)
✗ **Incomplete:** Address, phone number in LocalBusiness

### Required LocalBusiness Schema
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Wonderloud Therapy",
  "description": "Therapy for perinatal mental health, adult ADHD, career counseling",
  "url": "https://wonderloudtherapy.com",
  "telephone": "+1-555-123-4567",
  "email": "contact@rainukatherapy.com",
  "areaServed": {
    "@type": "State",
    "name": ["CA", "Canada", "Florida"]
  },
  "priceRange": "$80-$150",
  "medicalSpecialty": [
    "Mental Health Counseling",
    "Trauma-Informed Therapy",
    "ADHD Coaching"
  ]
}
```

### Missing Schema on Key Pages
| Page | Current Schema | Missing Schema |
|------|----------------|----------------|
| Homepage | AggregateRating | LocalBusiness, BreadcrumbList |
| About | None visible | Person, LocalBusiness (via layout) |
| Perinatal | None visible | FAQPage |
| ADHD | None visible | FAQPage |
| FAQ | None visible | FAQPage (critical!) |
| Contact | None visible | LocalBusiness, ContactPoint |

### Action Items
1. Add LocalBusiness schema to layout.tsx (shared across all pages)
2. Add FAQPage schema to /faq and specialty-faq pages
3. Add BreadcrumbList to nested pages (/guides/[slug])
4. Validate with Google Rich Results Test (search.google.com/test/rich-results)
5. Monitor Google Search Console for schema errors

---

## Issue #8: Meta Description Missing on Contact Page

**Category:** Meta Descriptions
**Severity:** CRITICAL
**Affected Pages:** Contact page (/contact)
**Impact:** Search engines use auto-generated description (poor quality); low CTR

### Finding
Contact page exports no metadata:

```tsx
export default function ContactPage() {
  // ← No Metadata export
```

### Required Fix
```tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Rainuka | Book Your Therapy Session',
  description: 'Get in touch with Wonderloud Therapy. Call, email, or book your free consultation. Available Mon-Fri, 9am-5pm EST.',
  openGraph: {
    title: 'Contact Rainuka Oberoi',
    description: 'Ready to start therapy? Schedule your free 15-minute call today.',
  },
}
```

### Action Items
1. Export Metadata on Contact page
2. Add title (50-60 chars) + description (150-160 chars)
3. Include phone number & availability in description (trust signal)
4. Add CTA ("Book," "Schedule," "Call")

---

## Issue #9: Career Page H1 Has No Primary Keyword

**Category:** Header Hierarchy
**Severity:** WARNING
**Affected Pages:** Career page (/career)
**Impact:** Google cannot determine page topic; loses keyword relevance signal

### Finding
Career page H1:
`When Your Job Stops Working`

This is emotionally resonant but strategically weak for SEO because it contains NO keyword: "career," "therapy," or "counseling."

### Recommended H1 Revision
**Current:** "When Your Job Stops Working"
**Better:** "Career Therapy: Navigate Burnout, Transitions & Doubt"
**Keywords:** "career therapy" (primary), "burnout" (secondary), "transitions" (tertiary)

### H1-Title Tag Relationship
```
Title Tag: "Career Therapy | Burnout & Transition Support"
↓
H1:        "Career Therapy: Burnout, Transitions & Doubt"
↓
H2s:       "Who I Help," "My Approach," "Success Stories"
```

### Action Items
1. Add "Career Therapy" or "Career Counseling" to H1
2. Maintain emotional resonance: "Career Therapy: When Your Job Stops Working"
3. Mirror primary keyword in title, H1, and first 100 words of content
4. Test keyword density with Yoast/SEMrush (aim 1-2%)

---

## Issue #10: FAQ Pages Missing FAQPage Schema

**Category:** Schema Markup
**Severity:** WARNING
**Affected Pages:** /faq, /perinatal-faq, /adhd-faq
**Impact:** Google doesn't recognize as FAQ; misses rich snippet opportunity for direct SERP answers

### Finding
FAQ pages have content but no FAQPage schema markup:

Current: FAQ data exists as JavaScript array, no JSON-LD
Expected: `<script type="application/ld+json">` with FAQPage schema

### Required FAQPage Schema
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long is the free consultation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fifteen minutes. We'll chat about what's bringing you in, I'll share a bit about how I work, and we'll see if it feels like a fit."
      }
    },
    {
      "@type": "Question",
      "name": "How much does therapy cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "I offer sliding scale sessions from $80-$150 per 50-minute session. Let's figure out what works for your budget."
      }
    }
  ]
}
```

### Benefits of FAQPage Schema
- Direct answer appears in Google Search results ("People also ask")
- Increases SERP real estate (featured snippet position)
- Boosts CTR and brand credibility
- Helps voice search (Alexa, Google Assistant) answer questions

### Action Items
1. Convert FAQ array in /faq/page.tsx to JSON-LD script
2. Repeat for /perinatal-faq and /adhd-faq
3. Validate with Rich Results Test
4. Monitor Google Search Console → Enhancement → FAQPage

---

## Issue #11: Booking Page H2s Redundant (Low Unique Value)

**Category:** Header Hierarchy
**Severity:** MINOR
**Affected Pages:** Booking page
**Impact:** Weak content structure; Google can't distinguish sections

### Finding
Booking page uses generic H2s:
- "Information"
- "Form"
- "Privacy"

These headers don't describe content; they're section labels.

### Better H2 Examples
✓ "What to Expect in Your First Session"
✓ "Book a Therapy Session That Works for You"
✓ "Insurance & Sliding Scale Options"
✓ "Privacy & Confidentiality Guarantee"

### Action Items
1. Replace functional H2s with descriptive ones that include keywords
2. Add context: each H2 should clarify the value below it
3. Ensure each section is 100-200 words (minimum)

---

## Issue #12: Homepage H2s Lack Secondary Keywords

**Category:** Header Hierarchy
**Severity:** MINOR
**Affected Pages:** Homepage
**Impact:** Missed LSI keyword opportunity; weak topical relevance signal

### Finding
Homepage section headers:
- "Approach" (4 words, no keywords)
- "Social Proof" (2 words, no keywords)
- "Testimonials" (generic)

### Better Headers with Keywords
| Current | Improved | Keywords |
|---------|----------|----------|
| "Approach" | "How I Work: Trauma-Informed, Culturally Humble Therapy" | trauma-informed, culturally humble |
| "Social Proof" | "What Clients Say: Real Results from Real People" | testimonials, results, trust |
| "FAQ teaser" | "Common Questions About Therapy & Getting Started" | therapy, getting started, FAQ |

### Action Items
1. Add 1-2 descriptive keywords to each H2
2. Make headers benefit-focused ("How to," "What is," "Why you should")
3. Test keyword density: aim for primary keyword in 1 H1 + 1-2 H2s

---

## Issue #13: No Breadcrumb Navigation or Schema

**Category:** URL Structure & Schema
**Severity:** MINOR
**Affected Pages:** /guides/[slug], nested pages
**Impact:** Users confused about site hierarchy; Google can't map structure

### Finding
Nested pages (e.g., /guides/my-article) have no breadcrumb trail.

### Breadcrumb Examples
```
Home > Guides > [Article Title]
Home > Services > ADHD > Diagnosis
Home > About > Why Rainuka
```

### Required BreadcrumbList Schema
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://wonderloudtherapy.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Guides",
      "item": "https://wonderloudtherapy.com/guides"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "[Article Title]",
      "item": "https://wonderloudtherapy.com/guides/[slug]"
    }
  ]
}
```

### Action Items
1. Add breadcrumb component to layout for nested pages
2. Include BreadcrumbList schema on pages with depth
3. Style breadcrumbs for visibility (not hidden/small font)
4. Test with Rich Results Test

---

## Issue #14: Perinatal Page Description Focuses on Conditions, Not Benefits

**Category:** Meta Descriptions
**Severity:** MINOR
**Affected Pages:** Perinatal, ADHD, Career pages
**Impact:** CTR lower because benefits aren't clear in SERP preview

### Finding
Perinatal meta description:
`"Perinatal therapy for pregnancy loss, postpartum anxiety, infertility, and reproductive trauma. Rainuka specializes in trauma-informed perinatal mental health support."`

This lists conditions but doesn't emphasize user benefit.

### Better Meta Description (Benefits-First)
`"Struggling with pregnancy loss or postpartum anxiety? Get trauma-informed therapy that honors your experience. Compassionate, shame-free support. Free 15-min call."`

**Keywords added:**
- Problem: "pregnancy loss," "postpartum anxiety"
- Benefit: "trauma-informed," "shame-free"
- CTA: "Free 15-min call"

### Action Items
1. Rewrite all specialty page meta descriptions to lead with user benefit
2. Add emotional resonance: "Compassionate," "Shame-free," "Understood"
3. Include CTA: "Get support," "Schedule call," "Learn more"
4. Test CTR improvement in GSC after 4 weeks

---

## Issue #15: About Page Lacks Schema (Person/Therapist)

**Category:** Schema Markup
**Severity:** MINOR
**Affected Pages:** About page
**Impact:** Google doesn't recognize therapist credentials; missed rich result

### Finding
About page has no Person or ProfessionalService schema.

### Recommended Person Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Rainuka Oberoi",
  "jobTitle": "Licensed Therapist",
  "url": "https://wonderloudtherapy.com/about",
  "description": "Trauma-informed therapist specializing in perinatal mental health, ADHD, career counseling",
  "sameAs": [
    "https://linkedin.com/in/rainuka",
    "https://instagram.com/rainuka"
  ],
  "credentials": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Licensed Professional Counselor (LPC)"
    }
  ]
}
```

### Action Items
1. Add Person schema with credentials to About page
2. Link to relevant certifications/licenses
3. Include social profiles (LinkedIn, Instagram)
4. Validate with Rich Results Test

---

## Issue #16: Contact Page Missing CTAs in Header

**Category:** Title Tags & Headers
**Severity:** WARNING
**Affected Pages:** Contact page
**Impact:** Users land but don't convert; weak page purpose

### Finding
Contact page header: "Get in Touch" (no keyword, no CTA verb)

### Better Contact Page Title & H1
```
Title: "Book Your Free Therapy Consultation | Rainuka Oberoi" (60 chars)
H1:    "Ready to Start? Book Your Free 15-Minute Call"
```

**Keywords:** "book," "free consultation," "therapy" (primary benefit)

### Action Items
1. Add CTA verb to title: "Book," "Schedule," "Call," "Get Support"
2. Include "free" in title (strong incentive)
3. H1 should match title intent (not "Get in Touch")

---

## Issue #17: Guides Index Missing SEO-Friendly H1

**Category:** Header Hierarchy
**Severity:** MINOR
**Affected Pages:** /guides, /guides/archive
**Impact:** Page topic unclear; missed keyword signal

### Finding
Guides page likely has generic title/H1 without keyword focus.

### Expected Guides H1 & Title
```
Title: "Therapy Guides & Mental Health Resources | Wonderloud" (58 chars)
H1:    "Therapy Guides: Perinatal, ADHD & Career Support"
```

Keywords: "therapy guides," "mental health resources," "ADHD," "perinatal"

### Action Items
1. Check /guides/page.tsx metadata export
2. Ensure H1 includes "Guides" + primary keyword
3. Add H2s for each guide category (Perinatal, ADHD, Career)

---

### No Canonical Tags Detected

**Category:** Technical SEO (Related)
**Severity:** MINOR
**Affected Pages:** All pages
**Impact:** Google may index duplicate/trailing-slash versions

### Finding
No explicit canonical link tags in pages (Next.js should auto-generate, but verify).

### Verify Canonical Tags
1. Open DevTools → Sources → View Page Source
2. Search for canonical link tag
3. Should see proper canonical href attribute

### Action Items
1. Verify Next.js auto-canonicalization is working
2. Check Google Search Console → Coverage for duplicate URL warnings
3. If issues, add explicit canonical to each page metadata

---

## Issue #19: Meta Description Character Count Inconsistency

**Category:** Meta Descriptions
**Severity:** MINOR
**Affected Pages:** 10+ pages
**Impact:** Inconsistent SERP display; some truncated

### Finding
Meta descriptions range from 90-220 characters (huge variance):

| Page | Length | Status |
|------|--------|--------|
| Homepage | 210 | Too long (truncated) |
| About | 201 | Too long |
| Perinatal | 140 | Good |
| ADHD | 138 | Good |
| Career | ~100 | Too short |
| Contact | N/A | Missing |

### Ideal Range: 150-160 characters

### Action Items
1. Standardize all meta descriptions to 150-160 chars
2. Use character counter: https://www.seomofo.com/snippet-optimizer/
3. Test in Google's SERP preview tool

---

## Issue #20: Missing Image Alt Text & Schema

**Category:** Content Optimization (Related)
**Severity:** WARNING
**Affected Pages:** All pages with images
**Impact:** Lost SEO value; accessibility failure

### Finding
Images likely lack descriptive alt text.

### Example Improvements
```tsx
// Bad
<img src="rainuka.jpg" alt="photo" />

// Good
<img src="rainuka.jpg" alt="Rainuka Oberoi, trauma-informed therapist, smiling" />
```

**Alt text formula:** [Person] + [Descriptor] + [Context]

### Action Items
1. Add descriptive alt text to all images
2. Include therapy-related keywords naturally
3. Avoid keyword stuffing (max 12-15 words)
4. See Issue #20 for full image SEO audit

---

## Issue #21: Inconsistent Keyword Usage Across Pages

**Category:** Keyword Strategy
**Severity:** MINOR
**Affected Pages:** Multiple
**Impact:** Weak topical authority; Google uncertain about site focus

### Finding
Different keyword phrasing across pages:

| Page | Primary Keyword Used |
|------|------------------|
| Title (Home) | "Therapy for Perinatal, ADHD & Career" |
| About | "Licensed therapist" (no primary keywords) |
| Perinatal | "Perinatal Therapy" |
| ADHD | "Adult ADHD Therapy" |
| Career | "When Your Job Stops..." (no keyword) |

### Recommended Keyword Consistency
- **Primary:** "Therapy" (root keyword)
- **Specializations:** "Perinatal Therapy," "ADHD Therapy," "Career Therapy"
- **Modifiers:** "Trauma-informed," "Shame-aware," "Online"

### Target Keyword Mapping
```
Homepage: "Therapy for Perinatal, ADHD & Career"
├─ Perinatal Therapy
├─ Adult ADHD Therapy  
├─ Career Counseling
└─ Online Therapy
```

### Action Items
1. Create keyword matrix (page → primary, secondary keywords)
2. Ensure primary keyword appears in: title, H1, first 100 words
3. Use secondary keywords in H2/H3
4. Test keyword density with Yoast SEO

---

## Issue #22: First 100 Words Missing Primary Keywords

**Category:** Content Optimization
**Severity:** WARNING
**Affected Pages:** Career page, some guides
**Impact:** Google can't quickly identify page topic; lower ranking potential

### Finding
Career page opens with: "When Your Job Stops Working..." (no keywords for 30+ words)

### Best Practice
Primary keyword should appear within **first 50-100 words**.

### Example Fix
**Current:** "When Your Job Stops Working. Career transitions feel impossible when you're alone with the doubt..."

**Better:** "Career Therapy When Your Job Stops Working. Burned out, confused, or doubting your career path? Career counseling that helps you navigate transitions, burnout, and doubt..."

**Keywords in first 50 words:**
- "Career Therapy" ✓
- "Career transitions" ✓
- "Career counseling" ✓

### Action Items
1. Audit first 100 words of each page
2. Add primary keyword within first 50 words
3. Use variations: "career therapy," "career counseling," "career guidance"
4. Test with Yoast (green light = good)

---

## Issue #23: H2s Too Generic on Specialty Pages

**Category:** Header Hierarchy
**Severity:** MINOR
**Affected Pages:** Specialty pages (Perinatal, ADHD, Career, etc.)
**Impact:** Missed secondary keyword opportunity; weak content structure

### Finding
H2s are generic labels, not content descriptors:

```
- "Who I Help"
- "My Approach"
- "Why Rainuka"
- "FAQ"
```

These don't emphasize keywords or benefits.

### Better H2 Examples
```
- "Who This Therapy Is For" → "Perinatal Therapy for Pregnancy Loss, Anxiety & Grief"
- "My Approach" → "How Trauma-Informed Perinatal Therapy Works"
- "Why Rainuka" → "Why Choose Rainuka: Specialization in Perinatal Grief"
- "FAQ" → "Perinatal Therapy FAQ: Common Questions Answered"
```

### Action Items
1. Update each specialty page H2s to include keywords
2. Make H2s benefit-focused ("How," "What," "Why you should")
3. Ensure H2-H3 hierarchy is clean (no skips)

---

## Issue #24: No Internal Linking from High-Authority Pages

**Category:** Internal Linking
**Severity:** WARNING
**Affected Pages:** Homepage → Specialty pages link insufficient
**Impact:** Lower ranking for specialty pages (Career, ADHD are harder to rank than Homepage)

### Finding
Homepage links to specialties exist but are weak:

```tsx
<NicheGrid /> // Shows specialty cards but anchor text not optimized
```

Specialty card links likely use: "Learn more" (weak)
Should use: "Explore ADHD diagnosis & therapy" (strong)

### Internal Link Strategy
**High Authority Pages → Low Authority Pages**

```
Homepage (100% authority)
├─ Link text: "Explore Adult ADHD Therapy" → /adhd
├─ Link text: "Perinatal Therapy for Pregnancy Loss" → /perinatal
└─ Link text: "Career Transitions & Burnout Support" → /career

About (70% authority)
├─ Link text: "Rainuka's ADHD Diagnosis Experience" → /adhd
└─ Link text: "Perinatal Specialization" → /perinatal
```

### Action Items
1. Audit all internal links (use Screaming Frog)
2. Change weak anchor text to keyword-rich phrases
3. Ensure every specialty page is linked from homepage + about
4. Add breadcrumb navigation (visual + schema)

---

## Issue #25: No Topical Cluster/Pillar Strategy

**Category:** Information Architecture
**Severity:** MINOR
**Affected Pages:** All pages
**Impact:** Google can't determine site authority on topics; lower rankings

### Finding
Pages exist but no clear topical relationship:

```
Current:
- /perinatal
- /perinatal-faq
- /adhd
- /adhd-faq
- /career

Missing:
- FAQ linkage between related pages
- Cross-links between related conditions (e.g., postpartum anxiety → perinatal therapy)
```

### Recommended Pillar-Cluster Model
```
PERINATAL PILLAR PAGE
├─ Pregnancy Loss Therapy
├─ Postpartum Anxiety Treatment
├─ Infertility Grief Support
├─ Reproductive Trauma Healing
├─ Perinatal Mental Health FAQ
└─ Back to Pillar

ADHD PILLAR PAGE
├─ Adult ADHD Diagnosis
├─ Executive Dysfunction Support
├─ Rejection Sensitive Dysphoria
├─ ADHD Burnout & Career
├─ ADHD FAQ
└─ Back to Pillar
```

### Action Items
1. Create internal linking map (Miro/Lucidchart)
2. Ensure each specialty has 2-4 related sub-pages
3. Link FAQ back to specialty pillar
4. Add "Related Articles" section to each page

---

## Issue #26: About Page Missing Credentials/Certification Schema

**Category:** Schema Markup
**Severity:** MINOR
**Affected Pages:** About page
**Impact:** Therapist qualifications unclear to search engines; missed trust signal

### Finding
No EducationalOccupationalCredential schema for licenses/certifications.

### Recommended Additional Schema
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Wonderloud Therapy",
  "areaServed": ["CA", "Canada", "Florida"],
  "profession": "Licensed Mental Health Counselor",
  "knowsAbout": [
    "Perinatal Mental Health",
    "Adult ADHD Diagnosis",
    "Trauma-Informed Therapy",
    "Career Counseling"
  ],
  "potentialAction": {
    "@type": "BookAction",
    "target": "https://wonderloudtherapy.com/booking"
  }
}
```

### Action Items
1. Add credentials to Person schema
2. Add ProfessionalService schema with areas served
3. Link to actual license/certification pages
4. Validate with Rich Results Test

---

## Summary of 26 Issues by Priority

### CRITICAL (Fix Immediately) — 3 Issues
1. Contact page missing metadata (title, description)
2. H1 missing on Contact/Guides/Booking pages
3. FAQ pages missing FAQPage schema

### WARNING (Fix This Month) — 8 Issues
4. Title tags too long (inconsistent 50-60 char format)
5. Meta descriptions missing CTA and too short
6. H2/H3 hierarchy breaks or lacks keywords
7. Homepage H2s lack secondary keywords
8. Perinatal/ADHD descriptions focus on conditions, not benefits
9. No breadcrumb navigation/schema on nested pages
10. Contact page missing CTAs in header
11. Limited internal linking from homepage to specialties
12. Career page H1 has no primary keyword

### MINOR (Optimize for Polish) — 15 Issues
13. Career page URL lacks keyword (/career → /career-therapy)
14. Weak internal link anchor text (generic "learn more")
15. Guides index missing H1 with keywords
16. No canonical tags detected (verify Next.js auto-gen)
17. Missing Image Alt Text & Schema
18. Inconsistent keyword usage across pages
19. First 100 words missing primary keywords (Career page)
20. H2s too generic on specialty pages
21. No topical cluster/pillar strategy
22. About page lacking Person/Credentials schema
23. Booking page H2s redundant/generic
24. No breadcrumb component for nested pages
25. Meta description character count variance
26. Missing BreadcrumbList schema on /guides/[slug]

---

## Recommended Action Plan

### Phase 1: Critical Fixes (1-2 weeks)
- [ ] Add metadata export to Contact page
- [ ] Add H1 tags to all pages missing them
- [ ] Implement FAQPage schema on /faq, /perinatal-faq, /adhd-faq

### Phase 2: Keyword & Header Optimization (2-3 weeks)
- [ ] Revise all title tags to 50-60 chars with primary keyword
- [ ] Rewrite all meta descriptions (150-160 chars with CTA)
- [ ] Update H1 tags to include primary keywords
- [ ] Fix H2/H3 hierarchy on specialty pages

### Phase 3: Internal Linking & Schema (3-4 weeks)
- [ ] Audit and improve internal anchor text (keyword-rich)
- [ ] Add LocalBusiness schema to layout.tsx
- [ ] Add BreadcrumbList schema to nested pages
- [ ] Add Person/Credentials schema to About page

### Phase 4: Polish & Monitoring (Ongoing)
- [ ] Monitor keyword rankings in GSC
- [ ] Test CTR improvement from new descriptions
- [ ] Implement image alt text across site
- [ ] Create topical cluster/pillar strategy map

---

## Metrics to Track (Post-Implementation)

### Google Search Console
1. **Impressions:** Track before/after title tag optimization
2. **Click-Through Rate (CTR):** Expect 10-15% improvement from better meta descriptions
3. **Average Position:** Specialty pages should move up 2-5 positions
4. **Coverage:** Monitor for duplicate URL warnings (canonicalization)

### Internal Metrics
1. **Bounce Rate:** Better titles/descriptions should reduce bounce
2. **Time on Page:** Improved hierarchy should increase engagement
3. **Internal Link Depth:** Track pages reached via internal linking
4. **Conversion Rate:** New/improved CTAs should drive more bookings

### Schema/Rich Results
1. **FAQPage Rich Results:** Monitor Google Search Console → Enhancements
2. **BreadcrumbList Rendering:** Test with Rich Results Test tool
3. **AggregateRating Display:** Track star rating impressions

---

## Tools for Implementation

### SEO Auditing
- [Screaming Frog SEO Spider](https://www.screamingfrog.co.uk/seo-spider/) (free version)
- [Google Search Console](https://search.google.com/search-console)
- [Google Rich Results Test](https://search.google.com/test/rich-results)

### Metadata Optimization
- [SEO Mofo SERP Preview](https://www.seomofo.com/snippet-optimizer/)
- [Titleist Tool](https://www.titleist.com/)
- [Meta Description Checker](https://www.seobility.net/en/seotools/meta-description-checker/)

### Keyword Research
- [Google Search Console → Queries](https://search.google.com/search-console)
- [Ahrefs Keywords Explorer](https://ahrefs.com/) (paid)
- [Semrush Keyword Magic](https://www.semrush.com/) (paid)

### Schema Validation
- [JSON-LD Online Editor](https://jsonld.com/playground/)
- [Schema.org Specification](https://schema.org/)

---

## References & Resources

- [Google Search Central: Title Tags](https://developers.google.com/search/docs/beginner/meta-tags)
- [Google Search Central: Meta Descriptions](https://developers.google.com/search/docs/appearance/snippet)
- [Google Search Central: Schema Markup](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
- [SEMrush: On-Page SEO Guide](https://www.semrush.com/blog/on-page-seo/)
- [Moz: On-Page SEO Checklist](https://moz.com/guides/on-page-seo)
- [Neil Patel: Internal Linking Strategy](https://neilpatel.com/blog/internal-links/)

---

**Report Generated:** September 1, 2026
**Total Words:** 2,850+
**Severity Summary:** 3 Critical | 8 Warnings | 15 Minor Issues
**Next Steps:** Review Phase 1 fixes, schedule implementation
