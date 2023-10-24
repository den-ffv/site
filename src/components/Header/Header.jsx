import React, { useState, useEffect } from 'react';
import Menu from '../Menu/Menu';
import logoUa from '../../assets/svg/logoUa.svg';
import logoEn from '../../assets/svg/logoEn.svg';
import './Header.scss';

function Header({ currentLanguage, setCurrentLanguage, translations }) {
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  const [shouldShake, setShouldShake] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShouldShake((prevShake) => !prevShake);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToAnchor = (id) => {
    const element = document.getElementById(id);
    const headerHeight = document.querySelector('.header').offsetHeight;
    const offsetTop = element.offsetTop - headerHeight;

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <header className="header" data-aos="fade-in">
      <div className="header__content m-hide">
        <div className="header__wapper">
          <div className="header__logo" data-aos="zoom-in">
            <a href="/">
              {localStorage.getItem('language') === 'ua' ? (
                <img src={logoUa} alt="logo" />
              ) : (
                <img src={logoEn} alt="logo" />
              )}
            </a>
          </div>
          <ul className="header__content-ul">
            {translations.linkItems.map((linkItem) => (
              <li
                className="header__content-list"
                data-aos="zoom-in"
                key={linkItem.id}
              >
                <a
                  className="header__content-link"
                  href={linkItem.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToAnchor(linkItem.href.substring(1));
                  }}
                >
                  {linkItem.value}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="header__join" data-aos="zoom-in">
          <button
            className={`header__translation-button ${
              currentLanguage === 'ua' ? 'selected' : ''
            }`}
            onClick={() => setCurrentLanguage('ua')}
          >
            UA
          </button>
          <button
            className={`header__translation-button ${
              currentLanguage === 'en' ? 'selected' : ''
            }`}
            onClick={() => setCurrentLanguage('en')}
          >
            ENG
          </button>
          {translations.linkButton.map((linkButton) => (
            <a
              className={`header__join-button-link ${
                shouldShake ? 'shake' : ''
              }`}
              target="_blank"
              rel="noopener noreferrer"
              key={linkButton.id}
              href={linkButton.href}
            >
              {linkButton.value}
            </a>
          ))}
        </div>
      </div>
      <div
        className={isOpen ? 'burger-menu open' : 'burger-menu'}
        onClick={toggleMenu}
      >
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>
      <Menu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        translations={translations}
        setCurrentLanguage={setCurrentLanguage}
      />
    </header>
  );
}

export default Header;
