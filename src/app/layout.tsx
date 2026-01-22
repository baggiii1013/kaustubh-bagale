import type { Metadata } from "next";
import { Anton, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "900"],
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: "700",
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
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${anton.variable} ${spaceGrotesk.variable} font-sans antialiased bg-deep-black text-white selection:bg-white selection:text-black overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
