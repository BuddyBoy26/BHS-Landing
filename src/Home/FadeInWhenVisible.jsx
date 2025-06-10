import { useRef } from "react";
import { motion } from "framer-motion";

const FadeInWhenVisible = ({ children, transitionDuration = 0.6, delayDuration = 0 }) => {
    const ref = useRef(null);

    return (
        <motion.div
            ref={ ref }
            variants={{
                hidden: { opacity: 0, y: 60 }, // Reduced distance
                visible: { opacity: 1, y: 0 }
            }}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: "-50px" }} // Added margin for earlier animation
            transition={{ 
                duration: transitionDuration, 
                delay: delayDuration,
                ease: [0.33, 1, 0.68, 1] // Improved easing
            }}
            style={{ willChange: "opacity, transform" }} // Add will-change for better performance
        >  
            { children }
        </motion.div>
    );
}
 
export default FadeInWhenVisible;
