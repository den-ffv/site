import React from 'react';
import './LeaderParty.scss';

import leader from '../../assets/png/leader.png';
import leaderBg from '../../assets/png/leader-bg.png';
import instagram from '../../assets/svg/instagram.svg';

function LeaderParty({ translations }) {
  return (
    <section className="leaderParty">
      <div className="leaderParty__wrapper">
        <div className="leaderParty__wrapper-title">
          {translations.leaderPartyTitle.map((leaderPartyTitle) => (
            <h2
              className="title"
              data-aos="fade-up"
              data-aos-duration="2000"
              key={leaderPartyTitle.id}
            >
              {leaderPartyTitle.value}
            </h2>
          ))}
          <div className="leaderParty__content">
            <div className="leaderParty__content-img">
              <img
                src={leader}
                data-aos="fade-right"
                data-aos-duration="2000"
                alt="Damir"
              />
            </div>
            <div
              className="leaderParty__content-wrapper"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="leaderParty__text">
                {translations.leaderPartyName.map((leaderPartyName) => (
                  <h2
                    className="leaderParty__content-title"
                    key={leaderPartyName.id}
                  >
                    {leaderPartyName.value}
                  </h2>
                ))}
              </div>
              {translations.leaderPartyСitation.map((leaderPartyСitation) => (
                <div
                  className="leaderParty__content-subtitle"
                  id={leaderPartyСitation.id}
                >
                  {leaderPartyСitation.value}
                </div>
              ))}
              <div className="leaderParty__content-social">
                <a
                  href="https://instagram.com/prosto_dam1r?igshid=MzRlODBiNWFlZA=="
                  className="leaderParty__social-link"
                >
                  <img src={instagram} alt="instagram" />
                </a>
                <div className="leaderParty__social-text">@prosto_dam1r</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeaderParty;
