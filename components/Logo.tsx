"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={'/'}>
      <Image src={"/logo.svg"} alt="fintrack logo" width={112} height={32}  className="hidden sm:inline-block"/>
      <Image src={"/logomark.svg"} alt="fintrack logo" width={32} height={32} className="sm:hidden"/>
    </Link>
  );
};

export default Logo;
