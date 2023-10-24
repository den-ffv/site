import React from 'react';
import logoUa from '../../assets/svg/logoUa.svg';
import logoEn from '../../assets/svg/logoEn.svg';
import telegram from '../../assets/svg/telegram.svg';
import instagram from '../../assets/svg/instagram.svg';
import tiktok from '../../assets/svg/tiktok.svg';
import facebook from '../../assets/svg/facebook.svg';

import './Footer.scss';

function Footer({ translations }) {
  const itemsSocialNetworks = [
    {
      id: 1,
      icon: telegram,
      alt: 'telegram',
      href: 'https://t.me/Polit_Molod2023',
    },
    {
      id: 2,
      icon: instagram,
      alt: 'instagram',
      href: 'https://instagram.com/polit_molod?igshid=MzRlODBiNWFlZA==',
    },
    {
      id: 3,
      icon: tiktok,
      alt: 'tiktok',
      href: 'https://www.tiktok.com/@polit_molod?_t=8gRdrufMjRe&_r=1',
    },
    { id: 4, icon: facebook, alt: 'facebook', href: '/' },
  ];

  return (
    <footer className="footer" data-aos="fade-up" data-aos-duration="1000">
      <div className="footer__content main__container">
        <div className="footer__wrapper">
          <a href="/" className="footer__logo">
            { localStorage.getItem('language') === 'ua' ? (

              <img src={logoUa} alt="logo" />
            ) : (
              <img src={logoEn} alt="logo" />
            )}
          </a>

          <div className="footer__subtitle m-hide">
            {translations.copyRight}
          </div>
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
            {itemsSocialNetworks.map((itemSM) => (
              <a
                key={itemSM.id}
                className="social-link"
                href={itemSM.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="footer__social-img"
                  src={itemSM.icon}
                  alt={itemSM.alt}
                />
              </a>
            ))}
          </div>

          <div className="footer__mobile">
            <span>{translations.linkItemsFooterContactMobile}: </span>
            <a href="tel:+380983803838">+380 98 380 38 38</a>
          </div>

          <div className="footer__gmail">
            <span>{translations.linkItemsFooterContactEmail}: </span>
            <a href="mailto:mdar_partiya@gmail.com">mdar_partiya.gmail</a>
          </div>
        </div>

        <div className="footer__subtitle mobile-only">
          {translations.copyRight}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
