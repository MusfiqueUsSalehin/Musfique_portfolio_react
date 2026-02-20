import React from 'react';
import { useInView } from 'react-intersection-observer';

const ScrollReveal = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only animates once
    threshold: 0.15,   // Triggers when 10% of the element is visible
  });

  return (
    <div
      ref={ref}
      // Starts invisible and pushed down slightly, then fades in and floats up
      className={`transition-all duration-1000 ease-out ${
        inView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;