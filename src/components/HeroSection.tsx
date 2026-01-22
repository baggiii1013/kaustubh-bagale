"use client";

import Beams from "./bg/LazyBeams";

export default function HeroSection() {
  return (
    <section className="snap-start-card min-w-[var(--card-width)] h-full bg-deep-black flex flex-col justify-center px-6 relative border-r border-white/10 shrink-0 overflow-hidden">
      {/* Beams Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={20}
          lightColor="#FF00FF"
          speed={1.5}
          noiseIntensity={1.5}
          scale={0.15}
          rotation={30}
        />
      </div>

      <div className="absolute top-16 m-2 left-6 opacity-80 z-100 ">
        <span className="font-accent text-2xl tracking-widest uppercase text-neon-green">
          Full Stack Developer (MERN , Next.js &amp; DevOps)
        </span>
      </div>

      <h1 className="font-display text-[20vw] uppercase leading-[0.85] tracking-tighter mt-12 z-10 grid">
        KAUSTUBH
        {/* <br /> */}
        <span className="text-neon-pink mt-2">BAGALE</span>
      </h1>

      <div className="mt-8 pl-4 border-l-4 border-neon-blue z-10">
        <p className="font-accent text-xs uppercase tracking-widest text-white/60 mb-1">
          Key Achievement
        </p>
        <p className="font-display text-2xl leading-none text-white">
          Scalable Systems for
          <br />
          <span className="text-neon-blue">100,000+ Users</span>
        </p>
      </div>

      <div className="mt-12 flex items-center gap-4 z-10">
        <span className="material-symbols-outlined text-4xl animate-bounce text-neon-green">
          arrow_forward
        </span>
        <span className="font-accent uppercase tracking-tighter text-sm">
          Swipe to explore work
        </span>
      </div>

      <div className="absolute bottom-12 right-6 vertical-text font-accent text-[10px] tracking-widest opacity-40 uppercase z-10">
        SCROLL HORIZONTALLY
      </div>
    </section>
  );
}
