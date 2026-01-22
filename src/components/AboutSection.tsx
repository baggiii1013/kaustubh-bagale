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
    <section className="snap-start-card min-w-[var(--card-width)] h-full bg-deep-black flex flex-col justify-between p-8 md:p-12 relative shrink-0 border-r border-white/10 overflow-hidden">
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

      {/* Header */}
      <div className="mt-8 z-10">
        <div className="w-16 h-1 bg-neon-blue mb-6"></div>
        <h2 className="font-display text-[12vw] md:text-[8vw] uppercase leading-none mb-2">
          ABOUT
          <br />
          <span className="text-stroke-sm text-neon-blue">ME</span>
        </h2>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center z-10 max-w-2xl">
        <div className="space-y-6">
          <div>
            <span className="font-accent text-3xl uppercase tracking-widest text-neon-pink block mb-3">
              Who I Am
            </span>
            <p className="font-body text-xl leading-relaxed text-white/90">
              Final-year <span className="text-neon-blue font-semibold">Computer Science Engineering</span> student 
              at Parul University, specializing in <span className="text-neon-green font-semibold">Scalability</span> and 
              <span className="text-neon-green font-semibold"> Cloud Computing</span> principles.
            </p>
          </div>

          <div>
            <span className="font-accent text-3xl uppercase tracking-widest text-neon-pink block mb-3">
              What I Do
            </span>
            <p className="font-body text-xl leading-relaxed text-white/80">
              Passionate about building robust <span className="text-neon-pink">Microservices</span>, 
              optimizing backend performance, and delivering secure, user-centric web solutions. 
              Successfully architected high-availability systems handling{" "}
              <span className="text-neon-green font-bold">100,000+ concurrent users</span>.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            {skills.map((skill) => (
              <div key={skill.category} className="border-l-2 border-white/20 pl-4">
                <span className="font-accent text-xl uppercase tracking-widest text-white/50 block mb-2">
                  {skill.category}
                </span>
                <div className="flex flex-wrap gap-1">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="font-body text-lg text-white/70 bg-white/5 px-2 py-1 rounded"
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

      {/* Footer */}
      <div className="flex justify-between items-end border-t border-white/10 pt-6 z-10">
        <div className="font-display text-3xl uppercase tracking-tighter italic text-neon-blue">
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
