import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob: https:",
      "connect-src 'self' https:",
      "frame-ancestors 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  reactCompiler: true,

  // Enable source maps in production for debugging
  productionBrowserSourceMaps: true,

  // Target modern browsers to eliminate legacy polyfills
  // This reduces bundle size by ~14KB by removing Array.prototype.at, Object.hasOwn, etc. polyfills
  experimental: {
    // Optimize package imports to reduce unused JavaScript
    optimizePackageImports: ["gsap", "three", "@react-three/fiber", "@react-three/drei"],
  },

  // Add security headers
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        // Keep the resume out of the index and let it open inline instead of force-downloading
        source: "/KaustubhBagaleResume.pdf",
        headers: [
          { key: "X-Robots-Tag", value: "noindex" },
          {
            key: "Content-Disposition",
            value: 'inline; filename="KaustubhBagaleResume.pdf"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
