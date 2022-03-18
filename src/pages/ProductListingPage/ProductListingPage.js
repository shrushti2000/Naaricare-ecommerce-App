import React from 'react'
import '../../App.css'
import ProductCard from '../../components/ProductCard/ProductCard'
import Sidebar from '../../components/Sidebar/Sidebar'
import './ProductListingPage.css'

const ProductListingPage = () => {
  return (
    <>
     <div class="product-page-container">
      <Sidebar/>
      <div class="product-display-container">
        <h2 class="sub-heading">Showing all Products</h2>
        <div class="product-container">
         <ProductCard/>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductListingPage