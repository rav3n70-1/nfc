"use client";

/**
 * Background — creates the futuristic dark backdrop:
 * - Fine CSS grid
 * - Ambient radial glows (no canvas/particle library needed)
 * - Subtle grain texture via SVG filter
 */
export default function Background() {
  return (
    <>
      {/* Grid overlay */}
      <div
        className="bg-grid fixed inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
        aria-hidden="true"
      />

      {/* Ambient glow — top left (blue) */}
      <div
        className="ambient-glow"
        style={{
          width: 600,
          height: 600,
          background: "#4f8ef7",
          top: "-120px",
          left: "-120px",
        }}
        aria-hidden="true"
      />

      {/* Ambient glow — bottom right (violet) */}
      <div
        className="ambient-glow"
        style={{
          width: 500,
          height: 500,
          background: "#7c6af7",
          bottom: "-80px",
          right: "-80px",
          opacity: 0.08,
        }}
        aria-hidden="true"
      />

      {/* Grain texture via SVG filter */}
      <svg
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0, opacity: 0.035 }}
        aria-hidden="true"
      >
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </>
  );
}
