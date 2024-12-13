'use client';

import React from 'react';

interface BreadcrumbProps {
  activeTab: number;
  activeTabName: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ activeTab, activeTabName }) => {
  const baseBreadcrumb = ['Home', 'Profile'];
  
  const breadcrumbPath = [...baseBreadcrumb];
  if (activeTabName && activeTab > 0) {
    breadcrumbPath.push(activeTabName);
  }

  return (
    <nav className="text-sm text-gray-600 py-2">
      {breadcrumbPath.map((item, index) => (
        <span key={index} className={`capitalize ${index === breadcrumbPath.length - 1 ? 'font-semibold' : 'text-gray-400'}`}>
          {index > 0 && " / "}
          {index === 1 ? <strong>{item}</strong> : item}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
