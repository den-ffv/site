import React, { useState, useEffect } from 'react';
import './JoinToTeam.scss';
import forms from '../../assets/png/forms.png';

function JoinToTeam({ translations }) {
  const [shouldShake, setShouldShake] = useState(false);

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
          {translations.joinTeam.map((joinTeam) => (
            <h2
              className="title"
              data-aos="fade-up"
              data-aos-duration="2000"
              key={joinTeam.id}
            >
              {joinTeam.value}
            </h2>
          ))}
        </div>

        <img
          className="joinTeam__image"
          data-aos="fade-up"
          data-aos-duration="2000"
          src={forms}
          alt="forms"
        />
        <div className="joinTeam__content">
          {translations.joinTeamTitle.map((joinTeamTitle) => (
            <div
              className="joinTeam__content-subtitle m-hide t-hide"
              key={joinTeamTitle.id}
            >
              {joinTeamTitle.value}
            </div>
          ))}
        </div>
        {translations.linkButton.map((linkButton) => (
          <a
            className={`joinTeam__join-button-link ${
              shouldShake ? 'shake' : ''
            }`}
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
