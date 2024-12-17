'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md">
      {/* Top Navbar (Before Border) */}
      <div className="flex flex-wrap items-center justify-between px-4 py-3 border-b border-gray-200 md:px-6 md:py-4">
        {/* Left: Search Icon */}
        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
          <Image src="/search-icon.png" alt="Search Icon" width={24} height={24} />
        </div>

        {/* Center: Avion Heading */}
        <Link href="/about" className="mx-auto">
          <h1 className="text-lg font-bold font-clash text-gray-800 md:text-xl">
            Avion
          </h1>
        </Link>

        {/* Right: Cart and User Icons */}
        <div className="flex items-center space-x-3">
          <Link href="/cart">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <Image src="/cart-icon.png" alt="Cart Icon" width={24} height={24} />
            </div>
          </Link>
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <Image src="/user-icon.png" alt="User Icon" width={24} height={24} />
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex flex-wrap items-center justify-center gap-4 px-4 py-3 overflow-x-auto md:px-6 md:py-4">
        {["Plant Pots", "Ceramics", "Tables", "Chairs", "Crockery", "Tableware", "Cutlery"].map((item) => (
          <Link key={item} href={`/${item.toLowerCase().replace(" ", "-")}`}>
            <div className="text-sm font-medium text-gray-600 hover:text-gray-800 whitespace-nowrap">
              {item}
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
