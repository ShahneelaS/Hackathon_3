"use client";

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';
import HelpCenter from '../components/HelpCenter'; 

const ContactUs = () => {
  const [isHelpCenterVisible, setIsHelpCenterVisible] = useState(false);

  // Toggle Help Center visibility
  const toggleHelpCenter = () => {
    setIsHelpCenterVisible(!isHelpCenterVisible);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>

        {/* Contact Form Section */}
        <ContactForm />

        {/* FAQ Section */}
        <FAQ />

        {/* Help Center Button */}
        <div className="text-center mt-8">
          <button
            onClick={toggleHelpCenter}
            className="bg-[#2A254B] text-white py-3 px-6 rounded-md hover:bg-blue-900"
          >
            {isHelpCenterVisible ? 'Close Help Center' : 'Open Help Center'}
          </button>
        </div>

        {/* Help Center Modal */}
        {isHelpCenterVisible && <HelpCenter />}
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
