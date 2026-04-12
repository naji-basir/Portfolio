import { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { RiMoonClearLine } from "react-icons/ri";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("system"); // 'light', 'dark', 'system'

  // Apply theme to document
  const applyTheme = (mode) => {
    const root = document.documentElement;

    if (mode === "system") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      root.classList.toggle("dark", prefersDark);
    } else {
      root.classList.toggle("dark", mode === "dark");
    }

    root.setAttribute("data-theme", mode);
    localStorage.setItem("theme", mode);
  };

  // Initialize theme from localStorage or system
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "system";
    setTheme(saved);
    applyTheme(saved);

    // Listen for system preference changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = (e) => {
      if (localStorage.getItem("theme") === "system") {
        root.classList.toggle("dark", e.matches);
      }
    };
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  // Handle button click
  const handleChange = (mode) => {
    setTheme(mode);
    applyTheme(mode);
  };

  const buttonClass = (active) =>
    `p-2 rounded transition-colors duration-200 rounded-full ${
      active ? "bg-indigo-500 text-white" : ""
    } hover:bg-indigo-400`;

  return (
    <div className="scale-80 bg-transparent border-2 w-32 h-12 border-gray-700/50 dark:border-gray-400 dark:bg-transparent p-1 rounded-4xl flex gap-1 items-center justify-center">
      <button
        className={buttonClass(theme === "system")}
        onClick={() => handleChange("system")}
      >
        <HiMiniComputerDesktop size={20} />
      </button>
      <button
        className={buttonClass(theme === "light")}
        onClick={() => handleChange("light")}
      >
        <MdLightMode size={20} />
      </button>
      <button
        className={buttonClass(theme === "dark")}
        onClick={() => handleChange("dark")}
      >
        <RiMoonClearLine size={20} />
      </button>
    </div>
  );
}
