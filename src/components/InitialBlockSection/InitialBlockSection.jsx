import React from 'react';

import "./InitialBlockSection.scss"

import InitialBlockIcon from '/InitialBlockIcon.svg';

function InitialBlockSection({translations}) {
  return (
    <div className="initial-block" data-aos="fade-up" data-aos-duration="1000">
      <div className="initial-block__text-content">
        <h1 className="initial-block__title">{translations.initialTitle}</h1>
        <p className="initial-block__text">
          {translations.initialText}
        </p>
        <button className="initial-block__button">{translations.initialButtonText}</button>
      </div>
      <div className='initial-block__image-contaiter' >
        <img className="initial-block__image" src={InitialBlockIcon} alt="initial-block-icon" />
      </div>
    </div>
  );
}

export default InitialBlockSection;
