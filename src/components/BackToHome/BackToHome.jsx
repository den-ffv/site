import React, {useState, useEffect, useContext} from 'react';
import './BackToHome.scss'
import arrow from '../../assets/png/btnToHome.png';
import { LangContext } from '../../App';

function BackToHome () {

    const translations = useContext(LangContext) 
        return (
            <div className='Frame'>
                <button 
                className='Button'
                onClick={() => {
                    window.location.href = '/';
                }}>
                    <div className='Button-text'>
                        <img className='Button-img' src={arrow} alt="Arrow"/>
                        {translations.backToHome}
                    </div>
                </button>
            </div>
        );
}

export default BackToHome;