import React from 'react'

const ProductCard = () => {
  
  return (
    <div class="card__container flex-vt" >
      <img class="card__image" src="https://m.media-amazon.com/images/I/51pq8ejNMnL._SX522_.jpg" style={{ height: "300px" }} />
      <h3 class="card__title">vjfvasj</h3>
      <p class="card__description">dhfjash</p>
      <div class="card__text-wrapper-1 flex-hz">
        <p class="card__text-primary">₹ bsjfdab</p>
        <p class="card__text-secondary">20% off</p>
      </div>
      <div class="card__text-wrapper-2">
        <span>4.4</span>
        <span><i class="fa fa-star"></i></span>
      </div>
      <div class="card__footer flex-hz">
        <div><i class="fa fa-heart card__icon"></i></div>
        <button class="btn btn-primary card__btn-primary">ADD TO CART</button>
      </div>
    </div>
  )
}

export default ProductCard