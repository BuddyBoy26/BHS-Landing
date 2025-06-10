import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./ScrollToTopStyles.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top instantly with no animation
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto' // Force instant scrolling with no animation
    });
    
    // Add a class to indicate first load
    document.body.classList.add('no-animation');
    
    // Remove the class after the page has loaded (small delay to ensure everything is rendered)
    const timer = setTimeout(() => {
      document.body.classList.remove('no-animation');
    }, 100);
    
    return () => clearTimeout(timer);
  }, [pathname]);

  // Handle refresh case
  useEffect(() => {
    // Check if page was refreshed
    const handlePageLoad = () => {
      // Scroll to top instantly with no animation
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto' // Force instant scrolling with no animation
      });
      document.body.classList.add('no-animation');
    };

    // Add event listener for when the page is fully loaded
    window.addEventListener('load', handlePageLoad);
    
    // Initial call for first render
    handlePageLoad();
    
    return () => {
      window.removeEventListener('load', handlePageLoad);
    };
  }, []);

  return null;
}

export default ScrollToTop;
