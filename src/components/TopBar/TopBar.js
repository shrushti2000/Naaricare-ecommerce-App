import React from 'react'
import './TopBar.css'

const TopBar = () => {
  return (
    <div className='top-bar'>
        <p className='top-bar-item topbar-sale-title'>NaariCare's Pink Friday Sale!!!</p>
        <div className='top-bar-wrapper'>
           <p className='top-bar-item'> Store & Events  | </p>
            <p className='top-bar-item'> Gift card  | </p>
            <p className='top-bar-item'> Help </p>
        </div>
    </div>
  )
}

export default TopBar