"use client";

import {
    ContactSection,
    HeroSection,
    LoadingScreen,
    Navbar,
    ProjectCard,
    ScrollIndicator,
    TechStackSection,
} from "@/components";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate component loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust this duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <Navbar />

      <main className="h-screen w-screen overflow-x-auto overflow-y-hidden snapping-container flex hide-scrollbar">
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

      <ScrollIndicator totalSections={5} />
    </>
  );
}
