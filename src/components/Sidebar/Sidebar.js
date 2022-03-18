import React from 'react'
import './Sidebar.css'

const Sidebar = () => {

  return (
    <>
      <div class="filter-sidebar flex-vt">
        <div class="filter-sidebar-items">
          <h3 class="filter-sidebar-heading">Filters</h3>
          <h5 class="filter-heading">Filter by price</h5>
          <div class="filter-container">
            <select name="price" class="price-filter">
              <option value="100-500" class="text-sm">under 500</option>
              <option value="500-1000" class="text-sm">500-1000</option>
              <option value="1000-2000" class="text-sm">1000-2000</option>
              <option value="2000" class="text-sm">2000 and above</option>
            </select>
          </div>
          <h5 class="filter-heading">Category</h5>
          <div class="filter-container">
            <label class="text-sm"> <input type="checkbox" />Make up</label>
            <label class="text-sm"> <input type="checkbox" />Skin Care</label>
            <label class="text-sm"> <input type="checkbox" />Body Care</label>
            <label class="text-sm"> <input type="checkbox" />Menstrual Hygiene</label>
            <label class="text-sm"> <input type="checkbox" />Hair Care</label>
          </div>
          <h5 class="filter-heading">Rating</h5>
          <div class="filter-container">
            <label class="text-sm"> <input name="rating" value="5" type="radio" /> 5 star</label>
            <label class="text-sm"> <input name="rating" value="4" type="radio" /> 4 star</label>
            <label class="text-sm"> <input name="rating" value="3" type="radio" /> 3 star</label>
            <label class="text-sm"> <input name="rating" value="2" type="radio" /> 2 star</label>
          </div>
          <h5 class="filter-heading">Sort by</h5>
          <div class="filter-container">
            <label class="text-sm"> <input type="radio" name="sortBy" value="low-to-high" />Low to High</label>
            <label class="text-sm"> <input value="high-to-low" name="sortBy" type="radio" /> High to Low</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar