'use client'

import { useState, useEffect } from 'react'
import CalendarPicker from './CalendarPicker'
import { 
  trackFormView, 
  trackFieldInteraction, 
  trackFormSubmit, 
  trackFormSuccess,
  initializeGATracking
} from '@/lib/ga'

type FormStep = 'contact' | 'confirmation'

interface BookingFormData {
  name: string
  email: string
  phone: string
  concern: string
  firstTimeTherapy: boolean | null
  selectedDate: Date | null
  selectedTime: string
  consent: boolean
}

interface FieldErrors {
  name?: string
  email?: string
  phone?: string
  concern?: string
  firstTimeTherapy?: string
  consent?: string
}

interface FieldTouched {
  name?: boolean
  email?: boolean
  phone?: boolean
  concern?: boolean
  firstTimeTherapy?: boolean
  consent?: boolean
}

interface FieldFocused {
  name?: boolean
  email?: boolean
  phone?: boolean
  concern?: boolean
  firstTimeTherapy?: boolean
  consent?: boolean
}

interface BookingFormProps {
  preCommitmentData?: any | null
}

const STORAGE_KEY = 'booking_form_data'

export default function BookingForm({ preCommitmentData }: BookingFormProps) {
  const [currentStep, setCurrentStep] = useState<FormStep>('contact')
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    concern: '',
    firstTimeTherapy: null,
    selectedDate: null,
    selectedTime: '',
    consent: false,
  })
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [fieldTouched, setFieldTouched] = useState<FieldTouched>({})
  const [fieldFocused, setFieldFocused] = useState<FieldFocused>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        // Reconstruct Date object from ISO string
        if (parsed.selectedDate) {
          parsed.selectedDate = new Date(parsed.selectedDate)
        }
        setFormData(parsed)
      } catch (e) {
        console.error('Failed to load saved form data:', e)
      }
    }
  }, [])

  // Save to localStorage on form data change
  useEffect(() => {
    const toSave = {
      ...formData,
      selectedDate: formData.selectedDate?.toISOString() || null,
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave))
  }, [formData])

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
        if (value && (typeof value === 'string' && (value as string).trim().length < 10)) {
          return "Share what's on your mind—even one sentence helps. We'll dig deeper when we talk."
        }
        break
      case 'firstTimeTherapy':
        if (value === null) {
          return "I need to know if this is your first time in therapy. It helps me understand your starting point."
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
      errors.concern = validateField('concern', formData.concern)
      errors.firstTimeTherapy = validateField('firstTimeTherapy', formData.firstTimeTherapy)
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
        firstTimeTherapy: true,
        consent: true,
      })
      return false
    }

    return true
  }

  const handleNextStep = () => {
    if (currentStep === 'contact' && validateStep('contact')) {
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
        body: JSON.stringify({
          ...formData,
          preferredTime: formData.selectedDate && formData.selectedTime 
            ? `${formData.selectedDate.toLocaleDateString()} ${formData.selectedTime}`
            : '',
        }),
      })

      if (response.ok) {
        setSubmitSuccess(true)
        setFieldErrors({})
        // Clear localStorage on successful submission
        localStorage.removeItem(STORAGE_KEY)
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            concern: '',
            firstTimeTherapy: null,
            selectedDate: null,
            selectedTime: '',
            consent: false,
          })
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

  // Calculate progress
  const contactComplete = formData.name && formData.email && formData.phone
  const concernComplete = formData.concern && formData.firstTimeTherapy !== null && formData.selectedDate && formData.selectedTime
  const overallProgress = Math.round(
    ((contactComplete ? 1 : 0) * 50 + (concernComplete ? 1 : 0) * 50)
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-xs font-semibold text-warm-gray-700 uppercase tracking-wide">
            {currentStep === 'contact' ? 'Step 1 of 2: Your Information' : 'Step 2 of 2: Review & Confirm'}
          </h4>
          <span className="text-xs font-semibold text-burgundy-600">{overallProgress}%</span>
        </div>
        <div className="w-full bg-warm-gray-200 rounded-full h-2 overflow-hidden">
          <div
            className="bg-burgundy-500 h-full transition-all duration-300 ease-out"
            style={{ width: `${overallProgress}%` }}
          />
        </div>
      </div>

      {/* Step 1: Contact Information + Concerns + Availability */}
      {currentStep === 'contact' && (
        <div className="space-y-6 animate-fade-in-up">
          <div className="mb-6 bg-gradient-to-r from-burgundy-50 to-burgundy-50 border border-burgundy-200 rounded-lg p-4 flex gap-3 items-start">
            <span className="text-lg flex-shrink-0">✓</span>
            <div className="text-sm">
              <p className="text-burgundy-900 font-semibold mb-1">Just six fields. I'll reach out within 24 hours.</p>
              <p className="text-burgundy-800 text-xs">
                No pressure. You decide after we talk.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-serif font-bold text-warm-gray-900 mb-2">
              Let&apos;s get to know each other
            </h3>
            <p className="text-sm text-warm-gray-600 mb-6">Six essential fields to start your journey.</p>
          </div>

          {/* Contact Information Block */}
          <div className="bg-gradient-to-br from-burgundy-50 to-burgundy-100 rounded-xl border-2 border-burgundy-200 p-6 space-y-4">
            {/* Name */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="name" className={`form-label transition-colors ${
                  fieldFocused.name ? 'text-burgundy-600' : 'text-warm-gray-900'
                }`}>
                  What should I call you? *
                </label>
                {formData.name && !fieldErrors.name && fieldTouched.name && (
                  <span className="text-burgundy-600 text-sm font-medium flex items-center gap-1">
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
                      : 'border-burgundy-500 bg-burgundy-50'
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

            {/* Email */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="email" className={`form-label transition-colors ${
                  fieldFocused.email ? 'text-burgundy-600' : 'text-warm-gray-900'
                }`}>
                  Best email to reach you *
                </label>
                {formData.email && !fieldErrors.email && fieldTouched.email && (
                  <span className="text-burgundy-600 text-sm font-medium flex items-center gap-1">
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
                      : 'border-burgundy-500 bg-burgundy-50'
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

            {/* Phone */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="phone" className={`form-label transition-colors ${
                  fieldFocused.phone ? 'text-burgundy-600' : 'text-warm-gray-900'
                }`}>
                  How to reach you by phone *
                </label>
                {formData.phone && !fieldErrors.phone && fieldTouched.phone && (
                  <span className="text-burgundy-600 text-sm font-medium flex items-center gap-1">
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
                      : 'border-burgundy-500 bg-burgundy-50'
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

          {/* Concern - Simplified */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="concern" className={`form-label transition-colors ${
                fieldFocused.concern ? 'text-burgundy-600' : 'text-warm-gray-900'
              }`}>
                What brings you here? *
              </label>
              {formData.concern && !fieldErrors.concern && fieldTouched.concern && (
                <span className="text-burgundy-600 text-sm font-medium flex items-center gap-1">
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
              placeholder="e.g., 'Work stress and anxiety' or 'I'm struggling with depression.'"
              className={`form-input h-24 resize-none transition-all ${
                fieldTouched.concern
                  ? fieldErrors.concern
                    ? 'border-alert-500 bg-alert-50 focus:border-alert-500'
                    : 'border-burgundy-500 bg-burgundy-50'
                  : ''
              }`}
              aria-invalid={fieldTouched.concern && !!fieldErrors.concern}
              aria-describedby={fieldTouched.concern && fieldErrors.concern ? 'concern-error' : 'concern-help'}
              required
            />
            {fieldTouched.concern && fieldErrors.concern ? (
              <p id="concern-error" role="alert" aria-live="polite" className="text-alert-600 text-sm mt-2 font-medium">
                {fieldErrors.concern}
              </p>
            ) : (
              <p id="concern-help" className="text-sm text-warm-gray-500 mt-2">
                Just a sentence or two. We'll explore more together.
              </p>
            )}
          </div>

          {/* First Time Therapy */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className={`form-label transition-colors ${
                fieldFocused.firstTimeTherapy ? 'text-burgundy-600' : 'text-warm-gray-900'
              }`}>
                Is this your first time seeking therapy? *
              </label>
              {formData.firstTimeTherapy !== null && !fieldErrors.firstTimeTherapy && fieldTouched.firstTimeTherapy && (
                <span className="text-burgundy-600 text-sm font-medium flex items-center gap-1">
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
                  className="w-5 h-5 cursor-pointer"
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
                  className="w-5 h-5 cursor-pointer"
                />
                <label htmlFor="firstTimeNo" className="text-base text-warm-gray-600 cursor-pointer flex-shrink-0">
                  I&apos;ve tried therapy before
                </label>
              </div>
            </div>
            {fieldTouched.firstTimeTherapy && fieldErrors.firstTimeTherapy && (
              <p id="firstTimeTherapy-error" role="alert" aria-live="polite" className="text-alert-600 text-sm font-medium">
                {fieldErrors.firstTimeTherapy}
              </p>
            )}
          </div>

          {/* Calendar Picker for Date & Time */}
          <div>
            <CalendarPicker
              onDateTimeSelect={(date, time) => {
                setFormData(prev => ({
                  ...prev,
                  selectedDate: date,
                  selectedTime: time,
                }))
                setFieldTouched(prev => ({ ...prev, consent: false }))
              }}
              selectedDate={formData.selectedDate || undefined}
              selectedTime={formData.selectedTime || undefined}
            />
            {formData.selectedDate && formData.selectedTime && (
              <p className="text-xs text-warm-gray-500 mt-3 italic">
                ✓ I'll confirm this time within 24 hours.
              </p>
            )}
          </div>

          <p className="text-xs text-warm-gray-500">
            * Required fields. Your information is secure and confidential.
          </p>
        </div>
      )}

      {/* Step 2: Review & Confirmation */}
      {currentStep === 'confirmation' && (
        <div className="space-y-4 animate-fade-in-up">
          <h3 className="text-2xl font-serif font-bold text-warm-gray-900 mb-6">
            Almost ready to book
          </h3>

          {/* Summary Card */}
          <div className="card bg-burgundy-50 border border-burgundy-200">
            <h4 className="font-semibold text-warm-gray-900 mb-4">Your Information</h4>
            <div className="space-y-3 text-sm">
              <p><span className="font-medium">Name:</span> {formData.name}</p>
              <p><span className="font-medium">Email:</span> {formData.email}</p>
              <p><span className="font-medium">Phone:</span> {formData.phone}</p>
              <p><span className="font-medium">What brings you here:</span> {formData.concern}</p>
              <p><span className="font-medium">First time in therapy?:</span> {formData.firstTimeTherapy ? 'Yes' : 'I\'ve sought therapy before'}</p>
              <p><span className="font-medium">Preferred time:</span> {formData.selectedDate && formData.selectedTime ? `${formData.selectedDate.toLocaleDateString()} ${formData.selectedTime}` : 'Not selected'}</p>
            </div>
          </div>

          {/* Trust & Reassurance */}
          <div className="card card-tinted card-compact card-static">
            <div className="flex gap-3">
              <span className="text-lg flex-shrink-0">✓</span>
              <div>
                <p className="text-sm font-semibold text-burgundy-800">100% confidential &amp; HIPAA-protected</p>
                <p className="text-xs text-burgundy-700 mt-1">Your privacy matters. Everything you share stays between us.</p>
              </div>
            </div>
          </div>

          {/* What Happens Next */}
          <div className="bg-gradient-to-r from-honey-50 to-honey-50 border border-honey-200 rounded-lg p-5">
            <div className="space-y-3">
              <div className="flex gap-2">
                <span className="text-xl">⏰</span>
                <div>
                  <p className="text-sm font-semibold text-warm-gray-900">What happens next</p>
                  <p className="text-xs text-warm-gray-600 mt-1">I'll review your information and respond within 24 hours. Most people meet with me within 1-2 weeks.</p>
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

          {/* Consent Checkbox */}
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
              className="w-5 h-5 cursor-pointer mt-0.5 flex-shrink-0"
              aria-invalid={fieldTouched.consent && !!fieldErrors.consent}
              aria-describedby={fieldTouched.consent && fieldErrors.consent ? 'consent-error' : undefined}
            />
            <label htmlFor="consent" className="text-base text-warm-gray-600 cursor-pointer flex-1">
              I'm ready to book. I understand you'll contact me by phone and email, and I've read the privacy policy.
            </label>
          </div>
          {fieldTouched.consent && fieldErrors.consent && (
            <p id="consent-error" role="alert" aria-live="polite" className="text-alert-600 text-sm font-medium">
              {fieldErrors.consent}
            </p>
          )}
        </div>
      )}

      {/* Success Message */}
      {submitSuccess && (
        <div className="card bg-burgundy-50 border-2 border-burgundy-400 animate-fade-in-up">
          <div className="flex items-start gap-3">
            <span className="text-3xl">🎉</span>
            <div className="flex-1">
              <p className="text-burgundy-800 font-semibold mb-2">
                Perfect. I've got your information.
              </p>
              <p className="text-burgundy-700 text-sm mb-4">
                I'll reach out within 24 hours to confirm the time and make sure it works for you.
              </p>
              <div className="bg-white/60 rounded p-3 text-xs text-burgundy-800 border border-burgundy-200">
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

      {/* Error Message */}
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
              setCurrentStep('contact')
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
            className="btn btn-primary ml-auto transition-all hover:shadow-md active:shadow-sm disabled:opacity-60 disabled:cursor-not-allowed relative overflow-hidden py-4 px-8 text-lg font-semibold bg-burgundy-700 hover:bg-burgundy-800 text-white"
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
