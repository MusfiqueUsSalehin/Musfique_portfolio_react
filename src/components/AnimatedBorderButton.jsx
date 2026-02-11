import React from 'react';

export const AnimatedBorderButton = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative group flex items-center justify-center
        /* Button Layout */
        px-8 py-3 bg-transparent overflow-hidden rounded-full
        
        /* Typography */
        text-white font-medium text-lg tracking-wide 
        transition-all duration-300 focus:outline-none 
        
        /* Hover Effects */
        hover:text-[var(--color-primary)] 
        hover:shadow-[0_0_20px_color-mix(in_srgb,var(--color-primary),transparent_80%)]
        
        ${className}
      `}
    >
      {/* SVG Container 
         - absolute inset-0: Covers the whole button
         - pointer-events-none: Clicks pass through to the button
      */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        
        {/* 1. STATIC GRAY BORDER (Replaces CSS border for perfect alignment) */}
        <rect
          x="1" y="1"
          width="calc(100% - 2px)"
          height="calc(100% - 2px)"
          rx="0" /* The Magic Number: Forces a perfect pill shape */
          fill="none"
          stroke="white"
          strokeOpacity="0.1"
          strokeWidth="3" /* Static border is thinner */
        />

        {/* 2. ANIMATED COLORED BORDER */}
        <rect
          x="1" y="1"
          width="calc(100% - 2px)"
          height="calc(100% - 2px)"
          rx="0" /* Matches the static border exactly */
          fill="none"
          stroke="var(--color-border2)" 
          strokeWidth="2" /* Animated border is slightly thicker */
          strokeLinecap="round"
          strokeDasharray="30 70" 
          pathLength="100" 
          className="opacity-0 group-hover:opacity-100 animate-[border-trace_1.5s_linear_infinite]"
        />
      </svg>

      {/* Button Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};