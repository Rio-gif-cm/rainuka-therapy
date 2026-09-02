'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * TabGroup
 * 
 * Reusable tab component for condensing long page content.
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
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.2 }}
        role="tabpanel"
      >
        {tabs[activeTab].props.children}
      </motion.div>
    </div>
  );
}

export { Tab };
