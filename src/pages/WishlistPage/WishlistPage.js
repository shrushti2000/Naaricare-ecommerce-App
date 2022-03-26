import React from 'react'
import { useContext,useEffect } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { StateContext } from '../../Context';
import './WishlistPage.css';

const WishlistPage = () => {
    const {state,dispatch}=useContext(StateContext)
    const encodedToken = localStorage.getItem('token')
   
  return (
    <>
     <div class="product-display-container">
        <h2 class="sub-heading">My WishList</h2>
        <div class="product-container">
           {state.wishlist.map(item=><ProductCard item={item}/>)}
           
        </div>
    </div>
    </>
  )
}

export default WishlistPage