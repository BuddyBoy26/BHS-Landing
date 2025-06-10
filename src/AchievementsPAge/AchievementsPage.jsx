import { useEffect, useState } from "react";
import { FaMicrophone } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import "./AchievementsPage.css";
import Card from "./Card";
import Podcast from "./Podcast";
import Instagram from "./Instagram"; // Import Instagram component
import HeroSection from "../Hero-section/HeroSection";

function WritingText({ text, speed = 50 }) {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (text !== displayText.substring(0, Math.min(text.length, displayText.length))) {
      setDisplayText("");
      setIndex(0);
      return;
    }
    
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed, displayText]);

  return <div className="typing-container">{displayText}</div>;
}

const awards = [
  { year: 2023, title: "Best Achievement ever", description: "Lorem ipsum dolor sit amet...", image: "https://t4.ftcdn.net/jpg/04/77/57/91/360_F_477579110_UYfszsPok6yX8Oc4RanWzwkNlm9V4WiX.jpg" },
  { year: 2023, title: "Outstanding Contribution", description: "Lorem ipsum dolor sit amet...", image: "https://t4.ftcdn.net/jpg/04/77/57/91/360_F_477579110_UYfszsPok6yX8Oc4RanWzwkNlm9V4WiX.jpg" },
  { year: 2023, title: "Outstanding Contribution", description: "Lorem ipsum dolor sit amet.jehfkjgbdrfjkcgbdrkjfgdekjf..", image: "https://t4.ftcdn.net/jpg/04/77/57/91/360_F_477579110_UYfszsPok6yX8Oc4RanWzwkNlm9V4WiX.jpg" }
];

const certificates = [
  { year: 2023, title: "Certificate for Excellence", description: "Lorem ipsum dolor sit amet...", image: "https://t4.ftcdn.net/jpg/04/77/57/91/360_F_477579110_UYfszsPok6yX8Oc4RanWzwkNlm9V4WiX.jpg" },
  { year: 2023, title: "Industry Leader Certificate", description: "Lorem ipsum dolor sit amet...", image: "https://t4.ftcdn.net/jpg/04/77/57/91/360_F_477579110_UYfszsPok6yX8Oc4RanWzwkNlm9V4WiX.jpg" },
  { year: 2023, title: "Outstanding Contribution", description: "Lorem ipsum dolor sit amet...", image: "https://t4.ftcdn.net/jpg/04/77/57/91/360_F_477579110_UYfszsPok6yX8Oc4RanWzwkNlm9V4WiX.jpg" }
];

const podcasts = [
  { title: "How to do stuff", url: "https://youtu.be/cBsHFf5VGOw?feature=shared" },
  { title: "Leadership Talks", url: "https://youtu.be/cBsHFf5VGOw?feature=shared" }
];

const instagrams = [
  { 
    title: "Instagram Reel 1", 
    url: "https://www.instagram.com/reel/C9WCbesNxJR/?igsh=MTYzaDhnNGtqdHd6dQ==" // Remove /embed/ suffix
  },
  { 
    title: "Instagram Reel 2", 
    url: "https://www.instagram.com/reel/C9WCbesNxJR/?igsh=MTYzaDhnNGtqdHd6dQ==" // Remove /embed/ suffix
  }
];

export default function AchievementsPage() {
  const location = useLocation();
  
  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
    
    return () => clearTimeout(scrollTimeout);
  }, [location]);

  return (
    <div className="achievements-page">
      <HeroSection 
        intro="ACHIEVEMENTS & MEDIA"
        headingText="Our Recognition & Impact" 
        paragraph="Celebrating a Legacy of Excellence: A Showcase of Prestigious Achievements, Recognized Certifications, and Impactful Podcasts That Inspire, Motivate, and Shape the Future." 
        imageUrl="/images/achievements_hero.jpg"
        smallIntro={true} // Enable small intro size for this page
      />

      <div className="log-container">
        <section className="achievements-section">
          <h3 className="sub-heading1">Achievements</h3>
          <div className="log-grid-container">
            {awards.map((award, idx) => (
              <Card key={idx} title={award.title} year={award.year} image={award.image} description={award.description} />
            ))}
          </div>
        </section>

        <section className="certificates-section">
          <h3 className="sub-heading1">Certificates</h3>
          <div className="log-grid-container">
            {certificates.map((certificate, idx) => (
              <Card key={idx} title={certificate.title} year={certificate.year} image={certificate.image} description={certificate.description} />
            ))}
          </div>
        </section>

        <section className="podcasts-section">
          <h3 className="sub-heading1">Podcasts</h3>
          <div className="podcast-container">
            {podcasts.map((podcast, idx) => (
              <Podcast key={idx} url={podcast.url} name={podcast.title} />
            ))}
          </div>
        </section>

        <section className="instagram-section">
          <h3 className="sub-heading1">Instagram</h3>
          <div className="instagram-container">
            {instagrams.map((instagram, idx) => (
              <Instagram key={idx} url={instagram.url} name={instagram.title} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}