import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Breadcrumb Navigation Component
 * Improves SEO, UX clarity, and navigation between specialty pages
 * 
 * Usage:
 * <Breadcrumb items={[
 *   { label: 'Home', href: '/' },
 *   { label: 'Services', href: '/#services' },
 *   { label: 'ADHD Therapy' }
 * ]} />
 */
export function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <nav
      className={`flex items-center gap-2 text-sm text-sage-600 mb-8 ${className}`}
      aria-label="Breadcrumb"
    >
      {items.map((item, index) => (
        <div key={`${item.label}-${index}`} className="flex items-center gap-2">
          {index > 0 && (
            <ChevronRight className="w-4 h-4 text-sage-400" aria-hidden />
          )}
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-sage-900 hover:underline transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-sage-900 font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}

export default Breadcrumb;
