import React, { useState } from 'react';
import './Slider.scss';

function Sliders({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };
  return (
    <div className="slider">
      <div className="slider__content">
        <div className="slider__img-content">
          <img
            className="slider__image"
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex}`}
          />
        </div>
        <button className="slider__button slider__button-left" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="slider__button slider__button-right" onClick={nextSlide}>
          &#10095;
        </button>
        <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentImageIndex ? 'dot active' : 'dot'}
            onClick={() => setCurrentImageIndex(index)}
          ></span>
        ))}
      </div>
      </div>
      
    </div>
  );
}

export default Sliders;
