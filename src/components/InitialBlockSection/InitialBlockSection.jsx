import React from 'react';

import './InitialBlockSection.scss';

import InitialBlockIcon from '/InitialBlockIcon.svg';

function InitialBlockSection({ translations }) {
  return (
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
