import React from "react";
import Link from "next/link";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaSkype,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

const FooterProductPage = () => {
  return (
    <footer className="bg-[#2A254B] text-white py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* First Section: Avion */}
        <div>
          <h3
            className="font-clash text-3xl sm:text-4xl mb-6 text-left text-white"
            style={{
              width: "97px",
              height: "50px",
              lineHeight: "50.4px",
            }}
          >
            Avion
          </h3>
          <ul className="space-y-2">
            <li className="font-satoshi text-sm sm:text-base">21 New York Street</li>
            <li className="font-satoshi text-sm sm:text-base">New York City</li>
            <li className="font-satoshi text-sm sm:text-base">United States of America</li>
            <li className="font-satoshi text-sm sm:text-base">432 34</li>
          </ul>
        </div>

        {/* Second Section: Social Links */}
        <div>
          <h3 className="font-clash text-lg sm:text-xl mb-4">Social Links</h3>
          <div className="flex space-x-4">
            <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-6 h-6" />
            </Link>
            <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="w-6 h-6" />
            </Link>
            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-6 h-6" />
            </Link>
            <Link href="https://www.skype.com" target="_blank" rel="noopener noreferrer">
              <FaSkype className="w-6 h-6" />
            </Link>
            <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="w-6 h-6" />
            </Link>
            <Link href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
              <FaPinterest className="w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* Third Section: Menu */}
        <div>
          <h3 className="font-clash text-lg sm:text-xl mb-4">Menu</h3>
          <ul className="space-y-2">
            <li className="font-satoshi text-sm sm:text-base">New arrivals</li>
            <li className="font-satoshi text-sm sm:text-base">Best sellers</li>
            <li className="font-satoshi text-sm sm:text-base">Recently viewed</li>
            <li className="font-satoshi text-sm sm:text-base">Popular this week</li>
            <li className="font-satoshi text-sm sm:text-base">
              <Link href="/all-products">All products</Link>
            </li>
          </ul>
        </div>

        {/* Fourth Section: Categories */}
        <div>
          <h3 className="font-clash text-lg sm:text-xl mb-4">Categories</h3>
          <ul className="space-y-2">
            <li className="font-satoshi text-sm sm:text-base">
              <Link href="/crockery">Crockery</Link>
            </li>
            <li className="font-satoshi text-sm sm:text-base">
              <Link href="/tables">Furniture</Link>
            </li>
            <li className="font-satoshi text-sm sm:text-base">
              <Link href="/ceramics">Homeware</Link>
            </li>
            <li className="font-satoshi text-sm sm:text-base">
              <Link href="/plant-pots">Plant pots</Link>
            </li>
            <li className="font-satoshi text-sm sm:text-base">
              <Link href="/chairs">Chairs</Link>
            </li>
          </ul>
        </div>

        {/* Fifth Section: Our Company */}
        <div>
          <h3 className="font-clash text-lg sm:text-xl mb-4">Our company</h3>
          <ul className="space-y-2">
            <li className="font-satoshi text-sm sm:text-base">
              <Link href="/about">About us</Link>
            </li>
            <li className="font-satoshi text-sm sm:text-base">
              <Link href="/contact-us">Contact us</Link>
            </li>
            <li className="font-satoshi text-sm sm:text-base">Vacancies</li>
            <li className="font-satoshi text-sm sm:text-base">Privacy</li>
            <li className="font-satoshi text-sm sm:text-base">Returns policy</li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-500 mt-10 pt-6 flex justify-between items-center flex-col sm:flex-row">
        <p className="text-sm font-satoshi text-center sm:text-left">
          Copyright 2025 Avion LTD
        </p>
      </div>
    </footer>
  );
};

export default FooterProductPage;
