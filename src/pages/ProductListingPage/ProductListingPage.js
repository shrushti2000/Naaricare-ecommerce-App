import React from 'react'
import { useContext, useEffect } from 'react'
import '../../App.css'
import AuthProvider from '../../AuthProvider'
import ProductCard from '../../components/ProductCard/ProductCard'
import Sidebar from '../../components/Sidebar/Sidebar'
import { StateContext } from '../../Context'
import { getFilteredData, getPriceRangedData, getRatingSortedData, getSortedData } from '../../utilityFunctions'
import './ProductListingPage.css'

const ProductListingPage = () => {
  const { state, dispatch } = useContext(StateContext)
  
  const sortedData = getSortedData(state.products, state.sortBy)
  const priceRangedData = getPriceRangedData(sortedData, state.priceRange)
  const ratingSortedData = getRatingSortedData(priceRangedData, state.rating)
  const filteredData = getFilteredData(ratingSortedData, state, dispatch)

  return (
    <>

      <div class="product-page-container">
        <Sidebar />
        <div class="product-display-container">
          {filteredData.length === 0 ? <> <h2 class="sub-heading">No products found!</h2></> : <> <h2 class="sub-heading">Showing all Products</h2>
            <div class="product-container">
              {filteredData.map(item => <ProductCard item={item} />)}
            </div></>}

        </div>
      </div>
    </>
  )
}

export default ProductListingPage