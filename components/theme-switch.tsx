"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <label
        htmlFor="theme"
        className="mr-2 font-light text-sm text-gray-400 dark:text-gray-400"
      >
        Theme
      </label>
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="font-light text-sm text-gray-900 dark:text-gray-100"
        id="theme"
      >
        <option value="system">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
    </>
  );
};

export default ThemeSwitch;
