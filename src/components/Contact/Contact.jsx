import React, { useState, useEffect, useContext } from 'react';
import '../Contact/Contact.scss';
import { LangContext } from '../../App';
import { itemsSocialNetworks_ContactPage } from '../../constants/constants';



function Contact() {
  const [shouldShake, setShouldShake] = useState(false);

  const translations = useContext(LangContext)

  useEffect(() => {
    const interval = setInterval(() => {
      setShouldShake((prevShake) => !prevShake);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="Contact" id="contact-anchor">
      
        <div className="Contact__content">
          <div className="Contact__title">
            <b>
              <h2>
                {translations.contactTitle}
              </h2>
            </b>
          </div>
          <div className="Contact__block">
            <div className="Contact__location">
              <h4>{translations.location_1}</h4>
              <p>{translations.location_2}</p>
              <div className="Contact__support">
                <h4>{translations.linkItemsContactSupport}</h4>
                <a href="mailto:Molodizkaudar@gmail.com">Molodizkaudar@gmail.com</a>
                <a href="tel:+380973517753">+380 97 351 77 53</a>
              </div>
            </div>
            <div className="Contact__links">
            <h4>{translations.LinksText}</h4>
              <ul>
                {itemsSocialNetworks_ContactPage.map((itemSM) => (
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
              </ul>
            </div>
          </div>
        </div>
        <div className="Contact__box">
            <span className="Contact__red-text">
              <h3>{translations.boxContactText}</h3>
              <div>
                {translations.linkButtonContact.map((linkButtonContact) => (
                  <a
                    className={`Contact__joinTeam__join-button-link ${
                      shouldShake ? 'shake' : ''
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={linkButtonContact.id}
                    href={linkButtonContact.href}
                  >
                    {linkButtonContact.value}
                  </a>
                ))}
              </div>
            </span>
          </div>
    </section>
  );
}

export default Contact;
