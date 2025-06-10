import './Reviews.css';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { IconContext } from 'react-icons';

const Reviews = () => {
  const reviews = [
    {
      name: 'name 1',
      testimonial: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repellendus cum id voluptate voluptatum dolores mollitia nobis blanditiis, sapiente, tempora optio officiis eum eaque, totam vero atque illo eveniet ut.'
    },
    {
      name: 'name 2',
      testimonial: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repellendus cum id voluptate voluptatum dolores mollitia nobis blanditiis, sapiente, tempora optio officiis eum eaque, totam vero atque illo eveniet ut.'
    },
    {
      name: 'name 3',
      testimonial: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repellendus cum id voluptate voluptatum dolores mollitia nobis blanditiis, sapiente, tempora optio officiis eum eaque, totam vero atque illo eveniet ut.'
    },
    {
      name: 'name 4',
      testimonial: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repellendus cum id voluptate voluptatum dolores mollitia nobis blanditiis, sapiente, tempora optio officiis eum eaque, totam vero atque illo eveniet ut.'
    },
    {
      name: 'name 5',
      testimonial: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repellendus cum id voluptate voluptatum dolores mollitia nobis blanditiis, sapiente, tempora optio officiis eum eaque, totam vero atque illo eveniet ut.'
    },
    {
      name: 'name 6',
      testimonial: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repellendus cum id voluptate voluptatum dolores mollitia nobis blanditiis, sapiente, tempora optio officiis eum eaque, totam vero atque illo eveniet ut.'
    }
  ];

  const [currIndex, setCurrIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeoutID = null;
  
  useEffect(() => {
    timeoutID = setTimeout(() => {
      goToNext();
    }, 5000);
  }, [autoPlay]);
    

  const goToPrevious = () => {
    const firstIndex = currIndex === 0;
    const newIndex = firstIndex ? 5 : currIndex - 1;

    setCurrIndex(newIndex);
    clearTimeout(timeoutID);
    setAutoPlay(!autoPlay);
  }

  const goToNext = () => {
    const lastIndex = currIndex === 5;
    const newIndex = lastIndex ? 0 : currIndex + 1;

    setCurrIndex(newIndex);
    clearTimeout(timeoutID);
    setAutoPlay(!autoPlay);
  }

  return (
    <div className="reviews-section">
      <h2 className="reviews-heading">
        What Our Clients Say
      </h2>

      <div className="reviews-slider">
        <div className="arrow-button" id="left-arrow-button" onClick={ goToPrevious }>
          <IconContext.Provider value={{ className: "arrow-button" }}>
            <FaArrowAltCircleLeft />
          </IconContext.Provider>
        </div>

        <div className="reviews-container">
          { reviews.map((review, index) => (
            <div 
              className="reviews-card" 
              id="review-1" 
              key={ index }
              style={{ translate: `${-100 * currIndex}%`}}
            >
              <div className="review-name">
                { review.name }
              </div>

              <div className="review-testimonial">
                { review.testimonial }
              </div>
            </div>
          ))}
        </div>

        <div className="arrow-button" id="right-arrow-button" onClick={ goToNext }>
          <IconContext.Provider value={{ className: "arrow-button" }}>
            <FaArrowAltCircleRight />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}
 
export default Reviews;
