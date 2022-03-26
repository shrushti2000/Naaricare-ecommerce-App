import React from 'react'
import { useReducer, useEffect } from 'react';
import { createContext } from 'react';
import stateReducer from './Reducer';


export const StateContext = createContext();

const Context = ({ children }) => {

  const encodedToken = localStorage.getItem('token')
 

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
    wishlist:[]
  })

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/user/cart', {
          method: "GET", headers: {
            "authorization": encodedToken,
            "Content-type": "application/json; charset=UTF-8"
          }
        })
        const data = await res.json()

        dispatch({ type: 'SET_CART', payload: data.cart })

      } catch (e) {
        console.log(e)
      }
    };
    fetchData();
  }, [state.cart])

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/user/wishlist', {
          method: "GET", headers: {
            "authorization": encodedToken,
            "Content-type": "application/json; charset=UTF-8"
          }
        })
        const data = await res.json()

        dispatch({ type: 'SET_WISHLIST', payload: data.wishlist })

      } catch (e) {
        console.log(e)
      }
    };
    fetchData();
  }, [state.wishlist])


  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  )
}

export default Context;