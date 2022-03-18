import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import TopBar from "./components/TopBar/TopBar";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <>
      <TopBar />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </>
  );
}
export default App;
