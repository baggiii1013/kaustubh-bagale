"use client";

import Beams from "./bg/LazyBeams";

export default function AboutSection() {
  const skills = [
    { category: "Languages", items: ["Java", "JavaScript", "Python", "C++"] },
    { category: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "Vite"] },
    { category: "Backend", items: ["Node.js", "Express.js", "RESTful APIs", "Microservices"] },
    { category: "DevOps", items: ["Docker", "Nginx", "Git", "Vercel"] },
  ];

  return (
    <section className="snap-start-card w-[var(--card-width)] h-full bg-deep-black flex flex-col p-6 md:p-12 relative shrink-0 border-r border-white/10 overflow-hidden">
      {/* Beams Background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-40">
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={15}
          lightColor="#00F0FF"
          speed={1}
          noiseIntensity={1.5}
          scale={0.15}
          rotation={15}
        />
      </div>

      {/* Header - Fixed at Top */}
      <div className="z-10 shrink-0 mt-20.25 mb-4 md:mb-8">
        <div className="w-16 h-1 bg-neon-blue mb-4 md:mb-6"></div>
        <h2 className="font-display text-[12vw] md:text-[6vw] uppercase leading-none">
          ABOUT
          <br />
          <span className="text-stroke-sm text-neon-blue">ME</span>
        </h2>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 w-full z-10 overflow-y-auto scrollbar-none md:scrollbar-thin md:scrollbar-track-transparent md:scrollbar-thumb-neon-blue/20 hover:md:scrollbar-thumb-neon-blue/50 pr-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 pb-20 md:pb-0 min-h-min">
          
          {/* Left Column: Text Content */}
          <div className="space-y-8">
            <div>
              <span className="font-accent text-lg md:text-2xl uppercase tracking-widest text-neon-pink block mb-3">
                Who I Am
              </span>
              <p className="font-body text-base md:text-lg leading-relaxed text-white/90">
                Final-year <span className="text-neon-blue font-semibold">Computer Science Engineering</span> student 
                at Parul University, specializing in <span className="text-neon-green font-semibold">Scalability</span> and
                <span className="text-neon-green font-semibold"> Cloud Computing</span> principles.
              </p>
            </div>

            <div>
              <span className="font-accent text-lg md:text-2xl uppercase tracking-widest text-neon-pink block mb-3">
                What I Do
              </span>
              <p className="font-body text-base md:text-lg leading-relaxed text-white/80">
                Passionate about building robust <span className="text-neon-pink">Microservices</span>, 
                optimizing backend performance, and delivering secure, user-centric web solutions. 
                Successfully architected high-availability systems handling{" "}
                <span className="text-neon-green font-bold">100,000+ concurrent users</span>.
                I am Full Stack Developer along with expertise in DevOps.
              </p>
            </div>
          </div>

          {/* Right Column: Skills */}
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {skills.map((skill) => (
                <div key={skill.category} className="border-l-2 border-white/20 pl-4 bg-white/5 p-3 rounded-r-lg hover:bg-white/10 transition-colors">
                  <span className="font-accent text-xs md:text-sm uppercase tracking-widest text-neon-blue block mb-3">
                    {skill.category}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="font-body text-xs text-white/90 bg-black/40 border border-white/10 px-2 py-1 rounded"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Fixed at Bottom */}
      <div className="flex justify-between items-end border-t border-white/10 pt-4 md:pt-6 z-10 shrink-0 mt-4 bg-deep-black/80 backdrop-blur-sm">
        <div className="font-display text-2xl md:text-3xl uppercase tracking-tighter italic text-neon-blue">
          B.Tech CSE
        </div>
        <div className="text-right">
          <span className="font-accent text-[10px] uppercase tracking-widest text-white/40 block">
            Location
          </span>
          <span className="font-accent text-sm text-white/80">
            India
          </span>
        </div>
      </div>
    </section>
  );
}
