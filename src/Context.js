import React from 'react'
import { useReducer, useEffect } from 'react';
import { createContext } from 'react';
import stateReducer from './Reducer';


export const StateContext = createContext();

const Context = ({ children }) => {

  const [state, dispatch] = useReducer(stateReducer, {
    products: [],
    categories: [],
    sortBy: null,
    priceRange: 0,
    rating: 0,
    sortByFilters: {
      sortByCategory: [],
      sortByBrands: []
    },
    subCategory: null,
    cart: [],
   
  })




  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  )
}

export default Context;