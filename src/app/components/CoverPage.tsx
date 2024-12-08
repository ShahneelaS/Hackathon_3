// src/components/CoverPage.tsx
'use client';

import React from "react";

const CoverPage = () => {
  return (
    <section className="bg-[#1B1B1B] text-white py-16 px-6 lg:px-20 flex flex-col items-center min-h-screen">
      <h1 className="text-4xl lg:text-6xl font-bold mb-8 text-center leading-tight">ecommerce user interface kit</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
        <div className="relative">
          <img
            src="/Parent.png" 
            alt="Image 1"
            className="w-full h-auto object-cover rounded-lg transform translate-y-4"
          />
        </div>
        <div className="relative">
          <img
            src="/Parent (1).png" 
            alt="Image 2"
            className="w-full h-auto object-cover rounded-lg transform -translate-y-4"
          />
        </div>
        <div className="relative">
          <img
            src="/Parent (5).png" 
            alt="Image 3"
            className="w-full h-auto object-cover rounded-lg transform translate-y-4"
          />
        </div>
        <div className="relative">
          <img
            src="/Parent (6).png" 
            alt="Image 4"
            className="w-full h-auto object-cover rounded-lg transform -translate-y-4"
          />
        </div>
        <div className="relative">
          <img
            src="/Parent (7).png" 
            alt="Image 5"
            className="w-full h-auto object-cover rounded-lg transform translate-y-4"
          />
        </div>
      </div>
    </section>
  );
};

export default CoverPage;
