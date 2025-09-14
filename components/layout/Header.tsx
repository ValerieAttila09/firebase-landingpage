
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.from(headerRef.current, { duration: 1, y: -100, opacity: 0, ease: 'power3.out' });
  }, []);

  return (
    <header ref={headerRef} className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/">Logo</Link>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link href="#features" className="text-gray-600 hover:text-blue-500 transition-colors">Features</Link>
          <Link href="#about" className="text-gray-600 hover:text-blue-500 transition-colors">About</Link>
          <Link href="#contact" className="text-gray-600 hover:text-blue-500 transition-colors">Contact</Link>
        </nav>
        <button className="hidden md:block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
