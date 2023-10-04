import React from 'react'
import './Menu.scss';

function Menu({isOpen, setIsOpen, translations}) {
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-container">
      <div className={`burger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>
      <div className={isOpen ? "menu menu-active" : "menu"}>

      {isOpen && (
        <ul>
          {translations.linkItems.map(linkItem => (
            <li key={linkItem.id}>{linkItem.value}</li>
            ))}
        </ul>
      )}
      </div>
    </div>
  );
}

export default Menu;