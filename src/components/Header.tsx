"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <button onClick={() => handleNavigation('/')} className="text-2xl font-bold text-primary">
          AI Tools Hub
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => handleNavigation('/')} className="hover:text-primary transition-colors">
            Home
          </button>
          <button onClick={() => handleNavigation('/#tools')} className="hover:text-primary transition-colors">
            Tools
          </button>
          <button onClick={() => handleNavigation('/about')} className="hover:text-primary transition-colors">
            About
          </button>
          <button onClick={() => handleNavigation('/contact')} className="hover:text-primary transition-colors">
            Contact
          </button>
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
              <button onClick={() => handleNavigation('/')} className="hover:text-primary transition-colors">
                Home
              </button>
              <button onClick={() => handleNavigation('/#tools')} className="hover:text-primary transition-colors">
                Tools
              </button>
              <button onClick={() => handleNavigation('/about')} className="hover:text-primary transition-colors">
                About
              </button>
              <button onClick={() => handleNavigation('/contact')} className="hover:text-primary transition-colors">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 