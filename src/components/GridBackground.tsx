import React from "react";

const GridBackground = () => {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute grainy inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30 [mask-image:radial-gradient(800px_circle_at_center,white,transparent)] -z-50"
    >
      <defs>
        <pattern
          id="grid"
          width="60"
          height="60"
          patternUnits="userSpaceOnUse"
          x="-1"
          y="-1"
        >
          <path d="M.5 60V.5H60" fill="none" strokeDasharray="4 2"></path>
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth="0" fill="url(#grid)"></rect>
    </svg>
  );
};

export default GridBackground;
