"use client";

import { MenuItem } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface MenuLinkProps {
  item: MenuItem;
  className?: string;
};

const MenuLink = ({ item, className = "" }: MenuLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === item.href;

  return (
    <Link
      href={item.href}
      className={`h-9 px-[18px] rounded-2xl flex items-center text-[15px] font-normal transition-colors font-public-sans
        ${isActive ? "bg-[#38677829] text-[#3a6c7b]" : "bg-transparent text-primary-black hover:bg-gray-50"}
        ${className}`}
    >
      {item.title}
    </Link>
  );
};

export default MenuLink;
