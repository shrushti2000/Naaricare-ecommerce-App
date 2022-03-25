import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import TopBar from "./components/TopBar/TopBar";
import CartPage from "./pages/CartPage/CartPage";
import HomePage from "./pages/HomePage/HomePage";
import ProductListingPage from "./pages/ProductListingPage/ProductListingPage";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <>
      <TopBar />
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/signin" element={<Signin/>} />
        <Route exact path="/productlistingpage" element={<ProductListingPage/>}/>
        <Route exact path="/cartPage" element={<CartPage/>}/>
      </Routes>
    </>
  );
}
export default App;
