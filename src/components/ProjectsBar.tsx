"use client";

import { useEffect, useState } from "react";

interface ProjectsBarProps {
  containerRef: React.RefObject<HTMLElement | null>;
}

export default function ProjectsBar({ containerRef }: ProjectsBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const checkVisibility = () => {
      const sections = container.querySelectorAll("section");
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.clientWidth;

      // New order: Hero(0), About(1), Project1(2), Project2(3), Archive(4), TechStack(5), Contact(6)
      // Projects start at index 2 and archive is at index 4
      const projectStartSection = sections[2];
      const archiveSection = sections[4];

      if (!projectStartSection || !archiveSection) {
        setIsVisible(false);
        return;
      }

      const projectsStart = projectStartSection.offsetLeft;
      const archiveEnd = archiveSection.offsetLeft + archiveSection.offsetWidth;

      // Show bar when scroll position is within the projects-to-archive range
      const isInRange =
        scrollLeft >= projectsStart - containerWidth * 0.3 &&
        scrollLeft < archiveEnd - containerWidth * 0.5;

      setIsVisible(isInRange);
    };

    container.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Initial check

    return () => container.removeEventListener("scroll", checkVisibility);
  }, [containerRef]);

  return (
    <div
      className={`fixed left-0 top-0 h-full z-40 hidden md:flex items-center transition-all duration-500 ${
        isVisible
          ? "opacity-100 translate-x-0 mb-7"
          : "opacity-0 -translate-x-full pointer-events-none"
      }`}
    >
      <div className="h-full w-39 bg-neon-pink flex items-center justify-center">
        <span
          className="font-display text-9xl tracking-[0.3em] text-deep-black uppercase"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            transform: "rotate(180deg)",
          }}
        >
          PROJECTS
        </span>
      </div>
    </div>
  );
}
