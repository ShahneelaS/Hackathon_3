import React from "react";

const features = [
  {
    title: "Next day as standard",
    description: "Order before 3pm and get your order the next day as standard.",
    iconPath: "/Delivery-icon.png", 
  },
  {
    title: "Made by true artisans",
    description:
      "Handmade crafted goods made with real passion and craftsmanship.",
    iconPath: "/Checkmark-icon.png", 
  },
  {
    title: "Unbeatable prices",
    description: "Affordable luxury for your home without compromise.",
    iconPath: "/Purchase-icon.png", 
  },
  {
    title: "Recycled packaging",
    description:
      "We use 100% recycled packaging to ensure our footprint is manageable.",
    iconPath: "/Sprout-icon.png", 
  },
];

const FeatureSection = () => {
  return (
    <section className="bg-white py-8 sm:py-12 md:py-16 lg:py-20 px-6 lg:px-20 text-[#2A254B]">
      <h3 className="font-clash text-[20px] sm:text-[24px] lg:text-[28px] leading-[28px] sm:leading-[33.6px] text-center mb-8 sm:mb-10">
        What makes our brand different
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="w-full flex flex-col items-center sm:items-start"
          >
            {/* Icon Section */}
            <div className="w-[60px] h-[60px] mb-4 flex items-center justify-center sm:justify-start">
              <img
                src={feature.iconPath}
                alt={feature.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Text Section */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <h4 className="font-clash text-[18px] sm:text-[20px] leading-[24px] sm:leading-[28px] font-semibold mb-4">
                {feature.title}
              </h4>
              <p className="font-satoshi text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-[#505977]">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
