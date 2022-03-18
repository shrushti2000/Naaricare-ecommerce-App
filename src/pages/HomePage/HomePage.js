import React from 'react'
import SubHeader from '../../components/SubHeader/SubHeader'
import Carousel from '../../components/Carousel/Carousel'
import categoryImage1 from '../../assets/Images/skincare-2.jpg'
import categoryImage2 from '../../assets/Images/tampons.jpg'
import categoryImage3 from '../../assets/Images/makeup-img-2.jpg'
import categoryImage4 from '../../assets/Images/hair-care-img.jpg'
import categoryImage5 from '../../assets/Images/body-care-img.jpg'
import brandImage1 from '../../assets/Images/loreal_logo.jpg'
import brandImage2 from '../../assets/Images/lakme_logo.jpg'
import brandImage4 from '../../assets/Images/maybelline_logo.png'
import brandImage5 from '../../assets/Images/Wishper_logo.png'
import offerImage1 from '../../assets/Images/offerImage1.jpg'
import offerImage2 from '../../assets/Images/offerImage2.jpg'
import { Link } from 'react-router-dom'
import './HomePage.css'
import Footer from '../../components/Footer/Footer'

const HomePage = () => {
  return (
    <>

      <SubHeader />
      <Carousel />
      <h5 className='sub-heading'>Categories for you</h5>
      <div class="featured-category-section flex-hz flex-wrap">
        <Link to="/productlistingpage" className='links'  >
          <div class="category">
            <img class="category-img img-responsive" src={categoryImage1} alt="skincare-category-img" />
            <div className='category-text'> <h5 class="category-title-text">Skin Care</h5><p className='category-text-secondary'>Pamper your skin with us at most affordable prices!</p></div>
          </div>
        </Link>
        <Link to="/productlistingpage" className='links' >
          <div class="category">
            <img class="category-img img-responsive" src={categoryImage3} alt="makeup-category-img" />
            <div className='category-text'> <h5 class="category-title-text">Makeup</h5><p className='category-text-secondary'>Get a fresh look that lasts whole day with our makeup products at most affordable prices!</p></div>
          </div>
        </Link>
        <Link to="/productlistingpage" className='links' >
          <div class="category">
            <img class="category-img img-responsive" src={categoryImage4} alt="haircare-category-img" />
            <div className='category-text'><h5 class="category-title-text">Hair Care</h5><p className='category-text-secondary'>Buy hair care products now on Naaricare at great deals!</p></div>
          </div>
        </Link>
        <Link to="/productlistingpage" className='links' >
          <div class="category">
            <img class="category-img img-responsive" src={categoryImage5} alt="bodycare-category-img"/>
            <div className='category-text'> <h5 class="category-title-text">Body care</h5><p className='category-text-secondary'>We bring bodycare products at best prices.</p></div>
          </div>
        </Link>
        <Link to="/productlistingpage" className='links' >
          <div class="category">
            <img class="category-img img-responsive" src={categoryImage2} alt="menstrual-hygiene-category-img"/>
            <div className='category-text'> <h5 class="category-title-text">Menstrual Hygiene</h5><p className='category-text-secondary'>Buy Menstrual Hygiene care products at most affordable prices now.</p></div>
          </div>
        </Link>
      </div>
      <h5 className='sub-heading'>Offers you won't miss!</h5>
      <div className='offers-section'>
        <img className="offer-img" src={offerImage1} alt="offer-img-1"/>
        <img className="offer-img" src={offerImage2} alt="offer-img-2"/>
      </div>
      <h3 className='sub-heading'>Featured Brands</h3>
      <div className='brands-section'>
        <img className='brand-img' src={brandImage1} alt="brand-img"/>
        <img className='brand-img' src={brandImage2} alt="brand-img"/>
        <img className='brand-img' src={brandImage4} alt="brand-img"/>
        <img className='brand-img' src={brandImage5} alt="brand-img"/>
      </div>
      <Footer />
    </>
  )
}

export default HomePage