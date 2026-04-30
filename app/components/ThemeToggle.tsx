"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const current =
      document.documentElement.getAttribute("data-theme") || "dark";
    setTheme(current);
  }, []);

  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    setTheme(next);
  }

  if (!theme) return null;

  return (
    false && (
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={
          theme === "light" ? "Switch to dark mode" : "Switch to light mode"
        }
        type="button"
      >
        <img
          src="/images/icons/sun.svg"
          alt={theme === "light" ? "Moon icon" : "Sun icon"}
          width={28}
          height={28}
        />
      </button>
    )
  );
}
