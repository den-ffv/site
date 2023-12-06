import './NotFound.scss';
import '../../components/BackToHome/BackToHome.jsx';

import notfound from '../../assets/png/NotFound.png';
import BackToHome from '../BackToHome/BackToHome';
import { LangContext } from '../../App.jsx';
import { useContext } from 'react';

function NotFound() {
    const translations = useContext(LangContext)
    return (
        <section className='NotFound'>
            <div className='NotFound__wrapper'>
                <h3 className='NotFound__title' data-aos='zoom-in' >{translations.titleNotFound}</h3>
                <div className='NotFound__img' data-aos='zoom-in' >                    
                    <img className='NotFound__img-img' src={notfound} alt="404" />
                </div>
                <div className='NotFound__button' data-aos='zoom-out-up' >
                    <BackToHome translations={translations}/>
                </div>
            </div>
        </section>
    )
}

export default NotFound;