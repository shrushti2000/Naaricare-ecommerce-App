import React from 'react'
import { useContext, useEffect } from 'react'
import '../../App.css'
import ProductCard from '../../components/ProductCard/ProductCard'
import Sidebar from '../../components/Sidebar/Sidebar'
import { StateContext } from '../../Context'
import './ProductListingPage.css'

const ProductListingPage = () => {
  const {state,dispatch}=useContext(StateContext)
 
  useEffect(()=>{
    async function fetchData(){
      try{
        const res=await fetch('/api/products',{method:"GET"})
        const data=await res.json()
        dispatch({type:'SET_PRODUCTS',payload:data.products})
      }catch(e){
        console.log(e)
      }
    };
     fetchData();
  },[])
  return (
    <>
     <div class="product-page-container">
      <Sidebar/>
      <div class="product-display-container">
        <h2 class="sub-heading">Showing all Products</h2>
        <div class="product-container">
         
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductListingPage