"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

/** Drives the `data-theme` attribute the stylesheet keys off. */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="data-theme" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  );
}
