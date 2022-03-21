import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SubHeader from "./components/SubHeader/SubHeader";
import TopBar from "./components/TopBar/TopBar";
import HomePage from "./pages/HomePage/HomePage";
import ProductListingPage from "./pages/ProductListingPage/ProductListingPage";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <>
      <TopBar />
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/productlistingpage" element={<ProductListingPage/>}/>
      </Routes>
    </>
  );
}
export default App;
