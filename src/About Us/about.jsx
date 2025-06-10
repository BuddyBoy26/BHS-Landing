import React from 'react';
import Vision from './vision.jsx';
import OurMission from './Mission.jsx';
import MDMessage from './MDMessage.jsx';
import HeroSection from "../Hero-section/HeroSection";
import './aboutResponsive.css';

const Aboutus = () => {
  const imageUrl = "/images/about_us.png";

  return (
    <div className="about-us-wrapper">
      <HeroSection 
          intro="ABOUT US" 
          headingText="We're in business to help you thrive" 
          paragraph="We offer a comprehensive solution for all supply chain needs, including trucking solutions, consultancy services, warehouse space, sea and air freight, and e-commerce solutions." 
          imageUrl={imageUrl}
      />
      <div className="about-us-content">
          <div className="about-us-overlay"></div>
          <div className="about-us-sections">
            <Vision/>
            <OurMission/>
            <MDMessage/> 
          </div>
      </div>
    </div>
  );
} 

export default Aboutus