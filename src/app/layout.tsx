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
            <div className="absolute inset-x-0 top-0 h-[40rem] bg-grid bg-grid-size opacity-[0.08] [mask-image:linear-gradient(180deg,rgba(255,255,255,0.75),transparent)]" />
            <div className="absolute left-1/2 top-[-16rem] h-[46rem] w-[46rem] -translate-x-1/2 rounded-full border border-white/[0.05]" />
            <div className="absolute left-[12%] top-[9rem] hidden h-40 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent lg:block" />
            <div className="absolute right-[14%] top-[18rem] hidden h-56 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent xl:block" />
            <div className="absolute left-1/2 top-0 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-accent/[0.08] blur-3xl" />
            <div className="absolute right-[-10rem] top-[18rem] h-[28rem] w-[28rem] rounded-full bg-accent-soft/50 blur-3xl" />
            <div className="absolute left-[-8rem] top-[32rem] h-[24rem] w-[24rem] rounded-full bg-surface-soft/30 blur-3xl" />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
