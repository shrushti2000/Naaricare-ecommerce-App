import axios from 'axios'
import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../AuthProvider'
import { StateContext } from '../../Context'
import './ProductCard.css'

const ProductCard = ({item}) => {
  const encodedToken = localStorage.getItem("token")
  const {auth,setAuth}=useContext(AuthContext)
  const {state,dispatch}=useContext(StateContext)
  
  const addToCart = () => {
    console.log('under item',item)
    fetch("/api/user/cart", {
     method:"POST",
      body: JSON.stringify({product: item}),
      headers: {
        "authorization": encodedToken,
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
     
  }
 
  return (
    <div class="card__container flex-vt">
      <img class="card__image" src={item.img}  />
      <h3 class="card__title">{item.name}</h3>
      <p class="card__description">{item.desc}</p>
      <div class="card__text-wrapper-1 flex-hz">
        <p class="card__text-primary">₹ {item.price}</p>
        <p class="card__text-secondary">20% off</p>
      </div>
      <div class="card__text-wrapper-2">
        <span>{item.rating}</span>
        <span><i class="fa fa-star"></i></span>
      </div>
      <div class="card__footer flex-hz">
        <div><i class="fa fa-heart card__icon"></i></div>
        <button class="btn btn-primary card__btn-primary" onClick={addToCart}>ADD TO CART</button>
      </div>
    </div>
  )
}

export default ProductCard