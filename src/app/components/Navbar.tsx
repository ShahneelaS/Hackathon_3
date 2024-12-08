'use client'; 

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md">
      {/* Top Navbar (Before Border) */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        {/* Search Icon */}
        <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center md:w-8 md:h-8">
          <Image src="/search-icon.png" alt="Search Icon" width={24} height={24} />
        </div>

        {/* Center: Avion Heading (Clickable Link to About Page) */}
        <Link href="/about">
          <h1 className="text-lg font-bold font-clash text-gray-800 mx-auto cursor-pointer">
            Avion
          </h1>
        </Link>

        {/* Right Side: Cart and User Icons */}
        <div className="flex items-center space-x-4">
          {/* Cart Icon */}
          <Link href="/cart">
            <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center md:w-8 md:h-8">
              <Image src="/cart-icon.png" alt="Cart Icon" width={24} height={24} />
            </div>
          </Link>

          {/* User Icon */}
          <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center md:w-8 md:h-8">
            <Image src="/user-icon.png" alt="User Icon" width={24} height={24} />
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex items-center justify-between px-6 py-3 overflow-x-auto md:justify-center md:space-x-6">
        {["Plant Pots", "Ceramics", "Tables", "Chairs", "Crockery", "Tableware", "Cutlery"].map((item) => (
          <Link key={item} href={`/${item.toLowerCase().replace(" ", "-")}`}>
            <div className="text-sm font-satoshi text-gray-600 hover:text-gray-800 whitespace-nowrap">
              {item}
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
