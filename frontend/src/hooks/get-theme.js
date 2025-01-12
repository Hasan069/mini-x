"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export const useCurrentTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  if (theme === "light" || (theme === "system" && systemTheme === "light")) {
    return "light";
  } else if (
    theme === "dark" ||
    (theme === "system" && systemTheme === "dark")
  ) {
    return "dark";
  }

  return systemTheme;
};
