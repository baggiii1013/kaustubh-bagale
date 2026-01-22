"use client";

import {
  ContactSection,
  HeroSection,
  LoadingScreen,
  ProjectCard,
  ScrollIndicator,
  StaggeredMenu,
  TechStackSection,
} from "@/components";
import { useCallback, useEffect, useRef, useState } from "react";

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home section', link: '#home' },
  { label: 'Projects', ariaLabel: 'View projects', link: '#projects' },
  { label: 'Tech Stack', ariaLabel: 'View tech stack', link: '#tech' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' }
];

const socialItems = [
  { label: 'LinkedIn', link: 'https://linkedin.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'Instagram', link: 'https://instagram.com' }
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const mainRef = useRef<HTMLElement>(null);
  const totalSections = 5;

  useEffect(() => {
    // Simulate component loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust this duration as needed

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = useCallback((index: number) => {
    const main = mainRef.current;
    if (!main) return;
    
    const clampedIndex = Math.max(0, Math.min(index, totalSections - 1));
    const sections = main.querySelectorAll('section');
    
    if (sections[clampedIndex]) {
      const section = sections[clampedIndex] as HTMLElement;
      // Use scrollTo for better cross-browser compatibility (especially Firefox)
      main.scrollTo({
        left: section.offsetLeft,
        behavior: 'smooth'
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

  // Track scroll position to update current section
  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;

    const handleScroll = () => {
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
    <>
      {isLoading && <LoadingScreen />}
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
        onItemClick={(item) => {
          const sectionMap: Record<string, number> = {
            '#home': 0,
            '#projects': 1,
            '#tech': 3,
            '#contact': 4,
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

        {/* Project 1: Convocation Portal */}
        <ProjectCard
          number="01"
          title="CONVOCATION"
          titleSecondLine="PORTAL"
          subtitle="Parul University Convocation Portal"
          description="End-to-end management system streamlining graduation ceremonies for thousands."
          year="2023"
          ctaText="View Project"
          ctaIcon="north_east"
          bgColor="royal-purple"
          textColor="white"
        />

        {/* Project 2: Spotify Loader */}
        <ProjectCard
          number="02"
          title="SPOTIFY"
          titleSecondLine="DOWNLOADER"
          subtitle="Spotify Music Downloader"
          description="High-performance tool for seamless music data extraction."
          year="2022"
          ctaText="View Code"
          ctaIcon="north_east"
          bgColor="neon-green"
          textColor="black"
          // titleStroke
        />

        {/* Tech Stack Section */}
        <TechStackSection resumeHref="#" />

        {/* Contact Section */}
        <ContactSection
          email="hello@kaustubh.dev"
          phone="+91 98765 43210"
          socials={[
            { name: "LinkedIn", href: "#" },
            { name: "GitHub", href: "#" },
            { name: "Twitter", href: "#" },
            { name: "Instagram", href: "#" },
          ]}
        />
      </main>

      <ScrollIndicator totalSections={5} activeIndex={currentSection} />
    </>
  );
}
