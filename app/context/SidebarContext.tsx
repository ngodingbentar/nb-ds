'use client';

import { createContext, useState } from "react";

const initialValue = { isCollapsed: false };

const SidebarContext = createContext(initialValue);

const SidebarProvider = ({ children }: { children: React.ReactNode}) => {
  const [isCollapsed, setCollapse] = useState(false);

  const toggleSidebarcollapse = () => {
    console.log('toggleSidebarcollapse');
    setCollapse(!isCollapsed);
  };

  return (
    <SidebarContext.Provider value={{ isCollapsed, toggleSidebarcollapse }}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext, SidebarProvider };
