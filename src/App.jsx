import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar/Navbar";
import Home from './Home/Home';
import Aboutus from "./About Us/about";
import WhyUs from "./Why us/WhyUs";
import OurServices from "./OurServices/OurServices";
import Footer from "./Footer/Footer";
import ContactUs from "./ContactUs/ContactUs";
import ScrollToTop from "./ScrollToTop";
import Achievements from "./AchievementsPAge/AchievementsPage";
import Preloader from './components/Preloader/Preloader';
import HomePage from './HomePage/HomePage';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [contentReady, setContentReady] = useState(false);
  const [renderContent, setRenderContent] = useState(false);
  const [key, setKey] = useState(0);

  // Handle preloader completion
  const handlePreloaderComplete = (readyToRender) => {
    if (readyToRender) {
      // Increment key to force re-renders
      setKey(prevKey => prevKey + 1);
      
      // Mark content as ready immediately
      setContentReady(true);
      
      // Start rendering content immediately but keep preloader visible
      setRenderContent(true);
      
      // Small delay before hiding preloader to ensure content is ready
      setTimeout(() => {
        setIsLoading(false);
      }, 150); // Short delay to allow content to initialize
    }
  };

  // Preload any critical assets
  useEffect(() => {
    // Allow components to initialize before animations
    if (contentReady) {
      document.body.classList.add('content-loaded');
    }
    
    return () => {
      document.body.classList.remove('content-loaded');
    };
  }, [contentReady]);

  return (
    <div className="app">
      {/* Preloader is shown when isLoading is true */}
      {isLoading && (
        <Preloader onComplete={handlePreloaderComplete} />
      )}

      {/* Content is prepared in background when contentReady but still showing loader */}
      <div className={`content-container ${!isLoading ? 'visible' : 'hidden'}`}>
        <Router>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {renderContent && (
                <Routes>
                  <Route path="/" element={
                    <>
                      <HomePage key={`homepage-${key}`} />
                      <Home animationTrigger={renderContent} key={`home-${key}`} />
                    </>
                  } />
                  <Route path="/services" element={<OurServices />} />
                  <Route path="/about" element={<Aboutus />} />
                  <Route path="/why-us" element={<WhyUs />} />
                  <Route path="/contact-us" element={<ContactUs />} />
                  <Route path="/achievements" element={<Achievements />} />
                </Routes>
              )}
            </main>
            <Footer />
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
