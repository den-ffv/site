import React , {useState} from  'react';
import Menu from '../Menu/Menu'
import './Header.scss';

function Header({
  currentLanguage,
  setCurrentLanguage,
  translations
}) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen)

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo">
          {/* <img src="" alt="logo" /> */}
          <h2>LOGO</h2>
        </div>
        <ul className="header__content-ul m-hide">
          {translations.linkItems.map((linkItem) => (
            <li className="header__content-list" key={linkItem.id}>
              <a className="header__content-link" href={linkItem.href}>
                {linkItem.value}
              </a>
            </li>
          ))}
        </ul>
        <div className="header__join m-hide">
          <button className="header__translation-button" onClick={() => setCurrentLanguage(currentLanguage ='ua')}>Укр</button>
          <button className="header__translation-button" onClick={() => setCurrentLanguage(currentLanguage ='en')}>Eng</button>
          {translations.linkButton.map((linkButton) => (
            <div className="header__join-button" key={linkButton.id}>
              <a className="header__join-button-link" href={linkButton.href}>
                {linkButton.value}
              </a>
            </div>
          ))}
        </div>
      </div>
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} translations={translations}/>
    </header>
  );
}

export default Header;
