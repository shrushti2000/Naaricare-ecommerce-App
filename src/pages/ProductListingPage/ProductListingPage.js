import React from 'react'
import { useContext, useEffect } from 'react'
import '../../App.css'
import ProductCard from '../../components/ProductCard/ProductCard'
import Sidebar from '../../components/Sidebar/Sidebar'
import { StateContext } from '../../Context'
import { getFilteredData, getPriceRangedData, getSortedData } from '../../utilityFunctions'
import './ProductListingPage.css'

const ProductListingPage = () => {
  const { state, dispatch } = useContext(StateContext)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/products', { method: "GET" })
        const data = await res.json()
        dispatch({ type: 'SET_PRODUCTS', payload: data.products })
      } catch (e) {
        console.log(e)
      }
    };
    fetchData();
  }, [])
  const sortedData = getSortedData(state.products, state.sortBy)
  const priceRangedData = getPriceRangedData(sortedData, state.priceRange)
  const filteredData = getFilteredData(priceRangedData, state)
  return (
    <>
      <div class="product-page-container">
        <Sidebar />
        <div class="product-display-container">
          <h2 class="sub-heading">Showing all Products</h2>
          <div class="product-container">
            {filteredData.map(item => <ProductCard item={item} />)}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductListingPage