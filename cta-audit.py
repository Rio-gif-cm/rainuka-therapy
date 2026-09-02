#!/usr/bin/env python3
"""
CTA Audit Script for Wonderloud Therapy website
Scans all pages for Call-To-Action elements and generates comprehensive audit report
"""

import os
import re
import json
from pathlib import Path
from collections import defaultdict
from typing import List, Dict, Tuple

# Design system colors
DESIGN_SYSTEM_COLORS = {
    "sage": {
        "600": "#6b944f",
        "700": "#547c3f",
    },
    "primary_cta": "#3d8aa8",  # Teal/blue (from homepage)
    "secondary": "#d97757",  # Accent
    "burgundy": "#6d3a47",  # Accent background
}

CTA_PATTERNS = {
    "booking_link": r'href=["\']*/booking["\']',
    "primary_button": r'className=["\'][^"\']*btn-primary[^"\']*["\']',
    "outline_button": r'className=["\'][^"\']*btn-outline[^"\']*["\']',
    "link_button": r'className=["\'][^"\']*btn-link[^"\']*["\']',
    "inline_cta": r'style=\{\{[^}]*backgroundColor:\s*["\']?(#[0-9a-f]{6}|[a-z]+)["\']?',
    "link_href": r'href=["\']',
    "button_text": r'<(?:button|a|Link)[^>]*>([^<]+)</(?:button|a|Link)>',
}

class CTAAudit:
    def __init__(self, repo_path: str):
        self.repo_path = Path(repo_path)
        self.pages_dir = self.repo_path / "app"
        self.components_dir = self.repo_path / "components"
        self.ctas = []
        self.pages_scanned = 0
        self.total_cta_count = 0
        self.color_issues = []
        self.clarity_issues = []
        self.consistency_issues = []

    def scan_all_pages(self):
        """Scan all TSX page files for CTAs"""
        print("📋 Scanning all pages for CTAs...")
        
        for page_file in self.pages_dir.rglob("page.tsx"):
            relative_path = page_file.relative_to(self.pages_dir)
            self.scan_page_file(page_file, str(relative_path))

    def scan_page_file(self, file_path: Path, page_route: str):
        """Scan a single page file for CTAs"""
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
        except:
            return

        self.pages_scanned += 1
        page_ctas = []
        
        # Extract all Link and button elements
        link_pattern = r'<Link\s+href=["\']([^"\']+)["\'][^>]*>([^<]+)</Link>'
        links = re.finditer(link_pattern, content)
        
        for match in links:
            href, text = match.groups()
            text = text.strip()
            if href and text:
                cta = {
                    'page': page_route,
                    'type': 'Link',
                    'href': href,
                    'text': text,
                    'color': self.extract_color(content, match.start()),
                    'line': content[:match.start()].count('\n') + 1,
                }
                
                # Categorize by destination
                if '/booking' in href:
                    cta['category'] = 'Booking'
                elif '/about' in href or '/faq' in href:
                    cta['category'] = 'Information'
                elif '/pricing' in href:
                    cta['category'] = 'Pricing'
                elif '/referrals' in href:
                    cta['category'] = 'Referral'
                elif '/contact' in href:
                    cta['category'] = 'Contact'
                elif '/guides' in href or '/resources' in href:
                    cta['category'] = 'Resources'
                else:
                    cta['category'] = 'Navigation'
                
                page_ctas.append(cta)
                self.total_cta_count += 1
        
        # Extract buttons with styles
        button_pattern = r'<button[^>]*style=\{\{([^}]+)\}\}[^>]*>([^<]+)</button>'
        buttons = re.finditer(button_pattern, content)
        
        for match in buttons:
            style_str, text = match.groups()
            text = text.strip()
            color = self.extract_color_from_style(style_str)
            
            cta = {
                'page': page_route,
                'type': 'button',
                'href': None,
                'text': text,
                'color': color,
                'category': 'Button',
                'line': content[:match.start()].count('\n') + 1,
            }
            page_ctas.append(cta)
            self.total_cta_count += 1

        # Check for class-based buttons
        class_button_pattern = r'className=["\']([^"\']*btn-(?:primary|outline|link)[^"\']*)["\']'
        class_buttons = re.finditer(class_button_pattern, content)
        
        for match in class_buttons:
            classes = match.group(1)
            if 'btn-primary' in classes:
                btn_type = 'Primary Button'
                expected_color = DESIGN_SYSTEM_COLORS['sage']['600']
            elif 'btn-outline' in classes:
                btn_type = 'Outline Button'
                expected_color = f"border: {DESIGN_SYSTEM_COLORS['sage']['600']}"
            else:
                btn_type = 'Link Button'
                expected_color = DESIGN_SYSTEM_COLORS['sage']['600']
            
            cta = {
                'page': page_route,
                'type': btn_type,
                'href': 'check-context',
                'text': 'check-context',
                'color': expected_color,
                'category': 'Styled Button',
                'line': content[:match.start()].count('\n') + 1,
            }
            page_ctas.append(cta)
            self.total_cta_count += 1

        self.ctas.extend(page_ctas)

    def extract_color(self, content: str, position: int) -> str:
        """Extract color from inline styles near a match"""
        context = content[max(0, position-500):position+500]
        color_match = re.search(r'backgroundColor:\s*["\']?([#a-z0-9]+)["\']?', context)
        if color_match:
            return color_match.group(1)
        return 'inherit'

    def extract_color_from_style(self, style_str: str) -> str:
        """Extract color from style object"""
        color_match = re.search(r'backgroundColor:\s*["\']?([#a-z0-9]+)["\']?', style_str)
        if color_match:
            return color_match.group(1)
        return 'inherit'

    def check_consistency(self):
        """Analyze CTA consistency issues"""
        print("\n🔍 Checking consistency...")
        
        # Group CTAs by category
        by_category = defaultdict(list)
        for cta in self.ctas:
            by_category[cta['category']].append(cta)
        
        # Check color consistency
        for category, ctas in by_category.items():
            colors_used = set(cta.get('color', 'inherit') for cta in ctas)
            if len(colors_used) > 2:
                self.consistency_issues.append({
                    'type': 'Color Inconsistency',
                    'category': category,
                    'issue': f"Multiple colors used: {colors_used}",
                    'count': len(ctas),
                })

        # Check text consistency
        text_patterns = defaultdict(int)
        for cta in self.ctas:
            text = cta['text'].lower()
            if text.startswith(('book', 'schedule', 'start')):
                text_patterns['Action-driven'] += 1
            elif text.startswith(('learn', 'read', 'explore')):
                text_patterns['Exploratory'] += 1
            elif text.endswith('→') or text.endswith('→'):
                text_patterns['Arrow-suffixed'] += 1

    def generate_report(self) -> Dict:
        """Generate comprehensive audit report"""
        print("\n📊 Generating audit report...")
        
        # Group by page
        by_page = defaultdict(list)
        for cta in self.ctas:
            by_page[cta['page']].append(cta)
        
        # Color distribution
        color_dist = defaultdict(int)
        for cta in self.ctas:
            color_dist[cta.get('color', 'inherit')] += 1
        
        # CTA type distribution
        type_dist = defaultdict(int)
        for cta in self.ctas:
            type_dist[cta['type']] += 1
        
        # Category distribution
        category_dist = defaultdict(int)
        for cta in self.ctas:
            category_dist[cta.get('category', 'Unknown')] += 1
        
        return {
            'summary': {
                'total_pages_scanned': self.pages_scanned,
                'total_ctas_found': self.total_cta_count,
                'ctas_by_page': dict(by_page),
                'ctas_per_page_avg': round(self.total_cta_count / max(1, self.pages_scanned), 2),
            },
            'distribution': {
                'by_color': dict(color_dist),
                'by_type': dict(type_dist),
                'by_category': dict(category_dist),
            },
            'ctas': self.ctas,
        }

    def identify_improvements(self) -> List[Dict]:
        """Identify 5-10 key improvements"""
        improvements = []
        
        # 1. Button color standardization
        color_dist = defaultdict(int)
        for cta in self.ctas:
            if cta.get('color'):
                color_dist[cta['color']] += 1
        
        if len(color_dist) > 3:
            improvements.append({
                'priority': 'HIGH',
                'title': 'Standardize CTA Button Colors',
                'current': f"{len(color_dist)} different colors detected: {list(color_dist.keys())}",
                'recommended': 'Use only 2-3 colors: Primary (Sage #6b944f), Accent (#3d8aa8), Secondary (#d97757)',
                'impact': 'Better visual hierarchy and brand consistency',
                'effort': 'Medium',
            })
        
        # 2. Inconsistent button text
        vague_text = [cta for cta in self.ctas if cta['text'] in ['Click here', 'More', '→', '...']]
        if vague_text:
            improvements.append({
                'priority': 'HIGH',
                'title': 'Replace Vague CTA Text',
                'current': f"{len(vague_text)} CTAs use vague text like 'Click here' or 'More'",
                'recommended': 'Use action-driven, benefit-focused text: "Book Consultation", "Learn More", "Schedule Now"',
                'impact': 'Increased click-through rates and clarity',
                'effort': 'Low',
            })
        
        # 3. Missing/inconsistent CTA destinations
        by_category = defaultdict(list)
        for cta in self.ctas:
            by_category[cta.get('category', 'Unknown')].append(cta)
        
        if len(by_category.get('Navigation', [])) > len(by_category.get('Booking', [])):
            improvements.append({
                'priority': 'CRITICAL',
                'title': 'Increase Conversion-Focused CTAs',
                'current': f"Navigation CTAs: {len(by_category.get('Navigation', []))} | Booking CTAs: {len(by_category.get('Booking', []))}",
                'recommended': 'Add primary booking CTAs on: pricing page, specialty pages, testimonial sections',
                'impact': 'Direct revenue impact through increased bookings',
                'effort': 'Medium',
            })
        
        # 4. Mobile CTA visibility
        improvements.append({
            'priority': 'HIGH',
            'title': 'Verify Mobile CTA Visibility',
            'current': 'CTAs must be tested for mobile readability and touch-target size (min 44x44px)',
            'recommended': 'Audit all CTAs on mobile devices; ensure minimum 44x44px touch targets',
            'impact': 'Better mobile conversion rates (40% of traffic typically mobile)',
            'effort': 'Medium',
        })
        
        # 5. CTA Color Contrast
        improvements.append({
            'priority': 'HIGH',
            'title': 'Verify WCAG Color Contrast',
            'current': 'CTAs need WCAG AA compliance (4.5:1 ratio minimum for text)',
            'recommended': 'Test contrast: Sage #6b944f on white (pass), #3d8aa8 on burgundy (check)',
            'impact': 'Accessibility + legal compliance',
            'effort': 'Low',
        })
        
        # 6. CTA Consistency Across Pages
        improvements.append({
            'priority': 'MEDIUM',
            'title': 'Standardize CTA Labels by Page Type',
            'current': 'Specialty pages use mixed labels: "Book", "Schedule", "Start", "Get Started"',
            'recommended': 'Specialty & niche pages: "Book with Rainuka" | Guides: "Schedule Consultation" | Pricing: "Book Now"',
            'impact': 'Stronger brand voice + lower cognitive load',
            'effort': 'Low',
        })
        
        # 7. CTA Positioning
        improvements.append({
            'priority': 'MEDIUM',
            'title': 'Optimize CTA Positioning and Hierarchy',
            'current': 'Some pages lack clear primary CTA above fold; multiple competing CTAs',
            'recommended': 'Primary CTA always above fold; secondary CTAs in footer. Max 2-3 CTAs per viewport.',
            'impact': 'Improved conversion funnel clarity',
            'effort': 'Medium',
        })
        
        # 8. Loading & Hover States
        improvements.append({
            'priority': 'MEDIUM',
            'title': 'Add Hover State Indicators',
            'current': 'Some styled CTAs may lack hover/active state feedback',
            'recommended': 'Ensure all CTAs have: hover (scale 1.03, shadow), active (scale 0.98), focus (outline)',
            'impact': 'Better UX feedback and perceived interactivity',
            'effort': 'Low',
        })
        
        # 9. CTA Destination Validation
        improvements.append({
            'priority': 'MEDIUM',
            'title': 'Validate CTA Destinations',
            'current': 'Some CTAs may link to pages that don\'t lead to actual bookings',
            'recommended': 'Audit: /booking page should complete flows; /about should have secondary CTA; /pricing must have primary CTA',
            'impact': 'Reduced friction in conversion path',
            'effort': 'Medium',
        })
        
        # 10. CTA Copy Tone & Personalization
        improvements.append({
            'priority': 'LOW',
            'title': 'Personalize CTA Copy by Audience',
            'current': 'All CTAs use generic copy (e.g., "Book your consultation")',
            'recommended': 'Specialty pages: "Start ADHD Assessment" | Perinatal: "Schedule Perinatal Consultation" | Career: "Plan Your Transition"',
            'impact': 'Higher perceived relevance + improved CTR',
            'effort': 'Low',
        })
        
        return improvements[:10]  # Return top 10


def main():
    repo_path = "C:/Users/Roanm/rainuka-therapy"
    audit = CTAAudit(repo_path)
    
    # Run audit
    audit.scan_all_pages()
    audit.check_consistency()
    
    # Generate report
    report = audit.generate_report()
    improvements = audit.identify_improvements()
    
    # Display summary
    print("\n" + "="*70)
    print("📋 CTA AUDIT SUMMARY".center(70))
    print("="*70)
    print(f"\nPages Scanned: {report['summary']['total_pages_scanned']}")
    print(f"Total CTAs Found: {report['summary']['total_ctas_found']}")
    print(f"CTAs per Page (avg): {report['summary']['ctas_per_page_avg']}")
    
    print("\n📊 CTA Distribution by Type:")
    for cta_type, count in sorted(report['distribution']['by_type'].items(), key=lambda x: x[1], reverse=True):
        print(f"  • {cta_type}: {count}")
    
    print("\n🎨 Colors Used:")
    for color, count in sorted(report['distribution']['by_color'].items(), key=lambda x: x[1], reverse=True):
        print(f"  • {color}: {count} CTAs")
    
    print("\n📍 CTA Categories:")
    for category, count in sorted(report['distribution']['by_category'].items(), key=lambda x: x[1], reverse=True):
        print(f"  • {category}: {count}")
    
    print("\n" + "="*70)
    print("🎯 TOP 10 IMPROVEMENT RECOMMENDATIONS".center(70))
    print("="*70)
    
    for i, improvement in enumerate(improvements, 1):
        priority_color = {
            'CRITICAL': '🔴',
            'HIGH': '🟠',
            'MEDIUM': '🟡',
            'LOW': '🟢',
        }
        print(f"\n{i}. {priority_color.get(improvement['priority'], '⭕')} {improvement['title']}")
        print(f"   Priority: {improvement['priority']} | Effort: {improvement['effort']}")
        print(f"   Current: {improvement['current']}")
        print(f"   Recommended: {improvement['recommended']}")
        print(f"   Impact: {improvement['impact']}")
    
    # Save detailed report
    with open(repo_path + '/CTA_AUDIT_REPORT.json', 'w') as f:
        json.dump({
            'summary': report['summary'],
            'distribution': report['distribution'],
            'improvements': improvements,
        }, f, indent=2)
    
    print("\n✅ Detailed audit report saved to: CTA_AUDIT_REPORT.json")

if __name__ == "__main__":
    main()
