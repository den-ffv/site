import React, { useEffect, useState } from 'react';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

// Components

import ukrainianTranslations from './language/ukrainianTranslations';
import englishTranslations from './language/englishTranslations';
import Sliders from './components/Slider/Slider';
import Title from './components/Title/Title';

import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';

// Section

import JoinToTeam from './components/JoinToTeam/JoinToTeam';
import SocialMedia from './components/SocialMedia/SocialMedia';
import LeaderParty from './components/LeaderParty/LeaderParty';

import InitialBlockSection from './components/InitialBlockSection/InitialBlockSection';
import AboutSection from './components/AboutSection/AboutSection';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState(
    localStorage.getItem('language'),
  );

  window.localStorage.setItem(
    'language',
    currentLanguage == null ? 'ua' : currentLanguage,
  );
  useEffect(() => {}, [currentLanguage]);

  const translations =
    localStorage.getItem('language') === 'ua'
      ? ukrainianTranslations
      : englishTranslations;

  const images = [
    '/image-1.svg',
    '/image-2.svg',
    '/image-3.svg',

    '/image-2.svg',
    '/image-3.svg',

    '/image-1.svg',
    '/image-2.svg',
    '/image-3.svg',
    '/image-2.svg',
  ];

  return (
    <main className="container">
      <ScrollToTopButton />
      <Header
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
        translations={translations}
      />
    
      <div className="main">
        <div className="main__container">
          <InitialBlockSection translations={translations} />
          <AboutSection revers={false} mainCard={true} numberOfComponents={1} />
          <AboutSection revers={true} mainCard={false} numberOfComponents={3} />
          <AboutSection
            revers={false}
            mainCard={false}
            numberOfComponents={1}
          />
          <AboutSection revers={true} mainCard={false} numberOfComponents={1} />
          <Title titleText={translations.sliderTitle} />
          <Sliders images={images} />
        </div>
      </div>
        <div className="main__container">
          <LeaderParty translations={translations} />
          <SocialMedia translations={translations} />
          <JoinToTeam translations={translations} />
          <Footer translations={translations} />
        </div>
    </main>
  );
}

export default App;
