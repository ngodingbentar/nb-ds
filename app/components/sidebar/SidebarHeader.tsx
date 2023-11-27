'use client'

import Image from "next/image";
const SidebarHeader = () => {
  return (
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
  )
}

export default SidebarHeader