"use client";

interface ScrollIndicatorProps {
  totalSections?: number;
  activeIndex?: number;
}

export default function ScrollIndicator({ 
  totalSections = 5,
  activeIndex = 0 
}: ScrollIndicatorProps) {
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
