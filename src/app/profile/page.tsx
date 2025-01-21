"use client";

import React from 'react';
import UserProfile from '../components/UserProfile';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FeedbackForm from '../components/FeedbackForm';
import ReviewsRating from '../components/ReviewsRatings';
import OrderTracking from '../components/OrderTracking';
import GiftCard from '../components/GiftCard'; 

const ProfilePage = () => {
  const userData = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    addresses: ['123 Main St, City, Country', '456 Elm St, City, Country'],
    orderHistory: [
      { id: 1, date: '2025-01-01', status: 'Shipped' },
      { id: 2, date: '2025-01-10', status: 'Delivered' }
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-gray-900 mb-8">My Profile</h1>

        {/* User Profile */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <UserProfile
            name={userData.name}
            email={userData.email}
            addresses={userData.addresses}
            orderHistory={userData.orderHistory}
          />
        </div>

        {/* Dashboard Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Order Tracking */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <OrderTracking />
          </div>

          {/* Gift Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <GiftCard />
          </div>
        </div>

        {/* Feedback Form */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6 mt-8">
          <FeedbackForm />
        </div>

        {/* Reviews & Ratings */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ReviewsRating />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
