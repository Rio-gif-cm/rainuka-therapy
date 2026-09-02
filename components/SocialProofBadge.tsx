import { ReactNode } from 'react';

/**
 * HeroBadge / SocialProofBadge
 * 
 * Reusable badge component for hero sections.
 * Shows: "✓ 95% move forward with therapy • Real connection, real change."
 * 
 * Usage:
 * <SocialProofBadge />
 * 
 * Or with custom text:
 * <SocialProofBadge 
 *   stat="95%" 
 *   claim="move forward with therapy"
 *   subtext="Real connection, real change"
 * />
 */

interface SocialProofBadgeProps {
  stat?: string;
  claim?: string;
  subtext?: string;
}

export function SocialProofBadge({
  stat = '95%',
  claim = 'move forward with therapy',
  subtext = 'Real connection, real change',
}: SocialProofBadgeProps) {
  return (
    <div className="inline-flex items-center gap-3 bg-sage-50 px-4 py-3 rounded-full border border-sage-200 shadow-sm">
      <span className="text-xl">✓</span>
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
        <span className="text-sm font-semibold text-sage-900">
          <strong>{stat}</strong> {claim}
        </span>
        <span className="hidden sm:inline text-sage-400">•</span>
        <span className="text-xs text-sage-600">{subtext}</span>
      </div>
    </div>
  );
}
