"use client";

import { useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-end items-center font-medium py-7 px-6 sm:px-12">
      <div className="flex items-center sm:hidden">
        <button onClick={toggleMenu}>
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
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } sm:flex sm:items-center space-x-4 ml-5`}
      >
        <Link href="/" className="text-active">
          Blog
        </Link>
        <Link href="#">Works</Link>
        <Link href="#">Contact</Link>
      </div>
    </nav>
  );
};

export default NavBar;
