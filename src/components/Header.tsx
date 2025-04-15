"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-bold text-primary">
          AI Tools Hub
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="#tools" className="hover:text-primary transition-colors">
            Tools
          </Link>
          <Link href="#about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-20" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-10 md:hidden">
            <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
              <Link href="/" className="hover:text-primary transition-colors" onClick={toggleMenu}>
                Home
              </Link>
              <Link href="#tools" className="hover:text-primary transition-colors" onClick={toggleMenu}>
                Tools
              </Link>
              <Link href="#about" className="hover:text-primary transition-colors" onClick={toggleMenu}>
                About
              </Link>
              <Link href="#contact" className="hover:text-primary transition-colors" onClick={toggleMenu}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 