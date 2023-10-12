import React from 'react';
import './BigFotoCatd.scss';

import foto from '/foto/foto1.svg';

function BigFotoCatd() {
  return (
    <div className="big-foto-card">
      <div className="big-foto-card__content">
        <img src={foto} alt="foto" />
      </div>
      <span className="big-foto-card__text">M.Д.А.Р</span>
    </div>
  );
}

export default BigFotoCatd;
