import React, { useState, useEffect } from 'react';
import '../Contact/Contact.scss';
import telegram from '../../assets/svg/telegram.svg';
import instagram from '../../assets/svg/instagram.svg';
import tiktok from '../../assets/svg/tiktok.svg';
import facebook from '../../assets/svg/facebook.svg';

function Contact({ translations }) {
  const [shouldShake, setShouldShake] = useState(false);

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
    <section className="Contact" id="Contact-form">
      <div className="Contact__wrapper">
        <div className="Contact__content">
          <div className="Contact__title">{translations.contactTitle}</div>
          <div className="Contact__block">
            <div className="Contact__location">{translations.location}</div>
            <div className="Contact__links">
              {translations.LinksText}
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
            </div>
          </div>
          <div className="Contact__support">
            <span>{translations.linkItemsContactSupport}: </span>
            <a href="mailto:info@udar.party">info@udar.party</a>
          </div>
        </div>
        <div className="Contact__box">
          <span className="Contact__red-text">
            {translations.boxContactText}
          </span>
          <div className="">
            {translations.linkButtonbox.map((linkButton) => (
              <a
                className={`joinTeam__join-button-link ${
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
