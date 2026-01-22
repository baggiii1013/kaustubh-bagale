"use client";

import Link from "next/link";

export default function ArchiveSection() {
  return (
    <section className="snap-start-card min-w-[var(--card-width)] h-full bg-deep-black flex flex-col justify-center items-center p-8 relative shrink-0 border-r border-white/10">
      <div className="text-center z-10">
        <h3 className="font-display text-[12vw] uppercase leading-none mb-8">
          CURIOSITY
          <br />
          <span className="text-stroke-sm text-neon-pink">DRIVEN</span>
        </h3>
        <Link
          className="inline-flex items-center gap-6 border-2 border-neon-pink px-8 py-6 hover:bg-neon-pink/10 transition-all group"
          href="/projects"
        >
          <span className="font-display text-3xl uppercase tracking-tighter text-neon-pink group-hover:text-neon-blue transition-colors">
            View All Projects
          </span>
          <span className="material-symbols-outlined text-4xl text-neon-pink group-hover:text-neon-blue group-hover:translate-x-2 transition-all">
            arrow_forward
          </span>
        </Link>
      </div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 font-accent text-[10px] tracking-[0.4em] opacity-30 uppercase whitespace-nowrap">
        Portfolio Archive 2021-2025
      </div>
    </section>
  );
}
