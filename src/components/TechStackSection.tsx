"use client";

const techStack = ["Java", "MongoDB", "Docker", "React", "Next.js","Postgres"];

interface TechStackSectionProps {
  resumeHref?: string;
}

export default function TechStackSection({ resumeHref = "#" }: TechStackSectionProps) {
  return (
    <section className="snap-start-card min-w-[var(--card-width)] h-full bg-neon-blue text-black flex flex-col justify-end p-8 relative shrink-0">
      <div className="absolute top-12 right-12 text-[15vw] font-display opacity-10 leading-none">
        03
      </div>

      <div className="mb-auto mt-24">
        <div className="inline-block px-3 py-1 bg-black text-neon-blue font-accent text-[10px] uppercase mb-6">
          Core Competencies
        </div>
        <h2 className="font-display text-[15vw] uppercase leading-none mb-4">
          TECH
          <br />
          STACK
        </h2>
        <div className="flex flex-wrap gap-2 max-w-xs font-accent font-bold text-lg">
          {techStack.map((tech, index) => (
            <span key={tech} className="flex items-center gap-2">
              <span className="border-b-2 border-black">{tech}</span>
              {index < techStack.length - 1 && (
                <span className="opacity-50">•</span>
              )}
            </span>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-end border-t border-black/20 pt-8">
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
            <span className="material-symbols-outlined text-sm">description</span>
          </div>
        </a>
      </div>
    </section>
  );
}
