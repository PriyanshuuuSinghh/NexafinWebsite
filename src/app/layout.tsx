import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: { default: "Nixafin: Understand your money. Make better decisions.", template: "%s | Nixafin" },
  description: site.description,
  metadataBase: new URL(site.url),
};

export const viewport: Viewport = {
  themeColor: "#F7FAFC",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-white">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
