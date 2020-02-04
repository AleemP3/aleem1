import React from "react"
import { Link } from "react-router-dom"; 
import "../css/navbar.css"

const Navbar = () => {

  return(
    <>
      <div className="main-navbar-container">
        <div className="navbar-links-containers">
          <div className="home-link"><Link to="/" className="links">Home</Link></div>
        </div>
      </div>
    </>
  );
};

export default Navbar