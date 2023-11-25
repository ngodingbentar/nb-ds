'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaUserFriends, FaSearch } from "react-icons/fa";
import { TiUserAdd } from "react-icons/ti";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdSpaceDashboard } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarItems = [
  {
    name: "Dashboard",
    href: "/",
    icon: MdSpaceDashboard,
  },
  {
    name: "Users",
    href: "/users",
    icon: FaUserFriends,
  },
  {
    name: "Registration",
    href: "/registration",
    icon: TiUserAdd,
  },
  {
    name: "Search",
    href: "/search",
    icon: FaSearch,
  },
];

const Sidebar = () => {
  const pathname = usePathname()
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
        <div className="sidebar__top">
          <Image
            width={80}
            height={80}
            className="sidebar__logo"
            src="/logo.png"
            alt="logo"
          />
          <p className="sidebar__logo-name">Ngodingbentar</p>
        </div>
        <ul className="sidebar__list">
          {sidebarItems.map(({ name, href, icon: Icon }) => {
            return (
              <li className="sidebar__item" key={name}>
                <Link
                  className={`sidebar__link ${
                    pathname === href ? "sidebar__link--active" : ""
                  }`}
                  href={href}
                >
                  <span className="sidebar__icon">
                    <Icon />
                  </span>
                  <span className="sidebar__name">{name}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
