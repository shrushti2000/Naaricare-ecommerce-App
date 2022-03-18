import React from 'react'
import './Searchbar.css'

const Searchbar = () => {
  return (
    <>
      <div className="searchbar-container">
        <label className="searchbar">
          <span><i class="fa fa-search"></i></span>
          <input type="text" class="search-input" placeholder="search.." />
        </label>
      </div>

    </>
  )
}

export default Searchbar