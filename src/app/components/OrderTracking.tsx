
import React, { useState } from 'react';

const OrderTracking = () => {
  const [orderId, setOrderId] = useState('');

  const handleOrderIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOrderId(event.target.value);
  };

  const handleTrackOrder = () => {
    if (orderId.trim()) {
      // Simulate tracking the order (e.g., fetch order details from API)
      console.log('Tracking order ID:', orderId);
      // We can add logic here to fetch order details from the backend or API
    } else {
      alert('Please enter an order ID');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Track Your Order</h3>
      <input
        type="text"
        placeholder="Enter Order ID"
        value={orderId}
        onChange={handleOrderIdChange}
        className="w-full p-2 border border-gray-300 rounded-lg mb-4"
      />
      <button
        onClick={handleTrackOrder}
        className="bg-[#2A254B] text-white px-4 py-2 rounded-lg"
      >
        Track Order
      </button>
    </div>
  );
};

export default OrderTracking;
