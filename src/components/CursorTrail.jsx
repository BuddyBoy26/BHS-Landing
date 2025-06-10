import React, { useEffect, useRef } from "react";
import "./CursorTrail.css";

const CursorTrail = () => {
  const cursorRef = useRef(null);
  const innerCircleRef = useRef(null);
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    innerX: 0,
    innerY: 0
  });
  
  useEffect(() => {
    let previousTime = 0;
    let animationFrameId = null;
    
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      
      // Using transform instead of left/top for better performance
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`;
        cursorRef.current.style.willChange = 'transform';
      }
      
      // Store mouse position
      positionRef.current.mouseX = clientX;
      positionRef.current.mouseY = clientY;
    };
    
    const animateInnerCircle = (time) => {
      if (previousTime !== 0) {
        const deltaTime = Math.min(time - previousTime, 20) / 16;
        
        // Increased easing factor for smoother trailing
        const ease = 0.25 * deltaTime;
        
        // Calculate new inner circle position with reduced trailing
        positionRef.current.innerX += (positionRef.current.mouseX - positionRef.current.innerX) * ease;
        positionRef.current.innerY += (positionRef.current.mouseY - positionRef.current.innerY) * ease;
        
        // Apply the position to the inner circle using transform for better performance
        if (innerCircleRef.current) {
          innerCircleRef.current.style.transform = `translate(${positionRef.current.innerX}px, ${positionRef.current.innerY}px)`;
          innerCircleRef.current.style.willChange = 'transform';
        }
      } else {
        // Initialize inner position on first frame
        positionRef.current.innerX = positionRef.current.mouseX;
        positionRef.current.innerY = positionRef.current.mouseY;
      }
      
      previousTime = time;
      animationFrameId = requestAnimationFrame(animateInnerCircle);
    };
    
    // Hide default cursor
    document.body.style.cursor = "none";
    
    // Set up event listeners
    window.addEventListener("mousemove", handleMouseMove);
    
    // Start animation loop
    animationFrameId = requestAnimationFrame(animateInnerCircle);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.style.cursor = "auto";
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="cursor-trail-container">
      <div ref={cursorRef} className="cursor-follower" />
      <div ref={innerCircleRef} className="inner-circle" />
    </div>
  );
};

export default CursorTrail;
