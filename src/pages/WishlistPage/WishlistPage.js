import React from 'react'
import './WishlistPage.css';

const WishlistPage = () => {
  return (
    <>
     <div class="product-display-container">
        <h2 class="sub-heading">My WishList</h2>
        <div class="product-container">
            <div class="card__container flex-vt">
                <img class="card__image" src="../../images/prd-img.jpg" />
                <h3 class="card__title">Olay Cream</h3>
                <p class="card__description">
                    Lakme Absolute Perfect Radiance Brightening Day Cream 50 g, SPF
                    30, Daily Illuminating Face Moisturizer for Glowing Skin - With
                    Glycerin & Niacinamide
                </p>
                <div class="card__text-wrapper-1 flex-hz">
                    <p class="card__text-primary">₹ 639</p>
                    <p class="card__text-secondary">20% off</p>
                </div>
                <div class="card__text-wrapper-2">
                    <span>4.4</span>
                    <span><i class="fa fa-star"></i></span>
                </div>
                <div class="card__footer flex-hz">
                    <div><i class="fa fa-heart card__icon card-icon-wishlist"></i></div>
                    <button class="btn btn-primary card__btn-primary">
                        ADD TO CART
                    </button>
                </div>
            </div>
           
        </div>
    </div>
    </>
  )
}

export default WishlistPage