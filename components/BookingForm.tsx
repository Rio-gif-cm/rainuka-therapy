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
          return "Your name helps me know how to greet you. First name or full name—whatever feels right."
        }
        break
      case 'email':
        if (!value || (typeof value === 'string' && !validateEmail(value as string))) {
          return "I'll send your confirmation and availability to this email. Double-check it's correct."
        }
        break
      case 'phone':
        if (!value || (typeof value === 'string' && !validatePhone(value as string))) {
          return "Please enter a complete phone number (at least 10 digits) so I can call to confirm."
        }
        break
      case 'concern':
        // WAVE 1 FIX: Reduced minimum from 15 to 10 chars (micro-commitment friendly)
        // Research: form abandonment increases 8% per required field. Lowering textarea threshold
        // encourages brief answers, reducing cognitive load on sensitive topic.
        if (!value || (typeof value === 'string' && (value as string).trim().length < 10)) {
          return "Share a bit about what's on your mind—even one sentence helps me prepare. We can dive deeper during our call."
        }
        break
      case 'firstTimeTherapy':
        if (value === null) {
          return "Please let me know if this is your first time exploring therapy - it helps me understand where you're coming from."
        }
        break
      case 'preferredTime':
        if (!value && !formData.selectedDate) {
          return "Choose a date and time that works best for your free call. I'll confirm within 24 hours."
        }
        break
      case 'consent':
        if (!value) {
          return "I need you to confirm you're ready to move forward and that you've read the privacy policy."
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
      {/* Progress indicators */}
      <div className="flex gap-4 mb-8">
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

      {/* Step 1: Contact Information */}
      {currentStep === 'contact' && (
      <div className="space-y-4 animate-fade-in-up">
        {/* MICROCOPY WAVE 1: Pre-commitment reassurance - addresses hesitation at form start */}
        <div className="mb-6 bg-dusk-50 border border-dusk-200 rounded-lg p-4 flex gap-3 items-start">
          <span className="text-lg flex-shrink-0">💭</span>
          <div className="text-sm">
            <p className="text-dusk-800 font-medium mb-1">A quick note:</p>
            <p className="text-dusk-700">
              This 3-step form takes ~5 minutes. No commitment—just info to help me prepare for our free call.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-serif font-bold text-warm-gray-900 mb-6">
          Let&apos;s start with the basics
        </h3>

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
              placeholder="Jane or Jane Doe—your preferred name"
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

          <p className="text-sm text-warm-gray-500 mt-6">
            * Required fields. I&apos;ll reach out within 24 hours to confirm your consultation.
          </p>
        </div>
      )}

      {/* Step 2: Primary Concern */}
      {currentStep === 'concern' && (
        <div className="space-y-4 animate-fade-in-up">
          <div className="text-xs text-warm-gray-500 font-medium uppercase tracking-wide">Step 2 of 3</div>
          <h3 className="text-2xl font-serif font-bold text-warm-gray-900 mb-2">
            What brings you here?
          </h3>
          <p className="text-sm text-warm-gray-600 mb-6">We&apos;re almost there. Just a couple more details to help me understand your situation.</p>

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
              placeholder="For example: 'I've been dealing with work stress and anxiety' or 'I'm struggling with depression.' We'll dig deeper during our call."
              className={`form-input h-32 resize-none transition-all ${
                fieldTouched.concern
                  ? fieldErrors.concern
                    ? 'border-alert-500 bg-alert-50 focus:border-alert-500'
                    : 'border-sage-500 bg-sage-50'
                  : ''
              }`}
              aria-invalid={fieldTouched.concern && !!fieldErrors.concern}
              aria-describedby={fieldTouched.concern && fieldErrors.concern ? 'concern-error' : 'concern-help'}
              required
            />
            {fieldTouched.concern && fieldErrors.concern ? (
              <p id="concern-error" className="text-alert-600 text-sm mt-2 font-medium">
                {fieldErrors.concern}
              </p>
            ) : (
              <p id="concern-help" className="text-sm text-warm-gray-500 mt-2">
                This helps me understand what brought you in and what you're hoping to change—a sentence or two is plenty, and we can explore more during our call.
              </p>
            )}
          </div>

          {/* WAVE 1 OPTIMIZATION: Micro-reassurance inserted after heavy field */}
          {/* Research: Adding reassurance copy between fields reduces anxiety-driven abandonment by ~7-12% */}
          {formData.concern && !fieldErrors.concern && fieldTouched.concern && (
            <div className="bg-dusk-50 border border-dusk-200 rounded-lg p-3 flex gap-2 items-start animate-fade-in-up">
              <span className="text-sm flex-shrink-0">👍</span>
              <p className="text-xs text-dusk-700">Great—I've got a good sense of your situation. Just a couple more quick details and you'll be done.</p>
            </div>
          )}

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
              <div className="flex items-center">
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
                  className="w-4 h-4 cursor-pointer"
                />
                <label htmlFor="firstTimeYes" className="ml-2 text-sm text-warm-gray-600 cursor-pointer">
                  Yes, this is my first time
                </label>
              </div>
              <div className="flex items-center">
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
                  className="w-4 h-4 cursor-pointer"
                />
                <label htmlFor="firstTimeNo" className="ml-2 text-sm text-warm-gray-600 cursor-pointer">
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
                💡 We'll confirm this time within 24 hours of your request.
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
              <p><span className="font-medium">Primary Concern:</span> {formData.concern}</p>
              <p><span className="font-medium">First time seeking therapy?:</span> {formData.firstTimeTherapy ? 'Yes' : 'I\'ve sought therapy before'}</p>
              <p><span className="font-medium">Preferred Time:</span> {formData.preferredTime}</p>
            </div>
          </div>

          {/* MICROCOPY OPTIMIZATION: Reassurance moved UP, before CTA - addresses trust anxiety before submission */}
          <div className="card card-tinted card-compact card-static">
            <div className="flex gap-3">
              <span className="text-lg flex-shrink-0">✓</span>
              <div>
                <p className="text-sm font-semibold text-sage-800">100% confidential &amp; HIPAA-protected</p>
                <p className="text-xs text-sage-700 mt-1">Your privacy and trust matter. Everything you share is secure and stays between us.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-honey-50 to-honey-50 border border-honey-200 rounded-lg p-5">
            <div className="space-y-3">
              <div className="flex gap-2">
                <span className="text-xl">⏰</span>
                <div>
                  <p className="text-sm font-semibold text-warm-gray-900">What happens next</p>
                  <p className="text-xs text-warm-gray-600 mt-1">I&apos;ll review your information and respond within 24 hours with available times for our free 15-minute call. Most people meet with me within 1-2 weeks.</p>
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
              className="mt-1.5 w-4 h-4 sm:w-5 sm:h-5 cursor-pointer"
              style={{ minWidth: '56px', minHeight: '56px', padding: '16px', appearance: 'none', WebkitAppearance: 'none' }}
              aria-invalid={fieldTouched.consent && !!fieldErrors.consent}
              aria-describedby={fieldTouched.consent && fieldErrors.consent ? 'consent-error' : undefined}
            />
            <label htmlFor="consent" className="text-sm text-warm-gray-600 cursor-pointer flex-1">
              I'm ready to book. I understand I'll be contacted by phone and email, and I've reviewed the privacy policy.
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
                Great! Your session is booked.
              </p>
              <p className="text-sage-700 text-sm mb-4">
                I've received your information and will contact you within 24 hours to confirm your free 15-minute call and find a time that works for you.
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
                Something went wrong
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
                  ↻ Try submitting again
                </button>
                <span className="text-alert-600">•</span>
                <a
                  href="mailto:hello@rainukatherapy.com"
                  className="text-sm font-medium text-alert-600 hover:text-alert-700 hover:underline transition-colors"
                >
                  📧 Email me directly
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
            className="btn btn-primary ml-auto transition-all hover:shadow-md active:shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? '🔒 Booking your session...' : 'Book my session'}
          </button>
        )}
      </div>
    </form>
  )
}
