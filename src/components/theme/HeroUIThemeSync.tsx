"use client";

import { useEffect } from "react";

const mediaQuery = "(prefers-color-scheme: dark)";

function applyTheme(isDark: boolean) {
  const root = document.documentElement;
  root.classList.toggle("dark", isDark);
  root.dataset.theme = isDark ? "dark" : "light";
}

export default function HeroUIThemeSync() {
  useEffect(() => {
    const query = window.matchMedia(mediaQuery);

    applyTheme(query.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      applyTheme(event.matches);
    };

    query.addEventListener("change", handleChange);

    return () => {
      query.removeEventListener("change", handleChange);
    };
  }, []);

  return null;
}
