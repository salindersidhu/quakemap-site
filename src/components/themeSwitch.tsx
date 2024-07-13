"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ThemeButton } from "@/components/themeButton";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <></>;

  const isDark = resolvedTheme === "dark";

  return (
    <ThemeButton
      isDark={isDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    />
  );
}
