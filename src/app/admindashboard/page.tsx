"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BulkUpload from '../components/BulkUpload';
import DiscountPromotion from '../components/DiscountPromotion';
import AnalyticsDashboard from '../components/AnalyticsDashboard'; 

const AdminDashboard = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-semibold text-center mb-12 text-[#2A254B]">Admin Dashboard</h1>

        {/* Dashboard Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold text-gray-800">Products</h2>
            <p className="text-gray-600">Total Products: 120</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold text-gray-800">Orders</h2>
            <p className="text-gray-600">Pending Orders: 5</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold text-gray-800">Users</h2>
            <p className="text-gray-600">Total Users: 1500</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold text-gray-800">Categories</h2>
            <p className="text-gray-600">Total Categories: 10</p>
          </div>
        </div>

        {/* Add Bulk Upload Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-center text-[#2A254B] mb-4">Bulk Upload</h2>
          <p className="text-lg text-center text-gray-700 mb-6">
            Upload CSV files for bulk product data. Please ensure the CSV file follows the required format.
          </p>
          <div className="flex justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
              <BulkUpload />
            </div>
          </div>
        </div>

        {/* Add Discount & Promotion Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-center text-[#2A254B] mb-4">Discount & Promotions</h2>
          <p className="text-lg text-center text-gray-700 mb-6">
            Manage your discounts and promotions for the store here.
          </p>
          <div className="flex justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
              <DiscountPromotion />
            </div>
          </div>
        </div>

        {/* Add Analytics Dashboard Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-center text-[#2A254B] mb-4">Analytics Dashboard</h2>
          <p className="text-lg text-center text-gray-700 mb-6">
            Monitor key performance indicators for your store.
          </p>
          <div className="flex justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
              <AnalyticsDashboard />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
