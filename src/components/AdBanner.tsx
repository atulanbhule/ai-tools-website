"use client";

import React, { useEffect } from 'react';

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
  useEffect(() => {
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

    // Push ad to queue for rendering
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  return (
    <div className="ad-container my-6" style={style}>
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