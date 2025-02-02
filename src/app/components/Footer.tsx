'use client'; 

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaSkype,
  FaTwitter,
  FaPinterest,
} from 'react-icons/fa';
import Subscription from './Subscription';  

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showSubscriptionForm, setShowSubscriptionForm] = useState(false); 

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    if (email) {
      setMessage('Thank you for signing up!');
      setEmail('');
    } else {
      setMessage('Please enter a valid email.');
    }
  };

  const handleSubscriptionClick = () => {
    setShowSubscriptionForm(!showSubscriptionForm); 
  };

  return (
    <footer className="bg-[#2A254B] text-white py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="font-clash text-lg sm:text-xl mb-4">Menu</h3>
          <ul className="space-y-2">
            <li className="font-satoshi text-sm sm:text-base">New arrivals</li>
            <li className="font-satoshi text-sm sm:text-base">Best sellers</li>
            <li className="font-satoshi text-sm sm:text-base">Recently viewed</li>
            <li className="font-satoshi text-sm sm:text-base">Popular this week</li>
            <li className="font-satoshi text-sm sm:text-base">
              <Link href="/all-products">All products</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-clash text-lg sm:text-xl mb-4">Categories</h3>
          <ul className="space-y-2">
            <li className="font-satoshi text-sm sm:text-base">
              <Link href="/crockery">Crockery</Link>
            </li>
            <li className="font-satoshi text-sm sm:text-base">
              <Link href="/tables">Furniture</Link>
            </li>
            <li className="font-satoshi text-sm sm:text-base">
              <Link href="/ceramics">Homeware</Link>
            </li>
            <li className="font-satoshi text-sm sm:text-base">
              <Link href="/plant-pots">Plant pots</Link>
            </li>
            <li className="font-satoshi text-sm sm:text-base">
              <Link href="/chairs">Chairs</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-clash text-lg sm:text-xl mb-4">Our company</h3>
          <ul className="space-y-2">
            <li className="font-satoshi text-sm sm:text-base">
              <Link href="/about">About us</Link>
            </li>
            <li className="font-satoshi text-sm sm:text-base">Vacancies</li>
            <li className="font-satoshi text-sm sm:text-base">
              <Link href="/contact-us">Contact us</Link>
            </li>
            <li className="font-satoshi text-sm sm:text-base">Privacy</li>
            <li className="font-satoshi text-sm sm:text-base">Returns policy</li>
          </ul>
        </div>

        <div className="mt-6 max-w-full mx-auto">
          <h3 className="text-white text-lg sm:text-xl font-clash mb-4">
            Join our mailing list
          </h3>
          <div className="flex flex-col sm:flex-row items-center bg-[#FFFFFF26] rounded-lg border border-white">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={handleEmailChange}
              className="flex-grow px-4 py-3 bg-transparent text-white placeholder-white focus:outline-none w-full sm:w-[70%]"
            />
            <button
              className="bg-white text-[#2A254B] px-6 py-3 font-satoshi font-medium sm:w-[30%] text-center whitespace-nowrap mt-4 sm:mt-0"
              onClick={handleSignup}
            >
              Sign up
            </button>
          </div>
          {message && <p className="text-white mt-4">{message}</p>}
        </div>
      </div>

      <div className="border-t border-gray-500 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm font-satoshi text-center sm:text-left">
          Copyright 2025 Avion LTD
        </p>
        <div className="flex space-x-6 mt-4 sm:mt-0">
          <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-6 h-6" />
          </Link>
          <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="w-6 h-6" />
          </Link>
          <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-6 h-6" />
          </Link>
          <Link href="https://www.skype.com" target="_blank" rel="noopener noreferrer">
            <FaSkype className="w-6 h-6" />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="w-6 h-6" />
          </Link>
          <Link href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
            <FaPinterest className="w-6 h-6" />
          </Link>
        </div>
      </div>

      {/* Add Subscription Button */}
      <div className="mt-6 text-center">
        <button
          className="bg-[#FFFFFF26] text-white py-2 px-6 rounded-lg"
          onClick={handleSubscriptionClick}
        >
          Subscribe to our Newsletter
        </button>
      </div>

      {/* Conditional rendering for the subscription form */}
      {showSubscriptionForm && <Subscription />}
    </footer>
  );
};

export default Footer;
