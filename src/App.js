import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Products from "./components/Products";
import Services from "./components/Services";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Products />
      <Services />
      {/* <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
