
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo('.hero-title', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2 });
    tl.fromTo('.hero-button', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.8 }, '-=0.5');
  }, []);

  return (
    <section ref={heroRef} className="section hero-section relative h-screen flex items-center justify-center text-center bg-gradient-to-br from-gray-50 to-blue-100 overflow-hidden">
      <div className="container mx-auto px-6 z-10">
        <h1 className="hero-title text-5xl md:text-7xl font-extrabold text-gray-800 mb-4">
          Modern Landing Page
        </h1>
        <p className="hero-title text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          A stunning, animated landing page created with Next.js, shadcn UI, and GSAP.
        </p>
        <button className="hero-button bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
          Get Started
        </button>
      </div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </section>
  );
};

export default Hero;
