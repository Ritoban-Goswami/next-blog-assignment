"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative flex justify-end items-center font-medium my-7 mx-6 sm:mx-12 space-x-5">
      <div className="flex items-center sm:hidden" onClick={toggleMenu}>
        <svg
          className="w-6 h-6 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </div>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } absolute top-9 right-0 flex-col items-end space-y-3 rounded p-4 pl-14 z-30 bg-[#1e1e1e] text-sm
        sm:static sm:flex sm:flex-row sm:items-center sm:bg-inherit sm:p-0 sm:space-y-0 sm:space-x-5 sm:text-base`}
      >
        <Link href="/" className="text-active">
          Blog
        </Link>
        <Link className="transition-all hover:text-active" href="#">
          Works
        </Link>
        <Link className="transition-all hover:text-active" href="#">
          Contact
        </Link>
      </div>
      <ThemeSwitch />
    </nav>
  );
};

export default NavBar;
