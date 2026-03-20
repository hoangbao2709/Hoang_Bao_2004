import type { Metadata } from "next";
import {
  Inter,
  JetBrains_Mono,
  Cinzel,
} from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Hoang Bao Portfolio",
  description: "Embedded & Fullstack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${mono.variable} ${cinzel.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black font-[var(--font-sans)] text-white">
        {children}
      </body>
    </html>
  );
}