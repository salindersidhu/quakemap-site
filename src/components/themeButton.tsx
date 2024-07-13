"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export function ThemeButton({
  isDark,
  onClick,
}: {
  isDark: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative rounded-full bg-gray-200 dark:bg-zinc-900 p-1 text-gray-950 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
    >
      <span className="absolute -inset-1.5" />
      <span className="sr-only">Toggle {isDark ? "light" : "dark"} mode</span>
      {isDark ? (
        <SunIcon aria-hidden="true" className="h-6 w-6" />
      ) : (
        <MoonIcon aria-hidden="true" className="h-6 w-6" />
      )}
    </button>
  );
}
