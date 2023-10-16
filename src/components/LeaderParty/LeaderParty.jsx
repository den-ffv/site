import React from 'react';
import './LeaderParty.scss';

import leader from '../../assets/png/leader.png';
import instagram from '../../assets/svg/instagram.svg';

function LeaderParty({ translations }) {
  return (
    <section className="leaderParty">
      <div className="leaderParty__wrapper">
        <div className="leaderParty__wrapper-title">
          <h2 className="title" data-aos="fade-up" data-aos-duration="1000">
            {translations.leaderPartyTitle}
          </h2>
          <div className="leaderParty__content">
            <div className="leaderParty__content-img">
              <img
                src={leader}
                data-aos="fade-up" data-aos-duration="1000"
                alt="Damir"
              />
            </div>
            <div
              className="leaderParty__content-wrapper"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="leaderParty__text">
                <h2 className="leaderParty__content-title">
                  {translations.leaderPartyName}
                </h2>
              </div>

              <div className="leaderParty__content-subtitle">
                {translations.leaderPartyСitation}
              </div>

              <div className="leaderParty__content-social">
                <a
                  href="https://instagram.com/prosto_dam1r?igshid=MzRlODBiNWFlZA=="
                  target="_blank" rel="noopener noreferrer"
                  className="leaderParty__social-link"
                >
             
                    <img src={instagram} alt="instagram" />
                    <p className="leaderParty__social-text">
                      @prosto_dam1r
                    </p>
                  
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeaderParty;
