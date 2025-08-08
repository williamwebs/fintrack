"use client";

import Image from "next/image";
import React from "react";
import Logo from "./Logo";
import Profile from "./Profile";
import Search from "./Search";
import { useSidebar } from "@/context/SidebarContext";
import { useSearch } from "@/context/SearchContext";

const Header = () => {
  const { toggleSidebar } = useSidebar();
  const { setSearchQuery } = useSearch();

  return (
    <header className="h-16 w-full py-3 px-3 md:px-0 container mx-auto flex items-center justify-between">
      {/* menu and logo */}
      <div className="flex items-center gap-3">
        <div
          className="w-6 h-6 flex items-center justify-center cursor-pointer"
          onClick={toggleSidebar}
        >
          <Image src={"/bar.svg"} alt="menu" width={24} height={24} />
        </div>
        <Logo />
      </div>
      {/* search, box and profile */}
      <div className="flex items-center gap-2.5 sm:gap-3.5 md:gap-5 max-w-md">
        {/* search component */}
        <Search
          placeholder="Search transactions..."
          onChange={setSearchQuery}
          className="ml-auto"
        />
        {/* grid component */}
        <div className="hidden w-6 h-6 sm:flex items-center justify-center cursor-pointer">
          <Image
            src={"/grid-icon.svg"}
            alt="grid icon"
            width={24}
            height={24}
          />
        </div>
        {/* profile component */}
        <Profile imageUrl="/profile.svg" name="user profile" />
      </div>
    </header>
  );
};

export default Header;
