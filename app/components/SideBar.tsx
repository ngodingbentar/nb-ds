'use client';

import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import { FiMail } from "react-icons/fi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { setIsCollapsed, setLoading } from "../store/redux/main";
import { IMain } from "../types/main";

const sidebarItems = [
  {
    name: "Dashboard",
    href: "/",
    icon: AiOutlineHome,
  },
  {
    name: "Users",
    href: "/users",
    icon: BsPeople,
  },
  {
    name: "Registration",
    href: "/registration",
    icon: FiMail,
  },
  {
    name: "Search",
    href: "/search",
    icon: TiContacts,
  },
];

const Sidebar = () => {
  const dispatch = useDispatch()
  const pathname = usePathname()

  const isCollapsed = useSelector((state: IMain) => state?.main?.isCollapsed)

  const doCollapsed = () => {
    dispatch(setIsCollapsed(''))
  }

  return (
    <div className="sidebar__wrapper">
      <button className="btn" onClick={doCollapsed}>
        {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
      </button>
      <aside className="sidebar" data-collapse={isCollapsed}>
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
