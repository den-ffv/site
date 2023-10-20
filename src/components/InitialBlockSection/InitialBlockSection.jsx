import React from 'react';

import './InitialBlockSection.scss';

import InitialBlockIcon from '/InitialBlockIcon.svg';

function InitialBlockSection({ translations }) {
  const scrollToAnchor = (id) => {
    const element = document.getElementById(id);
    const headerHeight = document.querySelector('.header').offsetHeight;
    const offsetTop = element.offsetTop - headerHeight;

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div className="initial-block" data-aos="fade-up" data-aos-duration="1000">
      <div className="initial-block__text-content">
        <h1 className="initial-block__title">{translations.initialTitle}</h1>
        <p className="initial-block__text">{translations.initialText}</p>
        {translations.initialButton.map((initialButton) => (
          <a
            className="initial-block__link"
            key={initialButton.id}
            href={initialButton.href}
            onClick={(e) => {
              e.preventDefault();
              scrollToAnchor(initialButton.href.substring(1));
            }}
          >
            {initialButton.value}
          </a>
        ))}
      </div>
      <div className="initial-block__image-contaiter">
        <img
          className="initial-block__image"
          data-aos="fade-left"
          data-aos-duration="2000"
          src={InitialBlockIcon}
          alt="initial-block-icon"
        />
      </div>
    </div>
  );
}

export default InitialBlockSection;
