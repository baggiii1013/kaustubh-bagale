"use client";

import LazyBeams from "@/components/bg/LazyBeams";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-deep-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Beams background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <LazyBeams lightColor="#FF00FF" beamNumber={4} speed={0.5} />
      </div>

      {/* Background grid effect */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-4">
        {/* Label */}
        <span className="font-accent text-xs uppercase tracking-[0.4em] text-white/40">
          Error
        </span>

        {/* Giant 404 with scan-line glitch */}
        <div className="relative select-none">
          <h1 className="font-display text-[30vw] md:text-[20vw] uppercase leading-[0.85] tracking-tighter text-white">
            404
          </h1>

          {/* Neon pink scan-line glitch overlay */}
          <div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ containerType: "size" }}
          >
            <div
              className="absolute w-full h-0.5 bg-neon-pink"
              style={{
                animation: "scan 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                top: 0,
              }}
            />
          </div>

          {/* Subtle text stroke duplicate for depth */}
          <h1
            className="font-display text-[30vw] md:text-[20vw] uppercase leading-[0.85] tracking-tighter text-stroke-sm text-neon-pink absolute inset-0 opacity-10 pointer-events-none"
            aria-hidden="true"
          >
            404
          </h1>
        </div>

        {/* Subtitle */}
        <p className="font-accent text-base md:text-lg uppercase tracking-[0.3em] text-white/60">
          Page not found
        </p>

        {/* Description */}
        <p className="font-sans text-sm text-white/40 text-center max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        {/* Divider */}
        <div className="w-16 h-px bg-linear-to-r from-transparent via-neon-pink to-transparent" />

        {/* CTA */}
        <Link
          href="/"
          className="font-accent text-sm uppercase tracking-[0.3em] text-neon-pink hover:text-neon-blue transition-colors duration-300 group"
        >
          <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>{" "}
          Back to Home
        </Link>
      </div>
    </div>
  );
}
