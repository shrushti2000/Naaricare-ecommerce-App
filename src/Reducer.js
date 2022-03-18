import React from 'react'

const stateReducer = (state,action) => {
 switch(action.type){
     case 'SET_PRODUCTS':return {...state,products:action.payload}
     case 'SET_PRICE_RANGE':return {...state,priceRange:action.payload}
     case 'SET_SORT_TYPE':return {...state,sortBy:action.payload}
     default:return state
 }

}

export default stateReducer