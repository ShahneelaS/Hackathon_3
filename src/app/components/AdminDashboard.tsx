import React from 'react';
import BulkUpload from '../components/BulkUpload';  
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AdminDashboard = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Admin Dashboard</h1>

        {/* Dashboard Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">Products</h2>
            <p>Total Products: 120</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">Orders</h2>
            <p>Pending Orders: 5</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">Users</h2>
            <p>Total Users: 1500</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">Categories</h2>
            <p>Total Categories: 10</p>
          </div>
        </div>

        {/* Include the BulkUpload Component here */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Bulk Upload Products</h2>
          <BulkUpload /> {/* This will show the upload button */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AdminDashboard;
