import React, { useState, useEffect } from "react";
import "./HeroSection.css";
import { motion } from "framer-motion";

function WritingText({ text, speed = 40 }) { // Increased writing speed slightly
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);
    const [completed, setCompleted] = useState(false);
  
    useEffect(() => {
      // Reset states when text changes
      setDisplayText("");
      setIndex(0);
      setCompleted(false);
    }, [text]);
  
    useEffect(() => {
      if (index < text.length) {
        const timeout = setTimeout(() => {
          // Calculate dynamic speed - slightly faster for spaces, slower for punctuation
          const currentChar = text.charAt(index);
          let adjustedSpeed = speed;
          if (currentChar === ' ') adjustedSpeed = speed * 0.7; // Faster for spaces
          if ('.,:;!?'.includes(currentChar)) adjustedSpeed = speed * 1.5; // Slower for punctuation
          
          setDisplayText((prev) => prev + currentChar);
          setIndex(index + 1);
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        setCompleted(true);
      }
    }, [index, text, speed]);
  
    return (
      <div className="typing-container0">
        <span>{displayText}</span>
        {!completed && <span className="cursor">|</span>}
      </div>
    );
}

const ZERO = ({ text, smallIntro }) => { 
  return (
    <div className={`intro-container ${smallIntro ? 'small-intro' : ''}`}>
      {text.split('').map((letter, index) => (
        <motion.span 
          style={{ 
            display: "inline-block",
            width: letter === ' ' ? '0.5em' : 'auto',
            whiteSpace: 'pre',
            willChange: "transform, opacity, text-shadow" // Performance hint
          }}
          variants={{
            hidden: { y: -60, opacity: 0 }, // Reduced distance
            visible: { 
              y: 0, 
              opacity: 1,
              textShadow: "0 0 8px rgba(255, 158, 53, 0.3)"
            },
            hover: { 
              y: -2,
              textShadow: "0 0 15px rgba(255, 158, 53, 0.5)",
              transition: { duration: 0.3, ease: [0.33, 1, 0.68, 1] } // Improved easing
            }  
          }}
          initial='hidden'
          whileInView='visible'
          whileHover="hover"
          viewport={{ once: true }}
          transition={{ 
            duration: 0.5, 
            delay: 0.08 * index, // Reduced delay between letters
            ease: [0.33, 1, 0.68, 1] // Improved easing
          }}
          key={index}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

export default function HeroSection({ 
  intro, 
  headingText, 
  paragraph, 
  imageUrl, 
  overlayType = "medium",
  smallIntro = false // New prop to toggle small intro size
}) {
  const [isShortScreen, setIsShortScreen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  // Check if screen is short on component mount and window resize
  useEffect(() => {
    const checkScreenHeight = () => {
      setIsShortScreen(window.innerHeight < 500); // Consider screens shorter than 500px as "short"
    };
    
    // Initial check
    checkScreenHeight();
    
    // Add resize listener
    window.addEventListener('resize', checkScreenHeight);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenHeight);
  }, []);

  const heroStyle = imageUrl ? {
    backgroundImage: `url(${imageUrl})`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  } : {};

  // Determine overlay class based on the prop
  const getOverlayClass = () => {
    switch(overlayType) {
      case "none": return "no-overlay";
      case "light": return "light-overlay";
      case "medium": return "medium-overlay";
      case "heavy": return "heavy-overlay";
      default: return "medium-overlay";
    }
  };

  // Shortening paragraph for very short screens
  const displayParagraph = isShortScreen && paragraph.length > 100 
    ? `${paragraph.substring(0, 100)}...` 
    : paragraph;

  return (
    <div 
      className={`hero-section0 ${imageUrl ? getOverlayClass() : "medium-overlay"}`} 
      style={heroStyle}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className={`content0 ${isShortScreen ? 'short-screen' : ''} ${isHovering ? 'hovering' : ''}`}>
        <motion.p 
          className={`intro0 ${smallIntro ? 'small-intro' : ''}`}
          whileHover={{ 
            scale: 1.01,
            textShadow: "0 0 15px rgba(255, 158, 53, 0.5)",
            transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] } // Improved easing
          }}
        >
          <ZERO text={intro} key={intro} smallIntro={smallIntro} />
        </motion.p>
        <motion.h1 
          className="heading0"
          whileHover={{ 
            textShadow: "0 2px 4px rgba(0,0,0,0.3), 0 0 12px rgba(255, 158, 53, 0.3)",
            transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] } // Improved easing
          }}
        >
          <WritingText 
            text={headingText} 
            speed={isShortScreen ? 25 : 40} // Adjusted speeds
            key={headingText} 
          />
        </motion.h1>
        <motion.div
          className="paragraph0"
          initial={{ y: isShortScreen ? 30 : 60, opacity: 0 }} // Reduced distance
          animate={{ y: 0, opacity: 1 }}
          whileHover={{ 
            textShadow: "0 0 5px rgba(255, 255, 255, 0.2)",
            transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] } // Improved easing
          }}
          transition={{ 
            duration: isShortScreen ? 0.7 : 0.9, // Reduced duration
            ease: [0.33, 1, 0.68, 1] // Improved easing
          }}
        >
          {displayParagraph}
        </motion.div>
      </div>
    </div>
  );
}
