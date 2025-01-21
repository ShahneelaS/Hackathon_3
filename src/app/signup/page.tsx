'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 
import { FaGoogle, FaFacebook } from 'react-icons/fa'; 

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = { name: '', email: '', password: '', confirmPassword: '' };
    let isValid = true;

    if (!formData.name) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle sign-up logic, like sending the data to an API or storing it
      console.log('Form submitted successfully:', formData);
    }
  };

  // Social media login (Google/Facebook) logic can be integrated here with appropriate authentication method (e.g., next-auth or Firebase)
  const handleSocialLogin = (platform: string) => {
    console.log(`${platform} login clicked`);
    // Implement Google or Facebook authentication here
  };

  return (
    <div className="bg-[#F3F3F3] min-h-screen flex flex-col">
      <Navbar /> {/* Adding the Navbar */}
      <div className="flex-grow flex justify-center items-center py-16 px-6 lg:px-20">
        <div className="bg-white p-8 rounded-md w-full sm:w-[400px]">
          <h2 className="text-[#2A254B] text-2xl font-semibold mb-6">Sign Up</h2>

          <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="mb-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#2A254B]"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#2A254B]"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#2A254B]"
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>

            {/* Confirm Password Input */}
            <div className="mb-4">
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm Password"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#2A254B]"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#2A254B] text-white py-3 rounded-md hover:bg-[#1d1a3a]"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-sm mt-4">
            Already have an account?{' '}
            <a href="/signin" className="text-[#2A254B] hover:underline">
              Sign In
            </a>
          </p>

          {/* Social Media Buttons */}
          <div className="mt-6">
            <button
              onClick={() => handleSocialLogin('Google')}
              className="w-full bg-red-500 text-white py-3 rounded-md flex items-center justify-center gap-2 hover:bg-red-600"
            >
              <FaGoogle /> Sign Up with Google
            </button>
            <button
              onClick={() => handleSocialLogin('Facebook')}
              className="w-full bg-blue-600 text-white py-3 rounded-md flex items-center justify-center gap-2 mt-4 hover:bg-blue-700"
            >
              <FaFacebook /> Sign Up with Facebook
            </button>
          </div>
        </div>
      </div>
      <Footer /> 
    </div>
  );
};

export default SignupPage;
