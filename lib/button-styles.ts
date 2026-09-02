/**
 * Centralized Button Styles Library
 *
 * Unified button variants and responsive sizing:
 * - Primary (burgundy-600/white, 56px min-height)
 * - Secondary (outline)
 * - Tertiary (text-only)
 *
 * Use these classNames across Navigation, page CTAs, and all interactive elements.
 */

export const buttonStyles = {
  // ─── BASE CLASS (shared across all variants) ────────────────────────────
  base: 'btn text-center transition-all cursor-pointer whitespace-nowrap border-none rounded-md justify-center items-center inline-flex focus-visible:outline-2 focus-visible:outline-offset-2',

  // ─── SIZING ─────────────────────────────────────────────────────────────
  // Primary: 56px height (mobile-first spec from Desktop UX Audit)
  size: {
    sm: 'min-h-12 px-4 py-2 text-sm font-medium',
    md: 'min-h-14 px-6 py-3 text-base font-semibold',
    lg: 'min-h-14 px-8 py-3 text-base font-semibold',
    // Primary button: explicit 56px min-height
    primary: 'min-h-[56px] px-6 md:px-8 py-3 text-base md:text-lg font-semibold',
  },

  // ─── VARIANTS ───────────────────────────────────────────────────────────
  // Primary: burgundy-600, white text
  primary:
    'bg-burgundy-600 text-white outline-offset-2 transition-all ' +
    'hover:bg-burgundy-700 hover:shadow-md hover:-translate-y-0.5 ' +
    'focus:outline-burgundy-600 focus:shadow-md ' +
    'active:translate-y-0 active:shadow-sm active:bg-burgundy-700 ' +
    'disabled:opacity-60 disabled:cursor-not-allowed disabled:shadow-none',

  // Secondary: outline, burgundy text and border
  secondary:
    'border-2 border-burgundy-600 text-burgundy-600 bg-transparent outline-offset-2 ' +
    'hover:bg-burgundy-50 hover:border-burgundy-700 hover:text-burgundy-700 hover:-translate-y-0.5 ' +
    'focus:outline-burgundy-600 ' +
    'active:translate-y-0 active:bg-burgundy-50 active:border-burgundy-700 active:text-burgundy-700 ' +
    'disabled:opacity-60 disabled:cursor-not-allowed',

  // Tertiary: text-only, no background or border
  tertiary:
    'text-burgundy-600 bg-transparent border-none outline-offset-2 ' +
    'hover:text-burgundy-700 hover:underline ' +
    'focus:outline-burgundy-600 ' +
    'disabled:opacity-60 disabled:cursor-not-allowed',
}

// ─── HELPER FUNCTION: Build button className ───────────────────────────────
/**
 * Builds a button className from variant and size.
 * @param variant - 'primary' | 'secondary' | 'tertiary'
 * @param size - 'sm' | 'md' | 'lg' | 'primary' (56px)
 * @param extraClasses - Additional Tailwind classes to append
 * @returns Combined className string
 */
export function buttonClass(
  variant: 'primary' | 'secondary' | 'tertiary' = 'primary',
  size: 'sm' | 'md' | 'lg' | 'primary' = 'primary',
  extraClasses?: string
): string {
  const variantClass =
    variant === 'primary'
      ? buttonStyles.primary
      : variant === 'secondary'
        ? buttonStyles.secondary
        : buttonStyles.tertiary

  const sizeClass = buttonStyles.size[size]

  return `${buttonStyles.base} ${sizeClass} ${variantClass} ${extraClasses || ''}`.trim()
}

// ─── PRESETS for common patterns ────────────────────────────────────────────
export const buttonPresets = {
  // CTA Hero button (large primary)
  heroCtaPrimary: buttonClass('primary', 'primary'),

  // Navigation secondary action
  navSecondary: buttonClass('secondary', 'md'),

  // Inline text link that looks like a button
  textLink: buttonClass('tertiary', 'sm'),

  // Mobile booking CTA (full width, 56px height)
  mobileBooking:
    'w-full min-h-[56px] px-4 py-3 text-lg font-semibold ' +
    'bg-burgundy-600 text-white ' +
    'hover:bg-burgundy-700 active:bg-burgundy-700 ' +
    'disabled:opacity-60',

  // Form submit button
  formSubmit: buttonClass('primary', 'lg'),

  // Tertiary dismiss/cancel
  tertiary: buttonClass('tertiary', 'md'),

  // CTA on dark burgundy/bronze background (high contrast light background)
  ctaDarkBg:
    'min-h-[56px] px-6 md:px-8 py-3 text-base md:text-lg font-semibold ' +
    'bg-white text-primary-bronze-900 ' +
    'hover:bg-neutral-sage-50 hover:shadow-md hover:-translate-y-0.5 ' +
    'active:translate-y-0 active:shadow-sm ' +
    'disabled:opacity-60 disabled:cursor-not-allowed disabled:shadow-none ' +
    'transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-bronze-600',
}
