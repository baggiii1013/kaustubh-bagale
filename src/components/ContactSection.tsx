"use client";

import Beams from "./bg/LazyBeams";

interface SocialLink {
  name: string;
  href: string;
}

interface ContactSectionProps {
  email?: string;
  phone?: string;
  socials?: SocialLink[];
}

const defaultSocials: SocialLink[] = [
  { name: "LinkedIn", href: "#" },
  { name: "GitHub", href: "#" },
  { name: "Twitter", href: "#" },
  { name: "Instagram", href: "#" },
];

export default function ContactSection({
  email = "hello@kaustubh.dev",
  phone = "+91 98765 43210",
  socials = defaultSocials,
}: ContactSectionProps) {
  const handleScrollToStart = () => {
    document.querySelector("main")?.scrollTo({ left: 0, behavior: "smooth" });
  };

  return (
    <section className="snap-start-card min-w-full h-full bg-deep-black flex flex-col justify-between p-8 md:p-12 shrink-0 relative overflow-hidden">
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
          rotation={-30}
        />
      </div>

      <div className="mt-16 md:mt-20 z-10 flex-shrink-0">
        <h2 className="font-display text-[18vw] md:text-[12vw] lg:text-[10vw] uppercase leading-none text-neon-pink mb-8 md:mb-12">
          LET&apos;S
          <br />
          TALK
        </h2>
        <div className="space-y-6 md:space-y-8">
          <div>
            <span className="font-accent text-xs uppercase tracking-widest text-white/50 block mb-2">
              Drop a line
            </span>
            <a
              className="block font-display text-2xl md:text-3xl hover:text-neon-pink transition-colors underline decoration-2 underline-offset-8 break-all"
              href={`mailto:${email}`}
            >
              {email}
            </a>
          </div>
          <div>
            <span className="font-accent text-xs uppercase tracking-widest text-white/50 block mb-2">
              Call
            </span>
            <a
              className="block font-display text-2xl md:text-3xl hover:text-neon-green transition-colors"
              href={`tel:${phone.replace(/\s/g, "")}`}
            >
              {phone}
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 md:gap-8 z-10 flex-shrink-0 pb-4">
        <div className="grid grid-cols-2 gap-4 uppercase font-accent text-xs tracking-[0.2em]">
          {socials.map((social) => (
            <a
              key={social.name}
              className="hover:text-neon-pink transition-colors"
              href={social.href}
            >
              {social.name}
            </a>
          ))}
        </div>
        <div className="flex justify-between items-end border-t border-white/10 pt-6">
          <div className="font-accent text-[10px] uppercase opacity-40">
            © {new Date().getFullYear()} / Kaustubh Bagale
          </div>
          <button
            className="font-display text-xl uppercase tracking-widest hover:text-neon-pink transition-colors"
            onClick={handleScrollToStart}
          >
            Back to start ↑
          </button>
        </div>
      </div>
    </section>
  );
}
