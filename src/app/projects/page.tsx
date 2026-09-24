"use client";

// Direct import, not the @/components barrel: the barrel drags TechStackSection
// -> LaserFlow -> three.js (778 KB) into this route's bundle, which it never uses.
import StaggeredMenu from "@/components/StaggeredMenu";
import Link from "next/link";

interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  year: string;
  tags: string[];
  bgColor: "royal-purple" | "neon-green" | "neon-blue" | "neon-pink" | "deep-black";
  href?: string;
  github?: string;
}

const projects: Project[] = [
  {
    id: "convocation-portal",
    number: "01",
    title: "CONVOCATION PORTAL",
    subtitle: "Parul University Convocation Portal",
    description: "High-availability platform with Nginx reverse proxying and load balancing that served 100,000+ concurrent users with zero downtime. Dual-interface system for students and administrators.",
    year: "2025",
    tags: ["React.js", "Node.js", "Nginx", "DevOps"],
    bgColor: "royal-purple",
    // Live portal is offline post-ceremony (subdomain no longer resolves) — code only.
    github: "https://github.com/baggiii1013/convocation-pu",
  },
  {
    id: "pinaka",
    number: "02",
    title: "PINAKA TYPE",
    subtitle: "Terminal-Based Speed Typing App",
    description: "Lightweight TUI for speed typing tests with real-time WPM and accuracy tracking. Optimized terminal rendering and key-event handling for sub-millisecond input latency, cross-platform.",
    year: "2026",
    tags: ["Go", "Bubble Tea", "TUI", "CLI"],
    bgColor: "neon-green",
    github: "https://github.com/baggiii1013/pinaka",
  },
  {
    id: "client-portfolio",
    number: "03",
    title: "CLIENT PORTFOLIO",
    subtitle: "Client Portfolio Website",
    description: "Fully responsive portfolio achieving 100 Lighthouse Performance score. Pixel-perfect, mobile-first interface with seamless cross-browser compatibility.",
    year: "2025",
    tags: ["Next.js", "Tailwind CSS", "Vercel", "Responsive"],
    bgColor: "neon-pink",
    href: "#",
  },
  {
    id: "movieverse-api",
    number: "04",
    title: "MOVIEVERSE",
    subtitle: "Robust Movie Viewing platform",
    description: "Microservices-inspired architecture with JWT authentication and bcrypt security. Optimized database queries for scalable data retrieval.",
    year: "2024",
    tags: ["Express.js", "MongoDB", "JWT", "Microservices"],
    bgColor: "neon-blue",
    href: "#",
    github: "https://github.com/baggiii1013/movieverse-pu",
  },
  {
    id: "spotify-downloader",
    number: "05",
    title: "SPOTIFY DOWNLOADER",
    subtitle: "Full-Stack Media Processing",
    description: "Media processing application interfacing with yt-dlp and FFmpeg. Optimized backend streams for high-quality audio with minimal server latency.",
    year: "2024",
    tags: ["React", "Express.js", "FFmpeg", "yt-dlp"],
    bgColor: "royal-purple",
    href: "#",
    github: "https://github.com/baggiii1013/song-ripper",
  },
  {
    id: "ai-readme-generator",
    number: "06",
    title: "AI README GENERATOR",
    subtitle: "Developer Tooling with AI",
    description: "Leverages AI to parse project structures and generate documentation. Reduces documentation setup time by automating section generation.",
    year: "2024",
    tags: ["Next.js", "Tailwind CSS", "AI Integration", "Developer Tools"],
    bgColor: "neon-green",
    href: "#",
    github: "https://github.com/baggiii1013/readme-generator",
  },
];

const bgColorClasses: Record<string, string> = {
  "royal-purple": "bg-royal-purple",
  "neon-green": "bg-neon-green",
  "neon-blue": "bg-neon-blue",
  "neon-pink": "bg-neon-pink",
  "deep-black": "bg-deep-black",
};

const tagColorClasses: Record<string, string> = {
  "royal-purple": "border-white/30 text-white/80",
  "neon-green": "border-black/30 text-black/80",
  "neon-blue": "border-black/30 text-black/80",
  "neon-pink": "border-black/30 text-black/80",
  "deep-black": "border-white/30 text-white/80",
};

const textColorMap: Record<string, boolean> = {
  "royal-purple": false,
  "neon-green": true,
  "neon-blue": true,
  "neon-pink": true,
  "deep-black": false,
};

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'About me', link: '/#about' },
  { label: 'Tech Stack', ariaLabel: 'View tech stack', link: '/#tech' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/#contact' }
];

const socialItems = [
  { label: 'LinkedIn', link: 'https://www.linkedin.com/in/kaustubh-bagale-1077bb389' },
  { label: 'GitHub', link: 'https://github.com/baggiii1013' },
  { label: 'Twitter', link: 'https://x.com/baggiii1013' },
  { label: 'Instagram', link: 'https://www.instagram.com/kaustubh_bagale10' }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-deep-black overflow-y-auto overflow-x-hidden">
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#ffffff"
        openMenuButtonColor="#000000"
        changeMenuColorOnOpen={true}
        colors={['#FF00FF', '#6200EA']}
        logoUrl=""
        accentColor="#FF00FF"
        isFixed={true}
        closeOnClickAway={true}
        hideLogo={false}
      />

      <main>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex flex-col justify-center px-8 md:px-16 pt-32 pb-16 overflow-hidden">
          <div className="relative z-10">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-white/60 hover:text-neon-pink transition-colors mb-8 font-accent text-sm uppercase tracking-widest"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              Back to Home
            </Link>
            
            <h1 className="font-display text-[15vw] md:text-[10vw] uppercase leading-[0.85] tracking-tighter">
              ALL
              <br />
              <span className="text-neon-pink">PROJECTS</span>
            </h1>
            
            <p className="font-accent text-lg md:text-xl text-white/60 mt-8 max-w-2xl">
              A collection of projects I&apos;ve built over the years. Each one represents a unique challenge and learning experience.
            </p>

            <p className="font-accent text-base text-white/50 mt-6 max-w-2xl leading-relaxed">
              The six below run from university-scale infrastructure to developer
              tooling. The convocation portal held 100,000+ concurrent users behind
              Nginx load balancing with zero downtime; Pinaka is a Go terminal app
              for speed typing tests with sub-millisecond input latency. Smaller builds cover media
              processing with FFmpeg and yt-dlp, JWT-secured REST APIs, and
              AI-assisted documentation. Most are open source — the repository is
              linked on each card. The tools behind them are listed on my{" "}
              <Link href="/#tech" className="text-neon-pink hover:text-neon-blue transition-colors underline underline-offset-4">
                tech stack
              </Link>
              , and the background is on the{" "}
              <Link href="/#about" className="text-neon-pink hover:text-neon-blue transition-colors underline underline-offset-4">
                about section
              </Link>
              .
            </p>
          </div>
        </section>

      {/* Projects Grid */}
      <section className="px-8 md:px-16 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const isLight = textColorMap[project.bgColor];
            
            return (
              <article
                key={project.id}
                className={`${bgColorClasses[project.bgColor]} ${
                  isLight ? "text-black" : "text-white"
                } p-8 md:p-12 relative overflow-hidden group transition-transform hover:scale-[1.02] duration-300`}
              >
                {/* Project Number */}
                <span className={`absolute top-6 right-6 font-display text-6xl md:text-8xl ${isLight ? "opacity-10" : "opacity-10"} leading-none`}>
                  {project.number}
                </span>
                
                {/* Year Badge */}
                <div className={`inline-block px-3 py-1 border ${isLight ? "border-black/30" : "border-white/30"} mb-6`}>
                  <span className="font-accent text-xs uppercase tracking-widest">{project.year}</span>
                </div>
                
                {/* Title */}
                <h2 className="font-display text-4xl md:text-5xl uppercase leading-tight mb-4 tracking-tight">
                  {project.title}
                </h2>
                
                {/* Subtitle */}
                <p className={`font-accent text-sm uppercase tracking-widest ${isLight ? "text-black/60" : "text-white/60"} mb-4`}>
                  {project.subtitle}
                </p>
                
                {/* Description */}
                <p className={`font-accent text-base leading-relaxed ${isLight ? "text-black/80" : "text-white/80"} mb-8`}>
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 border ${tagColorClasses[project.bgColor]} font-accent text-xs uppercase tracking-wider`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Actions */}
                <div className="flex items-center gap-6">
                  {project.href && (
                    <Link
                      href={project.href}
                      className={`inline-flex items-center gap-2 font-display text-lg uppercase tracking-tight ${
                        isLight ? "hover:text-royal-purple" : "hover:text-neon-pink"
                      } transition-colors group/link`}
                    >
                      View Project
                      <span className="material-symbols-outlined text-xl group-hover/link:translate-x-1 transition-transform">
                        north_east
                      </span>
                    </Link>
                  )}
                  {project.github && (
                    <Link
                      href={project.github}
                      className={`inline-flex items-center gap-2 font-display text-lg uppercase tracking-tight ${
                        isLight ? "text-black/60 hover:text-black" : "text-white/60 hover:text-white"
                      } transition-colors`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                      <span className="material-symbols-outlined text-xl">
                        code
                      </span>
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Footer CTA */}
        <section className="px-8 md:px-16 pb-16">
          <div className="border-t border-white/10 pt-16 text-center">
            <p className="font-accent text-lg text-white/60 mb-6">
              Interested in working together?
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-4 border-2 border-neon-pink px-8 py-4 hover:bg-neon-pink/10 transition-all group"
            >
              <span className="font-display text-2xl uppercase tracking-tighter text-neon-pink group-hover:text-neon-blue transition-colors">
                Get in Touch
              </span>
              <span className="material-symbols-outlined text-3xl text-neon-pink group-hover:text-neon-blue group-hover:translate-x-2 transition-all">
                arrow_forward
              </span>
            </Link>
          </div>
        </section>
      </main>

      {/* Copyright */}
      <footer className="px-8 md:px-16 pb-8">
          <div className="font-accent text-[10px] uppercase opacity-40 text-center">
            © {new Date().getFullYear()} / Kaustubh Bagale
          </div>
      </footer>
    </div>
  );
}
