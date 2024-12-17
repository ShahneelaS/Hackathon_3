"use client";

import { useParams, useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar';
import FooterProductPage from '../../components/FooterProductPage';
import JoinTheClub from '../../components/JoinTheClub';
import FeatureSection from '../../components/FeatureSection';
import NewCeramics from '../../components/NewCeramics';
import { useState } from 'react';

const ProductPage = () => {
  const { id } = useParams();
  const router = useRouter(); // For navigation
  const [showHeader, setShowHeader] = useState(true); // Manage top header visibility
  const [amount, setAmount] = useState(1); // State for product amount
  const [successMessage, setSuccessMessage] = useState(''); // State for success message

 
  const products = [
    { id: '1', name: 'The Dandy Chair', price: '£250', description: 'A timeless design, with premium materials...', dimensions: { height: '110cm', width: '75cm', depth: '50cm' }, image: '/Image Left.png' },
    { id: '2', name: 'Rustic Vase Set', price: '£155.00', description: 'A classic design, perfect for any living room...', dimensions: { height: '90cm', width: '180cm', depth: '80cm' }, image: '/Parent (1).png' },
    { id: '3', name: 'The Silky Vase', price: '£125.00', description: 'Beautiful ceramic vase...', dimensions: { height: '30cm', width: '20cm', depth: '20cm' }, image: '/Parent (2).png' },
    { id: '4', name: 'The Lucy Lamp', price: '£399.00', description: 'Stylish lamp...', dimensions: { height: '50cm', width: '30cm', depth: '30cm' }, image: '/Parent (3).png' }
  ];

  const product = products.find((product) => product.id === id);

  if (!product) {
    return <p>Product not found</p>;
  }

  // Function to handle adding to cart
  const handleAddToCart = () => {
    setSuccessMessage(`${product.name} successfully added to cart!`);
    setTimeout(() => setSuccessMessage(''), 3000); // Clear message after 3 seconds
  };

  return (
    <div className="product-page">
      {/* Top Header */}
      {showHeader && (
        <div className="bg-[#2A254B] text-white flex items-center justify-center px-4 py-2 relative">
          {/* Content Centered */}
          <div className="flex items-center gap-2">
            <img src="/Delivery-icon.png" alt="Delivery Icon" className="w-4 h-4" />
            <p className="text-sm font-normal">
              Free delivery on all orders over £50 with code easter checkout
            </p>
          </div>

          {/* Cross Button */}
          <button
            className="absolute right-4 text-white w-6 h-6 flex items-center justify-center"
            onClick={() => {
              setShowHeader(false); // Hide the header
              router.push('/'); // Redirect to Home Page
            }}
          >
            ✖
          </button>
        </div>
      )}

      {/* Navbar */}
      <Navbar />

      {/* Product Details */}
      <section className="flex flex-col md:flex-row p-8 gap-8">
        {/* Product Image */}
        <div className="product-image w-full md:w-1/2 flex-shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="product-details w-full md:w-1/2 flex flex-col justify-start space-y-6">
          <h2 className="text-3xl font-semibold text-[#2A254B]">{product.name}</h2>
          <p className="text-2xl font-medium text-[#12131A]">{product.price}</p>

          <div className="description">
            <h3 className="text-lg font-semibold text-[#2A254B]">Description</h3>
            <p className="text-sm text-[#505977] mt-2">{product.description}</p>
          </div>

          <ul className="list-disc list-inside space-y-1">
            <li className="text-sm text-[#505977]">Premium material</li>
            <li className="text-sm text-[#505977]">Handmade upholstery</li>
            <li className="text-sm text-[#505977]">Quality timeless classic</li>
          </ul>

          <div className="dimensions">
            <h3 className="text-lg font-semibold text-[#2A254B]">Dimensions</h3>
            <div className="flex flex-wrap gap-8">
              <div>
                <p className="text-sm text-[#2A254B]">Height</p>
                <p className="text-sm text-[#505977]">{product.dimensions.height}</p>
              </div>
              <div>
                <p className="text-sm text-[#2A254B]">Width</p>
                <p className="text-sm text-[#505977]">{product.dimensions.width}</p>
              </div>
              <div>
                <p className="text-sm text-[#2A254B]">Depth</p>
                <p className="text-sm text-[#505977]">{product.dimensions.depth}</p>
              </div>
            </div>
          </div>

          <div className="add-to-cart flex items-center space-x-4">
            <div className="amount-box flex items-center border rounded-md px-4 py-2">
              <span className="text-sm text-[#505977]">Amount:</span>
              <button
                className="text-xl font-semibold mx-2"
                onClick={() => setAmount(Math.max(amount - 1, 1))} 
              >
                -
              </button>
              <span className="mx-2">{amount}</span>
              <button
                className="text-xl font-semibold mx-2"
                onClick={() => setAmount(amount + 1)}
              >
                +
              </button>
            </div>
            <button
              className="ml-4 px-6 py-2 bg-[#2A254B] text-white rounded-md"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>

          {/* Success Message */}
          {successMessage && (
            <p className="text-green-600 font-medium mt-4">{successMessage}</p>
          )}
        </div>
      </section>

      {/* New Ceramics Section */}
      <NewCeramics heading="You Might Also Like" />

      {/* Join the Club */}
      <JoinTheClub />

      {/* Feature Section */}
      <FeatureSection />

      {/* Footer */}
      <FooterProductPage />
    </div>
  );
};

export default ProductPage;
