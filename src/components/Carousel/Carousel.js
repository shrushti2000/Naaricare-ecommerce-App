import React, { useEffect, useState } from 'react'
import './Carousel.css'
import CarouselImage1 from '../../assets/Images/CarouselImage0.jpg'
import CarouselImage2 from '../../assets/Images/carouselImage3.jpg'
import CarouselImage3 from '../../assets/Images/CarouselImage6.jpg'
import CarouselImage4 from '../../assets/Images/CarouselImage5.jpg'
import CarouselImage5 from '../../assets/Images/CarouselImage4.jpg'

const Carousel = () => {
  const slides = [
    CarouselImage1, CarouselImage2, CarouselImage3, CarouselImage4, CarouselImage5
  ]
  const [sliderCount, setSliderCount] = useState(0);

  const nextSlide = () => {
    if (sliderCount !== slides.length - 1) {
      setSliderCount(sliderCount + 1)
    } else {
      setSliderCount(0)
    }
  }

  const prevSlide = () => {
    if (sliderCount !== 0) {
      setSliderCount(sliderCount - 1)
    } else {
      setSliderCount(slides.length - 1)
    }
  }

  return (
    <div className='carousel'>
      <div className='carousel-container' style={{ backgroundImage: `url(${slides[sliderCount]})` }}>
        <i className="fa fa-angle-left fa-5x" onClick={prevSlide}></i>
        <i className="fa fa-angle-right fa-5x" onClick={nextSlide}></i>
      </div>
    </div>
  )
}

export default Carousel