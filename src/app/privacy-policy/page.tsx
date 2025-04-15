"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <main>
      <Header />
      
      <div className="container py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose max-w-none">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
          <p className="mb-4">
            Welcome to AI Tools Hub. We respect your privacy and are committed to protecting your personal data. 
            This privacy policy will inform you about how we look after your personal data when you visit our website 
            and tell you about your privacy rights and how the law protects you.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">2. The Data We Collect</h2>
          <p className="mb-4">
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Identity Data: includes first name, last name, username or similar identifier.</li>
            <li>Contact Data: includes email address and telephone numbers.</li>
            <li>Technical Data: includes internet protocol (IP) address, browser type and version, time zone setting and location, 
              browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
            <li>Usage Data: includes information about how you use our website and services.</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Use Your Data</h2>
          <p className="mb-4">
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>To provide you with the information about AI tools that you request from us.</li>
            <li>To improve our website and services.</li>
            <li>To administer and protect our business and this website.</li>
            <li>To deliver relevant website content and advertisements to you and measure or understand the effectiveness of the advertising we serve to you.</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">4. Cookies</h2>
          <p className="mb-4">
            We use cookies and similar tracking technologies to track the activity on our website and hold certain information. 
            Cookies are files with a small amount of data which may include an anonymous unique identifier.
          </p>
          <p className="mb-4">
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. 
            However, if you do not accept cookies, you may not be able to use some portions of our website.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">5. Third-Party Disclosure</h2>
          <p className="mb-4">
            We may disclose your personal data to third parties in the following circumstances:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Service Providers: We may share your data with service providers who help us to provide our services, such as hosting providers and analytics services.</li>
            <li>Advertisers: We may share aggregated, anonymous data with advertisers to help them reach their target audience.</li>
            <li>Legal Requirements: We may disclose your information where we are legally required to do so.</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">6. Your Rights</h2>
          <p className="mb-4">
            Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Request access to your personal data.</li>
            <li>Request correction of your personal data.</li>
            <li>Request erasure of your personal data.</li>
            <li>Object to processing of your personal data.</li>
            <li>Request restriction of processing your personal data.</li>
            <li>Request transfer of your personal data.</li>
            <li>Right to withdraw consent.</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">7. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this privacy policy or our privacy practices, please contact us at:
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