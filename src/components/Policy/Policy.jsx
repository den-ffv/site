import React, { useContext } from 'react';
import './Policy.scss';
import { LangContext } from '../../App';



function Policy() {

  const translations = useContext(LangContext)

  return (
    <div 
    className="policy"
    id="policy-anchor"
    data-aos='zoom-in'
    >
      <div className="policy__container">
        <div className="policy__title">
          <h1>{translations.policyH1}</h1>
        </div>
        <div data-aos='zoom-out-up' className="policy__text">
          <span data-aos='zoom-out-up'>
            <b>{translations.policyTextMain_1}</b>
            <br />
            <b>{translations.policyTextMain_2}</b>
            &nbsp;
            {translations.policyTextMain_3}
          </span>
          <span data-aos='zoom-out-up'>
            <b>{translations.policyTextMain_4}</b>
            &nbsp;
            {translations.policyTextMain_5}
            <br />
            {translations.policyTextMain_6}
            {translations.policyTextMain_7}
            <br />
            {translations.policyTextMain_8}
            &nbsp;
            <a className='policy__text-link' target="_blank" href='https://zakon.rada.gov.ua/laws/show/2297-17#Text'>{translations.policyTextMain_9}</a>
          </span>
          <span data-aos='zoom-out-up'>
            <b>{translations.policyTextMain_10}</b>
            <br />
            {translations.policyTextMain_11}
            <br />
            <br />
            {translations.policyTextMain_12}
            <br />
            <br />
            {translations.policyTextMain_13}
            <br />
            <br />
            {translations.policyTextMain_14}
            <br />
            <br />
            {translations.policyTextMain_15}
          </span>
          <div className="policy__text-point" key="policyH2_1">
            <h2 data-aos='zoom-out-up'>{translations.policyH2_1}</h2>
            <p className="main__information" data-aos='zoom-out-up'>
              {translations.policyText1_1}
              <br />
              <br />
              {translations.policyText1_2}
              <br />
              <br />
              {translations.policyText1_3}
            </p>
          </div>
          <div className="policy__text-point" key="policyH2_2">
            <h2 data-aos='zoom-out-up'>{translations.policyH2_2}</h2>
            <p className="main__information" data-aos='zoom-out-up'>
              {translations.policyText2_1}
              <br />
              <br />
              {translations.policyText2_2}
              <br />
              <br />
              {translations.policyText2_3}
              <br />
              <br />
              {translations.policyText2_4}
            </p>
          </div>
          <div className="policy__text-point" key="policyH2_3">
            <h2 data-aos='zoom-out-up'>{translations.policyH2_3}</h2>
            <p className="main__information" data-aos='zoom-out-up'>
              {translations.policyText3_1}
              <br />
              <br />
              {translations.policyText3_2}
              <br />
              <br />
              {translations.policyText3_3}
              <br />
              <br />
              {translations.policyText3_4}
            </p>
          </div>
          <div className="policy__text-point" key="policyH2_4">
            <h2 data-aos='zoom-out-up'>{translations.policyH2_4}</h2>
            <p className="main__information" data-aos='zoom-out-up'>
              {translations.policyText4_1}
              <br />
              <br />
              {translations.policyText4_2}
            </p>
          </div>
          <div className="policy__text-point" key="policyH2_5">
            <h2 data-aos='zoom-out-up'>{translations.policyH2_5}</h2>
            <p className="main__information" data-aos='zoom-out-up'>{translations.policyText5}</p>
          </div>
          <div className="policy__text-point" key="policyH2_6">
            <h2 data-aos='zoom-out-up'>{translations.policyH2_6}</h2>
            <p className="main__information" data-aos='zoom-out-up'>
            {translations.policyText6_1}
            <br />
            <br />
            {translations.policyText6_2}
            </p>
          </div>
          <div className="policy__text-point" key="policyH2_7">
            <h2 data-aos='zoom-out-up'>{translations.policyH2_7}</h2>
            <p className="main__information" data-aos='zoom-out-up'>{translations.policyText7}</p>
          </div>
          <div className="policy__text-point" key="policyH2_8">
            <h2 data-aos='zoom-out-up'>{translations.policyH2_8}</h2>
            <p className="main__information" data-aos='zoom-out-up'>{translations.policyText8}</p>
          </div>
          <div className="policy__text-point" key="policyH2_9">
            <h2 data-aos='zoom-out-up'>{translations.policyH2_9}</h2>
            <p className="main__information" data-aos='zoom-out-up'>
            {translations.policyText9_1}
            <br />
            <br />
            {translations.policyText9_2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Policy;
