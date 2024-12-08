import React from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaSkype,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2A254B] text-white py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* First Section */}
        <div>
          <h3 className="font-clash text-lg sm:text-xl mb-4">Menu</h3>
          <ul className="space-y-2">
            <li className="font-satoshi text-sm sm:text-base">New arrivals</li>
            <li className="font-satoshi text-sm sm:text-base">Best sellers</li>
            <li className="font-satoshi text-sm sm:text-base">Recently viewed</li>
            <li className="font-satoshi text-sm sm:text-base">Popular this week</li>
            <li className="font-satoshi text-sm sm:text-base">All products</li>
          </ul>
        </div>

        {/* Second Section */}
        <div>
          <h3 className="font-clash text-lg sm:text-xl mb-4">Categories</h3>
          <ul className="space-y-2">
            <li className="font-satoshi text-sm sm:text-base">Crockery</li>
            <li className="font-satoshi text-sm sm:text-base">Furniture</li>
            <li className="font-satoshi text-sm sm:text-base">Homeware</li>
            <li className="font-satoshi text-sm sm:text-base">Plant pots</li>
            <li className="font-satoshi text-sm sm:text-base">Chairs</li>
          </ul>
        </div>

        {/* Third Section */}
        <div>
          <h3 className="font-clash text-lg sm:text-xl mb-4">Our company</h3>
          <ul className="space-y-2">
            <li className="font-satoshi text-sm sm:text-base">About us</li>
            <li className="font-satoshi text-sm sm:text-base">Vacancies</li>
            <li className="font-satoshi text-sm sm:text-base">Contact us</li>
            <li className="font-satoshi text-sm sm:text-base">Privacy</li>
            <li className="font-satoshi text-sm sm:text-base">Returns policy</li>
          </ul>
        </div>

        {/* Email Signup */}
        <div className="mt-6 max-w-full mx-auto">
          <h3 className="text-white text-lg sm:text-xl font-clash mb-4">
            Join our mailing list
          </h3>
          <div className="flex flex-col sm:flex-row items-center bg-[#FFFFFF26] rounded-lg border border-white">
            {/* Email Input */}
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-grow px-4 py-3 bg-transparent text-white placeholder-white focus:outline-none w-full sm:w-[70%]" // Adjusted width for smaller screens
            />
            {/* Signup Button */}
            <button
              className="bg-white text-[#2A254B] px-6 py-3 font-satoshi font-medium sm:w-[30%] text-center whitespace-nowrap mt-4 sm:mt-0"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-500 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm font-satoshi text-center sm:text-left">
          Copyright 2022 Avion LTD
        </p>
        <div className="flex space-x-6 mt-4 sm:mt-0">
          <FaLinkedin className="w-6 h-6" />
          <FaFacebook className="w-6 h-6" />
          <FaInstagram className="w-6 h-6" />
          <FaSkype className="w-6 h-6" />
          <FaTwitter className="w-6 h-6" />
          <FaPinterest className="w-6 h-6" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
