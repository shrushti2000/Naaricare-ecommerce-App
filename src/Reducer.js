import React from 'react'

const stateReducer = (state,action) => {
 switch(action.type){
     case 'SET_PRODUCTS':return {...state,products:action.payload}
     default:return state
 }

}

export default stateReducer