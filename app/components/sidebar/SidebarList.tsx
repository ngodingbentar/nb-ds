'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarItems } from "./SidebarItems";

const SidebarList = () => {
  const pathname = usePathname()

  return (
    <ul className="sidebar__list">
      {SidebarItems.map(({ name, href, icon: Icon }) => {
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
  )
}

export default SidebarList