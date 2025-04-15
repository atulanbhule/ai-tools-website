import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/', 
          '/private/', 
          '/*.json$',
          '/*.xml$',
          '/cgi-bin/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/admin/',
          '/private/',
        ],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: [
          '/images/',
          '/public/images/',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 2,
      },
      {
        userAgent: 'Yandex',
        allow: '/',
        crawlDelay: 3,
      },
      {
        userAgent: 'Baiduspider',
        allow: '/',
        crawlDelay: 5,
      },
    ],
    sitemap: 'https://aitools-hub.com/sitemap.xml',
    host: 'https://aitools-hub.com',
  };
} 