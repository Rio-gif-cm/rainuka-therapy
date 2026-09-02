# BookingFormEnhanced Mobile Polish — POLISHER #4 Recommendations
**Date:** September 1, 2026  
**Component:** `components/BookingFormEnhanced.tsx`  
**Status:** Ready for Mobile Optimization

---

## 📱 Current Mobile Issues Identified

### Issue #1: Input Field Spacing on 375px
**Problem:**
- Form section uses `p-6` (24px padding) which takes 40% of 375px width
- Inputs might feel cramped or require horizontal scrolling

**Current Code:**
```jsx
<div className="bg-gradient-to-br from-sage-50 to-sage-100 rounded-xl border-2 border-sage-200 p-6 space-y-4 shadow-sm">
```

**Proposed Mobile Fix:**
```jsx
<div className="bg-gradient-to-br from-sage-50 to-sage-100 rounded-xl border-2 border-sage-200 p-4 sm:p-6 space-y-4 shadow-sm">
  {/* Use p-4 on mobile (375px), p-6 on tablets */}
</div>
```

**Impact:** Inputs will have proper breathing room on small screens

---

### Issue #2: Form Progress Indicator on Mobile
**Problem:**
- Progress dots might not be visible enough on 375px
- "Step 1 of 3" text could benefit from clearer visual hierarchy

**Current Code:**
```jsx
<div className="flex gap-4 mb-3">
  {steps.map((step, index) => (
    <div key={step} className="flex items-center gap-2">
      <div className={`w-10 h-10 rounded-full ...`}>
        {index + 1}
      </div>
      {index < 2 && <div className="hidden sm:block w-8 h-1 bg-warm-gray-200"></div>}
    </div>
  ))}
</div>
```

**Proposed Mobile Fix:**
```jsx
<div className="flex gap-2 mb-4 justify-center sm:justify-start">
  {steps.map((step, index) => (
    <div key={step} className="flex items-center gap-1 sm:gap-2">
      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ...`}>
        {index + 1}
      </div>
      {/* Hide connector line on mobile, show on tablet+ */}
      {index < 2 && <div className="hidden sm:block w-4 sm:w-8 h-1 bg-warm-gray-200"></div>}
    </div>
  ))}
</div>
```

**Impact:** Progress indicator scales appropriately, stays visible on 375px

---

### Issue #3: Radio Button Spacing & Touch Targets
**Problem:**
- Radio buttons for "First time therapy?" might not have enough vertical spacing
- Touch targets need to be exactly 48×48px on mobile

**Current Code:**
```jsx
<div className="space-y-2">
  <label className="flex items-center gap-2 cursor-pointer p-2 rounded hover:bg-sage-50">
    <input type="radio" name="firstTimeTherapy" value="true" ... />
    <span className="text-sm">Yes, I'm new to therapy</span>
  </label>
  {/* ... more radios */}
</div>
```

**Proposed Mobile Fix:**
```jsx
<div className="space-y-3 sm:space-y-2">
  <label className="flex items-center gap-3 cursor-pointer p-3 sm:p-2 rounded hover:bg-sage-50 min-h-[48px] sm:min-h-auto">
    <input 
      type="radio" 
      name="firstTimeTherapy" 
      value="true"
      className="w-6 h-6 sm:w-4 sm:h-4 cursor-pointer"
      {...props}
    />
    <span className="text-base sm:text-sm flex-1">Yes, I'm new to therapy</span>
  </label>
  {/* ... more radios */}
</div>
```

**Impact:** Radio buttons are 48×48px on mobile (full touch target), scale down on tablet+

---

### Issue #4: Label Positioning & Input Height
**Problem:**
- Input fields might not have enough height on mobile
- Labels need to be clearly above inputs (not inside)

**Current Code:**
```jsx
<div>
  <label htmlFor="name" className="form-label">Full Name</label>
  <input
    id="name"
    type="text"
    placeholder="Your full name"
    className="w-full px-4 py-2 text-sm border-2 border-sage-200 rounded-lg focus:outline-none focus:border-burgundy-600"
  />
</div>
```

**Proposed Mobile Fix:**
```jsx
<div className="space-y-2">
  <label htmlFor="name" className="form-label text-base sm:text-sm font-medium text-warm-gray-900">
    Full Name <span className="text-red-500">*</span>
  </label>
  <input
    id="name"
    type="text"
    placeholder="Your full name"
    className="w-full px-4 py-3 sm:py-2 text-base sm:text-sm border-2 border-sage-200 rounded-lg focus:outline-none focus:border-burgundy-600 focus:ring-2 focus:ring-burgundy-100 min-h-[48px] sm:min-h-[44px]"
    {...props}
  />
</div>
```

**Impact:**
- Input height: 48px on mobile (includes padding), 44px on tablet+
- Text: 16px on mobile (prevents iOS auto-zoom)
- Clear label positioning (above, not inside)
- Focus ring visible on all devices

---

### Issue #5: Form Submission Button on Mobile
**Problem:**
- Button might not be prominent enough on mobile
- No sticky positioning for easy access while scrolling

**Current Code:**
```jsx
<button
  type="submit"
  disabled={isStepLoading}
  className="w-full bg-gradient-to-r from-burgundy-600 to-sage-600 text-white font-bold py-3 px-6 rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
>
  {buttonLabel}
</button>
```

**Proposed Mobile Fix:**
```jsx
{/* Regular button for desktop */}
<button
  type="submit"
  disabled={isStepLoading}
  className="w-full bg-gradient-to-r from-burgundy-600 to-sage-600 text-white font-bold py-3 sm:py-2 px-6 rounded-lg hover:shadow-lg transition-all disabled:opacity-50 min-h-[56px] sm:min-h-[48px] text-base sm:text-sm"
>
  {isStepLoading ? (
    <span className="flex items-center justify-center gap-2">
      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
      Loading...
    </span>
  ) : (
    buttonLabel
  )}
</button>

{/* Optional: Sticky footer CTA on mobile for long forms */}
<div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-sage-200 p-4 sm:hidden shadow-lg">
  <button
    type="submit"
    className="w-full bg-gradient-to-r from-burgundy-600 to-sage-600 text-white font-bold py-4 rounded-lg hover:shadow-lg transition-all"
  >
    {buttonLabel}
  </button>
</div>
```

**Impact:**
- Button height: 56px on mobile (optimal thumb-zone)
- Sticky footer visible on mobile forms (improves conversion)
- Loading state clearly indicated

---

### Issue #6: Error Message Visibility on Mobile
**Problem:**
- Error messages might be hidden below inputs on small screens
- No scroll-into-view behavior for field errors

**Current Code:**
```jsx
{fieldErrors.name && fieldTouched.name && (
  <p className="text-red-600 text-xs mt-1">{fieldErrors.name}</p>
)}
```

**Proposed Mobile Fix:**
```jsx
{fieldErrors.name && fieldTouched.name && (
  <div
    role="alert"
    aria-live="polite"
    className="bg-red-50 border-l-4 border-red-600 text-red-700 p-3 rounded mt-2 text-sm"
    onClick={() => {
      const input = document.getElementById('name')
      input?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }}
  >
    <span className="font-semibold">Error:</span> {fieldErrors.name}
  </div>
)}
```

**Impact:**
- Errors more visible (red background + left border)
- Clickable error scrolls field into view on mobile
- ARIA live region announces error to screen readers

---

### Issue #7: Keyboard Overlap on iOS
**Problem:**
- Form might scroll beneath iOS keyboard when focused
- No scroll-into-view behavior for inputs

**Proposed Mobile Fix:**
Add to input fields:
```jsx
onFocus={(e) => {
  // Delay scroll to allow keyboard to appear
  setTimeout(() => {
    e.target.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, 300)
}}
```

**Impact:** Inputs automatically scroll into view when focused on mobile, avoiding keyboard overlap

---

### Issue #8: Concern Field Visibility on Mobile
**Problem:**
- "What brings you to therapy?" field appears after radio selection
- Might be cut off if user doesn't scroll

**Proposed Mobile Fix:**
```jsx
{showConcernField && (
  <div className="animate-fade-in-up bg-white rounded-lg border-2 border-sage-200 p-4 mt-4">
    <label htmlFor="concern" className="form-label text-base sm:text-sm font-medium">
      What brings you to therapy? <span className="text-red-500">*</span>
    </label>
    <textarea
      id="concern"
      placeholder="Tell us what's on your mind..."
      className="w-full px-4 py-3 sm:py-2 text-base sm:text-sm border-2 border-sage-200 rounded-lg focus:outline-none focus:border-burgundy-600 min-h-[120px] resize-none"
      {...props}
    />
  </div>
)}
```

**Impact:** Concern field has proper spacing, auto-scrolls into view when revealed

---

## ✅ Mobile Optimization Checklist

### CSS Changes Required
- [ ] Update form container padding: `p-4 sm:p-6`
- [ ] Update progress dots: `w-8 h-8 sm:w-10 sm:h-10`
- [ ] Update input height: `min-h-[48px] sm:min-h-[44px]`
- [ ] Update input font size: `text-base sm:text-sm`
- [ ] Add focus ring: `focus:ring-2 focus:ring-burgundy-100`
- [ ] Add sticky footer CTA: `fixed bottom-0 sm:hidden`
- [ ] Update button height: `min-h-[56px] sm:min-h-[48px]`
- [ ] Update radio target: `min-h-[48px] sm:min-h-auto`

### JavaScript Changes Required
- [ ] Add scroll-into-view on input focus
- [ ] Add scroll-into-view on error reveal
- [ ] Update radio button spacing
- [ ] Add loading state indicator

### Testing Required
- [ ] Test on iPhone SE (375px)
- [ ] Test on Android (360px)
- [ ] Test keyboard overlap (iOS)
- [ ] Test form submission flow
- [ ] Lighthouse accessibility audit
- [ ] Screen reader (VoiceOver/TalkBack)

---

## 🚀 Implementation Priority

### Priority 1 (Critical) — Do First
1. Input height & font size (16px mobile, prevents zoom)
2. Label positioning (above inputs, clear)
3. Touch target size (48×48px on mobile)
4. Error message visibility (scroll into view)

### Priority 2 (High) — This Week
1. Form padding on mobile (`p-4` on 375px)
2. Progress indicator scaling
3. Radio button spacing
4. Sticky footer CTA

### Priority 3 (Medium) — Next Week
1. Keyboard overlap handling
2. Concern field animations
3. Loading state indicator
4. Success message UX

---

## 📋 Code Implementation Template

### Input Field Component (Reusable)
```jsx
interface FormInputProps {
  label: string
  id: string
  type?: string
  placeholder?: string
  error?: string
  touched?: boolean
  required?: boolean
  [key: string]: any
}

function FormInput({ label, id, type = 'text', error, touched, required, ...props }: FormInputProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="form-label text-base sm:text-sm font-medium text-warm-gray-900">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={id}
        type={type}
        className="w-full px-4 py-3 sm:py-2 text-base sm:text-sm border-2 border-sage-200 rounded-lg focus:outline-none focus:border-burgundy-600 focus:ring-2 focus:ring-burgundy-100 min-h-[48px] sm:min-h-[44px] transition-colors"
        onFocus={(e) => setTimeout(() => e.target.scrollIntoView({ behavior: 'smooth', block: 'center' }), 300)}
        {...props}
      />
      {error && touched && (
        <div role="alert" aria-live="polite" className="bg-red-50 border-l-4 border-red-600 text-red-700 p-3 rounded text-sm">
          <span className="font-semibold">Error:</span> {error}
        </div>
      )}
    </div>
  )
}
```

### Usage Example
```jsx
<FormInput
  label="Full Name"
  id="name"
  type="text"
  placeholder="Your full name"
  error={fieldErrors.name}
  touched={fieldTouched.name}
  required
  value={formData.name}
  onChange={handleInputChange}
  onBlur={handleBlur}
/>
```

---

## 🔗 Related Files

- Mobile CSS Framework: `styles/mobile-ux-optimization.css`
- Current Component: `components/BookingFormEnhanced.tsx`
- Audit Report: `MOBILE_UX_OPTIMIZATION_AUDIT_375PX.md`
- Team Collaboration: `.hermes/MOBILE-MOCKUPS-TEAM-COLLABORATION.md`

---

**Generated:** September 1, 2026  
**Status:** Ready for Implementation  
**Next:** Submit PR with mobile polish fixes
