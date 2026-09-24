"use client";

import {
    AboutSection,
    ArchiveSection,
    ContactSection,
    FaqSection,
    HeroSection,
    LoadingScreen,
    ProjectCard,
    ProjectsBar,
    ScrollIndicator,
    StaggeredMenu,
    TechStackSection,
} from "@/components";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useCallback, useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollToPlugin);

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home section', link: '#home' },
  { label: 'About', ariaLabel: 'About me', link: '#about' },
  { label: 'Projects', ariaLabel: 'View projects', link: '#projects' },
  { label: 'Tech Stack', ariaLabel: 'View tech stack', link: '#tech' },
  { label: 'FAQ', ariaLabel: 'Frequently asked questions', link: '#faq' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' }
];

const socialItems = [
  { label: 'GitHub', link: 'https://github.com/baggiii1013' },
  { label: 'Instagram', link: 'https://www.instagram.com/kaustubh_bagale10' },
  { label: 'LinkedIn', link: 'https://www.linkedin.com/in/kaustubh-bagale-1077bb389' },
  { label: 'X', link: 'https://x.com/baggiii1013' }
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const mainRef = useRef<HTMLElement>(null);
  const totalSections = 8;

  useEffect(() => {
    // Check if mobile - skip loading delay for better LCP
    const isMobile = window.innerWidth < 768 || 'ontouchstart' in window;
    
    if (isMobile) {
      // Immediate load on mobile for better performance
      setIsLoading(false);
      return;
    }

    // Desktop: Use requestIdleCallback for smarter loading, fallback to 800ms
    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(() => setIsLoading(false), { timeout: 1000 });
      return () => cancelIdleCallback(id);
    } else {
      const timer = setTimeout(() => setIsLoading(false), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const scrollToSection = useCallback((index: number) => {
    const main = mainRef.current;
    if (!main) return;
    
    const clampedIndex = Math.max(0, Math.min(index, totalSections - 1));
    const sections = main.querySelectorAll('section');
    
    if (sections[clampedIndex]) {
      const section = sections[clampedIndex] as HTMLElement;
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      // Mandatory snap re-snaps every frame of a programmatic scroll, so disable it for the tween
      main.style.scrollSnapType = 'none';
      gsap.to(main, {
        scrollTo: { x: section.offsetLeft, autoKill: false },
        duration: reduceMotion ? 0 : 0.9,
        ease: 'power3.inOut',
        overwrite: true,
        onComplete: () => { main.style.scrollSnapType = ''; },
      });
      setCurrentSection(clampedIndex);
    }
  }, [totalSections]);

  // Arrow key navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isLoading) return;
      
      // Prevent default behavior for arrow keys
      if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
        e.preventDefault();
      }
      
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        scrollToSection(currentSection + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        scrollToSection(currentSection - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSection, isLoading, scrollToSection]);

  // Vertical mouse wheel -> horizontal section navigation
  const lastWheelNav = useRef(0);
  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;

    const handleWheel = (e: WheelEvent) => {
      // Horizontal swipes scroll natively; ctrl+wheel is zoom
      if (isLoading || e.ctrlKey || Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;

      // Let nested vertical scrollers (About, FAQ, Tech) consume the wheel until they hit their edge
      for (let el = e.target as HTMLElement | null; el && el !== main; el = el.parentElement) {
        if (el.scrollHeight > el.clientHeight && /auto|scroll/.test(getComputedStyle(el).overflowY)) {
          const canScroll = e.deltaY > 0
            ? el.scrollTop + el.clientHeight < el.scrollHeight - 1
            : el.scrollTop > 0;
          if (canScroll) return;
        }
      }

      e.preventDefault();
      // ponytail: fixed cooldown (tween + inertia tail) so one gesture = one section; very long trackpad inertia may still advance twice
      const now = Date.now();
      if (now - lastWheelNav.current < 1000) return;
      lastWheelNav.current = now;
      scrollToSection(currentSection + (e.deltaY > 0 ? 1 : -1));
    };

    main.addEventListener('wheel', handleWheel, { passive: false });
    return () => main.removeEventListener('wheel', handleWheel);
  }, [currentSection, isLoading, scrollToSection]);

  // Track scroll position to update current section
  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;

    const handleScroll = () => {
      // scrollToSection already set the target; don't re-render through every section mid-tween
      if (gsap.isTweening(main)) return;
      const sections = main.querySelectorAll('section');
      const scrollLeft = main.scrollLeft;
      const mainWidth = main.clientWidth;
      
      sections.forEach((section, index) => {
        const sectionLeft = section.offsetLeft;
        if (scrollLeft >= sectionLeft - mainWidth / 2 && scrollLeft < sectionLeft + section.offsetWidth - mainWidth / 2) {
          setCurrentSection(index);
        }
      });
    };

    main.addEventListener('scroll', handleScroll);
    return () => main.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden">
      {isLoading && <LoadingScreen />}
      <ProjectsBar containerRef={mainRef} />
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
        hideLogo={currentSection === 0}
        onItemClick={(item) => {
          const sectionMap: Record<string, number> = {
            '#home': 0,
            '#about': 1,
            '#projects': 2,
            '#tech': 5,
            '#faq': 6,
            '#contact': 7,
          };
          const index = sectionMap[item.link];
          if (index !== undefined) {
            scrollToSection(index);
          }
        }}
      />

      <main ref={mainRef} className="h-screen w-screen overflow-x-auto overflow-y-hidden snapping-container flex hide-scrollbar">
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Project 1: Convocation Portal */}
        <ProjectCard
          number="01"
          title="CONVOCATION"
          titleSecondLine="PORTAL"
          subtitle="Parul University Convocation Portal"
          description="End-to-end management system streamlining graduation ceremonies for thousands.99% uptime with upto 100,000+ users"
          year="2025"
          ctaText="View Code"
          ctaIcon="north_east"
          bgColor="royal-purple"
          textColor="white"
          // The live portal was taken down after the ceremony — its subdomain no
          // longer resolves, so the CTA points at the source instead.
          href="https://github.com/baggiii1013/convocation-pu"
        />

        {/* Project 2: Client Portfolio */}
        <ProjectCard
          number="02"
          title="Admission"
          titleSecondLine="Portal"
          subtitle="For first year studeni"
          description="Fully responsive, custom portfolio website with perfect 100 Lighthouse Performance score."
          year="2026"
          ctaText="View Site"
          ctaIcon="north_east"
          bgColor="neon-green"
          textColor="black"
          href="https://parul-student-hub.vercel.app"
        />

        {/* Archive / View All Projects Section */}
        <ArchiveSection />

        {/* Tech Stack Section — change variant to: "grid" | "orbit" | "brutalist" | "marquee" */}
        <TechStackSection resumeHref="/KaustubhBagaleResume.pdf" variant="grid" />

        {/* FAQ Section */}
        <FaqSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      <ScrollIndicator totalSections={totalSections} activeIndex={currentSection} />
    </div>
  );
}
