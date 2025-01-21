'use client';

import React, { useState } from 'react';

const Subscription = () => {
  const [email, setEmail] = useState(''); // State to store the email
  const [message, setMessage] = useState(''); // State to display feedback message

  // Handle changes to the email input field
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // Handle form submission
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (email) {
      setMessage('Thank you for subscribing!');
      setEmail(''); // Clear the email input after successful submission
    } else {
      setMessage('Please enter a valid email address.');
    }
  };

  return (
    <div className="p-6 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Subscribe to Our Services</h2>
      <form onSubmit={handleSubscribe}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          className="border p-2 w-full mb-4 text-black placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-lg"
        />
        <button
          type="submit"
          className="w-full py-2 bg-[#2A254B] text-white rounded-lg"
        >
          Subscribe
        </button>
      </form>
      {message && <p className="mt-4 text-center text-blue-600">{message}</p>}
    </div>
  );
};

export default Subscription;
