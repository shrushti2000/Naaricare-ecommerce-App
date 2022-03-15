import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <>
    <div class="navigation-container flex-hz">
      <div class="navigation-item-1">
          <h5 class="lib-name-1">Adorn <span class="lib-name-2">UI</span></h5>
      </div>
      <i class="fa fa-bars"></i>
      <div class="navigation-item-2">
          <label class="search-bar">
              <span><i class="fa fa-search"></i></span>
              <input type="text" class="search-input" placeholder="search.." />
          </label>
      </div>
      <div class="navigation-item-3 flex-hz">
          <button class="btn btn-primary">Login</button>
          <i class="fa fa-shopping-cart"><span class="badge-w-icon">1</span></i>
          <i class="fa fa-heart"><span class="badge-w-icon">10</span></i>
          <i class="fa fa-search search-icon-responsive"></i>
      </div>
  </div>
    </>
  )
}

export default Header