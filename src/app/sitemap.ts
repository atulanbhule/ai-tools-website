import { MetadataRoute } from 'next';
import { toolsData } from '@/data/toolsData';

export default function sitemap(): MetadataRoute.Sitemap {
  // Base URL - replace with your actual domain when deployed
  const baseUrl = 'https://aitools-hub.com';
  
  // Get categories from tools data
  const categories = Object.keys(toolsData);
  
  // Create the base sitemap entries
  const sitemap: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];
  
  // Add category pages to sitemap
  categories.forEach(category => {
    sitemap.push({
      url: `${baseUrl}/category/${category}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    });
    
    // Add individual tool pages if you create them in the future
    toolsData[category].forEach(tool => {
      sitemap.push({
        url: `${baseUrl}/tool/${tool.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    });
  });
  
  return sitemap;
} 