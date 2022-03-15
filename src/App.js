import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import logo from "./logo.png";
import HomePage from "./pages/HomePage/HomePage";

function App() {

  return (
    <>
    <Header/>
   
   <Routes>
     <Route path="/" element={<HomePage/>}/>
   </Routes>
    </>
    
  );
}

export default App;
