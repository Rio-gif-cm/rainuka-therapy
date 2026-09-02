import Link from 'next/link';

/**
 * Breadcrumb
 * 
 * Navigation aid for specialty pages. Shows hierarchy:
 * Home / Specialties / [Current Page]
 * 
 * Usage:
 * <Breadcrumb items={[
 *   { label: 'Home', href: '/' },
 *   { label: 'Specialties', href: '/#specialties' },
 *   { label: 'ADHD Therapy' }
 * ]} />
 */

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      className="flex items-center gap-2 text-sm text-sage-600 mb-8"
      aria-label="Breadcrumb"
    >
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {index > 0 && (
            <span className="text-sage-400">/</span>
          )}
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-sage-700 transition-colors underline-offset-2 hover:underline"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-sage-800 font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
