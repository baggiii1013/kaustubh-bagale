"use client";

import Beams from "./bg/Beams";

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

  return (
    <section
      className={`snap-start-card min-w-[var(--card-width)] h-full ${bgColorClasses[bgColor]} ${
        isLight ? "text-black" : "text-white"
      } flex flex-col justify-end p-8 relative shrink-0 overflow-hidden`}
    >
      {/* Beams Background */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-30">
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

      <div className="mb-auto mt-24 z-10">
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
