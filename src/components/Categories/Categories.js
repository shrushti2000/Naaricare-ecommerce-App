import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { StateContext } from '../../Context'

const Categories = () => {
    const {state,dispatch}=useContext(StateContext)
  return (
    <>
     <div class="featured-category-section flex-hz flex-wrap">
    {state.categories.map(item=>{
        return(
            <>
             <Link to="/productlistingpage" className='links' onClick={(e) => dispatch({ type: 'SET_CATEGORY', payload:item.categoryName },dispatch({type:'SET_SUB_CATEGORY',payload:null}))}>
          <div class="category">
            <img class="category-img img-responsive" src={item.img} alt="category-img" />
            <div className='category-text'> <h5 class="category-title-text">{item.categoryName}</h5><p className='category-text-secondary'>{item.description}</p></div>
          </div>
        </Link>
            </>
        )
    })}
       
        {/* <Link to="/productlistingpage" className='links' onClick={(e) => dispatch({ type: 'SET_CATEGORY', payload: "Makeup" })}>
          <div class="category">
            <img class="category-img img-responsive" src={categoryImage3} alt="makeup-category-img" />
            <div className='category-text'> <h5 class="category-title-text">Makeup</h5><p className='category-text-secondary'>Get a fresh look that lasts whole day with our makeup products at most affordable prices!</p></div>
          </div>
        </Link>
        <Link to="/productlistingpage" className='links' onClick={(e) => dispatch({ type: 'SET_CATEGORY', payload: "Haircare" })}>
          <div class="category">
            <img class="category-img img-responsive" src={categoryImage4} alt="haircare-category-img" />
            <div className='category-text'><h5 class="category-title-text">Hair Care</h5><p className='category-text-secondary'>Buy hair care products now on Naaricare at great deals!</p></div>
          </div>
        </Link>
        <Link to="/productlistingpage" className='links' onClick={(e) => dispatch({ type: 'SET_CATEGORY', payload: "Bodycare" })} >
          <div class="category">
            <img class="category-img img-responsive" src={categoryImage5} alt="bodycare-category-img"/>
            <div className='category-text'> <h5 class="category-title-text">Body care</h5><p className='category-text-secondary'>We bring bodycare products at best prices.</p></div>
          </div>
        </Link>
        <Link to="/productlistingpage" className='links' onClick={(e) => dispatch({ type: 'SET_CATEGORY', payload: "MenstrualHygiene" })}>
          <div class="category">
            <img class="category-img img-responsive" src={categoryImage2} alt="menstrual-hygiene-category-img"/>
            <div className='category-text'> <h5 class="category-title-text">Menstrual Hygiene</h5><p className='category-text-secondary'>Buy Menstrual Hygiene care products at most affordable prices now.</p></div>
          </div>
        </Link> */}
      </div>
    </>
  )
}

export default Categories