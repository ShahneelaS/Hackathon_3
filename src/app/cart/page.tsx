"use client";

import { useContext, useState } from "react";
import { AppContext } from "@/context/AppContext";
import { urlFor } from "../../sanity/lib/client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CheckoutFlow from "../components/CheckoutFlow";
import Image from "next/image";  

const CartPage = () => {
  const context = useContext(AppContext);

  // Always call the hook here, not conditionally
  const [showCheckoutForm, setShowCheckoutForm] = useState<boolean>(false);

  if (!context) {
    return <div>Error: Cart context is not available!</div>;
  }

  const { cart, removeFromCart, clearCart } = context;

  // Handle "Proceed to Checkout" button click
  const handleCheckout = () => {
    setShowCheckoutForm(true); // Show the checkout form after button click
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto p-8 bg-gray-50">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

        {/* Show the cart items if it's not empty */}
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            {/* Displaying the cart items */}
            {cart.map((item) => (
              <div key={item._id} className="flex flex-wrap mb-6 items-center">
                {/* Use Next.js Image component for optimization */}
                <Image
                  src={urlFor(item.image).width(100).height(100).url()}
                  alt={item.name}
                  width={100}   
                  height={100}   
                  className="mr-4"
                />
                <div className="flex-1 min-w-0">
                  <h2 className="font-bold text-lg">{item.name}</h2>
                  <p className="text-sm text-gray-700">${item.price}</p>
                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="mt-2 px-4 py-2 bg-red-600 text-white rounded-lg"
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Proceed to Checkout Button */}
            <div className="mt-6 flex justify-between md:justify-end">
              <button
                onClick={handleCheckout}
                className="px-6 py-2 bg-[#2A254B] text-white rounded-lg"
              >
                Proceed to Checkout
              </button>
            </div>

            {/* Clear Cart Button */}
            <div className="mt-4 flex justify-between md:justify-end">
              <button
                onClick={clearCart}
                className="px-6 py-2 bg-gray-400 text-white rounded-lg"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}

        {/* Conditionally render Checkout Form */}
        {showCheckoutForm && (
          <div className="mt-8 p-6 border border-gray-300 rounded-lg">
            <CheckoutFlow /> {/* This will show the checkout form */}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
