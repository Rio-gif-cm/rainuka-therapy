'use client'

import React, { useState } from 'react'

/**
 * Enhanced Form Input Component
 * 
 * Features:
 * - Smooth focus/blur transitions with shadow glow
 * - Real-time validation feedback with animated checkmark
 * - Error state with animated error message slide-in
 * - Success state with smooth checkmark entrance
 * - Respects prefers-reduced-motion
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
            border: error ? '1.5px solid var(--alert-500)' : success ? '1.5px solid var(--sage-600)' : '1.5px solid var(--warm-gray-200)',
            borderRadius: '0.5rem',
            fontSize: '1rem',
            fontFamily: 'inherit',
            transition: 'border-color var(--duration-base) var(--ease-standard), background-color var(--duration-base) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard)',
            backgroundColor: error ? 'var(--alert-50)' : success ? 'rgba(248, 250, 247, 0.5)' : 'white',
            minHeight: '48px',
            boxSizing: 'border-box',
          }}
        />

        {/* Success Checkmark - animated entrance */}
        {success && !error && (
          <span
            className="form-success-checkmark"
            style={{
              position: 'absolute',
              right: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              animation: 'successCheckmark var(--duration-base) var(--ease-standard) both',
              color: 'var(--sage-600)',
              fontSize: '1.25rem',
              fontWeight: 'bold',
            }}
            aria-label="Field valid"
          >
            ✓
          </span>
        )}
      </div>

      {/* Error Message - animated slide-in */}
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

      {/* Success Message - animated fade-in */}
      {success && successMessage && !error && (
        <div
          className="form-success-message"
          style={{
            animation: 'successMessageFadeIn var(--duration-base) var(--ease-standard) both',
            color: 'var(--sage-600)',
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
 * Enhanced Button Component
 *
 * Features:
 * - Smooth lift on hover (translateY -2px)
 * - Shadow enhancement on hover
 * - Press feedback (settles back on active)
 * - Clear focus-visible ring for keyboard navigation
 * - Loading state with shimmer
 * - Respects prefers-reduced-motion
 */

interface EnhancedButtonProps {
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
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
  className = '',
  ariaLabel,
}) => {
  const variantStyles = {
    primary: {
      backgroundColor: 'var(--sage-600)',
      color: 'white',
      boxShadow: '0 4px 6px rgba(107, 148, 79, 0.15)',
      border: 'none',
    },
    secondary: {
      backgroundColor: 'var(--sage-600)',
      color: 'white',
      boxShadow: '0 4px 6px rgba(107, 148, 79, 0.15)',
      border: 'none',
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--sage-600)',
      border: '2px solid var(--sage-600)',
      boxShadow: 'none',
    },
  }

  const sizeStyles = {
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
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      data-loading={loading}
      className={`btn btn-${variant} ${className}`}
      style={{
        ...variantStyles[variant],
        ...sizeStyles[size],
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        fontWeight: 600,
        borderRadius: '0.375rem',
        cursor: disabled || loading ? 'not-allowed' : 'pointer',
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
        opacity: disabled || loading ? 0.6 : 1,
        transform: 'translateY(0)',
      }}
      onMouseEnter={(e) => {
        if (!disabled && !loading) {
          const btn = e.currentTarget
          btn.style.transform = 'translateY(-2px)'
          btn.style.boxShadow = 
            variant === 'primary'
              ? '0 10px 25px rgba(107, 148, 79, 0.25)'
              : variant === 'secondary'
                ? '0 8px 12px rgba(107, 148, 79, 0.25)'
                : '0 4px 12px rgba(107, 148, 79, 0.12)'
        }
      }}
      onMouseLeave={(e) => {
        const btn = e.currentTarget
        btn.style.transform = 'translateY(0)'
        btn.style.boxShadow =
          variant === 'primary'
            ? '0 4px 6px rgba(107, 148, 79, 0.15)'
            : variant === 'secondary'
              ? '0 4px 6px rgba(107, 148, 79, 0.15)'
              : 'none'
      }}
      onMouseDown={(e) => {
        if (!disabled && !loading) {
          const btn = e.currentTarget
          btn.style.transform = 'translateY(0)'
          btn.style.boxShadow =
            variant === 'primary'
              ? '0 4px 12px rgba(107, 148, 79, 0.15)'
              : variant === 'secondary'
                ? '0 4px 6px rgba(107, 148, 79, 0.15)'
                : '0 2px 6px rgba(107, 148, 79, 0.1)'
        }
      }}
      onMouseUp={(e) => {
        if (!disabled && !loading) {
          const btn = e.currentTarget
          btn.style.transform = 'translateY(-2px)'
        }
      }}
    >
      {loading && (
        <span
          style={{
            animation: 'shimmer var(--duration-slow) var(--ease-standard) infinite',
            display: 'inline-block',
            marginRight: '0.5rem',
          }}
        >
          ⟳
        </span>
      )}
      {children}
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
          border: error ? '1.5px solid var(--alert-500)' : success ? '1.5px solid var(--sage-600)' : '1.5px solid var(--warm-gray-200)',
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

      {/* Error Message */}
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

      {/* Success Message */}
      {success && successMessage && !error && (
        <div
          className="form-success-message"
          style={{
            animation: 'successMessageFadeIn var(--duration-base) var(--ease-standard) both',
            color: 'var(--sage-600)',
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

export default {
  EnhancedFormInput,
  EnhancedButton,
  EnhancedCard,
  EnhancedTextarea,
}
