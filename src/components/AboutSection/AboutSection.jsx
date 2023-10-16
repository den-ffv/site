import React from 'react';
import './AboutSection.scss';
import FotoCart from './FotoCard/FotoCard';
import BigFotoCatd from './BigFotoCatd/BigFotoCatd';

function AboutSection({ translations,revers, mainCard, numberOfComponents, textInComponentAbout, icon, image }) {
  const fotoCardComponents = [];

  if (image && image.length > 0){
    image.forEach((foto, index) => {
      fotoCardComponents.push(
        <FotoCart
          numberOfComponents={numberOfComponents}
          image={foto.img}
          rotateClass={`rotate${index}`}
          key={index}
        />
      );
    });
  }

  return (
    <div
      className="about-section" data-aos="fade-up" data-aos-duration="1000"
      style={{ flexDirection: !revers ? 'row' : 'row-reverse' }}
    >
<<<<<<< HEAD
      {mainCard ? <BigFotoCatd translations={translations} /> : <div className='about-section__foto-container' style={{height: numberOfComponents > 1 ? 450: 'auto'} }>{fotoCardComponents}</div>}
      <div className="about-section__text-content">
=======
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
>>>>>>> 09452565c852723c4bcccdfc1b8b852907744434
        <img className="about-section__icon" src={icon} alt="icon" />
        <p className="about-section__text">
          {textInComponentAbout}
        </p>
      </div>
    </div>
  );
}

export default AboutSection;
