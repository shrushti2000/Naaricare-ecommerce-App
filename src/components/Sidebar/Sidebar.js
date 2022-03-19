import React from 'react'
import { useContext } from 'react'
import { StateContext } from '../../Context'
import './Sidebar.css'

const Sidebar = () => {
  const { state, dispatch } = useContext(StateContext)

  return (
    <>
      <div class="filter-sidebar flex-vt">
        <div class="filter-sidebar-items">
          <div className='flex-hz jc-sb'>
            <h3 class="filter-sidebar-heading">Filters</h3><span onClick={(e) => dispatch({ type: 'CLEAR_ALL_FILTERS' })} className='text-sm clear-all'>Clear all</span>
          </div>

          <h5 class="filter-heading">Filter by price</h5>
          <div class="filter-container">
            <select name="price" value={state.priceRange} class="price-filter" onChange={(e) => dispatch({ type: 'SET_PRICE_RANGE', payload: e.target.value })}>
              <option value="0" class="text-sm" >Rs 0 and above</option>
              <option value="0-500" class="text-sm" >under Rs 500</option>
              <option value="500-1000" class="text-sm">Rs 500-Rs 1000</option>
              <option value="1000-2000" class="text-sm">Rs 1000-Rs 2000</option>
              <option value="2000" class="text-sm">Rs 2000 and above</option>
            </select>
          </div>
          <h5 class="filter-heading">Category</h5>
          <div class="filter-container">
            <label class="text-sm"> <input type="checkbox" name="category" checked={state.sortByFilters.sortByCategory.includes("Makeup")} onChange={(e) => dispatch({ type: 'SET_CATEGORY', payload: "Makeup" })} />Make up</label>
            <label class="text-sm"> <input type="checkbox" name="category" checked={state.sortByFilters.sortByCategory.includes("Skincare")} onChange={(e) => dispatch({ type: 'SET_CATEGORY', payload: "Skincare" })} />Skin Care</label>
            <label class="text-sm"> <input type="checkbox" name="category" checked={state.sortByFilters.sortByCategory.includes("Bodycare")} onChange={(e) => dispatch({ type: 'SET_CATEGORY', payload: "Bodycare" })} />Body Care</label>
            <label class="text-sm"> <input type="checkbox" name="category" checked={state.sortByFilters.sortByCategory.includes("MenstrualHygiene")} onChange={(e) => dispatch({ type: 'SET_CATEGORY', payload: "MenstrualHygiene" })} />Menstrual Hygiene</label>
            <label class="text-sm"> <input type="checkbox" name="category" checked={state.sortByFilters.sortByCategory.includes("Haircare")} onChange={(e) => dispatch({ type: 'SET_CATEGORY', payload: "Haircare" })} />Hair Care</label>
          </div>
          <h5 class="filter-heading">Rating</h5>
          <div class="filter-container">
            <label class="text-sm"> <input name="rating" value={state.rating} checked={state.rating && state.rating === 4} type="radio" onClick={(e) => dispatch({ type: 'SET_RATING', payload: 4 })} /> 4 stars and above</label>
            <label class="text-sm"> <input name="rating" value={state.rating} checked={state.rating && state.rating === 3} type="radio" onClick={(e) => dispatch({ type: 'SET_RATING', payload: 3 })} /> 3 stars and above</label>
            <label class="text-sm"> <input name="rating" value={state.rating} checked={state.rating && state.rating === 2} type="radio" onClick={(e) => dispatch({ type: 'SET_RATING', payload: 2 })} /> 2 stars and above</label>
            <label class="text-sm"> <input name="rating" value={state.rating} checked={state.rating && state.rating === 1} type="radio" onClick={(e) => dispatch({ type: 'SET_RATING', payload: 1 })} /> 1 star and above</label>
          </div>
          <h5 class="filter-heading">Sort by</h5>
          <div class="filter-container">
            <label class="text-sm"> <input type="radio" value={state.sortBy} checked={state.sortBy && state.sortBy === "low-to-high"} name="sortBy" onClick={() => dispatch({ type: 'SET_SORT_TYPE', payload: "low-to-high" })} />Low to High</label>
            <label class="text-sm"> <input value={state.sortBy} name="sortBy" checked={state.sortBy && state.sortBy === "high-to-low"} type="radio" onClick={() => dispatch({ type: 'SET_SORT_TYPE', payload: "high-to-low" })} /> High to Low</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar