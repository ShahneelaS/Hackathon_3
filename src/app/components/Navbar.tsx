'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SearchComponent from "./SearchComponent";
import AdvancedSearchComponent from "./AdvancedSearchComponent";
import LanguageSwitcher from "./LanguageSwitcher";

// Define Product Type
interface Product {
  id: number;
  name: string;
  tags: string[];
}

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isAdvancedSearchOpen, setIsAdvancedSearchOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const products: Product[] = [
    { id: 1, name: "Plant Pot", tags: ["green", "decor"] },
    { id: 2, name: "Ceramic Vase", tags: ["ceramic", "decor"] },
    { id: 3, name: "Wooden Chair", tags: ["furniture", "chair"] },
  ];

  useEffect(() => {
    const storedCartCount = parseInt(localStorage.getItem("cartCount") || "0", 10);
    const storedWishlistCount = parseInt(localStorage.getItem("wishlistCount") || "0", 10);

    setCartCount(storedCartCount);
    setWishlistCount(storedWishlistCount);
  }, []);

  const handleAdvancedSearch = (query: string) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
    );
    setFilteredProducts(filtered);
  };

  return (
    <nav className="w-full bg-white shadow-md relative">
      {/* Top Navbar */}
      <div className="flex flex-wrap items-center justify-between px-4 py-3 border-b border-gray-200 md:px-6 md:py-4">
        {/* Search Bar */}
        <div className="relative flex items-center w-1/3">
          <SearchComponent onSearch={(query) => handleAdvancedSearch(query)} />
          <button
            className="ml-2 text-sm text-gray-500 hover:text-gray-800"
            onClick={() => setIsAdvancedSearchOpen(!isAdvancedSearchOpen)}
          >
            Advanced
          </button>
        </div>

        {/* Brand Logo */}
        <Link href="/" className="mx-auto">
          <h1 className="text-lg font-bold font-clash text-gray-800 md:text-xl">
            Avion
          </h1>
        </Link>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          {/* Wishlist */}
          <Link href="/wishlist">
            <div className="relative w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <Image src="/wishlist-icon.png" alt="Wishlist Icon" width={24} height={24} />
              {wishlistCount > 0 && (
                <span className="absolute top-0 right-0 w-5 h-5 text-xs text-white bg-red-600 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </div>
          </Link>

          {/* Cart */}
          <Link href="/cart">
            <div className="relative w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <Image src="/cart-icon.png" alt="Cart Icon" width={24} height={24} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 w-5 h-5 text-xs text-white bg-red-600 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </Link>

          {/* User Menu */}
          <div className="relative">
            <button
              className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center"
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            >
              <Image src="/user-icon.png" alt="User Icon" width={24} height={24} />
            </button>
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <Link href="/profile" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">
                  Profile
                </Link>
                <Link href="/orders" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">
                  Orders
                </Link>
                <Link href="/admindashboard" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">
                  Admin Dashboard
                </Link>
                <button
                  onClick={() => alert("Logging out...")}
                  className="block w-full px-4 py-2 text-left text-sm text-gray-600 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Language Switcher */}
          <LanguageSwitcher />
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex flex-wrap items-center justify-center gap-4 px-4 py-3 overflow-x-auto md:px-6 md:py-4">
        {["Plant Pots", "Ceramics", "Tables", "Chairs", "Crockery", "Tableware", "Cutlery"].map((item) => (
          <Link key={item} href={`/${item.toLowerCase().replace(" ", "-")}`} className="no-underline">
            <div className="text-sm font-medium text-gray-600 hover:text-gray-800 whitespace-nowrap">
              {item}
            </div>
          </Link>
        ))}
        <Link href="/track-shipment" className="no-underline">
          <div className="text-sm font-medium text-gray-600 hover:text-gray-800 whitespace-nowrap">
            Track Shipment
          </div>
        </Link>
        <Link href="/contact-us" className="no-underline">
          <div className="text-sm font-medium text-gray-600 hover:text-gray-800 whitespace-nowrap">
            Contact Us
          </div>
        </Link>
      </div>

      {/* Advanced Search */}
      {isAdvancedSearchOpen && <AdvancedSearchComponent onSearch={handleAdvancedSearch} />}

      {/* Search Results */}
      {filteredProducts.length > 0 && (
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800">Search Results</h2>
          <ul>
            {filteredProducts.map((product) => (
              <li key={product.id} className="py-2">
                <Link href={`/product/${product.id}`} className="text-blue-500 hover:text-blue-700 no-underline">
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
