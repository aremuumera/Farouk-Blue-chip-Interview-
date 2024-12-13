'use client'

import React from 'react'

interface BreadcrumbProps {
  items: string[];
  activeTabName: string;
  activeTab: number;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, activeTab }) => {
  const breadcrumbPath = items.slice(0, activeTab + 1);

  return (
    <nav className="text-sm text-gray-600 py-2">
      {breadcrumbPath.map((item, index) => (
        <span key={index} className={`capitalize ${index === breadcrumbPath.length - 1 ? 'font-semibold' : 'text-gray-400'}`}>
          {index > 0 && " / "}
          {`${item}`}
        </span>
      ))}
    </nav>
  )
};

export default Breadcrumb;

