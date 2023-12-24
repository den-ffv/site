import React, { useState, useEffect, useContext } from 'react';
import './JoinToTeam.scss';
import forms from '../../assets/png/forms.svg';
import { LangContext } from '../../App';

function JoinToTeam() {
  const [shouldShake, setShouldShake] = useState(false);

  const translations = useContext(LangContext)

  useEffect(() => {
    const interval = setInterval(() => {
      setShouldShake((prevShake) => !prevShake);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="joinTeam">
      <div className="joinTeam__wrapper">
        <div className="joinTeam__wrapper-title">
          <h2 className="title" data-aos="fade-up" data-aos-duration="1000">
            {translations.joinTeam}
          </h2>
        </div>

        <div className="joinTeam__content">
          <img
            className="joinTeam__image"
            data-aos="fade-up"
            data-aos-duration="1000"
            src={forms}
            alt="forms"
            loading='lazy'
          />
          <p className="joinTeam__content-subtitle m-hide t-hide">
            {translations.joinTeamTitle}
          </p>
        </div>
        {translations.linkButton.map((linkButton) => (
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
    </section>
  );
}

export default JoinToTeam;
