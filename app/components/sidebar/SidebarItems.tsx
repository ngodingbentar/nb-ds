'use client'

import { MdSpaceDashboard } from "react-icons/md";
import { FaUserFriends, FaSearch } from "react-icons/fa";
import { TiUserAdd } from "react-icons/ti";

export const SidebarItems = [
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