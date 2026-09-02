'use client'

import Link from 'next/link'
import Image from 'next/image'
import { colors, layout } from '@/app/styles'
import { useState } from 'react'

/**
 * HeroSection - premium, calm, layered.
 *
 * Visual system:
 *  - Layer 0: warm paper base (#faf9f7)
 *  - Layer 1: soft gradient mesh (three low-opacity radial blooms, sage + warm accent)
 *  - Layer 2: fine grain texture (inline SVG fractal noise, ~3% opacity)
 *  - Layer 3: content on a generous typographic scale with a strict vertical rhythm
 *
 * Nothing moves quickly, nothing shouts. Depth comes from stacked translucency
 * rather than hard borders or heavy shadows.
 *
 * REFACTORED: Mobile-first Tailwind with responsive prefixes (sm:, md:, lg:)
 * Removed JS state for responsive logic; uses @media queries instead.
 */

/* Fine film grain - keeps flat gradients from banding and adds tactile warmth. */
const GRAIN =
  "url(\\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\\\")"

/* ── Typographic scale (rem) ───────────────────────────────────────────────
   eyebrow .8125 · micro .8125 · small .9375 · body 1.0625 · lede 1.1875
   display clamp(2.6 → 4.25)
   Vertical rhythm is a 4px base: 0.5 / 1 / 1.5 / 2 / 3 / 4.5 / 6 rem
   ───────────────────────────────────────────────────────────────────────── */

type Persona = {
  id: string
  label: string
  emoji: string
  description: string
  link: string
}

const personas: Persona[] = [
  {
    id: 'perinatal',
    label: 'Perinatal Mental Health',
    emoji: '🤰',
    description:
      "Pregnancy loss, infertility, postpartum anxiety-what you're carrying isn't weakness.",
    link: '/perinatal',
  },
  {
    id: 'adhd',
    label: 'ADHD Therapy',
    emoji: '🧠',
    description: 'Late ADHD diagnosis? That shame + relief = what we work with.',
    link: '/adhd',
  },
  {
    id: 'career',
    label: 'Career Transitions',
    emoji: '🚀',
    description:
      "Career doubt, burnout, identity questions-transitions are hard. You don't have to figure it out alone.",
    link: '/career',
  },
]

const trustSignals = [
  { icon: 'video', label: 'Telehealth', sub: 'Sliding scale available' },
  { icon: 'shield', label: 'HIPAA secure', sub: 'Private, always' },
  { icon: 'clock', label: 'Reply within 24h', sub: 'Booking 1-2 weeks out' },
]

function TrustIcon({ name }: { name: string }) {
  const common = {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: colors.sage[600],
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
    focusable: 'false' as const,
  }

  if (name === 'shield') {
    return (
      <svg {...common}>
        <path d="M12 3l7 3v5.5c0 4.3-2.9 8.2-7 9.5-4.1-1.3-7-5.2-7-9.5V6l7-3z" />
        <path d="M9.2 12.2l2 2 3.6-3.9" />
      </svg>
    )
  }
  if (name === 'clock') {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.6V12l2.8 1.7" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <rect x="3" y="6.5" width="12" height="11" rx="2.5" />
      <path d="M15 11l6-3.2v8.4L15 13z" />
    </svg>
  )
}

export default function HeroSection() {
  const [selectedPersona, setSelectedPersona] = useState<string | null>(null)

  const active = personas.find((p) => p.id === selectedPersona) ?? null

  return (
    <section
      style={{
        position: 'relative',
        isolation: 'isolate',
        overflow: 'hidden',
        backgroundColor: colors.warmGray[50],
        /* Hero band on the 8px scale: --section-y-lg (80/96/128px) vertical,
           --container-gutter horizontal. */
        paddingTop: layout.sectionYLg,
        paddingBottom: layout.sectionYLg,
        paddingLeft: layout.gutter,
        paddingRight: layout.gutter,
      }}
    >
      {/* ── Layer 1: soft gradient mesh ─────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: '-20% -10%',
          zIndex: -2,
          pointerEvents: 'none',
          background: [
            'radial-gradient(46rem 34rem at 12% 8%, rgba(157, 187, 141, 0.30) 0%, rgba(157, 187, 141, 0) 62%)',
            'radial-gradient(40rem 32rem at 88% 18%, rgba(209, 220, 200, 0.55) 0%, rgba(209, 220, 200, 0) 60%)',
            'radial-gradient(34rem 28rem at 74% 92%, rgba(217, 119, 87, 0.10) 0%, rgba(217, 119, 87, 0) 65%)',
            'radial-gradient(38rem 30rem at 24% 96%, rgba(237, 232, 227, 0.85) 0%, rgba(237, 232, 227, 0) 62%)',
          ].join(','),
          filter: 'blur(6px)',
        }}
      />

      {/* ── Layer 2: grain ──────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: -1,
          pointerEvents: 'none',
          backgroundImage: GRAIN,
          backgroundRepeat: 'repeat',
          opacity: 0.055,
          mixBlendMode: 'multiply',
        }}
      />

      {/* Bottom fade - lets the hero dissolve into the next section */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: '9rem',
          zIndex: -1,
          pointerEvents: 'none',
          background: `linear-gradient(to bottom, rgba(250,249,247,0) 0%, ${colors.warmGray[50]} 92%)`,
        }}
      />

      <div
        style={{
          maxWidth: '76rem',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem', // mobile: 3rem (24px)
          alignItems: 'center',
        }}
        className="md:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] md:gap-16" /* md: 4rem (64px) */
      >
        {/* ══ Column A - the message ══════════════════════════════════════ */}
        <div className="text-center md:text-left">
          {/* Eyebrow */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.625rem',
              padding: '0.4375rem 0.9375rem 0.4375rem 0.75rem',
              borderRadius: '999px',
              backgroundColor: 'rgba(255, 255, 255, 0.72)',
              border: `1px solid ${colors.sage[200]}`,
              boxShadow: '0 1px 2px rgba(63, 57, 53, 0.04)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              marginBottom: '1.5rem', // sm: 1.5rem, md: 2rem
              fontSize: '0.8125rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: colors.sage[700],
              lineHeight: 1,
            }}
            className="md:mb-8"
          >
            <span
              className="hero-pulse-dot"
              aria-hidden="true"
              style={{
                width: '0.4375rem',
                height: '0.4375rem',
                borderRadius: '999px',
                backgroundColor: colors.sage[600],
                flexShrink: 0,
              }}
            />
            <span>Perinatal · ADHD · Career</span>
          </div>

          {/* Display headline */}
          <h1
            style={{
              fontFamily: 'var(--font-merriweather), Georgia, serif',
              fontSize: 'clamp(2.6rem, 5.6vw, 4.25rem)',
              fontWeight: 700,
              lineHeight: 1.06,
              letterSpacing: '-0.028em',
              color: colors.warmGray[900],
              margin: 0,
              marginBottom: '1.5rem',
              textWrap: 'balance',
              maxWidth: '18ch',
            }}
            className="md:mx-0 mx-auto"
          >
            You don&apos;t have to
            <br />
            carry this{' '}
            <span
              style={{
                fontStyle: 'italic',
                color: colors.sage[700],
                position: 'relative',
                whiteSpace: 'nowrap',
              }}
            >
              alone
              <span
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: '0.04em',
                  right: '0.04em',
                  bottom: '0.06em',
                  height: '0.32em',
                  borderRadius: '999px',
                  background: `linear-gradient(90deg, rgba(157,187,141,0.42), rgba(209,220,200,0.18))`,
                  zIndex: -1,
                }}
              />
            </span>
          </h1>

          {/* ── Trust signals badges (below headline) ──────────────────────── */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.875rem',
              margin: 0,
              marginBottom: '2rem',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            className="md:mx-0 mx-auto md:justify-start md:mb-8 md:gap-6"
          >
            {/* Badge 1: Licensed Therapist (Green) */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '44px',
                height: '44px',
                borderRadius: '0.5rem',
                backgroundColor: '#10b981',
                border: 'none',
                boxShadow: '0 2px 6px rgba(16, 185, 129, 0.25)',
                flexShrink: 0,
              }}
              className="md:w-12 md:h-12"
              title="Licensed Therapist (Canada, CA, FL)"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3l7 3v5.5c0 4.3-2.9 8.2-7 9.5-4.1-1.3-7-5.2-7-9.5V6l7-3z" />
                <path d="M9.2 12.2l2 2 3.6-3.9" />
              </svg>
            </div>

            {/* Badge 2: Now Accepting (Teal) */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '44px',
                height: '44px',
                borderRadius: '0.5rem',
                backgroundColor: '#06b6d4',
                border: 'none',
                boxShadow: '0 2px 6px rgba(6, 182, 212, 0.25)',
                flexShrink: 0,
              }}
              className="md:w-12 md:h-12"
              title="Now accepting new clients"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4M10 12h4" />
              </svg>
            </div>

            {/* Badge 3: 12+ Years (Sage) */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '44px',
                height: '44px',
                borderRadius: '0.5rem',
                backgroundColor: colors.sage[600],
                border: 'none',
                boxShadow: `0 2px 6px rgba(107, 148, 79, 0.25)`,
                flexShrink: 0,
              }}
              className="md:w-12 md:h-12"
              title="12+ years experience"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="8.5" />
                <path d="M12 7.6V12l2.8 1.7" />
              </svg>
            </div>
          </div>

          {/* Subheadline - warm, benefit-focused, concrete specifics */}
          <p
            style={{
              fontSize: 'clamp(1.0625rem, 1.5vw, 1.1875rem)',
              lineHeight: 1.7,
              fontWeight: 500,
              color: colors.warmGray[700],
              margin: 0,
              marginBottom: '2rem',
              maxWidth: '38rem',
              textWrap: 'pretty',
            }}
            className="md:mx-0 mx-auto md:mb-8"
          >
            Sliding scale therapy for perinatal anxiety, adult ADHD, and career transitions. <strong style={{ fontWeight: 600, color: colors.sage[700] }}>First 15 min free.</strong>
          </p>

          {/* Lede */}
          <p
            style={{
              fontSize: 'clamp(1.125rem, 1.6vw, 1.25rem)',
              lineHeight: 1.62,
              fontWeight: 500,
              color: colors.warmGray[900],
              margin: 0,
              marginBottom: '1rem',
              maxWidth: '34rem',
              textWrap: 'pretty',
            }}
            className="md:mx-0 mx-auto"
          >
            Perinatal anxiety. Late ADHD. Career doubt. These require
            understanding&mdash;and you&apos;ll get it here.
          </p>

          <p
            style={{
              fontSize: '1.0625rem',
              lineHeight: 1.75,
              color: colors.warmGray[600],
              margin: 0,
              marginBottom: '2rem', // sm: 2rem, md: 2.5rem
              maxWidth: '32rem',
              textWrap: 'pretty',
            }}
            className="md:mx-0 mx-auto md:mb-10"
          >
            I meet you where you are. We work at your pace. You&apos;ll find your
            answers&mdash;not mine.
          </p>

          {/* ── CTAs ──────────────────────────────────────────────────── */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem', // Improved spacing consistency: 16px
              marginBottom: '1.5rem',
            }}
            className="md:flex-row md:justify-start md:gap-6"
          >
            <Link href="/booking" className="hero-cta-primary w-full md:w-auto focus-glow">
              <span>Start Your Free Breakthrough Call</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="hero-cta-arrow transition-transform"
              >
                <path d="M5 12h13M13 6l6 6-6 6" />
              </svg>
            </Link>

            <Link href="/about" className="hero-cta-ghost w-full md:w-auto focus-glow">
              Learn My Approach
            </Link>
          </div>

          {/* Micro-reassurance under the CTA */}
          <p
            style={{
              fontSize: '0.8125rem',
              lineHeight: 1.6,
              color: colors.warmGray[600],
              margin: 0,
              marginBottom: '2.25rem', // sm: 2.25rem, md: 3rem
              letterSpacing: '0.01em',
            }}
            className="md:mb-12"
          >
            Free &middot; 15 minutes &middot; No forms beforehand &middot; No obligation
          </p>

          {/* ── Trust signal row ──────────────────────────────────────── */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'stretch',
              gap: 0,
              paddingTop: '1.5rem',
              borderTop: `1px solid ${colors.warmGray[200]}`,
              maxWidth: '36rem',
            }}
            className="md:justify-start justify-center md:mx-0 mx-auto"
          >
            {trustSignals.map((signal, i) => (
              <div
                key={signal.icon}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5625rem',
                  padding: '0.5rem 0', // mobile stacking: 0.5rem padding-y
                  paddingLeft: i === 0 ? 0 : '1.25rem', // md: left padding between items
                  borderLeft:
                    i === 0
                      ? 'none'
                      : `1px solid ${colors.warmGray[200]}`,
                  flex: '1 1 100%',
                  justifyContent: 'center',
                  textAlign: 'left',
                }}
                className="md:flex-none md:basis-auto md:justify-start md:px-5 md:first:px-0 md:first:border-l-0"
              >
                <span style={{ marginTop: '0.125rem', flexShrink: 0, lineHeight: 0 }}>
                  <TrustIcon name={signal.icon} />
                </span>
                <span>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: colors.warmGray[900],
                      lineHeight: 1.35,
                    }}
                  >
                    {signal.label}
                  </span>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '0.78125rem',
                      color: colors.warmGray[600],
                      lineHeight: 1.45,
                      marginTop: '0.0625rem',
                    }}
                  >
                    {signal.sub}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ══ Column B - the portrait plate (responsive hero image) ════════════ */}
        <div style={{ width: '100%', position: 'relative' }}>
          {/* Aspect ratio container: 4:3.4 on mobile, 4:5 on desktop */}
          <div
            className="hero-plate-wrapper"
            style={{
              position: 'relative',
              aspectRatio: '4 / 3.4',
              borderRadius: '1.75rem',
              overflow: 'hidden',
              background: [
                'radial-gradient(120% 90% at 18% 12%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 55%)',
                `linear-gradient(152deg, ${colors.sage[200]} 0%, ${colors.sage[100]} 38%, ${colors.warmGray[100]} 72%, ${colors.warmGray[50]} 100%)`,
              ].join(','),
              border: '1px solid rgba(255, 255, 255, 0.85)',
              boxShadow: [
                '0 1px 2px rgba(63, 57, 53, 0.04)',
                '0 12px 28px -12px rgba(84, 124, 63, 0.18)',
                '0 40px 72px -32px rgba(63, 57, 53, 0.22)',
              ].join(','),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* grain on the plate too, so it reads as one material */}
            <span
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: GRAIN,
                opacity: 0.06,
                mixBlendMode: 'multiply',
                pointerEvents: 'none',
              }}
            />
            {/* inner top highlight */}
            <span
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to bottom, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 32%)',
                pointerEvents: 'none',
              }}
            />

            {/* Lazy-loaded placeholder image or fallback */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
              }}
            >
              {/* Hero image with lazy loading and responsive sizing */}
              <Image
                src="/images/hero-therapist-portrait.jpg"
                alt="Rainuka Oberoi, Licensed Therapist - Therapist"
                fill
                priority={false}
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 45vw"
                className="hero-image"
                quality={85}
                onError={() => {
                  /* Fallback to placeholder below */
                }}
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
              
              {/* Fallback placeholder content if image fails to load */}
              <div
                className="hero-image-placeholder"
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2rem',
                  zIndex: 0,
                }}
              >
                <div
                  className="hero-leaf"
                  aria-hidden="true"
                  style={{ fontSize: '3.5rem', marginBottom: '1.25rem', opacity: 0.85 }}
                >
                  🌿
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-merriweather), Georgia, serif',
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    color: colors.sage[700],
                    letterSpacing: '-0.01em',
                    margin: 0,
                    marginBottom: '0.375rem',
                  }}
                >
                  Rainuka Oberoi, Licensed Therapist
                </p>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: colors.warmGray[600],
                    margin: 0,
                  }}
                >
                  Therapist • 12+ years experience
                </p>
              </div>
            </div>
          </div>

          {/* Floating glass chip - depth cue over the plate edge */}
          <div
            style={{
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              gap: '0.625rem',
              padding: '0.75rem 1.125rem',
              borderRadius: '1rem',
              backgroundColor: 'rgba(255, 255, 255, 0.82)',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              border: '1px solid rgba(255, 255, 255, 0.9)',
              boxShadow:
                '0 1px 2px rgba(63,57,53,0.05), 0 16px 32px -16px rgba(63, 57, 53, 0.28)',
              whiteSpace: 'nowrap',
              /* Mobile: centered below plate */
              left: '50%',
              transform: 'translateX(-50%)',
              bottom: '-1.25rem',
            }}
            className="md:left-auto md:transform-none md:bottom-8 md:-left-5" /* Desktop: left side, -1.25rem (20px) */
          >
            <TrustIcon name="clock" />
            <span
              style={{
                fontSize: '0.8125rem',
                fontWeight: 600,
                color: colors.warmGray[900],
                letterSpacing: '0.01em',
              }}
            >
              Book within 1&ndash;2 weeks
            </span>
          </div>
        </div>
      </div>

      {/* ══ Persona discovery - full width beneath the fold line ══════════ */}
      <div
        style={{
          maxWidth: '48rem',
          margin: '4rem auto 0', // sm: 4rem top, md: 5rem top
          position: 'relative',
        }}
        className="md:mt-20"
      >
        <div
          style={{
            padding: '1.75rem 1.25rem', // mobile: 1.75rem 1.25rem
            borderRadius: '1.5rem',
            backgroundColor: 'rgba(255, 255, 255, 0.66)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: `1px solid ${colors.sage[100]}`,
            boxShadow:
              '0 1px 2px rgba(63,57,53,0.03), 0 24px 48px -28px rgba(84, 124, 63, 0.20)',
          }}
          className="md:p-10"
        >
          <p
            style={{
              fontSize: '0.9375rem',
              fontWeight: 600,
              lineHeight: 1.6,
              color: colors.warmGray[900],
              textAlign: 'center',
              margin: 0,
              marginBottom: '1.5rem',
              textWrap: 'balance',
            }}
          >
            Which one resonates?{' '}
            <span style={{ fontWeight: 400, color: colors.warmGray[600] }}>
              (Many of you see yourselves in multiple&mdash;and that&apos;s the work we
              do.)
            </span>
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr', // mobile: 1 column
              gap: '0.75rem',
            }}
            className="md:grid-cols-3"
          >
            {personas.map((persona) => {
              const isActive = selectedPersona === persona.id
              return (
                <button
                  key={persona.id}
                  type="button"
                  aria-pressed={isActive}
                  className="hero-chip"
                  onClick={() =>
                    setSelectedPersona(isActive ? null : persona.id)
                  }
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: '0.875rem 0.875rem',
                    borderRadius: '0.875rem',
                    border: `1px solid ${isActive ? colors.sage[500] : colors.sage[200]}`,
                    backgroundColor: isActive ? colors.sage[50] : 'rgba(255,255,255,0.9)',
                    color: colors.warmGray[900],
                    fontSize: '0.875rem',
                    fontWeight: isActive ? 600 : 500,
                    lineHeight: 1.35,
                    textAlign: 'center',
                    cursor: 'pointer',
                    boxShadow: isActive
                      ? `0 0 0 3px rgba(130, 168, 108, 0.16), 0 6px 16px -8px rgba(84,124,63,0.35)`
                      : '0 1px 2px rgba(63,57,53,0.04)',
                  }}
                >
                  <span aria-hidden="true" style={{ fontSize: '1rem', lineHeight: 1 }}>
                    {persona.emoji}
                  </span>
                  <span>{persona.label}</span>
                </button>
              )
            })}
          </div>

          {active && (
            <div
              className="hero-reveal"
              style={{
                marginTop: '1.5rem',
                paddingTop: '1.5rem',
                borderTop: `1px solid ${colors.sage[100]}`,
              }}
            >
              <p
                style={{
                  fontSize: '0.9375rem',
                  lineHeight: 1.7,
                  color: colors.warmGray[700],
                  textAlign: 'center',
                  margin: 0,
                  marginBottom: '1.5rem',
                  textWrap: 'pretty',
                }}
              >
                {active.description}
              </p>

              <div
                style={{
                  display: 'flex',
                  gap: '1rem',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <Link href="/booking" className="hero-cta-primary hero-cta-sm">
                  Find Your Solution
                </Link>
                <Link href={active.link} className="hero-cta-ghost hero-cta-sm">
                  Explore Your Path →
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Fear-reduction + first-session clarity */}
        <p
          style={{
            fontSize: '0.9375rem',
            fontStyle: 'italic',
            color: colors.sage[700],
            textAlign: 'center',
            lineHeight: 1.7,
            margin: '2.5rem auto 0.75rem',
            maxWidth: '38rem',
            textWrap: 'pretty',
          }}
        >
          First time or returning: you belong here. Seeking help isn&apos;t
          weakness&mdash;it&apos;s wisdom.
        </p>
        <p
          style={{
            fontSize: '0.9375rem',
            color: colors.warmGray[600],
            textAlign: 'center',
            lineHeight: 1.75,
            margin: '0 auto',
            maxWidth: '38rem',
            textWrap: 'pretty',
          }}
        >
          First session: you talk, I listen. We&apos;ll know within 15 minutes if we
          fit. You lead the pace.
        </p>

        {/* What happens next - quiet, hairline-ruled */}
        <div
          style={{
            margin: '2.5rem auto 0',
            maxWidth: '42rem',
            padding: '1.25rem 1.25rem', // mobile: 1.25rem
            borderRadius: '1rem',
            backgroundColor: 'rgba(248, 250, 247, 0.8)',
            border: `1px solid ${colors.sage[100]}`,
            borderLeft: `3px solid ${colors.sage[400]}`,
            textAlign: 'center',
          }}
          className="md:p-6"
        >
          <p
            style={{
              fontSize: '0.9375rem',
              lineHeight: 1.7,
              color: colors.warmGray[700],
              margin: 0,
              textWrap: 'pretty',
            }}
          >
            <span
              style={{
                color: colors.sage[700],
                fontWeight: 600,
                letterSpacing: '0.01em',
              }}
            >
              What happens next:
            </span>{' '}
            You pick a time. We talk. No forms beforehand. No judgment. Just a
            conversation to see if we&apos;re a fit.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroReveal {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.45; transform: scale(0.82); }
        }
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        .hero-reveal { animation: heroReveal 0.32s ease-out both; }
        .hero-pulse-dot { animation: heroDot 3.2s ease-in-out infinite; }
        .hero-leaf { animation: heroFloat 7s ease-in-out infinite; }

        /* Hero plate wrapper with responsive aspect ratio */
        .hero-plate-wrapper {
          transition: transform 0.5s cubic-bezier(0.2, 0.7, 0.3, 1), box-shadow 0.5s ease;
        }
        .hero-plate-wrapper:hover {
          transform: translateY(-4px);
        }
        /* Desktop: 4:5 aspect ratio */
        @media (min-width: 768px) {
          .hero-plate-wrapper {
            aspect-ratio: 4 / 5 !important;
          }
        }

        /* Hero image optimization for Core Web Vitals */
        .hero-image {
          transition: opacity 0.3s ease-in-out;
          will-change: transform;
        }
        .hero-image-placeholder {
          /* Show placeholder while image loads or if it fails */
          background: rgba(255, 255, 255, 0.5);
        }

        .hero-chip { transition: transform 0.18s ease, background-color 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease; }
        .hero-chip:hover { border-color: ${colors.sage[400]}; background-color: ${colors.sage[50]}; transform: translateY(-2px); box-shadow: 0 8px 18px -10px rgba(84,124,63,0.35); }
        .hero-chip:active { transform: translateY(0); }
        .hero-chip:focus-visible { outline: 2px solid ${colors.sage[600]}; outline-offset: 3px; }

        /* ── Primary CTA: layered sage with inner highlight ─────────────── */
        .hero-cta-primary {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 1rem 1.75rem;
          border-radius: 0.875rem;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: -0.005em;
          text-decoration: none;
          color: #fff;
          background: linear-gradient(180deg, ${colors.sage[500]} 0%, ${colors.sage[600]} 55%, ${colors.sage[700]} 100%);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.28),
            0 1px 2px rgba(63,57,53,0.10),
            0 10px 22px -10px rgba(84, 124, 63, 0.55);
          transition: transform 0.2s cubic-bezier(0.2,0.7,0.3,1), box-shadow 0.2s ease, filter 0.2s ease;
          white-space: nowrap;
        }
        .hero-cta-primary:hover {
          transform: translateY(-2px);
          filter: saturate(1.05);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.32),
            0 2px 4px rgba(63,57,53,0.10),
            0 18px 32px -12px rgba(84, 124, 63, 0.62);
        }
        .hero-cta-primary:active { transform: translateY(0); box-shadow: inset 0 1px 0 rgba(255,255,255,0.2), 0 4px 10px -4px rgba(84,124,63,0.5); }
        .hero-cta-primary:focus-visible { outline: 2px solid ${colors.sage[700]}; outline-offset: 3px; }
        .hero-cta-arrow { transition: transform 0.2s ease; }
        .hero-cta-primary:hover .hero-cta-arrow { transform: translateX(3px); }

        /* ── Ghost CTA: quiet, warm, hairline ──────────────────────────── */
        .hero-cta-ghost {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 1rem 1.5rem;
          border-radius: 0.875rem;
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          color: ${colors.warmGray[900]};
          background-color: rgba(255,255,255,0.7);
          border: 1px solid ${colors.warmGray[200]};
          box-shadow: 0 1px 2px rgba(63,57,53,0.04);
          transition: transform 0.2s cubic-bezier(0.2,0.7,0.3,1), background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
          white-space: nowrap;
        }
        .hero-cta-ghost:hover {
          transform: translateY(-2px);
          background-color: #fff;
          border-color: ${colors.sage[300]};
          color: ${colors.sage[700]};
          box-shadow: 0 12px 24px -14px rgba(63,57,53,0.35);
        }
        .hero-cta-ghost:active { transform: translateY(0); }
        .hero-cta-ghost:focus-visible { outline: 2px solid ${colors.sage[600]}; outline-offset: 3px; }

        .hero-cta-sm { padding: 0.75rem 1.25rem; font-size: 0.875rem; border-radius: 0.75rem; }

        /* Mobile-first responsive adjustments via media query (no JS state needed) */
        @media (max-width: 640px) {
          .hero-cta-primary,
          .hero-cta-ghost { width: 100%; }
          .hero-cta-sm { width: auto; }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-reveal,
          .hero-pulse-dot,
          .hero-leaf { animation: none; }
          .hero-plate-wrapper,
          .hero-chip,
          .hero-cta-primary,
          .hero-cta-ghost,
          .hero-cta-arrow { transition: none; }
          .hero-plate-wrapper:hover,
          .hero-chip:hover,
          .hero-cta-primary:hover,
          .hero-cta-ghost:hover { transform: none; }
        }
      `}</style>
    </section>
  )
}
