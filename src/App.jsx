import React, { useEffect, useState } from 'react';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import './components/Footer/Footer.scss';

import ukrainianTranslations from './language/ukrainianTranslations';
import englishTranslations from './language/englishTranslations';
import Sliders from './components/Slider/Slider';
import Title from './components/Title/Title';

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
  ];

  return (
    <div className="container">
      <Header
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
        translations={translations}
      />

      <main className="main">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima eum
        unde officiis nulla eos voluptatum, odit laudantium, atque nam iure
        aliquid quia autem delectus? Quo dicta vero tempora non adipisci!
        <Title titleText={translations.sliderTitle} />
        <Sliders images={images} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
