import React from 'react';
import './BigFotoCatd.scss';

import foto from '/foto/foto_1.png';

function BigFotoCatd({translations}) {
  return (
    <div className="big-foto-card">
      <div className="big-foto-card__content">
        <img src={foto} alt="foto" />
      </div>
      <span className="big-foto-card__text">{translations.abbrevioInImage}</span>
    </div>
  );
}

export default BigFotoCatd;
