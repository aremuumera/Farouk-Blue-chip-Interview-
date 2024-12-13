'use client'

import { TabContext } from '@/contexts/TaBContext';
import React, { useContext } from 'react'
import Overview from './Overview/overview';
import Project from './project';
import Campaigns from './campaigns';
import Followers from './followers';
import Documents from './documents';
import Activity from './Activity/activity';

const TabSection = () => {
    const { activeTab } = useContext(TabContext)!;

  return (
    <div>
       <div>
            {activeTab === 0 && (
                <Overview />
            )}

            {activeTab === 1 && (
                <Project />
            )}

            {activeTab === 2 && (
                <Campaigns />
            )}

            {activeTab === 3 && (
                <Documents />
            )}  

            {activeTab === 4 && (
                <Followers />
            )}  

            {activeTab === 5 && (
                <Activity />
            )}      
       </div>
    </div>
  )
}

export default TabSection
