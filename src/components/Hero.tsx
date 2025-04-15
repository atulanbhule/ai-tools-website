"use client";

import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Discover the Best AI Tools
          </h1>
          <p className="text-xl mb-8">
            Explore our curated collection of AI tools to boost your productivity, creativity, and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/#tools" className="btn bg-white text-primary hover:bg-gray-100">
              Explore Tools
            </Link>
            <Link href="/#content-generation" className="btn border border-white hover:bg-white/10">
              Popular Tools
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 