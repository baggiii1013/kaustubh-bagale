import type { Metadata } from "next";
import { Anton, Inter, Space_Grotesk } from "next/font/google";
import { faqs } from "../components/FaqSection";
import { MaterialSymbols } from "../components/MaterialSymbols";
import "./globals.css";

const SITE = "https://kaustubhbagale.me";

// Evaluated at build time, so every deploy refreshes the freshness signal that
// Perplexity and Google AI Overviews look for.
const lastModified = new Date().toISOString();

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE}/#person`,
      name: "Kaustubh Bagale",
      url: SITE,
      email: "mailto:kaustubhbagale10@gmail.com",
      telephone: "+91-8767943262",
      image: `${SITE}/og-image.png`,
      jobTitle: "Full Stack Developer",
      description:
        "Full Stack Developer specializing in MERN stack & Next.js, building scalable systems for 100,000+ users.",
      address: { "@type": "PostalAddress", addressCountry: "IN" },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Parul University",
        url: "https://paruluniversity.ac.in",
      },
      sameAs: [
        "https://github.com/baggiii1013",
        "https://linkedin.com/in/kaustubh-bagale-1077bb389",
        "https://x.com/baggiii1013",
        "https://instagram.com/kaustubh_bagale10",
      ],
      knowsAbout: [
        "React.js",
        "Next.js",
        "Node.js",
        "MongoDB",
        "TypeScript",
        "JavaScript",
        "Full Stack Development",
        "MERN Stack",
        "Docker",
        "Nginx",
      ],
    },
    {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "Kaustubh Bagale",
      alternateName: "Kaustubh Bagale — Full Stack Development",
      url: SITE,
      logo: { "@type": "ImageObject", url: `${SITE}/og-image.png` },
      image: `${SITE}/og-image.png`,
      description:
        "Independent full stack web development — MERN stack, Next.js, and DevOps for high-traffic web platforms.",
      founder: { "@id": `${SITE}/#person` },
      email: "kaustubhbagale10@gmail.com",
      telephone: "+91-8767943262",
      areaServed: "Worldwide",
      sameAs: [
        "https://github.com/baggiii1013",
        "https://linkedin.com/in/kaustubh-bagale-1077bb389",
        "https://x.com/baggiii1013",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      name: "Kaustubh Bagale Portfolio",
      url: SITE,
      description:
        "Portfolio website of Kaustubh Bagale - Full Stack Developer",
      inLanguage: "en",
      dateModified: lastModified,
      author: { "@id": `${SITE}/#person` },
      publisher: { "@id": `${SITE}/#organization` },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE}/#faq`,
      isPartOf: { "@id": `${SITE}/#website` },
      dateModified: lastModified,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ],
};

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
  title: {
    default: "Kaustubh Bagale | Full Stack MERN & Next.js Developer",
    template: "%s | Kaustubh Bagale",
  },
  description:
    "Kaustubh Bagale — Full Stack Developer specializing in MERN stack & Next.js. Built scalable platforms serving 100,000+ concurrent users. View projects, tech stack, and get in touch.",
  keywords: [
    "Kaustubh Bagale",
    "kaustubh bagale portfolio",
    "kaustubh bagale developer",
    "full stack developer",
    "MERN stack developer",
    "Next.js developer",
    "React developer",
    "Node.js developer",
    "web developer portfolio",
    "software engineer",
    "frontend developer",
    "backend developer",
  ],
  authors: [{ name: "Kaustubh Bagale", url: "https://kaustubhbagale.me" }],
  creator: "Kaustubh Bagale",
  publisher: "Kaustubh Bagale",
  metadataBase: new URL("https://kaustubhbagale.me"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kaustubhbagale.me",
    siteName: "Kaustubh Bagale",
    title: "Kaustubh Bagale | Full Stack Developer - MERN & Next.js Portfolio",
    description:
      "Full Stack Developer specializing in MERN stack & Next.js. Built scalable platforms serving 100,000+ concurrent users.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kaustubh Bagale - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaustubh Bagale | Full Stack Developer",
    description:
      "Full Stack Developer specializing in MERN stack & Next.js. Built scalable platforms serving 100,000+ concurrent users.",
    creator: "@baggiii1013",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-google-verification-code",
  },
  other: {
    "theme-color": "#050505",
    "msapplication-TileColor": "#050505",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#050505" />
        <meta name="theme-color" content="#050505" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#050505" media="(prefers-color-scheme: light)" />
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
        <MaterialSymbols />
        {/* Structured Data (JSON-LD) for rich search results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Kaustubh Bagale — Updates"
          href="/feed.xml"
        />
      </head>
      <body
        className={`${inter.variable} ${anton.variable} ${spaceGrotesk.variable} font-sans antialiased bg-deep-black text-white selection:bg-white selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}
