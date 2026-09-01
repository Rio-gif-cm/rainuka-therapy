import type { ReactNode } from 'react'
import Link from 'next/link'

/**
 * SpecialtyPage — the single shared visual template for every specialty page
 * (/perinatal, /adhd, /career, /grief, /couples, /men).
 *
 * Every specialty page is composed from these primitives so that hero treatment,
 * section rhythm, card style, callouts, FAQ and closing CTA are identical across
 * personas. The ONLY thing that varies per page is the accent token below.
 *
 * All components are server components (no client JS) — the pages stay static.
 */

/* ------------------------------------------------------------------ */
/* Accent tokens                                                       */
/* ------------------------------------------------------------------ */

export interface SpecialtyAccent {
  /** Decorative accent: borders, rules, icon fills, card top-edge. */
  accent: string
  /** WCAG-AA compliant version of the accent for text on light backgrounds. */
  accentText: string
  /** Deep accent used as a solid background behind white text (CTA band). */
  accentDeep: string
  /** Soft accent wash for callouts / tinted sections. */
  tint: string
  /** Slightly stronger accent wash for nested emphasis. */
  tintStrong: string
  /** Hero gradient starting colour. */
  heroTint: string
}

export const specialtyAccents = {
  // perinatal — soft pink/rose. Nurturing, maternal, compassionate
  perinatal: {
    accent: '#e8a8a0',        // soft rose-500
    accentText: '#c97660',    // rose-700  (AA on white)
    accentDeep: '#b85a47',    // rose-800
    tint: 'rgba(232, 168, 160, 0.08)',
    tintStrong: 'rgba(201, 118, 96, 0.14)',
    heroTint: 'rgba(232, 168, 160, 0.12)',
  },
  // adhd — energetic orange. Dynamic, bright, forward
  adhd: {
    accent: '#ff8c42',        // energetic orange-500
    accentText: '#e67e31',    // orange-700  (AA on white)
    accentDeep: '#d47120',    // orange-800
    tint: 'rgba(255, 140, 66, 0.09)',
    tintStrong: 'rgba(230, 126, 49, 0.15)',
    heroTint: 'rgba(255, 140, 66, 0.10)',
  },
  // career — professional blue. Confident, clear, upward
  career: {
    accent: '#1e88e5',        // professional blue-500
    accentText: '#1565c0',    // blue-700 (AA on white)
    accentDeep: '#0d47a1',    // blue-900
    tint: 'rgba(30, 136, 229, 0.08)',
    tintStrong: 'rgba(21, 101, 192, 0.14)',
    heroTint: 'rgba(30, 136, 229, 0.10)',
  },
  // grief — calm blue. Deep, holding, composed
  grief: {
    accent: '#4d6a86',        // calm dusk-600
    accentText: '#334458',    // dusk-800 (AA on white)
    accentDeep: '#25364a',    // dusk-900
    tint: 'rgba(77, 106, 134, 0.09)',
    tintStrong: 'rgba(51, 68, 88, 0.15)',
    heroTint: 'rgba(77, 106, 134, 0.12)',
  },
  // couples — warm peach. Intimate, connected, warm
  couples: {
    accent: '#f4a59d',        // warm peach-500
    accentText: '#e07856',    // peach-700 (AA on white)
    accentDeep: '#c85a3a',    // peach-800
    tint: 'rgba(244, 165, 157, 0.09)',
    tintStrong: 'rgba(224, 120, 86, 0.15)',
    heroTint: 'rgba(244, 165, 157, 0.11)',
  },
  // men — steel blue. Strong, steady, trustworthy
  men: {
    accent: '#2c5aa0',        // steel blue-600
    accentText: '#1e3a8a',    // blue-900 (AA on white)
    accentDeep: '#15237e',    // dark blue
    tint: 'rgba(44, 90, 160, 0.08)',
    tintStrong: 'rgba(30, 58, 138, 0.14)',
    heroTint: 'rgba(44, 90, 160, 0.10)',
  },
} satisfies Record<string, SpecialtyAccent>

export type SpecialtyKey = keyof typeof specialtyAccents

/* ------------------------------------------------------------------ */
/* Hero — identical structure on every specialty page                  */
/* ------------------------------------------------------------------ */

interface SpecialtyHeroProps {
  accent: SpecialtyAccent
  /** Small uppercase pill above the headline, e.g. "Perinatal Mental Health". */
  eyebrow: string
  title: string
  /** Accent-coloured one-line promise directly under the headline. */
  lead: string
  /** Supporting paragraph. */
  description: ReactNode
  ctaLabel: string
  ctaHref?: string
  /** Short trust signals rendered as a single separated row. */
  trust?: string[]
}

export function SpecialtyHero({
  accent,
  eyebrow,
  title,
  lead,
  description,
  ctaLabel,
  ctaHref = '/booking',
  trust = ['Free 30-minute consultation', 'Telehealth in 28 states', 'Confidential'],
}: SpecialtyHeroProps) {
  return (
    <section
      className="hero-section py-20"
      style={{
        background: `linear-gradient(135deg, ${accent.heroTint} 0%, #faf9f7 55%, #f8faf7 100%)`,
      }}
    >
      <div className="container-base text-center animate-fade-in-up">
        <div className="max-w-3xl mx-auto">
          <p
            className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-semibold uppercase"
            style={{
              backgroundColor: accent.tintStrong,
              color: accent.accentText,
              letterSpacing: '0.12em',
            }}
          >
            {eyebrow}
          </p>

          <h1 className="text-5xl font-serif font-bold text-warm-gray-900 mb-4">{title}</h1>

          <p
            className="text-xl font-semibold mb-4 max-w-2xl mx-auto"
            style={{ color: accent.accentText }}
          >
            {lead}
          </p>

          <p className="text-warm-gray-600 max-w-2xl mx-auto mb-8">{description}</p>

          {/* First gate CTA: "See if this applies to you" — scrolls to content */}
          <Link href={`#suitability`} className="inline-block btn btn-primary">
            See if this applies to you
          </Link>

          {trust.length > 0 && (
            <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-warm-gray-600 list-none p-0">
              {trust.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span aria-hidden="true" style={{ color: accent.accentText }}>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Section rhythm — alternating tones, one shared width                */
/* ------------------------------------------------------------------ */

export type SectionTone = 'white' | 'sage' | 'cream' | 'tint'

const toneClass: Record<Exclude<SectionTone, 'tint'>, string> = {
  white: 'bg-white',
  sage: 'bg-sage-50',
  cream: 'bg-cream-50',
}

interface SpecialtySectionProps {
  children: ReactNode
  tone?: SectionTone
  accent?: SpecialtyAccent
  /** Content width. 'narrow' for prose, 'wide' for grids. */
  width?: 'narrow' | 'wide'
  id?: string
}

export function SpecialtySection({
  children,
  tone = 'white',
  accent,
  width = 'narrow',
  id,
}: SpecialtySectionProps) {
  const isTint = tone === 'tint'
  return (
    <section
      id={id}
      className={`section-padding ${isTint ? '' : toneClass[tone]}`}
      style={isTint && accent ? { backgroundColor: accent.tint } : undefined}
    >
      <div className="container-base">
        <div className={width === 'narrow' ? 'max-w-3xl mx-auto' : 'max-w-5xl mx-auto'}>
          {children}
        </div>
      </div>
    </section>
  )
}

interface SpecialtySectionHeaderProps {
  accent: SpecialtyAccent
  eyebrow?: string
  title: ReactNode
  intro?: ReactNode
}

export function SpecialtySectionHeader({
  accent,
  eyebrow,
  title,
  intro,
}: SpecialtySectionHeaderProps) {
  return (
    <header className="text-center mb-12">
      {eyebrow && (
        <p
          className="text-xs font-semibold uppercase mb-3"
          style={{ color: accent.accentText, letterSpacing: '0.12em' }}
        >
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-warm-gray-900 mb-0">
        {title}
      </h2>
      <span
        aria-hidden="true"
        className="block mx-auto mt-5 rounded-full"
        style={{ width: '3.5rem', height: '3px', backgroundColor: accent.accent }}
      />
      {intro && (
        <p className="text-warm-gray-600 mt-6 max-w-2xl mx-auto mb-0">{intro}</p>
      )}
    </header>
  )
}

/* ------------------------------------------------------------------ */
/* Cards — one card style, everywhere                                  */
/* ------------------------------------------------------------------ */

interface SpecialtyGridProps {
  children: ReactNode
  cols?: 1 | 2
}

export function SpecialtyGrid({ children, cols = 2 }: SpecialtyGridProps) {
  return (
    <div className={`grid gap-6 ${cols === 2 ? 'md:grid-cols-2' : ''}`}>{children}</div>
  )
}

interface SpecialtyCardProps {
  accent: SpecialtyAccent
  title?: ReactNode
  icon?: string
  eyebrow?: string
  children: ReactNode
}

export function SpecialtyCard({ accent, title, icon, eyebrow, children }: SpecialtyCardProps) {
  return (
    <div
      className="h-full p-6 md:p-7 rounded-xl bg-white"
      style={{
        borderTop: `3px solid ${accent.accent}`,
        border: '1px solid rgba(221, 212, 204, 0.7)',
        borderTopWidth: '3px',
        borderTopColor: accent.accent,
        boxShadow: '0 1px 2px rgba(63, 57, 53, 0.04), 0 10px 24px rgba(63, 57, 53, 0.06)',
      }}
    >
      {icon && (
        <p className="text-3xl mb-3 mt-0" aria-hidden="true">
          {icon}
        </p>
      )}
      {eyebrow && (
        <p
          className="text-xs font-semibold uppercase mb-2"
          style={{ color: accent.accentText, letterSpacing: '0.1em' }}
        >
          {eyebrow}
        </p>
      )}
      {title && (
        <h3 className="text-xl font-serif font-bold text-warm-gray-900 mb-3">{title}</h3>
      )}
      <div className="text-warm-gray-700 specialty-card-body">{children}</div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Callout note — the one shared "highlight box"                       */
/* ------------------------------------------------------------------ */

interface SpecialtyNoteProps {
  accent: SpecialtyAccent
  title?: ReactNode
  children: ReactNode
  /** 'accent' uses the persona colour; 'caution' is reserved for safety copy. */
  variant?: 'accent' | 'caution'
}

export function SpecialtyNote({
  accent,
  title,
  children,
  variant = 'accent',
}: SpecialtyNoteProps) {
  const barColor = variant === 'caution' ? '#84603c' : accent.accent
  const bg = variant === 'caution' ? 'rgba(132, 96, 60, 0.07)' : accent.tint
  const titleColor = variant === 'caution' ? '#84603c' : accent.accentText

  return (
    <div
      className="p-6 rounded-lg"
      style={{ backgroundColor: bg, borderLeft: `4px solid ${barColor}` }}
    >
      {title && (
        <p className="font-semibold mb-2 mt-0" style={{ color: titleColor }}>
          {title}
        </p>
      )}
      <div className="text-warm-gray-700 specialty-card-body">{children}</div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Lists                                                               */
/* ------------------------------------------------------------------ */

interface SpecialtyChecklistProps {
  accent: SpecialtyAccent
  items: ReactNode[]
  /** Marker glyph. Defaults to a checkmark. */
  marker?: string
  cols?: 1 | 2
}

export function SpecialtyChecklist({
  accent,
  items,
  marker = '✓',
  cols = 2,
}: SpecialtyChecklistProps) {
  return (
    <ul className={`grid gap-x-8 gap-y-4 list-none p-0 m-0 ${cols === 2 ? 'md:grid-cols-2' : ''}`}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-warm-gray-700">
          <span
            aria-hidden="true"
            className="flex-shrink-0 font-semibold"
            style={{ color: accent.accentText, lineHeight: '1.85' }}
          >
            {marker}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

/* ------------------------------------------------------------------ */
/* Stats                                                               */
/* ------------------------------------------------------------------ */

interface SpecialtyStatProps {
  accent: SpecialtyAccent
  value: string
  label: ReactNode
}

export function SpecialtyStat({ accent, value, label }: SpecialtyStatProps) {
  return (
    <div
      className="text-center p-6 rounded-xl bg-white h-full"
      style={{
        border: '1px solid rgba(221, 212, 204, 0.7)',
        borderTop: `3px solid ${accent.accent}`,
        boxShadow: '0 1px 2px rgba(63, 57, 53, 0.04), 0 10px 24px rgba(63, 57, 53, 0.06)',
      }}
    >
      <p className="text-4xl font-bold mb-2 mt-0" style={{ color: accent.accentText }}>
        {value}
      </p>
      <p className="text-warm-gray-600 mb-0">{label}</p>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* FAQ — one accordion style for every page                            */
/* ------------------------------------------------------------------ */

export interface SpecialtyFAQItem {
  q: string
  a: ReactNode
}

interface SpecialtyFAQProps {
  accent: SpecialtyAccent
  items: SpecialtyFAQItem[]
}

export function SpecialtyFAQ({ accent, items }: SpecialtyFAQProps) {
  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <details
          key={i}
          className="group rounded-xl bg-white overflow-hidden"
          style={{
            border: '1px solid rgba(221, 212, 204, 0.7)',
            borderLeft: `3px solid ${accent.accent}`,
          }}
        >
          <summary className="cursor-pointer list-none p-5 md:p-6 flex justify-between items-start gap-4 font-semibold text-warm-gray-900">
            <span>{item.q}</span>
            <span
              aria-hidden="true"
              className="flex-shrink-0 transition-transform group-open:rotate-180"
              style={{ color: accent.accentText }}
            >
              ▼
            </span>
          </summary>
          <div className="px-5 md:px-6 pb-6 -mt-1 text-warm-gray-700 specialty-card-body">
            {typeof item.a === 'string' ? <p className="mb-0">{item.a}</p> : item.a}
          </div>
        </details>
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Closing CTA band — identical on every page                          */
/* ------------------------------------------------------------------ */

interface SpecialtyCTAProps {
  accent: SpecialtyAccent
  title: string
  body: ReactNode
  ctaLabel: string
  ctaHref?: string
  footnote?: string
}

export function SpecialtyCTA({
  accent,
  title,
  body,
  ctaLabel,
  ctaHref = '/booking',
  footnote = 'Free 30-minute consultation • Confidential • Telehealth in 28 states',
}: SpecialtyCTAProps) {
  return (
    <section
      className="section-padding text-white"
      style={{ backgroundColor: accent.accentDeep }}
    >
      <div className="container-base text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white">{title}</h2>
          <p className="text-lg mb-8 text-white" style={{ opacity: 0.92 }}>
            {body}
          </p>
          <Link
            href={ctaHref}
            className="inline-block bg-white px-8 py-4 font-semibold rounded-lg transition-transform hover:-translate-y-0.5"
            style={{ color: accent.accentDeep }}
          >
            Book my session
          </Link>
          {footnote && (
            <p className="text-sm mt-6 mb-0 text-white" style={{ opacity: 0.8 }}>
              {footnote}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
