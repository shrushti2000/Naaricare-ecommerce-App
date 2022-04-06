import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import  { AuthContext } from '../../AuthProvider';
import { addToCart, updateProductQty } from '../../CartServices'
import { StateContext } from '../../Context'
import { handleAddToWishlist, removeFromWishlist } from '../../WishlistServices';

import './ProductCard.css'

const ProductCard = ({ item }) => {
  const { token } = useContext(AuthContext)
  console.log(token)
  const { state, dispatch } = useContext(StateContext)
  let navigate = useNavigate();
  const [cartButtonText, setCartButtonText] = useState('ADD TO CART')
  const [heartColor, setHeartColor] = useState('#F3C5C5')
  const handleAddTOCart = () => {
    const isItemPresent = state.cart.find(itemInCart => itemInCart._id === item._id)

    if (cartButtonText === "ADD TO CART") {
      if (token === undefined) {
        navigate('/signin')
      } else {
        if (isItemPresent === undefined) {
          addToCart(item, token, dispatch)
          setCartButtonText('GO TO CART')
        } else {
          const isItemPresentInWishList = state.wishlist.find(itemInWishlist => itemInWishlist._id === item._id)
          if (isItemPresentInWishList !== undefined) {
            updateProductQty(item._id, token, dispatch, "increment")
          }
          setCartButtonText("GO TO CART")
        }
      }
    } else {
      navigate('/cartpage')
    }
  }

  const openSingleProductPage = (e) => {
    console.log(e.target.className)
    if (e.target.className !== "btn btn-primary card__btn-primary" && e.target.className !== "fa fa-heart card__icon") {
      navigate(`/product/${item._id}`)
    }

  }

  return (
    <div class="card__container flex-vt" onClick={openSingleProductPage}>
      <img class="card__image" src={item.img} />
      <h3 class="card__title">{item.name}</h3>
      <p class="card__description">{item.desc}</p>
      <div class="card__text-wrapper-1 flex-hz">
        <p class="card__text-primary">₹ {item.price}</p>
        <p class="card__text-secondary">{item.discount}% off</p>
      </div>
      <div class="card__text-wrapper-2">
        <span>{item.rating}</span>
        <span><i class="fa fa-star"></i></span>
      </div>
      <div class="card__footer flex-hz">

        {state.wishlist.includes(item) ? <>  <div><button class="btn btn-primary card__btn-primary" onClick={() => removeFromWishlist(item._id, token, dispatch)}>Remove</button></div></> : <>  <div><i style={{ color: `${heartColor}` }} class="fa fa-heart card__icon" onClick={() => handleAddToWishlist(state.wishlist, item, token, dispatch, navigate)}></i></div></>}

        <button class="btn btn-primary card__btn-primary" onClick={handleAddTOCart}>{cartButtonText}</button>
      </div>
    </div>
  )
}

export { ProductCard }


