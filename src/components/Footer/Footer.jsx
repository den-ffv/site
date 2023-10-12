import React from 'react';
import logo from '../../assets/svg/logo.svg';
import telegram from '../../assets/svg/telegram.svg';
import instagram from '../../assets/svg/instagram.svg';
import tiktok from '../../assets/svg/tiktok.svg';
import facebook from '../../assets/svg/facebook.svg';

import './Footer.scss';

function Footer({ translations }) {
  return (
    <footer className="footer">
      <div
        className="footer__content"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="footer__wrapper">
          <a href="/Home" className="footer__logo">
            <img src={logo} alt="logo" />
          </a>
          {translations.copyRight.map((copyRight) => (
            <div className="footer__subtitle m-hide" key={copyRight.id}>
              {copyRight.value}
            </div>
          ))}
        </div>
        <div className="footer__wrapper">
          <div className="footer__wrapper-content">
            <ul className="footer-content-ul">
              {translations.linkItemsFooterAbout.map((linkItemsFooterAbout) => (
                <li
                  className="footer-content-list"
                  key={linkItemsFooterAbout.id}
                >
                  <a
                    className="footer__content-link"
                    href={linkItemsFooterAbout.href}
                  >
                    {linkItemsFooterAbout.value}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="footer-content-ul">
              {translations.linkItemsFooterMedia.map((linkItemsFooterMedia) => (
                <li
                  className="footer-content-list"
                  key={linkItemsFooterMedia.id}
                >
                  <a
                    className="footer__content-link"
                    href={linkItemsFooterMedia.href}
                  >
                    {linkItemsFooterMedia.value}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="footer-content-ul">
              {translations.linkItemsFooterContact.map(
                (linkItemsFooterContact) => (
                  <li
                    className="footer-content-list"
                    key={linkItemsFooterContact.id}
                  >
                    <a
                      className="footer__content-link"
                      href={linkItemsFooterContact.href}
                    >
                      {linkItemsFooterContact.value}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
        <div className="footer__wrapper">
          <div className="footer__social">
            <a href="https://t.me/Polit_Molod202" className="social-link">
              <img
                src={telegram}
                className="footer__social-img"
                alt="telegram"
              ></img>
            </a>
            <a
              href="https://instagram.com/polit_molod?igshid=MzRlODBiNWFlZA=="
              className="social-link"
            >
              <img
                src={instagram}
                className="footer__social-img"
                alt="instagram"
              ></img>
            </a>
            <a
              href="https://www.tiktok.com/@polit_molod?_t=8gRdrufMjRe&_r=1"
              className="social-link"
            >
              <img
                src={tiktok}
                className="footer__social-img"
                alt="tik tok"
              ></img>
            </a>
            <a href="#" className="social-link">
              <img
                src={facebook}
                className="footer__social-img"
                alt="facebook"
              ></img>
            </a>
          </div>
          {translations.linkItemsFooterContactMobile.map((item) => (
            <div className="footer__mobile" key={item.id}>
              {item.value}: <a href="tel:+380983803838">+380983803838</a>
            </div>
          ))}
          {translations.linkItemsFooterContactEmail.map((item) => (
            <div className="footer__gmail" key={item.id}>
              {item.value}:{' '}
              <a href="mailto:mdar_partiya@gmail.com">mdar_partiya.gmail</a>
            </div>
          ))}
        </div>
        {translations.copyRight.map((copyRight) => (
          <div className="footer__subtitle mobile-only" key={copyRight.id}>
            {copyRight.value}
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
