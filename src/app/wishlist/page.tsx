"use client";

import { useContext, useState } from "react";
import { AppContext } from "@/context/AppContext";
import { urlFor } from "../../sanity/lib/client";
import Image from "next/image";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";

const WishlistPage = () => {
  // Hooks must be called at the top level
  const [showForm, setShowForm] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const context = useContext(AppContext);

  // Early return if context is not available
  if (!context) {
    return <div className="text-red-600 text-center">Error: Wishlist context is not available!</div>;
  }

  const { wishlist, removeFromWishlist } = context;

  // Ensure wishlist is an array and not undefined
  const safeWishlist = Array.isArray(wishlist) ? wishlist : [];

  // Handle "Buy Now" button click
  const handleBuyNow = () => {
    setShowForm(true); // Show the order form
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderSuccess(true); // Show success message
    setShowForm(false); // Hide the form after submission
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto p-8 bg-gray-100">
        <h1 className="text-3xl font-bold mb-8">Your Wishlist</h1>

        {safeWishlist.length === 0 ? (
          <p>Your wishlist is empty</p>
        ) : (
          <div>
            {safeWishlist.map((item) => (
              <div
                key={item._id}
                className="flex flex-wrap items-center mb-6 border-b pb-4"
              >
                {/* Image */}
                <div className="w-24 h-24 sm:w-32 sm:h-32 mr-4">
                  <Image
                    src={urlFor(item.image).width(100).height(100).url()}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="object-cover rounded-md"
                  />
                </div>
                {/* Product Info */}
                <div className="flex-1">
                  <h2 className="font-bold text-lg">{item.name}</h2>
                  <p className="text-sm text-gray-600">${item.price}</p>
                </div>
                {/* Remove Button */}
                <button
                  onClick={() => removeFromWishlist(item._id)}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg mt-4 sm:mt-0"
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Buy Now Button */}
            <div className="mt-6 text-center sm:text-left">
              <button
                onClick={handleBuyNow}
                className="px-6 py-3 bg-[#2A254B] text-white rounded-lg"
              >
                Buy Now
              </button>
            </div>

            {/* Display Order Form if Buy Now is clicked */}
            {showForm && !orderSuccess && (
              <div className="mt-8 p-6 border border-gray-300 rounded-lg bg-white">
                <h2 className="text-xl font-semibold mb-4">Order Form</h2>
                <form
                  onSubmit={handleSubmit}
                >
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium">
                      Full Name:
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="address" className="block text-sm font-medium">
                      Shipping Address:
                    </label>
                    <textarea
                      id="address"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-900 text-white rounded-lg"
                  >
                    Purchase
                  </button>
                </form>
              </div>
            )}

            {/* Success Message after Purchase */}
            {orderSuccess && (
              <div className="mt-8 p-6 border border-green-300 bg-green-50 text-green-700 rounded-lg">
                <h2 className="font-semibold">Success!</h2>
                <p>Your order has been successfully placed.</p>
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default WishlistPage;
