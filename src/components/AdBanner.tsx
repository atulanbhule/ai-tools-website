"use client";

import React, { useEffect, useRef } from 'react';

// Add type definition for window.adsbygoogle
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

interface AdBannerProps {
  adSlot: string;
  format?: 'auto' | 'horizontal' | 'vertical' | 'rectangle';
  style?: React.CSSProperties;
}

const AdBanner: React.FC<AdBannerProps> = ({ 
  adSlot, 
  format = 'auto', 
  style = {} 
}) => {
  // Use a ref to track if this specific ad has been initialized
  const adRef = useRef<HTMLDivElement>(null);
  const isAdPushed = useRef(false);

  useEffect(() => {
    // Skip loading ads in development mode
    if (process.env.NODE_ENV === "development") {
      return;
    }
    
    // Only push the ad if it hasn't been pushed already
    if (!isAdPushed.current && adRef.current) {
      // Load Google AdSense script only once when component mounts
      const hasScript = document.querySelector('script[src*="pagead2.googlesyndication.com"]');
      
      if (!hasScript) {
        const script = document.createElement('script');
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
        script.async = true;
        script.crossOrigin = 'anonymous';
        // Replace with your actual AdSense publisher ID when you get it
        script.dataset.adClient = 'ca-pub-XXXXXXXXXXXXXXXX'; 
        document.head.appendChild(script);
      }

      // Wait for script to load before pushing ad
      const timer = setTimeout(() => {
        try {
          if (window.adsbygoogle && !isAdPushed.current) {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            isAdPushed.current = true;
          }
        } catch (error) {
          console.error('AdSense error:', error);
        }
      }, 300);

      return () => {
        clearTimeout(timer);
      };
    }
  }, []);

  // Display a placeholder in development mode
  if (process.env.NODE_ENV === "development") {
    return (
      <div 
        className="ad-container my-6 bg-gray-100 flex items-center justify-center" 
        style={{ 
          minHeight: '90px', 
          ...style 
        }}
      >
        <p className="text-gray-500 text-center">Ad Placeholder</p>
      </div>
    );
  }

  return (
    <div className="ad-container my-6" style={style} ref={adRef}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center', ...style }}
        data-ad-layout={format}
        data-ad-format={format}
        data-ad-slot={adSlot}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // Replace with your actual AdSense publisher ID
        data-full-width-responsive="true"
      />
      <p className="text-xs text-gray-400 text-center mt-1">Advertisement</p>
    </div>
  );
};

export default AdBanner; 