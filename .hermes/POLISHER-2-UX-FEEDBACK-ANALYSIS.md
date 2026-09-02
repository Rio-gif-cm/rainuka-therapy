# POLISHER #2 (UX Lead) — Critic Feedback Analysis & Action Plan

**Date:** September 1, 2026  
**Role:** UX Lead & Interaction Design  
**Status:** Active | Ready for team collaboration

---

## I. CRITICAL FINDINGS FROM AUDIT REPORTS

### A. Desktop UX Audit (1440px+)
**Report:** `DESKTOP_UX_AUDIT_FINAL_SUMMARY.md`

**12 Key Issues Identified:**
1. ✅ Hero line-width too wide (800px → should be 65ch)
2. ✅ Button sizing inconsistent (32px → 56px for primary)
3. ✅ Section spacing cramped at desktop
4. ✅ Heading color hierarchy unclear
5. ✅ CTA color variants missing (persona-specific)
6. ✅ Form input sizing too small (32px → 48px)
7. ✅ Navigation padding insufficient
8. ✅ Text color hierarchy undefined (no 4-tier system)
9. ✅ Card spacing/shadows weak
10. ✅ Focus states invisible (need 6px ring for WCAG AA)
11. ✅ Line-height too tight (1.6 → 1.75/1.8)
12. ✅ Section spacing needs graduation for pacing

**Severity:** MEDIUM | **Status:** Phase 1 CSS implemented; Phase 2–3 pending component refactor

---

### B. Conversion Funnel Audit (Landing → Booking)
**Report:** `CONVERSION_FUNNEL_AUDIT.md`

**4 Funnel Stages with Critical Friction:**

#### **1. Landing Page → About Page**
- **Issue:** No hero CTA button visible
- **Friction:** Users land, don't see "Book Now" → they navigate or leave
- **Impact:** Estimated 20–30% bounce before About page

#### **2. About Page (515 lines)**
- **Issue:** Page is VERY long with buried CTA
- **Friction:** 90+ seconds of scrolling before conversion opportunity
- **Impact:** Users abandon due to scroll fatigue; no sticky nav CTA

#### **3. Specialty Pages (ADHD/Career/Perinatal)**
- **Issue:** No hero CTA; multiple exit points; 230+ lines per page
- **Friction:** Users distracted by navigation links; unclear path to booking
- **Impact:** Context loss; users click between specialties and get confused

#### **4. Booking Flow (PreCommitmentExploration + Form)**
- **Issue 1:** 2-step process adds cognitive load
- **Issue 2:** Booking form has 12+ fields (way too many)
- **Issue 3:** Pre-commitment asks 4 questions before form
- **Impact:** 40%+ abandonment rate at form completion

**Severity:** CRITICAL | **Estimated Conversion Loss:** 30–50% of interested visitors

---

## II. TIER 1 IMPROVEMENTS (Immediate, High Impact)

### **FIX #1: Add Sticky Navigation Booking Button**
**Component:** Global Layout / Navigation Header

**Problem:**
- Current "Book Free Call" button disappears when user scrolls
- Users have to scroll back to top or bottom to convert
- Mobile & desktop both affected

**Solution:**
```tsx
// app/components/StickyBookingCTA.tsx
export function StickyBookingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <motion.div
      className={`fixed top-4 right-4 z-40 transition-opacity ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      animate={{ opacity: isVisible ? 1 : 0 }}
    >
      <Link href="/booking">
        <Button 
          className="bg-burgundy-600 hover:bg-burgundy-700 text-white rounded-full px-6 py-3 shadow-lg"
        >
          📞 Book Free Call
        </Button>
      </Link>
    </motion.div>
  );
}
```

**Implementation:**
- Add to `app/layout.tsx` (applies globally)
- Position: fixed top-right, z-index 40
- Show after 300px scroll (reduces clutter on hero)
- Mobile: adjust to 48px button size

**Expected Impact:** +15–20% booking rate (users always 1 click away)
**Effort:** Low (2–3 hours)

---

### **FIX #2: Move Social Proof to Hero (All Pages)**
**Components:** Hero sections across `app/page.tsx`, `app/about/page.tsx`, specialty pages

**Problem:**
- "95% move forward with therapy" appears only on booking page
- Early visitors see no proof that this therapist works
- Trust is built too late in funnel

**Solution:**
Add badge to hero section on ALL pages:
```tsx
// Universal hero badge pattern
<div className="text-center mt-4 inline-flex items-center gap-2 bg-sage-50 px-4 py-2 rounded-full text-sm text-sage-700">
  <span>✓</span>
  <span><strong>95%</strong> move forward with therapy • Real connection, real change</span>
</div>
```

**Implementation:**
- Landing page hero: "Therapy for perinatal anxiety, ADHD & career burnout—95% move forward"
- About page hero: "Meet Rainuka — 95% of her clients move forward with therapy"
- Each specialty page hero: "[Specialty] Therapy — 95% move forward"

**Expected Impact:** +10–15% booking rate
**Effort:** Low (1–2 hours; copy paste with variants)

---

### **FIX #3: Collapse Pre-Commitment into Booking Form**
**Component:** `app/booking/page.tsx` & form components

**Problem:**
- Users see PreCommitmentExploration page first
- Then BookingForm on second page
- Extra page load = cognitive friction + higher abandonment

**Solution:**
Integrate exploration into form as **Section 1**:
```tsx
// app/booking/page.tsx structure (revised)
<BookingForm>
  {/* SECTION 1: Exploration (originally separate) */}
  <FormSection title="What brings you here?">
    <RadioGroup name="what_brings_you">
      <Label><Input type="radio" /> Perinatal anxiety & postpartum challenges</Label>
      <Label><Input type="radio" /> ADHD diagnosis or management</Label>
      <Label><Input type="radio" /> Career burnout & life transitions</Label>
      <Label><Input type="radio" /> Something else</Label>
    </RadioGroup>
  </FormSection>
  
  {/* SECTION 2: Essential Info */}
  <FormSection title="Get to know you">
    <Input type="text" label="Your name" required />
    <Input type="email" label="Email (I'll send details here)" required />
  </FormSection>
  
  {/* SECTION 3: Logistics */}
  <FormSection title="Best time for your free call?">
    <Select label="Preferred day" options={['Monday', 'Tuesday', ...]} />
    <Select label="Time of day" options={['Morning (8am–12pm)', 'Afternoon', 'Evening']} />
  </FormSection>
  
  {/* SECTION 4: Privacy */}
  <FormSection>
    <Checkbox label="I've read the privacy policy..." required />
  </FormSection>
</BookingForm>
```

**Implementation:**
- Remove PreCommitmentExploration.tsx page
- Integrate questions into form Section 1
- Reduce 4 exploration questions → 2 (what brings you + therapy experience)
- Use conditional display (only show relevant follow-ups)

**Expected Impact:** +20–25% form completion
**Effort:** Medium (4–6 hours; form redesign)

---

### **FIX #4: Reduce Booking Form to 6 Essential Fields**
**Component:** `components/BookingForm.tsx`

**Problem:**
- Current form has 12+ fields (name, email, phone, concern, therapy experience, time, date, consent)
- Each additional field drops completion by 5–8%
- Phone validation too strict (10 digits; fails for international)

**Solution - Essential 6:**
1. Name (text)
2. Email (email)
3. What brings you (radio: perinatal | ADHD | career)
4. Have you done therapy before? (radio: yes | no)
5. Preferred day (select: Mon–Fri)
6. Privacy consent (checkbox)

**Removed Fields (collect during consultation):**
- Phone number → Ask during call
- Specific concern dropdown → Ask during call
- Preferred time of day → Offer calendar picker after form submit
- Date/time picker → Calendar link after form submit
- Insurance info → Discuss in consultation

**Implementation:**
```tsx
// components/BookingForm.tsx (streamlined)
export function BookingForm() {
  return (
    <form className="space-y-6">
      {/* Field 1 */}
      <Input 
        name="full_name" 
        type="text" 
        label="What's your name?" 
        required 
      />
      
      {/* Field 2 */}
      <Input 
        name="email" 
        type="email" 
        label="Email (I'll send details here)" 
        required 
      />
      
      {/* Field 3 */}
      <RadioGroup label="What brings you here?">
        <Label><Input type="radio" name="specialty" value="perinatal" /> Perinatal</Label>
        <Label><Input type="radio" name="specialty" value="adhd" /> ADHD</Label>
        <Label><Input type="radio" name="specialty" value="career" /> Career</Label>
      </RadioGroup>
      
      {/* Field 4 */}
      <RadioGroup label="Have you had therapy before?">
        <Label><Input type="radio" name="therapy_exp" value="yes" /> Yes</Label>
        <Label><Input type="radio" name="therapy_exp" value="no" /> First time</Label>
      </RadioGroup>
      
      {/* Field 5 */}
      <Select name="preferred_day" label="Best day for your call?">
        <option>Monday</option>
        <option>Tuesday</option>
        <option>Wednesday</option>
        <option>Thursday</option>
        <option>Friday</option>
      </Select>
      
      {/* Field 6 */}
      <Checkbox 
        name="privacy_consent" 
        label="I've read and agree to the privacy policy"
        required 
      />
      
      <Button type="submit" className="w-full">
        Reserve Your Free Consultation
      </Button>
    </form>
  );
}
```

**Expected Impact:** +25–30% form completion rate
**Effort:** Medium (3–4 hours; form restructure + validation)

---

### **FIX #5: Add Breadcrumb Navigation (Specialty Pages)**
**Components:** `app/adhd/page.tsx`, `app/career/page.tsx`, `app/perinatal/page.tsx`

**Problem:**
- Users click on a specialty page and lose context
- Can't easily navigate between specialties
- No "Back to home" option visible

**Solution:**
```tsx
// Add to top of specialty page component
<Breadcrumb>
  <Link href="/">Home</Link>
  <span>/</span>
  <Link href="/#specialties">Specialties</Link>
  <span>/</span>
  <span>ADHD Therapy</span>
</Breadcrumb>
```

**Implementation:**
- Create reusable `Breadcrumb.tsx` component
- Add to each specialty page header
- Also show "Related Specialties" section at bottom with quick links

**Expected Impact:** +5–10% navigation clarity
**Effort:** Low (1–2 hours)

---

## III. TIER 2 IMPROVEMENTS (High Value, Medium Effort)

### **FIX #6: Sticky CTA at Bottom of Specialty Pages**
**Problem:** Users scroll past CTA without noticing
**Solution:** Add animated "Book Free Call" button that slides up when user scrolls past primary CTA
**Expected Impact:** +8–12% bookings from specialty pages
**Effort:** Medium (2–3 hours)

---

### **FIX #7: Condense About Page with Tab Component**
**Problem:** 515 lines forces excessive scrolling
**Solution:**
```tsx
// Tabs pattern: Credentials | Philosophy | Case Studies | Testimonials
<TabGroup defaultTab="philosophy">
  <Tab label="Philosophy">
    {/* Personal story + approach */}
  </Tab>
  <Tab label="Credentials">
    {/* LCSW, certifications, memberships in grid */}
  </Tab>
  <Tab label="Impact">
    {/* Case studies + outcomes */}
  </Tab>
  <Tab label="Testimonials">
    {/* Client testimonials */}
  </Tab>
</TabGroup>
```
**Expected Impact:** -70% scroll depth; +20% completion rate
**Effort:** Medium (3–4 hours; React component + styling)

---

## IV. COLLABORATION & NEXT STEPS

### **Team Coordination**
- **Polisher #1 (Design Lead):** Validate visual style for sticky CTA, hero badges, form redesign
- **Polishers #3–10:** Review specific page implementations, QA for regressions

### **Draft Improvements Ready for Review**
1. ✅ `StickyBookingCTA.tsx` (component code provided above)
2. ✅ `BookingForm.tsx` (6-field streamlined form provided above)
3. ✅ Hero badge pattern (copy provided)
4. ✅ Breadcrumb component (pattern provided)
5. ✅ Tab component for About page (pattern provided)

### **Files to Create/Modify**
```
NEW:
  - components/StickyBookingCTA.tsx
  - components/Breadcrumb.tsx
  - components/TabGroup.tsx
  - .hermes/POLISHER-2-UX-IMPLEMENTATION-CHECKLIST.md

MODIFY:
  - app/layout.tsx (add StickyBookingCTA)
  - app/booking/page.tsx (collapse form + integrate exploration)
  - app/about/page.tsx (add tab structure)
  - app/adhd/page.tsx, app/career/page.tsx, app/perinatal/page.tsx (add breadcrumb)
  - app/globals.css (if styling adjustments needed)
```

---

## V. PRIORITY ROADMAP

### **WEEK 1 (This Sprint)**
- [ ] **FIX #1:** Sticky CTA button (2–3 hrs)
- [ ] **FIX #2:** Social proof badges on heroes (1–2 hrs)
- [ ] **FIX #4:** Reduce form to 6 fields (3–4 hrs)

**Expected cumulative impact:** +40–55% booking rate improvement

### **WEEK 2 (Next Sprint)**
- [ ] **FIX #3:** Collapse pre-commitment into form (4–6 hrs)
- [ ] **FIX #5:** Add breadcrumb navigation (1–2 hrs)
- [ ] **FIX #7:** Condense About page with tabs (3–4 hrs)

**Expected cumulative impact:** +60–70% funnel clarity improvement

### **WEEK 3–4 (Polish)**
- [ ] QA across desktop/mobile/tablet
- [ ] Accessibility audit (WCAG AA compliance)
- [ ] Performance testing (Lighthouse)
- [ ] A/B testing prep for sticky CTA, form changes

---

## VI. SUCCESS METRICS

### **Before** (Current Baseline)
- Landing to booking flow: 4 pages (90+ seconds)
- Booking form fields: 12+
- Pre-commitment steps: 2 (exploration → form)
- Sticky CTA: None

### **After** (Proposed)
- Landing to booking flow: 3 pages (45 seconds)
- Booking form fields: 6
- Pre-commitment steps: 1 (integrated into form)
- Sticky CTA: Global, always visible after scroll

### **Expected Outcomes**
- **Booking rate:** +30–50% (conservative: +25%)
- **Form completion:** +25–30%
- **Funnel clarity:** +60–70%
- **Scroll depth reduction:** -40% (About page tabbed)
- **Time to conversion:** -50% (from 90s to 45s)

---

## VII. DESIGN & BRAND ALIGNMENT

**Color Palette (from DESIGN_SYSTEM.md):**
- Primary CTA: Burgundy-600 (#8B5E5E)
- Hover: Burgundy-700 (#6B4444)
- Background: Sage-50 for badges/accents

**Typography:**
- Headings: Inter, 700 weight
- Body: Inter, 400 weight
- CTA text: 14–16px, center-aligned

**Spacing:**
- Sticky CTA: top-4 right-4 (16px)
- Form field gaps: space-y-6 (24px)
- Hero badge: 8px padding vertical, 16px horizontal

---

## VIII. OPEN QUESTIONS FOR DESIGN LEAD (Polisher #1)

1. **Sticky CTA styling:** Should it be a pill button (current proposal) or a different shape?
2. **Color variant on mobile:** Should the sticky CTA use a different placement (bottom-right vs top-right)?
3. **Hero badge animation:** Should it fade in on load or animate in?
4. **About page tabs:** Should tabs be horizontal (current design) or vertical for mobile?
5. **Form validation:** Real-time or on-submit?

---

**Status:** Ready for team feedback & Design Lead review  
**Next:** Implement FIX #1–2 as drafts → Share with team → Iterate based on feedback
