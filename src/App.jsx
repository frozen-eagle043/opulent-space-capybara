import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
// import { useState, useEffect } from "react";
function App() {

  return (
    <Router>
      <div>
        {/* {<Navbar />} */}
        <Home/>
        {/* Define your routes and components here */}
      </div>
    </Router>
  );
}

export default App;
