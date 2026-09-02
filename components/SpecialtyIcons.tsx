'use client'

/**
 * Specialty SVG Icons - replacing emoji with distinctive, accessible icons
 * Each specialty gets a unique icon that reinforces its visual identity
 */

interface IconProps {
  size?: number
  color?: string
  className?: string
}

// Perinatal - Maternal & Birth (soft, nurturing)
export function PerinatalIcon({ size = 24, color = 'var(--secondary-sand-600)', className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Perinatal therapy icon"
    >
      {/* Mother & child silhouette */}
      <circle cx="12" cy="8" r="3" fill={color} />
      <path
        d="M12 11C9.24 11 7 13.24 7 16v6h10v-6c0-2.76-2.24-5-5-5z"
        fill={color}
        opacity="0.8"
      />
      <circle cx="16" cy="18" r="2.5" fill={color} opacity="0.6" />
      <path
        d="M16 20.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
        fill={color}
        opacity="0.4"
      />
    </svg>
  )
}

// ADHD - Brain & Energy (bright, dynamic)
export function ADHDIcon({ size = 24, color = 'var(--light-linen-900)', className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="ADHD therapy icon"
    >
      {/* Brain outline */}
      <path
        d="M12 2c-2.2 0-4 1.8-4 4v2c0 1.1-.9 2-2 2s-2-.9-2-2V6c0-3.3 2.7-6 6-6s6 2.7 6 6v2c0 1.1-.9 2-2 2s-2-.9-2-2V6c0-2.2-1.8-4-4-4z"
        fill={color}
        opacity="0.3"
      />
      {/* Energy nodes */}
      <circle cx="6" cy="12" r="1.5" fill={color} />
      <circle cx="12" cy="10" r="1.5" fill={color} />
      <circle cx="18" cy="12" r="1.5" fill={color} />
      <circle cx="15" cy="17" r="1.5" fill={color} />
      <circle cx="9" cy="17" r="1.5" fill={color} />
      {/* Connecting lines (neural pathways) */}
      <line x1="6" y1="12" x2="12" y2="10" stroke={color} strokeWidth="1" opacity="0.5" />
      <line x1="12" y1="10" x2="18" y2="12" stroke={color} strokeWidth="1" opacity="0.5" />
      <line x1="18" y1="12" x2="15" y2="17" stroke={color} strokeWidth="1" opacity="0.5" />
      <line x1="15" y1="17" x2="9" y2="17" stroke={color} strokeWidth="1" opacity="0.5" />
      <line x1="9" y1="17" x2="6" y2="12" stroke={color} strokeWidth="1" opacity="0.5" />
    </svg>
  )
}

// Career - Upward Path (professional, growth)
export function CareerIcon({ size = 24, color = 'var(--neutral-sage-900)', className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Career therapy icon"
    >
      {/* Briefcase */}
      <rect x="3" y="7" width="18" height="11" rx="2" fill="none" stroke={color} strokeWidth="1.5" />
      <path d="M8 7V5c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2" stroke={color} strokeWidth="1.5" />
      <line x1="12" y1="11" x2="12" y2="15" stroke={color} strokeWidth="1.5" />
      {/* Upward arrow */}
      <path d="M16 14l-4-3-4 3" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="12" y1="17" x2="12" y2="11" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

// Grief - Heart & Compass (holding space, direction)
export function GriefIcon({ size = 24, color = 'var(--neutral-sage-900)', className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Grief therapy icon"
    >
      {/* Heart outline */}
      <path
        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
      />
      {/* Compass point (smaller, subtle) */}
      <circle cx="12" cy="12" r="2" fill={color} opacity="0.5" />
      <line x1="12" y1="9" x2="12" y2="10" stroke={color} strokeWidth="1" opacity="0.6" />
    </svg>
  )
}

// Couples - Connected Hearts (intimacy, partnership)
export function CouplesIcon({ size = 24, color = 'var(--primary-bronze-500)', className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Couples therapy icon"
    >
      {/* Two interlocked hearts */}
      <path
        d="M10 20s-6-5-6-10a4 4 0 0 1 4-4c1.25 0 2.5.5 3 1 .5-.5 1.75-1 3-1a4 4 0 0 1 4 4c0 5-6 10-6 10z"
        stroke={color}
        strokeWidth="1.5"
        fill={color}
        opacity="0.3"
      />
      <path
        d="M14 20s6-5 6-10a4 4 0 0 0-4-4c-1.25 0-2.5.5-3 1-.5-.5-1.75-1-3-1a4 4 0 0 0-4 4c0 5 6 10 6 10z"
        stroke={color}
        strokeWidth="1.5"
        fill={color}
        opacity="0.6"
      />
      <path d="M12 16c0 0 2-2 2-4s-.5-3-2-3c-1.5 0-2 1-2 3s2 4 2 4z" fill={color} opacity="0.4" />
    </svg>
  )
}

// Men - Strong & Vulnerable (balance)
export function MenIcon({ size = 24, color = 'var(--neutral-sage-900)', className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Men's therapy icon"
    >
      {/* Figure - shoulder & body */}
      <circle cx="12" cy="6" r="2.5" fill={color} />
      <path d="M12 8.5c-2.2 0-4 1.8-4 4v8h8v-8c0-2.2-1.8-4-4-4z" fill={color} opacity="0.7" />
      {/* Heart overlay (vulnerability) */}
      <path
        d="M14 12c0-1 -0.5-1.5-1-1.5s-1 0.5-1 1.5"
        fill={color}
        opacity="0.3"
      />
    </svg>
  )
}

// Generic therapeutic icon for other specialty pages
export function TherapyIcon({ size = 24, color = 'var(--neutral-sage-700)', className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Therapy icon"
    >
      {/* Hands in care gesture */}
      <path
        d="M8 12c-2.2 0-4 1.8-4 4s1.8 4 4 4c2.2 0 4-1.8 4-4s-1.8-4-4-4z"
        fill={color}
        opacity="0.3"
      />
      <path
        d="M16 12c-2.2 0-4 1.8-4 4s1.8 4 4 4c2.2 0 4-1.8 4-4s-1.8-4-4-4z"
        fill={color}
        opacity="0.5"
      />
      <circle cx="12" cy="10" r="3" fill={color} opacity="0.2" />
    </svg>
  )
}
