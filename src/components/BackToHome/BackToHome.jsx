import React, {useState, useEffect} from 'react';
import './BackToHome.scss'
import arrow from '../../assets/png/btnToHome.png';

function BackToHome ({ translations }) {

    return (
        <div className='Frame'>
            <button 
            className='Button'
            onClick={() => {
                window.location.href = '/';
            }}>
                <img className='Button-img' src={arrow} alt="Arrow"/>
                <div className='Button-text'>{translations.backToHome}</div>
                <div className={'Button-underLine'} />
            </button>
        </div>
    );
}

export default BackToHome;