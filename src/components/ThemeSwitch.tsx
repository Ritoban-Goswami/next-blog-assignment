"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "./SVGIcons";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  if (resolvedTheme === "dark") {
    return (
      <SunIcon
        className="stroke-current cursor-pointer w-6 h-6 hover:text-active"
        onClick={() => setTheme("light")}
      />
    );
  }

  if (resolvedTheme === "light") {
    return (
      <MoonIcon
        className="stroke-current cursor-pointer w-6 h-6 transition-all hover:text-active"
        onClick={() => setTheme("dark")}
      />
    );
  }
}
