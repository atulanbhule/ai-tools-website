import React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Tools Hub | Directory of Best AI Tools & Software",
  description: "Discover top AI tools for content generation, image creation, productivity, development and data analysis. Find the best AI software to boost your workflow.",
  keywords: "AI tools, artificial intelligence software, AI directory, best AI tools, content generation AI, image AI, AI for developers, data analysis AI, machine learning tools, AI productivity",
  authors: [{ name: "AI Tools Hub Team" }],
  creator: "AI Tools Hub",
  publisher: "AI Tools Hub",
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'),
  openGraph: {
    type: "website",
    url: "https://aitools-hub.com",
    title: "AI Tools Hub | Directory of Best AI Tools & Software",
    description: "Discover top AI tools for content generation, image creation, productivity, development and data analysis.",
    siteName: "AI Tools Hub",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Tools Hub",
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Tools Hub | Directory of Best AI Tools & Software",
    description: "Discover top AI tools for content generation, image creation, productivity, development and data analysis.",
    creator: "@aitoolshub",
    images: ["/images/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    nocache: false,
  },
  alternates: {
    canonical: "https://aitools-hub.com",
    languages: {
      'en-US': 'https://aitools-hub.com',
    },
  },
  category: 'Technology',
  verification: {
    google: 'your-google-site-verification-id', // Update with your actual verification ID
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#4f46e5" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/images/icons/icon-192x192.png" />
      </head>
      <body className="bg-light min-h-screen">
        {children}
      </body>
    </html>
  );
} 