"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <main>
      <Header />
      
      <div className="container py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose max-w-none">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
          <p className="mb-4">
            Welcome to AI Tools Hub. These terms and conditions outline the rules and regulations for the use of our website.
            By accessing this website, we assume you accept these terms and conditions in full. 
            Do not continue to use AI Tools Hub if you do not accept all of the terms and conditions stated on this page.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">2. License to Use</h2>
          <p className="mb-4">
            Unless otherwise stated, AI Tools Hub and/or its licensors own the intellectual property rights for all material on this website. 
            All intellectual property rights are reserved.
          </p>
          <p className="mb-4">
            You may view and/or print pages from the website for your own personal use subject to restrictions set in these terms and conditions.
          </p>
          <p className="mb-4">
            You must not:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Republish material from this website</li>
            <li>Sell, rent or sub-license material from this website</li>
            <li>Reproduce, duplicate or copy material from this website</li>
            <li>Redistribute content from AI Tools Hub (unless content is specifically made for redistribution)</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">3. User Content</h2>
          <p className="mb-4">
            In these terms and conditions, "User Content" means material (including without limitation text, images, audio material, video material, 
            and audio-visual material) that you submit to this website, for whatever purpose.
          </p>
          <p className="mb-4">
            You grant to AI Tools Hub a worldwide, irrevocable, non-exclusive, royalty-free license to use, reproduce, adapt, publish, 
            translate and distribute your User Content in any existing or future media.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">4. Limitation of Liability</h2>
          <p className="mb-4">
            The information on this website is provided free-of-charge, and you acknowledge that it would be unreasonable 
            to hold us liable in respect of this website and the information on this website.
          </p>
          <p className="mb-4">
            While we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, 
            express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website 
            or the information, products, services, or related graphics contained on the website for any purpose.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">5. External Links</h2>
          <p className="mb-4">
            Our website may contain links to external websites that are not provided or maintained by or in any way affiliated with AI Tools Hub. 
            Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">6. Modifications</h2>
          <p className="mb-4">
            We may revise these terms of service for the website at any time without notice. 
            By using this website, you are agreeing to be bound by the current version of these terms of service.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">7. Governing Law</h2>
          <p className="mb-4">
            These terms and conditions are governed by and construed in accordance with the laws, and you irrevocably 
            submit to the exclusive jurisdiction of the courts in that location.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">8. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <p className="mb-4">
            Email: contact@aitools-hub.com
          </p>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 