'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { colors, styles } from '@/app/styles'
import { useState, useEffect, useRef, useCallback } from 'react'
import SensoryFriendlyToggle from './SensoryFriendlyToggle'

/* ------------------------------------------------------------------ */
/*  Navigation model                                                   */
/*  Primary rail stays deliberately short (5 items). Everything else   */
/*  lives inside a grouped dropdown so the bar never feels crowded.    */
/* ------------------------------------------------------------------ */

interface NavChild {
  href: string
  label: string
  description?: string
}

interface NavGroup {
  heading: string
  items: NavChild[]
}

interface NavItem {
  label: string
  href?: string
  /** Flat dropdown list (single column). */
  children?: NavChild[]
  /** Sub-grouped dropdown: each group becomes its own labeled column. */
  groups?: NavGroup[]
  /** Render the dropdown panel as a wider, two-column layout. */
  wide?: boolean
}

const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '/about' },
  {
    label: 'Specialties',
    groups: [
      {
        heading: 'By Focus',
        items: [
          { href: '/perinatal', label: 'Perinatal & Reproductive' },
          { href: '/adhd', label: 'Adult ADHD' },
          { href: '/couples', label: 'Couples' },
          { href: '/parents', label: 'Parents & Caregivers' },
          { href: '/career', label: 'Career Transitions' },
          { href: '/grief', label: 'Grief & Loss' },
        ],
      },
      {
        heading: 'Affirming Care',
        items: [
          { href: '/men', label: "Men's Mental Health" },
          { href: '/lgbtq', label: 'LGBTQ+ Affirming' },
          { href: '/bipoc', label: 'BIPOC Therapy' },
          { href: '/neurodivergent', label: 'Neurodivergent' },
          { href: '/disability-access', label: 'Disability-Affirming' },
        ],
      },
    ],
  },
  {
    label: 'Resources',
    groups: [
      {
        heading: 'Read & Learn',
        items: [
          { href: '/guides', label: 'Guides & Articles' },
          { href: '/case-studies', label: 'Case Studies' },
          { href: '/back-to-school', label: 'Back to School Anxiety' },
          { href: '/holiday-stress', label: 'Holiday Stress' },
        ],
      },
      {
        heading: 'Access & Referrals',
        items: [
          { href: '/providers', label: 'Directories & Insurance' },
          { href: '/financial-access', label: 'Financial Access' },
          { href: '/referrals', label: 'Refer Someone' },
        ],
      },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
  { label: 'FAQ', href: '/faq' },
]

/** Flatten a nav item's links regardless of shape. */
function itemLinks(item: NavItem): NavChild[] {
  if (item.groups) return item.groups.flatMap((g) => g.items)
  return item.children ?? []
}

const DESKTOP_BREAKPOINT = 960

/* ------------------------------------------------------------------ */
/*  Desktop: single link in the primary rail                           */
/* ------------------------------------------------------------------ */

function RailLink({ href, label, isActive }: { href: string; label: string; isActive: boolean }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href={href}
      aria-current={isActive ? 'page' : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        padding: '0.5rem 0.25rem',
        fontSize: '0.9375rem',
        fontWeight: isActive ? 600 : 500,
        letterSpacing: '0.01em',
        color: isActive || hovered ? colors.sage[700] : colors.warmGray[700],
        textDecoration: 'none',
        transition: 'color 0.2s ease',
      }}
    >
      {label}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: '-0.125rem',
          height: '2px',
          borderRadius: '2px',
          backgroundColor: colors.sage[600],
          transform: `scaleX(${isActive ? 1 : hovered ? 0.6 : 0})`,
          opacity: isActive ? 1 : hovered ? 0.5 : 0,
          transformOrigin: 'center',
          transition: 'transform 0.25s ease, opacity 0.25s ease',
        }}
      />
    </Link>
  )
}

/* ------------------------------------------------------------------ */
/*  Desktop: one link inside a dropdown panel                          */
/* ------------------------------------------------------------------ */

function PanelLink({
  child,
  isActive,
  isOpen,
  onClose,
}: {
  child: NavChild
  isActive: boolean
  isOpen: boolean
  onClose: () => void
}) {
  return (
    <Link
      href={child.href}
      tabIndex={isOpen ? 0 : -1}
      onClick={onClose}
      aria-current={isActive ? 'page' : undefined}
      style={{
        display: 'block',
        padding: '0.5rem',
        borderRadius: '0.5rem',
        textDecoration: 'none',
        backgroundColor: isActive ? colors.sage[50] : 'transparent',
        transition: 'background-color 0.18s ease',
      }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLElement).style.backgroundColor = colors.sage[50]
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLElement).style.backgroundColor = isActive
          ? colors.sage[50]
          : 'transparent'
      }}
    >
      <span
        style={{
          display: 'block',
          fontSize: '0.875rem',
          fontWeight: isActive ? 600 : 500,
          lineHeight: 1.35,
          color: isActive ? colors.sage[700] : colors.warmGray[900],
          marginBottom: child.description ? '0.15rem' : 0,
        }}
      >
        {child.label}
      </span>
      {child.description && (
        <span
          style={{
            display: 'block',
            fontSize: '0.78rem',
            lineHeight: 1.4,
            color: colors.warmGray[600],
          }}
        >
          {child.description}
        </span>
      )}
    </Link>
  )
}

/* ------------------------------------------------------------------ */
/*  Desktop: grouped dropdown                                          */
/* ------------------------------------------------------------------ */

interface DropdownProps {
  item: NavItem
  isOpen: boolean
  isActive: boolean
  onOpen: () => void
  onClose: () => void
  pathname: string
}

function Dropdown({ item, isOpen, isActive, onOpen, onClose, pathname }: DropdownProps) {
  const [hovered, setHovered] = useState(false)
  const highlighted = isActive || isOpen || hovered

  return (
    <div
      onMouseEnter={() => {
        setHovered(true)
        onOpen()
      }}
      onMouseLeave={() => {
        setHovered(false)
        onClose()
      }}
      style={{ position: 'relative' }}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => (isOpen ? onClose() : onOpen())}
        style={{
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.375rem',
          padding: '0.5rem 0.25rem',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'inherit',
          fontSize: '0.9375rem',
          fontWeight: isActive ? 600 : 500,
          letterSpacing: '0.01em',
          color: highlighted ? colors.sage[700] : colors.warmGray[700],
          transition: 'color 0.2s ease',
        }}
      >
        {item.label}
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          aria-hidden="true"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.25s ease',
          }}
        >
          <path
            d="M1 1L5 5L9 1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: 0,
            right: '1rem',
            bottom: '-0.125rem',
            height: '2px',
            borderRadius: '2px',
            backgroundColor: colors.sage[600],
            transform: `scaleX(${isActive ? 1 : highlighted ? 0.6 : 0})`,
            opacity: isActive ? 1 : highlighted ? 0.5 : 0,
            transition: 'transform 0.25s ease, opacity 0.25s ease',
          }}
        />
      </button>

      <div
        style={{
          position: 'absolute',
          top: 'calc(100% + 0.75rem)',
          left: '50%',
          width: item.groups ? 'min(520px, calc(100vw - 2rem))' : 'min(300px, calc(100vw - 2rem))',
          maxWidth: 'calc(100vw - 1rem)',
          padding: item.groups ? '1.25rem' : '0.5rem',
          display: 'grid',
          gridTemplateColumns: item.groups
            ? `repeat(${item.groups.length}, minmax(0, 1fr))`
            : '1fr',
          gap: item.groups ? '2rem' : '0.125rem',
          backgroundColor: 'white',
          border: `1px solid ${colors.warmGray[200]}`,
          borderRadius: '0.875rem',
          boxShadow: '0 18px 40px -18px rgba(63, 57, 53, 0.28), 0 2px 8px -2px rgba(63, 57, 53, 0.08)',
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? 'visible' : 'hidden',
          transform: `translateX(-50%) translateY(${isOpen ? '0' : '-6px'})`,
          transition: 'opacity 0.2s ease, transform 0.2s ease, visibility 0.2s',
          zIndex: 60,
          overflowY: 'auto',
          maxHeight: 'calc(100vh - 120px)',
        }}
      >
        {item.groups
          ? item.groups.map((group) => (
              <div key={group.heading}>
                <p
                  style={{
                    margin: '0 0 0.6rem 0.5rem',
                    fontSize: '0.68rem',
                    fontWeight: 600,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: colors.warmGray[600],
                  }}
                >
                  {group.heading}
                </p>
                {group.items.map((child) => (
                  <PanelLink
                    key={child.href}
                    child={child}
                    isActive={pathname === child.href}
                    isOpen={isOpen}
                    onClose={onClose}
                  />
                ))}
              </div>
            ))
          : item.children?.map((child) => (
              <PanelLink
                key={child.href}
                child={child}
                isActive={pathname === child.href}
                isOpen={isOpen}
                onClose={onClose}
              />
            ))}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Mobile: accordion drawer                                           */
/* ------------------------------------------------------------------ */

function MobileSection({
  item,
  pathname,
  onNavigate,
}: {
  item: NavItem
  pathname: string
  onNavigate: () => void
}) {
  const links = itemLinks(item)
  const [expanded, setExpanded] = useState(() => links.some((c) => c.href === pathname))

  if (links.length === 0) {
    const isActive = pathname === item.href
    return (
      <Link
        href={item.href!}
        onClick={onNavigate}
        aria-current={isActive ? 'page' : undefined}
        style={{
          display: 'flex',
          alignItems: 'center',
          minHeight: '56px',
          padding: '0.75rem 0.25rem',
          fontSize: '1.0625rem',
          fontWeight: isActive ? 600 : 500,
          color: isActive ? colors.sage[700] : colors.warmGray[900],
          textDecoration: 'none',
          borderBottom: `1px solid ${colors.warmGray[100]}`,
        }}
      >
        {item.label}
      </Link>
    )
  }

  const sectionActive = links.some((c) => c.href === pathname)

  return (
    <div style={{ borderBottom: `1px solid ${colors.warmGray[100]}` }}>
      <button
        type="button"
        aria-expanded={expanded}
        onClick={() => setExpanded((v) => !v)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          minHeight: '56px',
          padding: '0.75rem 0.25rem',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'inherit',
          fontSize: '1.0625rem',
          fontWeight: sectionActive ? 600 : 500,
          color: sectionActive ? colors.sage[700] : colors.warmGray[900],
          textAlign: 'left',
        }}
      >
        {item.label}
        <svg
          width="12"
          height="8"
          viewBox="0 0 10 6"
          fill="none"
          aria-hidden="true"
          style={{
            transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.25s ease',
            color: colors.warmGray[600],
          }}
        >
          <path
            d="M1 1L5 5L9 1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {expanded && (
        <div style={{ paddingBottom: '0.5rem' }}>
          {(item.groups ?? [{ heading: '', items: item.children ?? [] }]).map((group) => (
            <div key={group.heading || 'default'}>
              {group.heading && (
                <p
                  style={{
                    margin: '0.5rem 0 0.35rem 1.25rem',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: colors.warmGray[600],
                  }}
                >
                  {group.heading}
                </p>
              )}
              {group.items.map((child) => {
                const childActive = pathname === child.href
                return (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={onNavigate}
                    aria-current={childActive ? 'page' : undefined}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      minHeight: '48px',
                      padding: '0.5rem 0.25rem 0.5rem 1rem',
                      borderLeft: `2px solid ${childActive ? colors.sage[600] : colors.warmGray[200]}`,
                      marginLeft: '0.25rem',
                      fontSize: '0.95rem',
                      fontWeight: childActive ? 600 : 400,
                      color: childActive ? colors.sage[700] : colors.warmGray[700],
                      textDecoration: 'none',
                    }}
                  >
                    {child.label}
                  </Link>
                )
              })}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Navigation                                                         */
/* ------------------------------------------------------------------ */

export default function Navigation() {
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < DESKTOP_BREAKPOINT)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Close everything on route change
  useEffect(() => {
    setOpenMenu(null)
    setDrawerOpen(false)
  }, [pathname])

  // Escape closes menus; outside click closes dropdowns
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenMenu(null)
        setDrawerOpen(false)
      }
    }
    const onClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null)
      }
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClickOutside)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClickOutside)
    }
  }, [])

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    if (typeof document === 'undefined') return
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [drawerOpen])

  const openDropdown = useCallback((label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenMenu(label)
  }, [])

  const closeDropdown = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140)
  }, [])

  const isItemActive = (item: NavItem) =>
    item.href ? pathname === item.href : itemLinks(item).some((c) => c.href === pathname)

  return (
    <nav
      ref={navRef}
      aria-label="Primary"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.92)',
        backdropFilter: 'saturate(180%) blur(12px)',
        WebkitBackdropFilter: 'saturate(180%) blur(12px)',
        borderBottom: `1px solid ${colors.warmGray[200]}`,
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: isMobile ? '0.75rem 1rem' : '0.875rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
        }}
      >
        {/* Brand */}
        <Link href="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
          <span
            style={{
              display: 'block',
              fontSize: isMobile ? '1.05rem' : '1.2rem',
              fontWeight: 700,
              lineHeight: 1.15,
              color: colors.sage[700],
              fontFamily: 'var(--font-merriweather), serif',
              letterSpacing: '-0.01em',
            }}
          >
            Rainuka Oberoi
          </span>
          <span
            style={{
              display: 'block',
              fontSize: '0.68rem',
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: colors.warmGray[600],
              marginTop: '0.1rem',
            }}
          >
            LCSW
          </span>
        </Link>

        {/* Desktop primary rail */}
        {!isMobile && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.75rem',
              flex: 1,
              justifyContent: 'center',
            }}
          >
            {NAV_ITEMS.map((item) =>
              itemLinks(item).length > 0 ? (
                <Dropdown
                  key={item.label}
                  item={item}
                  pathname={pathname}
                  isActive={isItemActive(item)}
                  isOpen={openMenu === item.label}
                  onOpen={() => openDropdown(item.label)}
                  onClose={closeDropdown}
                />
              ) : (
                <RailLink
                  key={item.label}
                  href={item.href!}
                  label={item.label}
                  isActive={isItemActive(item)}
                />
              )
            )}
          </div>
        )}

        {/* Right cluster */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
          {!isMobile && <SensoryFriendlyToggle isMobile={false} />}

          <Link
            href="/booking"
            style={{
              ...styles.button,
              ...styles.btnPrimary,
              padding: isMobile ? '0.6rem 1rem' : '0.6rem 1.35rem',
              fontSize: isMobile ? '0.875rem' : '0.9rem',
              fontWeight: 600,
              borderRadius: '999px',
              whiteSpace: 'nowrap',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 6px 16px -8px rgba(107, 148, 79, 0.7)',
            }}
          >
            Book a Consult
          </Link>

          {isMobile && (
            <button
              type="button"
              aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={drawerOpen}
              onClick={() => setDrawerOpen((v) => !v)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '44px',
                height: '44px',
                background: 'none',
                border: `1px solid ${colors.warmGray[200]}`,
                borderRadius: '0.625rem',
                cursor: 'pointer',
                color: colors.warmGray[900],
              }}
            >
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none" aria-hidden="true">
                {drawerOpen ? (
                  <>
                    <path d="M3 3L17 13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                    <path d="M17 3L3 13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                  </>
                ) : (
                  <>
                    <path d="M1 2H19" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                    <path d="M1 8H19" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                    <path d="M1 14H19" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Mobile drawer */}
      {isMobile && drawerOpen && (
        <div
          style={{
            borderTop: `1px solid ${colors.warmGray[100]}`,
            backgroundColor: 'white',
            padding: '0.5rem 1.25rem 1.5rem',
            maxHeight: 'calc(100vh - 72px)',
            overflowY: 'auto',
          }}
        >
          {NAV_ITEMS.map((item) => (
            <MobileSection
              key={item.label}
              item={item}
              pathname={pathname}
              onNavigate={() => setDrawerOpen(false)}
            />
          ))}

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              paddingTop: '1.25rem',
            }}
          >
            <SensoryFriendlyToggle isMobile />
            <Link
              href="/contact"
              onClick={() => setDrawerOpen(false)}
              style={{
                fontSize: '0.9rem',
                fontWeight: 500,
                color: colors.sage[700],
                textDecoration: 'none',
              }}
            >
              Contact →
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
