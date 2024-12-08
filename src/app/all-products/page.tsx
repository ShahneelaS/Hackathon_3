import { useState } from "react";
import Navbar from "./../components/Navbar"; 
import FooterProductPage from "./../components/FooterProductPage"; 
const AllProductsPage = () => {
  return (
    <div className="all-products-page">
      {/* Navbar */}
      <Navbar />

      {/* Horizontal Image (Below Navbar) */}
      <section className="relative">
        <img src="/Frame 143.png" alt="Collection Banner" className="w-full h-auto" />
      </section>

      {/* Filter Bar */}
      <section className="bg-white py-4 px-8 flex flex-wrap justify-between items-center">
        {/* Left Side: Categories, Product Type, Price, Brand */}
        <div className="flex flex-wrap space-x-6 mb-4 lg:mb-0">
          <div className="flex items-center space-x-2">
            <span className="text-[#2A254B]">Category</span>
            <span className="text-[#2A254B]">▼</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[#2A254B]">Product Type</span>
            <span className="text-[#2A254B]">▼</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[#2A254B]">Price</span>
            <span className="text-[#2A254B]">▼</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[#2A254B]">Brand</span>
            <span className="text-[#2A254B]">▼</span>
          </div>
        </div>

        {/* Right Side: Sorting by Date */}
        <div className="flex items-center space-x-4">
          <span className="text-[#2A254B]">Sorting by:</span>
          <div className="flex items-center space-x-2">
            <span className="text-[#2A254B]">Date Added</span>
            <span className="text-[#2A254B]">▼</span>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="px-8 py-10">
        {/* First Row of Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Product 1 */}
          <div className="flex flex-col items-center">
            <img src="/HS-Right Image.png" alt="Product 1" className="w-full h-auto rounded-lg mb-4" />
            <h3 className="font-bold text-[#2A254B]">Product Title 1</h3>
            <p className="text-[#505977]">$25.00</p>
          </div>
          {/* Product 2 */}
          <div className="flex flex-col items-center">
            <img src="/Parent (1).png" alt="Product 2" className="w-full h-auto rounded-lg mb-4" />
            <h3 className="font-bold text-[#2A254B]">Product Title 2</h3>
            <p className="text-[#505977]">$35.00</p>
          </div>
          {/* Product 3 */}
          <div className="flex flex-col items-center">
            <img src="/Parent (2).png" alt="Product 3" className="w-full h-auto rounded-lg mb-4" />
            <h3 className="font-bold text-[#2A254B]">Product Title 3</h3>
            <p className="text-[#505977]">$40.00</p>
          </div>
          {/* Product 4 */}
          <div className="flex flex-col items-center">
            <img src="/Parent (3).png" alt="Product 4" className="w-full h-auto rounded-lg mb-4" />
            <h3 className="font-bold text-[#2A254B]">Product Title 4</h3>
            <p className="text-[#505977]">$50.00</p>
          </div>
        </div>

        {/* Second Row of Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
          {/* Product 5 */}
          <div className="flex flex-col items-center">
            <img src="/Parent (9).png" alt="Product 5" className="w-full h-auto rounded-lg mb-4" />
            <h3 className="font-bold text-[#2A254B]">Product Title 5</h3>
            <p className="text-[#505977]">$55.00</p>
          </div>
          {/* Product 6 */}
          <div className="flex flex-col items-center">
            <img src="/Parent (7).png" alt="Product 6" className="w-full h-auto rounded-lg mb-4" />
            <h3 className="font-bold text-[#2A254B]">Product Title 6</h3>
            <p className="text-[#505977]">$65.00</p>
          </div>
          {/* Product 7 */}
          <div className="flex flex-col items-center">
            <img src="/Parent (6).png" alt="Product 7" className="w-full h-auto rounded-lg mb-4" />
            <h3 className="font-bold text-[#2A254B]">Product Title 7</h3>
            <p className="text-[#505977]">$70.00</p>
          </div>
          {/* Product 8 */}
          <div className="flex flex-col items-center">
            <img src="/Parent (8).png" alt="Product 8" className="w-full h-auto rounded-lg mb-4" />
            <h3 className="font-bold text-[#2A254B]">Product Title 8</h3>
            <p className="text-[#505977]">$80.00</p>
          </div>
        </div>

        {/* Third Row of Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
          {/* Product 5 */}
          <div className="flex flex-col items-center">
            <img src="/HS-Right Image.png" alt="Product 5" className="w-full h-auto rounded-lg mb-4" />
            <h3 className="font-bold text-[#2A254B]">Product Title 5</h3>
            <p className="text-[#505977]">$55.00</p>
          </div>
          {/* Product 6 */}
          <div className="flex flex-col items-center">
            <img src="/Parent (1).png" alt="Product 6" className="w-full h-auto rounded-lg mb-4" />
            <h3 className="font-bold text-[#2A254B]">Product Title 6</h3>
            <p className="text-[#505977]">$65.00</p>
          </div>
          {/* Product 7 */}
          <div className="flex flex-col items-center">
            <img src="/Parent (2).png" alt="Product 7" className="w-full h-auto rounded-lg mb-4" />
            <h3 className="font-bold text-[#2A254B]">Product Title 7</h3>
            <p className="text-[#505977]">$70.00</p>
          </div>
          {/* Product 8 */}
          <div className="flex flex-col items-center">
            <img src="/Parent (3).png" alt="Product 8" className="w-full h-auto rounded-lg mb-4" />
            <h3 className="font-bold text-[#2A254B]">Product Title 8</h3>
            <p className="text-[#505977]">$80.00</p>
          </div>
        </div>

        {/* Centered 'View Collection' Button */}
        <div className="flex justify-center mt-10">
          <button className="bg-[#E0E0E0] text-[#2A254B] px-8 py-3 rounded-lg">
            View Collection
          </button>
        </div>
      </section>

      {/* Footer */}
      <FooterProductPage />
    </div>
  );
};

export default AllProductsPage;
