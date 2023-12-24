import React, {lazy,Suspense , useContext, useEffect, useState } from 'react';

import englishTranslations from './constants/language/englishTranslations';
import ukrainianTranslations from './constants/language/ukrainianTranslations';

const Footer = lazy(() => import('./components/Footer/Footer'));
import Header from './components/Header/Header';
import Sliders from './components/Slider/Slider';
import Title from './components/Title/Title';

import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
import JoinToTeam from './components/JoinToTeam/JoinToTeam';
import SocialMedia from './components/SocialMedia/SocialMedia';
import LeaderParty from './components/LeaderParty/LeaderParty';
import InitialBlockSection from './components/InitialBlockSection/InitialBlockSection';
import AboutSection from './components/AboutSection/AboutSection';
const Policy = lazy(() => import('./components/Policy/Policy'));
const NotFound = lazy(() => import('./components/NotFound/NotFound'));
const Contact = lazy(() => import('./components/Contact/Contact'));
import { dataAboutSectionFunc } from './constants/constants';

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


  return (
    <LangContext.Provider value={translations}>
      <App currentLanguage={currentLanguage} setCurrentLanguage={setCurrentLanguage} />
    </LangContext.Provider>
  )
}


const App = React.memo((props) => {

  const [showPolicy, setShowPolicy] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const {currentLanguage, setCurrentLanguage } = props;

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#policy-anchor") {
        setShowPolicy(true);
        setShowContact(false);
      } else if (window.location.hash === "#contact-anchor") {
        setShowPolicy(false);
        setShowContact(true);
      } else {
        setShowPolicy(false);
        setShowContact(false);
      }
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const currentPath = window.location.pathname;

  if (currentPath !== "/" && currentPath !== "/NotFound") {
    return (
      <div className="container">
        <Header
          currentLanguage={currentLanguage}
          setCurrentLanguage={setCurrentLanguage}
        />
        <div className="main-404">
          <div className="main-404__container">
            <NotFound />
          </div>
        </div>
        <Footer/>
      </div>

    );
  }

  const translations = useContext(LangContext)

  const dataAboutSection = dataAboutSectionFunc(translations)

  return (
    <div className="container">
      <ScrollToTopButton />
      <Header
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
      />
      <>
        {showPolicy ? (
          <div className="main">
            <Policy  />
          </div>
        ) : showContact ? (
          <div className="main-404">
            <div className="main-404__container-contact">
              <Contact  />
            </div>
          </div>
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
                <Sliders />
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
