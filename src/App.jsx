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
    'https://www.fubiz.net/wp-content/uploads/2021/05/GDT-nature-wildlife-photography-awards-nature-studio-petapixel-800x533.jpg',
    'https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1652341068/EducationHub/photos/ocean-waves.jpg',
    'https://cdnp.flypgs.com/files/Sehirler-long-tail/Kyiv/kyiv-bag_ms_zl_k-anit.jpg',
  ];

  return (
    <div className="container">
      <ScrollToTopButton />
      <Header
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
        translations={translations}
      />

      <main className="main">
        <Title titleText={translations.sliderTitle} />
        <Sliders images={images} />
        <LeaderParty translations={translations} />
        <SocialMedia translations={translations} />
        <JoinToTeam translations={translations} />
        <Footer translations={translations} />
      </main>
    </div>
  );
}

export default App;
