'use client';
import Sidebar from "@/app/components/sidebar/SideBar";
import HeaderComp from "./HeaderComp";
import { usePathname } from "next/navigation";

const BaseLayout = ({ children }: { children: React.ReactNode}) => {
  const pathname = usePathname()
  const showSidebar = () => {
    switch (pathname.slice(1)) {
      case 'users':
      case 'registration':
      case 'search':
      case '':
        return true
      default:
        return false
    }
  }

  return (
    <div className="layout">
      {showSidebar() && <Sidebar />}
      <main className="layout__main-content">
        {showSidebar() && <HeaderComp />}
        <div style={{ maxWidth: '80vw' }}>
          {children}
        </div>
      </main>
    </div>
  );
};

export default BaseLayout;
