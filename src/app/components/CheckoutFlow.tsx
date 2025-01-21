import React, { useState } from 'react';

const CheckoutFlow = () => {
  const [formData, setFormData] = useState({
    billingAddress: '',
    shippingAddress: '',
    paymentMethod: '',
    creditCardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  // Example cart items (replace this with actual data from cart)
  const cart = [
    { name: 'Product 1', quantity: 2 },
    { name: 'Product 2', quantity: 1 },
  ];

  // Handle change in input fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to an API)
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Checkout Form Heading */}
      <h1 className="text-2xl font-bold mb-6 text-center">Checkout Form</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Order Details */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Order Details</h3>
          <ul className="list-disc pl-6 space-y-2">
            {cart.map((item, index) => (
              <li key={index} className="text-sm">
                {item.name} x{item.quantity}
              </li>
            ))}
          </ul>
        </div>

        {/* Billing Address */}
        <div>
          <label htmlFor="billingAddress" className="block text-sm font-medium">
            Billing Address
          </label>
          <input
            type="text"
            id="billingAddress"
            name="billingAddress"
            value={formData.billingAddress}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Shipping Address */}
        <div>
          <label htmlFor="shippingAddress" className="block text-sm font-medium">
            Shipping Address
          </label>
          <input
            type="text"
            id="shippingAddress"
            name="shippingAddress"
            value={formData.shippingAddress}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Payment Method */}
        <div>
          <label htmlFor="paymentMethod" className="block text-sm font-medium">
            Payment Method
          </label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Payment Method</option>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>

        {/* Credit Card Fields */}
        {formData.paymentMethod === 'creditCard' && (
          <>
            <div>
              <label htmlFor="creditCardNumber" className="block text-sm font-medium">
                Credit Card Number
              </label>
              <input
                type="text"
                id="creditCardNumber"
                name="creditCardNumber"
                value={formData.creditCardNumber}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="expirationDate" className="block text-sm font-medium">
                Expiration Date
              </label>
              <input
                type="text"
                id="expirationDate"
                name="expirationDate"
                value={formData.expirationDate}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="cvv" className="block text-sm font-medium">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </>
        )}

        {/* Submit Button */}
        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-[#2A254B] text-white rounded-lg hover:bg-blue-900"
          >
            Submit Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutFlow;
