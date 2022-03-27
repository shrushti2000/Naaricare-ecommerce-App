import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { calculateFinalCartPrice, findPriceOfAllItems, findTotalDiscount, removeFromCart, updateProductQty } from '../../CartServices'
import { StateContext } from '../../Context'
import { addToWishlist, handleAddToWishlist } from '../../WishlistServices'
import './CartPage.css'

const CartPage = () => {
  const encodedToken = localStorage.getItem('token')
  const { state, dispatch } = useContext(StateContext)
  const totalPrice = findPriceOfAllItems(state.cart)
  const totalDiscount = findTotalDiscount(state.cart)
  const finalCartPrice = calculateFinalCartPrice(totalPrice, totalDiscount, 50)

   return (
   <>
      <h5 class="sub-heading">My Cart</h5>
      <div class="cart-page-container">
        <div class="cart-items-display">

          {state.cart.map(item => {
            return (
              <>
                <div class="card__container card-horizontal flex-hz">
                  <img class="card__image img-hz" src={item.img} />
                  <div class="card-horizontal-column flex-vt flex-wrap">
                    <h3 class="card__title">{item.name}</h3>
                    <p class="card__description">
                      {item.desc}
                    </p>
                    <div class="card__text-wrapper-1 flex-hz">
                      <p class="card__text-primary">₹ {item.price}</p>
                      <p class="card__text-secondary">{item.discount}% off</p>
                    </div>
                    <div class="card__text-wrapper-1 flex-hz">
                      <p class="card__text-primary">Quantity : </p>
                      <span class="flex-hz"><i class="fa fa-plus card-icon-plus" onClick={(e) => updateProductQty(item._id, encodedToken, dispatch, "increment")}></i>
                        <p class="card-text">{item.qty}</p>
                        <i class="fa fa-minus card-icon-plus" onClick={(e) => item.qty > 1 && updateProductQty(item._id, encodedToken, dispatch, "decrement")}></i>
                      </span>
                    </div>
                    <div class="card-footer flex-hz">
                      <button class="btn btn-primary card__btn-primary" onClick={() => handleAddToWishlist(state.wishlist, item, encodedToken,dispatch)}>
                        ADD TO WISHLIST
                      </button>
                      <button class="btn btn-outline-primary card__btn-secondary" onClick={(e) => removeFromCart(item._id, encodedToken, dispatch)}>
                        REMOVE FROM CART
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
        <div class="cart-summary-container">
          <h4 class="font-weight-bold">PRICE DETAILS</h4>
          <div class="price-wrapper flex-hz">
            <p class="text-sm">Price </p>
            <p class="text-sm">Rs {totalPrice} </p>
          </div>
          <div class="price-wrapper flex-hz">
            <p class="text-sm">Discount</p>
            <p class="text-sm">- Rs {totalDiscount}</p>
          </div>
          <div class="price-wrapper flex-hz">
            <p class="text-sm">Delivery Charges</p>
            <p class="text-sm">Rs 50</p>
          </div>
          <div class="price-wrapper flex-hz">
            <h4 class="font-weight-bold">TOTAL AMOUNT</h4>
            <p class="text-sm">Rs {finalCartPrice}</p>
          </div>
          <p class="text-sm">You will save Rs 1999 on this order</p>
          <button class="btn btn-primary">PLACE ORDER</button>
        </div>
      </div>
    </>
  )
}

export default CartPage