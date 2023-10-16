import React from 'react';
import './SocialMedia.scss';
import telegram from '../../assets/svg/telegram.svg';
import instagram from '../../assets/svg/instagram.svg';
import tiktok from '../../assets/svg/tiktok.svg';
import facebook from '../../assets/svg/facebook.svg';
import iphone from '../../assets/png/iPhone.png';
import macbook from '../../assets/png/macBook.png';

function SocialMedia({ translations }) {
  return (
    <section className="socialMedia">
      <div className="socialMedia__wrapper">
        <div className="socialMedia__wrapper-title">
          <h2 className="title" data-aos="fade-up" data-aos-duration="1000">
            {translations.socialMediaTitle}
          </h2>
        </div>

        <div
          className="socialMedia__wrapper-image"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <a
            href="https://instagram.com/polit_molod?igshid=MzRlODBiNWFlZA=="
            target="_blank"
            rel="noopener noreferrer"
            className="device__image-link"
          >
            <img className="device__image" src={iphone} alt="forms" />
          </a>
          <a
            href="https://t.me/Polit_Molod202"
            target="_blank"
            rel="noopener noreferrer"
            className="device__image-link"
          >
            <img className="device__image" src={macbook} alt="forms" />
          </a>
        </div>
        <div
          className="socialMedia__content"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <a href="https://t.me/Polit_Molod202"  target="_blank" rel="noopener noreferrer" className="social-link">
            <img
              src={telegram}
              className="socialMedia-img"
              alt="telegram"
            ></img>
          </a>
          <a
            href="https://instagram.com/polit_molod?igshid=MzRlODBiNWFlZA=="
            target="_blank" rel="noopener noreferrer"
            className="social-link"
          >
            <img
              src={instagram}
              className="socialMedia-img"
              alt="instagram"
            ></img>
          </a>
          <a
            href="https://www.tiktok.com/@polit_molod?_t=8gRdrufMjRe&_r=1"
            target="_blank" rel="noopener noreferrer"
            className="social-link"
          >
            <img src={tiktok} className="socialMedia-img" alt="tik tok"></img>
          </a>
          <a href="#" className="social-link">
            <img
              src={facebook}
              className="socialMedia-img"
              alt="facebook"
            ></img>
          </a>
        </div>
      </div>
    </section>
  );
}

export default SocialMedia;
