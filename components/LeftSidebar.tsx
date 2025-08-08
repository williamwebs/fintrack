"use client";

import { dashboardMenu } from "@/data";
import { MenuItem } from "@/types";
import MenuLink from "./MenuLink";
import { useSidebar } from "@/context/SidebarContext";

const LeftSidebar = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <aside
      className={`overflow-hidden bg-white py-7 flex flex-col gap-0.5 transition-all duration-500 ease-in-out ${
        isSidebarOpen ? "w-80" : "w-0"
      }`}
    >
      {dashboardMenu.map((item: MenuItem) => (
        <MenuLink key={item.title} item={item} />
      ))}
    </aside>
  );
};

export default LeftSidebar;
