"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaGoogle, FaFacebook } from "react-icons/fa"; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Save user data to localStorage
    localStorage.setItem("user", JSON.stringify({ name, email, password }));

    // Redirect to Sign In page
    router.push("/signin");
  };

  // Simulated OAuth Login (Replace with real authentication)
  const handleOAuthSignIn = (provider: string) => {
    alert(`Signing in with ${provider}...`);
    // Implement OAuth logic (Google/Facebook Auth API)
    router.push("/profile"); // Redirect after successful authentication
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow flex flex-col justify-center items-center px-4 py-16">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>

          {/* Sign-Up Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Confirm your password"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center mt-4 text-sm">
            Already have an account?{" "}
            <a href="/signin" className="text-blue-500 hover:underline">
              Sign In here
            </a>
          </p>

          {/* OR Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-500 text-sm">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* OAuth Sign-In Buttons  */}
          <div className="space-y-3">
            <button
              onClick={() => handleOAuthSignIn("Google")}
              className="w-full flex items-center justify-center gap-2 bg-red-500 text-white p-2 rounded hover:bg-red-600"
            >
              <FaGoogle className="text-lg" />
              Sign up with Google
            </button>
            <button
              onClick={() => handleOAuthSignIn("Facebook")}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
              <FaFacebook className="text-lg" />
              Sign up with Facebook
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SignUpPage;
