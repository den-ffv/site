import React, { useState, useEffect } from 'react';
import './Policy.scss';

function Policy({ translations }) {
  return (
    <section className="policy">
      <div className="policy__container">
        <div className="policy__title">
          <h1>{translations.policyH1}</h1>
        </div>
        <div className="policy__text">
          <div className="policy__text-item">
            <p className="main__information">{translations.policyTextMain}</p>
          </div>
          <div className="policy__text-point">
            <h2>{translations.policyH2_1}</h2>
            <p className="main__information">{translations.policyText1}</p>
          </div>
          <div className="policy__text-point">
            <h2>{translations.policyH2_2}</h2>
            <p className="main__information">{translations.policyText2}</p>
          </div>
          <div className="policy__text-point">
            <h2>{translations.policyH2_3}</h2>
            <p className="main__information">{translations.policyText3}</p>
          </div>
          <div className="policy__text-point">
            <h2>{translations.policyH2_4}</h2>
            <p className="main__information">{translations.policyText4}</p>
          </div>
          <div className="policy__text-point">
            <h2>{translations.policyH2_5}</h2>
            <p className="main__information">{translations.policyText5}</p>
          </div>
          <div className="policy__text-point">
            <h2>{translations.policyH2_6}</h2>
            <p className="main__information">{translations.policyText6}_1</p>
          </div>
          <div className="policy__text-point">
            <h2>{translations.policyH2_7}</h2>
            <p className="main__information">{translations.policyText7}</p>
          </div>
          <div className="policy__text-point">
            <h2>{translations.policyH2_8}</h2>
            <p className="main__information">{translations.policyText8}</p>
          </div>
          <div className="policy__text-point">
            <h2>{translations.policyH2_9}</h2>
            <p className="main__information">{translations.policyText9}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Policy;
