import React, { useState } from 'react';
import './Menu.scss';
import logo from '../../assets/svg/logo.svg';

function Menu({
  isOpen,
  setIsOpen,
  translations,
  setCurrentLanguage,
  currentLanguage,
}) {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setMenuActive(!menuActive);
  };

  const menuClasses = isOpen ? 'burger-menu open' : 'burger-menu';
  const menuContainerClasses = menuActive ? 'menu menu-active' : 'menu';

  return (
    <div className="menu-wrapper">
      <div className="menu__logo mobile-only">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>

      <div className="burger-container">
        <div className={menuClasses} onClick={toggleMenu}>
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
        {isOpen && (
          <div className={menuContainerClasses}>
            <ul>
              {translations.linkItems.map((linkItem) => (
                <li className="menu__content-list" key={linkItem.id}>
                  <a className="menu__content-link" href={linkItem.href}>
                    {linkItem.value}
                  </a>
                </li>
              ))}
            </ul>
            <div className="menu__join">
              <div className="menu__wrapper-button">
                <button
                  className="menu__translation-button"
                  onClick={() => setCurrentLanguage((currentLanguage = 'ua'))}
                >
                  Укр
                </button>
                <button
                  className="menu__translation-button"
                  onClick={() => setCurrentLanguage((currentLanguage = 'en'))}
                >
                  Eng
                </button>
              </div>
              {translations.linkButton.map((linkButton) => (
                <a
                  className="menu__join-button-link"
                  key={linkButton.id}
                  href={linkButton.href}
                >
                  {linkButton.value}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Menu;
