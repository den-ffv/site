import React, { useState, useEffect } from 'react';
import Menu from '../Menu/Menu';
import logo from '../../assets/svg/logo.svg';
import './Header.scss';

function Header({ currentLanguage, setCurrentLanguage, translations }) {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldShake, setShouldShake] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShouldShake((prevShake) => !prevShake);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header">
      <div className="header__content m-hide">
        <div className="header__wapper">
          <div className="header__logo" data-aos="zoom-in">
            <a href="/home">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <ul className="header__content-ul">
            {translations.linkItems.map((linkItem) => (
              <li
                className="header__content-list"
                data-aos="zoom-in"
                key={linkItem.id}
              >
                <a className="header__content-link" href={linkItem.href}>
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
            Укр
          </button>
          <button
            className={`header__translation-button ${
              currentLanguage === 'en' ? 'selected' : ''
            }`}
            onClick={() => setCurrentLanguage('en')}
          >
            Eng
          </button>
          {translations.linkButton.map((linkButton) => (
            <a
              className={`header__join-button-link ${
                shouldShake ? 'shake' : ''
              }`}
              key={linkButton.id}
              href={linkButton.href}
            >
              {linkButton.value}
            </a>
          ))}
        </div>
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
