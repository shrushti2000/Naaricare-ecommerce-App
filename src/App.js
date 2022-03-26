import { Route, Routes } from "react-router-dom";
import { useContext,useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TopBar from "./components/TopBar/TopBar";
import { StateContext } from "./Context";
import CartPage from "./pages/CartPage/CartPage";
import HomePage from "./pages/HomePage/HomePage";
import ProductListingPage from "./pages/ProductListingPage/ProductListingPage";
import Signin from "./pages/Signin/Signin";
import WishlistPage from "./pages/WishlistPage/WishlistPage";

function App() {
  const encodedToken = localStorage.getItem('token')
  const {state,dispatch}=useContext(StateContext)
  

  return (
    <>
      <TopBar />
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/productlistingpage" element={<ProductListingPage/>}/>
        <Route exact path="/signin" element={<Signin/>}/>
        <Route exact path="/cartpage" element={<CartPage/>}/>
        <Route exact path="/wishlistpage" element={<WishlistPage/>}/>
       </Routes>
    </>
  );
}
export default App;
