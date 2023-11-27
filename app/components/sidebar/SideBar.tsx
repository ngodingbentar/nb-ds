'use client';

import { useState, useEffect } from "react";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import SidebarList from "./SidebarList";
import SidebarHeader from "./SidebarHeader";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
    const collapsedLocal = localStorage.getItem('collapsed')
    if (collapsedLocal) {
      setCollapsed(JSON.parse(collapsedLocal))
    }
  }, [])

  const doCollapse = () => {
    localStorage.setItem('collapsed', JSON.stringify(!collapsed))
    setCollapsed(!collapsed)
  }

  return (
    <div className="sidebar__wrapper">
      <button className="btn" onClick={doCollapse}>
        {collapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
      </button>
      <aside className="sidebar" data-collapse={collapsed}>
        <SidebarHeader />
        <SidebarList />
      </aside>
    </div>
  );
};

export default Sidebar;
