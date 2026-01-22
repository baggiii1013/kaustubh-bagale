"use client";

import dynamic from "next/dynamic";

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

export default function LazyBeams(props: BeamsProps) {
  return <BeamsComponent {...props} />;
}
