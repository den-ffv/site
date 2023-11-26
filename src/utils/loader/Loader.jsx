import React, {useEffect, useRef} from 'react'
import loader from '../../assets/loader.svg'
import './Loader.scss'

export const Loader = () => {
    
    return (
        <div className='loader-wrapper'>
            <img src={loader} alt="loader" />
        </div>
    )
}
