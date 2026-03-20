import { Inter, Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-heading",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ui",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${orbitron.variable} ${rajdhani.variable}  bg-black text-white font-[var(--font-body)]`}
      >
        {children}
      </body>
    </html>
  );
}