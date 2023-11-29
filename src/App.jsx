import React, { useContext, useEffect, useState } from 'react';

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
import Policy from './components/Policy/Policy';
import NotFound from './components/NotFound/NotFound';
import Contact from './components/Contact/Contact';


import icon1 from '/icon/icon.svg';
import icon2 from '/icon/icon2.svg';
import icon3 from '/icon/icon3.svg';
import icon4 from '/icon/icon4.svg';

export const LangContext = React.createContext();

const WrappedApp = () => {
  const [currentLanguage, setCurrentLanguage] = useState(
    localStorage.getItem('language'),
  );

  window.localStorage.setItem(
    'language',
    currentLanguage == null ? 'ua' : currentLanguage,
  );

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      document.title =
        savedLanguage === 'en'
          ? 'NGO "Youth Democratic Alliance for Reforms"'
          : 'ГО «Молодіжний демократичний альянс за реформи»';
    }
  }, [currentLanguage]);

  const translations =
    localStorage.getItem('language') === 'ua'
      ? ukrainianTranslations
      : englishTranslations;


  const images = [
    '/IMG_5.png',
    '/IMG_2.png',
    '/IMG_3.png',
    '/IMG_4.png',
    '/IMG_1.png',
  ];

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
    <LangContext.Provider value={translations}>
      <App images={images} dataAboutSection={dataAboutSection} currentLanguage={currentLanguage} setCurrentLanguage={setCurrentLanguage} />
    </LangContext.Provider>
  )
}


const App = React.memo((props) => {

  const [showPolicy, setShowPolicy] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const { images, dataAboutSection, currentLanguage, setCurrentLanguage } = props;

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#policy-anchor') {
        setShowPolicy(true);
        setShowContact(false);
      } else if (window.location.hash === '#contact-anchor') {
        setShowPolicy(false);
        setShowContact(true);
      } else {
        setShowPolicy(false);
        setShowContact(false);
      }
    };

    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const currentPath = window.location.pathname;

  if (currentPath !== '/' && currentPath !== '/NotFound') {
    return (
      <div>
        <Header
          currentLanguage={currentLanguage}
          setCurrentLanguage={setCurrentLanguage}
        />
        <NotFound />
        <Footer/>
      </div>

    );
  }

  const translations = useContext(LangContext)


  return (
    <div className="container">
      <ScrollToTopButton />
      <Header
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
      />
      <>
        {showPolicy ? (
          <Policy  />
        ) : showContact ? (
          <Contact  />
        ) : (
          <>
            <div className="main">
              <div className="main__container">
                <InitialBlockSection />
                {dataAboutSection.map((data) => (
                  <AboutSection
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
                <Sliders images={images} />
              </div>
            </div>
            <LeaderParty />
            <div className="main__container">
              <SocialMedia />
              <JoinToTeam />
            </div>
          </>
        )}
      </>
      <Footer />
    </div>
  );


})

export default WrappedApp;
