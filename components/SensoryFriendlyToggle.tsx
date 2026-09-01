'use client'

import { useState, useEffect } from 'react'
import { colors } from '@/app/styles'

interface SensoryFriendlyModeProps {
  isMobile?: boolean
}

export default function SensoryFriendlyToggle({ isMobile = false }: SensoryFriendlyModeProps) {
  const [isEnabled, setIsEnabled] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Load preference from localStorage on mount
  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('sensory-friendly-mode')
    if (saved === 'true') {
      setIsEnabled(true)
      applyMode(true)
    }
  }, [])

  // Apply sensory-friendly mode to document
  const applyMode = (enabled: boolean) => {
    if (typeof window === 'undefined') return

    const root = document.documentElement
    if (enabled) {
      root.style.setProperty('--sensory-friendly', '1')
      root.classList.add('sensory-friendly-mode')
      // Disable all animations via CSS
      document.body.style.setProperty('--motion-enabled', '0')
    } else {
      root.style.setProperty('--sensory-friendly', '0')
      root.classList.remove('sensory-friendly-mode')
      document.body.style.setProperty('--motion-enabled', '1')
    }
    localStorage.setItem('sensory-friendly-mode', enabled ? 'true' : 'false')
  }

  const toggleMode = () => {
    const newState = !isEnabled
    setIsEnabled(newState)
    applyMode(newState)
  }

  if (!mounted) return null

  return (
    <button
      onClick={toggleMode}
      aria-label={isEnabled ? 'Disable sensory-friendly mode' : 'Enable sensory-friendly mode'}
      aria-pressed={isEnabled}
      role="switch"
      title={isEnabled ? 'Sensory-friendly mode: ON' : 'Sensory-friendly mode: OFF'}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: isMobile ? '0.75rem 1rem' : '0.5rem 0.75rem',
        minHeight: isMobile ? '56px' : '44px',
        minWidth: isMobile ? '56px' : 'auto',
        backgroundColor: isEnabled ? '#e8ede5' : 'transparent',
        border: `1px solid ${isEnabled ? colors.sage[400] : colors.warmGray[300]}`,
        borderRadius: '0.375rem',
        cursor: 'pointer',
        fontSize: isMobile ? '0.9rem' : '0.85rem',
        fontWeight: 500,
        color: isEnabled ? colors.sage[700] : colors.warmGray[700],
        transition: 'none', // Disable transition in this component itself
        whiteSpace: 'nowrap',
      }}
    >
      <svg
        width={isMobile ? '24' : '20'}
        height={isMobile ? '24' : '20'}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {isEnabled ? (
          // Eye icon (mode enabled)
          <>
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </>
        ) : (
          // Eye-off icon (mode disabled)
          <>
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
            <line x1="1" y1="1" x2="23" y2="23" />
          </>
        )}
      </svg>
      {!isMobile && (
        <span>{isEnabled ? 'Sensory Mode' : 'Accessibility'}</span>
      )}
    </button>
  )
}
