import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-[#2A254B] text-white py-16 px-6 lg:px-20 flex flex-col lg:flex-row justify-between items-center relative overflow-hidden">
      {/* Left Side */}
      <div className="w-full lg:w-2/3 mb-8 lg:mb-0 z-10">
        {/* Heading */}
        <h2 className="font-clash text-3xl sm:text-4xl lg:text-[32px] leading-[44.8px] font-bold mb-6">
          The furniture brand for the future, <br /> with timeless designs
        </h2>

        {/* View Collection Button (Placed before paragraph) */}
        <button className="bg-[#F9F9F926] text-white font-satoshi py-4 px-8 rounded-lg mb-12">
          View Collection
        </button>

        {/* Description Paragraph (Placed after button) */}
        <p className="font-satoshi text-lg sm:text-xl lg:text-[18px] leading-[27px] mb-0 text-justify sm:pr-10 lg:pr-20">
          <span className="block">
            A new era in eco-friendly furniture with Avelon, the French luxury
            retail brand
          </span>
          <span className="block">
            with nice fonts, tasteful colors, and a beautiful way to display
            things digitally
          </span>
          <span className="block">
            using modern web technologies.
          </span>
        </p>
      </div>

      {/* Right Side (Image) */}
      <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
        <img
          src="/HS-Right Image.png"
          alt="Furniture"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
};

export default HeroSection;
