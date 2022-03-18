import React from 'react'
import { useReducer } from 'react';
import { createContext } from 'react';

export const StateContext=createContext();

const Context = ({children}) => {
    const [state,dispatch]=useReducer(stateReducer,{
        products:[],
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