import './Slideshow.css';
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

const Slideshow = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0); //index initialisé à 0
  const [currentSlide, setCurrentSlide] = useState(0); //gère le counter

  const totalSlides = slides.length;

  const prevButton = <FontAwesomeIcon icon={faChevronLeft} />;
  const nextButton = <FontAwesomeIcon icon={faChevronRight} />;

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % totalSlides)
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides)
  };

  useEffect(() => {
    setCurrentSlide(currentIndex + 1);
  }, [currentIndex]);

  return (
    <article className="slide-container">
      <div className="image-container">
          <img src={`${slides[currentIndex]}`} alt="" key={currentIndex} />
      </div>
      {totalSlides > 1 && (
        <div className="slide-infos">
          <div className="slide-buttons">
            <button className="slide-button" onClick={handlePrev}>{prevButton}</button>
            <button className="slide-button" onClick={handleNext}>{nextButton}</button>
          </div>
          <p className='slide-numbers'>{`${currentSlide}/${totalSlides}`}</p>
        </div>
      )}
    </article>
  );
};

export default Slideshow;

//dernière image clic sur next => première image
//1re image clic sur prev => dernière image
