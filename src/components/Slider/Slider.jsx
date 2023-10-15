import React, { useState, useEffect } from 'react';
import { TransitionGroup } from 'react-transition-group';
import './Slider.scss';
import SliderItem from '../SliderItem/SliderItem';
import arrowIcon from '/arrow.svg';

function Sliders({ images }) {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      moveRight();
    }, 6000);

    return () => clearInterval(interval);
  }, [active]);

  const generateItems = () => {
    const renderedItems = [];
    for (let i = active - 2; i < active + 3; i++) {
      let index = i;
      if (i < 0) {
        index = images.length + i;
      } else if (i >= images.length) {
        index = i % images.length;
      }
      const level = active - i;
      renderedItems.push(
        <SliderItem key={index} id={images[index]} level={level} />,
      );
    }
    return renderedItems;
  };

  const moveLeft = () => {
    const newActive = active - 1 < 0 ? images.length - 1 : active - 1;
    setActive(newActive);
    setDirection('left');
  };

  const moveRight = () => {
    const newActive = (active + 1) % images.length;
    setActive(newActive);
    setDirection('right');
  };

  const handleDotClick = (index) => {
    setActive(index);
    setDirection(index > active ? 'right' : 'left');
  };

  const renderDots = () => {
    return images.map((_, index) => (
      <span
        key={index}
        className={`dot ${index === active ? 'active' : ''}`}
        onClick={() => handleDotClick(index)}
      />
    ));
  };

  return (
    <div className="slider" data-aos="fade-up" data-aos-duration="2000">
      <div className="arrow arrow-left" onClick={moveLeft}>
        <p className="fi-arrow-left">
          <img src={arrowIcon} alt="arrow-icon" />
        </p>
      </div>
      <TransitionGroup
        className="slider__img-content"
        childFactory={(child) =>
          React.cloneElement(child, {
            classNames: direction,
          })
        }
      >
        {generateItems()}
      </TransitionGroup>
      <div className="arrow arrow-right" onClick={moveRight}>
        <p className="fi-arrow-right">
          <img src={arrowIcon} alt="arrow-icon" />
        </p>
      </div>
      <div className="dots">{renderDots()}</div>
    </div>
  );
}

export default Sliders;
