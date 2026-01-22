"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-6 mix-blend-difference">
      <div className="flex flex-col font-display text-2xl uppercase leading-[0.8] tracking-tighter">
        <span>KAUSTUBH</span>
        <span>BAGALE</span>
      </div>
      <button 
        className="w-12 h-12 flex flex-col justify-center items-end gap-1.5 group"
        aria-label="Open menu"
        title="Open menu"
      >
        <span className="w-8 h-1 bg-white"></span>
        <span className="w-6 h-1 bg-white transition-all group-hover:w-8"></span>
      </button>
    </nav>
  );
}
