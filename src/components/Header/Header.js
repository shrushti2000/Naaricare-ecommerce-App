import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { StateContext } from '../../Context'
import Searchbar from '../Searchbar/Searchbar'
import './Header.css'
import { AuthContext } from '../../AuthProvider'


const Header = () => {
  const {state}=useContext(StateContext)
  const {token,setToken}=useContext(AuthContext)
 
  let navigate = useNavigate();
  const handleLogout=()=>{
   localStorage.clear()
    setToken(undefined)
    navigate('/')
  }

  return (
    <>
      <div class="navigation-container flex-hz">
        <div class="navigation-item-1">
          <h5 class="lib-name-1">Naari <span class="lib-name-2">Care</span></h5>
        </div>
        <i class="fa fa-bars"></i>
        <Searchbar />
       {token===undefined ? <>
       <div class="navigation-item-3 flex-hz">
          <Link to="/signin"> <button class="btn btn-primary">Signin</button></Link>
          <Link to="/signup"> <button class="btn btn-primary">Signup</button></Link>
       
          <i class="fa fa-search search-icon-responsive"></i>
        </div>
       </>:<>
        <div class="navigation-item-3 flex-hz">
           <button class="btn btn-primary" onClick={handleLogout}>Logout</button>
           <Link to="/cartpage"><i className="fa fa-shopping-cart"><span class="badge-w-icon">{state.cart.length}</span></i></Link>
          <Link to="/wishlistpage" ><i class="fa fa-heart"><span class="badge-w-icon">{state.wishlist.length}</span></i></Link>
          <i class="fa fa-search search-icon-responsive"></i>
        </div>
       </>}
      </div>
    </>
  )
}

export default Header