import './NotFound.scss';
import '../../components/BackToHome/BackToHome.jsx';

import notfound from '../../assets/png/NotFound.png';
import BackToHome from '../BackToHome/BackToHome';

function NotFound({ translations }) {
    return (
        <section className='NotFound'>
            <div className='NotFound__wrapper'>
                <div className='NotFound__content-title'>
                    <h2>{translations.titleNotFound}</h2>
                </div>
                <div className='NotFound__content-img'>
                    <img src={notfound} alt="404" />
                </div>
                <div className='NotFound__content-button'>
                    <button onClick={BackToHome}>{translations.backToHome}</button>
                </div>
            </div>
        </section>
    )
}

export default NotFound;