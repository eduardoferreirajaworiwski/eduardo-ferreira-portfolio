import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Space_Grotesk } from "next/font/google";

import "./globals.css";

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans"
});

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display"
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: "Eduardo Ferreira | Identity Security & Automation",
  description:
    "Information Security Analyst focused on identity security, SaaS security, ISO 27001/27701 control implementation, security automation, OSINT and threat intelligence tooling."
};

export const viewport: Viewport = {
  themeColor: "#070a10"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${display.variable} ${mono.variable} overflow-x-hidden`}>
        <div className="relative min-h-screen">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-[28rem] bg-grid bg-grid-size opacity-[0.05] [mask-image:linear-gradient(180deg,rgba(255,255,255,0.6),transparent)]" />
            <div className="absolute left-[9%] top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent xl:block" />
            <div className="absolute right-[9%] top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-white/[0.05] to-transparent xl:block" />
            <div className="absolute inset-x-[7%] top-[6.5rem] hidden h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent lg:block" />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
