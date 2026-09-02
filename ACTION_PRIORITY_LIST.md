# Technical Audit - Action Priority List

## 🚨 Critical Path (DO NOW)

### P1.1 - Fix package.json type declaration (1 min)
**Issue:** Smart quote error fixed. Next: Add "type": "module" to package.json
**Files:** package.json
**Change:** Add line after "name" field
```json
{
  "name": "rainuka-therapy",
  "type": "module",
  "version": "0.1.0",
  ...
}
```
**Test:** `npm run build` - verify Turbopack MODULE_TYPELESS_PACKAGE_JSON warning disappears
**Commit:** `fix(build): add type module to eliminate Turbopack overhead`

---

## 📋 This Week

### P2.1 - Set up Jest + React Testing Library (2 hours)
**Issue:** 0 automated tests → HIGH risk
**Files:** jest.config.js, .jestrc.json
**Commands:**
```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom ts-jest @types/jest
npx jest --init
```
**Coverage Target:** 50% (prioritize routes + API)
**Test Files to Create:**
- `components/__tests__/HeroSection.test.tsx`
- `components/__tests__/TestimonialCard.test.tsx`
- `app/api/__tests__/bookings.test.ts`
- `app/api/__tests__/referrals.test.ts`

### P2.2 - Write core component tests (6 hours)
**Focus:** Pages and API routes (highest impact)
**Priority Components:**
1. HeroSection (rendering, props)
2. TestimonialCard (rating display, accessibility)
3. NicheGrid (grid layout, responsive)
4. Navigation (link rendering)

**API Routes:**
1. `/api/bookings` (POST handler, error cases)
2. `/api/referrals` (POST handler, validation)

### P2.3 - Integrate tests into CI/CD (2 hours)
**Files:** .github/workflows/test.yml
**Action:**
```yaml
- name: Run tests
  run: npm test -- --coverage
- name: Check coverage
  if: github.pull_request
  run: npm test -- --coverage --fail-on-low-coverage
```

**Status Check:** Require 50%+ coverage to merge

---

## 🔧 Next Sprint

### P3.1 - Extract large components (8 hours)
**Issue:** 81 functions > 100 lines
**Target Components (Start with highest impact):**
- `app/page.tsx:79` (104 lines) → Split into:
  - ApproachCards component
  - FAQSection component
  - TestimonialGrid component
  
- `BOOKING_FORM_EXAMPLE.tsx` (107 lines) → Split into:
  - FormFields component
  - DateTimePicker component
  - FormActions component

- `app/adhd-faq/page.tsx` (multiple 100+ line blocks) → Extract:
  - FAQ data to `src/data/adhd-faq-data.ts`
  - FAQAccordion component
  - FAQHeader component

**Pattern to Follow:**
1. Extract data to `src/data/` files
2. Create presentational components
3. Wrap in container component
4. Keep page.tsx < 50 lines

**Commit:** `refactor: break large components into smaller modules`

### P3.2 - Improve API error handling (2 hours)
**Issue:** Generic error messages
**Files:** `app/api/bookings/route.ts`, `app/api/referrals/route.ts`
**Changes:**
1. Create error code system:
   ```typescript
   enum BookingErrorCode {
     VALIDATION_ERROR = 'VALIDATION_ERROR',
     SLOT_UNAVAILABLE = 'SLOT_UNAVAILABLE',
     EMAIL_FAILED = 'EMAIL_FAILED',
     INTERNAL_ERROR = 'INTERNAL_ERROR',
   }
   ```
2. Add structured error responses
3. Add request logging
4. Return meaningful HTTP status codes

**Commit:** `feat(api): add error code system for better debugging`

### P3.3 - Bundle optimization audit (3 hours)
**Issue:** Largest chunk 222.6 KB
**Tools:**
```bash
npm install --save-dev @next/bundle-analyzer
```
**Setup:** Analyze and identify:
1. Unused dependencies
2. Large single imports
3. Lazy loading candidates
4. Tree-shaking opportunities

**Commit:** `perf: lazy load heavy components, reduce bundle by Xkb`

---

## 💡 Future Improvements (Nice to Have)

### P4.1 - Wrap console logs (1 hour)
**Files:** app/layout.tsx, app/api/*.ts
**Pattern:**
```typescript
if (process.env.NODE_ENV !== 'production') {
  console.log('...')
}
```

### P4.2 - Add error tracking (2-3 hours)
**Option 1:** Sentry
```bash
npm install @sentry/nextjs
# Configure in next.config.ts
```
**Option 2:** Internal logging service

### P4.3 - Performance monitoring (1-2 hours)
**Implement Web Vitals tracking:**
```typescript
// app/layout.tsx
import { reportWebVitals } from 'next/web-vitals'
reportWebVitals(metric => console.log(metric))
```

---

## 📊 Effort Summary

| Priority | Item | Hours | Status |
|----------|------|-------|--------|
| P1 | Add type:module | 0.1 | 🟢 Ready |
| P2 | Jest setup + tests | 10 | 📅 This week |
| P3 | Refactor components | 13 | 📅 Next sprint |
| P4 | Monitoring/cleanup | 4 | 💡 Future |
| **TOTAL** | **Technical debt** | **~27.1 hours** | — |

---

## ✅ Verification Steps

After each item:
1. Run `npm run build` - must succeed
2. Run `npm test` - must pass (after P2)
3. Commit with descriptive message
4. Push and verify CI/CD passes
5. Create PR with findings reference

---

## 📅 Timeline Recommendation

- **This Sprint (1 week):**
  - ✅ P1: package.json fix (done immediately)
  - 📅 P2: Jest setup + core tests (4 days, ~12 hours focused)
  
- **Next Sprint (2 weeks):**
  - 🔧 P3: Refactor components + error handling (full sprint focus)
  
- **Future (ongoing):**
  - 💡 P4: Monitoring + performance tuning

---

**Created:** September 1, 2024  
**Assignee:** Team Lead / Full Stack Dev  
**Review:** After P1 completion
