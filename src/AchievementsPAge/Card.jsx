import React, { useState } from "react";
import { FaTrophy } from "react-icons/fa";
import "./Card.css"; 

const Card = ({ title, year, image, description }) => {
  const [isEnlarged, setIsEnlarged] = useState(false);

  const toggleImageSize = (e) => {
    e.stopPropagation();
    setIsEnlarged(!isEnlarged);
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">{title}</h2>
        <span className="card-year">{year}</span>
      </div>
      <div className="card-image-container">
        <img 
          src={image} 
          alt={title} 
          className={`card-image ${isEnlarged ? 'enlarged' : ''}`} 
          onClick={toggleImageSize}
        />
      </div>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;