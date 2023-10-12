// ScrollToTopButton.jsx
import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.scss';
import arrow from '../../assets/svg/arrow.svg';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button onClick={scrollToTop}>
          <img src={arrow} className="scroll-arrow" alt="arrow" />
        </button>
      )}
    </div>
  );
}

export default ScrollToTopButton;
