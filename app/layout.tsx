import type { Metadata, Viewport } from "next";
import "./globals.css";
import Switcher from "@/components/Switcher";

export const metadata: Metadata = {
  title: "billyGO Redesign Directions — Prepared by ElevenChase",
  description: "Two homepage redesign directions for billyGO Air Conditioning & Plumbing, Dallas-Fort Worth.",
  robots: { index: false, follow: false },
  icons: { icon: "https://www.billygo.com/wp-content/uploads/2024/11/billygo-favicon.png" },
  openGraph: {
    title: "billyGO Redesign Directions",
    description: "Direction A: On the Clock · Direction B: Fast. Fair. Fixed.",
    images: ["https://www.billygo.com/wp-content/uploads/2026/06/billyGO-AC-and-Plumbing-DFW.webp"],
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@700;800;900&family=Inter:wght@400;600;700&family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap"
        />
      </head>
      <body>
        {children}
        <Switcher />
      </body>
    </html>
  );
}
