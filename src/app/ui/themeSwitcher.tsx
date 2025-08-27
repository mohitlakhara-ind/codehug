"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    // Check saved theme
    const saved = localStorage.getItem("theme");
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    } else {
      // Fallback: system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const sysTheme = prefersDark ? "dark" : "light";
      setTheme(sysTheme);
      document.documentElement.setAttribute("data-theme", sysTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded px-3 py-2  text-[var(--text)] border border-[var(--border)]"
    >
      {theme === "dark" ? (
        <>
          <Sun className="w-5 h-5 " />
        </>
      ) : (
        <>
          <Moon className="w-5 h-5 " />
        </>
      )}
    </button>
  );
}
