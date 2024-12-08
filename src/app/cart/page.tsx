import React from "react";
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer"; 

const CartPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow px-4 sm:px-6 md:px-10 lg:px-20 py-6 sm:py-8 md:py-10">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-bold text-[#2A254B] mb-6 sm:mb-8">Your shopping cart</h1>

        {/* Cart Items */}
        <div className="grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-6 sm:gap-8 border-b pb-4 mb-4 text-[#505977] text-sm sm:text-base">
          {/* Table Headings */}
          <div className="font-semibold hidden sm:block">Product</div>
          <div className="font-semibold text-center hidden sm:block">Quantity</div>
          <div className="font-semibold text-right hidden sm:block">Total</div>

          {/* Cart Item 1 */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <img
              src="/cart-image1.png" 
              alt="Graystone Vase"
              className="w-16 h-16 object-cover rounded"
            />
            <div>
              <h3 className="font-medium text-[#2A254B]">Graystone vase</h3>
              <p className="text-xs sm:text-sm">A timeless ceramic vase with a tri-color gray glaze.</p>
            </div>
          </div>
          <div className="text-center sm:text-base">1</div>
          <div className="text-right sm:text-base">£85</div>

          {/* Cart Item 2 */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <img
              src="/cart-image2.png" 
              alt="Basic White Vase"
              className="w-16 h-16 object-cover rounded"
            />
            <div>
              <h3 className="font-medium text-[#2A254B]">Basic white vase</h3>
              <p className="text-xs sm:text-sm">Beautiful and simple; this is one for the classics.</p>
            </div>
          </div>
          <div className="text-center sm:text-base">1</div>
          <div className="text-right sm:text-base">£125</div>
        </div>

        {/* Subtotal Section */}
        <div className="flex justify-end text-[#2A254B]">
          <div className="w-full sm:w-1/3 space-y-4">
            <div className="flex justify-between text-sm sm:text-base">
              <span>Subtotal</span>
              <span className="font-semibold">£210</span>
            </div>
            <p className="text-xs sm:text-sm text-[#505977]">
              Taxes and shipping are calculated at checkout.
            </p>
            <button className="bg-[#2A254B] text-white px-8 py-3 font-ClashDisplay rounded-lg w-full sm:w-auto">
              Go to checkout
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CartPage;
