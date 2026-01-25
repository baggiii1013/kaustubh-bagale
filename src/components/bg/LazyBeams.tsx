"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

interface BeamsProps {
  beamWidth?: number;
  beamHeight?: number;
  beamNumber?: number;
  lightColor?: string;
  speed?: number;
  noiseIntensity?: number;
  scale?: number;
  rotation?: number;
}

// Lazy load the Beams component with no SSR
const BeamsComponent = dynamic<BeamsProps>(() => import("./Beams"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-transparent" />,
});

// CSS gradient fallback for mobile - much lighter than Three.js
function MobileBeamsFallback({ lightColor }: { lightColor?: string }) {
  const color = lightColor || '#ffffff';
  return (
    <div 
      className="w-full h-full opacity-20"
      style={{
        background: `radial-gradient(ellipse at 50% 0%, ${color}15 0%, transparent 60%),
                     radial-gradient(ellipse at 20% 50%, ${color}10 0%, transparent 40%),
                     radial-gradient(ellipse at 80% 80%, ${color}08 0%, transparent 50%)`
      }}
    />
  );
}

export default function LazyBeams(props: BeamsProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for mobile device or reduced motion preference
    const checkMobile = () => {
      const mobile = window.innerWidth < 768 || 
                     ('ontouchstart' in window && window.innerWidth < 1024);
      setIsMobile(mobile);
    };
    
    const checkReducedMotion = () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setPrefersReducedMotion(reduced);
    };

    checkMobile();
    checkReducedMotion();

    // Listen for resize to handle orientation changes
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Use lightweight CSS fallback on mobile or for users preferring reduced motion
  if (isMobile || prefersReducedMotion) {
    return <MobileBeamsFallback lightColor={props.lightColor} />;
  }

  return <BeamsComponent {...props} />;
}
