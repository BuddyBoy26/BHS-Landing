import FadeInWhenVisible from './FadeInWhenVisible';
import { FiTruck } from 'react-icons/fi';
import { GrDocumentText } from 'react-icons/gr';
import { GiPadlock } from 'react-icons/gi';
import { HiClipboardCopy } from 'react-icons/hi';
import { IoGlobeOutline } from 'react-icons/io5';
import { GiCrane } from 'react-icons/gi';
import { motion } from 'framer-motion';
import './OurServices.css';
import { Link } from 'react-router-dom';

const OurServices = () => {
  const linkCards = [
    { 
      href: "/",
      title: "Integrated Trucking Solution",
      description: "Experience seamless transportation with our integrated trucking solutions, designed to optimize fleet management and delivery schedules. Our comprehensive service ensures your cargo is transported safely and efficiently across all routes.",
      icon: <FiTruck />,
      id: 1
    },
    { 
      href: "/",
      title: "Importer Exporter Records",
      description: "Rely on our certified Importer/Exporter on Records service to navigate complex international trade regulations with ease. We manage all compliance requirements, ensuring smooth and secure market entry for your goods.",
      icon: <GrDocumentText />,
      id: 2
    },
    { 
      href: "/",
      title: "Bonded Movements",
      description: "Our bonded movement services keep your cargo under secure customs control from origin to destination. Benefit from streamlined processes that delay duty payments until your goods are cleared, optimizing cash flow and efficiency.",
      icon: <GiPadlock />,
      id: 3
    },
    { 
      href: "/",
      title: "Shipping Documents",
      description: "We prepare all essential shipping documents precisely, from bills of lading to compliance certificates, ensuring hassle-free transit across borders. Trust our expertise to maintain the integrity of your paperwork, keeping your shipments on track.",
      icon: <HiClipboardCopy />,
      id: 4
    },
    { 
      href: "/",
      title: "Border Clearances",
      description:"Our border clearance solutions simplify the complexities of cross-border logistics by efficiently managing inspections and documentation. We work diligently to expedite clearance, reducing delays and ensuring timely delivery.",
      icon: <IoGlobeOutline />,
      id: 5
    },
    { 
      href: "/",
      title: "Project Cargo Movements",
      description: "For challenging project cargo, our tailored logistics solutions handle oversized, heavy, or sensitive shipments with specialized care. Count on our expertise to plan and execute complex transport projects on time and within budget.",
      icon: <GiCrane />,
      id: 6
    }
  ];

  return (
    <div className='our-services-section'>
      <FadeInWhenVisible children={  
        <div className='our-services-heading' style={{ position: 'relative', overflow: 'hidden' }}>
          <h2>Our Services</h2>
        </div>
      }
      />

      <div 
        className='our-services-card-container' 
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 60 }, // Reduced distance
            visible: { opacity: 1, y: 0 }
          }}

          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }} // Added margin for earlier animation
          transition={{ 
            duration: 0.6, 
            delay: 0.15, 
            ease: [0.33, 1, 0.68, 1] // Improved easing
          }}
        >
          {linkCards.map((linkCard, index) => (
            <Link 
              to={ linkCard.href } 
              className='link-card' 
              key={ index }
              style={{ 
                willChange: 'transform, box-shadow',
                transition: 'all 0.4s cubic-bezier(0.33, 1, 0.68, 1)'
              }}
            >
              <p className="link-card-icon">
                {linkCard.icon}
              </p>
              <p>{ linkCard.title }</p>
              {/* <p>{ linkCard.description }</p> */}
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OurServices;
