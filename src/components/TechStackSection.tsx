"use client";

import Beams from "./bg/LazyBeams";
import { Description } from "./icons/MaterialIcon";

const techStack = ["Java", "MongoDB", "Docker", "React", "Next.js", "Postgres", "Python", "Bun.js", "Firebase", "AWS", "Vite", "Rust"];

interface TechStackSectionProps {
  resumeHref?: string;
}

export default function TechStackSection({ resumeHref = "#" }: TechStackSectionProps) {
  // Duplicate the array for seamless looping
  const duplicatedTechStack = [...techStack, ...techStack];

  return (
    <section className="snap-start-card w-[var(--card-width)] min-w-[var(--card-width)] max-w-[var(--card-width)] h-full bg-neon-blue text-black flex flex-col justify-between p-8 relative shrink-0 overflow-hidden">
      {/* Beams Background */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-30 pointer-events-none">
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={18}
          lightColor="#00F0FF"
          speed={1.2}
          noiseIntensity={1.5}
          scale={0.15}
          rotation={45}
        />
      </div>

      <div className="absolute top-12 right-12 text-[15vw] font-display opacity-10 leading-none z-10">
        03
      </div>

      <div className="mb-auto mt-24 z-10">
        <div className="inline-block px-3 py-1 bg-black text-neon-blue font-accent text-[10px] uppercase mb-6">
          Core Competencies
        </div>
        <h2 className="font-display text-[15vw] uppercase leading-none mb-4">
          TECH
          <br />
          STACK
        </h2>
      </div>

      {/* Revolving Tech Stack Band */}
      <div className="relative w-full overflow-hidden py-6 my-8 z-10">
        {/* Background stripe */}
        <div className="absolute inset-0 bg-black/10 border-y-2 border-black" />
        
        {/* Scrolling content */}
        <div className="relative flex whitespace-nowrap">
          <div className="flex gap-8 animate-[scroll-left_20s_linear_infinite]">
            {duplicatedTechStack.map((tech, index) => (
              <span
                key={`${tech}-${index}`}
                className="font-accent font-bold text-3xl uppercase tracking-wide inline-block"
              >
                | {tech} |
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-end border-t border-black/20 pt-8 z-10">
        <div className="font-display text-4xl uppercase tracking-tighter italic">
          TOOLKIT
        </div>
        <a
          href={resumeHref}
          className="group cursor-pointer flex items-center gap-2"
        >
          <span className="uppercase font-bold tracking-widest text-xs">
            Resume
          </span>
          <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-neon-blue transition-all">
            <Description className="text-sm" />
          </div>
        </a>
      </div>
    </section>
  );
}
