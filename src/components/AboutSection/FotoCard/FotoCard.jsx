import React, { useEffect } from 'react';
import './FotoCard.scss';

// import foto from '/foto/foto1.svg';

function FotoCard({ numberOfComponents, rotateClass, image }) {


  return (
    <div className={`foto-card ${numberOfComponents > 1 ? rotateClass : ''}`}>
      <div className="foto-card__content">
        <img className="foto-card__img" src={`/foto${image}`} alt="foto" />
      </div>
    </div>
  );
}

export default FotoCard;
