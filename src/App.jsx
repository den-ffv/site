import React, { useEffect, useState } from 'react';

import englishTranslations from './language/englishTranslations';
import ukrainianTranslations from './language/ukrainianTranslations';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Sliders from './components/Slider/Slider';
import Title from './components/Title/Title';

import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
import JoinToTeam from './components/JoinToTeam/JoinToTeam';
import SocialMedia from './components/SocialMedia/SocialMedia';
import LeaderParty from './components/LeaderParty/LeaderParty';
import InitialBlockSection from './components/InitialBlockSection/InitialBlockSection';
import AboutSection from './components/AboutSection/AboutSection';

import icon1 from '/icon/icon.svg';
import icon2 from '/icon/icon2.svg';
import icon3 from '/icon/icon3.svg';
import icon4 from '/icon/icon4.svg';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState(
    localStorage.getItem('language'),
  );

  window.localStorage.setItem(
    'language',
    currentLanguage == null ? 'ua' : currentLanguage,
  );

  const translations =
    localStorage.getItem('language') === 'ua'
      ? ukrainianTranslations
      : englishTranslations;

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      document.title =
        savedLanguage === 'en'
          ? 'NGO "Youth Democratic Alliance for Reforms"'
          : 'ГО «Молодіжний демократичний альянс за реформи»';
    }
  }, [currentLanguage]);

  const images = ['/IMG_5.png', '/IMG_2.png', '/IMG_3.png', '/IMG_4.png', '/IMG_1.png'];

  const dataAboutSection = [
    {
      id: 1,
      revers: false,
      mainCard: true,
      numOfCompon: 1,
      text: translations.aboutText1,
      icon: icon1,
      image: [{ id: 1, img: '/foto_1.png' }],
    },
    {
      id: 2,
      revers: true,
      mainCard: false,
      numOfCompon: 3,
      text: translations.aboutText2,
      icon: icon2,
      image: [
        { id: 2, img: '/foto_4.png' },
        { id: 3, img: '/foto_5.png' },
        { id: 4, img: '/foto_2.png' },
      ],
    },
    {
      id: 3,
      revers: false,
      mainCard: false,
      numOfCompon: 1,
      text: translations.aboutText3,
      icon: icon3,
      image: [{ id: 5, img: '/foto_3.png' }],
    },
    {
      id: 4,
      revers: true,
      mainCard: false,
      numOfCompon: 1,
      text: translations.aboutText4,
      icon: icon4,
      image: [{ id: 6, img: '/foto_6.png' }],
    },
  ];

  return (
    <div className="container">
      <ScrollToTopButton />
      <Header
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
        translations={translations}
      />

      <div className="main">
        <div className="main__container">
          <InitialBlockSection translations={translations} />
          {dataAboutSection.map((data) => (
            <AboutSection
              translations={translations}
              key={data.id}
              revers={data.revers}
              mainCard={data.mainCard}
              numberOfComponents={data.numOfCompon}
              textInComponentAbout={data.text}
              icon={data.icon}
              image={data.image}
            />
          ))}
          <Title titleText={translations.sliderTitle} />
          <Sliders images={images} translations={translations} />
        </div>
      </div>
          <LeaderParty translations={translations} />
        <div className="main__container">
          <SocialMedia translations={translations} />
          <JoinToTeam translations={translations} />
        </div>
          <Footer translations={translations} />
    </div>
  );
}

export default App;
