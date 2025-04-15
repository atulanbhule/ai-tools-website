"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ToolsSection from "@/components/ToolsSection";
import Footer from "@/components/Footer";
import AdBanner from "@/components/AdBanner";
import SchemaMarkup, { CategorySchema } from "@/components/SchemaMarkup";
import { toolsData } from "@/data/toolsData";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      
      {/* Schema markup for SEO */}
      <SchemaMarkup />
      
      {/* Top ad banner */}
      <div className="container py-4">
        <AdBanner adSlot="1234567890" />
      </div>
      
      <div className="container py-16">
        <h2 className="text-center mb-12">Explore AI Tools By Category</h2>
        
        {Object.entries(toolsData).map(([category, tools], index) => (
          <React.Fragment key={category}>
            <ToolsSection 
              category={category} 
              tools={tools} 
            />
            
            {/* Schema markup for each category */}
            <CategorySchema category={category} tools={tools} />
            
            {/* Insert ad after every 2 categories except after the last one */}
            {index % 2 === 1 && index < Object.entries(toolsData).length - 1 && (
              <div className="my-12">
                <AdBanner 
                  adSlot="9876543210" 
                  format="rectangle" 
                  style={{ minHeight: "250px" }}
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      
      {/* Bottom ad banner */}
      <div className="container py-8">
        <AdBanner adSlot="5432167890" format="horizontal" />
      </div>
      
      <Footer />
    </main>
  );
} 