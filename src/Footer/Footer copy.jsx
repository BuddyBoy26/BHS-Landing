import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = ({
  companyName = "Bhavya Haulage Services",
  quickLinks = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
    { name: "Why Us?", url: "/whyus" },
    { name: "Services", url: "/services" },
    { name: "Contact Us", url: "/contact-us" },
    { name: "Achievements", url: "/achievements" },
  ],
  servicesList = [
    "Trucking solution",
    "Bonded Movements",
    "Consultancy services",
    "Project Cargo",
    "Haulage services",
    "Consultancy for DC setup and storage services",
  ],
  socialLinks = [
    { name: "Instagram", url: "https://instagram.com", icon: faInstagram, className: "instagram" },
    { name: "Facebook", url: "https://facebook.com", icon: faFacebook, className: "facebook" },
    { name: "WhatsApp", url: "https://whatsapp.com", icon: faWhatsapp, className: "whatsapp" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: faLinkedin, className: "linkedin" },
    { name: "YouTube", url: "https://youtube.com", icon: faYoutube, className: "youtube" },
  ]
}) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-box">
        <div className="footercontent">
          <div className="footer-section company-section">

            <div className="contact-info contact-info-mobile">
              <h3>Contact Us</h3>
              <p>info@COMPANY_NAME.co</p>
              <p>+123 456 7890</p>
            </div>
          </div>
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
    </footer>
  );
};

Footer.propTypes = {
  companyName: PropTypes.string,
  quickLinks: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string
  })),
  servicesList: PropTypes.arrayOf(PropTypes.string),
  socialLinks: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
    icon: PropTypes.object,
    className: PropTypes.string
  }))
};

export default Footer;
