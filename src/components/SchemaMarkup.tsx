"use client";

import React from 'react';
import Script from 'next/script';

// Component for homepage schema
export const HomePageSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AI Tools Hub",
    "url": "https://aitools-hub.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://aitools-hub.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "description": "Discover top AI tools for content generation, image creation, productivity, development and data analysis.",
    "publisher": {
      "@type": "Organization",
      "name": "AI Tools Hub",
      "logo": {
        "@type": "ImageObject",
        "url": "https://aitools-hub.com/images/logo.png"
      }
    }
  };

  return (
    <Script 
      id="homepage-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

// Component for category schema
export const CategorySchema = ({ category, tools }: { category: string, tools: any[] }) => {
  const formatCategoryName = (category: string) => {
    return category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": tools.map((tool, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "SoftwareApplication",
        "name": tool.name,
        "description": tool.description,
        "url": tool.url,
        "applicationCategory": "WebApplication",
        "operatingSystem": "Web browser",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "genre": formatCategoryName(category)
      }
    })),
    "numberOfItems": tools.length,
    "itemListOrder": "https://schema.org/ItemListOrderDescending",
    "name": `${formatCategoryName(category)} AI Tools`
  };

  return (
    <Script 
      id={`category-schema-${category}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

// Component for organization schema
export const OrganizationSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AI Tools Hub",
    "url": "https://aitools-hub.com",
    "logo": "https://aitools-hub.com/images/logo.png",
    "sameAs": [
      "https://twitter.com/aitoolshub",
      "https://facebook.com/aitoolshub",
      "https://linkedin.com/company/aitoolshub"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "contact@aitools-hub.com"
    }
  };

  return (
    <Script 
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default function SchemaMarkup() {
  return (
    <>
      <HomePageSchema />
      <OrganizationSchema />
    </>
  );
} 