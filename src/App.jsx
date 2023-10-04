import React, { useEffect, useState } from 'react';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import './components/Footer/Footer.scss';

import ukrainianTranslations from './language/ukrainianTranslations';
import englishTranslations from './language/englishTranslations';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState(
    localStorage.getItem('language'),
  );

  useEffect(() => {
    window.localStorage.setItem('language', currentLanguage);
  }, [currentLanguage]);

  const translations =
    localStorage.getItem('language') === 'ua'
      ? englishTranslations
      : ukrainianTranslations;

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
      </main>

      <Footer />
    </div>
  );
}

export default App;
