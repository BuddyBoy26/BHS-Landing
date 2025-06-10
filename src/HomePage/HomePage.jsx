import React, { useEffect, useRef } from 'react';
// ...existing imports...

const HomePage = ({ animationTrigger }) => {
  const heroSectionRef = useRef(null);
  const featuresSectionRef = useRef(null);
  // Add refs for any other sections with animations
  
  // Reset and trigger animations when animationTrigger changes
  useEffect(() => {
    if (animationTrigger) {
      // Reset and restart all animations
      resetAllAnimations();
    }
  }, [animationTrigger]);
  
  const resetAllAnimations = () => {
    // Remove and reapply animation classes to force them to replay
    if (heroSectionRef.current) {
      const elements = heroSectionRef.current.querySelectorAll('.animated-element');
      elements.forEach(el => {
        el.classList.remove('animated');
        // Force reflow
        void el.offsetWidth;
        el.classList.add('animated');
      });
    }
    
    // Do the same for other sections
    if (featuresSectionRef.current) {
      // ...similar code for features section
    }
    
    // You can also use this approach for direct style manipulation:
    document.querySelectorAll('.fade-in-animation').forEach(el => {
      el.style.animation = 'none';
      void el.offsetWidth;
      el.style.animation = null;
    });
  };

  return (
    <div className="home-page">
      <section ref={heroSectionRef} className="hero-section">
        {/* Your hero section content with animations */}
        <div className="animated-element">
          {/* This element will have its animations reset */}
        </div>
      </section>
      
      <section ref={featuresSectionRef} className="features-section">
        {/* Your features section content */}
      </section>
      
      {/* ...other sections */}
    </div>
  );
};

export default HomePage;
