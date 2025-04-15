import React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Tools Hub | Directory of Best AI Tools & Software",
  description: "Discover top AI tools for content generation, image creation, productivity, development and data analysis. Find the best AI software to boost your workflow.",
  keywords: "AI tools, artificial intelligence software, AI directory, best AI tools, content generation AI, image AI, AI for developers, data analysis AI",
  authors: [{ name: "AI Tools Hub Team" }],
  creator: "AI Tools Hub",
  publisher: "AI Tools Hub",
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
    },
  },
  alternates: {
    canonical: "https://aitools-hub.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-light min-h-screen">
        {children}
      </body>
    </html>
  );
} 