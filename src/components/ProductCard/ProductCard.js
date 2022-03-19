import React from 'react'

const ProductCard = ({item}) => {
  
  return (
    <div class="card__container flex-vt">
      <img class="card__image" src={item.img} style={{ height: "200px"}} />
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
        <button class="btn btn-primary card__btn-primary">ADD TO CART</button>
      </div>
    </div>
  )
}

export default ProductCard