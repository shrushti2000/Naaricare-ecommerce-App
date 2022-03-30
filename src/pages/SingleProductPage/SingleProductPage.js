import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { addToCart } from '../../CartServices'
import { useContext } from 'react'
import { StateContext } from '../../Context'
import { AuthContext } from '../../AuthProvider'
import './SingleProductPage.css'

const SingleProductPage = () => {

  const { productId } = useParams()
  const [productItem, setProductItem] = useState({})
  const { state, dispatch } = useContext(StateContext)
  const { token } = useContext(AuthContext)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`/api/products/${productId}`, { method: "GET" })
        const data = await res.json()
        setProductItem(data.product)
      } catch (e) {
        console.log(e)
      }
    };
    fetchData();
  }, [productId])
  const handleAddTOCart = () => {
    const isItemPresent = state.cart.find(item => item._id === productId)
    console.log(isItemPresent)
    { isItemPresent === undefined && addToCart(productItem, token, dispatch) }
  }
  return (
    <>
      <div className='singleProductPage-container flex-hz'>
        <img className='singleProductPage-img' src={productItem.img}></img>
        <div className='singleProductPage-wrapper flex-vt'>
          <h2 className='singleProductPage-title'>{productItem.name}</h2>
          <div class="card__text-wrapper-2 singleProductPage-rating">
            <span>{productItem.rating}</span>
            <span><i class="fa fa-star"></i></span>
          </div>
          <h5 className='singleProductPage-desc'>{productItem.desc}</h5>
          <h5 className='singleProductPage-info'>{productItem.info}</h5>
          <span> <h5 className='singleProductPage-price'>MRP: Rs {productItem.price}</h5> <h5 className='singleProductPage-discount'> {productItem.discount} % off</h5></span>
          <button class="btn btn-primary card__btn-primary singleProductPage-btn" onClick={handleAddTOCart}>add to cart</button>
        </div>
      </div>

    </>
  )
}

export default SingleProductPage