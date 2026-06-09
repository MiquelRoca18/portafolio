import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  // TODO: set your real domain once deployed.
  metadataBase: new URL("https://portfolio.example.com"),
};

// The document shell (<html>/<body>) lives in app/[locale]/layout.tsx so it
// can be locale-aware. This root layout just passes children through.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
