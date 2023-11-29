import React, { useContext } from 'react';
import './BigFotoCatd.scss';

import foto from '/foto/foto_1.png';
import { LangContext } from '../../../App';

function BigFotoCatd() {

  const translations = useContext(LangContext)

  return (
    <div className="big-foto-card" data-aos="fade-up" data-aos-duration="2000">
      <div className="big-foto-card__content">
        <img src={foto} alt="foto" />
      </div>
      <span className="big-foto-card__text">{translations.abbrevioInImage}</span>
    </div>
  );
}

export default BigFotoCatd;
