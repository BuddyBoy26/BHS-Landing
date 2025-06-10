import React from "react";
import { motion } from "framer-motion";
import "./Vision.css";

const OurVision = () => {
  return (
    <motion.div 
      className="vision-container"
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
        className="vision-title"
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
        Our<br></br>Vision
      </motion.h2>
      <motion.p 
        className="vision-text"
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
        Our vision is to become the most trusted supply chain partner in the UAE and GCC by consistently delivering reliable, efficient, and innovative logistics solutions that our customers can depend on daily.
      </motion.p>
    </motion.div>
  );
};

export default OurVision;
