import type { Metadata } from "next";
import { Anton, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "900"],
  display: "swap",
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kaustubh Bagale: Professional Portfolio",
  description: "Full Stack Developer (MERN & Next.js) - Building scalable systems for 100,000+ users",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Material Symbols loaded async with media="print" hack to prevent render blocking */}
        {/* Only needed for /projects page - main page uses inline SVGs */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@400&display=swap"
          rel="stylesheet"
          media="print"
          // @ts-expect-error - onLoad is valid for link elements
          onLoad="this.media='all'"
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@400&display=swap"
            rel="stylesheet"
          />
        </noscript>
      </head>
      <body
        className={`${inter.variable} ${anton.variable} ${spaceGrotesk.variable} font-sans antialiased bg-deep-black text-white selection:bg-white selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}
