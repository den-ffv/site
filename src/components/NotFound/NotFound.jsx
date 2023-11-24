import './NotFound.scss';
import '../../components/BackToHome/BackToHome.jsx';

import notfound from '../../assets/png/NotFound.png';
import BackToHome from '../BackToHome/BackToHome';

function NotFound({ translations }) {
    return (
        <section className='NotFound'>
            <div className='NotFound__wrapper'>
                <h2 className='NotFound-title' data-aos='zoom-in' >{translations.titleNotFound}</h2>
                <div className='NotFound-img' data-aos='zoom-in' >                    
                    <img className='img' src={notfound} alt="404" />
                </div>
                <div className='NotFound-button' data-aos='zoom-out-up' >
                    <BackToHome translations={translations}/>
                </div>
            </div>
        </section>
    )
}

export default NotFound;