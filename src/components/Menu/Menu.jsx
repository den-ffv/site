import React, { useContext, useState } from 'react';
import './Menu.scss';
import logoUa from '../../assets/svg/logoUa.svg';
import logoEn from '../../assets/svg/logoEn.svg';
import { LangContext } from '../../App';

const Menu = ({
  isOpen,
  setIsOpen,
  setCurrentLanguage,
  currentLanguage,
}) => {
  const [menuActive, setMenuActive] = useState(false);

  const translations = useContext(LangContext)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setMenuActive(!menuActive);
  };

  const handleLinkClick = () => {
    toggleMenu();
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

  const handleMenuJoinClick = (e, id) => {
    e.preventDefault(); // Отменяем стандартное поведение ссылки
    toggleMenu(); // Закрываем меню
    scrollToAnchor(id); // Прокручиваем к якорю
  };

  return (
    <div className="menu-wrapper mobile-only">
      <div className="menu__logo mobile-only">
        <a href="/">
          {localStorage.getItem('language') === 'ua' ? (
            <img src={logoUa} alt="logo" loading='eager'/>
          ) : (
            <img src={logoEn} alt="logo" loading='eager' />
          )}
        </a>
      </div>
      <div className="burger-container">
        {isOpen && (
          <div className={!isOpen ? 'menu' : 'menu menu-active'}>
            <ul>
              {translations.linkItems.map((linkItem) => (
                <li className="menu__content-list" key={linkItem.id}>
                  <a
                    className="menu__content-link"
                    href={linkItem.href}
                    onClick={(e) => {
                      handleLinkClick();
                      e.preventDefault();
                      if (linkItem.href.startsWith('http')) {
                        window.open(linkItem.href, '_blank'); // Open external link in a new tab
                      } else {
                        scrollToAnchor(linkItem.href.substring(1));
                      }
                    }}
                  >
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
                  onClick={(e) => {
                    handleLinkClick();
                    e.preventDefault();
                    if (linkButton.href.startsWith('http')) {
                      window.open(linkButton.href, '_blank');
                    } else {
                      scrollToAnchor(linkButton.href.substring(1));
                    }
                  }}
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
};

export default Menu;
