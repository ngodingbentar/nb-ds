'use client';
import Sidebar from "@/app/components/SideBar";
import HeaderComp from "./HeaderComp";

const BaseLayout = ({ children }: { children: React.ReactNode}) => {
  return (
    <div className="layout">
      <Sidebar />
      <main className="layout__main-content">
        <div>
          <HeaderComp />
        </div>
        <div style={{ maxWidth: '80vw' }}>
          {children}
        </div>
      </main>
    </div>
  );
};

export default BaseLayout;
