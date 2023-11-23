import React, {useState, useEffect, useRef} from "react";
import './BackToHome.scss'
import arrow from '../../assets/png/btnToHome.png';

function BackToHome () {
    const [isBack, setIsBack] = useState(false);
    const buttonRef = useRef();

    useEffect(() => {
        if (isBack) {
            window.location.href = '/';
        }
    }, [isBack]);


    return (    
        <img src={arrow} alt="Arrow"/>,
        <button onClick={() => setIsBack(true)} ref={buttonRef}>{}</button>
    );
}
 
export default BackToHome;