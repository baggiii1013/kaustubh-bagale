"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsComplete(true), 300);
          return 100;
        }
        // Smoother progress increment
        return prev + Math.random() * 3;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  if (isComplete) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-deep-black flex items-center justify-center transition-opacity duration-500 ${
        progress >= 100 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Animated Logo/Title */}
        <div className="relative">
          <h1 className="font-display text-8xl md:text-9xl uppercase text-white animate-pulse">
            KB
          </h1>
          {/* Glitch effect bars */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-full h-0.5 bg-neon-pink animate-scan" 
                 style={{ 
                   animation: "scan 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" 
                 }} 
            />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 md:w-96 relative">
          {/* Background */}
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            {/* Progress Fill */}
            <div
              className="h-full bg-gradient-to-r from-neon-pink via-neon-blue to-neon-green transition-all duration-300 ease-out relative"
              style={{ width: `${Math.min(progress, 100)}%` }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-white/30 blur-sm" />
            </div>
          </div>
          
          {/* Percentage Text */}
          <div className="mt-4 text-center">
            <span className="font-accent text-sm text-white/50 tracking-[0.3em]">
              {Math.floor(Math.min(progress, 100))}%
            </span>
          </div>
        </div>

        {/* Loading Text */}
        <div className="font-accent text-xs uppercase tracking-[0.4em] text-white/40 animate-pulse">
          INITIALIZING<span className="animate-pulse">...</span>
        </div>
      </div>

      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
    </div>
  );
}
