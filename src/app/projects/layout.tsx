import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Full Stack & Web Development",
  description:
    "Projects by Kaustubh Bagale — university portals serving 100,000+ users, client sites, and full-stack apps built with React, Next.js, and Node.js.",
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
