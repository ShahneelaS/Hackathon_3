
import React from "react";
import Navbar from "../components/Navbar"; 

const LandingPage = () => {
  return (
    <div className="bg-white">
      {/* Navbar Section */}
      <Navbar />
      
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center text-center py-20 px-6 sm:px-12 md:px-24">
        <h2 className="text-[#2A254B] text-3xl sm:text-4xl lg:text-5xl font-ClashDisplay mb-6">
          Welcome to the Landing Page!
        </h2>
        <p className="text-[#505977] text-sm sm:text-base lg:text-lg mb-6">
          Discover our amazing products and services that will enhance your living space.
        </p>
        
        {/* Add additional content as needed */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-6">
          {/* Example buttons or links */}
          <button className="bg-[#2A254B] text-white px-6 py-3 rounded-lg hover:bg-[#1d1a3a]">
            Explore Products
          </button>
          <button className="border-[#2A254B] border-2 text-[#2A254B] px-6 py-3 rounded-lg hover:bg-[#F3F3F3]">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
