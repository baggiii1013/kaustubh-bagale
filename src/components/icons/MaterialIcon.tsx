"use client";

import { memo } from "react";

// SVG icons to replace Material Symbols font (saves ~200KB+ on initial load)
// Only includes icons actually used in the project

interface IconProps {
  className?: string;
}

const ArrowForward = memo(({ className = "" }: IconProps) => (
  <svg
    className={className}
    viewBox="0 -960 960 960"
    fill="currentColor"
    width="1em"
    height="1em"
  >
    <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
  </svg>
));
ArrowForward.displayName = "ArrowForward";

const ArrowBack = memo(({ className = "" }: IconProps) => (
  <svg
    className={className}
    viewBox="0 -960 960 960"
    fill="currentColor"
    width="1em"
    height="1em"
  >
    <path d="M313-440l224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
  </svg>
));
ArrowBack.displayName = "ArrowBack";

const NorthEast = memo(({ className = "" }: IconProps) => (
  <svg
    className={className}
    viewBox="0 -960 960 960"
    fill="currentColor"
    width="1em"
    height="1em"
  >
    <path d="M686-450H160v-60h526L438-758l42-42 320 320-320 320-42-42 248-248Z" />
  </svg>
));
NorthEast.displayName = "NorthEast";

const Description = memo(({ className = "" }: IconProps) => (
  <svg
    className={className}
    viewBox="0 -960 960 960"
    fill="currentColor"
    width="1em"
    height="1em"
  >
    <path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
  </svg>
));
Description.displayName = "Description";

const Code = memo(({ className = "" }: IconProps) => (
  <svg
    className={className}
    viewBox="0 -960 960 960"
    fill="currentColor"
    width="1em"
    height="1em"
  >
    <path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z" />
  </svg>
));
Code.displayName = "Code";

const OpenInNew = memo(({ className = "" }: IconProps) => (
  <svg
    className={className}
    viewBox="0 -960 960 960"
    fill="currentColor"
    width="1em"
    height="1em"
  >
    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
  </svg>
));
OpenInNew.displayName = "OpenInNew";

// Icon mapping for dynamic usage
const iconMap = {
  arrow_forward: ArrowForward,
  arrow_back: ArrowBack,
  north_east: NorthEast,
  description: Description,
  code: Code,
  open_in_new: OpenInNew,
} as const;

type IconName = keyof typeof iconMap;

interface MaterialIconProps {
  name: IconName | string;
  className?: string;
}

/**
 * MaterialIcon - Lightweight SVG replacement for Material Symbols font
 * Usage: <MaterialIcon name="arrow_forward" className="text-2xl" />
 * 
 * Falls back to text span for unknown icons (will use Material Symbols font if loaded)
 */
export default function MaterialIcon({ name, className = "" }: MaterialIconProps) {
  const IconComponent = iconMap[name as IconName];
  
  if (IconComponent) {
    return <IconComponent className={className} />;
  }
  
  // Fallback for any icons not yet converted to SVG
  return (
    <span className={`material-symbols-outlined ${className}`}>
      {name}
    </span>
  );
}

// Named exports for direct imports
export { ArrowBack, ArrowForward, Code, Description, NorthEast, OpenInNew };

