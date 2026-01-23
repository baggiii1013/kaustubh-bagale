"use client";

import { useEffect, useRef, useState } from "react";
import Beams from "./bg/LazyBeams";

interface ProjectCardProps {
  number: string;
  title: string;
  titleSecondLine?: string;
  subtitle: string;
  description: string;
  year: string;
  ctaText: string;
  ctaIcon: string;
  bgColor: "royal-purple" | "neon-green" | "neon-blue";
  textColor?: "white" | "black";
  titleStroke?: boolean;
  href?: string;
}

const bgColorClasses = {
  "royal-purple": "bg-royal-purple",
  "neon-green": "bg-neon-green",
  "neon-blue": "bg-neon-blue",
};

const beamLightColors = {
  "royal-purple": "#9D4EDD",
  "neon-green": "#CCFF00",
  "neon-blue": "#00F0FF",
};

const hoverBgClasses = {
  "royal-purple": "group-hover:bg-white group-hover:text-royal-purple",
  "neon-green": "group-hover:bg-black group-hover:text-neon-green",
  "neon-blue": "group-hover:bg-black group-hover:text-neon-blue",
};

export default function ProjectCard({
  number,
  title,
  titleSecondLine,
  subtitle,
  description,
  year,
  ctaText,
  ctaIcon,
  bgColor,
  textColor = "white",
  titleStroke = false,
  href = "#",
}: ProjectCardProps) {
  const isLight = textColor === "black";
  const numberOpacity = isLight ? "opacity-20" : "opacity-10";
  const borderColor = isLight ? "border-black/20" : "border-white/20";
  const accentBarColor = isLight ? "bg-black" : "bg-neon-green";
  const buttonBorderColor = isLight ? "border-black" : "border-white";
  const sectionRef = useRef<HTMLElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleCardClick = () => {
    if (href && href !== "#") {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !href || href === "#") return;

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseenter", handleMouseEnter);
    section.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseenter", handleMouseEnter);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [href]);

  return (
    <section
      ref={sectionRef}
      onClick={handleCardClick}
      className={`snap-start-card min-w-[var(--card-width)] h-full ${bgColorClasses[bgColor]} ${
        isLight ? "text-black" : "text-white"
      } flex flex-col justify-end p-8 pl-14 md:p-12 relative shrink-0 overflow-hidden group/card ${href && href !== "#" ? "cursor-none" : ""}` }
    >
      {/* Custom Cursor */}
      {href && href !== "#" && (
        <div 
          className={`fixed w-16 h-16 rounded-full bg-white/90 pointer-events-none z-[100] flex items-center justify-center transition-opacity duration-200 ${isHovering ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            left: cursorPos.x,
            top: cursorPos.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <span className="material-symbols-outlined text-2xl text-deep-black">north_east</span>
        </div>
      )}
      {/* Beams Background */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-30 pointer-events-none">
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={18}
          lightColor={beamLightColors[bgColor]}
          speed={1.2}
          noiseIntensity={1.5}
          scale={0.15}
          rotation={-20}
        />
      </div>

      <div
        className={`absolute top-12 right-12 text-[15vw] font-display ${numberOpacity} leading-none z-10`}
      >
        {number}
      </div>

      <div className="mb-auto mt-24 z-10 ml-0 md:ml-35.75 ">
        <div className={`w-20 h-1 ${accentBarColor} mb-6`}></div>
        <h2 className="font-display text-[15vw] uppercase leading-none mb-4">
          {title}
          <br />
          {titleSecondLine && (
            <span className={titleStroke ? "text-stroke-sm" : ""}>
              {titleSecondLine}
            </span>
          )}
        </h2>
        <p className="font-accent text-xl max-w-xs leading-tight font-bold">
          {subtitle}
        </p>
        <p
          className={`font-body text-sm mt-3 max-w-xs ${
            isLight ? "opacity-80 font-bold" : "opacity-90"
          }`}
        >
          {description}
        </p>
      </div>

      <div className={`flex justify-between items-end border-t ${borderColor} pt-8 z-10`}>
        <div className="font-display text-4xl uppercase tracking-tighter italic">
          {year}
        </div>
        <a
          href={href}
          className="group cursor-pointer flex items-center gap-2"
        >
          <span className="uppercase font-bold tracking-widest text-xs">
            {ctaText}
          </span>
          <div
            className={`w-8 h-8 rounded-full border ${buttonBorderColor} flex items-center justify-center ${hoverBgClasses[bgColor]} transition-all`}
          >
            <span className="material-symbols-outlined text-sm">{ctaIcon}</span>
          </div>
        </a>
      </div>
    </section>
  );
}
