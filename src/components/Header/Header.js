import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { StateContext } from '../../Context'
import Searchbar from '../Searchbar/Searchbar'
import './Header.css'

const Header = () => {
  const {state}=useContext(StateContext)
  
  return (
    <>
      <div class="navigation-container flex-hz">
        <div class="navigation-item-1">
          <h5 class="lib-name-1">Naari <span class="lib-name-2">Care</span></h5>
        </div>
        <i class="fa fa-bars"></i>
        <Searchbar />
        <div class="navigation-item-3 flex-hz">
          <Link to="/signin"> <button class="btn btn-primary">Login</button></Link>
          <Link to="/cartpage"><i className="fa fa-shopping-cart"><span class="badge-w-icon">{state.cart.length}</span></i></Link>
          <Link to="/wishlistpage" ><i class="fa fa-heart"><span class="badge-w-icon">{state.wishlist.length}</span></i></Link>
          <i class="fa fa-search search-icon-responsive"></i>
        </div>
      </div>
    </>
  )
}

export default Header