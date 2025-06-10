import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Home.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OurServices from './OurServices';
import OurIndustry from './OurIndustry';
import PastClients from './PastClients';
import Reviews from './Reviews';
const Home = () => {
    const ref = useRef(null);

    return (
        <div className='home-page' style={{ overflow: 'hidden'}}>
            <div ref={ ref } className="hero-sections">
                <div className="company-name-section">
                    <div className="company-text">
                        <motion.h1
                            variants={{
                                hidden: { opacity: 0, x: -100}, // Reduced distance
                                visible: { opacity: 1, x: 0 }
                            }}
                            initial='hidden'
                            animate='visible'
                            transition={{ 
                                duration: 0.6, 
                                ease: [0.33, 1, 0.68, 1] // Improved easing curve
                            }}
                        >
                            Welcome to <br /><span style={{ fontSize: '120px', fontWeight: 'bold', color: '#FF9321' }} id="bhavya">BHAVYA</span>
                            <br id="reduced-height" />
                            <span style={{ color: '#FF9321', fontSize: '50px'}} id="haulage-services">Haulage Services</span>
                        </motion.h1> 
                        <motion.p 
                            variants={{
                                hidden: { opacity: 0, x: -120 }, // Reduced distance
                                visible: { opacity: 1, x: 0 }
                            }}
                            initial='hidden'
                            animate='visible'
                            transition={{ 
                                duration: 0.6, 
                                delay: 0.15, 
                                ease: [0.33, 1, 0.68, 1] // Improved easing
                            }}
                        >
                            {/* A one stop solution to all kinds of Supply Chain requirements like - Trucking solutions, Counsultany Services, WareHouse Space, Sea and & Air freight. */}
                        </motion.p>

                        <motion.div
                            className='button'
                            variants={{
                                hidden: { opacity: 0, x: -80 }, // Reduced distance
                                visible: { opacity: 1, x: 0 }
                            }}
                            initial='hidden'
                            animate='visible'
                            viewport={{ once: true }}
                            transition={{ 
                                duration: 0.6, 
                                delay: 0.25, 
                                ease: [0.33, 1, 0.68, 1] // Improved easing
                            }}
                        >
                            <Link to='./about'>
                                Learn More 
                            </Link>
                        </motion.div>
                    </div>
                    
                    <div className='company-video'>
                        <motion.video
                            loop
                            autoPlay
                            muted
                            variants={{
                                hidden: { x: 120, opacity: 0 }, // Added opacity, reduced distance
                                visible: { x: 0, opacity: 1 }
                            }}
                            initial='hidden'
                            animate='visible'
                            transition={{ 
                                duration: 0.8, 
                                ease: [0.33, 1, 0.68, 1] // Improved easing
                            }}
                        >
                            <source src="/videos/cq-tech-movie.mp4" type="video/mp4" />
                        </motion.video>
                    </div>
                </div>
            </div>

            <OurServices />
            <OurIndustry />
            <PastClients />
            <Reviews />
        </div>
    );
};

export default Home;
