import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./OurServices.css";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from "../Hero-section/HeroSection";

const services = [
  { 
    id: "trucking", // Updated to match footer link
    title: "Integrated Trucking Solution", 
    description: "Comprehensive trucking solutions tailored to meet your logistics needs, ensuring seamless cargo movement across regions.", 
    icon: "🚛" 
  },
  { 
    id: "bonded", // Updated to match footer link
    title: "Bonded Movements", 
    description: "Efficient bonded movements with door-to-door services, including border clearance and multiple pickup/drop-off points.", 
    icon: "📦" 
  },
  { 
    id: "project-cargo", // Updated to match footer link
    title: "Project Cargo Movements", 
    description: "Specialized in handling Out Of Gauge (OOG) cargo with door-to-door services, convoy movements, and safety approvals.", 
    icon: "🚚" 
  },
  { 
    id: "records", // Updated to match footer link
    title: "Importer Exporter Records", 
    description: "Expertise in managing importer/exporter records to streamline your logistics and compliance processes.", 
    icon: "📑" 
  },
  { 
    id: "clearances", // Updated to match footer link
    title: "Border Clearances", 
    description: "Hassle-free border clearance services to ensure smooth and timely cargo movement across borders.", 
    icon: "🛃" 
  },
  { 
    id: "documents", // Updated to match footer link
    title: "Shipping Documents", 
    description: "Accurate and efficient management of shipping documents ensuring compliance and timely delivery.", 
    icon: "📜" 
  },
];

function OurServices() {
  const location = useLocation();
  const isFirstRender = useRef(true);
  const previousPathRef = useRef(null);
  
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with duration and trigger once

    // Handle hash navigation for scrolling to specific service sections
    const scrollToSection = () => {
      if (location.hash) {
        const targetId = location.hash.substring(1); // Remove the # character
        
        // Determine if this is an internal navigation or external navigation
        // Internal navigation = the path hasn't changed, only the hash changed
        // or if this is the initial page load directly to a hash
        const isInternalNavigation = 
          (!previousPathRef.current && isFirstRender.current) || // First load with hash
          (previousPathRef.current === location.pathname); // Path hasn't changed
        
        // Set different delays based on navigation type
        const scrollDelay = isInternalNavigation ? 0 : 2000; // No delay for internal navigation
        
        setTimeout(() => {
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            // Get the top position of the element relative to the viewport
            const elementRect = targetElement.getBoundingClientRect();
            // Get the current scroll position
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            // Calculate the absolute position of the element on the page
            const absoluteElementTop = scrollTop + elementRect.top;
            
            // Scroll to the element with an offset (adjust this value as needed)
            window.scrollTo({
              top: absoluteElementTop - 150, // Adjusted offset to ensure the element is properly in view
              behavior: 'smooth'
            });
            
            // Add a temporary highlight effect to the target element
            targetElement.classList.add('highlight-service');
            setTimeout(() => {
              targetElement.classList.remove('highlight-service');
            }, 2500);
          }
        }, scrollDelay);
      }
    };
    
    // Execute scroll on initial load and when hash changes
    scrollToSection();
    
    // Update refs for next render
    previousPathRef.current = location.pathname;
    if (isFirstRender.current) {
      isFirstRender.current = false;
    }
    
    const handleScrollAnimation = () => {
      const serviceBoxes = document.querySelectorAll(".service-box");
      serviceBoxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 150; // Increased trigger point for smoother transition
        
        // Set willChange before animation starts
        if (boxTop < triggerPoint + 100) {
          box.style.willChange = 'opacity, transform';
        }
        
        if (boxTop < triggerPoint) {
          box.classList.add("visible");
          // Reset willChange after animation completes
          setTimeout(() => {
            box.style.willChange = 'auto';
          }, 1000);
        }
      });
    };

    // Use a throttled scroll handler for better performance
    let ticking = false;
    const throttledScrollHandler = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScrollAnimation();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScrollHandler, { passive: true });
    handleScrollAnimation(); // Trigger on load in case some boxes are already in view

    return () => window.removeEventListener("scroll", throttledScrollHandler);
  }, [location]); // Add location as a dependency to re-run when hash changes

  return (
    <div className="services-page">
      <HeroSection 
        intro="OUR SERVICES" // Added extra space between OUR and SERVICES
        headingText="Empowering Your Logistics Journey" 
        paragraph="Explore our specialized logistics services designed to streamline your operations and ensure efficient cargo movement." 
        imageUrl="/images/our_services_hero.jpg"
      />
      <div className="services-grid medium-overlay">
        {services.map((service) => (
          <div key={service.id} id={service.id} className="service-box" data-aos="fade-up">
            <div className="service-icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurServices;


