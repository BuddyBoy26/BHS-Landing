import { useEffect } from "react";
import "./WhyUs.css";
import insuranceImage from "./insurance.jpg";
import costEffectiveImage from "./cost-effective.jpg";
import solutionsImage from "./tailored-solution.jpg";
import WorldImage from "./map.jpg";
import gpsImage from "./gps.jpg";
import AccountsExecutiveImage from "./account-ex.jpg";
import HeroSection from "../Hero-section/HeroSection";
import { motion } from "framer-motion";

// Feature Component with alternating color and image alignment
function Feature({ title, description, image, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.section
      className={`feature-box ${isEven ? "light-orange" : "orange"} ${
        isEven ? "reverse-layout" : ""
      }`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.5,
        delay: 0.1 * index, // Add staggered delay based on index
        ease: "easeOut" 
      }}
      style={{
        transform: "translateZ(0)",
        willChange: "opacity", // Hint to browser about what will animate
      }}
    >
      <div className="text-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="image-content">
        <img src={image} alt={title} loading="lazy" />
      </div>
    </motion.section>
  );
}

// WhyUs Component
const WhyUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "Insurance Coverage",
      description:
        "We provide Hauliers Insurance Liability coverage of up to AED 1,000,000 per truck, guaranteeing a high level of protection for your cargo throughout its journey.",
      image: insuranceImage,
    },
    {
      title: "Cost-Effective Operations",
      description:
        "Our team offers multiple shipping and logistics options designed to balance both quality and budget, ensuring that your business objectives are met in the most efficient way possible.",
      image: costEffectiveImage,
    },
    {
      title: "Tailored Solutions",
      description:
        "“One size doesn’t fit all,” which is why we analyze your specific data to create custom logistics solutions that align perfectly with your operational needs.",
      image: solutionsImage,
    },
    {
      title: "All Over GCC & Levant Region",
      description:
        "We extend our reach beyond the UAE to cover the entire GCC (KSA, Oman, Bahrain, Kuwait, Qatar) and the Levant (Jordan, Iraq, Syria, Lebanon, Egypt), providing seamless cross-border services.",
      image: WorldImage,
    },
    {
      title: "Track & Trace (GPS)",
      description:
        "All our trucks are GPS-enabled, allowing real-time tracking and timely updates from our back-office team to ensure complete visibility of your cargo’s progress.",
      image: gpsImage,
    },
    {
      title: "Dedicated Account Executives",
      description:
        "Each client is assigned a dedicated account executive who oversees every aspect of your shipments, ensuring personalized service and smooth coordination at all stages.",
      image: AccountsExecutiveImage,
    },
  ];

  return (
    <>
      <HeroSection
        intro="WHY US"
        headingText="Your Reliable Logistics Partner"
        paragraph="We provide secure, cost-effective, and tailored logistics solutions with extensive regional coverage, real-time tracking, and dedicated support."
        imageUrl="/images/why_us_hero.jpg"
      />

      <div className="why-us-container">
        {features.map((feature, index) => (
          <Feature
            key={index}
            index={index}
            title={feature.title}
            description={feature.description}
            image={feature.image}
          />
        ))}
      </div>
    </>
  );
};

export default WhyUs;
