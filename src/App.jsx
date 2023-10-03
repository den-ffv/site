import React, { useEffect, useState } from 'react';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import './components/Footer/Footer.scss';

import ukrainianTranslations from './language/ukrainianTranslations';
import englishTranslations from './language/englishTranslations';
import Sliders from './components/Slider/Slider';
import Title from './components/Title/Title';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('language'));

  window.localStorage.setItem('language', currentLanguage == null ? "ua" : currentLanguage );
  useEffect(() => {
  }, [currentLanguage]);

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
    <div className="conteiner">
      <Header
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
        translations={translations}
      />

      <main className="main">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima eum
        unde officiis nulla eos voluptatum, odit laudantium, atque nam iure
        aliquid quia autem delectus? Quo dicta vero tempora non adipisci!
        <Title titleText={translations.sliderTitle}/>
        <Sliders images={images}/>
      </main>

      <Footer />
    </div>
  );
}

export default App;
