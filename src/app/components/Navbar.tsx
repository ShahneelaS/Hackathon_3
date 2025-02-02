'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiHome } from "react-icons/fi";
import SearchComponent from "./SearchComponent";
import AdvancedSearchComponent from "./AdvancedSearchComponent";
import LanguageSwitcher from "./LanguageSwitcher";
import { useRouter } from 'next/navigation'; 
import { useAppContext } from "@/context/AppContext"; 

// Define Product Type
interface Product {
  id: number;
  name: string;
  tags: string[];
}

const Navbar = () => {
  const { cart, wishlist } = useAppContext(); 
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isAdvancedSearchOpen, setIsAdvancedSearchOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const router = useRouter();

  const products: Product[] = [
    { id: 1, name: "Plant Pot", tags: ["green", "decor"] },
    { id: 2, name: "Ceramic Vase", tags: ["ceramic", "decor"] },
    { id: 3, name: "Wooden Chair", tags: ["furniture", "chair"] },
  ];

  useEffect(() => {
    const userStatus = localStorage.getItem("isLoggedIn") === "true"; 
    setIsLoggedIn(userStatus);
  }, []);

  const handleAdvancedSearch = (query: string) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
    );
    setFilteredProducts(filtered);
  };

  const handleProfileClick = () => {
    if (!isLoggedIn) {
      router.push('/signin'); // Redirect to login page if not logged in
    } else {
      router.push('/profile'); // Otherwise, navigate to profile page
    }
  };

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      {/* Top Navbar */}
      <div className="flex flex-wrap items-center justify-between px-4 py-3 border-b border-gray-200 md:px-6 md:py-4">
        {/* Home Button */}
        <Link href="/" className="text-gray-800 text-2xl">
          <FiHome />
        </Link>
        
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
        <h1 className="text-lg font-bold font-clash text-gray-800 md:text-xl">Avion</h1>

        {/* Mobile Menu Toggle Button */}
        <button
          className="block md:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="text-2xl">&#9776;</span> {/* Hamburger icon */}
        </button>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          {/* Wishlist */}
          <Link href="/wishlist">
            <div className="relative w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <Image src="/wishlist-icon.png" alt="Wishlist Icon" width={24} height={24} />
              {wishlist.length > 0 && (
                <span className="absolute top-0 right-0 w-5 h-5 text-xs text-white bg-red-600 rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </div>
          </Link>

          {/* Cart */}
          <Link href="/cart">
            <div className="relative w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <Image src="/cart-icon.png" alt="Cart Icon" width={24} height={24} />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 w-5 h-5 text-xs text-white bg-red-600 rounded-full flex items-center justify-center">
                  {cart.length}
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
                <button
                  onClick={handleProfileClick}
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Profile
                </button>
                <Link href="/track-shipment" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">
                  Track Shipment
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

      {/* Mobile Menu Links (Show only if isMenuOpen is true) */}
      {isMenuOpen && (
        <div className="flex flex-col items-center justify-center gap-4 px-4 py-3 overflow-x-auto md:hidden">
          {["Plant Pots", "Ceramics", "Tables", "Chairs", "Crockery", "Tableware", "Cutlery"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase().replace(" ", "-")}`} className="no-underline">
              <div className="text-sm font-medium text-gray-600 hover:text-gray-800 whitespace-nowrap">
                {item}
              </div>
            </Link>
          ))}
          <Link href="/about" className="no-underline">
            <div className="text-sm font-medium text-gray-600 hover:text-gray-800 whitespace-nowrap">
            About us
            </div>
          </Link>
          <Link href="/contact-us" className="no-underline">
            <div className="text-sm font-medium text-gray-600 hover:text-gray-800 whitespace-nowrap">
              Contact Us
            </div>
          </Link>
        </div>
      )}

      {/* Bottom Navigation (Visible on medium screens and up) */}
      <div className="hidden md:flex flex-wrap items-center justify-center gap-4 px-4 py-3 overflow-x-auto md:px-6 md:py-4">
        {["Plant Pots", "Ceramics", "Tables", "Chairs", "Crockery", "Tableware", "Cutlery"].map((item) => (
          <Link key={item} href={`/${item.toLowerCase().replace(" ", "-")}`} className="no-underline">
            <div className="text-sm font-medium text-gray-600 hover:text-gray-800 whitespace-nowrap">
              {item}
            </div>
          </Link>
        ))}
        <Link href="/about" className="no-underline">
          <div className="text-sm font-medium text-gray-600 hover:text-gray-800 whitespace-nowrap">
          About us
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
