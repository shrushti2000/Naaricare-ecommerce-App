import React from 'react'
import { useContext, useEffect } from 'react'
import { useRef } from 'react'
import '../../App.css'
import { Sidebar, ProductCard } from '../../components/index'
import { StateContext } from '../../Context'
import { getFilteredData, getPriceRangedData, getRatingSortedData, getSortedData } from '../../Services/utilityFunctions'
import './ProductListingPage.css'


const ProductListingPage = () => {
  const topContainer = useRef();
  const { state, dispatch } = useContext(StateContext)
  const sortedData = getSortedData(state.products, state.sortBy)
  const priceRangedData = getPriceRangedData(sortedData, state.priceRange)
  const ratingSortedData = getRatingSortedData(priceRangedData, state.rating)
  const filteredData = getFilteredData(ratingSortedData, state, dispatch)
  useEffect(() => {
    // To make sure page starts from the top
    topContainer.current.scrollIntoView({ block: "end", behavior: 'smooth' });
  }, []);


  return (
    <>

      <div ref={topContainer} />
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

export { ProductListingPage }