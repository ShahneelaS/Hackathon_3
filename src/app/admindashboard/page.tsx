"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AnalyticsDashboard from "@/app/components/AnalyticsDashboard";
import BulkUpload from "@/app/components/BulkUpload";

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // Redirect to login if token is missing
      router.push("/auth/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token
    router.push("/auth/login"); // Redirect to Login page
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Logout Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Dashboard Header */}
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>

      {/* Management Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {/* Products */}
        <div className="bg-white shadow-md rounded p-4 text-center">
          <h2 className="text-xl font-semibold mb-2">Products</h2>
          <p>Manage all your products here.</p>
          <button
            onClick={() => alert("Redirect to Products Management")}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Manage Products
          </button>
        </div>
        {/* Orders */}
        <div className="bg-white shadow-md rounded p-4 text-center">
          <h2 className="text-xl font-semibold mb-2">Orders</h2>
          <p>Track and manage customer orders.</p>
          <button
            onClick={() => alert("Redirect to Orders Management")}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Manage Orders
          </button>
        </div>
        {/* Users */}
        <div className="bg-white shadow-md rounded p-4 text-center">
          <h2 className="text-xl font-semibold mb-2">Users</h2>
          <p>View and manage registered users.</p>
          <button
            onClick={() => alert("Redirect to Users Management")}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Manage Users
          </button>
        </div>
        {/* Categories */}
        <div className="bg-white shadow-md rounded p-4 text-center">
          <h2 className="text-xl font-semibold mb-2">Categories</h2>
          <p>Organize and manage product categories.</p>
          <button
            onClick={() => alert("Redirect to Categories Management")}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Manage Categories
          </button>
        </div>
        {/* Discounts & Promotions */}
        <div className="bg-white shadow-md rounded p-4 text-center">
          <h2 className="text-xl font-semibold mb-2">Discounts & Promotions</h2>
          <p>Create and manage discounts and promotions for customers.</p>
          <button
            onClick={() => alert("Redirect to Discount & Promotions Management")}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Manage Discounts
          </button>
        </div>
      </div>

      {/* Analytics Dashboard */}
      <div className="bg-white shadow-md rounded p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Analytics Overview</h2>
        <AnalyticsDashboard />
        {/* Add More Buttons or Functionalities */}
        <div className="mt-4 flex justify-between">
          <button
            onClick={() => alert("View Detailed Analytics")}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            View Detailed Analytics
          </button>
          <button
            onClick={() => alert("Export Analytics Report")}
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
          >
            Export Report
          </button>
        </div>
      </div>

      {/* Bulk Upload Section */}
      <div className="bg-white shadow-md rounded p-6">
        <h2 className="text-2xl font-bold mb-4">Bulk Upload</h2>
        <BulkUpload />
      </div>
    </div>
  );
}
