import React from 'react'
import SubHeader from '../../components/SubHeader/SubHeader'
import Carousel from '../../components/Carousel/Carousel'
import brandImage1 from '../../assets/Images/loreal_logo.jpg'
import brandImage2 from '../../assets/Images/lakme_logo.jpg'
import brandImage4 from '../../assets/Images/maybelline_logo.png'
import brandImage5 from '../../assets/Images/mamaearth-logo.jpg'
import brandImage6 from '../../assets/Images/wow-logo.png'
import brandImage7 from '../../assets/Images/Wishper_logo.png'
import offerImage1 from '../../assets/Images/offerImage1.jpg'
import offerImage2 from '../../assets/Images/offerImage2.jpg'
import { Link } from 'react-router-dom'
import './HomePage.css'
import Footer from '../../components/Footer/Footer'
import { useContext,useEffect } from 'react'
import { StateContext } from '../../Context'
import Categories from '../../components/Categories/Categories'

const HomePage = () => {
 
  const {state,dispatch}=useContext(StateContext)
 


  useEffect(()=>{
    async function fetchData() {
      try {
        const res = await fetch('/api/categories', { method: "GET" })
        const data = await res.json()
        dispatch({ type: 'SET_CATEGORIES', payload: data.categories })
        } catch (e) {
        console.log(e)
      }
    };
    fetchData();
  },[])
  return (
    <>

      <SubHeader />
      <Carousel />
      <h5 className='sub-heading'>Categories for you</h5>
     <Categories/>
      <h5 className='sub-heading'>Offers you won't miss!</h5>
      <div className='offers-section'>
        <img className="offer-img" src={offerImage1} alt="offer-img-1"/>
        <img className="offer-img" src={offerImage2} alt="offer-img-2"/>
      </div>
      <h3 className='sub-heading'>Featured Top Brands</h3>
      <div className='brands-section'>
        <Link to="/productlistingpage"><img className='brand-img' src={brandImage1} alt="brand-img" onClick={(e) => dispatch({ type: 'SET_BRAND', payload: "L'Oreal" }, dispatch({ type: 'SET_SUB_CATEGORY', payload: null }))}/></Link>
        <Link to="/productlistingpage"><img className='brand-img' src={brandImage2} alt="brand-img" onClick={(e) => dispatch({ type: 'SET_BRAND', payload: "Lakme" }, dispatch({ type: 'SET_SUB_CATEGORY', payload: null }))} /></Link>
        <Link to="/productlistingpage"><img className='brand-img' src={brandImage4} alt="brand-img" onClick={(e) => dispatch({ type: 'SET_BRAND', payload: "Maybelline" }, dispatch({ type: 'SET_SUB_CATEGORY', payload: null }))} /></Link>
        <Link to="/productlistingpage"><img className='brand-img' src={brandImage7} alt="brand-img" onClick={(e) => dispatch({ type: 'SET_BRAND', payload: "Whisper" }, dispatch({ type: 'SET_SUB_CATEGORY', payload: null }))}/></Link>
        <Link to="/productlistingpage"><img className='brand-img' src={brandImage5} alt="brand-img" onClick={(e) => dispatch({ type: 'SET_BRAND', payload: "Mamaearth" }, dispatch({ type: 'SET_SUB_CATEGORY', payload: null }))} /></Link>
        <Link to="/productlistingpage"><img className='brand-img' src={brandImage6} alt="brand-img" onClick={(e) => dispatch({ type: 'SET_BRAND', payload: "Wow" }, dispatch({ type: 'SET_SUB_CATEGORY', payload: null }))}/></Link>
      
      </div>
      <Footer />
    </>
  )
}

export default HomePage