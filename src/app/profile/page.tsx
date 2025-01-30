"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import UserProfile from "../components/UserProfile";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FeedbackForm from "../components/FeedbackForm";
import ReviewsRating from "../components/ReviewsRatings";
import OrderTracking from "../components/OrderTracking";
import GiftCard from "../components/GiftCard";

const ProfilePage = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem("user");

    if (!storedUserData) {
      router.push("/signin"); // Redirect to Signin if not logged in
    } else {
      setUserData(JSON.parse(storedUserData));
    }
  }, [router]);

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user data from localStorage
    router.push("/signin"); // Redirect to Signin page
  };

  if (!userData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-900">My Profile</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
          >
            Logout
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <UserProfile
            name={userData.name}
            email={userData.email}
            addresses={userData.addresses || []}
            orderHistory={userData.orderHistory || []}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <OrderTracking orderHistory={userData.orderHistory || []} />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <GiftCard />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6 mt-8">
          <FeedbackForm />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <ReviewsRating />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
