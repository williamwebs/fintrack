"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Input } from "./ui/input";

interface SearchProps {
  placeholder?: string;
  onChange?: (value: string) => void;
  className?: string;
}

const Search = ({
  placeholder = "Search...",
  onChange,
  className = "",
}: SearchProps) => {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onChange?.(e.target.value);
  };

  return (
    <div className={`flex items-center gap-1 sm:gap-3 ${className}`}>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          showSearchInput
            ? "max-w-[200px] opacity-100 scale-100"
            : "max-w-0 opacity-0 scale-95"
        }`}
      >
        <Input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="shadow-none w-full"
        />
      </div>

      <button
        onClick={() => setShowSearchInput((prev) => !prev)}
        className="cursor-pointer w-6 h-6 flex items-center justify-center transition-transform"
      >
        <Image
          src="/search-icon.svg"
          alt="search icon"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
};

export default Search;
