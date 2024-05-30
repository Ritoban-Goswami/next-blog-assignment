"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import { motion } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
        staggerDirection: -1,
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <nav className="relative flex justify-end items-center font-medium my-7 mx-6 sm:mx-12 space-x-5">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex items-center sm:hidden"
        onClick={toggleMenu}
      >
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
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className={`${
          isOpen ? "flex" : "hidden"
        } absolute top-9 right-0 flex-col items-end space-y-3 rounded p-4 pl-14 z-30 bg-[#1e1e1e] text-sm
        sm:static sm:flex sm:flex-row sm:items-center sm:bg-inherit sm:p-0 sm:space-y-0 sm:space-x-5 sm:text-base`}
      >
        <motion.div variants={listItem}>
          <Link href="/" className="text-active">
            Blog
          </Link>
        </motion.div>
        <motion.div variants={listItem}>
          <Link className="transition-all hover:text-active" href="#">
            Contact
          </Link>
        </motion.div>
        <motion.div variants={listItem}>
          <Link className="transition-all hover:text-active" href="#">
            Works
          </Link>
        </motion.div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <ThemeSwitch />
      </motion.div>
    </nav>
  );
};

export default NavBar;
