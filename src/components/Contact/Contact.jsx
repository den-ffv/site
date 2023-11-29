import React, { useState, useEffect, useContext } from 'react';
import '../Contact/Contact.scss';
import telegram from '../../assets/svg/telegram-red.svg';
import instagram from '../../assets/svg/instagram-red.svg';
import tiktok from '../../assets/svg/tik-tok-red.svg';
import facebook from '../../assets/svg/facebook-red.svg';
import { LangContext } from '../../App';

function Contact() {
  const [shouldShake, setShouldShake] = useState(false);

  const translations = useContext(LangContext)

  useEffect(() => {
    const interval = setInterval(() => {
      setShouldShake((prevShake) => !prevShake);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

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
    <section className="Contact" id="contact-anchor">
      <div className="Contact__wrapper">
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
              <h4>
                {translations.location_1}
              </h4>
              {translations.location_2}
            </div>
            <div className="Contact__links">
            <h4>{translations.LinksText}</h4>
              <ul>
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
              </ul>
            </div>
          </div>
          <div className="Contact__support">
            <span><h4>{translations.linkItemsContactSupport}</h4></span>
            <a href="mailto:info@udar.party">info@udar.party</a>
          </div>
        </div>
        <div className="Contact__box">
            <span className="Contact__red-text">
              <h3>{translations.boxContactText}</h3>
            </span>
            <div>
              {translations.linkButtonbox.map((linkButton) => (
                <a
                  className={`Contact__joinTeam__join-button-link ${
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
      </div>
    </section>
  );
}

export default Contact;
