import React, { useContext } from 'react';
import logoUa from '../../assets/svg/logoUa.svg';
import logoEn from '../../assets/svg/logoEn.svg';

import './Footer.scss';
import { LangContext } from '../../App';
import { itemsSocialNetworks_Footer } from '../../constants/constants';

function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  const translations = useContext(LangContext)

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
                      onClick={scrollToTop}
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
            {itemsSocialNetworks_Footer.map((itemSM) => (
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
            <a href="tel:+380973517753">+380 97 351 77 53</a>
          </div>

          <div className="footer__gmail">
            <span>{translations.linkItemsFooterContactEmail}: </span>
            <a href="mailto:Molodizkaudar@gmail.com">Molodizkaudar@gmail.com</a>
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
