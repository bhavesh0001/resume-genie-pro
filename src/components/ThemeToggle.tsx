"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const pref = localStorage.getItem("theme") || "dark";
    const isDark = pref === "dark";
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="ml-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-theme bg-black/40 text-sm hover:bg-white/5 hover:border-white/30 transition"
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
}
