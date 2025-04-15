"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <main>
      <Header />
      
      <div className="container py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">About AI Tools Hub</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg mb-6">
              At AI Tools Hub, our mission is to help people discover and leverage the best AI tools
              available today to enhance productivity, creativity, and efficiency in both personal and professional endeavors.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 mt-8">What We Offer</h2>
            <p className="text-lg mb-6">
              We provide a comprehensive directory of AI tools organized by category, making it easy for you
              to find the perfect solution for your specific needs. Our platform covers everything from content generation
              and image creation to development assistance and data analysis.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 mt-8">Our Values</h2>
            <ul className="list-disc pl-6 text-lg mb-6">
              <li className="mb-2"><strong>Accuracy:</strong> We carefully vet and review all tools featured on our platform</li>
              <li className="mb-2"><strong>Accessibility:</strong> We make advanced AI tools discoverable for everyone</li>
              <li className="mb-2"><strong>Education:</strong> We help users understand how to best utilize AI technologies</li>
              <li className="mb-2"><strong>Innovation:</strong> We continuously update our directory with cutting-edge tools</li>
            </ul>
          </div>
          
          <div>
            <div className="bg-gray-100 p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4">Why Trust AI Tools Hub?</h2>
              <p className="text-lg mb-4">
                Our team consists of AI enthusiasts, developers, and industry experts who are passionate about
                the potential of artificial intelligence to transform how we work and create.
              </p>
              <p className="text-lg">
                We're committed to providing unbiased information about each tool, highlighting both strengths and limitations
                to help you make informed decisions about which AI solutions to incorporate into your workflow.
              </p>
            </div>
            
            <div className="bg-primary/10 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
              <p className="text-lg mb-6">
                Stay updated with the latest AI tools and developments by joining our community:
              </p>
              <div className="flex flex-col space-y-3">
                <a href="#" className="btn btn-primary">Subscribe to Our Newsletter</a>
                <a href="#" className="btn btn-secondary">Follow Us on Twitter</a>
                <a href="#" className="btn border border-primary text-primary hover:bg-primary/10">Join Our Discord</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 