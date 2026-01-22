"use client";

export default function HeroSection() {
  return (
    <section className="snap-start-card min-w-[var(--card-width)] h-full bg-deep-black flex flex-col justify-center px-6 relative border-r border-white/10 shrink-0">
      <div className="absolute top-24 left-6 opacity-80">
        <span className="font-accent text-xs tracking-widest uppercase text-neon-green">
          Full Stack Developer (MERN &amp; Next.js)
        </span>
      </div>

      <h1 className="font-display text-[20vw] uppercase leading-[0.85] tracking-tighter mt-12">
        KAUSTUBH
        <br />
        <span className="text-neon-pink">BAGALE</span>
      </h1>

      <div className="mt-8 pl-4 border-l-4 border-neon-blue">
        <p className="font-accent text-xs uppercase tracking-widest text-white/60 mb-1">
          Key Achievement
        </p>
        <p className="font-display text-2xl leading-none text-white">
          Scalable Systems for
          <br />
          <span className="text-neon-blue">100,000+ Users</span>
        </p>
      </div>

      <div className="mt-12 flex items-center gap-4">
        <span className="material-symbols-outlined text-4xl animate-bounce text-neon-green">
          arrow_forward
        </span>
        <span className="font-accent uppercase tracking-tighter text-sm">
          Swipe to explore work
        </span>
      </div>

      <div className="absolute bottom-12 right-6 vertical-text font-accent text-[10px] tracking-widest opacity-40 uppercase">
        SCROLL HORIZONTALLY
      </div>
    </section>
  );
}
