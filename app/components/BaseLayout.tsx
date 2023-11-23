'use client';
import Sidebar from "@/app/components/SideBar";

const BaseLayout = ({ children }: { children: React.ReactNode}) => {
  return (
    <div className="layout">
      <Sidebar />
      <main className="layout__main-content">{children}</main>
    </div>
  );
};

export default BaseLayout;
