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
    { name: "Why Us?", url: "/why-us" },
    { name: "Services", url: "/services" },
    { name: "Contact Us", url: "/contact-us" },
    { name: "Achievements", url: "/achievements" },
  ],
  servicesList = [
    { name: "Integrated Trucking solution", id: "trucking" },
    { name: "Bonded Movements", id: "bonded" },
    { name: "Project Cargo", id: "project-cargo" },
    { name: "Importer Exporter Records", id: "records" },
    { name: "Border Clearances", id: "clearances" },
    { name: "Shipping Documents", id: "documents" },
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
            <div className="logo">
              <h2>{companyName}</h2>
            </div>
            <div className="contact-info">
              <h3>Contact Us</h3>
              <p>Oﬃce 1420 - JAFZA 1 Tower,
P.O. Box 124707 Jebel Ali Freezone,
Dubai - U.A.E
</p>
              <p>+971 54 402 2577</p>
              <p>info@bhavya.ae</p>
            </div>
          </div>
          
          <div className="footer-section links-section">
            <h3 className="footer-subheading">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.url} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-section services-section">
            <h3 className="footer-subheading">Our Services</h3>
            <ul className="footer-services">
              {servicesList.map((service, index) => (
                <li key={index} className="service-item">
                  <Link to={`/services#${service.id}`} className="footer-link">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="stay-connected-container">
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
