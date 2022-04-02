import { faCircleQuestion, faGift, faHandsHelping, faLocation, faLocationArrow, faLocationDot, faLocationPin, faLocationPinLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './TopBar.css'

const TopBar = () => {
  return (
    <div className='top-bar'>
        <p className='top-bar-item topbar-sale-title'>NaariCare's Pink Friday Sale!!!</p>
        <div className='top-bar-wrapper'>
           <p className='top-bar-item'> <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>  Store & Events  | </p>
            <p className='top-bar-item'><FontAwesomeIcon icon={faGift}></FontAwesomeIcon>  Gift card  | </p>
            <p className='top-bar-item'><FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon> Help </p>
        </div>
    </div>
  )
}

export default TopBar