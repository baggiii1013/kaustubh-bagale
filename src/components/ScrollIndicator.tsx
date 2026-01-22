"use client";

import { useCallback, useEffect, useState } from "react";

interface ScrollIndicatorProps {
  totalSections?: number;
}

export default function ScrollIndicator({ totalSections = 5 }: ScrollIndicatorProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    const main = document.querySelector("main");
    if (!main) return;

    const scrollLeft = main.scrollLeft;
    const cardWidth = main.scrollWidth / totalSections;
    const newIndex = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(newIndex, totalSections - 1));
  }, [totalSections]);

  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;

    main.addEventListener("scroll", handleScroll);
    return () => main.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-2">
      {Array.from({ length: totalSections }).map((_, index) => (
        <div
          key={index}
          className={`w-8 h-1 transition-all duration-300 ${
            index === activeIndex ? "bg-white" : "bg-white/20"
          }`}
        />
      ))}
    </div>
  );
}
