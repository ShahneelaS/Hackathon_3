
'use client';  

import React, { useState, useEffect } from "react";
import CoverPage from "./components/CoverPage";  
import Navbar from "./components/Navbar";        
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import NewCeramics from "./components/NewCeramics";
import PopularProducts from "./components/PopularProducts";
import JoinTheClub from "./components/JoinTheClub";
import StudioToGlobal from "./components/StudioToGlobal";
import Footer from "./components/Footer";


export default function Page() {
  const [isCoverPageVisible, setIsCoverPageVisible] = useState(true);

  // Switch to landing page after a timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCoverPageVisible(false); // Hide Cover Page after 3 seconds
    }, 3000); 

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {isCoverPageVisible ? (
        <CoverPage /> // Show Cover Page first
      ) : (
        <div>
          {/* Render the Landing Page components after Cover Page disappears */}
          <Navbar />
          <HeroSection />
          <FeatureSection />
          <NewCeramics />
          <PopularProducts />
          <JoinTheClub />
          <StudioToGlobal />
          <Footer />
        </div>
      )}
    </div>
  );
}
