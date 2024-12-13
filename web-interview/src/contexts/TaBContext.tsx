'use client';
import { createContext, useState } from "react";

interface TabContextType {
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}

export const TabContext = createContext<TabContextType | null>(null);

interface TabProviderProps {
  children: React.ReactNode;
}

export const TabProvider: React.FC<TabProviderProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
};