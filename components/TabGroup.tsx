'use client';

import { useState } from 'react';

/**
 * TabGroup
 * 
 * Reusable tab component for condensing long page content.
 * Uses CSS transitions instead of framer-motion for better performance.
 * Used on About page to organize: Philosophy | Credentials | Impact | Testimonials
 * 
 * Usage:
 * <TabGroup defaultTab="philosophy">
 *   <Tab label="Philosophy">Philosophy content</Tab>
 *   <Tab label="Credentials">Credentials content</Tab>
 * </TabGroup>
 */

interface TabProps {
  label: string;
  children: React.ReactNode;
  id?: string;
}

interface TabGroupProps {
  children: React.ReactElement<TabProps>[];
  defaultTab?: number;
  className?: string;
}

function Tab({ label, children, id }: TabProps) {
  return { label, children, id };
}

export function TabGroup({
  children,
  defaultTab = 0,
  className = '',
}: TabGroupProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const tabs = Array.isArray(children) ? children : [children];

  return (
    <div className={`w-full ${className}`}>
      {/* Tab Headers */}
      <div className="flex flex-wrap gap-2 border-b border-sage-200 mb-6">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`
              px-4 py-3 font-medium text-sm transition-all
              border-b-2 -mb-[2px]
              ${
                activeTab === index
                  ? 'border-burgundy-600 text-burgundy-700'
                  : 'border-transparent text-sage-600 hover:text-sage-800'
              }
            `}
            role="tab"
            aria-selected={activeTab === index}
          >
            {tab.props.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div
        key={activeTab}
        className="transition-all duration-200 ease-out"
        style={{
          opacity: 1,
          transform: 'translateY(0)',
        }}
        role="tabpanel"
      >
        {tabs[activeTab].props.children}
      </div>
    </div>
  );
}

export { Tab };
