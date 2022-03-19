import React from 'react'
import { useReducer } from 'react';
import { createContext } from 'react';
import stateReducer from './Reducer';

export const StateContext=createContext();

const Context = ({children}) => {
    const [state,dispatch]=useReducer(stateReducer,{
        products:[],
        categories:[],
        sortBy:null,
        priceRange:0,
        rating:0,
        sortByFilters:{
            sortByCategory:[]
        }
    })

  return (
    <StateContext.Provider value={{state,dispatch}}>
        {children}
    </StateContext.Provider>
  )
}

export default Context;