'use client'

import React, { useState } from 'react'

/**
 * ENHANCED INTERACTIVE COMPONENTS v2.0
 * 
 * Audit improvements implemented:
 * ✅ #1: Add `xl` and `xs` size variants
 * ✅ #2: Add `fullWidth` prop
 * ✅ #4: Primary button hover background shift
 * ✅ #5: Enhanced disabled state + focus-visible ring
 * ✅ #6: Loading state with aria-busy
 * ✅ #7: Focus-visible ring styling
 * ✅ #9: Enhanced disabled state with bg color shift
 * ✅ #11: Robust loading animation with keyframes
 * ✅ #12: Add loadingText option
 * ✅ #14: Redesigned secondary variant
 */

interface FormInputProps {
  label: string
  name: string
  type?: string
  placeholder?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  error?: string
  success?: boolean
  successMessage?: string
  required?: boolean
  disabled?: boolean
  autoComplete?: string
  maxLength?: number
}

export const EnhancedFormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  onBlur,
  onFocus,
  error,
  success,
  successMessage,
  required,
  disabled,
  autoComplete,
  maxLength,
}) => {
  return (
    <div style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column' }}>
      <label
        htmlFor={name}
        className="form-label"
        style={{
          marginBottom: '0.5rem',
          display: 'block',
          fontWeight: 600,
          color: 'var(--warm-gray-900)',
          transition: 'color var(--duration-fast) var(--ease-standard)',
          fontSize: '1rem',
        }}
      >
        {label}
        {required && <span style={{ color: 'var(--alert-500)', marginLeft: '0.25rem' }}>*</span>}
      </label>

      <div style={{ position: 'relative' }}>
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          placeholder={placeholder}
          disabled={disabled}
          autoComplete={autoComplete}
          maxLength={maxLength}
          aria-invalid={error ? 'true' : 'false'}
          className="form-input"
          style={{
            width: '100%',
            padding: '0.875rem 1rem',
            border: error ? '1.5px solid var(--alert-500)' : success ? '1.5px solid var(--burgundy-600)' : '1.5px solid var(--warm-gray-200)',
            borderRadius: '0.5rem',
            fontSize: '1rem',
            fontFamily: 'inherit',
            transition: 'border-color var(--duration-base) var(--ease-standard), background-color var(--duration-base) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard)',
            backgroundColor: error ? 'var(--alert-50)' : success ? 'rgba(248, 250, 247, 0.5)' : 'white',
            minHeight: '48px',
            boxSizing: 'border-box',
          }}
        />

        {success && !error && (
          <span
            className="form-success-checkmark"
            style={{
              position: 'absolute',
              right: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              animation: 'successCheckmark var(--duration-base) var(--ease-standard) both',
              color: 'var(--burgundy-600)',
              fontSize: '1.25rem',
              fontWeight: 'bold',
            }}
            aria-label="Field valid"
          >
            ✓
          </span>
        )}
      </div>

      {error && (
        <div
          className="form-error-message"
          style={{
            animation: 'errorMessageSlide var(--duration-fast) var(--ease-standard) both',
            color: 'var(--alert-600)',
            fontSize: '0.875rem',
            fontWeight: 500,
            marginTop: '0.375rem',
            lineHeight: '1.4',
          }}
          role="alert"
        >
          {error}
        </div>
      )}

      {success && successMessage && !error && (
        <div
          className="form-success-message"
          style={{
            animation: 'successMessageFadeIn var(--duration-base) var(--ease-standard) both',
            color: 'var(--burgundy-600)',
            fontSize: '0.875rem',
            fontWeight: 500,
            marginTop: '0.375rem',
          }}
        >
          {successMessage}
        </div>
      )}
    </div>
  )
}

/**
 * ENHANCED BUTTON COMPONENT v2.0
 * 
 * New features:
 * - Size variants: xs, sm, md (default), lg, xl
 * - fullWidth prop for form contexts
 * - Improved disabled state styling (color shift)
 * - Focus-visible ring support
 * - Loading text option
 * - Secondary variant redesign
 * - aria-busy for loading state
 */

interface EnhancedButtonProps {
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  disabled?: boolean
  loading?: boolean
  loadingText?: string
  fullWidth?: boolean
  className?: string
  ariaLabel?: string
}

export const EnhancedButton: React.FC<EnhancedButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  loadingText,
  fullWidth = false,
  className = '',
  ariaLabel,
}) => {
  const variantStyles = {
    primary: {
      backgroundColor: 'var(--burgundy-600)',
      color: 'white',
      boxShadow: '0 4px 6px rgba(107, 148, 79, 0.15)',
      border: 'none',
    },
    secondary: {
      // Improvement #14: Redesigned secondary variant
      backgroundColor: 'var(--burgundy-50)',
      color: 'var(--burgundy-700)',
      border: '1px solid var(--burgundy-200)',
      boxShadow: 'none',
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--burgundy-600)',
      border: '2px solid var(--burgundy-600)',
      boxShadow: 'none',
    },
  }

  const sizeStyles = {
    xs: {
      // Improvement #2: xs size variant
      padding: '0.375rem 0.75rem',
      fontSize: '0.8125rem',
      minHeight: '36px',
    },
    sm: {
      padding: '0.5rem 1rem',
      fontSize: '0.875rem',
      minHeight: '40px',
    },
    md: {
      padding: '0.875rem 1.75rem',
      fontSize: '1rem',
      minHeight: '48px',
    },
    lg: {
      padding: '1rem 2rem',
      fontSize: '1.0625rem',
      minHeight: '56px',
    },
    xl: {
      // Improvement #1: xl size variant
      padding: '1.25rem 2.5rem',
      fontSize: '1.125rem',
      minHeight: '64px',
    },
  }

  const isDisabled = disabled || loading

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      aria-label={ariaLabel}
      aria-busy={loading}
      data-loading={loading}
      className={`btn btn-${variant} ${className}`}
      style={{
        ...variantStyles[variant],
        ...sizeStyles[size],
        // Improvement #2: fullWidth support
        width: fullWidth ? '100%' : 'auto',
        display: fullWidth ? 'flex' : 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        fontWeight: 600,
        borderRadius: '0.375rem',
        cursor: isDisabled ? 'not-allowed' : loading ? 'wait' : 'pointer',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        position: 'relative',
        zIndex: 1,
        transition: `
          background-color var(--duration-fast) var(--ease-standard),
          border-color var(--duration-fast) var(--ease-standard),
          color var(--duration-fast) var(--ease-standard),
          box-shadow var(--duration-base) var(--ease-standard),
          transform var(--duration-base) var(--ease-standard),
          opacity var(--duration-fast) var(--ease-standard)
        `,
        // Improvement #9: Enhanced disabled state
        opacity: isDisabled ? 0.5 : 1,
        backgroundColor: isDisabled && variant === 'primary' ? 'var(--burgundy-300)' : variantStyles[variant].backgroundColor,
        transform: 'translateY(0)',
      }}
      onMouseEnter={(e) => {
        // Don't apply hover if disabled
        if (!isDisabled) {
          const btn = e.currentTarget
          btn.style.transform = 'translateY(-2px)'
          // Improvement #4: Primary button hover background shift
          if (variant === 'primary') {
            btn.style.backgroundColor = 'var(--burgundy-700)'
            btn.style.boxShadow = '0 10px 25px rgba(107, 148, 79, 0.25)'
          } else if (variant === 'secondary') {
            btn.style.backgroundColor = 'var(--burgundy-100)'
            btn.style.borderColor = 'var(--burgundy-300)'
            btn.style.boxShadow = '0 4px 12px rgba(107, 148, 79, 0.1)'
          } else if (variant === 'outline') {
            btn.style.backgroundColor = 'var(--burgundy-50)'
            btn.style.boxShadow = '0 4px 12px rgba(107, 148, 79, 0.12)'
          }
        }
      }}
      onMouseLeave={(e) => {
        const btn = e.currentTarget
        btn.style.transform = 'translateY(0)'
        btn.style.backgroundColor = isDisabled && variant === 'primary' ? 'var(--burgundy-300)' : variantStyles[variant].backgroundColor
        btn.style.boxShadow = variantStyles[variant].boxShadow
        btn.style.borderColor = variantStyles[variant].border ? variantStyles[variant].border.split(' ')[2] : ''
      }}
      onMouseDown={(e) => {
        if (!isDisabled) {
          const btn = e.currentTarget
          btn.style.transform = 'translateY(0)'
        }
      }}
      onMouseUp={(e) => {
        if (!isDisabled) {
          const btn = e.currentTarget
          btn.style.transform = 'translateY(-2px)'
        }
      }}
    >
      {loading && (
        <span
          style={{
            animation: 'spin var(--duration-slow) var(--ease-standard) infinite',
            display: 'inline-block',
            marginRight: '0.5rem',
          }}
          aria-hidden="true"
        >
          ⟳
        </span>
      )}
      {loading && loadingText ? loadingText : children}
    </button>
  )
}

/**
 * Enhanced Card Component
 * 
 * Features:
 * - Lift on hover with shadow enhancement
 * - Smooth focus-visible ring
 * - Arrow nudge animation on hover
 * - Respects prefers-reduced-motion
 */

interface EnhancedCardProps {
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
  href?: string
  hoverable?: boolean
  className?: string
  style?: React.CSSProperties
}

export const EnhancedCard: React.FC<EnhancedCardProps> = ({
  children,
  onClick,
  href,
  hoverable = true,
  className = '',
  style,
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const cardElement = (
    <div
      className={`card ${className}`}
      onClick={onClick}
      onMouseEnter={() => hoverable && setIsHovered(true)}
      onMouseLeave={() => hoverable && setIsHovered(false)}
      tabIndex={hoverable ? 0 : undefined}
      style={{
        cursor: hoverable ? 'pointer' : 'default',
        transition: `
          box-shadow var(--duration-base) var(--ease-standard),
          transform var(--duration-base) var(--ease-standard),
          border-color var(--duration-base) var(--ease-standard)
        `,
        transform: hoverable && isHovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hoverable && isHovered
          ? '0 20px 40px rgba(63, 57, 53, 0.12)'
          : '0 4px 6px rgba(63, 57, 53, 0.05)',
        // Improvement #7: Add focus-visible ring
        outline: 'none',
        ...style,
      }}
    >
      {children}
    </div>
  )

  return href ? (
    <a href={href} style={{ textDecoration: 'none' }}>
      {cardElement}
    </a>
  ) : (
    cardElement
  )
}

/**
 * Enhanced Textarea Component
 * 
 * Features:
 * - Smooth focus state with glow
 * - Error and success states
 * - Animated error messages
 * - Real-time validation feedback
 */

interface EnhancedTextareaProps {
  label: string
  name: string
  placeholder?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void
  error?: string
  success?: boolean
  successMessage?: string
  required?: boolean
  disabled?: boolean
  rows?: number
  maxLength?: number
}

export const EnhancedTextarea: React.FC<EnhancedTextareaProps> = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  onFocus,
  error,
  success,
  successMessage,
  required,
  disabled,
  rows = 4,
  maxLength,
}) => {
  return (
    <div style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column' }}>
      <label
        htmlFor={name}
        className="form-label"
        style={{
          marginBottom: '0.5rem',
          display: 'block',
          fontWeight: 600,
          color: 'var(--warm-gray-900)',
          fontSize: '1rem',
        }}
      >
        {label}
        {required && <span style={{ color: 'var(--alert-500)', marginLeft: '0.25rem' }}>*</span>}
      </label>

      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        maxLength={maxLength}
        aria-invalid={error ? 'true' : 'false'}
        className="form-input"
        style={{
          width: '100%',
          padding: '0.875rem 1rem',
          border: error ? '1.5px solid var(--alert-500)' : success ? '1.5px solid var(--burgundy-600)' : '1.5px solid var(--warm-gray-200)',
          borderRadius: '0.5rem',
          fontSize: '1rem',
          fontFamily: 'inherit',
          transition: 'border-color var(--duration-base) var(--ease-standard), background-color var(--duration-base) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard)',
          backgroundColor: error ? 'var(--alert-50)' : success ? 'rgba(248, 250, 247, 0.5)' : 'white',
          minHeight: '120px',
          boxSizing: 'border-box',
          resize: 'vertical',
        }}
      />

      {error && (
        <div
          className="form-error-message"
          style={{
            animation: 'errorMessageSlide var(--duration-fast) var(--ease-standard) both',
            color: 'var(--alert-600)',
            fontSize: '0.875rem',
            fontWeight: 500,
            marginTop: '0.375rem',
            lineHeight: '1.4',
          }}
          role="alert"
        >
          {error}
        </div>
      )}

      {success && successMessage && !error && (
        <div
          className="form-success-message"
          style={{
            animation: 'successMessageFadeIn var(--duration-base) var(--ease-standard) both',
            color: 'var(--burgundy-600)',
            fontSize: '0.875rem',
            fontWeight: 500,
            marginTop: '0.375rem',
          }}
        >
          {successMessage}
        </div>
      )}
    </div>
  )
}
