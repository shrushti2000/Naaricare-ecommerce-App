import React from 'react'
import { Link } from 'react-router-dom'
import Searchbar from '../Searchbar/Searchbar'
import './Header.css'

const Header = () => {
  return (
    <>
      <div class="navigation-container flex-hz">
        <div class="navigation-item-1">
          <h5 class="lib-name-1">Naari <span class="lib-name-2">Care</span></h5>
        </div>
        <i class="fa fa-bars"></i>
        <Searchbar />
        <div class="navigation-item-3 flex-hz">
          <Link className='links' to="/signup"><button class="btn btn-primary">Signup</button></Link>
          <Link className='links' to="/signin"><button class="btn btn-primary">Signin</button></Link>
         <Link className='links' to="/cartPage"><i className="fa fa-shopping-cart"><span class="badge-w-icon">1</span></i></Link> 
          <i class="fa fa-heart"><span class="badge-w-icon">10</span></i>
          <i class="fa fa-search search-icon-responsive"></i>
        </div>
      </div>
    </>
  )
}

export default Header