import React from 'react';

import './Header.scss';

function Header({
  currentLanguage,
  setCurrentLanguage,
  translations
}) {


  return (
    <header className="header">
      <div className="header-content">
        <div className="header-content__logo">
          {/* <img src="" alt="logo" /> */}
          <h2>LOGO</h2>
        </div>
        <ul className="header-content__ul">
          {translations.linkItems.map((linkItem) => (
            <li className="header-content__list" key={linkItem.id}>
              <a className="header-content__link" href={linkItem.href}>
                {linkItem.value}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <button onClick={() => setCurrentLanguage(currentLanguage ='en')}>EN</button>
          <button onClick={() => setCurrentLanguage(currentLanguage ='ua')}>UA</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
