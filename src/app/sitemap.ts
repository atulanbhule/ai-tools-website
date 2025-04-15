import { MetadataRoute } from 'next';
import { toolsData } from '@/data/toolsData';

// Format category name for display and for URLs
const formatCategoryName = (category: string) => {
  return category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export default function sitemap(): MetadataRoute.Sitemap {
  // Base URL of your site
  const baseUrl = 'https://aitools-hub.com';
  
  // Current date for lastModified
  const currentDate = new Date();
  
  // Main static pages
  const staticPages = [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
  ];
  
  // Category pages (these would be generated dynamically in a full implementation)
  const categoryPages = Object.keys(toolsData).map(category => ({
    url: `${baseUrl}/#${category}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));
  
  // Tool detail pages (these would be generated dynamically in a full implementation)
  const toolPages = Object.entries(toolsData).flatMap(([category, tools]) => 
    tools.map(tool => ({
      url: `${baseUrl}/tools/${tool.id}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))
  );
  
  // Monthly archive pages for blog (if you were to add a blog)
  const blogArchives = Array.from({ length: 12 }).map((_, i) => {
    const date = new Date();
    date.setMonth(currentDate.getMonth() - i);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    
    return {
      url: `${baseUrl}/blog/${year}/${month}`,
      lastModified: date,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    };
  });
  
  // Category taxonomy pages
  const taxonomyPages = [
    'ai', 'machine-learning', 'productivity', 'creativity', 'business',
    'education', 'development', 'writing', 'design', 'analytics'
  ].map(tag => ({
    url: `${baseUrl}/tags/${tag}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));
  
  // Combine all pages
  return [
    ...staticPages,
    ...categoryPages,
    ...toolPages,
    ...blogArchives,
    ...taxonomyPages,
  ];
} 