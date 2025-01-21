'use client';

import React from "react";
import Image from 'next/image'; // Import the Image component

const CoverPage = () => {
  return (
    <section className="bg-[#1B1B1B] text-white py-16 px-4 sm:px-8 md:px-12 lg:px-20 flex flex-col items-center min-h-screen">
      {/* Title Section */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center leading-tight">
        PREMIUM FURNITURE & DECOR MARKETPLACE
      </h1>

      {/* Grid Image Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8">
        {/* Image Cards */}
        {["/Parent.png", "/Parent (1).png", "/Parent (5).png", "/Parent (6).png", "/Parent (7).png"].map((image, index) => (
          <div
            key={index}
            className={`relative ${
              index % 2 === 0
                ? "lg:translate-y-4" // Even images: shift downward
                : "lg:-translate-y-4" // Odd images: shift upward
            } transform transition-transform duration-300`}
          >
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              width={500} // Set width for optimization
              height={500} // Set height for optimization
              className="w-full h-auto object-cover rounded-lg group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoverPage;
