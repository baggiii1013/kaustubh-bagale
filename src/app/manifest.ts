import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kaustubh Bagale - Full Stack Developer",
    short_name: "Kaustubh Bagale",
    description:
      "Full Stack Developer specializing in MERN stack & Next.js. Built scalable platforms serving 100,000+ concurrent users.",
    start_url: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#050505",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
