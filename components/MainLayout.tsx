"use client";

import LeftSidebar from "@/components/LeftSidebar";
import { useSidebar } from "@/context/SidebarContext";
import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const { isSidebarOpen } = useSidebar();
  return (
    <div
      className={`flex ${
        isSidebarOpen ? "gap-12" : "gap-0"
      } container mx-auto px-3 md:px-0`}
    >
      {/* Fixed Sidebar */}
      <LeftSidebar />

      {/* Scrollable Main Content Area */}
      <main className="flex-1 overflow-auto hide-scrollbar h-[calc(100vh-64px)] py-5">
        {children}
      </main>
    </div>
  );
}
