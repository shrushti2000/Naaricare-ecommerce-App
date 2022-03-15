import { useEffect, useState } from "react";
import "./App.css";
import logo from "./logo.png";

function App() {
  const [prd,setPrds]=useState([]);
  useEffect(()=>{
    fetch('/api/products')
    .then(res=>res.json())
    .then(data=>setPrds(data.products))
  },[])
  return (
    <div className="App">
      {prd.map(item=><p>{item.title}</p>)}
      <header className="App-header">
        <img src={logo} alt="mockBee logo" width="180" height="180" />
        <h1 className="brand-title">
          Welcome to <span>mockBee!</span>
        </h1>
        <p className="brand-description">
          Get started by editing <code>src/App.js</code>
        </p>
        <div className="links">
          <a
            href="https://mockbee.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Explore mockBee
          </a>
          <a
            href="https://mockbee.netlify.app/docs/api/introduction"
            target="_blank"
            rel="noreferrer"
          >
            API Documentation
          </a>
          <a
            href="https://github.com/neogcamp/mockBee"
            target="_blank"
            rel="noreferrer"
          >
            Contribute
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
