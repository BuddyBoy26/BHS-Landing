import React, { useState, useEffect, useRef } from 'react';
import './Preloader.css';

const Preloader = ({ onComplete, forceShow = false }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const preloaderRef = useRef(null);
  
  // Reset preloader when forceShow changes to true
  useEffect(() => {
    if (forceShow) {
      setLoading(true);
      setProgress(0);
      setFadeOut(false);
      startLoading();
    }
  }, [forceShow]);
  
  // Animation and loading sequence
  const startLoading = () => {
    // Handle progressive loading
    const progressInterval = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = prevProgress + 1;
        return newProgress <= 100 ? newProgress : 100;
      });
    }, 20);

    const mainTimer = setTimeout(() => {
      clearInterval(progressInterval);
      setProgress(100);
      
      // Start fade out animation
      setFadeOut(true);
      
      // Ensure animation completes before unmounting
      const transitionDuration = 800; // Match with CSS
      
      setTimeout(() => {
        // Signal parent component to prepare for re-rendering the home page
        if (onComplete) onComplete(true); // Pass true to indicate ready for re-render
        
        // Give extra time before unmounting to ensure animations complete
        setTimeout(() => {
          setLoading(false);
        }, 200);
      }, transitionDuration);
    }, 2000);
    
    return { progressInterval, mainTimer };
  };
  
  // Initial loading sequence
  useEffect(() => {
    const { progressInterval, mainTimer } = startLoading();
    
    return () => {
      clearTimeout(mainTimer);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  // Force reflow for smooth animation
  useEffect(() => {
    if (fadeOut && preloaderRef.current) {
      void preloaderRef.current.offsetHeight;
    }
  }, [fadeOut]);

  // Control visibility with CSS instead of unmounting
  if (!loading && !forceShow) return null;

  return (
    <div 
      ref={preloaderRef}
      className={`preloader ${fadeOut ? 'fade-out' : ''} ${forceShow ? 'force-show' : ''}`}
    >
      <div className="logo-container">
        <div className="logo-animation">
          <span className="logo-letter l-1">L</span>
          <span className="logo-letter l-2">O</span>
          <span className="logo-letter l-3">G</span>
          <span className="logo-letter l-4">I</span>
          <span className="logo-letter l-5">C</span>
          <span className="logo-letter l-6">I</span>
          <span className="logo-letter l-7">T</span>
          <span className="logo-letter l-8">Y</span>
        </div>
      </div>
      
      <div className="loader">
        <div className="circle c1"></div>
        <div className="circle c2"></div>
        <div className="circle c3"></div>
        <div className="circle c4"></div>
      </div>
      
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        <div className="progress-text">{progress}%</div>
      </div>
    </div>
  );
};

export default Preloader;
