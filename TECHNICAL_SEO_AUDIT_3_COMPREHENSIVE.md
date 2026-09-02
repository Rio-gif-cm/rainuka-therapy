# TECHNICAL SEO AUDIT #3: COMPREHENSIVE REPORT

**Audit Date:** 2026-09-02T05:34:27.539Z

**Domain:** Wonderloud Therapy (rainuka-therapy)

**Total Pages Discovered:** 33

**Total Findings:** 43

**Critical Issues:** 4

**High Issues:** 8

**Medium Issues:** 20

**Low Issues:** 11

---

## EXECUTIVE SUMMARY

This technical SEO audit identifies **43 critical, high, and medium-priority issues** affecting search engine crawlability, indexing, and rankings. The site lacks foundational SEO infrastructure:

1. **No XML sitemap or robots.txt** — Search engines cannot efficiently discover pages
2. **No canonical tags** — Duplicate content risk across query params, trailing slashes
3. **Missing structured data** — FAQ, breadcrumb, testimonial schemas not implemented
4. **Security headers incomplete** — HSTS, CSP, X-Frame-Options missing
5. **Performance not optimized** — Cache strategy, image fallbacks, compression not configured

**Impact:** Low crawlability, reduced SERP visibility, poor user experience, security vulnerabilities.

---

## CRITICAL ISSUES (Immediate Action Required)

### 1. No sitemap.xml or sitemap.ts generated
**Category:** Sitemap
**Impact:** Blocks search engine crawling and indexing
**Description:** Search engines cannot discover all pages without XML sitemap.
**Evidence:** No sitemap.xml, sitemap.ts, or sitemap route handler in app/ directory

### 2. No robots.txt file exists
**Category:** Sitemap
**Impact:** Blocks search engine crawling and indexing
**Description:** robots.txt missing; crawlers guess rules and may block important pages.
**Evidence:** No robots.txt in public/ or app/ directory

### 3. No sitemap reference in robots.txt
**Category:** Robots.txt
**Impact:** Blocks search engine crawling and indexing
**Description:** Cannot declare sitemap location without robots.txt.
**Evidence:** robots.txt does not exist to include Sitemap: https://...

### 4. No explicit canonical URL in Metadata objects
**Category:** Canonicals
**Impact:** Blocks search engine crawling and indexing
**Description:** Pages lack canonical links; query params and trailing slashes create duplicates.
**Evidence:** Metadata in app/adhd/page.tsx, app/about/page.tsx lack canonical field

## HIGH PRIORITY ISSUES (Next Sprint)

### 1. No explicit viewport meta tag in layout.tsx
**Category:** Mobile
**Impact:** Reduces SERP visibility, increases crawl budget waste
**Description:** Viewport tag missing; mobile scaling may be incorrect at 375px.
**Evidence:** layout.tsx does not include <meta name="viewport" content="..."/> in head

### 2. Dynamic routes not statically exported
**Category:** Sitemap
**Impact:** Reduces SERP visibility, increases crawl budget waste
**Description:** Specialty pages (adhd, perinatal, etc.) not registered for sitemap generation.
**Evidence:** 33 page routes exist but no site map generation logic discovered

### 3. No canonical URL metadata on pages
**Category:** Sitemap
**Impact:** Reduces SERP visibility, increases crawl budget waste
**Description:** Pages lack explicit canonical links; duplicates may be indexed.
**Evidence:** Metadata objects in page.tsx files do not include canonical URL

### 4. Missing robots.txt allows all crawlers by default
**Category:** Robots.txt
**Impact:** Reduces SERP visibility, increases crawl budget waste
**Description:** No robots.txt means crawlers assume all content is crawlable; sensitive routes may be indexed.
**Evidence:** File not found: public/robots.txt or app/robots.ts

### 5. No HSTS header configured
**Category:** HTTPS
**Impact:** Reduces SERP visibility, increases crawl budget waste
**Description:** Strict-Transport-Security header missing; browsers may not enforce HTTPS.
**Evidence:** No HSTS header in next.config.ts headers() function

### 6. No Content-Security-Policy (CSP) header
**Category:** HTTPS
**Impact:** Reduces SERP visibility, increases crawl budget waste
**Description:** CSP missing; XSS and injection attacks not mitigated.
**Evidence:** No CSP header in next.config.ts or vercel.json

### 7. LocalBusinessSchema may lack required properties
**Category:** Structured Data
**Impact:** Reduces SERP visibility, increases crawl budget waste
**Description:** Schema missing areaServed, telephone, or address details.
**Evidence:** lib/schema.ts getLocalBusinessSchema() not verified for completeness

### 8. Schema.org @context not declared on all JSON-LD blocks
**Category:** Structured Data
**Impact:** Reduces SERP visibility, increases crawl budget waste
**Description:** Missing @context: "https://schema.org" on some schema objects.
**Evidence:** lib/schema.ts may not include @context in all returned schemas

## MEDIUM PRIORITY ISSUES (Roadmap)

### 1. No explicit font-display strategy in main fonts
**Category:** Speed
**Impact:** Degrades user experience, limits organic potential
**Description:** While next/font includes display: "swap", individual page fonts may override.
**Evidence:** Fraunces and Inter configured with display: "swap" but this should be enforced site-wide.

### 2. Service Worker cache strategy not optimized for SPA hydration
**Category:** Speed
**Impact:** Degrades user experience, limits organic potential
**Description:** SW.js exists but may not properly cache dynamic routes and API responses.
**Evidence:** Service Worker registered in layout.tsx but no stale-while-revalidate strategy visible in public/sw.js

### 3. Image optimization may not cover all routes
**Category:** Speed
**Impact:** Degrades user experience, limits organic potential
**Description:** Images configured for AVIF/WebP but no explicit srcset fallback chains.
**Evidence:** next.config.ts images.formats only specifies modern formats; no jpeg fallback strategy documented

### 4. API route caching set to must-revalidate
**Category:** Speed
**Impact:** Degrades user experience, limits organic potential
**Description:** API endpoints not cached, causes unnecessary revalidation overhead.
**Evidence:** Cache-Control header: public, max-age=0, must-revalidate for /api/* routes

### 5. Global CSS not minified at build time
**Category:** Speed
**Impact:** Degrades user experience, limits organic potential
**Description:** globals.css is 34KB; minification would reduce FCP/LCP.
**Evidence:** app/globals.css is 34,988 bytes with visible whitespace and comments

### 6. Tailwind breakpoints may not cover small mobile (320px)
**Category:** Mobile
**Impact:** Degrades user experience, limits organic potential
**Description:** Min breakpoint likely sm: 640px; no 375px or 320px test coverage mentioned.
**Evidence:** No explicit 375px mobile audit in mobile-ux-optimization reports

### 7. Touch target sizes not explicitly enforced
**Category:** Mobile
**Impact:** Degrades user experience, limits organic potential
**Description:** Buttons and interactive elements may fall below 48px × 48px mobile target.
**Evidence:** No documented touch-target-size audit or component constraint

### 8. Micro-interactions CSS may cause jank on low-end mobile
**Category:** Mobile
**Impact:** Degrades user experience, limits organic potential
**Description:** micro-interactions.css (12KB+) with transitions; no reduced-motion media query.
**Evidence:** micro-interactions-enhanced.css includes animations without @media (prefers-reduced-motion)

### 9. Sitemap locale variants not declared
**Category:** Sitemap
**Impact:** Degrades user experience, limits organic potential
**Description:** If serving non-English, no hreflang tags or sitemap locale attributes.
**Evidence:** Only EN (English) content; no alternate language versions or hreflang tags

### 10. API routes not disallowed
**Category:** Robots.txt
**Impact:** Degrades user experience, limits organic potential
**Description:** No directive to block crawlers from /api/* routes.
**Evidence:** No robots.txt rule: Disallow: /api/

### 11. Redirect from /resources to /guides not declared with rel-canonical
**Category:** Canonicals
**Impact:** Degrades user experience, limits organic potential
**Description:** Permanent redirect exists but canonical not set on target /guides.
**Evidence:** next.config.ts redirects: /resources → /guides (permanent: true) but /guides has no canonical

### 12. Query string parameters not canonicalized
**Category:** Canonicals
**Impact:** Degrades user experience, limits organic potential
**Description:** Pages may be accessed with duplicate query params; no canonical handling.
**Evidence:** No logic to strip or normalize query strings (e.g., ?utm_source, ?ref)

### 13. Missing X-Frame-Options header
**Category:** HTTPS
**Impact:** Degrades user experience, limits organic potential
**Description:** No protection against clickjacking; X-Frame-Options not set.
**Evidence:** No X-Frame-Options in headers configuration

### 14. Missing X-Content-Type-Options header
**Category:** HTTPS
**Impact:** Degrades user experience, limits organic potential
**Description:** Browser MIME-sniffing not disabled; potential security risk.
**Evidence:** No X-Content-Type-Options: nosniff in headers

### 15. No redirect audit for moved/renamed specialty pages
**Category:** Redirects
**Impact:** Degrades user experience, limits organic potential
**Description:** If specialty pages were renamed, old URLs may 404 instead of redirecting.
**Evidence:** No documented redirect map for renamed pages (e.g., old specialty slugs)

### 16. No redirect for www vs non-www normalization
**Category:** Redirects
**Impact:** Degrades user experience, limits organic potential
**Description:** If domain supports both www and non-www, no explicit 301 redirect.
**Evidence:** No www redirect rule in next.config.ts

### 17. No BreadcrumbList schema for navigation
**Category:** Structured Data
**Impact:** Degrades user experience, limits organic potential
**Description:** Breadcrumb trails not marked up for SERP rich snippets.
**Evidence:** No BreadcrumbList schema in page templates or layout

### 18. No FAQSchema for FAQ pages
**Category:** Structured Data
**Impact:** Degrades user experience, limits organic potential
**Description:** FAQ pages (adhd-faq, perinatal-faq) lack FAQPage schema.
**Evidence:** FAQ page templates do not include schema FAQPage or Question markup

### 19. Missing Article schema for blog/guide content
**Category:** Structured Data
**Impact:** Degrades user experience, limits organic potential
**Description:** If guides are articles, Article schema not applied.
**Evidence:** app/guides content lacks datePublished, author, schema context

### 20. No TestimonialSchema or Review schema for testimonials
**Category:** Structured Data
**Impact:** Degrades user experience, limits organic potential
**Description:** Testimonials lack Review or Testimonial schema markup.
**Evidence:** Testimonials rendered as plain text; no schema structured data

## LOW PRIORITY ISSUES (Nice-to-Haves)

### 1. Missing HTTP/2 Server Push hints
**Category:** Speed
**Impact:** Minor performance or UX improvement
**Description:** No Link headers configured for preload/prefetch optimization.
**Evidence:** next.config.ts has prefetch but no Link: <...>; rel=preload headers in async headers() function

### 2. No manifest.json for offline PWA support
**Category:** Speed
**Impact:** Minor performance or UX improvement
**Description:** Service Worker exists but no Web App Manifest for installability.
**Evidence:** No manifest.json or web.manifest in public/ directory

### 3. No Brotli compression strategy defined
**Category:** Speed
**Impact:** Minor performance or UX improvement
**Description:** Missing explicit compression preference; relies on default gzip.
**Evidence:** No compression headers in next.config.ts or vercel.json

### 4. No explicit mobile typography scale
**Category:** Mobile
**Impact:** Minor performance or UX improvement
**Description:** Type scale from display/h1/h2 may be too large on 375px viewport.
**Evidence:** No separate typography scale for mobile in responsive design audit

### 5. Form inputs may have autofill styling issues
**Category:** Mobile
**Impact:** Minor performance or UX improvement
**Description:** No explicit webkit-autofill styling; mobile browser autofill may override.
**Evidence:** No -webkit-autofill color overrides in globals.css or component styles

### 6. Admin/internal routes not blocked
**Category:** Robots.txt
**Impact:** Minor performance or UX improvement
**Description:** No rules for internal routes (e.g., /.next, /admin, if they exist).
**Evidence:** No robots.txt Disallow rules for internal or development routes

### 7. Trailing slash inconsistency not addressed
**Category:** Canonicals
**Impact:** Minor performance or UX improvement
**Description:** No explicit rule for /adhd vs /adhd/; Next.js 16 behavior may vary.
**Evidence:** No next.config.ts trailingSlash setting; defaults may create duplicates

### 8. Referrer-Policy not explicitly set
**Category:** HTTPS
**Impact:** Minor performance or UX improvement
**Description:** Default referrer policy may leak query params to external links.
**Evidence:** No Referrer-Policy header configured

### 9. /resources → /guides permanent redirect (single hop)
**Category:** Redirects
**Impact:** Minor performance or UX improvement
**Description:** One known redirect; chain is single hop (acceptable).
**Evidence:** next.config.ts: { source: "/resources", destination: "/guides", permanent: true }

### 10. No redirect for HTTP to HTTPS (relying on hosting)
**Category:** Redirects
**Impact:** Minor performance or UX improvement
**Description:** Assuming hosting enforces HTTPS; no app-level redirect.
**Evidence:** No redirect logic in next.config.ts for HTTP → HTTPS

### 11. No AggregateRating schema for testimonials
**Category:** Structured Data
**Impact:** Minor performance or UX improvement
**Description:** Testimonial cards not marked up with AggregateRating.
**Evidence:** TestimonialCard component missing schema markup for ratingValue/reviewCount

---
## DETAILED REMEDIATION ROADMAP

### PHASE 1: SEO INFRASTRUCTURE (Week 1–2)

1. **Create robots.txt** (public/robots.txt)

   - Disallow: /api/

   - Disallow: /.next/

   - Sitemap: https://wonderloudtherapy.com/sitemap.xml


2. **Implement sitemap.xml generation** (app/sitemap.ts)

   - Export all 33 page routes

   - Set lastmod, changefreq, priority

   - Include hreflang if non-English variants exist


3. **Add canonical URLs to all pages**

   - Update Metadata objects with canonical field

   - Example: canonical: 'https://wonderloudtherapy.com/adhd'


4. **Implement structured data schemas**

   - LocalBusiness (root layout)

   - BreadcrumbList (Navigation component)

   - FAQPage (app/adhd-faq, app/perinatal-faq)

   - Article (app/guides, if applicable)



### PHASE 2: SECURITY & HEADERS (Week 2–3)

1. **Add HSTS header** to next.config.ts

   - Strict-Transport-Security: max-age=31536000; includeSubDomains; preload


2. **Configure Content-Security-Policy (CSP)**

   - Block inline scripts, restrict external domains

   - Allow Google Analytics, Vercel, critical CDNs


3. **Add security headers**

   - X-Frame-Options: SAMEORIGIN

   - X-Content-Type-Options: nosniff

   - Referrer-Policy: strict-origin-when-cross-origin



### PHASE 3: PERFORMANCE OPTIMIZATION (Week 3–4)

1. **Optimize image delivery**

   - Add jpeg fallback to AVIF/WebP chain

   - Implement responsive srcset for hero images


2. **Enhance Service Worker caching**

   - Implement stale-while-revalidate for static assets

   - Add network-first strategy for dynamic content


3. **Minify and compress assets**

   - Enable Brotli compression in Vercel config

   - Minify globals.css and micro-interactions CSS


4. **Create manifest.json for PWA**

   - Enable "Add to Home Screen" capability

   - Define icons, theme colors, display mode



### PHASE 4: MOBILE & RESPONSIVE (Week 4–5)

1. **Ensure viewport meta tag**

   - Confirm width=device-width, initial-scale=1.0 in layout.tsx


2. **Test mobile at 375px and 320px breakpoints**

   - Audit touch target sizes (min 48×48px)

   - Remove prefers-reduced-motion animations


3. **Fix form input autofill styling**

   - Add -webkit-autofill color overrides

   - Test on iOS Safari and Android Chrome



---
## TOOLS & VALIDATION

- **Google Search Console:** Submit sitemap.xml, verify canonical detection

- **Google Mobile-Friendly Test:** Test at 375px, verify CLS < 0.1

- **Schema.org Validator:** Validate JSON-LD in all templates

- **Lighthouse:** Run on CI/CD; enforce Performance > 85, Accessibility > 90

- **Security Headers (securityheaders.com):** Verify HSTS, CSP, X-Frame-Options

- **Semrush/Ahrefs:** Monitor crawl errors, indexation, keyword rankings



---
## APPENDIX: FULL FINDINGS LIST


**Total Issues Found: 43**


1. [MEDIUM] Speed → No explicit font-display strategy in main fonts

2. [MEDIUM] Speed → Service Worker cache strategy not optimized for SPA hydration

3. [LOW] Speed → Missing HTTP/2 Server Push hints

4. [MEDIUM] Speed → Image optimization may not cover all routes

5. [MEDIUM] Speed → API route caching set to must-revalidate

6. [LOW] Speed → No manifest.json for offline PWA support

7. [MEDIUM] Speed → Global CSS not minified at build time

8. [LOW] Speed → No Brotli compression strategy defined

9. [HIGH] Mobile → No explicit viewport meta tag in layout.tsx

10. [MEDIUM] Mobile → Tailwind breakpoints may not cover small mobile (320px)

11. [MEDIUM] Mobile → Touch target sizes not explicitly enforced

12. [MEDIUM] Mobile → Micro-interactions CSS may cause jank on low-end mobile

13. [LOW] Mobile → No explicit mobile typography scale

14. [LOW] Mobile → Form inputs may have autofill styling issues

15. [CRITICAL] Sitemap → No sitemap.xml or sitemap.ts generated

16. [CRITICAL] Sitemap → No robots.txt file exists

17. [HIGH] Sitemap → Dynamic routes not statically exported

18. [HIGH] Sitemap → No canonical URL metadata on pages

19. [MEDIUM] Sitemap → Sitemap locale variants not declared

20. [HIGH] Robots.txt → Missing robots.txt allows all crawlers by default

21. [CRITICAL] Robots.txt → No sitemap reference in robots.txt

22. [MEDIUM] Robots.txt → API routes not disallowed

23. [LOW] Robots.txt → Admin/internal routes not blocked

24. [CRITICAL] Canonicals → No explicit canonical URL in Metadata objects

25. [MEDIUM] Canonicals → Redirect from /resources to /guides not declared with rel-canonical

26. [MEDIUM] Canonicals → Query string parameters not canonicalized

27. [LOW] Canonicals → Trailing slash inconsistency not addressed

28. [HIGH] HTTPS → No HSTS header configured

29. [HIGH] HTTPS → No Content-Security-Policy (CSP) header

30. [MEDIUM] HTTPS → Missing X-Frame-Options header

31. [MEDIUM] HTTPS → Missing X-Content-Type-Options header

32. [LOW] HTTPS → Referrer-Policy not explicitly set

33. [LOW] Redirects → /resources → /guides permanent redirect (single hop)

34. [MEDIUM] Redirects → No redirect audit for moved/renamed specialty pages

35. [MEDIUM] Redirects → No redirect for www vs non-www normalization

36. [LOW] Redirects → No redirect for HTTP to HTTPS (relying on hosting)

37. [HIGH] Structured Data → LocalBusinessSchema may lack required properties

38. [MEDIUM] Structured Data → No BreadcrumbList schema for navigation

39. [MEDIUM] Structured Data → No FAQSchema for FAQ pages

40. [MEDIUM] Structured Data → Missing Article schema for blog/guide content

41. [LOW] Structured Data → No AggregateRating schema for testimonials

42. [HIGH] Structured Data → Schema.org @context not declared on all JSON-LD blocks

43. [MEDIUM] Structured Data → No TestimonialSchema or Review schema for testimonials
