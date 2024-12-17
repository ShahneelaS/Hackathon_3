'use client';

import { useState } from "react";
import Navbar from "./../components/Navbar"; 
import FooterProductPage from "./../components/FooterProductPage"; 
import JoinTheClub from "./../components/JoinTheClub"; 
import FeatureSection from "./../components/FeatureSection"; 
import { useRouter } from "next/navigation";

const AboutPage = () => {
  const [showHeader, setShowHeader] = useState(true); // Manage top header visibility
  const router = useRouter();

  return (
    <div className="about-page">
      {/* Top Header */}
      {showHeader && (
        <div className="bg-[#2A254B] text-white flex items-center justify-center px-4 py-2 relative">
          {/* Content Centered */}
          <div className="flex items-center gap-2">
            <img src="/Delivery-icon.png" alt="Delivery Icon" className="w-4 h-4" />
            <p className="text-sm font-normal">
              Free delivery on all orders over £50 with code easter checkout
            </p>
          </div>

          {/* Cross Button */}
          <button
            className="absolute right-4 text-white w-6 h-6 flex items-center justify-center"
            onClick={() => {
              setShowHeader(false); // Hide the header
              router.push("/"); // Redirect to Home Page
            }}
          >
            ✖
          </button>
        </div>
      )}

      {/* Navbar */}
      <Navbar />

      {/* Heading Section */}
      <section className="flex flex-col items-center px-6 md:px-24 py-16 md:py-24 bg-white">
        <h2 className="font-clash-display text-3xl md:text-4xl lg:text-6xl font-normal leading-tight text-center text-[#2A254B]">
          A brand built on the love of craftsmanship, <br /> quality and
          outstanding customer service
        </h2>
        <div className="w-full flex justify-center mt-8">
          <button
            className="bg-[#E0E0E0] text-[#2A254B] px-8 py-4 rounded-full text-base font-medium"
            onClick={() => router.push("/products")} 
          >
            View All Products
          </button>
        </div>
      </section>

      {/* Section with Text on Left and Image on Right */}
      <section className="flex flex-col md:flex-row items-center bg-white px-6 md:px-20 py-16">
        {/* Card (Text on Left) */}
        <div className="w-full md:w-1/2 bg-[#2A254B] p-8 rounded-lg shadow-md mb-8 md:mb-0 flex flex-col justify-between">
          <h2 className="font-clash-display text-2xl md:text-3xl font-semibold leading-tight text-left text-white mb-4">
            It started with a small idea
          </h2>
          <p className="font-satoshi text-lg text-white mb-4">
            A global brand with local beginnings, our story began in a small studio in South London in early 2014.
          </p>
          <button
            className="bg-[#726E8D] text-white px-8 py-4 rounded-full text-base font-medium"
            onClick={() => router.push("/collection")} 
          >
            View Collection
          </button>
        </div>

        {/* Image (Right side) */}
        <div className="w-full md:w-1/2 h-[450px] md:h-[400px] flex justify-center md:pl-8">
          <img
            src="/Image Block.png" 
            alt="About Us Image"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </section>

      {/* New Section with Image on Left and Text on Right */}
      <section className="flex flex-col md:flex-row bg-[#F9F9F9] items-center px-6 md:px-20 py-16">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 h-full mb-8 md:mb-0">
          <img
            src="/left-image.png" 
            alt="Service Image"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right Side: Text and Button */}
        <div className="w-full md:w-1/2 flex flex-col justify-between px-6 md:px-16 py-6 md:py-16">
          <h2 className="font-clash-display text-xl md:text-2xl lg:text-[24px] leading-tight text-left text-[#2A254B] mb-4">
            Our service isn’t just personal, it’s actually <br />
            hyper personally exquisite
          </h2>
          <p className="font-satoshi text-base md:text-lg leading-tight text-left text-[#505977] mb-6">
            When we started Avion, the idea was simple. Make high-quality furniture affordable and
            available for the mass market. <br />
            <br />
            Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design
            so our Chelsea boutique became the hotbed for the London interior design community.
          </p>
          <div className="mt-auto">
            <button
              className="bg-[#726E8D] text-white px-8 py-4 rounded-full text-base font-medium"
              onClick={() => window.location.href = "/contact"} 
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <FeatureSection />

      {/* Join the Club Section */}
      <JoinTheClub />

      {/* Footer */}
      <FooterProductPage />
    </div>
  );
};

export default AboutPage;
