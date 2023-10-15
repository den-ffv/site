import React from 'react';
import './AboutSection.scss';
import FotoCart from './FotoCard/FotoCard';

import icon from '/icon/icon.svg';
import BigFotoCatd from './BigFotoCatd/BigFotoCatd';

function AboutSection({ revers, mainCard, numberOfComponents }) {
  const fotoCatdComponents = [];

  for (let i = 0; i < numberOfComponents; i++) {
    fotoCatdComponents.push(
      <FotoCart
        numberOfComponents={numberOfComponents}
        rotateClass={`rotate${i}`}
        key={i}
      />,
    );
  }

  return (
    <div
      className="about-section"
      style={{ flexDirection: !revers ? 'row' : 'row-reverse' }}
    >
      {mainCard ? (
        <BigFotoCatd />
      ) : (
        <div
          className="about-section__foto-container"
          style={{ height: numberOfComponents > 1 ? 450 : 'auto' }}
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          {fotoCatdComponents}
        </div>
      )}
      <div
        className="about-section__text-content"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <img className="about-section__icon" src={icon} alt="icon" />
        <p className="about-section__text">
          Ми впевнені, що молодь - це майбутнє країни, і саме через спільні
          зусилля, креативність та наполегливість ми можемо досягти позитивних
          змін.
        </p>
      </div>
    </div>
  );
}

export default AboutSection;
