import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Full Stack & Web Development",
  description:
    "Explore projects by Kaustubh Bagale — from high-scale university portals serving 100,000+ users to client portfolios and full-stack web applications built with React, Next.js, Node.js, and more.",
  openGraph: {
    title: "Projects — Full Stack & Web Development Work | Kaustubh Bagale",
    description:
      "Explore projects by Kaustubh Bagale — high-scale portals, full-stack web apps, and more.",
    url: "https://kaustubhbagale.me/projects",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kaustubh Bagale - Projects",
      },
    ],
  },
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
