import React from "react";
import { motion } from "framer-motion";
import "./Mission.css";

const OurMission = () => {
  return (
    <motion.div 
      className="mission-container"
      initial={{ opacity: 0, y: 40 }} // Reduced distance
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} // Trigger animation earlier
      transition={{ 
        duration: 0.7, 
        ease: [0.33, 1, 0.68, 1] // Improved easing
      }}
      style={{ willChange: "opacity, transform" }} // Performance hint
    >
      <motion.h2 
        className="mission-title"
        initial={{ opacity: 0, x: -40 }} // Reduced distance
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.7, 
          delay: 0.1, 
          ease: [0.33, 1, 0.68, 1] // Improved easing
        }}
        style={{ willChange: "opacity, transform" }} // Performance hint
      >
        Our Mission
      </motion.h2>
      <motion.p 
        className="mission-text"
        initial={{ opacity: 0, x: 40 }} // Reduced distance
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.7, 
          delay: 0.2, 
          ease: [0.33, 1, 0.68, 1] // Improved easing
        }}
        style={{ willChange: "opacity, transform" }} // Performance hint
      >
        Our mission is to continually enhance our customer service by tailoring a broad range of services to meet your unique business needs. We are dedicated to providing innovative, cost-effective, and sustainable logistics solutions that support your ongoing success.
      </motion.p>
    </motion.div>
  );
};

export default OurMission;
