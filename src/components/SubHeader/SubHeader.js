import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './SubHeader.css'

const SubHeader = () => {
    const [makeupSubheaderDropdown,showMakeupSubheaderDropdown]=useState(false)
    const [bodyCareSubheaderDropdown,showBodyCareSubheaderDropdown]=useState(false)
    const [skinCareSubheaderDropdown,showSkinCareSubheaderDropdown]=useState(false)
    const [hairCareSubheaderDropdown,showHairCareSubheaderDropdown]=useState(false)
    const [menstrualHygieneSubheaderDropdown,showMenstrualHygieneSubheaderDropdown]=useState(false)
  return (
    <>
    <div className='subheader-container'>
        <div className='subheader-section' onMouseLeave={(e)=>showMakeupSubheaderDropdown(!makeupSubheaderDropdown)}>
            <h5 className='subheader-title' onMouseOver={(e)=>showMakeupSubheaderDropdown(!makeupSubheaderDropdown)} >Makeup</h5>
            <div className='subheader-dropdown-makeup' style={{display:`${makeupSubheaderDropdown? 'flex':'none'}`}} >
                <p className='subheader-items'>Lipstick</p>
                <p className='subheader-items'>Foundation</p>
                <p className='subheader-items'>Eyeshadow</p>
                <p className='subheader-items'>Mascara</p>
            </div>
           
        </div>
        <div className='subheader-section' onMouseLeave={(e)=>showBodyCareSubheaderDropdown(!bodyCareSubheaderDropdown)}>
            <h5 className='subheader-title' onMouseOver={(e)=>showBodyCareSubheaderDropdown(!bodyCareSubheaderDropdown)} onMouseLeave={(e)=>showBodyCareSubheaderDropdown(!bodyCareSubheaderDropdown)}>Body care</h5>
            <div className='subheader-dropdown-skincare' style={{display:`${bodyCareSubheaderDropdown? 'flex':'none'}`}} >
                <p className='subheader-items'>Body Lotions</p>
                <p className='subheader-items'>Body wash</p>
        </div>
           
        </div>
        <div className='subheader-section' onMouseLeave={(e)=>showHairCareSubheaderDropdown(!hairCareSubheaderDropdown)}>
            <h5 className='subheader-title' onMouseOver={(e)=>showHairCareSubheaderDropdown(!hairCareSubheaderDropdown)} onMouseLeave={(e)=>showHairCareSubheaderDropdown(!hairCareSubheaderDropdown)}>hair care</h5>
            <div className='subheader-dropdown-haircare' style={{display:`${hairCareSubheaderDropdown? 'flex':'none'}`}} >
                <p className='subheader-items'>Shampoos</p>
                <p className='subheader-items'>Hair oils</p>
                
            </div>
           
        </div>
        <div className='subheader-section' onMouseLeave={(e)=>showSkinCareSubheaderDropdown(!skinCareSubheaderDropdown)}>
            <h5 className='subheader-title' onMouseOver={(e)=>showSkinCareSubheaderDropdown(!skinCareSubheaderDropdown)} onMouseLeave={(e)=>showSkinCareSubheaderDropdown(!skinCareSubheaderDropdown)}>Skin care</h5>
            <div className='subheader-dropdown-haircare' style={{display:`${skinCareSubheaderDropdown? 'flex':'none'}`}} >
                <p className='subheader-items'>face Wash</p>
                <p className='subheader-items'>Sun Screen</p>

                <p className='subheader-items'>Moisturizers</p>
            </div>
           
        </div>
        <div className='subheader-section' onMouseLeave={(e)=>showMenstrualHygieneSubheaderDropdown(!menstrualHygieneSubheaderDropdown)}>
            <h5 className='subheader-title' onMouseOver={(e)=>showMenstrualHygieneSubheaderDropdown(!menstrualHygieneSubheaderDropdown)} onMouseLeave={(e)=>showMenstrualHygieneSubheaderDropdown(!menstrualHygieneSubheaderDropdown)}>Menstrual Health</h5>
            <div className='subheader-dropdown-menstrual-hygiene' style={{display:`${menstrualHygieneSubheaderDropdown? 'flex':'none'}`}}  >
                <p className='subheader-items'>Sanitary pads</p>
                <p className='subheader-items'>Tampoons</p>
                
            </div>
           
        </div>
         <div className='subheader-section'>
           <Link to="/productlistingpage"><h5 className='subheader-title'>All Products</h5></Link> 
            
        </div>
    </div>
    </>
  )
}

export default SubHeader