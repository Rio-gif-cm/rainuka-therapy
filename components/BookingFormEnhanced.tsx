'use client'

import { useState } from 'react'
import CalendarPicker from './CalendarPicker'

type FormStep = 'contact' | 'concern' | 'confirmation'

interface PreCommitmentData {
  whatBringsYou: string
  firstTimeTherapy: boolean | null
  preferences: string
}

interface FieldErrors {
  name?: string
  email?: string
  phone?: string
  concern?: string
  firstTimeTherapy?: string
  preferredTime?: string
  consent?: string
}

interface FieldTouched {
  name?: boolean
  email?: boolean
  phone?: boolean
  concern?: boolean
  firstTimeTherapy?: boolean
  preferredTime?: boolean
  consent?: boolean
}

interface FieldFocused {
  name?: boolean
  email?: boolean
  phone?: boolean
  concern?: boolean
  firstTimeTherapy?: boolean
  preferredTime?: boolean
  consent?: boolean
}

interface BookingFormProps {
  preCommitmentData?: PreCommitmentData | null
}

/**
 * IMPROVEMENTS APPLIED:
 * ✅ #1: Consent checkbox simplified & clarified
 * ✅ #2: Radio button touch targets increased to 48px (WCAG)
 * ✅ #3: Phone format clarity added to label & help text
 * ✅ #4: Loading state added to Continue button
 * ✅ #5: Form data persisted via localStorage on error
 * ✅ #6: Privacy assurance moved to step 1
 * ✅ #7: Radio buttons stack vertically on mobile
 * ✅ #8: Success messages use aria-live
 * ✅ #11: Validation delay on mobile blur (500ms)
 */
export default function BookingFormEnhanced({ preCommitmentData }: BookingFormProps) {
  const [currentStep, setCurrentStep] = useState<FormStep>('contact')
  const [showConcernField, setShowConcernField] = useState(false)
  const [isStepLoading, setIsStepLoading] = useState(false)
  const [recentlyBlurred, setRecentlyBlurred] = useState<string | null>(null)

  const [formData, setFormData] = useState(
    () => {
      // IMPROVEMENT #5: Load from localStorage if available
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('therapyFormDraft')
        if (saved) {
          try {
            return JSON.parse(saved)
          } catch {
            // Ignore parse errors
          }
        }
      }
      return {
        name: '',
        email: '',
        phone: '',
        concern: '',
        firstTimeTherapy: null as boolean | null,
        preferredTime: '',
        selectedDate: null as Date | null,
        selectedTime: '',
        consent: false,
      }
    }
  )

  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [fieldTouched, setFieldTouched] = useState<FieldTouched>({})
  const [fieldFocused, setFieldFocused] = useState<FieldFocused>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  // IMPROVEMENT #11: Detect mobile devices for validation delay
  const isMobile = () => {
    if (typeof window === 'undefined') return false
    return /iPhone|iPad|Android/.test(navigator.userAgent)
  }

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const validatePhone = (phone: string): boolean => {
    const cleaned = phone.replace(/\D/g, '')
    return cleaned.length >= 10
  }

  const validateName = (name: string): boolean => {
    return name.trim().length >= 2
  }

  const validateField = (name: string, value: string | boolean | null): string | undefined => {
    switch (name) {
      case 'name':
        if (!value || (typeof value === 'string' && !validateName(value as string))) {
          return "What's your name? I need it to greet you properly."
        }
        break
      case 'email':
        if (!value || (typeof value === 'string' && !validateEmail(value as string))) {
          return "I'll send your confirmation here—double-check it's correct."
        }
        break
      case 'phone':
        if (!value || (typeof value === 'string' && !validatePhone(value as string))) {
          return "I need your phone number to confirm (10+ digits, any format)."
        }
        break
      case 'concern':
        if (value && (typeof value === 'string' && (value as string).trim().length < 10)) {
          return "One or two sentences help—we'll explore together."
        }
        break
      case 'firstTimeTherapy':
        if (value === null) {
          return "Let me know if you've worked with a therapist before."
        }
        break
      case 'preferredTime':
        if (!value && !formData.selectedDate) {
          return "Pick a time that works for you. I'll confirm within 24 hours."
        }
        break
      case 'consent':
        if (!value) {
          return "Please confirm you're ready to book and have read our privacy policy."
        }
        break
    }
    return undefined
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value

    setFormData((prev: typeof formData) => {
      const updated = { ...prev, [name]: newValue }
      // IMPROVEMENT #5: Persist to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('therapyFormDraft', JSON.stringify(updated))
      }
      return updated
    })

    // Real-time validation
    if (fieldTouched[name as keyof FieldTouched]) {
      const error = validateField(name, newValue)
      setFieldErrors(prev => ({
        ...prev,
        [name]: error,
      }))
    }
  }

  const handleFieldBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const fieldValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value

    setFieldTouched(prev => ({
      ...prev,
      [name]: true,
    }))

    setFieldFocused(prev => ({
      ...prev,
      [name]: false,
    }))

    // IMPROVEMENT #12: Persistent focus indicator (visual feedback)
    setRecentlyBlurred(name)
    setTimeout(() => setRecentlyBlurred(null), 1000)

    // IMPROVEMENT #11: Delay validation on mobile to avoid premature errors
    const validationDelay = isMobile() ? 500 : 0
    setTimeout(() => {
      const error = validateField(name, fieldValue)
      setFieldErrors(prev => ({
        ...prev,
        [name]: error,
      }))
    }, validationDelay)
  }

  const handleFieldFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target
    setFieldFocused(prev => ({
      ...prev,
      [name]: true,
    }))
  }

  const validateStep = (step: FormStep): boolean => {
    const errors: FieldErrors = {}

    if (step === 'contact') {
      errors.name = validateField('name', formData.name)
      errors.email = validateField('email', formData.email)
      errors.phone = validateField('phone', formData.phone)
    } else if (step === 'concern') {
      errors.concern = validateField('concern', formData.concern)
      errors.firstTimeTherapy = validateField('firstTimeTherapy', formData.firstTimeTherapy)
      errors.preferredTime = validateField('preferredTime', formData.preferredTime)
    } else if (step === 'confirmation') {
      errors.consent = validateField('consent', formData.consent)
    }

    const filteredErrors = Object.fromEntries(
      Object.entries(errors).filter(([, v]) => v !== undefined)
    )

    if (Object.keys(filteredErrors).length > 0) {
      setFieldErrors(filteredErrors)
      setFieldTouched({
        name: true,
        email: true,
        phone: true,
        concern: true,
        preferredTime: true,
        consent: true,
      })
      return false
    }

    return true
  }

  const handleNextStep = async () => {
    // IMPROVEMENT #4: Add loading state during step navigation
    if (currentStep === 'contact' && validateStep('contact')) {
      setIsStepLoading(true)
      await new Promise(r => setTimeout(r, 300))
      setCurrentStep('concern')
      setFieldErrors({})
      setIsStepLoading(false)
    } else if (currentStep === 'concern' && validateStep('concern')) {
      setIsStepLoading(true)
      await new Promise(r => setTimeout(r, 300))
      setCurrentStep('confirmation')
      setFieldErrors({})
      setIsStepLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateStep('confirmation')) {
      setSubmitError('Please confirm you\'re ready to book.')
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitSuccess(true)
        setFieldErrors({})
        // IMPROVEMENT #10: Clear localStorage on success
        if (typeof window !== 'undefined') {
          localStorage.removeItem('therapyFormDraft')
        }
        // Show success for full 3s, then reset
        setTimeout(() => {
          setFormData({ name: '', email: '', phone: '', concern: '', firstTimeTherapy: null, preferredTime: '', selectedDate: null, selectedTime: '', consent: false })
          setCurrentStep('contact')
          setSubmitSuccess(false)
          setFieldTouched({})
        }, 3000)
      } else {
        const errorData = await response.json().catch(() => ({}))
        setSubmitError(errorData.message || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitError('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      {/* Progress indicators with step text */}
      <div className="mb-8">
        <div className="flex gap-4 mb-3">
          {['contact', 'concern', 'confirmation'].map((step, index) => (
            <div key={step} className="flex items-center gap-2">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                  currentStep === step || ['contact', 'concern'].includes(currentStep)
                    ? 'bg-burgundy-400 text-white'
                    : 'bg-warm-gray-200 text-warm-gray-600'
                }`}
              >
                {index + 1}
              </div>
              {index < 2 && <div className="hidden sm:block w-8 h-1 bg-warm-gray-200"></div>}
            </div>
          ))}
        </div>
        <div className="text-xs font-semibold text-burgundy-600 uppercase tracking-wide">
          {currentStep === 'contact' && 'Step 1 of 3: Your Contact Information'}
          {currentStep === 'concern' && 'Step 2 of 3: Your Concerns & Availability'}
          {currentStep === 'confirmation' && 'Step 3 of 3: Review & Confirm'}
        </div>
      </div>

      {/* Step 1: Contact Information */}
      {currentStep === 'contact' && (
        <div className="space-y-4 animate-fade-in-up">
          <div className="mb-6 bg-gradient-to-r from-burgundy-50 to-burgundy-50 border border-burgundy-200 rounded-lg p-4 flex gap-3 items-start">
            <span className="text-lg flex-shrink-0">✓</span>
            <div className="text-sm">
              <p className="text-burgundy-900 font-semibold mb-1">Just three questions. I'll reach out within 24 hours.</p>
              <p className="text-burgundy-800 text-xs">
                No pressure. You decide after we talk.
              </p>
            </div>
          </div>

          {/* IMPROVEMENT #6: Privacy assurance moved to step 1 */}
          <div className="flex items-center gap-2 text-xs text-burgundy-700 mb-4 bg-burgundy-50 p-3 rounded-lg border border-burgundy-200">
            <span>🔒</span>
            <span>Your privacy is protected. <a href="/privacy" className="underline font-semibold hover:text-burgundy-800">Learn more</a></span>
          </div>

          <h3 className="text-2xl font-serif font-bold text-warm-gray-900 mb-2">
            Let's start with the basics
          </h3>
          <p className="text-sm text-warm-gray-600 mb-6">Three fields. Then we'll move forward together.</p>

          <div className="bg-gradient-to-br from-burgundy-50 to-burgundy-100 rounded-xl border-2 border-burgundy-200 p-6 space-y-4 shadow-sm">
            {/* Name Field */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="name" className={`form-label transition-colors ${
                  fieldFocused.name ? 'text-burgundy-600' : 'text-warm-gray-900'
                }`}>
                  Your Name <span className="text-alert-600">*</span> <span className="text-xs text-warm-gray-500">(required)</span>
                </label>
                {formData.name && !fieldErrors.name && fieldTouched.name && (
                  <span 
                    className="text-burgundy-600 text-sm font-medium flex items-center gap-1"
                    aria-live="polite"
                    aria-label="Name validated successfully"
                  >
                    ✓ Confirmed
                  </span>
                )}
              </div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                onBlur={handleFieldBlur}
                onFocus={handleFieldFocus}
                placeholder="e.g., Alex or Marcus"
                className={`form-input transition-all ${
                  recentlyBlurred === 'name' ? 'ring-2 ring-burgundy-300' : ''
                } ${
                  fieldTouched.name
                    ? fieldErrors.name
                      ? 'border-alert-500 bg-alert-50 focus:border-alert-500'
                      : 'border-burgundy-500 bg-burgundy-50'
                    : ''
                }`}
                aria-invalid={fieldTouched.name && !!fieldErrors.name}
                aria-describedby={fieldTouched.name && fieldErrors.name ? 'name-error' : undefined}
                aria-required="true"
                required
              />
              {fieldTouched.name && fieldErrors.name && (
                <p id="name-error" className="text-alert-600 text-sm mt-2 font-medium">
                  {fieldErrors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="email" className={`form-label transition-colors ${
                  fieldFocused.email ? 'text-burgundy-600' : 'text-warm-gray-900'
                }`}>
                  Email Address <span className="text-alert-600">*</span> <span className="text-xs text-warm-gray-500">(required)</span>
                </label>
                {formData.email && !fieldErrors.email && fieldTouched.email && (
                  <span 
                    className="text-burgundy-600 text-sm font-medium flex items-center gap-1"
                    aria-live="polite"
                    aria-label="Email validated successfully"
                  >
                    ✓ Confirmed
                  </span>
                )}
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                onBlur={handleFieldBlur}
                onFocus={handleFieldFocus}
                placeholder="you@example.com"
                className={`form-input transition-all ${
                  recentlyBlurred === 'email' ? 'ring-2 ring-burgundy-300' : ''
                } ${
                  fieldTouched.email
                    ? fieldErrors.email
                      ? 'border-alert-500 bg-alert-50 focus:border-alert-500'
                      : 'border-burgundy-500 bg-burgundy-50'
                    : ''
                }`}
                aria-invalid={fieldTouched.email && !!fieldErrors.email}
                aria-describedby={fieldTouched.email && fieldErrors.email ? 'email-error' : undefined}
                aria-required="true"
                required
              />
              {fieldTouched.email && fieldErrors.email && (
                <p id="email-error" className="text-alert-600 text-sm mt-2 font-medium">
                  {fieldErrors.email}
                </p>
              )}
            </div>

            {/* Phone Field - IMPROVEMENT #3: Enhanced format clarity */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="phone" className={`form-label transition-colors ${
                  fieldFocused.phone ? 'text-burgundy-600' : 'text-warm-gray-900'
                }`}>
                  Phone Number <span className="text-alert-600">*</span> <span className="text-xs text-warm-gray-500">(required, any format)</span>
                </label>
                {formData.phone && !fieldErrors.phone && fieldTouched.phone && (
                  <span 
                    className="text-burgundy-600 text-sm font-medium flex items-center gap-1"
                    aria-live="polite"
                    aria-label="Phone number validated successfully"
                  >
                    ✓ Confirmed
                  </span>
                )}
              </div>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                onBlur={handleFieldBlur}
                onFocus={handleFieldFocus}
                placeholder="555-123-4567 or (555) 123-4567 or +1 555 123 4567"
                className={`form-input transition-all ${
                  recentlyBlurred === 'phone' ? 'ring-2 ring-burgundy-300' : ''
                } ${
                  fieldTouched.phone
                    ? fieldErrors.phone
                      ? 'border-alert-500 bg-alert-50 focus:border-alert-500'
                      : 'border-burgundy-500 bg-burgundy-50'
                    : ''
                }`}
                aria-invalid={fieldTouched.phone && !!fieldErrors.phone}
                aria-describedby={fieldTouched.phone && fieldErrors.phone ? 'phone-error' : 'phone-help'}
                aria-required="true"
                required
              />
              <p id="phone-help" className="text-xs text-warm-gray-500 mt-1">
                We accept any format: hyphens, parentheses, country codes, or just 10 digits.
              </p>
              {fieldTouched.phone && fieldErrors.phone && (
                <p id="phone-error" className="text-alert-600 text-sm mt-2 font-medium">
                  {fieldErrors.phone}
                </p>
              )}
            </div>
          </div>

          <p className="text-xs text-warm-gray-500 mt-4">
            * Required fields. I'll reach out within 24 hours to confirm your consultation.
          </p>
        </div>
      )}

      {/* Step 2: Primary Concern */}
      {currentStep === 'concern' && (
        <div className="space-y-4 animate-fade-in-up">
          <h3 className="text-2xl font-serif font-bold text-warm-gray-900 mb-2">
            What brings you here?
          </h3>
          <p className="text-sm text-warm-gray-600 mb-6">We're almost there. Just a couple more details to help me understand your situation.</p>

          {/* IMPROVEMENT #9: Clarify optional vs. required for concern field */}
          <div className="bg-burgundy-50 border border-burgundy-200 rounded-lg p-4">
            <button
              type="button"
              onClick={() => setShowConcernField(!showConcernField)}
              className="flex items-center justify-between w-full text-left"
            >
              <span className="font-semibold text-warm-gray-900 flex items-center gap-2">
                <span className={`text-lg transition-transform ${showConcernField ? 'rotate-90' : ''}`}>▶</span>
                Tell me what brings you here (this helps me prepare)
              </span>
              <span className={`text-sm font-medium text-burgundy-600 transition-all ${showConcernField ? 'opacity-100' : 'opacity-0'}`}>
                ✓ Expanded
              </span>
            </button>
            <p className="text-xs text-warm-gray-500 mt-2 ml-6">Optional, but really helpful.</p>

            {showConcernField && (
              <div className="mt-4 pt-4 border-t border-burgundy-200 space-y-3 animate-fade-in-up">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label htmlFor="concern" className={`form-label transition-colors ${
                      fieldFocused.concern ? 'text-burgundy-600' : 'text-warm-gray-900'
                    }`}>
                      What brings you here?
                    </label>
                    {formData.concern && !fieldErrors.concern && fieldTouched.concern && (
                      <span 
                        className="text-burgundy-600 text-sm font-medium flex items-center gap-1"
                        aria-live="polite"
                        aria-label="Concern validated successfully"
                      >
                        ✓ Noted
                      </span>
                    )}
                  </div>
                  <textarea
                    id="concern"
                    name="concern"
                    value={formData.concern}
                    onChange={handleInputChange}
                    onBlur={handleFieldBlur}
                    onFocus={handleFieldFocus}
                    placeholder="e.g. 'Work stress and anxiety' or 'I'm struggling with depression.' We'll dig deeper when we talk."
                    className={`form-input h-32 resize-none transition-all ${
                      recentlyBlurred === 'concern' ? 'ring-2 ring-burgundy-300' : ''
                    } ${
                      fieldTouched.concern
                        ? fieldErrors.concern
                          ? 'border-alert-500 bg-alert-50 focus:border-alert-500'
                          : 'border-burgundy-500 bg-burgundy-50'
                        : ''
                    }`}
                    aria-invalid={fieldTouched.concern && !!fieldErrors.concern}
                    aria-describedby={fieldTouched.concern && fieldErrors.concern ? 'concern-error' : 'concern-help'}
                  />
                  {fieldTouched.concern && fieldErrors.concern ? (
                    <p id="concern-error" className="text-alert-600 text-sm mt-2 font-medium">
                      {fieldErrors.concern}
                    </p>
                  ) : (
                    <p id="concern-help" className="text-sm text-warm-gray-500 mt-2">
                      One or two sentences help—we'll explore together.
                    </p>
                  )}
                </div>

                {formData.concern && !fieldErrors.concern && fieldTouched.concern && (
                  <div className="bg-burgundy-50 border border-burgundy-200 rounded-lg p-3 flex gap-2 items-start animate-fade-in-up">
                    <span className="text-sm flex-shrink-0">✓</span>
                    <p className="text-xs text-burgundy-700">Thanks for sharing. Two more questions and we're through.</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* IMPROVEMENT #7: Stack radio buttons vertically on mobile */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className={`form-label transition-colors ${
                fieldFocused.firstTimeTherapy ? 'text-burgundy-600' : 'text-warm-gray-900'
              }`}>
                Have you worked with a therapist before? <span className="text-alert-600">*</span>
              </label>
              {formData.firstTimeTherapy !== null && !fieldErrors.firstTimeTherapy && fieldTouched.firstTimeTherapy && (
                <span 
                  className="text-burgundy-600 text-sm font-medium flex items-center gap-1"
                  aria-live="polite"
                  aria-label="Therapy experience confirmed"
                >
                  ✓ Confirmed
                </span>
              )}
            </div>
            {/* IMPROVEMENT #2: Radio buttons at 48px touch target (WCAG 44px minimum) */}
            <div className="flex flex-col sm:flex-row gap-4 mb-3">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  id="firstTimeYes"
                  name="firstTimeTherapy"
                  value="true"
                  checked={formData.firstTimeTherapy === true}
                  onChange={(e) => {
                    const val = e.target.value === 'true'
                    setFormData((prev: typeof formData) => {
                      const updated = { ...prev, firstTimeTherapy: val }
                      if (typeof window !== 'undefined') {
                        localStorage.setItem('therapyFormDraft', JSON.stringify(updated))
                      }
                      return updated
                    })
                    if (fieldTouched.firstTimeTherapy) {
                      const error = validateField('firstTimeTherapy', val)
                      setFieldErrors(prev => ({ ...prev, firstTimeTherapy: error }))
                    }
                  }}
                  onBlur={() => {
                    setFieldTouched(prev => ({ ...prev, firstTimeTherapy: true }))
                    const error = validateField('firstTimeTherapy', formData.firstTimeTherapy)
                    setFieldErrors(prev => ({ ...prev, firstTimeTherapy: error }))
                  }}
                  className="w-12 h-12 cursor-pointer"
                  aria-required="true"
                />
                <label htmlFor="firstTimeYes" className="text-base text-warm-gray-600 cursor-pointer flex-shrink-0">
                  No, this is my first time
                </label>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  id="firstTimeNo"
                  name="firstTimeTherapy"
                  value="false"
                  checked={formData.firstTimeTherapy === false}
                  onChange={(e) => {
                    const val = e.target.value === 'true'
                    setFormData((prev: typeof formData) => {
                      const updated = { ...prev, firstTimeTherapy: val }
                      if (typeof window !== 'undefined') {
                        localStorage.setItem('therapyFormDraft', JSON.stringify(updated))
                      }
                      return updated
                    })
                    if (fieldTouched.firstTimeTherapy) {
                      const error = validateField('firstTimeTherapy', val)
                      setFieldErrors(prev => ({ ...prev, firstTimeTherapy: error }))
                    }
                  }}
                  onBlur={() => {
                    setFieldTouched(prev => ({ ...prev, firstTimeTherapy: true }))
                    const error = validateField('firstTimeTherapy', formData.firstTimeTherapy)
                    setFieldErrors(prev => ({ ...prev, firstTimeTherapy: error }))
                  }}
                  className="w-12 h-12 cursor-pointer"
                  aria-required="true"
                />
                <label htmlFor="firstTimeNo" className="text-base text-warm-gray-600 cursor-pointer flex-shrink-0">
                  Yes, I've worked with a therapist before
                </label>
              </div>
            </div>
            {fieldTouched.firstTimeTherapy && fieldErrors.firstTimeTherapy && (
              <p id="firstTimeTherapy-error" className="text-alert-600 text-sm font-medium">
                {fieldErrors.firstTimeTherapy}
              </p>
            )}
          </div>

          {/* Calendar Picker for Date & Time Selection */}
          <div>
            <CalendarPicker
              onDateTimeSelect={(date, time) => {
                const updated = {
                  ...formData,
                  selectedDate: date,
                  selectedTime: time,
                  preferredTime: `${date.toLocaleDateString()} ${time}`
                }
                setFormData(updated)
                if (typeof window !== 'undefined') {
                  localStorage.setItem('therapyFormDraft', JSON.stringify(updated))
                }
                setFieldTouched(prev => ({ ...prev, preferredTime: true }))
                setFieldErrors(prev => {
                  const { preferredTime, ...rest } = prev
                  return rest
                })
              }}
              selectedDate={formData.selectedDate || undefined}
              selectedTime={formData.selectedTime || undefined}
            />
            {formData.selectedDate && formData.selectedTime && (
              <p className="text-xs text-warm-gray-500 mt-3 italic">
                I'll confirm this time within 24 hours.
              </p>
            )}
          </div>
        </div>
      )}

      {/* Step 3: Confirmation */}
      {currentStep === 'confirmation' && (
        <div className="space-y-4 animate-fade-in-up">
          <h3 className="text-2xl font-serif font-bold text-warm-gray-900 mb-6">
            Almost ready to book
          </h3>

          <div className="card bg-burgundy-50 border border-burgundy-200">
            <h4 className="font-semibold text-warm-gray-900 mb-4">Your Information</h4>
            <div className="space-y-3 text-sm">
              <p><span className="font-medium">Name:</span> {formData.name}</p>
              <p><span className="font-medium">Email:</span> {formData.email}</p>
              <p><span className="font-medium">Phone:</span> {formData.phone}</p>
              {formData.concern && <p><span className="font-medium">What brings you here:</span> {formData.concern}</p>}
              <p><span className="font-medium">First time in therapy?:</span> {formData.firstTimeTherapy === true ? 'No, first time' : 'Yes, I\'ve worked with a therapist before'}</p>
              <p><span className="font-medium">Preferred time:</span> {formData.preferredTime}</p>
            </div>
          </div>

          <div className="card card-tinted card-compact card-static">
            <div className="flex gap-3">
              <span className="text-lg flex-shrink-0">✓</span>
              <div>
                <p className="text-sm font-semibold text-burgundy-800">100% confidential & privacy-protected (PIPEDA-Canada, HIPAA-US)</p>
                <p className="text-xs text-burgundy-700 mt-1">Your privacy matters. Everything you share stays between us.</p>
              </div>
            </div>
          </div>

          {/* IMPROVEMENT #10: Clear timeline expectations */}
          <div className="bg-gradient-to-r from-honey-50 to-honey-50 border border-honey-200 rounded-lg p-5">
            <div className="space-y-3">
              <div className="flex gap-2">
                <span className="text-xl flex-shrink-0">📧</span>
                <div>
                  <p className="text-sm font-semibold text-warm-gray-900">Within 1 hour</p>
                  <p className="text-xs text-warm-gray-600 mt-1">Confirmation email sent to your inbox.</p>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="text-xl flex-shrink-0">📞</span>
                <div>
                  <p className="text-sm font-semibold text-warm-gray-900">Within 24 hours</p>
                  <p className="text-xs text-warm-gray-600 mt-1">I'll call to confirm and find a time that works.</p>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="text-xl flex-shrink-0">📅</span>
                <div>
                  <p className="text-sm font-semibold text-warm-gray-900">Within 1-2 weeks</p>
                  <p className="text-xs text-warm-gray-600 mt-1">We meet for your free consultation call.</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-honey-300">
                <p className="text-xs text-warm-gray-600">
                  <strong>No commitment yet.</strong> This is just a chance to connect and see if we're a good fit. You decide after our call.
                </p>
              </div>
            </div>
          </div>

          {/* IMPROVEMENT #1: Simplified consent checkbox */}
          <div className={`flex items-start gap-3 p-4 rounded-lg transition-all ${
            fieldTouched.consent && fieldErrors.consent
              ? 'bg-alert-50 border border-alert-300'
              : ''
          }`}>
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={formData.consent}
              onChange={handleInputChange}
              onBlur={handleFieldBlur}
              className="w-6 h-6 cursor-pointer mt-0.5 flex-shrink-0"
              aria-invalid={fieldTouched.consent && !!fieldErrors.consent}
              aria-describedby={fieldTouched.consent && fieldErrors.consent ? 'consent-error' : undefined}
            />
            <label htmlFor="consent" className="text-base text-warm-gray-600 cursor-pointer flex-1">
              I'm ready to book and I've read the <a href="/privacy" className="text-burgundy-600 underline font-semibold hover:text-burgundy-700">privacy policy</a>.
            </label>
          </div>
          {fieldTouched.consent && fieldErrors.consent && (
            <p id="consent-error" className="text-alert-600 text-sm font-medium">
              {fieldErrors.consent}
            </p>
          )}
        </div>
      )}

      {/* Success Message - IMPROVEMENT #8: Timeline clarity + aria-live */}
      {submitSuccess && (
        <div 
          className="card bg-burgundy-50 border-2 border-burgundy-400 animate-fade-in-up"
          role="status"
          aria-live="polite"
          aria-label="Form submitted successfully"
        >
          <div className="flex items-start gap-3">
            <span className="text-3xl">🎉</span>
            <div className="flex-1">
              <p className="text-burgundy-800 font-semibold mb-2">
                Got it! I'll reach out within 24 hours.
              </p>
              <p className="text-burgundy-700 text-sm mb-4">
                Check your email for a confirmation message. I'll call you to confirm the time.
              </p>
              <div className="bg-white/60 rounded p-3 text-xs text-burgundy-800 border border-burgundy-200">
                <p className="font-medium mb-2">What to expect:</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>📧 Confirmation email within 1 hour</li>
                  <li>📞 Call within 24 hours to confirm</li>
                  <li>📅 Free call scheduled within 1-2 weeks</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Error Message - IMPROVEMENT #5: Supports retry with data persistence */}
      {submitError && (
        <div 
          className="card bg-alert-50 border-2 border-alert-300 animate-fade-in-up"
          role="alert"
          aria-live="assertive"
        >
          <div className="flex items-start gap-3">
            <span className="text-2xl">⚠️</span>
            <div className="flex-1">
              <p className="text-alert-700 font-semibold mb-2">
                Something didn't go through
              </p>
              <p className="text-alert-600 text-sm mb-4">
                {submitError}
              </p>
              <div className="flex gap-3 flex-wrap">
                <button
                  onClick={() => {
                    setSubmitError(null)
                    // Form data is already persisted, user can retry immediately
                  }}
                  className="text-sm font-medium text-alert-600 hover:text-alert-700 hover:underline transition-colors"
                >
                  ↻ Try again
                </button>
                <span className="text-alert-600">•</span>
                <a
                  href="mailto:hello@rainukatherapy.com"
                  className="text-sm font-medium text-alert-600 hover:text-alert-700 hover:underline transition-colors"
                >
                  📧 Email me
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Buttons - IMPROVEMENT #4: Loading state on continue */}
      <div className="flex gap-4 justify-between pt-6 border-t border-warm-gray-200">
        {currentStep !== 'contact' && (
          <button
            type="button"
            onClick={() => {
              if (currentStep === 'concern') setCurrentStep('contact')
              if (currentStep === 'confirmation') setCurrentStep('concern')
              // Clear errors when going back
              setFieldErrors({})
            }}
            className="btn btn-outline transition-all hover:shadow-md active:shadow-sm"
          >
            Back
          </button>
        )}

        {currentStep !== 'confirmation' && (
          <button
            type="button"
            onClick={handleNextStep}
            disabled={isStepLoading}
            className="btn btn-primary ml-auto transition-all hover:shadow-md active:shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isStepLoading ? '⏳ Loading...' : 'Continue'}
          </button>
        )}

        {currentStep === 'confirmation' && (
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary ml-auto transition-all hover:shadow-md active:shadow-sm disabled:opacity-60 disabled:cursor-not-allowed relative overflow-hidden py-4 px-8 text-lg font-semibold bg-burgundy-700 hover:bg-burgundy-800 text-white"
            aria-busy={isSubmitting}
          >
            {isSubmitting ? (
              <>📤 Sending your information...</>
            ) : (
              <>✓ Confirm & Book</>
            )}
          </button>
        )}
      </div>
    </form>
  )
}
