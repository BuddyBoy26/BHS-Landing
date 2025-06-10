import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import classNames from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './styling/Navbar.css';
import logo from '/images/Logo.svg'


function Navbar({
  companyName = "Bhavya Haulage Services",
  socialLinks = [
    { name: "Instagram", url: "https://instagram.com", icon: faInstagram, className: "instagram" },
    { name: "Facebook", url: "https://facebook.com", icon: faFacebook, className: "facebook" },
    { name: "WhatsApp", url: "https://whatsapp.com", icon: faWhatsapp, className: "whatsapp" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: faLinkedin, className: "linkedin" },
    { name: "YouTube", url: "https://youtube.com", icon: faYoutube, className: "youtube" },
  ]
}) {
  const currentYear = new Date().getFullYear();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  // Transform opacity based on scroll position
  const navbarOpacity = useTransform(scrollY, [0, 100], [0.5, 0.9]);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    // Toggle body scroll
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'hidden';
    }
    setIsOpen(!isOpen)
  };
  

  return (
    <motion.nav
      className={classNames("fixed top-0 left-0 w-full text-black-300 py-3 z-50 transition-all duration-300 font-mono",
          'bg-black/50 backdrop-blur-xl'
      )}
      style={{ 
        opacity: isOpen ? 1 : navbarOpacity,
        boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none'
      }}
      variants={{
        hidden: { y: -100, opacity: 0 },
        visible: { y: 0, opacity: 1 }
      }}
      initial={false}
      animate='visible'
      viewport={{ once: true }}
      transition={{ 
        duration: 0.4,
        ease: [0.33, 1, 0.68, 1]  // Improved easing curve
      }}
    >
      <div className="flex justify-between items-center px-4">
        <div className="text-xl font-semibold tracking-wide text-white">
          <Link to="/" className="hover:text-orange-100 transition-colors duration-1000 ease-in-out">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-gray-200 hover:text-yellow-400 focus:outline-none focus:text-yellow-400"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="inherit" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="inherit" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden md:flex justify-center space-x-10 text-xl font-semibold tracking-wide text-white">

          <li>
            <Link to="/" className=" relative group text-white
            hover:text-orange-400 transition-colors duration-300 ease-in-out" >

              Home

              <span
  className="absolute left-0 bottom-0 w-full h-[2px] group-hover:bg-orange-400 scale-x-0 origin-right
  group-hover:scale-x-100 group-hover:origin-left group-hover:transition-transform group-hover:duration-300 group-hover:delay-150"
></span>
    
            </Link>
          </li>


          <li>
            <Link to="/services" className="relative group hover:text-orange-400 transition-colors duration-300 ease-in-out">

              Our Services

              <span
  className="absolute left-0 bottom-0 w-full h-[2px] group-hover:bg-orange-400 scale-x-0 origin-right
  group-hover:scale-x-100 group-hover:origin-left group-hover:transition-transform group-hover:duration-300 group-hover:delay-150"
></span>

            </Link>
          </li>
          <li>

            <Link to="/why-us" className="relative group hover:text-orange-400 transition-colors duration-300 ease-in-out">

              Why Us

              <span
  className="absolute left-0 bottom-0 w-full h-[2px] group-hover:bg-orange-400 scale-x-0 origin-right
  group-hover:scale-x-100 group-hover:origin-left group-hover:transition-transform group-hover:duration-300 group-hover:delay-150"
></span>

            </Link>


          </li>


          <li>
              <Link to="/achievements" className="relative group hover:text-orange-400 transition-colors duration-300 ease-in-out">

                Achievements

                <span
  className="absolute left-0 bottom-0 w-full h-[2px] group-hover:bg-orange-400 
    scale-x-0 opacity-0 
    group-hover:scale-x-100 group-hover:opacity-100 
    group-hover:origin-left 
    group-hover:transition-transform group-hover:duration-300 group-hover:delay-150"
></span>

              </Link>
            </li>

          <li>
            <Link to="/about" className="relative group hover:text-orange-400 transition-colors duration-300 ease-in-out">

              About Us

              <span
  className="absolute left-0 bottom-0 w-full h-[2px] group-hover:bg-orange-400 
    scale-x-0 opacity-0 
    group-hover:scale-x-100 group-hover:opacity-100 
    group-hover:origin-left 
    group-hover:transition-transform group-hover:duration-300 group-hover:delay-150"
></span>

            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="relative group hover:text-orange-400 transition-colors duration-300 ease-in-out">

              Contact Us

              <span
  className="absolute left-0 bottom-0 w-full h-[2px] group-hover:bg-orange-400 
    scale-x-0 opacity-0 
    group-hover:scale-x-100 group-hover:opacity-100 
    group-hover:origin-left 
    group-hover:transition-transform group-hover:duration-300 group-hover:delay-150"
></span>


            </Link>
          </li>
        </ul>
      </div>
      {isOpen && (
        <motion.div 
          className="md:hidden max-h-screen flex flex-col scrolleff"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
        >
          <div className="navbarMobile h-screen">
          <ul className="flex flex-col justify-center items-center space-y-4 py-4 text-4xl font-semibold tracking-wide text-white">
            <li>
              <Link to="/" className="relative group hover:text-orange-400 transition-colors duration-300 ease-in-out" onClick={toggleMenu}>

                Home

                <span
                  className="absolute left-0 bottom-0 w-full h-[2px] group-hover:bg-orange-400 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-300
    group-hover:delay-150 group-hover:origin-left
    "></span>

              </Link>
            </li>

            <li>
              <Link to="/achievements" className="relative group hover:text-orange-400 transition-colors duration-300 ease-in-out" onClick={toggleMenu}>

                Achievements

                <span
                  className="absolute left-0 bottom-0 w-full h-[2px] group-hover:bg-orange-400 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-300
    group-hover:delay-150 group-hover:origin-left
    "></span>

              </Link>
            </li>

            <li>
              <Link to="/services" className="relative group hover:text-orange-400 transition-colors duration-300 ease-in-out" onClick={toggleMenu}>

                Our Services

                <span
                  className="absolute left-0 bottom-0 w-full h-[2px] group-hover:bg-orange-400 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-300
    group-hover:delay-150 group-hover:origin-left
    "></span>

              </Link>
            </li>
            <li>
              <Link to="/why-us" className="relative group hover:text-orange-400 transition-colors duration-300 ease-in-out" onClick={toggleMenu}>
                Why Us
                <span
                  className="absolute left-0 bottom-0 w-full h-[2px] group-hover:bg-orange-400 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-300
    group-hover:delay-150 group-hover:origin-left
    "></span>
              </Link> {/* Add Why Us link */}
            </li>
            <li>
              <Link to="/about" className="relative group hover:text-orange-400 transition-colors duration-300 ease-in-out" onClick={toggleMenu}>
                About Us
                <span
                  className="absolute left-0 bottom-0 w-full h-[2px] group-hover:bg-orange-400 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-300
    group-hover:delay-150 group-hover:origin-left
    "></span>
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="relative group hover:text-orange-400 transition-colors duration-300 ease-in-out" onClick={toggleMenu}>
                Contact Us
                <span
                  className="absolute left-0 bottom-0 w-full h-[2px] group-hover:bg-orange-400 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-300
    group-hover:delay-150 group-hover:origin-left
    "></span>
              </Link>
            </li>

          </ul>

          <div className="navbar-footer">
          <div className="contact-info-mobile">
              <p>Oﬃce 1420 - JAFZA 1 Tower, P.O. Box 124707 Jebel Ali Freezone, Dubai - U.A.E</p>
              <p>+971 54 402 2577</p>
              <p>info@bhavya.ae</p>
            </div>
          

          <div className="stay-connected-container-mobile">
                    <div className="social-links">

                    {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url}
                className={`social-icon ${social.className}`}
                aria-label={social.name}
              >
                <FontAwesomeIcon icon={social.icon} />
              </a>
            ))}

              </div>
          </div>

          <div className="legal-links">
          <Link to="/terms" className="legal-link">Terms of Use</Link>
          <span className="legal-separator">|</span>
          <Link to="/privacy" className="legal-link">Privacy Policy</Link>
          <span className="legal-separator">|</span>
          <Link to="/disclaimer" className="legal-link">Disclaimer</Link>
          </div>
          <div className="copyright">
          © {currentYear} {companyName}. All Rights Reserved.
        </div>
        
        
        
        </div> 
        </div> 
        {/* nav bar footer closing div above */}
         
        </motion.div>
      )}
    </motion.nav>
  )
};

export default Navbar;