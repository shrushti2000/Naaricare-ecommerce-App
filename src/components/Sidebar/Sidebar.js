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
          <h5 class="filter-heading">Sort by</h5>
          <div class="filter-container">
            <label class="text-sm"> <input type="radio" value={state.sortBy} checked={state.sortBy && state.sortBy === "low-to-high"} name="sortBy" onClick={() => dispatch({ type: 'SET_SORT_TYPE', payload: "low-to-high" })} />Low to High</label>
            <label class="text-sm"> <input value={state.sortBy} name="sortBy" checked={state.sortBy && state.sortBy === "high-to-low"} type="radio" onClick={() => dispatch({ type: 'SET_SORT_TYPE', payload: "high-to-low" })} /> High to Low</label>
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
            <label class="text-sm"> <input type="checkbox" name="category" checked={state.sortByFilters.sortByCategory.includes("Makeup")} onChange={(e) => dispatch({ type: 'SET_CATEGORY', payload: "Makeup" }, dispatch({ type: 'SET_SUB_CATEGORY', payload: null }),dispatch({ type: 'SET_TAG', payload: null }))} />Make up</label>
            <label class="text-sm"> <input type="checkbox" name="category" checked={state.sortByFilters.sortByCategory.includes("Skincare")} onChange={(e) => dispatch({ type: 'SET_CATEGORY', payload: "Skincare" }, dispatch({ type: 'SET_SUB_CATEGORY', payload: null }),dispatch({ type: 'SET_SUB_CATEGORY', payload: null }),dispatch({ type: 'SET_TAG', payload: null }))} />Skin Care</label>
            <label class="text-sm"> <input type="checkbox" name="category" checked={state.sortByFilters.sortByCategory.includes("Bodycare")} onChange={(e) => dispatch({ type: 'SET_CATEGORY', payload: "Bodycare" }, dispatch({ type: 'SET_SUB_CATEGORY', payload: null }),dispatch({ type: 'SET_SUB_CATEGORY', payload: null }),dispatch({ type: 'SET_TAG', payload: null }))} />Body Care</label>
            <label class="text-sm"> <input type="checkbox" name="category" checked={state.sortByFilters.sortByCategory.includes("MenstrualHygiene")} onChange={(e) => dispatch({ type: 'SET_CATEGORY', payload: "MenstrualHygiene" }, dispatch({ type: 'SET_SUB_CATEGORY', payload: null }),dispatch({ type: 'SET_SUB_CATEGORY', payload: null }),dispatch({ type: 'SET_TAG', payload: null }))} />Menstrual Hygiene</label>
            <label class="text-sm"> <input type="checkbox" name="category" checked={state.sortByFilters.sortByCategory.includes("Haircare")} onChange={(e) => dispatch({ type: 'SET_CATEGORY', payload: "Haircare" }, dispatch({ type: 'SET_SUB_CATEGORY', payload: null }),dispatch({ type: 'SET_SUB_CATEGORY', payload: null }),dispatch({ type: 'SET_TAG', payload: null }))} />Hair Care</label>
          </div>
          <h5 class="filter-heading">Brands</h5>
          <div class="filter-container">
            <label class="text-sm"> <input type="checkbox" name="category" checked={state.sortByFilters.sortByBrands.includes("Maybelline")} onChange={(e) => dispatch({ type: 'SET_BRAND', payload: "Maybelline" }, dispatch({ type: 'SET_SUB_CATEGORY', payload: null }),dispatch({ type: 'SET_SUB_CATEGORY', payload: null }))} />Maybelline</label>
            <label class="text-sm"> <input type="checkbox" name="category" checked={state.sortByFilters.sortByBrands.includes("L'Oreal")} onChange={(e) => dispatch({ type: 'SET_BRAND', payload: "L'Oreal" }, dispatch({ type: 'SET_SUB_CATEGORY', payload: null }),dispatch({ type: 'SET_SUB_CATEGORY', payload: null }))} />L'Oreal</label>
            <label class="text-sm"> <input type="checkbox" name="category" checked={state.sortByFilters.sortByBrands.includes("Lakme")} onChange={(e) => dispatch({ type: 'SET_BRAND', payload: "Lakme" }, dispatch({ type: 'SET_SUB_CATEGORY', payload: null }),dispatch({ type: 'SET_SUB_CATEGORY', payload: null }))} />Lakme</label>
            <label class="text-sm"> <input type="checkbox" name="category" checked={state.sortByFilters.sortByBrands.includes("Wow")} onChange={(e) => dispatch({ type: 'SET_BRAND', payload: "Wow" }, dispatch({ type: 'SET_SUB_CATEGORY', payload: null }),dispatch({ type: 'SET_SUB_CATEGORY', payload: null }))} />Wow</label>
            <label class="text-sm"> <input type="checkbox" name="category" checked={state.sortByFilters.sortByBrands.includes("Himalaya")} onChange={(e) => dispatch({ type: 'SET_BRAND', payload: "Himalaya" }, dispatch({ type: 'SET_SUB_CATEGORY', payload: null }),dispatch({ type: 'SET_SUB_CATEGORY', payload: null }))} />Himalaya</label>
            <label class="text-sm"> <input type="checkbox" name="category" checked={state.sortByFilters.sortByBrands.includes("Nivea")} onChange={(e) => dispatch({ type: 'SET_BRAND', payload: "Nivea" }, dispatch({ type: 'SET_SUB_CATEGORY', payload: null }),dispatch({ type: 'SET_SUB_CATEGORY', payload: null }))} />Nivea</label>
            <label class="text-sm"> <input type="checkbox" name="category" checked={state.sortByFilters.sortByBrands.includes("Sugar")} onChange={(e) => dispatch({ type: 'SET_BRAND', payload: "Sugar" }, dispatch({ type: 'SET_SUB_CATEGORY', payload: null }),dispatch({ type: 'SET_SUB_CATEGORY', payload: null }))} />Sugar</label>
            <label class="text-sm"> <input type="checkbox" name="category" checked={state.sortByFilters.sortByBrands.includes("POND'S")} onChange={(e) => dispatch({ type: 'SET_BRAND', payload: "POND'S" }, dispatch({ type: 'SET_SUB_CATEGORY', payload: null }),dispatch({ type: 'SET_SUB_CATEGORY', payload: null }))} />POND'S</label>
            <label class="text-sm"> <input type="checkbox" name="category" checked={state.sortByFilters.sortByBrands.includes("Mamaearth")} onChange={(e) => dispatch({ type: 'SET_BRAND', payload: "Mamaearth" }, dispatch({ type: 'SET_SUB_CATEGORY', payload: null }),dispatch({ type: 'SET_SUB_CATEGORY', payload: null }))} />Mamaearth</label>
            <label class="text-sm"> <input type="checkbox" name="category" checked={state.sortByFilters.sortByBrands.includes("Whisper")} onChange={(e) => dispatch({ type: 'SET_BRAND', payload: "Whisper" }, dispatch({ type: 'SET_SUB_CATEGORY', payload: null }),dispatch({ type: 'SET_SUB_CATEGORY', payload: null }))} />Whisper</label>
            <label class="text-sm"> <input type="checkbox" name="category" checked={state.sortByFilters.sortByBrands.includes("Stayfree")} onChange={(e) => dispatch({ type: 'SET_BRAND', payload: "Stayfree" }, dispatch({ type: 'SET_SUB_CATEGORY', payload: null }),dispatch({ type: 'SET_SUB_CATEGORY', payload: null }))} />Stayfree</label>

          </div>
          <h5 class="filter-heading">Rating</h5>
          <div class="filter-container">
            <label class="text-sm"> <input name="rating" value={state.rating} checked={state.rating && state.rating === 4} type="radio" onClick={(e) => dispatch({ type: 'SET_RATING', payload: 4 })} /> 4 stars and above</label>
            <label class="text-sm"> <input name="rating" value={state.rating} checked={state.rating && state.rating === 3} type="radio" onClick={(e) => dispatch({ type: 'SET_RATING', payload: 3 })} /> 3 stars and above</label>
            <label class="text-sm"> <input name="rating" value={state.rating} checked={state.rating && state.rating === 2} type="radio" onClick={(e) => dispatch({ type: 'SET_RATING', payload: 2 })} /> 2 stars and above</label>
            <label class="text-sm"> <input name="rating" value={state.rating} checked={state.rating && state.rating === 1} type="radio" onClick={(e) => dispatch({ type: 'SET_RATING', payload: 1 })} /> 1 star and above</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default Sidebar