'use client';

import React, { useState } from 'react';
import Navbar from './../components/Navbar'; 
import Footer from './../components/Footer'; 

const SigninPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = { email: '', password: '' };
    let isValid = true;

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

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle sign-in logic, like sending the data to an API or verifying credentials
      console.log('Form submitted successfully:', formData);
    }
  };

  return (
    <div className="bg-[#F3F3F3] min-h-screen flex flex-col">
      <Navbar /> {/* Adding Navbar */}
      <div className="flex-grow flex justify-center items-center py-16 px-6 lg:px-20">
        <div className="bg-white p-8 rounded-md w-full sm:w-[400px]">
          <h2 className="text-[#2A254B] text-2xl font-semibold mb-6">Sign In</h2>

          <form onSubmit={handleSubmit}>
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

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#2A254B] text-white py-3 rounded-md hover:bg-[#1d1a3a]"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-sm mt-4">
          Don&apos;t have an account?{' '}
            <a href="/signup" className="text-[#2A254B] hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
      <Footer /> {/* Adding Footer */}
    </div>
  );
};

export default SigninPage;
