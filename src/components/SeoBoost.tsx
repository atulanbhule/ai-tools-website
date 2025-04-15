"use client";

import React from 'react';
import Head from 'next/head';
import { usePathname } from 'next/navigation';

interface SeoBoostProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  keywords?: string;
}

const SeoBoost: React.FC<SeoBoostProps> = ({
  title = 'AI Tools Hub | Directory of Best AI Tools & Software',
  description = 'Discover top AI tools for content generation, image creation, productivity, development and data analysis. Find the best AI software to boost your workflow.',
  canonicalUrl,
  ogImage = '/images/og-image.png',
  keywords = 'AI tools, artificial intelligence software, AI directory, best AI tools, content generation AI, image AI, AI for developers, data analysis AI, machine learning tools, AI productivity',
}) => {
  const pathname = usePathname();
  const baseUrl = 'https://aitools-hub.com';
  const fullUrl = canonicalUrl || `${baseUrl}${pathname}`;
  
  // Generate FAQ schema for better search visibility
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What is AI Tools Hub?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'AI Tools Hub is a comprehensive directory of AI-powered tools and software organized by categories such as content generation, image creation, productivity, development, and data analysis.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Are the AI tools on AI Tools Hub free?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'AI Tools Hub features a mix of free and paid AI tools. Each tool listing indicates whether it offers a free tier, trial period, or requires a paid subscription.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How are AI tools selected for AI Tools Hub?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Our team of AI experts carefully evaluates each tool based on functionality, user experience, reliability, and value. We only include high-quality tools that deliver on their promises.'
        }
      }
    ]
  };

  // Local business schema for better local SEO
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'AI Tools Hub',
    'url': baseUrl,
    'logo': `${baseUrl}/images/logo.png`,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '123 AI Avenue',
      'addressLocality': 'San Francisco',
      'addressRegion': 'CA',
      'postalCode': '94107',
      'addressCountry': 'US'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 37.7749,
      'longitude': -122.4194
    },
    'telephone': '+1-555-123-4567',
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
      ],
      'opens': '09:00',
      'closes': '17:00'
    }
  };

  return (
    <Head>
      {/* Basic SEO tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* OpenGraph tags for social sharing */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />
      
      {/* Additional structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      {/* Additional meta tags for SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="AI Tools Hub Team" />
      <meta name="language" content="English" />
      
      {/* Mobile optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#4f46e5" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    </Head>
  );
};

export default SeoBoost; 