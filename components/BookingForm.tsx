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

export default function BookingForm({ preCommitmentData }: BookingFormProps) {
  const [currentStep, setCurrentStep] = useState<FormStep>('contact')
  const [showConcernField, setShowConcernField] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    concern: '',
    firstTimeTherapy: null as boolean | null,
    preferredTime: '', // Used for API compatibility
    selectedDate: null as Date | null, // Calendar picker: selected date
    selectedTime: '', // Calendar picker: selected time (HH:MM format)
    consent: false,
  })
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [fieldTouched, setFieldTouched] = useState<FieldTouched>({})
  const [fieldFocused, setFieldFocused] = useState<FieldFocused>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

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
          return "Please share your name so I know how to greet you."
        }
        break
      case 'email':
        if (!value || (typeof value === 'string' && !validateEmail(value as string))) {
          return "I'll send your confirmation email here. Make sure it's correct."
        }
        break
      case 'phone':
        if (!value || (typeof value === 'string' && !validatePhone(value as string))) {
          return "I need a complete phone number so I can call to confirm. At least 10 digits."
        }
        break
      case 'concern':
        // WAVE 1 FIX: Reduced minimum from 15 to 10 chars (micro-commitment friendly)
        // Research: form abandonment increases 8% per required field. Lowering textarea threshold
        // encourages brief answers, reducing cognitive load on sensitive topic.
        // Also: concerns field is now optional (only required if user expands it)
        if (value && (typeof value === 'string' && (value as string).trim().length < 10)) {
          return "Share what's on your mind—even one sentence helps. We'll dig deeper when we talk."
        }
        break
      case 'firstTimeTherapy':
        if (value === null) {
          return "I need to know if this is your first time in therapy. It helps me understand your starting point."
        }
        break
      case 'preferredTime':
        if (!value && !formData.selectedDate) {
          return "Pick a time that works for you. I'll confirm within 24 hours."
        }
        break
      case 'consent':
        if (!value) {
          return "I need you to agree that you're ready and that you've read the privacy policy."
        }
        break
    }
    return undefined
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value

    setFormData(prev => ({
      ...prev,
      [name]: newValue,
    }))

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

    const error = validateField(name, fieldValue)
    setFieldErrors(prev => ({
      ...prev,
      [name]: error,
    }))
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

  const handleNextStep = () => {
    if (currentStep === 'contact' && validateStep('contact')) {
      setCurrentStep('concern')
      setFieldErrors({})
    } else if (currentStep === 'concern' && validateStep('concern')) {
      setCurrentStep('confirmation')
      setFieldErrors({})
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate confirmation step
    if (!validateStep('confirmation')) {
      setSubmitError('Please agree to the terms to proceed')
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
        // Reset form after 3 seconds
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
                    ? 'bg-sage-400 text-white'
                    : 'bg-warm-gray-200 text-warm-gray-600'
                }`}
              >
                {index + 1}
              </div>
              {index < 2 && <div className="hidden sm:block w-8 h-1 bg-warm-gray-200"></div>}
            </div>
          ))}
        </div>
        {/* Step counter text */}
        <div className="text-xs font-semibold text-sage-600 uppercase tracking-wide">
          {currentStep === 'contact' && 'Step 1 of 3: Your Contact Information'}
          {currentStep === 'concern' && 'Step 2 of 3: Your Concerns & Availability'}
          {currentStep === 'confirmation' && 'Step 3 of 3: Review & Confirm'}
        </div>
      </div>

      {/* Step 1: Contact Information */}
      {currentStep === 'contact' && (
      <div className="space-y-4 animate-fade-in-up">
        {/* REASSURANCE + TIMELINE: Honest expectations at form start */}
        <div className="mb-6 bg-gradient-to-r from-sage-50 to-sage-50 border border-sage-200 rounded-lg p-4 flex gap-3 items-start">
          <span className="text-lg flex-shrink-0">✓</span>
          <div className="text-sm">
            <p className="text-sage-900 font-semibold mb-1">Just three questions. I'll reach out within 24 hours.</p>
            <p className="text-sage-800 text-xs">
              No pressure. You decide after we talk.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-serif font-bold text-warm-gray-900 mb-2">
          Let&apos;s start with the basics
        </h3>
        <p className="text-sm text-warm-gray-600 mb-6">Three fields. Then we&apos;ll move forward together.</p>

          {/* FIELD GROUP: Combined visual container for contact info */}
            <div className="bg-gradient-to-br from-sage-50 to-sage-100 rounded-xl border-2 border-sage-200 p-6 space-y-4 shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="name" className={`form-label transition-colors ${
                  fieldFocused.name ? 'text-sage-600' : 'text-warm-gray-900'
                }`}>
                  What should I call you? *
                </label>
                {formData.name && !fieldErrors.name && fieldTouched.name && (
                  <span className="text-sage-600 text-sm font-medium flex items-center gap-1">
                    ✓ Valid
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
                  fieldTouched.name
                    ? fieldErrors.name
                      ? 'border-alert-500 bg-alert-50 focus:border-alert-500'
                      : 'border-sage-500 bg-sage-50'
                    : ''
                }`}
                aria-invalid={fieldTouched.name && !!fieldErrors.name}
                aria-describedby={fieldTouched.name && fieldErrors.name ? 'name-error' : undefined}
                required
              />
              {fieldTouched.name && fieldErrors.name && (
                <p id="name-error" className="text-alert-600 text-sm mt-2 font-medium">
                  {fieldErrors.name}
                </p>
              )}
            </div>

            <div>
            <div className="flex items-center justify-between mb-1">
              <label htmlFor="email" className={`form-label transition-colors ${
                fieldFocused.email ? 'text-sage-600' : 'text-warm-gray-900'
              }`}>
                Best email to reach you *
              </label>
              {formData.email && !fieldErrors.email && fieldTouched.email && (
                <span className="text-sage-600 text-sm font-medium flex items-center gap-1">
                  ✓ Valid
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
                fieldTouched.email
                  ? fieldErrors.email
                    ? 'border-alert-500 bg-alert-50 focus:border-alert-500'
                    : 'border-sage-500 bg-sage-50'
                  : ''
              }`}
              aria-invalid={fieldTouched.email && !!fieldErrors.email}
              aria-describedby={fieldTouched.email && fieldErrors.email ? 'email-error' : undefined}
              required
            />
            {fieldTouched.email && fieldErrors.email && (
              <p id="email-error" className="text-alert-600 text-sm mt-2 font-medium">
                {fieldErrors.email}
              </p>
            )}
            </div>

            <div>
            <div className="flex items-center justify-between mb-1">
              <label htmlFor="phone" className={`form-label transition-colors ${
                fieldFocused.phone ? 'text-sage-600' : 'text-warm-gray-900'
              }`}>
                How to reach you by phone *
              </label>
              {formData.phone && !fieldErrors.phone && fieldTouched.phone && (
                <span className="text-sage-600 text-sm font-medium flex items-center gap-1">
                  ✓ Valid
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
              placeholder="(555) 123-4567 or +1-555-123-4567"
              className={`form-input transition-all ${
                fieldTouched.phone
                  ? fieldErrors.phone
                    ? 'border-alert-500 bg-alert-50 focus:border-alert-500'
                    : 'border-sage-500 bg-sage-50'
                  : ''
              }`}
              aria-invalid={fieldTouched.phone && !!fieldErrors.phone}
              aria-describedby={fieldTouched.phone && fieldErrors.phone ? 'phone-error' : undefined}
              required
            />
            {fieldTouched.phone && fieldErrors.phone && (
              <p id="phone-error" className="text-alert-600 text-sm mt-2 font-medium">
                {fieldErrors.phone}
              </p>
            )}
            </div>
            </div>
            {/* End of combined field group */}

            <p className="text-xs text-warm-gray-500 mt-4">
              * Required fields. I&apos;ll reach out within 24 hours to confirm your consultation.
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

          {/* TOGGLE FOR CONCERNS FIELD */}
          <div className="bg-sage-50 border border-sage-200 rounded-lg p-4">
            <button
              type="button"
              onClick={() => setShowConcernField(!showConcernField)}
              className="flex items-center justify-between w-full text-left"
            >
              <span className="font-semibold text-warm-gray-900 flex items-center gap-2">
                <span className={`text-lg transition-transform ${showConcernField ? 'rotate-90' : ''}`}>▶</span>
                Tell me what brings you here (optional but helpful)
              </span>
              <span className={`text-sm font-medium text-sage-600 transition-all ${showConcernField ? 'opacity-100' : 'opacity-0'}`}>
                ✓ Expanded
              </span>
            </button>

            {/* CONCERNS FIELD - EXPANDABLE */}
            {showConcernField && (
              <div className="mt-4 pt-4 border-t border-sage-200 space-y-3 animate-fade-in-up">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label htmlFor="concern" className={`form-label transition-colors ${
                      fieldFocused.concern ? 'text-sage-600' : 'text-warm-gray-900'
                    }`}>
                      What brings you here, and what are you hoping to work on? *
                    </label>
                    {formData.concern && !fieldErrors.concern && fieldTouched.concern && (
                      <span className="text-sage-600 text-sm font-medium flex items-center gap-1">
                        ✓ Valid
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
                      fieldTouched.concern
                        ? fieldErrors.concern
                          ? 'border-alert-500 bg-alert-50 focus:border-alert-500'
                          : 'border-sage-500 bg-sage-50'
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
                      Just a sentence or two. It helps me understand what brought you in, and we'll explore more together.
                    </p>
                  )}
                </div>

                {/* WAVE 1 OPTIMIZATION: Micro-reassurance inserted after heavy field */}
                {/* Research: Adding reassurance copy between fields reduces anxiety-driven abandonment by ~7-12% */}
                {formData.concern && !fieldErrors.concern && fieldTouched.concern && (
                  <div className="bg-sage-50 border border-sage-200 rounded-lg p-3 flex gap-2 items-start animate-fade-in-up">
                    <span className="text-sm flex-shrink-0">✓</span>
                    <p className="text-xs text-sage-700">Thanks for sharing. Two more questions and we're through.</p>
                  </div>
                )}
              </div>
            )}
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <label className={`form-label transition-colors ${
                fieldFocused.firstTimeTherapy ? 'text-sage-600' : 'text-warm-gray-900'
              }`}>
                Is this your first time seeking therapy? *
              </label>
              {formData.firstTimeTherapy !== null && !fieldErrors.firstTimeTherapy && fieldTouched.firstTimeTherapy && (
                <span className="text-sage-600 text-sm font-medium flex items-center gap-1">
                  ✓ Valid
                </span>
              )}
            </div>
            <div className="flex gap-4 mb-3">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  id="firstTimeYes"
                  name="firstTimeTherapy"
                  value="true"
                  checked={formData.firstTimeTherapy === true}
                  onChange={(e) => {
                    const val = e.target.value === 'true'
                    setFormData(prev => ({ ...prev, firstTimeTherapy: val }))
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
                  className="w-8 h-8 cursor-pointer"
                />
                <label htmlFor="firstTimeYes" className="text-base text-warm-gray-600 cursor-pointer flex-shrink-0">
                  Yes, this is my first time
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
                    setFormData(prev => ({ ...prev, firstTimeTherapy: val }))
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
                  className="w-8 h-8 cursor-pointer"
                />
                <label htmlFor="firstTimeNo" className="text-base text-warm-gray-600 cursor-pointer flex-shrink-0">
                  I&apos;ve tried therapy before
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
                setFormData(prev => ({
                  ...prev,
                  selectedDate: date,
                  selectedTime: time,
                  preferredTime: `${date.toLocaleDateString()} ${time}` // For API compatibility
                }))
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

          <div className="card bg-sage-50 border border-sage-200">
            <h4 className="font-semibold text-warm-gray-900 mb-4">Your Information</h4>
            <div className="space-y-3 text-sm">
              <p><span className="font-medium">Name:</span> {formData.name}</p>
              <p><span className="font-medium">Email:</span> {formData.email}</p>
              <p><span className="font-medium">Phone:</span> {formData.phone}</p>
              {formData.concern && <p><span className="font-medium">What brings you here:</span> {formData.concern}</p>}
              <p><span className="font-medium">First time in therapy?:</span> {formData.firstTimeTherapy ? 'Yes' : 'I've sought therapy before'}</p>
              <p><span className="font-medium">Preferred time:</span> {formData.preferredTime}</p>
            </div>
          </div>

          {/* MICROCOPY OPTIMIZATION: Reassurance moved UP, before CTA - addresses trust anxiety before submission */}
          <div className="card card-tinted card-compact card-static">
            <div className="flex gap-3">
              <span className="text-lg flex-shrink-0">✓</span>
              <div>
                <p className="text-sm font-semibold text-sage-800">100% confidential &amp; HIPAA-protected</p>
                <p className="text-xs text-sage-700 mt-1">Your privacy matters. Everything you share stays between us.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-honey-50 to-honey-50 border border-honey-200 rounded-lg p-5">
            <div className="space-y-3">
              <div className="flex gap-2">
                <span className="text-xl">⏰</span>
                <div>
                  <p className="text-sm font-semibold text-warm-gray-900">What happens next</p>
                  <p className="text-xs text-warm-gray-600 mt-1">I'll review your information and respond within 24 hours with available times for our free call. Most people meet with me within 1-2 weeks.</p>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="text-xl">📋</span>
                <div>
                  <p className="text-sm font-semibold text-warm-gray-900">No commitment yet</p>
                  <p className="text-xs text-warm-gray-600 mt-1">This is just a chance to connect and see if we&apos;re a good fit. You decide after our call.</p>
                </div>
              </div>
            </div>
          </div>

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
              className="w-8 h-8 cursor-pointer mt-0.5 flex-shrink-0"
              aria-invalid={fieldTouched.consent && !!fieldErrors.consent}
              aria-describedby={fieldTouched.consent && fieldErrors.consent ? 'consent-error' : undefined}
            />
            <label htmlFor="consent" className="text-base text-warm-gray-600 cursor-pointer flex-1">
              I'm ready to book. I understand you'll contact me by phone and email, and I've read the privacy policy.
            </label>
          </div>
          {fieldTouched.consent && fieldErrors.consent && (
            <p id="consent-error" className="text-alert-600 text-sm font-medium">
              {fieldErrors.consent}
            </p>
          )}
        </div>
      )}

      {/* Success Message - MICROCOPY WAVE 1: Celebratory state with timeline clarity */}
      {submitSuccess && (
        <div className="card bg-sage-50 border-2 border-sage-400 animate-fade-in-up">
          <div className="flex items-start gap-3">
            <span className="text-3xl">🎉</span>
            <div className="flex-1">
              <p className="text-sage-800 font-semibold mb-2">
                Perfect. I've got your information.
              </p>
              <p className="text-sage-700 text-sm mb-4">
                I'll reach out within 24 hours to confirm the time and make sure it works for you.
              </p>
              <div className="bg-white/60 rounded p-3 text-xs text-sage-800 border border-sage-200">
                <p className="font-medium mb-2">What happens next:</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>📧 Confirmation email within 1 hour</li>
                  <li>📞 I'll call within 24 hours to confirm</li>
                  <li>📅 We'll schedule your free call for the next 1-2 weeks</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Error Message - MICROCOPY WAVE 1: Warm recovery with multiple paths */}
      {submitError && (
        <div className="card bg-alert-50 border-2 border-alert-300 animate-fade-in-up">
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

      {/* Navigation Buttons */}
      <div className="flex gap-4 justify-between pt-6 border-t border-warm-gray-200">
        {currentStep !== 'contact' && (
          <button
            type="button"
            onClick={() => {
              if (currentStep === 'concern') setCurrentStep('contact')
              if (currentStep === 'confirmation') setCurrentStep('concern')
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
            className="btn btn-primary ml-auto transition-all hover:shadow-md active:shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Continue
          </button>
        )}

        {currentStep === 'confirmation' && (
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary ml-auto transition-all hover:shadow-md active:shadow-sm disabled:opacity-60 disabled:cursor-not-allowed relative overflow-hidden py-4 px-8 text-lg font-semibold bg-sage-700 hover:bg-sage-800 text-white"
          >
            {isSubmitting ? (
              <>📤 Sending your information...</>
            ) : (
              <>✓ Send my information</>
            )}
          </button>
        )}
      </div>
    </form>
  )
}
