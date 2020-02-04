import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import "./css/footer.css"; 
import Footer from "./components/Footer";
import Home from "./components/Home"; 
import Navbar from "./components/Navbar"; 

const App = () => {

  return(
    <>
    <div className="main-main-container">
      <Navbar />
      <div className="main-home-container">
        <div>
          <Route exact path="/" component={Home} />
        </div>
      </div>
        <Footer />
    </div>
    </>
  );
};

export default App;
