import React from 'react';

import './InitialBlockSection.scss';

import InitialBlockIcon from '/InitialBlockIcon.svg';

function InitialBlockSection({ translations }) {
  return (
<<<<<<< HEAD
    <div className="initial-block" data-aos="fade-up" data-aos-duration="1000">
      <div className="initial-block__text-content">
        <h1 className="initial-block__title">{translations.initialTitle}</h1>
        <p className="initial-block__text">
          {translations.initialText}
        </p>
        <button className="initial-block__button">{translations.initialButtonText}</button>
=======
    <div className="initial-block">
      <div
        className="initial-block__text-content"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        {translations.initialTitle.map((initialTitle) => (
          <h1 className="initial-block__title" key={initialTitle.id}>
            {initialTitle.value}
          </h1>
        ))}
        {translations.initialText.map((initialText) => (
          <p className="initial-block__text" key={initialText.id}>
            {initialText.value}
          </p>
        ))}
        {translations.initialButtonText.map((initialButtonText) => (
          <button className="initial-block__button" key={initialButtonText.id}>
            {initialButtonText.value}
          </button>
        ))}
>>>>>>> 09452565c852723c4bcccdfc1b8b852907744434
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
