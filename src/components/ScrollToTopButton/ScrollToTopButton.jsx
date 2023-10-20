import React, { useState, useEffect, useRef } from 'react';
import './ScrollToTopButton.scss';
import arrow from '../../assets/svg/arrow.svg';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTopButtonRef = useRef(null);

  const toggleVisibility = () => {
    const footer = document.querySelector('.footer');
    if (footer) {
      const footerPosition = footer.getBoundingClientRect();
      if (
        footerPosition.top < window.innerHeight &&
        footerPosition.bottom >= 0
      ) {
        setIsVisible(false);
        return;
      }
    }

    setIsVisible(window.pageYOffset > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 }, // Adjust the threshold as needed
    );

    if (scrollToTopButtonRef.current) {
      observer.observe(scrollToTopButtonRef.current);
    }

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      if (scrollToTopButtonRef.current) {
        observer.unobserve(scrollToTopButtonRef.current);
      }
    };
  }, []);

  return (
    <div className="scroll-to-top" ref={scrollToTopButtonRef}>
      {isVisible && (
        <button onClick={scrollToTop}>
          <img src={arrow} className="scroll-arrow" alt="arrow" />
        </button>
      )}
    </div>
  );
}

export default ScrollToTopButton;
